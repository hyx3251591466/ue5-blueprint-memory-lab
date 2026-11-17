import { writeFile } from 'node:fs/promises';

// Refresh the static index of Blueprint-visible members on the classes most
// commonly used from UE graphs. Epic's Blueprint API directory is explicitly
// non-exhaustive, so this supplements it with the Runtime API class pages.
const classes = [
  ['Runtime/Engine', 'AActor'], ['Runtime/Engine', 'APawn'], ['Runtime/Engine', 'ACharacter'],
  ['Runtime/Engine', 'AController'], ['Runtime/Engine', 'APlayerController'], ['Runtime/Engine', 'APlayerState'],
  ['Runtime/Engine', 'AGameMode'], ['Runtime/Engine', 'AGameModeBase'], ['Runtime/Engine', 'AGameState'],
  ['Runtime/Engine', 'AGameStateBase'], ['Runtime/Engine', 'AHUD'], ['Runtime/Engine', 'APlayerCameraManager'],
  ['Runtime/Engine', 'AGameSession'], ['Runtime/Engine', 'UGameInstance'], ['Runtime/Engine', 'UGameViewportClient'],
  ['Runtime/Engine', 'ULocalPlayer'], ['Runtime/Engine', 'UWorld'], ['Runtime/Engine', 'UActorComponent'],
  ['Runtime/Engine', 'USceneComponent'], ['Runtime/Engine', 'UPrimitiveComponent'],
  ['Runtime/Engine', 'UStaticMeshComponent'], ['Runtime/Engine', 'USkeletalMeshComponent'],
  ['Runtime/Engine', 'UCharacterMovementComponent'], ['Runtime/Engine', 'UMovementComponent'],
  ['Runtime/Engine', 'UInputComponent'], ['Runtime/Engine', 'UGameplayStatics'],
  ['Runtime/Engine', 'UKismetSystemLibrary'], ['Runtime/Engine', 'UKismetMathLibrary'],
  ['Runtime/Engine', 'UKismetStringLibrary'], ['Runtime/Engine', 'UKismetTextLibrary'],
  ['Runtime/Engine', 'UKismetArrayLibrary'], ['Runtime/Engine', 'UKismetGuidLibrary'],
  ['Runtime/Engine', 'UKismetRenderingLibrary'], ['Runtime/Engine', 'USaveGame'],
  ['Runtime/Engine', 'UDataTable'], ['Runtime/Engine', 'UDataAsset'], ['Runtime/Engine', 'UAudioComponent'],
  ['Runtime/Engine', 'UCameraComponent'], ['Runtime/Engine', 'USpringArmComponent'],
  ['Runtime/Engine', 'UBoxComponent'], ['Runtime/Engine', 'USphereComponent'],
  ['Runtime/Engine', 'UCapsuleComponent'], ['Runtime/Engine', 'UAnimInstance'],
  ['Runtime/Engine', 'UAnimMontage'], ['Runtime/Engine', 'UCurveFloat'], ['Runtime/Engine', 'UCurveVector'],
  ['Runtime/Engine', 'ULevelStreaming'], ['Runtime/Engine', 'ULevel'], ['Runtime/Engine', 'UMaterialInstanceDynamic'],
  ['Runtime/Engine', 'UGameInstanceSubsystem'], ['Runtime/Engine', 'UWorldSubsystem'],
  ['Runtime/UMG', 'UUserWidget'], ['Runtime/UMG', 'UWidget'], ['Runtime/UMG', 'UWidgetBlueprintLibrary'],
  ['Runtime/UMG', 'UWidgetLayoutLibrary'], ['Runtime/UMG', 'UButton'], ['Runtime/UMG', 'UCheckBox'],
  ['Runtime/UMG', 'UComboBoxString'], ['Runtime/UMG', 'UEditableText'], ['Runtime/UMG', 'UEditableTextBox'],
  ['Runtime/UMG', 'UListView'], ['Runtime/UMG', 'UTileView'], ['Runtime/UMG', 'UTextBlock'],
  ['Runtime/UMG', 'UImage'], ['Runtime/UMG', 'UBorder'], ['Runtime/UMG', 'UPanelWidget'],
  ['Runtime/UMG', 'UCanvasPanel'], ['Runtime/UMG', 'UScrollBox'], ['Runtime/UMG', 'UProgressBar'],
  ['Runtime/UMG', 'USlider'], ['Plugins/EnhancedInput', 'UEnhancedInputComponent'],
  ['Plugins/EnhancedInput', 'UInputAction'], ['Plugins/EnhancedInput', 'UInputMappingContext'],
  ['Plugins/EnhancedInput', 'UEnhancedInputLocalPlayerSubsystem'],
  ['Runtime/AIModule', 'AAIController'], ['Runtime/AIModule', 'UAIPerceptionComponent'],
  ['Runtime/AIModule', 'UBlackboardComponent'], ['Runtime/AIModule', 'UBlackboardData'],
  ['Runtime/AIModule', 'UBehaviorTree'], ['Runtime/AIModule', 'UBehaviorTreeComponent'],
  ['Runtime/GameplayTags', 'UGameplayTagsManager'], ['Runtime/NavigationSystem', 'UNavigationSystemV1'],
  ['Runtime/NavigationSystem', 'UNavigationPath'], ['Runtime/LevelSequence', 'ULevelSequencePlayer'],
  ['Runtime/MovieScene', 'UMovieSceneSequencePlayer'], ['Runtime/Landscape', 'ALandscape'],
  ['Runtime/MediaAssets', 'UMediaPlayer'], ['Runtime/MediaAssets', 'UMediaTexture'],
  ['Plugins/GameplayAbilities', 'UAbilitySystemComponent'], ['Plugins/GameplayAbilities', 'UGameplayAbility'],
  ['Plugins/GameplayAbilities', 'UGameplayEffect'], ['Plugins/GameplayAbilities', 'AGameplayCueNotify_Actor'],
  ['Plugins/GameplayAbilities', 'UGameplayCueNotify_Static'],
  ['Plugins/Niagara', 'UNiagaraFunctionLibrary'], ['Plugins/Niagara', 'UNiagaraComponent'],
];

const base = 'https://dev.epicgames.com/documentation/en-us/unreal-engine/API/';
const cleanText = (html) => decodeEntities(html.replace(/<br\s*\/?\s*>/gi, ' ').replace(/<[^>]*>/g, ' '))
  .replace(/\s+/g, ' ').trim();
function decodeEntities(value) {
  return value
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&').replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}
function humanize(value) {
  return String(value || '').replace(/^K2_/, '').replace(/^Receive/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim();
}
function parseClass(html, module, className) {
  const pageUrl = `${base}${module}/${className}?application_version=5.8`;
  const rows = html.match(/<tr\b[\s\S]*?<\/tr>/gi) || [];
  const found = [];
  for (const row of rows) {
    const cells = [...row.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map((cell) => cell[1]);
    if (cells.length < 4) continue;
    const metadata = cleanText(cells[3]);
    const specifiers = ['BlueprintCallable', 'BlueprintPure', 'BlueprintImplementableEvent', 'BlueprintNativeEvent', 'BlueprintAssignable', 'BlueprintReadOnly', 'BlueprintReadWrite'];
    const matched = specifiers.filter((specifier) => new RegExp(`\\b${specifier}\\b`).test(metadata));
    if (!matched.length) continue;

    const signature = cleanText(cells[0]);
    const callable = /BlueprintCallable|BlueprintPure|BlueprintImplementableEvent|BlueprintNativeEvent/.test(metadata);
    const memberName = callable
      ? signature.match(/([A-Za-z_][A-Za-z0-9_]*)\s*\(/)?.[1]
      : signature.match(/([A-Za-z_][A-Za-z0-9_]*)\s*$/)?.[1];
    if (!memberName || /^(const|void|bool|int|float|double|FVector|FRotator|FName|FString|FText|UObject|AActor)$/.test(memberName)) continue;

    const displayName = metadata.match(/DisplayName\s*=\s*["']([^"']+)["']/i)?.[1] || '';
    const nodeName = humanize(displayName || memberName);
    if (!nodeName) continue;
    const isEvent = /BlueprintImplementableEvent|BlueprintNativeEvent/.test(metadata);
    const isDelegate = /BlueprintAssignable/.test(metadata);
    const category = metadata.match(/Category\s*=\s*["']?([^"',)]+)/i)?.[1]?.trim() || '';
    const summary = cleanText(cells[1]);
    found.push({
      module, className, memberName, nodeName, displayName, category, summary,
      isEvent, isDelegate, specifiers: matched, pageUrl,
    });
  }
  return found;
}

async function fetchClass([module, className]) {
  const url = `${base}${module}/${className}?application_version=5.8`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, { headers: { 'User-Agent': 'BlueprintMemoryLab/1.0 (reference catalog)' } });
      if (!response.ok) return { module, className, error: `HTTP ${response.status}` };
      const html = await response.text();
      if (!html.includes('<title>') || !html.includes('Unreal Engine')) return { module, className, error: 'Unreal Engine API page title not found' };
      return { module, className, entries: parseClass(html, module, className) };
    } catch (error) {
      if (attempt === 2) return { module, className, error: error.message };
      await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
    }
  }
}

const results = [];
let cursor = 0;
async function worker() {
  while (cursor < classes.length) {
    const index = cursor++;
    results[index] = await fetchClass(classes[index]);
    process.stdout.write(`\rEpic class pages ${index + 1}/${classes.length}`);
  }
}
await Promise.all(Array.from({ length: 6 }, worker));
const entries = results.flatMap((result) => result?.entries || []);
const unique = new Map();
for (const entry of entries) {
  const key = `${entry.module}/${entry.className}#${entry.memberName}`.toLowerCase();
  if (!unique.has(key)) unique.set(key, entry);
}
const catalog = {
  version: '5.8',
  updated: new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Shanghai' }).format(new Date()),
  source: 'Epic Unreal Engine 5.8 API class pages',
  requestedClasses: classes.length,
  fetchedClasses: results.filter((result) => result?.entries).length,
  failedClasses: results.filter((result) => result?.error).map(({ module, className, error }) => ({ module, className, error })),
  entries: [...unique.values()],
};
const js = `/* UE 5.8 Blueprint-visible members from Epic class API pages. Generated ${catalog.updated}. */\n(() => {\n  const catalog = ${JSON.stringify(catalog)};\n  const data = window.BLUEPRINT_DATA;\n  if (!data || !Array.isArray(data.dictionaryTerms)) return;\n  const normalize = (value) => String(value || '').toLowerCase().replace(/[^a-z0-9\\u4e00-\\u9fff]/g, '');\n  const splitWords = (value) => String(value || '').replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2').match(/[A-Za-z][A-Za-z0-9]*|[0-9]+/g) || [];\n  const glossary = new Map((data.wordGlossary || []).map((word) => [normalize(word.en), word.zh]));\n  const dictionary = data.dictionaryTerms;\n  const allByName = new Map([...data.terms, ...dictionary].map((term) => [normalize(term.en), term]));\n  const category = '参考 · UE 5.8 蓝图类 API';\n  const usedIds = new Set([...data.terms, ...dictionary].map((term) => Number(term.id)));\n  const hash = (value) => { let n = 2166136261; for (let i = 0; i < value.length; i++) { n ^= value.charCodeAt(i); n = Math.imul(n, 16777619); } return n >>> 0; };\n  const human = (value) => { const words = splitWords(value); return words.map((word) => glossary.get(normalize(word)) || word).join(''); };\n  const seenMembers = new Set();\n  let added = 0;\n  let linked = 0;\n  for (const item of catalog.entries) {\n    const identity = (item.module + '/' + item.className + '#' + item.memberName).toLowerCase();\n    if (seenMembers.has(identity)) continue;\n    seenMembers.add(identity);\n    const key = normalize(item.nodeName);\n    if (!key) continue;\n    const existing = allByName.get(key);\n    const eventAlias = item.isEvent ? 'Event ' + item.nodeName : '';\n    const aliases = [...new Set([item.memberName, item.className + '::' + item.memberName, item.displayName, item.nodeName, eventAlias].filter(Boolean))];\n    const path = item.module + '/' + item.className;\n    const sourceUrl = item.pageUrl;\n    if (existing) {\n      existing.aliases = [...new Set([...(existing.aliases || []), ...aliases])];\n      existing.additionalSources ||= [];\n      if (!existing.additionalSources.some((source) => source.url === sourceUrl)) existing.additionalSources.push({ label: 'Epic UE 5.8 类 API：' + item.className, url: sourceUrl });\n      existing.apiClassMembers ||= [];\n      if (!existing.apiClassMembers.includes(item.memberName)) existing.apiClassMembers.push(item.memberName);\n      linked++;\n      continue;\n    }\n    const words = splitWords(item.nodeName);\n    const translated = human(item.nodeName);\n    let id = 2100000000 + hash(identity);\n    while (usedIds.has(id)) id++;\n    usedIds.add(id);\n    const typeLabel = item.isEvent ? '可覆写事件' : item.isDelegate ? '事件委托' : '可从蓝图调用的成员';\n    const term = {\n      id, en: item.isEvent ? (eventAlias || item.nodeName) : item.nodeName,\n      zh: translated || item.nodeName, category, dictionaryOnly: true, blueprintClassApi: true,\n      location: 'Epic UE 5.8 API / ' + path + (item.category ? ' / ' + item.category : ''),\n      usage: item.className + ' 的' + typeLabel + '。中文按名称拆词辅助理解；是否可用取决于蓝图类型、目标对象和已启用插件。',\n      tip: item.summary ? 'Epic 原文摘要：' + item.summary : 'Epic 类 API 页面收录项。',\n      aliases, apiClass: item.className, apiMember: item.memberName, apiPath: path,\n      apiSpecifiers: item.specifiers, sourceUrl, sourceLabel: 'Epic UE 5.8 类 API 原文', groups: [], scenarios: [],\n      phrase: words.length > 1 ? { parts: words.map((word) => ({ en: word, zh: glossary.get(normalize(word)) || '' })), memory: translated } : undefined,\n    };\n    dictionary.push(term);\n    allByName.set(key, term);\n    if (eventAlias) allByName.set(normalize(eventAlias), term);\n    added++;\n  }\n  const prior = (data.referenceCategories || []).filter((entry) => entry.name !== category);\n  data.referenceCategories = [...prior, { name: category, count: added, purpose: 'Epic UE 5.8 常用引擎类的 BlueprintCallable、BlueprintPure、可覆写事件与可绑定委托。并非每项在所有蓝图上下文都可见。', sourceUrl: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/API?application_version=5.8' }];\n  data.epicBlueprintClassApiCatalog = { version: catalog.version, updated: catalog.updated, requestedClasses: catalog.requestedClasses, fetchedClasses: catalog.fetchedClasses, failedClasses: catalog.failedClasses, sourceUrl: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/API?application_version=5.8', sourceEntryCount: catalog.entries.length, addedReferenceCount: added, linkedExistingCount: linked };\n  data.dictionaryTotalTerms = data.terms.length + dictionary.length;\n})();\n`;
const normalizedJs = js
  .replace(
    "const allByName = new Map([...data.terms, ...dictionary].map((term) => [normalize(term.en), term]));",
    "const allByName = new Map();\n  for (const term of [...data.terms, ...dictionary]) for (const name of [term.en, ...(term.aliases || [])]) if (name) allByName.set(normalize(name), term);",
  )
  .replace("const key = normalize(item.nodeName);", "const eventAlias = item.isEvent ? 'Event ' + item.nodeName : '';\n    const key = normalize(item.isEvent ? eventAlias : item.nodeName);")
  .replace("    const eventAlias = item.isEvent ? 'Event ' + item.nodeName : '';\n    const aliases =", "    const aliases =");
await writeFile(new URL('./blueprint-class-api-catalog.js', import.meta.url), normalizedJs, 'utf8');
console.log(`\nGenerated ${unique.size} Blueprint-visible members from ${catalog.fetchedClasses}/${catalog.requestedClasses} class pages; ${catalog.failedClasses.length} pages failed.`);
