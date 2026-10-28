(() => {
  const data = window.BLUEPRINT_DATA;
  if (!data || !Array.isArray(data.terms)) return;

  const extraGlossary = [
    ["Landed", "落地", "角色从空中接触可站立表面时发生。", "Event Landed 里的核心动作。"],
    ["Falling", "下落中", "角色处于空中下落状态。", "Event Falling 用来处理开始坠落。"],
    ["Ledge", "平台边缘", "可站立平面的边缘。", "Walking Off Ledge 表示走出平台边缘。"],
    ["Jumped", "已起跳", "角色完成起跳动作。", "用于起跳后立即增加速度或播放反馈。"],
    ["Crouch", "蹲伏", "角色切换到蹲下姿态。", "常见于潜行、过矮通道。"],
    ["Swim", "游泳", "角色处于水中移动状态。", "用于进入或离开水面时切换逻辑。"],
    ["Possessed", "已控制", "控制器开始控制一个 Pawn。", "玩家 Possess Pawn 时触发。"],
    ["Unpossessed", "解除控制", "控制器不再控制该 Pawn。", "换人、退出控制时触发。"],
    ["Destroyed", "已销毁", "Actor 已被销毁。", "用于清理定时器、UI 或外部引用。"],
    ["Cursor", "光标", "鼠标指针或触摸选择位置。", "Cursor Over 事件用于悬停反馈。"],
    ["Clicked", "已点击", "鼠标或输入设备完成点击。", "Actor 与 UMG 控件都有点击事件。"],
    ["Released", "已松开", "按键或鼠标按钮被松开。", "与 Pressed 成对使用。"],
    ["Pressed", "已按下", "按键或鼠标按钮刚被按下。", "适合开始瞄准、蓄力或长按操作。"],
    ["Touch", "触摸", "移动端或多点触摸输入。", "Touch Begin 与 Touch End 成对处理。"],
    ["Hovered", "悬停", "指针进入控件或 Actor。", "用于鼠标移入时高亮。"],
    ["Unhovered", "结束悬停", "指针离开控件或 Actor。", "用于恢复普通颜色或隐藏提示。"],
    ["Construct", "构建", "Widget 在创建过程中执行。", "Construct 可安全绑定动态内容。"],
    ["Pre", "预先", "在某项构建或处理之前。", "Pre Construct 常用于编辑器预览。"],
    ["Destruct", "析构", "控件或对象销毁前执行。", "可用于解绑事件和清理外部状态。"],
    ["Focus", "焦点", "键盘或手柄当前选中的可交互控件。", "Focus Received/Lost 用于选中边框。"],
    ["Received", "已接收", "某个事件或焦点已经到达目标。", "常出现在事件节点名称中。"],
    ["Lost", "失去", "对象不再拥有焦点或控制。", "与 Received 相对。"],
    ["Post", "之后", "某个阶段完成之后再执行。", "Post Evaluate 表示动画求值后。"],
    ["Evaluate", "求值", "计算出当前动画或表达式结果。", "动画更新阶段常用。"],
    ["Initialize", "初始化", "设置对象的初始状态。", "Animation Blueprint 启动时执行。"],
    ["Linked", "链接的", "与另一层或资源建立关联。", "Linked Layers 指链接动画层。"],
    ["Layers", "分层", "多个可组合的层。", "动画层、UI 层都可能使用。"],
    ["Initialized", "已初始化", "初始化过程已经完成。", "用于等待动画层准备完成。"],
    ["Notify", "通知", "向目标发送事件或状态变化。", "Notify Actor Overlap 是函数调用而非事件入口。"],
    ["Any", "任意", "不限定具体类型或来源。", "Any Damage 接收所有伤害。"],
    ["Point", "点", "由某个命中位置或单点产生。", "Point Damage 包含命中方向与位置。"],
    ["Radial", "径向", "从一个中心向周围扩散。", "Radial Damage 适合爆炸伤害。"],
    ["Hit Box", "命中框", "用于检测攻击或接触的简化盒体。", "Hit Box Overlap 事件用于判定命中。"],
    ["Walking", "行走", "角色在可行走表面上移动。", "Walking Off Ledge 用来检测离开平台。"],
    ["Off", "离开", "不再位于某个状态或表面上。", "与 Walk / Ledge 组合表示走出边缘。"],
  ];

  const eventTerms = [
    ["Event Landed", "落地事件", "Character / Event Landed", "角色从空中落到可站立表面时触发。", "可在这里播放落地音效、生成尘土或处理摔落伤害。", ["Event", "Landed"], ["Event OnLanded", "OnLanded", "Landed"], ["movement"]],
    ["Event Falling", "开始下落事件", "Character / Event Falling", "角色离开地面并进入下落状态时触发。", "与 Landed 成对使用，管理空中和落地状态。", ["Event", "Falling"], ["Event OnFalling", "OnFalling"], ["movement"]],
    ["Event Movement Mode Changed", "移动模式改变事件", "Character / Event Movement Mode Changed", "从 Walking、Falling、Swimming、Flying 等模式切换时触发。", "先比较 Previous 和 New Movement Mode，再处理对应表现。", ["Event", "Movement", "Mode", "Changed"], ["Event MovementModeChanged", "OnMovementModeChanged"], ["movement"]],
    ["Event On Jumped", "起跳事件", "Character / Event On Jumped", "角色完成一次起跳时触发。", "适合添加起跳音效、冲刺速度或动画提示。", ["Event", "On", "Jumped"], ["Event Jumped", "OnJumped"], ["movement"]],
    ["Event On Walking Off Ledge", "走出平台边缘事件", "Character / Event On Walking Off Ledge", "角色从可行走平面边缘踏入空中时触发。", "可区分主动跳跃和意外坠落。", ["Event", "On", "Walking", "Off", "Ledge"], ["OnWalkingOffLedge", "Walking Off Ledge"], ["movement"]],
    ["Event On Start Crouch", "开始蹲伏事件", "Character / Event On Start Crouch", "角色进入蹲伏状态时触发。", "常用于降低镜头高度、改变移动速度和碰撞。", ["Event", "On", "Start", "Crouch"], ["Event OnStartCrouch", "OnStartCrouch"], ["movement"]],
    ["Event On End Crouch", "结束蹲伏事件", "Character / Event On End Crouch", "角色从蹲伏恢复站立时触发。", "要同时恢复镜头、速度和碰撞尺寸。", ["Event", "On", "End", "Crouch"], ["Event OnEndCrouch", "OnEndCrouch"], ["movement"]],
    ["Event On Start Swim", "开始游泳事件", "Character / Event On Start Swim", "角色进入游泳移动模式时触发。", "适合切换呼吸、浮力和水下镜头效果。", ["Event", "On", "Start", "Swim"], ["Event OnStartSwim", "OnStartSwim"], ["movement"]],
    ["Event On End Swim", "结束游泳事件", "Character / Event On End Swim", "角色结束游泳状态时触发。", "用于恢复地面移动、镜头和音频。", ["Event", "On", "End", "Swim"], ["Event OnEndSwim", "OnEndSwim"], ["movement"]],
    ["Event Possessed", "已控制事件", "Pawn / Event Possessed", "某个 Controller 开始控制该 Pawn 时触发。", "适合初始化玩家专属 UI、输入和引用。", ["Event", "Possessed"], ["OnPossessed"], ["movement"]],
    ["Event Un Possessed", "解除控制事件", "Pawn / Event Un Possessed", "Controller 停止控制该 Pawn 时触发。", "清理只属于原控制玩家的界面和输入。", ["Event", "Unpossessed"], ["Event UnPossessed", "OnUnPossessed"], ["movement"]],
    ["Event End Play", "结束运行时事件", "Actor / Event End Play", "Actor 因销毁、关卡切换或退出而离开运行时触发。", "适合清理定时器、事件绑定和外部资源。", ["Event", "End", "Play"], ["Event EndPlay", "EndPlay"], ["lifecycle"]],
    ["Event Destroyed", "销毁事件", "Actor / Event Destroyed", "Actor 被销毁时触发。", "不要在这里继续依赖即将失效的对象引用。", ["Event", "Destroyed"], ["OnDestroyed"], ["lifecycle"]],
    ["Event Actor Begin Cursor Over", "光标进入 Actor 事件", "Actor / Event ActorBeginCursorOver", "鼠标光标开始悬停在 Actor 上时触发。", "需要启用 Actor 的点击或光标事件。", ["Event", "Actor", "Begin", "Cursor"], ["ActorBeginCursorOver", "BeginCursorOver"], ["actor"]],
    ["Event Actor End Cursor Over", "光标离开 Actor 事件", "Actor / Event ActorEndCursorOver", "鼠标光标离开 Actor 时触发。", "与 Begin Cursor Over 成对恢复高亮。", ["Event", "Actor", "End", "Cursor"], ["ActorEndCursorOver", "EndCursorOver"], ["actor"]],
    ["Event Actor On Clicked", "点击 Actor 事件", "Actor / Event ActorOnClicked", "玩家点击该 Actor 时触发。", "Actor 必须启用 Player Controller 的点击事件。", ["Event", "Actor", "On", "Clicked"], ["ActorOnClicked", "OnClicked"], ["actor"]],
    ["Event Actor On Released", "松开 Actor 点击事件", "Actor / Event ActorOnReleased", "在 Actor 上松开点击时触发。", "常与 Actor On Clicked 配合处理拖放。", ["Event", "Actor", "On", "Released"], ["ActorOnReleased", "OnReleased"], ["actor"]],
    ["Event Actor Begin Touch", "触摸 Actor 开始事件", "Actor / Event ActorBeginTouch", "手指刚开始触摸该 Actor 时触发。", "移动端触摸交互需要开启对应碰撞设置。", ["Event", "Actor", "Begin", "Touch"], ["ActorBeginTouch", "BeginTouch"], ["actor"]],
    ["Event Actor End Touch", "触摸 Actor 结束事件", "Actor / Event ActorEndTouch", "手指停止触摸该 Actor 时触发。", "与 Begin Touch 成对恢复触摸状态。", ["Event", "Actor", "End", "Touch"], ["ActorEndTouch", "EndTouch"], ["actor"]],
    ["Event Actor Hit", "Actor 碰撞命中事件", "Actor / Event ActorHit", "模拟物理的 Actor 与其他物体发生阻挡碰撞时触发。", "Hit 只处理阻挡碰撞；重叠区域使用 Overlap 事件。", ["Event", "Actor", "Hit"], ["ActorHit"], ["collision"]],
    ["Event Component Hit", "组件碰撞命中事件", "Component / On Component Hit", "某个 Primitive Component 发生物理阻挡碰撞时触发。", "知道具体碰撞组件时使用，比 ActorHit 更精确。", ["Event", "Component", "Hit"], ["ComponentHit", "OnComponentHit"], ["collision"]],
    ["Event Component Begin Overlap", "组件开始重叠事件", "Component / On Component Begin Overlap", "具体组件与其他对象开始重叠时触发。", "可直接绑定到触发盒、武器或拾取组件。", ["Event", "Component", "Begin", "Overlap"], ["ComponentBeginOverlap", "OnComponentBeginOverlap"], ["collision"]],
    ["Event Component End Overlap", "组件结束重叠事件", "Component / On Component End Overlap", "具体组件结束与其他对象的重叠时触发。", "与 Begin Overlap 成对维护进入/离开状态。", ["Event", "Component", "End", "Overlap"], ["ComponentEndOverlap", "OnComponentEndOverlap"], ["collision"]],
    ["Event Any Damage", "任意伤害事件", "Actor / Event Any Damage", "Actor 收到任意来源伤害时触发。", "只适合统一扣血；需要方向或命中点时用 Point / Radial Damage。", ["Event", "Any", "Damage"], ["AnyDamage", "Event Receive Any Damage"], ["collision"]],
    ["Event Point Damage", "点伤害事件", "Actor / Event Point Damage", "受到来自某个方向和命中点的伤害时触发。", "通常用于子弹、近战等单点命中。", ["Event", "Point", "Damage"], ["PointDamage", "Event Receive Point Damage"], ["collision"]],
    ["Event Radial Damage", "径向伤害事件", "Actor / Event Radial Damage", "受到爆炸等范围伤害时触发。", "可用于根据距离和伤害来源方向处理反馈。", ["Event", "Radial", "Damage"], ["RadialDamage", "Event Receive Radial Damage"], ["collision"]],
    ["Notify Actor Begin Overlap", "通知 Actor 开始重叠", "Actor / Notify Actor Begin Overlap", "主动让 Actor 执行一次开始重叠处理。", "这是函数调用，不要与 Event ActorBeginOverlap 混淆。", ["Notify", "Actor", "Begin", "Overlap"], ["NotifyActorBeginOverlap"], ["collision"]],
    ["Notify Actor End Overlap", "通知 Actor 结束重叠", "Actor / Notify Actor End Overlap", "主动让 Actor 执行一次结束重叠处理。", "适合手动修复角色离开触发区但状态未清理的情况。", ["Notify", "Actor", "End", "Overlap"], ["NotifyActorEndOverlap"], ["collision"]],
    ["Notify Actor Hit", "通知 Actor 发生命中", "Actor / Notify Actor Hit", "主动通知 Actor 发生一次碰撞命中。", "这是函数调用，不是物理碰撞自动入口。", ["Notify", "Actor", "Hit"], ["NotifyActorHit"], ["collision"]],
    ["Event Receive Hit Box Begin Overlap", "命中框开始重叠事件", "Actor / Event Receive Hit Box Begin Overlap", "Hit Box 组件开始与其他对象重叠时触发。", "常见于角色攻击框或可交互命中框。", ["Event", "Receive", "Hit Box", "Begin", "Overlap"], ["ReceiveHitBoxBeginOverlap"], ["collision"]],
    ["Event Receive Hit Box End Overlap", "命中框结束重叠事件", "Actor / Event Receive Hit Box End Overlap", "Hit Box 组件结束重叠时触发。", "与 Begin 成对清理命中窗口。", ["Event", "Receive", "Hit Box", "End", "Overlap"], ["ReceiveHitBoxEndOverlap"], ["collision"]],
    ["Event Construct", "控件构建事件", "Widget Blueprint / Event Construct", "Widget 在创建时执行，可安全绑定动态内容。", "不要在 Construct 里重复创建永久对象。", ["Event", "Construct"], ["Construct"], ["ui"]],
    ["Event Pre Construct", "控件预构建事件", "Widget Blueprint / Event Pre Construct", "控件在编辑器预览和运行时都会提前执行。", "适合让设计时的预览接近运行效果。", ["Event", "Pre", "Construct"], ["PreConstruct"], ["ui"]],
    ["Event Destruct", "控件析构事件", "Widget Blueprint / Event Destruct", "Widget 被移除或销毁前触发。", "可在这里解绑事件、停止动画和清理外部引用。", ["Event", "Destruct"], ["Destruct"], ["ui"]],
    ["On Pressed", "按下事件", "Button / On Pressed", "按钮刚被按下时触发。", "适合开始蓄力或记录按下时间。", ["On", "Pressed"], ["Button OnPressed", "OnPressed"], ["ui"]],
    ["On Released", "松开事件", "Button / On Released", "按钮被松开时触发。", "可与 On Pressed 配合实现按住逻辑。", ["On", "Released"], ["Button OnReleased"], ["ui"]],
    ["On Hovered", "悬停事件", "Button / On Hovered", "指针进入按钮区域时触发。", "用于悬停高亮、音效或说明文字。", ["On", "Hovered"], ["Button OnHovered"], ["ui"]],
    ["On Unhovered", "结束悬停事件", "Button / On Unhovered", "指针离开按钮区域时触发。", "与 On Hovered 成对恢复普通状态。", ["On", "Unhovered"], ["Button OnUnhovered"], ["ui"]],
    ["On Mouse Button Down", "鼠标按下事件", "User Widget / On Mouse Button Down", "在控件上按下鼠标按钮时触发。", "需要让控件可接收鼠标输入。", ["On", "Mouse", "Button", "Down"], ["MouseButtonDown"], ["ui"]],
    ["On Mouse Button Up", "鼠标松开事件", "User Widget / On Mouse Button Up", "在控件上松开鼠标按钮时触发。", "拖放操作的结束阶段常在这里处理。", ["On", "Mouse", "Button", "Up"], ["MouseButtonUp"], ["ui"]],
    ["On Mouse Move", "鼠标移动事件", "User Widget / On Mouse Move", "鼠标在控件区域内移动时触发。", "可用于拖动条、画布或自定义指针交互。", ["On", "Mouse", "Move"], ["MouseMove"], ["ui"]],
    ["On Key Down", "按键按下事件", "User Widget / On Key Down", "控件获得焦点时按下键盘按键触发。", "先确认控件 Focusable，并处理焦点。", ["On", "Key", "Down"], ["KeyDown"], ["ui"]],
    ["On Key Up", "按键松开事件", "User Widget / On Key Up", "控件获得焦点时松开键盘按键触发。", "适合停止持续按键状态。", ["On", "Key", "Up"], ["KeyUp"], ["ui"]],
    ["On Focus Received", "获得焦点事件", "User Widget / On Focus Received", "控件获得键盘或手柄焦点时触发。", "用于显示选中边框和播放提示音。", ["On", "Focus", "Received"], ["FocusReceived"], ["ui"]],
    ["On Focus Lost", "失去焦点事件", "User Widget / On Focus Lost", "控件失去键盘或手柄焦点时触发。", "恢复普通视觉状态，避免选中样式残留。", ["On", "Focus", "Lost"], ["FocusLost"], ["ui"]],
    ["Event Receive Draw HUD", "绘制 HUD 事件", "HUD Blueprint / Event Receive Draw HUD", "HUD 每帧执行，可在屏幕上直接绘制文字、图形和坐标。", "UMG 通常更适合复杂 UI；简单调试和准星可用 Draw HUD。", ["Event", "Receive", "Draw", "HUD"], ["ReceiveDrawHUD", "DrawHUD"], ["ui"]],
    ["Event Blueprint Initialize Animation", "动画蓝图初始化事件", "Animation Blueprint / Event Blueprint Initialize Animation", "动画实例初始化时执行一次。", "适合获取 Owner 引用和初始化动画变量。", ["Event", "Blueprint", "Initialize", "Animation"], ["BlueprintInitializeAnimation"], ["animation"]],
    ["Event Blueprint Begin Play", "动画蓝图开始运行事件", "Animation Blueprint / Event Blueprint Begin Play", "动画蓝图开始运行时触发。", "可用于建立只运行一次的动画监听。", ["Event", "Blueprint", "Begin", "Play"], ["BlueprintBeginPlay"], ["animation"]],
    ["Event Blueprint Post Evaluate Animation", "动画蓝图求值后事件", "Animation Blueprint / Event Blueprint Post Evaluate Animation", "角色动画完成求值后触发。", "适合在动画结果确定后调整物理或外观参数。", ["Event", "Blueprint", "Post", "Evaluate", "Animation"], ["BlueprintPostEvaluateAnimation"], ["animation"]],
    ["Event Blueprint Linked Animation Layers Initialized", "链接动画层初始化完成事件", "Animation Blueprint / Linked Animation Layers Initialized", "所有链接动画层完成初始化后触发。", "适合初始化依赖链接层的变量和监听。", ["Event", "Blueprint", "Linked", "Animation", "Layers", "Initialized"], ["LinkedAnimationLayersInitialized"], ["animation"]],
  ];

  const existingEnglish = new Set(data.terms.map((term) => String(term.en).toLowerCase()));
  const existingGloss = new Map((data.wordGlossary || []).map((word) => [String(word.en).toLowerCase(), word.zh]));
  const knownGloss = new Map(extraGlossary.map(([en, zh]) => [en.toLowerCase(), zh]));
  for (const [en, zh] of existingGloss) {
    if (!knownGloss.has(en)) knownGloss.set(en, zh);
  }

  let nextId = Math.max(0, ...data.terms.map((term) => Number(term.id) || 0)) + 1;
  const added = [];
  for (const [en, zh, location, usage, tip, parts, aliases, groups] of eventTerms) {
    if (existingEnglish.has(en.toLowerCase())) continue;
    const term = {
      id: nextId++,
      category: en.startsWith("Event Receive Hit Box") || ["Event Actor Hit", "Event Component Hit", "Event Component Begin Overlap", "Event Component End Overlap", "Event Any Damage", "Event Point Damage", "Event Radial Damage", "Notify Actor Begin Overlap", "Notify Actor End Overlap", "Notify Actor Hit"].includes(en)
        ? "碰撞·射线·物理"
        : en.startsWith("Event Construct") || en.startsWith("Event Pre Construct") || en.startsWith("Event Destruct") || en.startsWith("On ") || en === "Event Receive Draw HUD"
          ? "UI / UMG"
          : en.startsWith("Event Blueprint")
            ? "动画"
            : "事件与输入",
      en,
      zh,
      location,
      usage,
      tip,
      groups,
      scenarios: [],
      aliases,
      phrase: {
        parts: parts.map((part) => ({ en: part, zh: knownGloss.get(part.toLowerCase()) || "" })),
        memory: zh,
      },
      memoryAid: {
        association: `把「${en}」想成蓝图里的一个触发入口：${usage}`,
        method: "先判断什么条件会触发它，再想触发后要连接什么动作。用事件名、使用场景和拆词各回忆一次。",
        selfCheck: `如果题目问“什么时候使用 ${en}？”，试着回答：${usage}`,
      },
    };
    data.terms.push(term);
    existingEnglish.add(en.toLowerCase());
    added.push(term);
  }

  data.wordGlossary ||= [];
  const existingWordKeys = new Set(data.wordGlossary.map((word) => String(word.en).toLowerCase()));
  for (const [en, zh, note] of extraGlossary) {
    if (existingWordKeys.has(en.toLowerCase())) continue;
    data.wordGlossary.push({ en, zh, note });
    existingWordKeys.add(en.toLowerCase());
  }

  data.totalTerms = data.terms.length;
  for (const category of data.categories || []) {
    category.count = data.terms.filter((term) => term.category === category.name).length;
  }
  if (added.length) {
    data.conceptGroups ||= [];
    const existingGroup = data.conceptGroups.find((group) => group.id === "events");
    if (existingGroup) {
      existingGroup.termIds = [...new Set([...existingGroup.termIds, ...added.map((term) => term.id)])];
    } else {
      data.conceptGroups.push({
        id: "events",
        title: "事件入口地图",
        note: "先判断事件何时触发，再连接状态清理、反馈表现和后续流程。",
        termIds: added.map((term) => term.id),
      });
    }
  }
  data.extensionVersion = "1.2.10-events";
})();
