(() => {
  "use strict";

  if (typeof window.structuredClone !== "function") {
    window.structuredClone = (value) => JSON.parse(JSON.stringify(value));
  }
  if (!Array.prototype.at) {
    Object.defineProperty(Array.prototype, "at", {
      value(index) {
        const resolved = Math.trunc(Number(index)) || 0;
        return this[resolved < 0 ? this.length + resolved : resolved];
      },
      configurable: true,
      writable: true,
    });
  }
  if (!String.prototype.replaceAll) {
    Object.defineProperty(String.prototype, "replaceAll", {
      value(search, replacement) {
        if (search instanceof RegExp) {
          if (!search.global) throw new TypeError("replaceAll requires a global RegExp");
          return this.replace(search, replacement);
        }
        return this.split(String(search)).join(String(replacement));
      },
      configurable: true,
      writable: true,
    });
  }

  const DATA = window.BLUEPRINT_DATA;
  if (!DATA || !Array.isArray(DATA.terms)) {
    document.body.innerHTML = "<main style='padding:40px;font-family:sans-serif'><h1>词库数据未加载</h1><p>请确认 data.js 与 index.html 位于同一文件夹。</p></main>";
    return;
  }

  document.documentElement.dataset.runtime = window.AndroidBridge ? "android" : "web";

  const STORAGE_KEY = "ue5-blueprint-memory-lab-v1";
  const terms = DATA.terms;
  const termById = new Map(terms.map((term) => [term.id, term]));
  const categoryByName = new Map(DATA.categories.map((category) => [category.name, category]));
  const scenarioById = new Map(DATA.scenarios.map((scenario) => [scenario.id, scenario]));
  const tutorials = DATA.tutorials || [];
  const groupById = new Map(DATA.conceptGroups.map((group) => [group.id, group]));
  const wordByEn = new Map((DATA.wordGlossary || []).map((word) => [word.en, word]));
  const REVIEW_SCHEDULE = DATA.reviewSchedule;
  const MAX_STEP = REVIEW_SCHEDULE.length - 1;
  const APPEARANCE_PALETTES = {
    blueprint: { name: "深海蓝图", note: "沉稳专注", colorA: "#0c2437", colorB: "#75d2d2", sidebarB: "#0a1d2d" },
    glacier: { name: "冰川青", note: "通透冷静", colorA: "#0b3647", colorB: "#57cbe0", sidebarB: "#082936" },
    jade: { name: "翡翠绿", note: "柔和自然", colorA: "#143b32", colorB: "#73d0ae", sidebarB: "#0d2923" },
    iris: { name: "鸢尾紫", note: "创意夜间", colorA: "#24223f", colorB: "#b3a8ff", sidebarB: "#17162e" },
    graphite: { name: "雾银灰", note: "低刺激阅读", colorA: "#27343a", colorB: "#a8c1cd", sidebarB: "#192529" },
    custom: { name: "自定义", note: "自选侧栏与强调色", colorA: "#0c2437", colorB: "#2d6cdf", sidebarB: "#071725" },
  };
  const GLASS_MODES = new Set(["off", "soft", "strong"]);
  const GLASS_LABELS = { off: "无磨砂玻璃", soft: "轻磨砂玻璃", strong: "深磨砂玻璃" };

  const pageMeta = {
    today: { title: "今日学习", kicker: "TODAY" },
    wordlist: { title: "今日词单", kicker: "TODAY LIST" },
    learned: { title: "已学与复习", kicker: "MEMORY LIBRARY" },
    library: { title: "词库检索", kicker: "LIBRARY" },
    scenarios: { title: "场景串联", kicker: "SCENARIOS" },
    tutorials: { title: "教程查询", kicker: "EPIC LEARNING" },
    memory: { title: "记忆路线", kicker: "MEMORY ROUTE" },
  };

  const defaultState = {
    version: 2,
    settings: {
      newLimit: 10,
      theme: "light",
      palette: "blueprint",
      glass: "off",
      customSidebar: "#0c2437",
      customAccent: "#2d6cdf",
      speechRate: 1,
      speechVoiceURI: "",
      autoSpeak: false,
      speechEngine: "youdao",
    },
    progress: {},
    memoryNotes: {},
    session: null,
    activityDays: [],
    deferredNew: [],
  };

  const ui = {
    route: "today",
    revealed: false,
    hideNewAnswer: false,
    termId: null,
    scenarioId: DATA.scenarios[0]?.id || "",
    wordlistScope: "all",
    learned: {
      scope: "all",
      query: "",
    },
    library: {
      query: "",
      category: "all",
      status: "all",
      limit: 24,
    },
    tutorials: {
      query: "",
      category: "all",
      level: "all",
      type: "all",
      track: "all",
      intent: "all",
    },
  };

  const viewRoot = document.getElementById("view-root");
  const appearanceDialog = document.getElementById("appearance-dialog");
  const appearancePaletteGrid = document.getElementById("appearance-palette-grid");
  const termDialog = document.getElementById("term-dialog");
  const termDialogContent = document.getElementById("term-dialog-content");
  const sidebar = document.querySelector(".sidebar");
  const mobileMenu = document.getElementById("mobile-menu");
  const themeToggle = document.getElementById("theme-toggle");
  let speechVoices = [];
  let lastAutoSpokenTermId = null;
  let youdaoPlaybackToken = 0;
  let youdaoAudio = null;
  let youdaoFallbackNotified = false;

  let state = loadState();
  applyTheme();
  ensureSession();

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved || typeof saved !== "object") return structuredClone(defaultState);
      const settings = { ...defaultState.settings, ...(saved.settings || {}) };
      if (!APPEARANCE_PALETTES[settings.palette]) settings.palette = "blueprint";
      if (!GLASS_MODES.has(settings.glass)) settings.glass = "off";
      settings.customSidebar = normalizeAccent(settings.customSidebar, "#0c2437");
      settings.customAccent = normalizeAccent(settings.customAccent);
      if (Number(saved.version || 1) < 2 && Number(settings.speechRate) === 0.9) {
        settings.speechRate = 1;
      }
      return {
        ...structuredClone(defaultState),
        ...saved,
        version: 2,
        settings,
        progress: normalizeProgressMap(saved.progress),
        memoryNotes: saved.memoryNotes && typeof saved.memoryNotes === "object" ? saved.memoryNotes : {},
        activityDays: Array.isArray(saved.activityDays) ? saved.activityDays : [],
        deferredNew: Array.isArray(saved.deferredNew) ? saved.deferredNew : [],
      };
    } catch {
      return structuredClone(defaultState);
    }
  }

  function normalizeProgressMap(progress) {
    if (!progress || typeof progress !== "object") return {};
    const normalized = {};
    for (const [id, raw] of Object.entries(progress)) {
      if (!raw || typeof raw !== "object") continue;
      const item = { ...raw };
      if (!item.dueAt) {
        const fallback = item.due ? `${item.due}T09:00:00` : new Date().toISOString();
        const parsed = new Date(fallback);
        item.dueAt = Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
      }
      if (!Number.isFinite(Number(item.intervalMinutes))) {
        item.intervalMinutes = Math.max(1, Math.round(Number(item.interval || 0) * 1440));
      }
      item.due = dateKey(new Date(item.dueAt));
      item.lastRatedAt = item.lastRatedAt || (item.lastReviewed ? `${item.lastReviewed}T09:00:00.000Z` : null);
      normalized[id] = item;
    }
    return normalized;
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      toast("浏览器无法保存进度，请检查本地存储权限。");
    }
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function dateKey(date = new Date()) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function parseDateKey(key) {
    const [year, month, day] = String(key).split("-").map(Number);
    return new Date(year, month - 1, day, 12, 0, 0);
  }

  function addDays(key, amount) {
    const date = parseDateKey(key);
    date.setDate(date.getDate() + amount);
    return dateKey(date);
  }

  function dayDiff(fromKey, toKey) {
    const from = parseDateKey(fromKey);
    const to = parseDateKey(toKey);
    return Math.round((to - from) / 86400000);
  }

  function formatDateCN(key, weekday = false) {
    const date = parseDateKey(key);
    const text = `${date.getMonth() + 1}月${date.getDate()}日`;
    if (!weekday) return text;
    return `${text} · ${new Intl.DateTimeFormat("zh-CN", { weekday: "short" }).format(date)}`;
  }

  function isProgressDue(progress, now = Date.now()) {
    if (!progress?.dueAt) return false;
    const due = Date.parse(progress.dueAt);
    return Number.isFinite(due) && due <= now;
  }

  function dueDateKey(progress) {
    return progress?.dueAt ? dateKey(new Date(progress.dueAt)) : "";
  }

  function formatDueAt(progress) {
    if (!progress?.dueAt) return "尚未安排";
    const date = new Date(progress.dueAt);
    const today = dateKey();
    const dueDay = dateKey(date);
    const time = new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
    if (dueDay === today) return `${isProgressDue(progress) ? "现在到期" : "今天"} ${time}`;
    const tomorrow = addDays(today, 1);
    if (dueDay === tomorrow) return `明天 ${time}`;
    return `${date.getMonth() + 1}月${date.getDate()}日 ${time}`;
  }

  function scheduleLabel(minutes) {
    return REVIEW_SCHEDULE.find((item) => item.minutes === minutes)?.label
      || REVIEW_SCHEDULE.filter((item) => item.minutes <= minutes).at(-1)?.label
      || `${minutes} 分钟`;
  }

  function normalizeAccent(value, fallback = "#2d6cdf") {
    const text = String(value || "").trim();
    return /^#[0-9a-f]{6}$/i.test(text) ? text.toLowerCase() : fallback;
  }

  function hexToRgb(hex) {
    const clean = normalizeAccent(hex).slice(1);
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16),
    };
  }

  function rgbToHex({ r, g, b }) {
    return `#${[r, g, b].map((value) => Math.round(value).toString(16).padStart(2, "0")).join("")}`;
  }

  function mixHex(source, target, targetWeight) {
    const from = hexToRgb(source);
    const to = hexToRgb(target);
    const weight = Math.max(0, Math.min(1, targetWeight));
    return rgbToHex({
      r: from.r * (1 - weight) + to.r * weight,
      g: from.g * (1 - weight) + to.g * weight,
      b: from.b * (1 - weight) + to.b * weight,
    });
  }

  function relativeLuminance(hex) {
    const { r, g, b } = hexToRgb(hex);
    const channels = [r, g, b].map((value) => {
      const channel = value / 255;
      return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  }

  function contrastRatio(first, second) {
    const a = relativeLuminance(first);
    const b = relativeLuminance(second);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  }

  function accentContrast(hex) {
    return relativeLuminance(hex) > 0.48 ? "#0b2639" : "#ffffff";
  }

  function accessibleAccent(hex, background) {
    if (contrastRatio(hex, background) >= 4.5) return hex;
    const target = relativeLuminance(background) > 0.5 ? "#0f2c43" : "#ffffff";
    for (let step = 1; step <= 20; step += 1) {
      const candidate = mixHex(hex, target, step / 20);
      if (contrastRatio(candidate, background) >= 4.5) return candidate;
    }
    return target;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function applyTheme() {
    const theme = state.settings.theme === "dark" ? "dark" : "light";
    const palette = APPEARANCE_PALETTES[state.settings.palette] ? state.settings.palette : "blueprint";
    const glass = GLASS_MODES.has(state.settings.glass) ? state.settings.glass : "off";
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.palette = palette;
    root.dataset.glass = glass;
    ["--deep-blue", "--deep-blue-2", "--theme-accent", "--theme-accent-display",
      "--theme-accent-strong", "--theme-accent-soft", "--theme-accent-border", "--theme-accent-contrast",
      "--theme-sidebar-glow", "--theme-hero-tint"]
      .forEach((property) => root.style.removeProperty(property));
    if (palette === "custom") {
      const accent = normalizeAccent(state.settings.customAccent);
      const sidebar = normalizeAccent(state.settings.customSidebar, "#0c2437");
      const sidebarEnd = mixHex(sidebar, "#020a10", 0.28);
      const softTarget = theme === "dark" ? "#122430" : "#ffffff";
      const soft = mixHex(accent, softTarget, theme === "dark" ? 0.8 : 0.9);
      const strong = accessibleAccent(accent, "#ffffff");
      const display = accessibleAccent(accent, "#103149");
      const accentBorder = mixHex(accent, theme === "dark" ? "#294553" : "#ffffff", theme === "dark" ? 0.55 : 0.82);
      const { r, g, b } = hexToRgb(accent);
      root.style.setProperty("--deep-blue", sidebar);
      root.style.setProperty("--deep-blue-2", sidebarEnd);
      root.style.setProperty("--theme-accent", accent);
      root.style.setProperty("--theme-accent-display", display);
      root.style.setProperty("--theme-accent-strong", strong);
      root.style.setProperty("--theme-accent-soft", soft);
      root.style.setProperty("--theme-accent-border", accentBorder);
      root.style.setProperty("--theme-accent-contrast", accentContrast(accent));
      root.style.setProperty("--theme-sidebar-glow", `rgba(${r}, ${g}, ${b}, 0.2)`);
      root.style.setProperty("--theme-hero-tint", `rgba(${r}, ${g}, ${b}, 0.16)`);
    }
    const paletteName = APPEARANCE_PALETTES[palette].name;
    const themeColor = getComputedStyle(root).getPropertyValue("--deep-blue").trim();
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColor || "#0c2437");
    document.getElementById("theme-label").textContent = "外观";
    document.getElementById("appearance-palette-label").textContent = paletteName;
    document.getElementById("appearance-preview-name").textContent =
      `${paletteName} · ${theme === "dark" ? "深色" : "浅色"}`;
    document.getElementById("appearance-preview-glass").textContent = GLASS_LABELS[glass];
    themeToggle?.setAttribute("aria-label", `打开外观设置，当前为${paletteName}${theme === "dark" ? "深色" : "浅色"}模式`);
    syncAppearanceControls();
    window.AndroidBridge?.setDarkMode?.(theme === "dark");
  }

  function syncAppearanceControls() {
    const currentPalette = APPEARANCE_PALETTES[state.settings.palette]
      ? state.settings.palette
      : "blueprint";
    if (appearancePaletteGrid && !appearancePaletteGrid.children.length) {
      appearancePaletteGrid.innerHTML = Object.entries(APPEARANCE_PALETTES)
        .map(([key, palette]) => `
          <button
            class="appearance-palette-card"
            type="button"
            data-palette="${key}"
            aria-pressed="false"
          >
            <span class="appearance-palette-orbit" style="--swatch-a:${palette.colorA};--swatch-b:${palette.colorB}" aria-hidden="true"></span>
            <span class="appearance-palette-copy">
              <strong>${escapeHtml(palette.name)}</strong>
              <small>${escapeHtml(palette.note)}</small>
            </span>
            <span class="appearance-palette-check" aria-hidden="true"></span>
          </button>
        `)
        .join("");
    }
    appearancePaletteGrid?.querySelectorAll("[data-palette]").forEach((button) => {
      const active = button.dataset.palette === currentPalette;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-appearance-theme]").forEach((button) => {
      const active = button.dataset.appearanceTheme === state.settings.theme;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-appearance-glass]").forEach((button) => {
      const active = button.dataset.appearanceGlass === state.settings.glass;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const customInput = document.getElementById("custom-accent");
    if (customInput) customInput.value = normalizeAccent(state.settings.customAccent);
    const customValue = document.getElementById("custom-accent-value");
    if (customValue) customValue.textContent = normalizeAccent(state.settings.customAccent).toUpperCase();
    const customSidebarInput = document.getElementById("custom-sidebar");
    if (customSidebarInput) customSidebarInput.value = normalizeAccent(state.settings.customSidebar, "#0c2437");
    const customSidebarValue = document.getElementById("custom-sidebar-value");
    if (customSidebarValue) customSidebarValue.textContent = normalizeAccent(state.settings.customSidebar, "#0c2437").toUpperCase();
    const customSwatch = appearancePaletteGrid?.querySelector('[data-palette="custom"] .appearance-palette-orbit');
    if (customSwatch) {
      customSwatch.style.setProperty("--swatch-a", normalizeAccent(state.settings.customSidebar, "#0c2437"));
      customSwatch.style.setProperty("--swatch-b", normalizeAccent(state.settings.customAccent));
    }
    const supportsGlass = !window.CSS?.supports
      || CSS.supports("backdrop-filter", "blur(1px)")
      || CSS.supports("-webkit-backdrop-filter", "blur(1px)");
    document.documentElement.classList.toggle("no-backdrop", !supportsGlass);
    const supportNote = document.getElementById("appearance-support-note");
    if (supportNote) supportNote.hidden = supportsGlass;
  }

  function openAppearanceDialog() {
    if (!appearanceDialog || appearanceDialog.open) return;
    sidebar?.classList.remove("open");
    mobileMenu?.setAttribute("aria-expanded", "false");
    syncAppearanceControls();
    appearanceDialog.showModal();
    requestAnimationFrame(() => {
      appearanceDialog.querySelector('[data-palette][aria-pressed="true"]')?.focus();
    });
  }

  function closeAppearanceDialog() {
    if (appearanceDialog?.open) appearanceDialog.close();
  }

  function refreshSpeechVoices() {
    if (!("speechSynthesis" in window)) {
      speechVoices = [];
      return;
    }
    speechVoices = window.speechSynthesis
      .getVoices()
      .filter((voice) => /^en[-_]/i.test(voice.lang) || /^en$/i.test(voice.lang));
    const select = document.getElementById("speech-voice");
    if (!select) return;
    if (!speechVoices.length) {
      select.innerHTML = "<option value=\"\">当前浏览器没有英文语音</option>";
      select.disabled = true;
      return;
    }
    select.disabled = false;
    const selected = state.settings.speechVoiceURI
      || speechVoices.find((voice) => voice.default)?.voiceURI
      || speechVoices[0].voiceURI;
    select.innerHTML = speechVoices
      .map((voice) => `<option value="${escapeHtml(voice.voiceURI)}" ${voice.voiceURI === selected ? "selected" : ""}>${escapeHtml(voice.name)} · ${escapeHtml(voice.lang)}</option>`)
      .join("");
    if (!state.settings.speechVoiceURI) {
      state.settings.speechVoiceURI = selected;
      saveState();
    }
    select.disabled = state.settings.speechEngine !== "system";
  }

  function youdaoWordUrl(word) {
    return `https://dict.youdao.com/result?word=${encodeURIComponent(String(word).toLowerCase())}&lang=en`;
  }

  function youdaoAudioUrl(text) {
    return `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&type=1`;
  }

  function clearSpeakingButtons() {
    document.querySelectorAll(".speak-button.is-speaking").forEach((button) => {
      button.classList.remove("is-speaking");
      button.setAttribute("aria-pressed", "false");
    });
  }

  function speakSystem(text, trigger = null) {
    if (window.AndroidBridge?.speakEnglish) {
      const clean = String(text || "").replace(/[()]/g, " ").replace(/\s+/g, " ").trim();
      if (!clean) return;
      clearSpeakingButtons();
      trigger?.classList.add("is-speaking");
      trigger?.setAttribute("aria-pressed", "true");
      window.AndroidBridge.speakEnglish(clean, Math.min(1.5, Math.max(0.5, Number(state.settings.speechRate) || 1)));
      window.setTimeout(clearSpeakingButtons, 1800);
      return;
    }
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      toast("当前浏览器不支持语音朗读，请使用最新版 Edge 或 Chrome。");
      return;
    }
    const clean = String(text || "").replace(/[()]/g, " ").replace(/\s+/g, " ").trim();
    if (!clean) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(clean);
    const voice = speechVoices.find((item) => item.voiceURI === state.settings.speechVoiceURI)
      || speechVoices.find((item) => /^en[-_]US/i.test(item.lang))
      || speechVoices[0];
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang || "en-US";
    utterance.rate = Math.min(1.5, Math.max(0.5, Number(state.settings.speechRate) || 0.9));
    utterance.pitch = 1;
    trigger?.classList.add("is-speaking");
    trigger?.setAttribute("aria-pressed", "true");
    const clearState = () => {
      trigger?.classList.remove("is-speaking");
      trigger?.setAttribute("aria-pressed", "false");
    };
    utterance.onend = clearState;
    utterance.onerror = clearState;
    window.speechSynthesis.speak(utterance);
  }

  function playYoudaoAudio(text) {
    return new Promise((resolve, reject) => {
      const audio = new Audio(youdaoAudioUrl(text));
      youdaoAudio = audio;
      audio.preload = "auto";
      const timeout = window.setTimeout(() => {
        audio.pause?.();
        reject(new Error("有道发音请求超时"));
      }, 5000);
      const finish = (callback, value) => {
        window.clearTimeout(timeout);
        callback(value);
      };
      audio.addEventListener("ended", () => finish(resolve), { once: true });
      audio.addEventListener("error", () => finish(reject, new Error("有道发音不可用")), { once: true });
      audio.play().catch((error) => finish(reject, error));
    });
  }

  async function speakYoudao(text, trigger = null) {
    const clean = String(text || "").replace(/[()]/g, " ").replace(/\s+/g, " ").trim();
    if (!clean) return;
    const token = ++youdaoPlaybackToken;
    youdaoAudio?.pause?.();
    clearSpeakingButtons();
    trigger?.classList.add("is-speaking");
    trigger?.setAttribute("aria-pressed", "true");
    try {
      await playYoudaoAudio(clean);
      if (token === youdaoPlaybackToken) clearSpeakingButtons();
    } catch {
      if (token !== youdaoPlaybackToken) return;
      if (!youdaoFallbackNotified) {
        youdaoFallbackNotified = true;
        toast("有道发音暂时不可用，已切换到系统英文语音");
      }
      speakSystem(clean, trigger);
    }
  }

  function speakText(text, trigger = null) {
    const clean = String(text || "").replace(/[()]/g, " ").replace(/\s+/g, " ").trim();
    if (!clean) return;
    if (state.settings.speechEngine === "youdao") {
      speakYoudao(clean, trigger);
      return;
    }
    youdaoPlaybackToken += 1;
    youdaoAudio?.pause?.();
    clearSpeakingButtons();
    speakSystem(clean, trigger);
  }

  function speakButtonMarkup(text, compact = false) {
    return `
      <button class="speak-button ${compact ? "is-compact" : ""}" type="button" data-speak="${escapeHtml(text)}" aria-label="朗读 ${escapeHtml(text)}" aria-pressed="false">
        <span class="speaker-glyph" aria-hidden="true"></span>
        ${compact ? "" : "<span>朗读</span>"}
      </button>
    `;
  }

  function scheduleAutoSpeak(term) {
    if (!state.settings.autoSpeak || !term || ui.route !== "today") return;
    if (lastAutoSpokenTermId === term.id) return;
    lastAutoSpokenTermId = term.id;
    window.setTimeout(() => {
      if (ui.route === "today" && Number(state.session?.currentId) === term.id) {
        speakText(term.en);
      }
    }, 250);
  }

  function currentTermState(termId) {
    return state.progress[String(termId)] || null;
  }

  function termStatus(term) {
    const progress = currentTermState(term.id);
    if (!progress) return { key: "new", label: "未学习" };
    if ((progress.step ?? -1) >= 4) return { key: "mastered", label: "长期记忆" };
    return { key: "learning", label: "学习中" };
  }

  function termTodayAction(term) {
    const progress = currentTermState(term.id);
    const completed = state.session?.completedIds?.includes(term.id);
    const inNew = state.session?.newIds?.includes(term.id);
    const inReview = state.session?.reviewIds?.includes(term.id);
    if (!progress) {
      return inNew
        ? { label: "已在今日词单", disabled: true }
        : { label: "+ 加入今日词单", disabled: false };
    }
    if (inNew || inReview) {
      return completed
        ? { label: "今日已完成", disabled: true }
        : { label: "已在今日复习", disabled: true };
    }
    return { label: "加入今日复习", disabled: false };
  }

  function phraseMarkup(term, compact = false) {
    if (!term.phrase?.parts?.length) return "";
    return `
      <div class="phrase-memory ${compact ? "is-compact" : ""}">
        <div class="phrase-label"><span>拆开记</span><small>${compact ? "词组组合" : "先记单词，再合起来理解节点"}</small></div>
        <div class="phrase-parts">
          ${term.phrase.parts.map((part) => `
            <span class="phrase-part-group">
              ${wordByEn.has(part.en)
                ? `<button class="phrase-part" type="button" data-word="${escapeHtml(part.en)}" aria-label="查询 ${escapeHtml(part.en)}：${escapeHtml(part.zh)}"><b>${escapeHtml(part.en)}</b><i>${escapeHtml(part.zh)}</i></button>`
                : `<a class="phrase-part phrase-external" href="${escapeHtml(youdaoWordUrl(part.en))}" target="_blank" rel="noopener noreferrer" aria-label="词库暂无 ${escapeHtml(part.en)}，跳转到有道词典查询"><b>${escapeHtml(part.en)}</b><i>有道查词 ↗</i></a>`}
              ${speakButtonMarkup(part.en, true)}
            </span>
          `).join('<span class="phrase-plus" aria-hidden="true">+</span>')}
        </div>
        ${compact ? "" : `<p class="phrase-combined"><span>组合含义</span>${escapeHtml(term.phrase.memory)}</p>`}
      </div>
    `;
  }

  function memoryAidMarkup(term) {
    if (!term.memoryAid) return "";
    const personalNote = state.memoryNotes?.[String(term.id)] || "";
    return `
      <details class="memory-aid">
        <summary>
          <span class="memory-aid-mark">记</span>
          <span class="memory-aid-heading">
            <strong>联想记忆与帮助方法</strong>
            <small>场景联想 · 三步记忆 · 自测问题 · 我的联想</small>
          </span>
          <span class="memory-aid-toggle">展开</span>
        </summary>
        <div class="memory-aid-body">
          <div class="memory-aid-item">
            <span>联想画面</span>
            <p>${escapeHtml(term.memoryAid.association)}</p>
          </div>
          <div class="memory-aid-item">
            <span>记忆方法</span>
            <p>${escapeHtml(term.memoryAid.method)}</p>
          </div>
          <div class="memory-aid-item is-check">
            <span>马上自测</span>
            <p>${escapeHtml(term.memoryAid.selfCheck)}</p>
          </div>
          <label class="personal-memory">
            <span>我的联想</span>
            <input type="text" data-memory-note="${term.id}" value="${escapeHtml(personalNote)}" placeholder="例如：把 Branch 想成岔路口…">
          </label>
        </div>
      </details>
    `;
  }

  function makeSession() {
    return {
      date: dateKey(),
      newIds: [],
      reviewIds: [],
      extraReviewIds: [],
      completedIds: [],
      ratings: [],
      currentId: null,
    };
  }

  function ensureSession() {
    const today = dateKey();
    if (!state.session || state.session.date !== today) {
      state.session = makeSession();
    }

    state.session.completedIds = uniqueIds(state.session.completedIds).filter((id) => {
      const progress = currentTermState(id);
      return progress && !isProgressDue(progress);
    });
    const completed = new Set(state.session.completedIds);
    const dueIds = terms
      .filter((term) => {
        const progress = currentTermState(term.id);
        return progress && isProgressDue(progress) && !completed.has(term.id);
      })
      .sort((a, b) => {
        const pa = currentTermState(a.id);
        const pb = currentTermState(b.id);
        return String(pa.dueAt).localeCompare(String(pb.dueAt));
      })
      .map((term) => term.id);

    state.session.extraReviewIds = uniqueIds(state.session.extraReviewIds)
      .filter((id) => !completed.has(id) && termById.has(id));
    state.session.reviewIds = uniqueIds([...dueIds, ...state.session.extraReviewIds]);

    let sessionNew = uniqueIds(state.session.newIds);
    while (sessionNew.length > state.settings.newLimit) {
      const removable = [...sessionNew].reverse().find((id) => !completed.has(id));
      if (removable == null) break;
      sessionNew.splice(sessionNew.indexOf(removable), 1);
    }

    const deferredIds = (state.deferredNew || [])
      .filter((item) => item && item.due <= today && termById.has(Number(item.id)))
      .filter((item) => !currentTermState(item.id))
      .sort((a, b) => String(a.due).localeCompare(String(b.due)))
      .map((item) => Number(item.id));
    const candidates = uniqueIds([
      ...deferredIds,
      ...terms.filter((term) => !currentTermState(term.id)).map((term) => term.id),
    ]);
    const selectedDeferred = new Set();
    const usedNew = new Set(sessionNew);
    for (const id of candidates) {
      if (sessionNew.length >= state.settings.newLimit) break;
      if (usedNew.has(id) || completed.has(id)) continue;
      sessionNew.push(id);
      usedNew.add(id);
      if (deferredIds.includes(id)) selectedDeferred.add(id);
    }
    state.session.newIds = sessionNew;
    state.session.completedIds = uniqueIds(state.session.completedIds);
    state.session.ratings = Array.isArray(state.session.ratings) ? state.session.ratings : [];
    if (selectedDeferred.size) {
      state.deferredNew = (state.deferredNew || []).filter((item) => !selectedDeferred.has(Number(item.id)));
    }
    saveState();
  }

  function uniqueIds(ids) {
    return [...new Set((ids || []).map(Number).filter(Number.isFinite))];
  }

  function getQueue() {
    const completed = new Set(state.session.completedIds);
    const reviewQueue = (state.session.reviewIds || []).filter((id) => {
      const progress = currentTermState(id);
      return !completed.has(id) && progress;
    });
    const newQueue = (state.session.newIds || []).filter((id) => !completed.has(id));
    return uniqueIds([...reviewQueue, ...newQueue]).filter((id) => termById.has(id));
  }

  function sessionTotal() {
    return uniqueIds([...(state.session.reviewIds || []), ...(state.session.newIds || [])]).length;
  }

  function setCurrentTerm() {
    const queue = getQueue();
    if (!queue.length) {
      state.session.currentId = null;
      ui.revealed = false;
      ui.hideNewAnswer = false;
      return null;
    }
    if (!queue.includes(Number(state.session.currentId))) {
      state.session.currentId = queue[0];
      ui.revealed = false;
      ui.hideNewAnswer = false;
      saveState();
      scheduleAutoSpeak(termById.get(Number(state.session.currentId)));
    }
    return termById.get(Number(state.session.currentId));
  }

  function getStats() {
    const values = Object.values(state.progress);
    const mastered = values.filter((item) => (item.step ?? -1) >= 4).length;
    const learning = values.filter((item) => (item.step ?? -1) >= 0 && (item.step ?? -1) < 4).length;
    const due = values.filter((item) => isProgressDue(item)).length;
    return {
      mastered,
      learning,
      due,
      touched: values.length,
      untouched: terms.length - values.length,
      streak: calculateStreak(),
    };
  }

  function calculateStreak() {
    const daySet = new Set(state.activityDays || []);
    let cursor = dateKey();
    if (!daySet.has(cursor)) cursor = addDays(cursor, -1);
    let count = 0;
    while (daySet.has(cursor)) {
      count += 1;
      cursor = addDays(cursor, -1);
    }
    return count;
  }

  function markActivity() {
    const today = dateKey();
    if (!state.activityDays.includes(today)) state.activityDays.push(today);
    state.activityDays = [...new Set(state.activityDays)].sort();
  }

  function rateCurrent(rating) {
    const term = setCurrentTerm();
    if (!term) return;
    const today = dateKey();
    const now = new Date();
    const previous = currentTermState(term.id) || {
      step: -1,
      intervalMinutes: 0,
      ease: 2.5,
      reps: 0,
      lapses: 0,
      history: [],
    };
    let step = previous.step ?? -1;
    let easy = previous.ease ?? 2.5;
    let intervalMinutes = REVIEW_SCHEDULE[0].minutes;

    if (rating === "forgot") {
      step = -1;
      easy = Math.max(1.3, easy - 0.2);
      intervalMinutes = REVIEW_SCHEDULE[0].minutes;
    } else if (rating === "vague") {
      const scheduleStep = Math.min(MAX_STEP, Math.max(0, step));
      const base = REVIEW_SCHEDULE[scheduleStep].minutes;
      intervalMinutes = Math.max(3, Math.round(base * 0.5));
      easy = Math.max(1.3, easy - 0.05);
      step = Math.max(0, step);
    } else {
      const scheduleStep = Math.min(MAX_STEP, step + 1);
      intervalMinutes = REVIEW_SCHEDULE[scheduleStep].minutes;
      easy = Math.min(3.2, easy + 0.05);
      step = scheduleStep;
    }

    const dueAt = new Date(now.getTime() + intervalMinutes * 60000).toISOString();
    const history = Array.isArray(previous.history) ? previous.history.slice(-19) : [];
    history.push({ date: today, at: now.toISOString(), rating, intervalMinutes, dueAt });
    state.progress[String(term.id)] = {
      step,
      intervalMinutes,
      ease: Number(easy.toFixed(2)),
      reps: (previous.reps || 0) + 1,
      lapses: (previous.lapses || 0) + (rating === "forgot" ? 1 : 0),
      dueAt,
      due: dateKey(new Date(dueAt)),
      lastRatedAt: now.toISOString(),
      lastReviewed: today,
      lastRating: rating,
      history,
    };

    state.session.completedIds = uniqueIds([...state.session.completedIds, term.id]);
    state.session.extraReviewIds = uniqueIds(state.session.extraReviewIds).filter((id) => id !== term.id);
    state.session.ratings.push({ termId: term.id, rating, date: today, at: now.toISOString(), intervalMinutes });
    markActivity();

    const queue = getQueue();
    state.session.currentId = queue[0] || null;
    lastAutoSpokenTermId = null;
    ui.revealed = false;
    ui.hideNewAnswer = false;
    saveState();
    render();
    toast(`${term.en} 将在 ${scheduleLabel(intervalMinutes)} 后复习`);
  }

  function upcomingReviewBars() {
    const today = dateKey();
    return Array.from({ length: 7 }, (_, offset) => {
      const key = addDays(today, offset);
      const count = Object.values(state.progress).filter((item) => {
        if (!item.dueAt) return false;
        if (offset === 0 && isProgressDue(item)) return true;
        return dueDateKey(item) === key;
      }).length;
      return { key, count, offset };
    });
  }

  function relatedTerms(term) {
    const ids = [];
    for (const groupId of term.groups || []) {
      const group = groupById.get(groupId);
      if (!group) continue;
      ids.push(...group.termIds);
    }
    if (!ids.length) {
      const categoryIndex = DATA.categories.findIndex((item) => item.name === term.category);
      const nearbyCategory = DATA.categories[categoryIndex];
      const categoryTerms = terms.filter((item) => item.category === term.category);
      const index = categoryTerms.findIndex((item) => item.id === term.id);
      ids.push(...categoryTerms.slice(Math.max(0, index - 3), index + 4).map((item) => item.id));
      if (nearbyCategory?.previous) {
        ids.push(...terms.filter((item) => item.category === nearbyCategory.previous).slice(-3).map((item) => item.id));
      }
    }
    return uniqueIds(ids)
      .filter((id) => id !== term.id)
      .map((id) => termById.get(id))
      .filter(Boolean)
      .slice(0, 8);
  }

  function scenarioLinks(term) {
    return (term.scenarios || []).map((id) => scenarioById.get(id)).filter(Boolean);
  }

  function render() {
    ensureSession();
    renderNavigation();
    renderSidebar();
    const meta = pageMeta[ui.route] || pageMeta.today;
    document.getElementById("page-title").textContent = meta.title;
    document.getElementById("page-kicker").textContent = `${meta.kicker} · ${dateKey()}`;

    if (ui.route === "today") renderToday();
    if (ui.route === "wordlist") renderWordlist();
    if (ui.route === "learned") renderLearned();
    if (ui.route === "library") renderLibrary();
    if (ui.route === "scenarios") renderScenarios();
    if (ui.route === "tutorials") renderTutorials();
    if (ui.route === "memory") renderMemory();

    viewRoot.querySelector(".view-enter")?.classList.add("view-enter");
    updateTopStats();
  }

  function renderNavigation() {
    document.querySelectorAll("[data-route]").forEach((button) => {
      const active = button.dataset.route === ui.route;
      button.classList.toggle("active", active);
      if (button.classList.contains("nav-item") || button.classList.contains("mobile-nav-item")) {
        button.setAttribute("aria-current", active ? "page" : "false");
      }
    });
    const mobileMore = document.getElementById("mobile-more");
    if (mobileMore) {
      const moreActive = ["scenarios", "tutorials", "memory"].includes(ui.route);
      mobileMore.classList.toggle("active", moreActive);
      mobileMore.setAttribute("aria-current", moreActive ? "page" : "false");
    }
  }

  function updateTopStats() {
    const stats = getStats();
    document.getElementById("top-streak").textContent = stats.streak;
    document.getElementById("top-mastered").textContent = stats.mastered;
  }

  function renderSidebar() {
    const queue = getQueue();
    const activeId = state.session.currentId ?? queue[0];
    const current = queue.length ? termById.get(Number(activeId)) : null;
    const total = sessionTotal();
    const done = state.session.completedIds.length;
    document.getElementById("sidebar-focus").textContent = current ? current.en : "今日队列已完成";
    document.getElementById("sidebar-queue-copy").textContent = current
      ? `${queue.length} 张待完成 · ${state.session.reviewIds.length} 张到期复习`
      : `今日完成 ${done} 张，下一批复习会按记忆间隔出现。`;
    document.getElementById("sidebar-progress-bar").style.width = `${total ? Math.min(100, (done / total) * 100) : 0}%`;
  }

  function renderToday() {
    ensureSession();
    const queue = getQueue();
    const current = setCurrentTerm();
    scheduleAutoSpeak(current);
    const stats = getStats();
    const total = sessionTotal();
    const done = state.session.completedIds.length;
    const percent = total ? Math.round((done / total) * 100) : 0;
    const reviewCount = state.session.reviewIds.length;
    const knownCount = state.session.ratings.filter((item) => item.rating === "known").length;
    const recallRate = state.session.ratings.length ? Math.round((knownCount / state.session.ratings.length) * 100) : 0;
    const nextReview = upcomingReviewBars().slice(1, 3).reduce((sum, day) => sum + day.count, 0);

    viewRoot.innerHTML = `
      <div class="view-enter">
        <section class="dashboard-hero">
          <div>
            <span class="eyebrow">${escapeHtml(formatDateCN(dateKey(), true))}</span>
            <h2>今天不是背单词，<br>而是把 <em>节点连起来</em>。</h2>
            <p>新词先显示中文和基础用途，再进入主动回忆；复习词先测试，答错会自动缩短下一次间隔。</p>
            <div class="hero-actions">
              <button class="button button-primary" type="button" data-action="scroll-study">${queue.length ? "继续今日队列" : "查看学习总结"} <kbd>${queue.length}</kbd></button>
              <button class="button" type="button" data-route="wordlist">查看今日词单</button>
              <button class="button button-ghost" type="button" data-route="learned">复习已学词</button>
            </div>
            <div class="hero-pills">
              <span class="pill">今日新学 <strong>${state.session.newIds.length}</strong></span>
              <span class="pill">到期复习 <strong>${reviewCount}</strong></span>
              <span class="pill">未来两天复习 <strong>${nextReview}</strong></span>
              <span class="pill">词库总量 <strong>${terms.length}</strong></span>
            </div>
          </div>
          <div class="hero-progress">
            <div class="ring" style="--value:${percent}%">
              <div class="ring-content">
                <strong>${percent}%</strong>
                <span>今日完成</span>
              </div>
            </div>
            <p>${done} / ${total || 0} 张 · 每次回忆后自动安排下一次复习</p>
          </div>
        </section>

        <section class="metric-strip" aria-label="学习状态">
          <div class="metric"><span>待完成队列</span><strong>${queue.length}</strong><small>到期复习优先</small></div>
          <div class="metric"><span>今日回忆正确率</span><strong>${recallRate}%</strong><small>已掌握 / 已作答</small></div>
          <div class="metric"><span>学习中</span><strong>${stats.learning}</strong><small>已进入复习循环</small></div>
          <div class="metric"><span>长期记忆</span><strong>${stats.mastered}</strong><small>完成更高阶段间隔</small></div>
        </section>

        <section class="learning-steps" aria-label="今日学习流程">
          <div class="learning-step"><span>01</span><div><strong>认新词</strong><small>中文释义与用途直接显示</small></div></div>
          <div class="learning-step"><span>02</span><div><strong>主动回忆</strong><small>复习词先隐藏释义再作答</small></div></div>
          <div class="learning-step"><span>03</span><div><strong>艾宾浩斯复习</strong><small>5 分钟起，逐步拉长到 30 天</small></div></div>
        </section>

        <section class="study-grid">
          <div id="study-card">
            ${current ? renderFlashcard(current, queue) : renderCompletion(stats)}
          </div>
          ${current ? renderStudySidebar(current) : renderFinishedSidebar(stats)}
        </section>
      </div>
    `;
  }

  function getSessionWordEntries() {
    const completed = new Set(state.session.completedIds);
    const byId = new Map();
    for (const id of state.session.reviewIds || []) {
      const term = termById.get(Number(id));
      if (term) byId.set(term.id, { term, type: "review", completed: completed.has(term.id) });
    }
    for (const id of state.session.newIds || []) {
      const term = termById.get(Number(id));
      if (term && !byId.has(term.id)) byId.set(term.id, { term, type: "new", completed: completed.has(term.id) });
    }
    const order = { review: 0, new: 1 };
    return [...byId.values()].sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      if (order[a.type] !== order[b.type]) return order[a.type] - order[b.type];
      return a.term.id - b.term.id;
    });
  }

  function renderWordlist() {
    const entries = getSessionWordEntries();
    const filtered = entries.filter((entry) => ui.wordlistScope === "all" || entry.type === ui.wordlistScope);
    const completed = entries.filter((entry) => entry.completed).length;
    const reviewCount = entries.filter((entry) => entry.type === "review").length;
    const newCount = entries.filter((entry) => entry.type === "new").length;
    viewRoot.innerHTML = `
      <div class="view-enter">
        <div class="page-intro">
          <div>
            <span class="eyebrow">TODAY'S WORD LIST</span>
            <h2>今天要学的词，<br>一张清单说清楚</h2>
            <p>每个词都直接显示中文基础释义、分类和学习状态。新词先认义，到期复习再去“今日学习”完成主动回忆。</p>
          </div>
          <div class="intro-actions">
            <button class="button button-primary" type="button" data-route="today">返回今日学习</button>
            <button class="button" type="button" data-route="learned">查看已学档案</button>
            <button class="button button-ghost" type="button" data-route="library">搜索全部词库</button>
          </div>
        </div>

        <section class="wordlist-summary">
          <div><span>今日总词数</span><strong>${entries.length}</strong><small>新学 + 到期复习</small></div>
          <div><span>新学词</span><strong>${newCount}</strong><small>释义默认直接显示</small></div>
          <div><span>到期复习</span><strong>${reviewCount}</strong><small>先测试回忆</small></div>
          <div><span>今日完成</span><strong>${completed}</strong><small>已完成 ${entries.length ? Math.round((completed / entries.length) * 100) : 0}%</small></div>
        </section>

        <div class="segmented" role="group" aria-label="今日词单筛选">
          <button class="${ui.wordlistScope === "all" ? "active" : ""}" type="button" data-wordlist-scope="all">全部 ${entries.length}</button>
          <button class="${ui.wordlistScope === "new" ? "active" : ""}" type="button" data-wordlist-scope="new">新学 ${newCount}</button>
          <button class="${ui.wordlistScope === "review" ? "active" : ""}" type="button" data-wordlist-scope="review">复习 ${reviewCount}</button>
        </div>

        <section class="word-list" aria-label="今日词单">
          ${filtered.map(({ term, type, completed: done }, index) => {
            const progress = currentTermState(term.id);
            return `
              <article class="word-row ${done ? "is-complete" : ""}">
                <span class="word-row-index">${String(index + 1).padStart(2, "0")}</span>
                <div class="word-row-main">
                  <div class="flashcard-meta">
                    <span class="tag ${type}">${type === "new" ? "今日新学" : "到期复习"}</span>
                    <span class="tag">${escapeHtml(term.category)}</span>
                    ${done ? '<span class="tag mastered">今日已完成</span>' : ""}
                  </div>
                  <div class="word-row-title">
                    <h3>${escapeHtml(term.en)}</h3>
                    ${speakButtonMarkup(term.en, true)}
                  </div>
                  <p class="word-row-meaning">${escapeHtml(term.zh)}</p>
                  <p class="word-row-usage">${escapeHtml(term.usage)}</p>
                  ${phraseMarkup(term, true)}
                </div>
                <div class="word-row-meta">
                  <span>位置</span>
                  <strong>${escapeHtml(term.location)}</strong>
                  <span>${progress ? `下次复习 ${escapeHtml(formatDueAt(progress))}` : "尚未进入复习循环"}</span>
                </div>
                <div class="word-row-actions">
                  ${done
                    ? `<button class="button button-ghost" type="button" data-term-id="${term.id}">查看词条</button>`
                    : `<button class="button button-blue" type="button" data-study-term="${term.id}">${type === "new" ? "学习这个词" : "开始复习"}</button>`}
                </div>
              </article>
            `;
          }).join("") || `<div class="empty-state"><h3>这个分组今天没有词</h3><p>切换上方分类查看今日完整词单。</p></div>`}
        </section>
      </div>
    `;
  }

  function learnedEntries() {
    return terms
      .filter((term) => currentTermState(term.id))
      .map((term) => ({ term, progress: currentTermState(term.id) }))
      .sort((a, b) => {
        const aDue = isProgressDue(a.progress);
        const bDue = isProgressDue(b.progress);
        if (aDue !== bDue) return aDue ? -1 : 1;
        return String(a.progress.dueAt).localeCompare(String(b.progress.dueAt));
      });
  }

  function renderLearned() {
    const learned = learnedEntries();
    const due = learned.filter(({ progress }) => isProgressDue(progress));
    const mastered = learned.filter(({ progress }) => (progress.step ?? -1) >= 4);
    viewRoot.innerHTML = `
      <div class="view-enter">
        <div class="page-intro">
          <div>
            <span class="eyebrow">LEARNED WORDS · REVIEW CENTER</span>
            <h2>已经学过的词，<br>集中在这里复习</h2>
            <p>这里不是普通词库，而是你的个人记忆档案。可以查中文、看到下次复习日，并从到期词开始一轮主动回忆。</p>
          </div>
          <div class="intro-actions">
            <button class="button button-primary" type="button" data-action="start-due-review" ${due.length ? "" : "disabled"}>开始到期复习 ${due.length}</button>
            <button class="button" type="button" data-route="wordlist">查看今日词单</button>
          </div>
        </div>

        <section class="wordlist-summary learned-summary">
          <div><span>已学词条</span><strong>${learned.length}</strong><small>已进入记忆档案</small></div>
          <div><span>今日待复习</span><strong>${due.length}</strong><small>到期或已逾期</small></div>
          <div><span>学习中</span><strong>${learned.length - mastered.length}</strong><small>尚未达到长期阶段</small></div>
          <div><span>长期记忆</span><strong>${mastered.length}</strong><small>第 5 阶段及以上</small></div>
        </section>

        ${learned.length ? `
          <div class="learned-toolbar">
            <div class="segmented" role="group" aria-label="已学词筛选">
              <button class="${ui.learned.scope === "due" ? "active" : ""}" type="button" data-learned-scope="due">待复习 ${due.length}</button>
              <button class="${ui.learned.scope === "all" ? "active" : ""}" type="button" data-learned-scope="all">全部已学 ${learned.length}</button>
              <button class="${ui.learned.scope === "mastered" ? "active" : ""}" type="button" data-learned-scope="mastered">长期记忆 ${mastered.length}</button>
            </div>
            <label class="search-field learned-search">
              <span class="sr-only">搜索已学词</span>
              <input id="learned-search" type="search" value="${escapeHtml(ui.learned.query)}" placeholder="搜索已经学过的英文或中文">
            </label>
          </div>
        ` : ""}
        <div id="learned-results"></div>
      </div>
    `;
    updateLearnedResults();
  }

  function filteredLearnedEntries() {
    const query = ui.learned.query.trim().toLowerCase();
    return learnedEntries().filter(({ term, progress }) => {
      if (ui.learned.scope === "due" && !isProgressDue(progress)) return false;
      if (ui.learned.scope === "mastered" && (progress.step ?? -1) < 4) return false;
      if (!query) return true;
      return [term.en, term.zh, term.category, term.usage, term.location].join(" ").toLowerCase().includes(query);
    });
  }

  function updateLearnedResults() {
    const container = document.getElementById("learned-results");
    if (!container) return;
    const learned = learnedEntries();
    if (!learned.length) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>还没有已学词</h3>
          <p>完成今日卡片的第一次学习后，这里会自动建立你的个人记忆档案。</p>
          <div class="hero-actions" style="justify-content:center">
            <button class="button button-primary" type="button" data-route="today">开始今日学习</button>
          </div>
        </div>
      `;
      return;
    }

    const filtered = filteredLearnedEntries();
    if (!filtered.length) {
      container.innerHTML = `<div class="empty-state"><h3>没有匹配的已学词</h3><p>切换筛选或换一个关键词。</p></div>`;
      return;
    }

    container.innerHTML = `
      <div class="learned-grid">
        ${filtered.map(({ term, progress }) => {
          const due = isProgressDue(progress);
          const stage = Math.max(0, progress.step + 1);
          return `
            <article class="learned-card ${due ? "is-due" : ""}">
              <div class="term-card-head">
                <span class="term-card-index">BP-${String(term.id).padStart(3, "0")}</span>
                <span class="tag ${due ? "review" : termStatus(term).key}">${due ? "现在该复习" : termStatus(term).label}</span>
              </div>
              <div class="learned-title-row">
                <h3>${escapeHtml(term.en)}</h3>
                ${speakButtonMarkup(term.en, true)}
              </div>
              <p class="learned-meaning">${escapeHtml(term.zh)}</p>
              <p class="term-card-usage">${escapeHtml(term.usage)}</p>
              ${phraseMarkup(term, true)}
              <div class="learned-meta">
                <span>阶段 ${stage} / ${REVIEW_SCHEDULE.length}</span>
                <span>${escapeHtml(term.category)}</span>
                <span>${due ? `已到期 ${escapeHtml(formatDueAt(progress))}` : `下次 ${escapeHtml(formatDueAt(progress))}`}</span>
              </div>
              <div class="learned-actions">
                <button class="button ${due ? "button-blue" : ""}" type="button" data-learned-study="${term.id}">${due ? "现在复习" : "提前复习"}</button>
                <button class="button button-ghost" type="button" data-term-id="${term.id}">查看逻辑</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  function startStudyingTerm(termId, addAsReview = false) {
    const id = Number(termId);
    if (!termById.has(id)) return;
    if (addAsReview && !state.session.extraReviewIds.includes(id)) {
      state.session.extraReviewIds.push(id);
    }
    state.session.completedIds = state.session.completedIds.filter((item) => item !== id);
    state.session.currentId = id;
    lastAutoSpokenTermId = null;
    ui.revealed = false;
    ui.hideNewAnswer = false;
    saveState();
    navigate("today");
  }

  function addTermToToday(termId) {
    const id = Number(termId);
    const term = termById.get(id);
    if (!term) return;
    closeTermDialog();
    ensureSession();

    const progress = currentTermState(id);
    if (progress) {
      startStudyingTerm(id, true);
      toast(`${term.en} 已加入今日复习`);
      return;
    }

    if (state.session.newIds.includes(id)) {
      if (state.session.completedIds.includes(id)) {
        toast(`${term.en} 今日已经完成`);
      } else {
        state.session.currentId = id;
        lastAutoSpokenTermId = null;
        ui.revealed = false;
        ui.hideNewAnswer = false;
        saveState();
        navigate("today");
        toast(`${term.en} 已在今日词单`);
      }
      return;
    }

    const completed = new Set(state.session.completedIds);
    const oldNewIds = [...state.session.newIds];
    const queueBefore = getQueue();
    const oldCurrentId = queueBefore.includes(Number(state.session.currentId))
      ? Number(state.session.currentId)
      : queueBefore[0] || null;
    const displacedId = [...oldNewIds]
      .reverse()
      .find((item) => item !== id && item !== Number(state.session.currentId) && !completed.has(item));
    const displacedTerm = displacedId ? termById.get(displacedId) : null;

    state.session.newIds = [id, ...oldNewIds.filter((item) => item !== id && item !== displacedId)];
    state.deferredNew = (state.deferredNew || []).filter((item) => Number(item.id) !== id);
    if (displacedId) {
      state.deferredNew.push({ id: displacedId, due: addDays(dateKey(), 1), reason: `为 ${term.en} 顺延` });
    }
    state.session.currentId = id;
    lastAutoSpokenTermId = null;
    ui.revealed = false;
    ui.hideNewAnswer = false;
    saveState();
    navigate("today");

    const message = displacedTerm
      ? `${term.en} 已加入；${displacedTerm.en} 已顺延到明天`
      : `${term.en} 已加入今日词单`;
    toast(message, {
      duration: 5200,
      actionLabel: "撤销",
      onAction: () => {
        if (currentTermState(id)) {
          toast("这个词已经开始学习，不能再撤销本次替换");
          return;
        }
        state.session.newIds = oldNewIds;
        if (displacedId) {
          state.deferredNew = (state.deferredNew || []).filter((item) => Number(item.id) !== displacedId);
        }
        state.session.currentId = oldCurrentId || oldNewIds[0] || null;
        saveState();
        render();
        toast("已撤销，今日词单恢复原样");
      },
    });
  }

  function startDueReview() {
    const dueIds = learnedEntries()
      .filter(({ progress }) => isProgressDue(progress))
      .map(({ term }) => term.id);
    if (!dueIds.length) {
      toast("今天没有到期的已学词");
      return;
    }
    state.session.completedIds = state.session.completedIds.filter((id) => !dueIds.includes(id));
    state.session.currentId = dueIds[0];
    lastAutoSpokenTermId = null;
    ui.revealed = false;
    ui.hideNewAnswer = false;
    saveState();
    navigate("today");
    toast(`已加入 ${dueIds.length} 个到期复习词`);
  }

  function renderFlashcard(term, queue) {
    const progress = currentTermState(term.id);
    const isNew = !progress;
    const position = queue.indexOf(term.id) + 1;
    const total = sessionTotal();
    const completePercent = total ? (state.session.completedIds.length / total) * 100 : 0;
    const status = termStatus(term);
    const showAnswer = ui.revealed || (isNew && !ui.hideNewAnswer);
    return `
      <article class="flashcard" aria-labelledby="study-term">
        <div class="flashcard-head">
          <div class="flashcard-meta">
            <span class="tag ${isNew ? "new" : "review"}">${isNew ? "NEW · 新学" : `REVIEW · 第 ${(progress.reps || 0) + 1} 次`}</span>
            <span class="tag">${escapeHtml(term.category)}</span>
            <span class="tag ${status.key}">${status.label}</span>
          </div>
          <span class="queue-position">${position} / ${queue.length}</span>
        </div>
        <div class="session-line" aria-hidden="true"><span style="width:${completePercent}%"></span></div>
        <div class="flash-prompt">
          <p class="overline">${isNew && showAnswer ? "新词认义：先看懂中文与用途" : "主动回忆：它在蓝图里负责什么？"}</p>
          <div class="term-title-row">
            <h2 class="term-en" id="study-term">${escapeHtml(term.en)}</h2>
            ${speakButtonMarkup(term.en)}
          </div>
          <p class="term-location-hint">节点位置提示：<code>${escapeHtml(term.location)}</code></p>
        </div>
        ${showAnswer ? `
          <div class="answer-block">
            <div class="answer-grid">
              <div class="answer-panel">
                <span class="answer-panel-label">中文含义</span>
                <strong>${escapeHtml(term.zh)}</strong>
              </div>
              <div class="answer-panel accent">
                <span class="answer-panel-label">常见用途 / 场景</span>
                <p>${escapeHtml(term.usage)}</p>
              </div>
            </div>
            ${phraseMarkup(term)}
            ${memoryAidMarkup(term)}
            <div class="answer-tip">${escapeHtml(term.tip)}</div>
            <div class="flash-actions">
              ${(term.groups || []).map((groupId) => {
                const group = groupById.get(groupId);
                return group ? `<span class="pill">逻辑链：<strong>${escapeHtml(group.title)}</strong></span>` : "";
              }).join("")}
              ${isNew ? `<button class="button button-soft" type="button" data-action="hide-new-answer">隐藏释义，立即自测</button>` : ""}
              <button class="button button-ghost" type="button" data-term-id="${term.id}">展开词条详情</button>
            </div>
            <div class="rating-bar" aria-label="评价这次回忆">
              <button class="rating-button forgot" type="button" data-rating="forgot"><strong>${isNew ? "还不熟" : "没记住"}</strong><small>${escapeHtml(REVIEW_SCHEDULE[0].label)}后快速重来</small></button>
              <button class="rating-button vague" type="button" data-rating="vague"><strong>有点模糊</strong><small>缩短当前阶段间隔</small></button>
              <button class="rating-button known" type="button" data-rating="known"><strong>已经记住</strong><small>进入下一档艾宾浩斯复习</small></button>
            </div>
          </div>
        ` : `
          <div class="flash-actions">
            <button class="button button-blue" type="button" data-action="reveal">显示中文与使用场景 <kbd>Space</kbd></button>
            <button class="button button-ghost" type="button" data-term-id="${term.id}">先查看词条详情</button>
          </div>
        `}
      </article>
    `;
  }

  function renderStudySidebar(term) {
    const category = categoryByName.get(term.category);
    const related = relatedTerms(term);
    const bars = upcomingReviewBars();
    const max = Math.max(1, ...bars.map((item) => item.count));
    return `
      <aside class="side-stack">
        <section class="side-card">
          <div class="side-card-head">
            <h3>逻辑定位</h3>
            <span class="tag">CONCEPT MAP</span>
          </div>
          <p>把这个节点放回学习路径，而不是孤立记忆。</p>
          <div class="logic-path">
            ${category?.previous ? `<div class="logic-path-item"><span class="logic-path-index">前</span><div><strong>${escapeHtml(category.previous)}</strong><small>${escapeHtml(categoryByName.get(category.previous)?.purpose || "前置概念")}</small></div></div>` : ""}
            <div class="logic-path-item current"><span class="logic-path-index">今</span><div><strong>${escapeHtml(term.category)}</strong><small>${escapeHtml(category?.purpose || term.usage)}</small></div></div>
            ${category?.next ? `<div class="logic-path-item"><span class="logic-path-index">后</span><div><strong>${escapeHtml(category.next)}</strong><small>${escapeHtml(categoryByName.get(category.next)?.purpose || "下一步扩展")}</small></div></div>` : ""}
          </div>
        </section>
        <section class="side-card">
          <div class="side-card-head">
            <h3>未来 7 天复习</h3>
            <span class="tag">SPACED</span>
          </div>
          <p>只统计已经学习词条的到期复习，新词上限另外计算。</p>
          <div class="review-bars" aria-label="未来七天到期复习数量">
            ${bars.map((item) => `
              <div class="review-bar">
                <div class="review-bar-track"><div class="review-bar-fill" style="height:${Math.max(5, (item.count / max) * 72)}px"></div></div>
                <strong>${item.count}</strong>
                <span>${item.offset === 0 ? "今天" : `+${item.offset}天`}</span>
              </div>
            `).join("")}
          </div>
        </section>
        <section class="side-card">
          <div class="side-card-head"><h3>迁移到相关节点</h3><span class="tag">NEXT</span></div>
          <div class="term-link-list">
            ${related.map((item) => `<button class="term-link" type="button" data-term-id="${item.id}">${escapeHtml(item.en)}</button>`).join("") || "<p>这是一个独立节点，可先记住用途。</p>"}
          </div>
        </section>
      </aside>
    `;
  }

  function renderCompletion(stats) {
    const done = state.session.completedIds.length;
    const known = state.session.ratings.filter((item) => item.rating === "known").length;
    const recallRate = state.session.ratings.length ? Math.round((known / state.session.ratings.length) * 100) : 0;
    return `
      <section class="completion-card">
        <div class="completion-mark" aria-hidden="true">✓</div>
        <h3>${done ? "今天的回忆队列已完成" : "今天还没有开始"}</h3>
        <p>${done
          ? `完成 ${done} 张，回忆正确率 ${recallRate}%。下一次复习已按艾宾浩斯节奏 5 分钟、30 分钟、12 小时、1–30 天排入未来。`
          : "点击“继续今日队列”开始第一轮主动回忆。新词和到期复习会一起组成每日任务。"
        }</p>
        <div class="hero-actions">
          <button class="button button-primary" type="button" data-route="wordlist">查看今日词单</button>
          <button class="button" type="button" data-route="learned">查看已学与复习</button>
        </div>
      </section>
    `;
  }

  function renderFinishedSidebar(stats) {
    return `
      <aside class="side-stack">
        <section class="side-card">
          <div class="side-card-head"><h3>学习概况</h3><span class="tag">PROFILE</span></div>
          <div class="memory-stats">
            <div class="memory-stat"><span>连续学习</span><strong>${stats.streak} 天</strong></div>
            <div class="memory-stat"><span>接触词条</span><strong>${stats.touched}</strong></div>
            <div class="memory-stat"><span>学习中</span><strong>${stats.learning}</strong></div>
            <div class="memory-stat"><span>长期记忆</span><strong>${stats.mastered}</strong></div>
          </div>
        </section>
        <section class="side-card">
          <div class="side-card-head"><h3>下一步</h3><span class="tag">ROUTE</span></div>
          <p>完成主动回忆后，用“场景串联”检查自己能否解释节点之间的因果，而不是只记住中文。</p>
          <div class="term-link-list" style="margin-top:12px">
            <button class="term-link" type="button" data-route="scenarios">打开场景实验室</button>
            <button class="term-link" type="button" data-route="memory">查看记忆路线</button>
          </div>
        </section>
      </aside>
    `;
  }

  function getFilteredTerms() {
    const query = ui.library.query.trim().toLowerCase();
    return terms.filter((term) => {
      if (ui.library.category !== "all" && term.category !== ui.library.category) return false;
      const status = termStatus(term).key;
      if (ui.library.status !== "all" && status !== ui.library.status) return false;
      if (!query) return true;
      return [term.en, term.zh, term.category, term.location, term.usage, term.tip]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }

  function renderLibrary() {
    viewRoot.innerHTML = `
      <div class="view-enter">
        <div class="page-intro">
          <div>
            <span class="eyebrow">SEARCH · FILTER · CONNECT</span>
            <h2>把“看不懂英文”变成<br>可检索的蓝图地图</h2>
            <p>可搜英文、中文、节点位置和使用场景。每个词条都能继续展开前置知识、相关节点与真实逻辑链。</p>
          </div>
        </div>
        <div class="toolbar">
          <label class="search-field">
            <span class="sr-only">搜索词条</span>
            <input id="library-search" type="search" value="${escapeHtml(ui.library.query)}" placeholder="搜索 rotation、碰撞、UI、存档…">
          </label>
          <label class="select-field">
            <span class="sr-only">分类筛选</span>
            <select id="library-category">
              <option value="all">全部分类</option>
              ${DATA.categories.map((category) => `<option value="${escapeHtml(category.name)}" ${ui.library.category === category.name ? "selected" : ""}>${escapeHtml(category.name)} · ${category.count}</option>`).join("")}
            </select>
          </label>
          <label class="select-field">
            <span class="sr-only">状态筛选</span>
            <select id="library-status">
              <option value="all" ${ui.library.status === "all" ? "selected" : ""}>全部状态</option>
              <option value="new" ${ui.library.status === "new" ? "selected" : ""}>未学习</option>
              <option value="learning" ${ui.library.status === "learning" ? "selected" : ""}>学习中</option>
              <option value="mastered" ${ui.library.status === "mastered" ? "selected" : ""}>长期记忆</option>
            </select>
          </label>
          <span class="result-copy" id="library-result-copy"></span>
        </div>
        <div id="library-results"></div>
      </div>
    `;
    updateLibraryResults();
  }

  function updateLibraryResults() {
    const container = document.getElementById("library-results");
    if (!container) return;
    const filtered = getFilteredTerms();
    const visible = filtered.slice(0, ui.library.limit);
    const copy = document.getElementById("library-result-copy");
    if (copy) copy.textContent = `找到 ${filtered.length} 条 · 当前显示 ${visible.length} 条`;

    if (!visible.length) {
      const query = ui.library.query.trim();
      container.innerHTML = `
        <div class="empty-state">
          <h3>本地词库没有匹配词条</h3>
          <p>可以换用中文用途搜索，或直接到有道词典查询英文。</p>
          <div class="hero-actions" style="justify-content:center">
            ${query ? `<a class="button button-primary" href="${escapeHtml(youdaoWordUrl(query))}" target="_blank" rel="noopener noreferrer">到有道词典查询 ${escapeHtml(query)}</a>` : ""}
            <button class="button" type="button" data-action="clear-library-search">清除筛选</button>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="term-grid">
        ${visible.map((term) => {
          const status = termStatus(term);
          const progress = currentTermState(term.id);
          const action = termTodayAction(term);
          return `
            <article class="term-card">
              <button class="term-card-body" type="button" data-term-id="${term.id}">
                <div class="term-card-head">
                  <span class="term-card-index">BP-${String(term.id).padStart(3, "0")}</span>
                  <span class="tag ${status.key}">${status.label}</span>
                </div>
                <h3>${escapeHtml(term.en)}</h3>
                <p>${escapeHtml(term.zh)}</p>
                <p class="term-card-usage">${escapeHtml(term.usage)}</p>
              </button>
              <div class="term-card-foot">
                <span>${escapeHtml(term.category)} · ${progress ? `下次 ${escapeHtml(formatDueAt(progress))}` : "尚未学习"}</span>
                <div class="term-card-foot-actions">
                  ${speakButtonMarkup(term.en, true)}
                  <button class="term-add-button" type="button" data-add-today="${term.id}" ${action.disabled ? "disabled" : ""}>${escapeHtml(action.label)}</button>
                </div>
              </div>
            </article>
          `;
        }).join("")}
      </div>
      ${filtered.length > visible.length ? `<div class="load-more"><button class="button" type="button" data-action="load-more">继续加载 · 还有 ${filtered.length - visible.length} 条</button></div>` : ""}
    `;
  }

  function filteredTutorials() {
    const query = ui.tutorials.query.trim().toLowerCase();
    return tutorials.filter((tutorial) => {
      if (ui.tutorials.category !== "all" && tutorial.category !== ui.tutorials.category) return false;
      if (ui.tutorials.level !== "all" && tutorial.level !== ui.tutorials.level) return false;
      if (ui.tutorials.type !== "all" && tutorial.type !== ui.tutorials.type) return false;
      if (ui.tutorials.track !== "all" && tutorial.track !== ui.tutorials.track) return false;
      if (ui.tutorials.intent !== "all" && tutorial.intent !== ui.tutorials.intent) return false;
      if (!query) return true;
      const relatedNames = (tutorial.relatedIds || [])
        .map((id) => termById.get(id)?.en || "")
        .join(" ");
      const scenarioNames = (tutorial.scenarioIds || [])
        .map((id) => scenarioById.get(id)?.title || "")
        .join(" ");
      return [
        tutorial.title,
        tutorial.category,
        tutorial.type,
        tutorial.level,
        tutorial.summary,
        tutorial.learn,
        tutorial.prerequisite,
        (tutorial.tags || []).join(" "),
        relatedNames,
        scenarioNames,
      ].join(" ").toLowerCase().includes(query);
    });
  }

  function renderTutorials() {
    const categories = [...new Set(tutorials.map((item) => item.category))];
    const levels = [...new Set(tutorials.map((item) => item.level))];
    const types = [...new Set(tutorials.map((item) => item.type))];
    const intents = [...new Set(tutorials.map((item) => item.intent).filter(Boolean))];
    const tracks = [...new Set(tutorials.map((item) => item.track).filter(Boolean))];
    viewRoot.innerHTML = `
      <div class="view-enter">
        <div class="page-intro">
          <div>
            <span class="eyebrow">EPIC OFFICIAL LEARNING INDEX</span>
            <h2>遇到不会的节点，<br>直接查对应官方资料</h2>
            <p>本站整理了 Epic Developer Community 的 UE5 中文官方文档与快速入门。先展开看学习目标和关联词，再跳转到官方原文继续阅读。</p>
          </div>
          <div class="intro-actions">
            <a class="button button-primary" href="https://dev.epicgames.com/community/unreal-engine/learning" target="_blank" rel="noopener noreferrer">打开 Epic 官方学习目录</a>
          </div>
        </div>

        <div class="tutorial-source-note">
          <strong>官方资料索引</strong>
          <span>收录 ${tutorials.length} 条 Epic 官方中文页面 · 最近核实 2026-10-27 · 完整页面将在新标签页打开</span>
        </div>

        <div class="tutorial-tracks" aria-label="按学习路径筛选教程">
          <span>学习路径</span>
          <button class="${ui.tutorials.track === "all" ? "active" : ""}" type="button" data-tutorial-track="all">全部路径 ${tutorials.length}</button>
          ${tracks.map((track) => {
            const count = tutorials.filter((item) => item.track === track).length;
            return `<button class="${ui.tutorials.track === track ? "active" : ""}" type="button" data-tutorial-track="${escapeHtml(track)}">${escapeHtml(track)} ${count}</button>`;
          }).join("")}
        </div>

        <div class="toolbar tutorial-toolbar">
          <label class="search-field">
            <span class="sr-only">搜索官方教程</span>
            <input id="tutorial-search" type="search" value="${escapeHtml(ui.tutorials.query)}" placeholder="搜索 Blueprint、输入、碰撞、UI、存档…">
          </label>
          <label class="select-field">
            <span class="sr-only">教程分类</span>
            <select id="tutorial-category">
              <option value="all">全部官方资料</option>
              ${categories.map((category) => `<option value="${escapeHtml(category)}" ${ui.tutorials.category === category ? "selected" : ""}>${escapeHtml(category)}</option>`).join("")}
            </select>
          </label>
          <label class="select-field">
            <span class="sr-only">难度筛选</span>
            <select id="tutorial-level">
              <option value="all">全部难度</option>
              ${levels.map((level) => `<option value="${escapeHtml(level)}" ${ui.tutorials.level === level ? "selected" : ""}>${escapeHtml(level)}</option>`).join("")}
            </select>
          </label>
          <label class="select-field">
            <span class="sr-only">资料类型</span>
            <select id="tutorial-type">
              <option value="all">全部类型</option>
              ${types.map((type) => `<option value="${escapeHtml(type)}" ${ui.tutorials.type === type ? "selected" : ""}>${escapeHtml(type)}</option>`).join("")}
            </select>
          </label>
          <label class="select-field">
            <span class="sr-only">学习目的</span>
            <select id="tutorial-intent">
              <option value="all">全部学习目的</option>
              ${intents.map((intent) => `<option value="${escapeHtml(intent)}" ${ui.tutorials.intent === intent ? "selected" : ""}>${escapeHtml(intent)}</option>`).join("")}
            </select>
          </label>
          <span class="result-copy" id="tutorial-result-copy"></span>
        </div>
        <div class="tutorial-hints" aria-label="热门教程查询">
          <span>快速查询</span>
          ${["Blueprint", "输入", "碰撞", "UI", "动画", "AI", "存档", "联网", "数据"].map((term) => `<button type="button" data-tutorial-query="${escapeHtml(term)}">${escapeHtml(term)}</button>`).join("")}
          <button type="button" data-tutorial-reset>清除筛选</button>
        </div>
        <div id="tutorial-results"></div>
      </div>
    `;
    updateTutorialResults();
  }

  function updateTutorialResults() {
    const container = document.getElementById("tutorial-results");
    if (!container) return;
    const results = filteredTutorials();
    const copy = document.getElementById("tutorial-result-copy");
    if (copy) copy.textContent = `找到 ${results.length} 条官方资料`;
    if (!results.length) {
      container.innerHTML = `<div class="empty-state"><h3>没有匹配的教程</h3><p>试试节点英文名、中文能力或切换分类。</p></div>`;
      return;
    }

    container.innerHTML = `
      <div class="tutorial-list">
        ${results.map((tutorial) => {
          const scenariosForTutorial = (tutorial.scenarioIds || []).map((id) => scenarioById.get(id)).filter(Boolean);
          return `
            <details class="tutorial-card">
              <summary>
                <span class="tutorial-type">${escapeHtml(tutorial.type)}</span>
                <span class="tutorial-summary-main">
                  <span class="tutorial-topline">
                    <strong>${escapeHtml(tutorial.title)}</strong>
                    <span>${escapeHtml(tutorial.track || tutorial.category)} · ${escapeHtml(tutorial.level)}</span>
                  </span>
                  <span class="tutorial-summary-copy">${escapeHtml(tutorial.summary)}</span>
                </span>
                <span class="tutorial-expand">展开</span>
              </summary>
              <div class="tutorial-body">
                <div class="tutorial-prerequisite">
                  <span>开始前</span>
                  <p>${escapeHtml(tutorial.prerequisite || "无特定前置条件。")}</p>
                </div>
                <div class="tutorial-learn">
                  <span>学完能做什么</span>
                  <p>${escapeHtml(tutorial.learn)}</p>
                </div>
                <div class="tutorial-detail-grid">
                  <div>
                    <span class="detail-label">关联蓝图词条</span>
                    <div class="term-link-list">
                      ${(tutorial.relatedIds || []).map((id) => termById.get(id)).filter(Boolean).map((term) => `<button class="term-link" type="button" data-term-id="${term.id}">${escapeHtml(term.en)}</button>`).join("") || "<span class=\"tutorial-muted\">通用入口资料</span>"}
                    </div>
                  </div>
                  <div>
                    <span class="detail-label">对应本站逻辑链</span>
                    <div class="term-link-list">
                      ${scenariosForTutorial.map((scenario) => `<button class="term-link" type="button" data-open-scenario="${scenario.id}">${escapeHtml(scenario.title)}</button>`).join("") || "<span class=\"tutorial-muted\">适合作为全局参考</span>"}
                    </div>
                  </div>
                </div>
                <div class="tutorial-tags">
                  <span>知识标签</span>
                  ${(tutorial.tags || []).map((tag) => `<button type="button" data-tutorial-query="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join("")}
                </div>
                <div class="tutorial-actions">
                  <a class="button button-blue" href="${escapeHtml(tutorial.url)}" target="_blank" rel="noopener noreferrer">打开 Epic 官方原文</a>
                  <span>来源：Epic Developer Community · 核验 ${escapeHtml(tutorial.verifiedOn)}</span>
                </div>
              </div>
            </details>
          `;
        }).join("")}
      </div>
    `;
  }

  function tutorialsForScenario(scenarioId) {
    return tutorials.filter((tutorial) => (tutorial.scenarioIds || []).includes(scenarioId));
  }

  function renderScenarios() {
    const scenario = scenarioById.get(ui.scenarioId) || DATA.scenarios[0];
    ui.scenarioId = scenario.id;
    viewRoot.innerHTML = `
      <div class="view-enter">
        <div class="page-intro">
          <div>
            <span class="eyebrow">LOGIC LAB · 8 SCENARIOS</span>
            <h2>不要只背节点，<br>要能说出一条因果链</h2>
            <p>每个场景展示“玩家做了什么 → 蓝图如何判断 → 对象怎样变化 → 后续还能扩展什么”。点击任一节点可查看词条。</p>
          </div>
        </div>
        <div class="scenario-layout">
          <aside class="scenario-list" aria-label="场景列表">
            ${DATA.scenarios.map((item, index) => `
              <button class="scenario-list-button ${item.id === scenario.id ? "active" : ""}" type="button" data-scenario-id="${item.id}">
                <span class="scenario-list-index">${String(index + 1).padStart(2, "0")}</span>
                <span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.short)}</small></span>
              </button>
            `).join("")}
          </aside>
          <article class="scenario-panel">
            <header class="scenario-hero">
              <div class="flashcard-meta">
                <span class="tag learning">${escapeHtml(scenario.level)}</span>
                <span class="tag">${scenario.steps.length} 个主节点</span>
                <span class="tag">${scenario.extensions.length} 个扩展方向</span>
              </div>
              <h2>${escapeHtml(scenario.title)}</h2>
              <p>${escapeHtml(scenario.short)}</p>
              <div class="scenario-result"><span>WHY</span>${escapeHtml(scenario.outcome)}</div>
            </header>
            <div class="scenario-body">
              <h3>执行逻辑链</h3>
              <div class="chain">
                ${scenario.steps.map((step) => `
                  <button class="chain-node" type="button" data-term-id="${step.id}">
                    <span class="chain-step">${String(step.step).padStart(2, "0")}</span>
                    <span><strong>${escapeHtml(step.en)}</strong><small>${escapeHtml(step.zh)}</small></span>
                    <span class="chain-note">${escapeHtml(step.note)}</span>
                    <span class="chain-arrow" aria-hidden="true">→</span>
                  </button>
                `).join("")}
              </div>
              <section class="extension-section">
                <div class="flashcard-meta">
                  <span class="eyebrow">FUNCTION EXTENSIONS</span>
                </div>
                <h3 style="margin-top:8px">这条链还能怎样扩展</h3>
                <div class="extension-grid">
                  ${scenario.extensions.map((item) => `
                    <button class="extension-card" type="button" data-term-id="${item.id}">
                      <strong>${escapeHtml(item.en)} · ${escapeHtml(item.zh)}</strong>
                      <p>${escapeHtml(item.note)}</p>
                    </button>
                  `).join("")}
                </div>
              </section>
              ${tutorialsForScenario(scenario.id).length ? `
                <section class="extension-section">
                  <div class="flashcard-meta"><span class="eyebrow">OFFICIAL LEARNING</span></div>
                  <h3 style="margin-top:8px">Epic 官方教程延伸</h3>
                  <div class="scenario-tutorials">
                    ${tutorialsForScenario(scenario.id).map((tutorial) => `
                      <a class="scenario-tutorial-link" href="${escapeHtml(tutorial.url)}" target="_blank" rel="noopener noreferrer">
                        <span>${escapeHtml(tutorial.type)}</span>
                        <strong>${escapeHtml(tutorial.title)}</strong>
                        <small>${escapeHtml(tutorial.summary)}</small>
                        <em>打开官方原文 →</em>
                      </a>
                    `).join("")}
                  </div>
                </section>
              ` : ""}
            </div>
          </article>
        </div>
      </div>
    `;
  }

  function renderMemory() {
    const stats = getStats();
    const routePhases = [
      ["认识基础", DATA.categories.slice(0, 3)],
      ["组织逻辑", DATA.categories.slice(3, 6)],
      ["检测互动", DATA.categories.slice(6, 9)],
      ["表现反馈", DATA.categories.slice(9, 12)],
      ["智能流程", DATA.categories.slice(12, 14)],
      ["系统扩展", DATA.categories.slice(14, 17)],
    ];
    const bars = upcomingReviewBars();
    const max = Math.max(1, ...bars.map((item) => item.count));
    viewRoot.innerHTML = `
      <div class="view-enter">
        <div class="page-intro">
          <div>
            <span class="eyebrow">EBBINGHAUS · ACTIVE RECALL</span>
            <h2>按遗忘速度安排复习，<br>而不是每天平均重复</h2>
            <p>采用艾宾浩斯式复习节奏：前期在同一天快速巩固，随后拉开到 1、2、4、7、15、30 天。</p>
          </div>
        </div>

        <div class="memory-layout">
          <section class="memory-card">
            <span class="eyebrow">EBBINGHAUS CURVE</span>
            <h3>九阶段复习骨架</h3>
            <p>新词学会后先安排 5 分钟、30 分钟、12 小时复习，再按 1、2、4、7、15、30 天逐步拉开。</p>
            <div class="interval-track" aria-label="间隔复习阶段">
              ${REVIEW_SCHEDULE.map((slot, index) => `
                <div class="interval-step">
                  <div><strong>${escapeHtml(slot.label.replace(" ", ""))}</strong><span>阶段 ${index + 1}</span></div>
                </div>
              `).join("")}
            </div>
            <div class="memory-rules">
              <div class="memory-rule"><strong>没记住</strong><p>回到 5 分钟后的快速复习，并降低难度系数。</p></div>
              <div class="memory-rule"><strong>有点模糊</strong><p>把当前阶段间隔缩短约一半，再进行一次回忆。</p></div>
              <div class="memory-rule"><strong>已经记住</strong><p>进入下一档间隔，逐步向长期记忆推进。</p></div>
            </div>

            <section class="extension-section">
              <div class="flashcard-meta"><span class="eyebrow">LEARNING ROUTE</span></div>
              <h3 style="margin-top:8px">17 类概念的串联路线</h3>
              <div class="route-map">
                ${routePhases.map(([phase, categories]) => `
                  <div class="route-band">
                    <div class="route-phase">${escapeHtml(phase)}</div>
                    <div class="route-cards">
                      ${categories.map((category) => `
                        <button class="route-card" type="button" data-category="${escapeHtml(category.name)}">
                          ${escapeHtml(category.name)} <span>${category.count}</span>
                        </button>
                      `).join("")}
                    </div>
                  </div>
                `).join("")}
              </div>
            </section>
          </section>

          <aside class="side-stack">
            <section class="side-card">
              <div class="side-card-head"><h3>今天之后</h3><span class="tag">7 DAYS</span></div>
              <p>复习负载按已学习词条的到期日期实时统计。</p>
              <div class="review-bars">
                ${bars.map((item) => `
                  <div class="review-bar">
                    <div class="review-bar-track"><div class="review-bar-fill" style="height:${Math.max(5, (item.count / max) * 72)}px"></div></div>
                    <strong>${item.count}</strong>
                    <span>${item.offset === 0 ? "今天" : `+${item.offset}天`}</span>
                  </div>
                `).join("")}
              </div>
            </section>

            <section class="side-card" id="learning-settings">
              <div class="side-card-head"><h3>学习设置</h3><span class="tag">SETTINGS</span></div>
              <div class="settings-panel">
                <button class="settings-appearance-entry" type="button" data-action="open-appearance">
                  <span>
                    <strong>外观与配色</strong>
                    <small>${escapeHtml(APPEARANCE_PALETTES[state.settings.palette]?.name || "深海蓝图")} · ${state.settings.theme === "dark" ? "深色" : "浅色"} · ${GLASS_LABELS[state.settings.glass] || GLASS_LABELS.off}</small>
                  </span>
                  <span aria-hidden="true">调整 →</span>
                </button>
                <div class="setting-row">
                  <div><strong>每天新词上限</strong><small>到期复习会计入总任务，不占用此上限。</small></div>
                  <select id="new-limit-select" aria-label="每天新词上限">
                    ${[5, 10, 15, 20].map((count) => `<option value="${count}" ${state.settings.newLimit === count ? "selected" : ""}>${count} 词 / 天</option>`).join("")}
                  </select>
                </div>
                <div class="setting-row">
                  <div><strong>发音来源</strong><small>词组优先整段播放，不再逐词拼接；有道不可用时整句切换系统语音。</small></div>
                  <select id="speech-engine" aria-label="英文发音来源">
                    <option value="youdao" ${state.settings.speechEngine === "youdao" ? "selected" : ""}>有道词典在线发音</option>
                    <option value="system" ${state.settings.speechEngine === "system" ? "selected" : ""}>系统英文语音</option>
                  </select>
                </div>
                <div class="setting-row">
                  <div><strong>系统语音备用</strong><small>有道音频加载失败时使用当前设备中的英文语音。</small></div>
                  <select id="speech-voice" aria-label="英文朗读声音"></select>
                </div>
                <div class="setting-row">
                  <div><strong>系统语音速度</strong><small>初次学习建议使用 0.8–0.9 倍速；有道音频使用固定语速。</small></div>
                  <select id="speech-rate" aria-label="朗读速度">
                    ${[0.7, 0.8, 0.9, 1, 1.1, 1.2].map((rate) => `<option value="${rate}" ${Number(state.settings.speechRate) === rate ? "selected" : ""}>${rate.toFixed(1)}×</option>`).join("")}
                  </select>
                </div>
                <div class="setting-row">
                  <div><strong>出现新卡时自动朗读</strong><small>切换单词卡后自动播放一次英文发音。</small></div>
                  <label class="speech-switch">
                    <input id="auto-speak" type="checkbox" ${state.settings.autoSpeak ? "checked" : ""}>
                    <span aria-hidden="true"></span>
                    <b>${state.settings.autoSpeak ? "已开启" : "已关闭"}</b>
                  </label>
                </div>
                <div class="setting-row">
                  <div><strong>长期记忆</strong><small>达到第 5 阶段及以上的词条数量。</small></div>
                  <strong>${stats.mastered} / ${terms.length}</strong>
                </div>
                <div class="setting-row">
                  <div><strong>学习档案</strong><small>导出 JSON 后可在其他浏览器恢复。</small></div>
                </div>
              </div>
              <div class="profile-actions">
                <button class="button button-soft" type="button" data-speak="Blueprint Class">试听英文朗读</button>
                <button class="button" type="button" data-action="export">导出进度</button>
                <button class="button" type="button" data-action="import">导入进度</button>
                <button class="button button-danger" type="button" data-action="reset">重置进度</button>
                <input id="import-progress-file" type="file" accept="application/json" hidden>
              </div>
            </section>
          </aside>
        </div>
      </div>
    `;
    refreshSpeechVoices();
  }

  function openWord(wordEn) {
    const info = wordByEn.get(wordEn);
    if (!info) return;
    const examples = terms
      .filter((term) => {
        const words = term.en.replace(/[()]/g, " ").split(/\s+/);
        return words.some((word) => word.toLowerCase() === wordEn.toLowerCase());
      })
      .slice(0, 10);
    termDialogContent.innerHTML = `
      <header class="term-detail-head">
        <div class="flashcard-meta">
          <span class="tag learning">词组组成</span>
          <span class="tag">单词语义查询</span>
        </div>
        <div class="term-title-row">
          <h2 id="term-dialog-title">${escapeHtml(info.en)}</h2>
          ${speakButtonMarkup(info.en, true)}
        </div>
        <p>${escapeHtml(info.zh)}</p>
      </header>
      <div class="detail-grid">
        <div class="detail-block wide">
          <span>怎么理解这个词</span>
          <p>${escapeHtml(info.note)}</p>
        </div>
      </div>
      <section class="detail-section">
        <h3>它在这些蓝图节点中出现</h3>
        <div class="term-link-list">
          ${examples.map((term) => `<button class="term-link" type="button" data-term-id="${term.id}">${escapeHtml(term.en)}</button>`).join("") || "<span class=\"tutorial-muted\">暂无词条示例</span>"}
        </div>
      </section>
      <div class="detail-actions">
        <button class="button button-primary" type="button" data-word-search="${escapeHtml(info.en)}">在词典中搜索 ${escapeHtml(info.en)}</button>
        <a class="button" href="${escapeHtml(youdaoWordUrl(info.en))}" target="_blank" rel="noopener noreferrer">打开有道词典</a>
        <button class="button" type="button" data-action="close-dialog">关闭</button>
      </div>
    `;
    if (!termDialog.open) termDialog.showModal();
  }

  function openTerm(termId) {
    const term = termById.get(Number(termId));
    if (!term) return;
    const status = termStatus(term);
    const todayAction = termTodayAction(term);
    const progress = currentTermState(term.id);
    const category = categoryByName.get(term.category);
    const related = relatedTerms(term);
    const scenarios = scenarioLinks(term);
    ui.termId = term.id;
    termDialogContent.innerHTML = `
      <header class="term-detail-head">
        <div class="flashcard-meta">
          <span class="tag ${status.key}">${status.label}</span>
          <span class="tag">${escapeHtml(term.category)}</span>
          <span class="tag">BP-${String(term.id).padStart(3, "0")}</span>
        </div>
        <div class="term-title-row">
          <h2 id="term-dialog-title">${escapeHtml(term.en)}</h2>
          ${speakButtonMarkup(term.en, true)}
        </div>
        <p>${escapeHtml(term.zh)}</p>
      </header>
      <div class="detail-grid">
        <div class="detail-block">
          <span>节点位置 LOCATION</span>
          <p><code>${escapeHtml(term.location)}</code></p>
        </div>
        <div class="detail-block">
          <span>记忆状态 STATUS</span>
          <p>${progress ? `阶段 ${Math.max(0, progress.step + 1)} · 下次复习 ${escapeHtml(formatDueAt(progress))}` : "尚未进入复习队列"}</p>
        </div>
        <div class="detail-block wide">
          <span>使用场景 WHEN TO USE</span>
          <p>${escapeHtml(term.usage)}</p>
        </div>
        <div class="detail-block wide">
          <span>避坑提示 WATCH OUT</span>
          <p>${escapeHtml(term.tip)}</p>
        </div>
      </div>
      ${phraseMarkup(term)}
      ${memoryAidMarkup(term)}
      <section class="detail-section">
        <h3>前后逻辑</h3>
        <div class="logic-path">
          ${category?.previous ? `<div class="logic-path-item"><span class="logic-path-index">前</span><div><strong>${escapeHtml(category.previous)}</strong><small>${escapeHtml(categoryByName.get(category.previous)?.purpose || "")}</small></div></div>` : ""}
          <div class="logic-path-item current"><span class="logic-path-index">今</span><div><strong>${escapeHtml(term.category)}</strong><small>${escapeHtml(category?.purpose || "")}</small></div></div>
          ${category?.next ? `<div class="logic-path-item"><span class="logic-path-index">后</span><div><strong>${escapeHtml(category.next)}</strong><small>${escapeHtml(categoryByName.get(category.next)?.purpose || "")}</small></div></div>` : ""}
        </div>
      </section>
      ${scenarios.length ? `
        <section class="detail-section">
          <h3>它出现在哪些逻辑链</h3>
          <div class="scenario-link-grid">
            ${scenarios.map((scenario) => `
              <button class="scenario-link" type="button" data-open-scenario="${scenario.id}">
                <strong>${escapeHtml(scenario.title)}</strong>
                <small>${escapeHtml(scenario.short)}</small>
              </button>
            `).join("")}
          </div>
        </section>
      ` : ""}
      <section class="detail-section">
        <h3>相关节点与下一步</h3>
        <div class="term-link-list">
          ${related.map((item) => `<button class="term-link" type="button" data-term-id="${item.id}">${escapeHtml(item.en)}</button>`).join("") || "<span>暂无关联节点</span>"}
        </div>
      </section>
      <div class="detail-actions">
        <button class="button button-primary" type="button" data-add-today="${term.id}" ${todayAction.disabled ? "disabled" : ""}>${escapeHtml(todayAction.label)}</button>
        <a class="button" href="${escapeHtml(youdaoWordUrl(term.en))}" target="_blank" rel="noopener noreferrer">到有道词典查看</a>
        <button class="button" type="button" data-action="close-and-study">返回今日学习</button>
        <button class="button" type="button" data-action="close-dialog">关闭</button>
      </div>
    `;
    if (!termDialog.open) termDialog.showModal();
  }

  function closeTermDialog() {
    if (termDialog.open) termDialog.close();
  }

  function navigate(route) {
    if (!pageMeta[route]) route = "today";
    ui.route = route;
    ui.revealed = false;
    if (location.hash !== `#${route}`) history.replaceState(null, "", `#${route}`);
    render();
    sidebar.classList.remove("open");
    mobileMenu.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toast(message, options = {}) {
    const region = document.getElementById("toast-region");
    if (options.replace) region.replaceChildren();
    const item = document.createElement("div");
    item.className = "toast";
    const copy = document.createElement("span");
    copy.textContent = message;
    item.appendChild(copy);
    let timer;
    if (options.actionLabel && typeof options.onAction === "function") {
      const action = document.createElement("button");
      action.type = "button";
      action.className = "toast-action";
      action.textContent = options.actionLabel;
      action.addEventListener("click", () => {
        window.clearTimeout(timer);
        item.remove();
        options.onAction();
      }, { once: true });
      item.appendChild(action);
    }
    region.appendChild(item);
    timer = window.setTimeout(() => item.remove(), options.duration || 2600);
  }

  function exportProgress() {
    const payload = {
      exportedAt: new Date().toISOString(),
      version: state.version,
      state,
    };
    const filename = `blueprint-memory-${dateKey()}.json`;
    if (window.AndroidBridge?.saveTextFile) {
      window.AndroidBridge.saveTextFile(filename, JSON.stringify(payload, null, 2));
      toast("学习进度已保存到“下载”文件夹");
      return;
    }
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
    toast("学习进度已导出");
  }

  function handleImport(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(String(reader.result));
        const nextState = imported.state || imported;
        if (!nextState.progress || typeof nextState.progress !== "object") throw new Error("文件缺少 progress");
        if (!confirm("导入后会用文件中的学习进度覆盖当前进度，继续吗？")) return;
        state = {
          ...structuredClone(defaultState),
          ...nextState,
          settings: { ...defaultState.settings, ...(nextState.settings || {}) },
          progress: nextState.progress || {},
          activityDays: Array.isArray(nextState.activityDays) ? nextState.activityDays : [],
          session: null,
        };
        if (!APPEARANCE_PALETTES[state.settings.palette]) state.settings.palette = "blueprint";
        if (!GLASS_MODES.has(state.settings.glass)) state.settings.glass = "off";
        state.settings.customSidebar = normalizeAccent(state.settings.customSidebar, "#0c2437");
        state.settings.customAccent = normalizeAccent(state.settings.customAccent);
        ensureSession();
        applyTheme();
        saveState();
        render();
        toast("学习进度已导入");
      } catch (error) {
        toast(`导入失败：${error.message}`);
      }
    };
    reader.readAsText(file);
  }

  function resetProgress() {
    if (!confirm("确定清空全部复习进度吗？词库内容不会删除，但学习记录会重置。")) return;
    const preservedSettings = { ...state.settings };
    state = structuredClone(defaultState);
    state.settings = { ...state.settings, ...preservedSettings };
    ensureSession();
    applyTheme();
    saveState();
    render();
    toast("学习进度已重置");
  }

  function handleClick(event) {
    const paletteButton = event.target.closest("button[data-palette]");
    if (paletteButton) {
      const palette = paletteButton.dataset.palette;
      if (!APPEARANCE_PALETTES[palette]) return;
      state.settings.palette = palette;
      applyTheme();
      saveState();
      toast(`配色已切换为${APPEARANCE_PALETTES[palette].name}`, { replace: true });
      return;
    }

    const appearanceThemeButton = event.target.closest("[data-appearance-theme]");
    if (appearanceThemeButton) {
      state.settings.theme = appearanceThemeButton.dataset.appearanceTheme === "dark" ? "dark" : "light";
      applyTheme();
      saveState();
      return;
    }

    const appearanceGlassButton = event.target.closest("[data-appearance-glass]");
    if (appearanceGlassButton) {
      state.settings.glass = GLASS_MODES.has(appearanceGlassButton.dataset.appearanceGlass)
        ? appearanceGlassButton.dataset.appearanceGlass
        : "off";
      applyTheme();
      saveState();
      return;
    }

    const routeButton = event.target.closest("[data-route]");
    if (routeButton) {
      event.preventDefault();
      navigate(routeButton.dataset.route);
      return;
    }

    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) {
      event.preventDefault();
      speakText(speakButton.dataset.speak, speakButton);
      return;
    }

    const wordButton = event.target.closest("[data-word]");
    if (wordButton) {
      event.preventDefault();
      openWord(wordButton.dataset.word);
      return;
    }

    const addTodayButton = event.target.closest("[data-add-today]");
    if (addTodayButton) {
      event.preventDefault();
      addTermToToday(addTodayButton.dataset.addToday);
      return;
    }

    const termButton = event.target.closest("[data-term-id]");
    if (termButton) {
      event.preventDefault();
      openTerm(termButton.dataset.termId);
      return;
    }

    const scenarioButton = event.target.closest("[data-scenario-id]");
    if (scenarioButton) {
      ui.scenarioId = scenarioButton.dataset.scenarioId;
      renderScenarios();
      return;
    }

    const scenarioLink = event.target.closest("[data-open-scenario]");
    if (scenarioLink) {
      ui.scenarioId = scenarioLink.dataset.openScenario;
      closeTermDialog();
      navigate("scenarios");
      return;
    }

    const studyButton = event.target.closest("[data-study-term]");
    if (studyButton) {
      event.preventDefault();
      startStudyingTerm(studyButton.dataset.studyTerm, false);
      return;
    }

    const learnedStudyButton = event.target.closest("[data-learned-study]");
    if (learnedStudyButton) {
      event.preventDefault();
      startStudyingTerm(learnedStudyButton.dataset.learnedStudy, true);
      return;
    }

    const wordlistScope = event.target.closest("[data-wordlist-scope]");
    if (wordlistScope) {
      ui.wordlistScope = wordlistScope.dataset.wordlistScope;
      renderWordlist();
      return;
    }

    const learnedScope = event.target.closest("[data-learned-scope]");
    if (learnedScope) {
      ui.learned.scope = learnedScope.dataset.learnedScope;
      renderLearned();
      return;
    }

    const wordSearchButton = event.target.closest("[data-word-search]");
    if (wordSearchButton) {
      closeTermDialog();
      ui.library.query = wordSearchButton.dataset.wordSearch;
      ui.library.category = "all";
      ui.library.status = "all";
      ui.library.limit = 24;
      navigate("library");
      return;
    }

    const tutorialQuery = event.target.closest("[data-tutorial-query]");
    if (tutorialQuery) {
      ui.tutorials.query = tutorialQuery.dataset.tutorialQuery;
      renderTutorials();
      return;
    }

    const tutorialTrack = event.target.closest("[data-tutorial-track]");
    if (tutorialTrack) {
      ui.tutorials.track = tutorialTrack.dataset.tutorialTrack;
      renderTutorials();
      return;
    }

    if (event.target.closest("[data-tutorial-reset]")) {
      ui.tutorials = { query: "", category: "all", level: "all", type: "all", track: "all", intent: "all" };
      renderTutorials();
      return;
    }

    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      ui.library.category = categoryButton.dataset.category;
      ui.library.limit = 24;
      navigate("library");
      return;
    }

    const action = event.target.closest("[data-action]")?.dataset.action;
    if (!action) return;

    if (action === "reveal") {
      ui.revealed = true;
      ui.hideNewAnswer = false;
      renderToday();
    }
    if (action === "hide-new-answer") {
      ui.revealed = false;
      ui.hideNewAnswer = true;
      renderToday();
    }
    if (action === "start-due-review") startDueReview();
    if (action === "load-more") {
      ui.library.limit += 24;
      updateLibraryResults();
    }
    if (action === "clear-library-search") {
      ui.library = { query: "", category: "all", status: "all", limit: 24 };
      renderLibrary();
    }
    if (action === "scroll-study") {
      document.getElementById("study-card")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (action === "export") exportProgress();
    if (action === "import") document.getElementById("import-progress-file")?.click();
    if (action === "reset") resetProgress();
    if (action === "open-appearance") openAppearanceDialog();
    if (action === "close-dialog") closeTermDialog();
    if (action === "close-and-study") {
      closeTermDialog();
      navigate("today");
    }

    const ratingButton = event.target.closest("[data-rating]");
    if (ratingButton) rateCurrent(ratingButton.dataset.rating);
  }

  function handleInput(event) {
    const memoryNote = event.target.closest?.("[data-memory-note]");
    if (memoryNote) {
      state.memoryNotes[memoryNote.dataset.memoryNote] = memoryNote.value.slice(0, 500);
      saveState();
    }
    if (event.target.id === "library-search") {
      ui.library.query = event.target.value;
      ui.library.limit = 24;
      updateLibraryResults();
    }
    if (event.target.id === "learned-search") {
      ui.learned.query = event.target.value;
      updateLearnedResults();
    }
    if (event.target.id === "tutorial-search") {
      ui.tutorials.query = event.target.value;
      updateTutorialResults();
    }
    if (event.target.id === "import-progress-file") {
      handleImport(event.target.files?.[0]);
      event.target.value = "";
    }
    if (event.target.id === "custom-accent") {
      state.settings.customAccent = normalizeAccent(event.target.value);
      state.settings.palette = "custom";
      applyTheme();
    }
    if (event.target.id === "custom-sidebar") {
      state.settings.customSidebar = normalizeAccent(event.target.value, "#0c2437");
      state.settings.palette = "custom";
      applyTheme();
    }
  }

  function handleChange(event) {
    if (event.target.id === "custom-accent") {
      state.settings.customAccent = normalizeAccent(event.target.value);
      state.settings.palette = "custom";
      applyTheme();
      saveState();
    }
    if (event.target.id === "custom-sidebar") {
      state.settings.customSidebar = normalizeAccent(event.target.value, "#0c2437");
      state.settings.palette = "custom";
      applyTheme();
      saveState();
    }
    if (event.target.id === "library-category") {
      ui.library.category = event.target.value;
      ui.library.limit = 24;
      updateLibraryResults();
    }
    if (event.target.id === "library-status") {
      ui.library.status = event.target.value;
      ui.library.limit = 24;
      updateLibraryResults();
    }
    if (event.target.id === "tutorial-category") {
      ui.tutorials.category = event.target.value;
      updateTutorialResults();
    }
    if (event.target.id === "tutorial-level") {
      ui.tutorials.level = event.target.value;
      updateTutorialResults();
    }
    if (event.target.id === "tutorial-type") {
      ui.tutorials.type = event.target.value;
      updateTutorialResults();
    }
    if (event.target.id === "tutorial-intent") {
      ui.tutorials.intent = event.target.value;
      updateTutorialResults();
    }
    if (event.target.id === "speech-voice") {
      state.settings.speechVoiceURI = event.target.value;
      saveState();
      toast("英文朗读声音已更新");
    }
    if (event.target.id === "speech-engine") {
      state.settings.speechEngine = event.target.value;
      saveState();
      refreshSpeechVoices();
      toast(state.settings.speechEngine === "youdao" ? "已切换到有道词典发音" : "已切换到系统英文语音");
    }
    if (event.target.id === "speech-rate") {
      state.settings.speechRate = Number(event.target.value);
      saveState();
      speakText("Blueprint Class");
    }
    if (event.target.id === "auto-speak") {
      state.settings.autoSpeak = event.target.checked;
      const label = event.target.closest(".speech-switch")?.querySelector("b");
      if (label) label.textContent = event.target.checked ? "已开启" : "已关闭";
      saveState();
      if (event.target.checked) {
        const term = setCurrentTerm();
        scheduleAutoSpeak(term);
      }
    }
    if (event.target.id === "new-limit-select") {
      state.settings.newLimit = Number(event.target.value);
      ensureSession();
      saveState();
      render();
      toast(`每天新词上限已改为 ${state.settings.newLimit}`);
    }
  }

  document.addEventListener("click", (event) => {
    const navButton = event.target.closest("[data-route]");
    if (navButton && !viewRoot.contains(navButton)) {
      event.preventDefault();
      navigate(navButton.dataset.route);
      return;
    }
    handleClick(event);

    const ratingButton = event.target.closest("[data-rating]");
    if (ratingButton) {
      event.stopPropagation();
      rateCurrent(ratingButton.dataset.rating);
    }
  });

  viewRoot.addEventListener("click", (event) => {
    const ratingButton = event.target.closest("[data-rating]");
    if (ratingButton) {
      event.preventDefault();
      event.stopPropagation();
      rateCurrent(ratingButton.dataset.rating);
    }
  });

  document.addEventListener("input", handleInput);
  document.addEventListener("change", handleChange);

  document.getElementById("term-dialog-close").addEventListener("click", closeTermDialog);
  termDialog.addEventListener("click", (event) => {
    if (event.target === termDialog) closeTermDialog();
  });

  themeToggle.addEventListener("click", openAppearanceDialog);
  document.getElementById("appearance-quick").addEventListener("click", openAppearanceDialog);
  document.getElementById("appearance-dialog-close").addEventListener("click", closeAppearanceDialog);
  appearanceDialog.addEventListener("click", (event) => {
    if (event.target === appearanceDialog) closeAppearanceDialog();
  });
  document.getElementById("appearance-reset").addEventListener("click", () => {
    state.settings.theme = defaultState.settings.theme;
    state.settings.palette = defaultState.settings.palette;
    state.settings.glass = defaultState.settings.glass;
    state.settings.customSidebar = defaultState.settings.customSidebar;
    state.settings.customAccent = defaultState.settings.customAccent;
    applyTheme();
    saveState();
    toast("已恢复默认外观", { replace: true });
  });

  mobileMenu.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    mobileMenu.setAttribute("aria-expanded", String(open));
  });

  document.getElementById("mobile-more")?.addEventListener("click", () => {
    sidebar.classList.add("open");
    mobileMenu.setAttribute("aria-expanded", "true");
  });

  document.getElementById("open-settings").addEventListener("click", () => {
    navigate("memory");
    requestAnimationFrame(() => document.getElementById("learning-settings")?.scrollIntoView({ behavior: "smooth", block: "center" }));
  });

  document.querySelector(".avatar-button").addEventListener("click", () => {
    navigate("memory");
    requestAnimationFrame(() => document.getElementById("learning-settings")?.scrollIntoView({ behavior: "smooth", block: "center" }));
  });

  if ("speechSynthesis" in window) {
    refreshSpeechVoices();
    window.speechSynthesis.addEventListener?.("voiceschanged", refreshSpeechVoices);
  }

  window.addEventListener("hashchange", () => {
    const route = location.hash.replace("#", "");
    if (pageMeta[route] && route !== ui.route) {
      ui.route = route;
      render();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (termDialog.open) return;
    if (ui.route !== "today") return;
    if (event.key === " ") {
      event.preventDefault();
      const term = setCurrentTerm();
      const isNew = term && !currentTermState(term.id);
      if (isNew && !ui.hideNewAnswer && !ui.revealed) {
        ui.hideNewAnswer = true;
        renderToday();
      } else if (!ui.revealed) {
        ui.revealed = true;
        renderToday();
      }
      return;
    }
    if (ui.revealed && ["1", "2", "3"].includes(event.key)) {
      event.preventDefault();
      rateCurrent({ 1: "forgot", 2: "vague", 3: "known" }[event.key]);
    }
  });

  const hashRoute = location.hash.replace("#", "");
  if (pageMeta[hashRoute]) ui.route = hashRoute;
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
  window.setInterval(() => {
    const before = getQueue().join(",");
    ensureSession();
    const after = getQueue().join(",");
    if (before !== after && !termDialog.open && ["today", "wordlist", "learned"].includes(ui.route)) {
      render();
    }
  }, 30000);
  render();
})();
