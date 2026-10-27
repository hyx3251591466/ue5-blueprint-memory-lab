window.BLUEPRINT_DATA = {
  "generatedAt": "2026-10-27T04:54:26.045Z",
  "totalTerms": 573,
  "terms": [
    {
      "id": 1,
      "category": "基础与编辑器",
      "en": "Blueprint Class",
      "zh": "蓝图类",
      "location": "Content Browser / Add / Blueprint Class",
      "usage": "创建可放在关卡中或由代码生成的游戏对象。",
      "tip": "先选父类；角色通常选 Character，普通物件通常选 Actor。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Blueprint",
            "zh": "蓝图"
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "蓝图类"
      },
      "memoryAid": {
        "association": "把 Blueprint Class 想成一张“对象制造图纸”：先选父类，再往里面放变量、组件和事件。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Blueprint Class？”，试着回答：创建可放在关卡中或由代码生成的游戏对象。"
      }
    },
    {
      "id": 2,
      "category": "基础与编辑器",
      "en": "Level Blueprint",
      "zh": "关卡蓝图",
      "location": "蓝图编辑器 / Level Blueprint",
      "usage": "只服务于当前关卡的脚本。",
      "tip": "适合关卡机关和演出；通用逻辑优先放进 Blueprint Class。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Level",
            "zh": "关卡"
          },
          {
            "en": "Blueprint",
            "zh": "蓝图"
          }
        ],
        "memory": "关卡蓝图"
      },
      "memoryAid": {
        "association": "Level Blueprint 像贴在某个教室门上的规则，只在这间关卡里生效。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Level Blueprint？”，试着回答：只服务于当前关卡的脚本。"
      }
    },
    {
      "id": 3,
      "category": "基础与编辑器",
      "en": "Blueprint Interface",
      "zh": "蓝图接口",
      "location": "Content Browser / Add / Blueprint Interface",
      "usage": "定义不同蓝图类都能实现的共同功能。",
      "tip": "例如门、箱子都可实现 Interact 接口。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Blueprint",
            "zh": "蓝图"
          },
          {
            "en": "Interface",
            "zh": "接口"
          }
        ],
        "memory": "蓝图接口"
      },
      "memoryAid": {
        "association": "接口像插座标准：门和箱子都能接同一个 Interact 插头。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Blueprint Interface？”，试着回答：定义不同蓝图类都能实现的共同功能。"
      }
    },
    {
      "id": 4,
      "category": "基础与编辑器",
      "en": "Blueprint Function Library",
      "zh": "蓝图函数库",
      "location": "Content Browser / Add / Blueprint",
      "usage": "存放可跨多个蓝图重复调用的纯函数。",
      "tip": "适合数学与工具函数，不要依赖某个场景实例。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Blueprint",
            "zh": "蓝图"
          },
          {
            "en": "Function",
            "zh": "函数"
          },
          {
            "en": "Library",
            "zh": "库"
          }
        ],
        "memory": "蓝图函数库"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Blueprint=蓝图 → Function=函数 → Library=库。合起来就是“蓝图函数库”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Blueprint Function Library？”，试着回答：存放可跨多个蓝图重复调用的纯函数。"
      }
    },
    {
      "id": 5,
      "category": "基础与编辑器",
      "en": "Blueprint Macro Library",
      "zh": "蓝图宏库",
      "location": "Content Browser / Add / Blueprint",
      "usage": "存放可复用连线逻辑的宏。",
      "tip": "宏会展开逻辑；需要独立调试或复用状态时优先用 Function。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Blueprint",
            "zh": "蓝图"
          },
          {
            "en": "Macro",
            "zh": "宏"
          },
          {
            "en": "Library",
            "zh": "库"
          }
        ],
        "memory": "蓝图宏库"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Blueprint=蓝图 → Macro=宏 → Library=库。合起来就是“蓝图宏库”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Blueprint Macro Library？”，试着回答：存放可复用连线逻辑的宏。"
      }
    },
    {
      "id": 6,
      "category": "基础与编辑器",
      "en": "Actor",
      "zh": " Actor（场景对象）",
      "location": "Class Settings / Parent Class",
      "usage": "拥有 Transform、可放入关卡的基础对象。",
      "tip": "Actor 不等于模型；模型通常由 Actor 内的组件显示。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Actor 是舞台上的演员，必须有位置、旋转和缩放，才能登台。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Actor？”，试着回答：拥有 Transform、可放入关卡的基础对象。"
      }
    },
    {
      "id": 7,
      "category": "基础与编辑器",
      "en": "Pawn",
      "zh": "Pawn（可控制实体）",
      "location": "Class Settings / Parent Class",
      "usage": "能被 Player Controller 或 AI Controller 控制的实体。",
      "tip": "需要角色移动、跳跃时优先用 Character，而不是直接用 Pawn。",
      "groups": [
        "movement"
      ],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Pawn 是遥控玩具，能被玩家或 AI 握住控制器。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Pawn？”，试着回答：能被 Player Controller 或 AI Controller 控制的实体。"
      }
    },
    {
      "id": 8,
      "category": "基础与编辑器",
      "en": "Character",
      "zh": "角色",
      "location": "Class Settings / Parent Class",
      "usage": "自带 Character Movement Component 的可移动角色。",
      "tip": "适合第一/第三人称玩家和非玩家角色。",
      "groups": [
        "movement"
      ],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Character 是自带腿和移动组件的 Pawn，专门负责走跑跳。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Character？”，试着回答：自带 Character Movement Component 的可移动角色。"
      }
    },
    {
      "id": 9,
      "category": "基础与编辑器",
      "en": "Game Mode Base",
      "zh": "游戏模式基础类",
      "location": "Class Settings / Parent Class / World Settings",
      "usage": "规定本局游戏使用的默认 Pawn、Controller 等规则。",
      "tip": "实际项目通常新建 GameMode，再在 World Settings 里指定。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "Mode",
            "zh": "模式"
          },
          {
            "en": "Base",
            "zh": ""
          }
        ],
        "memory": "游戏模式基础类"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Game=游戏 → Mode=模式。合起来就是“游戏模式基础类”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Game Mode Base？”，试着回答：规定本局游戏使用的默认 Pawn、Controller 等规则。"
      }
    },
    {
      "id": 10,
      "category": "基础与编辑器",
      "en": "Game State Base",
      "zh": "游戏状态基础类",
      "location": "Class Settings / Parent Class",
      "usage": "保存所有玩家共享的整局游戏状态。",
      "tip": "比分、回合、公共倒计时常放这里。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "State",
            "zh": "状态"
          },
          {
            "en": "Base",
            "zh": ""
          }
        ],
        "memory": "游戏状态基础类"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Game=游戏 → State=状态。合起来就是“游戏状态基础类”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Game State Base？”，试着回答：保存所有玩家共享的整局游戏状态。"
      }
    },
    {
      "id": 11,
      "category": "基础与编辑器",
      "en": "Player Controller",
      "zh": "玩家控制器",
      "location": "Class Settings / Parent Class",
      "usage": "代表玩家输入与本地控制意图。",
      "tip": "不要把它当成可见角色；角色通常是 Controlled Pawn。",
      "groups": [
        "movement"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "Controller",
            "zh": "控制器"
          }
        ],
        "memory": "玩家控制器"
      },
      "memoryAid": {
        "association": "Player Controller 像方向盘，代表玩家的控制意图，不是角色身体。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Player Controller？”，试着回答：代表玩家输入与本地控制意图。"
      }
    },
    {
      "id": 12,
      "category": "基础与编辑器",
      "en": "Player State",
      "zh": "玩家状态",
      "location": "Class Settings / Parent Class",
      "usage": "保存单个玩家的共享游戏状态。",
      "tip": "玩家名、得分、队伍等常放这里。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "State",
            "zh": "状态"
          }
        ],
        "memory": "玩家状态"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Player=玩家 → State=状态。合起来就是“玩家状态”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Player State？”，试着回答：保存单个玩家的共享游戏状态。"
      }
    },
    {
      "id": 13,
      "category": "基础与编辑器",
      "en": "Game Instance",
      "zh": "游戏实例",
      "location": "Project Settings / Maps & Modes / Game Instance Class",
      "usage": "跨关卡保留的游戏级容器。",
      "tip": "适合保存少量全局数据；大量数据用 SaveGame 或子系统。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "Instance",
            "zh": "实例"
          }
        ],
        "memory": "游戏实例"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Game=游戏 → Instance=实例。合起来就是“游戏实例”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Game Instance？”，试着回答：跨关卡保留的游戏级容器。"
      }
    },
    {
      "id": 14,
      "category": "基础与编辑器",
      "en": "User Widget",
      "zh": "用户控件",
      "location": "Content Browser / Add / User Interface / Widget Blueprint",
      "usage": "制作 UI 界面的蓝图。",
      "tip": "负责显示与交互，复杂游戏逻辑应交给 Actor 或 GameMode。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "User",
            "zh": ""
          },
          {
            "en": "Widget",
            "zh": "控件"
          }
        ],
        "memory": "用户控件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Widget=控件。合起来就是“用户控件”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 User Widget？”，试着回答：制作 UI 界面的蓝图。"
      }
    },
    {
      "id": 15,
      "category": "基础与编辑器",
      "en": "Animation Blueprint",
      "zh": "动画蓝图",
      "location": "Content Browser / Add / Animation",
      "usage": "根据移动、状态等变量驱动角色动画。",
      "tip": "先理解 AnimGraph、State Machine 和 Update Animation。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Animation",
            "zh": "动画"
          },
          {
            "en": "Blueprint",
            "zh": "蓝图"
          }
        ],
        "memory": "动画蓝图"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Animation=动画 → Blueprint=蓝图。合起来就是“动画蓝图”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Animation Blueprint？”，试着回答：根据移动、状态等变量驱动角色动画。"
      }
    },
    {
      "id": 16,
      "category": "基础与编辑器",
      "en": "Blueprint Editor",
      "zh": "蓝图编辑器",
      "location": "双击 Blueprint Class 打开",
      "usage": "编辑事件、函数、变量和组件的窗口。",
      "tip": "左侧多为结构与变量，中间是图表，右侧是 Details。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Blueprint",
            "zh": "蓝图"
          },
          {
            "en": "Editor",
            "zh": ""
          }
        ],
        "memory": "蓝图编辑器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Blueprint=蓝图。合起来就是“蓝图编辑器”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Blueprint Editor？”，试着回答：编辑事件、函数、变量和组件的窗口。"
      }
    },
    {
      "id": 17,
      "category": "基础与编辑器",
      "en": "Event Graph",
      "zh": "事件图表",
      "location": "Blueprint Editor / Event Graph",
      "usage": "放置事件、函数和流程节点的主图表。",
      "tip": "执行线从白色事件节点出发，按顺序连接。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Event",
            "zh": "事件"
          },
          {
            "en": "Graph",
            "zh": ""
          }
        ],
        "memory": "事件图表"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Event=事件。合起来就是“事件图表”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Event Graph？”，试着回答：放置事件、函数和流程节点的主图表。"
      }
    },
    {
      "id": 18,
      "category": "基础与编辑器",
      "en": "Construction Script",
      "zh": "构造脚本",
      "location": "Blueprint Editor / Construction Script",
      "usage": "对象在编辑器或生成时构建自身。",
      "tip": "适合自动拼接组件；不要在这里做依赖玩家输入的玩法。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Construction",
            "zh": ""
          },
          {
            "en": "Script",
            "zh": ""
          }
        ],
        "memory": "构造脚本"
      },
      "memoryAid": {
        "association": "把「Construction Script」想成蓝图工作室的抽屉里的一个工具，它负责“构造脚本”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Construction Script？”，试着回答：对象在编辑器或生成时构建自身。"
      }
    },
    {
      "id": 19,
      "category": "基础与编辑器",
      "en": "Component",
      "zh": "组件",
      "location": "Components 面板 / Add",
      "usage": "附加到 Actor 上的功能模块。",
      "tip": "Actor 像容器，组件负责模型、碰撞、声音、移动等能力。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Component」想成蓝图工作室的抽屉里的一个工具，它负责“组件”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Component？”，试着回答：附加到 Actor 上的功能模块。"
      }
    },
    {
      "id": 20,
      "category": "基础与编辑器",
      "en": "Root Component",
      "zh": "根组件",
      "location": "Components 面板 / 层级最上方",
      "usage": "Actor 位移与旋转的参照中心。",
      "tip": "移动整个 Actor 时，根组件的位置最关键。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Root",
            "zh": ""
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": "根组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Component=组件。合起来就是“根组件”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Root Component？”，试着回答：Actor 位移与旋转的参照中心。"
      }
    },
    {
      "id": 21,
      "category": "基础与编辑器",
      "en": "Scene Component",
      "zh": "场景组件",
      "location": "Components 面板 / Add",
      "usage": "拥有 Transform，可以嵌套并附加其他场景组件。",
      "tip": "Static Mesh、Collision、Camera 等都继承自场景组件。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Scene",
            "zh": ""
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": "场景组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Component=组件。合起来就是“场景组件”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Scene Component？”，试着回答：拥有 Transform，可以嵌套并附加其他场景组件。"
      }
    },
    {
      "id": 22,
      "category": "基础与编辑器",
      "en": "Actor Component",
      "zh": " Actor 组件",
      "location": "Components 面板 / Add",
      "usage": "可附加到 Actor、但不提供自身 Transform 的功能组件。",
      "tip": "适合封装生命、背包、交互等能力。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": " Actor 组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Actor=场景对象 → Component=组件。合起来就是“ Actor 组件”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Actor Component？”，试着回答：可附加到 Actor、但不提供自身 Transform 的功能组件。"
      }
    },
    {
      "id": 23,
      "category": "基础与编辑器",
      "en": "Blueprint Variable",
      "zh": "蓝图变量",
      "location": "My Blueprint / Variables",
      "usage": "保存蓝图实例运行时的数据。",
      "tip": "先选对类型，再决定是否 Instance Editable。",
      "groups": [],
      "scenarios": [
        "save-load"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Blueprint",
            "zh": "蓝图"
          },
          {
            "en": "Variable",
            "zh": "变量"
          }
        ],
        "memory": "蓝图变量"
      },
      "memoryAid": {
        "association": "变量像贴着名字的盒子，蓝图运行时把数据装进去。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Blueprint Variable？”，试着回答：保存蓝图实例运行时的数据。"
      }
    },
    {
      "id": 24,
      "category": "基础与编辑器",
      "en": "Local Variable",
      "zh": "局部变量",
      "location": "Function / Local Variables",
      "usage": "只在单个函数执行期间存在。",
      "tip": "临时计算结果优先局部变量，减少实例状态混乱。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Local",
            "zh": "本地"
          },
          {
            "en": "Variable",
            "zh": ""
          }
        ],
        "memory": "局部变量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Local=本地。合起来就是“局部变量”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Local Variable？”，试着回答：只在单个函数执行期间存在。"
      }
    },
    {
      "id": 25,
      "category": "基础与编辑器",
      "en": "Variable Type",
      "zh": "变量类型",
      "location": "Variable Details / Variable Type",
      "usage": "规定变量能存什么数据。",
      "tip": "布尔是开关，Float 是小数，Vector 是三维坐标。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Variable",
            "zh": ""
          },
          {
            "en": "Type",
            "zh": "类型"
          }
        ],
        "memory": "变量类型"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Type=类型。合起来就是“变量类型”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Variable Type？”，试着回答：规定变量能存什么数据。"
      }
    },
    {
      "id": 26,
      "category": "基础与编辑器",
      "en": "Instance Editable",
      "zh": "实例可编辑",
      "location": "Variable Details / Instance Editable",
      "usage": "允许在关卡中选择该对象时直接改值。",
      "tip": "配置参数常用；运行时会变化的内部状态通常关闭。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Instance",
            "zh": "实例"
          },
          {
            "en": "Editable",
            "zh": ""
          }
        ],
        "memory": "实例可编辑"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Instance=实例。合起来就是“实例可编辑”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Instance Editable？”，试着回答：允许在关卡中选择该对象时直接改值。"
      }
    },
    {
      "id": 27,
      "category": "基础与编辑器",
      "en": "Expose on Spawn",
      "zh": "生成时公开",
      "location": "Variable Details / Expose on Spawn",
      "usage": "Spawn Actor 时把值直接传入新对象。",
      "tip": "必须先启用 Instance Editable。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Expose",
            "zh": ""
          },
          {
            "en": "on",
            "zh": ""
          },
          {
            "en": "Spawn",
            "zh": "生成"
          }
        ],
        "memory": "生成时公开"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Spawn=生成。合起来就是“生成时公开”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Expose on Spawn？”，试着回答：Spawn Actor 时把值直接传入新对象。"
      }
    },
    {
      "id": 28,
      "category": "基础与编辑器",
      "en": "Private",
      "zh": "私有变量",
      "location": "Variable Details / Advanced / Private",
      "usage": "让其他蓝图不能直接读取或修改。",
      "tip": "可通过函数提供受控的读取入口。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Private」想成蓝图工作室的抽屉里的一个工具，它负责“私有变量”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Private？”，试着回答：让其他蓝图不能直接读取或修改。"
      }
    },
    {
      "id": 29,
      "category": "基础与编辑器",
      "en": "Category",
      "zh": "分类",
      "location": "Variable Details / Category",
      "usage": "把变量在 Details 面板中分组。",
      "tip": "变量多时用分类保持面板整洁。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Category」想成蓝图工作室的抽屉里的一个工具，它负责“分类”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Category？”，试着回答：把变量在 Details 面板中分组。"
      }
    },
    {
      "id": 30,
      "category": "基础与编辑器",
      "en": "Tooltip",
      "zh": "提示文字",
      "location": "Variable Details / Tooltip",
      "usage": "给变量或参数添加说明。",
      "tip": "给 Instance Editable 参数写清楚单位和用途。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Tooltip」想成蓝图工作室的抽屉里的一个工具，它负责“提示文字”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Tooltip？”，试着回答：给变量或参数添加说明。"
      }
    },
    {
      "id": 31,
      "category": "基础与编辑器",
      "en": "Class Defaults",
      "zh": "类默认值",
      "location": "Blueprint Editor / Class Defaults",
      "usage": "设置该类所有实例共同继承的初始值。",
      "tip": "关卡里对实例的修改会覆盖类默认值。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Class",
            "zh": "类"
          },
          {
            "en": "Defaults",
            "zh": ""
          }
        ],
        "memory": "类默认值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Class=类。合起来就是“类默认值”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Class Defaults？”，试着回答：设置该类所有实例共同继承的初始值。"
      }
    },
    {
      "id": 32,
      "category": "基础与编辑器",
      "en": "Class Settings",
      "zh": "类设置",
      "location": "Blueprint Editor / Class Settings",
      "usage": "配置父类、接口、复制、生成等类级选项。",
      "tip": "找不到复制或接口设置时先来这里。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Class",
            "zh": "类"
          },
          {
            "en": "Settings",
            "zh": ""
          }
        ],
        "memory": "类设置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Class=类。合起来就是“类设置”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Class Settings？”，试着回答：配置父类、接口、复制、生成等类级选项。"
      }
    },
    {
      "id": 33,
      "category": "基础与编辑器",
      "en": "Implemented Interfaces",
      "zh": "已实现接口",
      "location": "Class Settings / Interfaces",
      "usage": "列出该蓝图已经实现的接口。",
      "tip": "实现后要在接口函数里写具体逻辑。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Implemented",
            "zh": ""
          },
          {
            "en": "Interfaces",
            "zh": ""
          }
        ],
        "memory": "已实现接口"
      },
      "memoryAid": {
        "association": "把「Implemented Interfaces」想成蓝图工作室的抽屉里的一个工具，它负责“已实现接口”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Implemented Interfaces？”，试着回答：列出该蓝图已经实现的接口。"
      }
    },
    {
      "id": 34,
      "category": "基础与编辑器",
      "en": "Event Dispatcher",
      "zh": "事件派发器",
      "location": "My Blueprint / Event Dispatchers",
      "usage": "让一个对象广播事件，其他对象绑定并响应。",
      "tip": "适合“状态变化通知”，不需要彼此 Cast。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Event",
            "zh": "事件"
          },
          {
            "en": "Dispatcher",
            "zh": ""
          }
        ],
        "memory": "事件派发器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Event=事件。合起来就是“事件派发器”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Event Dispatcher？”，试着回答：让一个对象广播事件，其他对象绑定并响应。"
      }
    },
    {
      "id": 35,
      "category": "基础与编辑器",
      "en": "Bind Event",
      "zh": "绑定事件",
      "location": "Event Dispatcher 节点的 Bind",
      "usage": "让某个事件监听派发器。",
      "tip": "对象销毁前可 Unbind，避免残留引用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Bind",
            "zh": ""
          },
          {
            "en": "Event",
            "zh": "事件"
          }
        ],
        "memory": "绑定事件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Event=事件。合起来就是“绑定事件”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Bind Event？”，试着回答：让某个事件监听派发器。"
      }
    },
    {
      "id": 36,
      "category": "基础与编辑器",
      "en": "Function",
      "zh": "函数",
      "location": "My Blueprint / Functions",
      "usage": "可重复调用的命名逻辑。",
      "tip": "有明确输入输出时优先函数，便于复用和调试。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Function」想成蓝图工作室的抽屉里的一个工具，它负责“函数”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Function？”，试着回答：可重复调用的命名逻辑。"
      }
    },
    {
      "id": 37,
      "category": "基础与编辑器",
      "en": "Function Override",
      "zh": "重载函数",
      "location": "My Blueprint / Override dropdown",
      "usage": "改写父类提供的函数行为。",
      "tip": "BeginPlay、Tick 等都可在这里重载。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Function",
            "zh": "函数"
          },
          {
            "en": "Override",
            "zh": ""
          }
        ],
        "memory": "重载函数"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Function=函数。合起来就是“重载函数”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Function Override？”，试着回答：改写父类提供的函数行为。"
      }
    },
    {
      "id": 38,
      "category": "基础与编辑器",
      "en": "Event Override",
      "zh": "事件重载",
      "location": "My Blueprint / Override dropdown",
      "usage": "实现父类声明的可重载事件。",
      "tip": "例如 Actor Begin Overlap、Any Damage。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Event",
            "zh": "事件"
          },
          {
            "en": "Override",
            "zh": ""
          }
        ],
        "memory": "事件重载"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Event=事件。合起来就是“事件重载”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Event Override？”，试着回答：实现父类声明的可重载事件。"
      }
    },
    {
      "id": 39,
      "category": "基础与编辑器",
      "en": "Macro",
      "zh": "宏",
      "location": "My Blueprint / Macros",
      "usage": "复用执行连线，并可有多个执行入口/出口。",
      "tip": "宏比函数更适合做带流程针的小型连线工具。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Macro」想成蓝图工作室的抽屉里的一个工具，它负责“宏”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Macro？”，试着回答：复用执行连线，并可有多个执行入口/出口。"
      }
    },
    {
      "id": 40,
      "category": "基础与编辑器",
      "en": "Pure Node",
      "zh": "纯节点",
      "location": "节点 / 无白色执行针",
      "usage": "只根据输入计算输出，本身不执行流程。",
      "tip": "绿色/彩色数据针说明它是纯数据节点。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Pure",
            "zh": ""
          },
          {
            "en": "Node",
            "zh": ""
          }
        ],
        "memory": "纯节点"
      },
      "memoryAid": {
        "association": "把「Pure Node」想成蓝图工作室的抽屉里的一个工具，它负责“纯节点”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Pure Node？”，试着回答：只根据输入计算输出，本身不执行流程。"
      }
    },
    {
      "id": 41,
      "category": "基础与编辑器",
      "en": "Impure Node",
      "zh": "非纯节点",
      "location": "节点 / 带白色执行针",
      "usage": "被调用时执行有顺序或副作用的操作。",
      "tip": "Set、Spawn、Destroy、Delay 等通常是非纯节点。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Impure",
            "zh": ""
          },
          {
            "en": "Node",
            "zh": ""
          }
        ],
        "memory": "非纯节点"
      },
      "memoryAid": {
        "association": "把「Impure Node」想成蓝图工作室的抽屉里的一个工具，它负责“非纯节点”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Impure Node？”，试着回答：被调用时执行有顺序或副作用的操作。"
      }
    },
    {
      "id": 42,
      "category": "基础与编辑器",
      "en": "Execution Pin",
      "zh": "执行针",
      "location": "节点上方白色针",
      "usage": "规定节点按什么顺序执行。",
      "tip": "白色线不是数据；它只控制流程。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Execution",
            "zh": ""
          },
          {
            "en": "Pin",
            "zh": ""
          }
        ],
        "memory": "执行针"
      },
      "memoryAid": {
        "association": "把「Execution Pin」想成蓝图工作室的抽屉里的一个工具，它负责“执行针”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Execution Pin？”，试着回答：规定节点按什么顺序执行。"
      }
    },
    {
      "id": 43,
      "category": "基础与编辑器",
      "en": "Data Pin",
      "zh": "数据针",
      "location": "节点两侧彩色针",
      "usage": "传递位置、数值、对象等数据。",
      "tip": "颜色通常按数据类型区分，连线前先核对类型。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Data",
            "zh": "数据"
          },
          {
            "en": "Pin",
            "zh": ""
          }
        ],
        "memory": "数据针"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Data=数据。合起来就是“数据针”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Data Pin？”，试着回答：传递位置、数值、对象等数据。"
      }
    },
    {
      "id": 44,
      "category": "基础与编辑器",
      "en": "Cast To",
      "zh": "类型转换",
      "location": "右键节点 / Cast To",
      "usage": "确认对象属于某类后访问该类专属成员。",
      "tip": "Cast 失败就走 Cast Failed；调试首选 Print String 查对象类型。",
      "groups": [
        "lifecycle"
      ],
      "scenarios": [
        "pickup",
        "save-load"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Cast",
            "zh": ""
          },
          {
            "en": "To",
            "zh": "到"
          }
        ],
        "memory": "类型转换"
      },
      "memoryAid": {
        "association": "Cast To 像验明身份：确认类型匹配后，才能使用那个类型专属的能力。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Cast To？”，试着回答：确认对象属于某类后访问该类专属成员。"
      }
    },
    {
      "id": 45,
      "category": "基础与编辑器",
      "en": "Blueprint Compile",
      "zh": "编译蓝图",
      "location": "Blueprint Editor / Compile",
      "usage": "检查蓝图图表并生成可运行结果。",
      "tip": "改完节点后先 Compile，再 Play。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Blueprint",
            "zh": "蓝图"
          },
          {
            "en": "Compile",
            "zh": ""
          }
        ],
        "memory": "编译蓝图"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Blueprint=蓝图。合起来就是“编译蓝图”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Blueprint Compile？”，试着回答：检查蓝图图表并生成可运行结果。"
      }
    },
    {
      "id": 46,
      "category": "基础与编辑器",
      "en": "Compile Errors",
      "zh": "编译错误",
      "location": "Compiler Results",
      "usage": "显示导致蓝图不能运行的问题。",
      "tip": "从第一条错误开始修；后面的错误可能只是连锁反应。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Compile",
            "zh": ""
          },
          {
            "en": "Errors",
            "zh": ""
          }
        ],
        "memory": "编译错误"
      },
      "memoryAid": {
        "association": "把「Compile Errors」想成蓝图工作室的抽屉里的一个工具，它负责“编译错误”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Compile Errors？”，试着回答：显示导致蓝图不能运行的问题。"
      }
    },
    {
      "id": 47,
      "category": "基础与编辑器",
      "en": "Node Search",
      "zh": "节点搜索",
      "location": "Graph / 右键或拖入空白处",
      "usage": "用英文关键字查找节点。",
      "tip": "输入词的前几个字母通常就能出现结果。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Node",
            "zh": ""
          },
          {
            "en": "Search",
            "zh": ""
          }
        ],
        "memory": "节点搜索"
      },
      "memoryAid": {
        "association": "把「Node Search」想成蓝图工作室的抽屉里的一个工具，它负责“节点搜索”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Node Search？”，试着回答：用英文关键字查找节点。"
      }
    },
    {
      "id": 48,
      "category": "基础与编辑器",
      "en": "Palette",
      "zh": "节点面板",
      "location": "Node Search / Palette",
      "usage": "按类别浏览可用节点。",
      "tip": "知道作用但不知道英文时，可先浏览类别。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Palette」想成蓝图工作室的抽屉里的一个工具，它负责“节点面板”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Palette？”，试着回答：按类别浏览可用节点。"
      }
    },
    {
      "id": 49,
      "category": "基础与编辑器",
      "en": "My Blueprint",
      "zh": "我的蓝图",
      "location": "Blueprint Editor / My Blueprint",
      "usage": "管理变量、函数、宏、事件和接口。",
      "tip": "新建内容通常从这里开始。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "My",
            "zh": ""
          },
          {
            "en": "Blueprint",
            "zh": "蓝图"
          }
        ],
        "memory": "我的蓝图"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Blueprint=蓝图。合起来就是“我的蓝图”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 My Blueprint？”，试着回答：管理变量、函数、宏、事件和接口。"
      }
    },
    {
      "id": 50,
      "category": "基础与编辑器",
      "en": "Details Panel",
      "zh": "细节面板",
      "location": "Blueprint Editor / Details",
      "usage": "编辑选中节点、变量、组件或类的属性。",
      "tip": "节点行为选项通常在右侧 Details 中。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Details",
            "zh": ""
          },
          {
            "en": "Panel",
            "zh": ""
          }
        ],
        "memory": "细节面板"
      },
      "memoryAid": {
        "association": "把「Details Panel」想成蓝图工作室的抽屉里的一个工具，它负责“细节面板”。",
        "method": "先找到它在编辑器哪个面板，再说出它解决什么结构问题。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Details Panel？”，试着回答：编辑选中节点、变量、组件或类的属性。"
      }
    },
    {
      "id": 51,
      "category": "变量与数据类型",
      "en": "Boolean",
      "zh": "布尔值",
      "location": "Variable Type / Boolean",
      "usage": "只有 True 和 False 两种值。",
      "tip": "可理解成开关，例如 Is Dead、Can Jump。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Boolean 像只有开和关的开关。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Boolean？”，试着回答：只有 True 和 False 两种值。"
      }
    },
    {
      "id": 52,
      "category": "变量与数据类型",
      "en": "Byte",
      "zh": "字节整数",
      "location": "Variable Type / Byte",
      "usage": "0 到 255 的小整数。",
      "tip": "常用来保存 Enum 或小范围编号。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Byte」想成贴名字的数据盒子里的一个工具，它负责“字节整数”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Byte？”，试着回答：0 到 255 的小整数。"
      }
    },
    {
      "id": 53,
      "category": "变量与数据类型",
      "en": "Integer",
      "zh": "整数",
      "location": "Variable Type / Integer",
      "usage": "常用 32 位整数。",
      "tip": "生命值、数量、索引通常用 Integer。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Integer」想成贴名字的数据盒子里的一个工具，它负责“整数”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Integer？”，试着回答：常用 32 位整数。"
      }
    },
    {
      "id": 54,
      "category": "变量与数据类型",
      "en": "Integer64",
      "zh": "64 位整数",
      "location": "Variable Type / Integer64",
      "usage": "范围更大的整数。",
      "tip": "普通游戏数值一般不需要。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Integer64」想成贴名字的数据盒子里的一个工具，它负责“64 位整数”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Integer64？”，试着回答：范围更大的整数。"
      }
    },
    {
      "id": 55,
      "category": "变量与数据类型",
      "en": "Float",
      "zh": "单精度小数",
      "location": "Variable Type / Float",
      "usage": "带小数点的数值。",
      "tip": "速度、倍率、时间通常用 Float。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Float 是可以带小数的刻度盘，速度、倍率和时间常用它。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Float？”，试着回答：带小数点的数值。"
      }
    },
    {
      "id": 56,
      "category": "变量与数据类型",
      "en": "Double",
      "zh": "双精度小数",
      "location": "Variable Type / Double",
      "usage": "精度更高的小数。",
      "tip": "UE5 世界坐标大量使用 Double；节点会自动转换。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Double」想成贴名字的数据盒子里的一个工具，它负责“双精度小数”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Double？”，试着回答：精度更高的小数。"
      }
    },
    {
      "id": 57,
      "category": "变量与数据类型",
      "en": "Name",
      "zh": "名称",
      "location": "Variable Type / Name",
      "usage": "轻量、区分大小写的标识文本。",
      "tip": "用于行名、参数名等内部标识，不适合玩家看到的长文本。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Name」想成贴名字的数据盒子里的一个工具，它负责“名称”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Name？”，试着回答：轻量、区分大小写的标识文本。"
      }
    },
    {
      "id": 58,
      "category": "变量与数据类型",
      "en": "String",
      "zh": "字符串",
      "location": "Variable Type / String",
      "usage": "可变、可拼接的程序文本。",
      "tip": "日志、文件名、路径常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「String」想成贴名字的数据盒子里的一个工具，它负责“字符串”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 String？”，试着回答：可变、可拼接的程序文本。"
      }
    },
    {
      "id": 59,
      "category": "变量与数据类型",
      "en": "Text",
      "zh": "本地化文本",
      "location": "Variable Type / Text",
      "usage": "支持本地化和富文本显示的文本。",
      "tip": "UI 中优先 Text；需要拼接时用 Format Text。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Text」想成贴名字的数据盒子里的一个工具，它负责“本地化文本”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Text？”，试着回答：支持本地化和富文本显示的文本。"
      }
    },
    {
      "id": 60,
      "category": "变量与数据类型",
      "en": "Vector",
      "zh": "三维向量",
      "location": "Variable Type / Vector",
      "usage": "由 X、Y、Z 三个小数组成。",
      "tip": "可同时表示位置、方向或速度，含义由用途决定。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Vector 是一支有三个分量的箭头，可以表示位置、方向或速度。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Vector？”，试着回答：由 X、Y、Z 三个小数组成。"
      }
    },
    {
      "id": 61,
      "category": "变量与数据类型",
      "en": "Vector2D",
      "zh": "二维向量",
      "location": "Variable Type / Vector2D",
      "usage": "由 X、Y 两个数组成。",
      "tip": "常用于屏幕坐标、2D 方向。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Vector2D」想成贴名字的数据盒子里的一个工具，它负责“二维向量”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Vector2D？”，试着回答：由 X、Y 两个数组成。"
      }
    },
    {
      "id": 62,
      "category": "变量与数据类型",
      "en": "Rotator",
      "zh": "旋转值",
      "location": "Variable Type / Rotator",
      "usage": "用 Pitch、Yaw、Roll 描述旋转。",
      "tip": "Pitch 是抬头/低头，Yaw 是左右转，Roll 是侧翻。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Rotator 像角色的脖子：Pitch 点头、Yaw 摇头、Roll 歪头。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Rotator？”，试着回答：用 Pitch、Yaw、Roll 描述旋转。"
      }
    },
    {
      "id": 63,
      "category": "变量与数据类型",
      "en": "Transform",
      "zh": "变换",
      "location": "Variable Type / Transform",
      "usage": "同时包含位置、旋转和缩放。",
      "tip": "移动整个物体需要三者一起处理时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Transform 是一个行李包，同时装位置、旋转和缩放。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Transform？”，试着回答：同时包含位置、旋转和缩放。"
      }
    },
    {
      "id": 64,
      "category": "变量与数据类型",
      "en": "Linear Color",
      "zh": "线性颜色",
      "location": "Variable Type / Linear Color",
      "usage": "适合光照与颜色计算的 RGBA 颜色。",
      "tip": "材质参数常用 Linear Color。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Linear",
            "zh": "线性"
          },
          {
            "en": "Color",
            "zh": "颜色"
          }
        ],
        "memory": "线性颜色"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Linear=线性 → Color=颜色。合起来就是“线性颜色”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Linear Color？”，试着回答：适合光照与颜色计算的 RGBA 颜色。"
      }
    },
    {
      "id": 65,
      "category": "变量与数据类型",
      "en": "Color",
      "zh": "sRGB 颜色",
      "location": "Variable Type / Color",
      "usage": "常见显示颜色结构。",
      "tip": "与 Linear Color 混用前查看节点是否需要转换。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Color」想成贴名字的数据盒子里的一个工具，它负责“sRGB 颜色”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Color？”，试着回答：常见显示颜色结构。"
      }
    },
    {
      "id": 66,
      "category": "变量与数据类型",
      "en": "Enum",
      "zh": "枚举",
      "location": "Variable Type / Enumeration",
      "usage": "一组有名字的可选状态。",
      "tip": "比用许多 Boolean 更清晰地表示 Idle、Run、Jump。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Enum」想成贴名字的数据盒子里的一个工具，它负责“枚举”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Enum？”，试着回答：一组有名字的可选状态。"
      }
    },
    {
      "id": 67,
      "category": "变量与数据类型",
      "en": "Structure",
      "zh": "结构体",
      "location": "Variable Type / Structure",
      "usage": "把多个相关字段打包成一个值。",
      "tip": "例如一个物品数据可含名称、图标、价格。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Structure」想成贴名字的数据盒子里的一个工具，它负责“结构体”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Structure？”，试着回答：把多个相关字段打包成一个值。"
      }
    },
    {
      "id": 68,
      "category": "变量与数据类型",
      "en": "Object Reference",
      "zh": "对象引用",
      "location": "Variable Type / Object Reference",
      "usage": "指向某个具体对象实例。",
      "tip": "记住引用不等于复制对象本身。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Object",
            "zh": "对象"
          },
          {
            "en": "Reference",
            "zh": "引用"
          }
        ],
        "memory": "对象引用"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Object=对象 → Reference=引用。合起来就是“对象引用”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Object Reference？”，试着回答：指向某个具体对象实例。"
      }
    },
    {
      "id": 69,
      "category": "变量与数据类型",
      "en": "Class Reference",
      "zh": "类引用",
      "location": "Variable Type / Class Reference",
      "usage": "指向某种蓝图类型而不是某个实例。",
      "tip": "Spawn Actor from Class 常需要类引用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Class",
            "zh": "类"
          },
          {
            "en": "Reference",
            "zh": "引用"
          }
        ],
        "memory": "类引用"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Class=类 → Reference=引用。合起来就是“类引用”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Class Reference？”，试着回答：指向某种蓝图类型而不是某个实例。"
      }
    },
    {
      "id": 70,
      "category": "变量与数据类型",
      "en": "Soft Object Reference",
      "zh": "软对象引用",
      "location": "Variable Type / Soft Object Reference",
      "usage": "保存资源路径，按需加载。",
      "tip": "大量资源配置时可降低启动时加载负担。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Soft",
            "zh": ""
          },
          {
            "en": "Object",
            "zh": "对象"
          },
          {
            "en": "Reference",
            "zh": "引用"
          }
        ],
        "memory": "软对象引用"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Object=对象 → Reference=引用。合起来就是“软对象引用”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Soft Object Reference？”，试着回答：保存资源路径，按需加载。"
      }
    },
    {
      "id": 71,
      "category": "变量与数据类型",
      "en": "Soft Class Reference",
      "zh": "软类引用",
      "location": "Variable Type / Soft Class Reference",
      "usage": "保存类路径，使用时再加载。",
      "tip": "异步加载类时常见。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Soft",
            "zh": ""
          },
          {
            "en": "Class",
            "zh": "类"
          },
          {
            "en": "Reference",
            "zh": "引用"
          }
        ],
        "memory": "软类引用"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Class=类 → Reference=引用。合起来就是“软类引用”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Soft Class Reference？”，试着回答：保存类路径，使用时再加载。"
      }
    },
    {
      "id": 72,
      "category": "变量与数据类型",
      "en": "Interface Reference",
      "zh": "接口引用",
      "location": "Variable Type / Interface",
      "usage": "只暴露接口约定，不依赖具体类。",
      "tip": "多个不同类共享交互时很有用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Interface",
            "zh": "接口"
          },
          {
            "en": "Reference",
            "zh": "引用"
          }
        ],
        "memory": "接口引用"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Interface=接口 → Reference=引用。合起来就是“接口引用”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Interface Reference？”，试着回答：只暴露接口约定，不依赖具体类。"
      }
    },
    {
      "id": 73,
      "category": "变量与数据类型",
      "en": "Array",
      "zh": "数组",
      "location": "Variable Type / Array",
      "usage": "按索引保存一串同类型数据。",
      "tip": "先设内部类型；索引从 0 开始。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Array」想成贴名字的数据盒子里的一个工具，它负责“数组”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Array？”，试着回答：按索引保存一串同类型数据。"
      }
    },
    {
      "id": 74,
      "category": "变量与数据类型",
      "en": "Set",
      "zh": "集合",
      "location": "Variable Type / Set",
      "usage": "保存不重复的元素。",
      "tip": "判断“是否存在”和去重很方便。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Set」想成贴名字的数据盒子里的一个工具，它负责“集合”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Set？”，试着回答：保存不重复的元素。"
      }
    },
    {
      "id": 75,
      "category": "变量与数据类型",
      "en": "Map",
      "zh": "映射表",
      "location": "Variable Type / Map",
      "usage": "用 Key 查找对应的 Value。",
      "tip": "例如用玩家 ID 找对应分数。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Map」想成贴名字的数据盒子里的一个工具，它负责“映射表”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Map？”，试着回答：用 Key 查找对应的 Value。"
      }
    },
    {
      "id": 76,
      "category": "变量与数据类型",
      "en": "Wildcard",
      "zh": "通配类型",
      "location": "Functions / Add pin often",
      "usage": "让函数接受多种兼容类型。",
      "tip": "通配会增加灵活性，但过多会让蓝图难以阅读。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Wildcard」想成贴名字的数据盒子里的一个工具，它负责“通配类型”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Wildcard？”，试着回答：让函数接受多种兼容类型。"
      }
    },
    {
      "id": 77,
      "category": "变量与数据类型",
      "en": "Make Vector",
      "zh": "创建向量",
      "location": "Right-click / Make Vector",
      "usage": "把 X、Y、Z 三个数合成 Vector。",
      "tip": "例如 Make Vector(0,0,100) 表示世界 Z 方向 100。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Make",
            "zh": "创建"
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "创建向量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Make=创建 → Vector=向量。合起来就是“创建向量”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Make Vector？”，试着回答：把 X、Y、Z 三个数合成 Vector。"
      }
    },
    {
      "id": 78,
      "category": "变量与数据类型",
      "en": "Break Vector",
      "zh": "拆分向量",
      "location": "Right-click / Break Vector",
      "usage": "把 Vector 拆成 X、Y、Z。",
      "tip": "需要比较单一轴时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Break",
            "zh": "拆分"
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "拆分向量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Break=拆分 → Vector=向量。合起来就是“拆分向量”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Break Vector？”，试着回答：把 Vector 拆成 X、Y、Z。"
      }
    },
    {
      "id": 79,
      "category": "变量与数据类型",
      "en": "Make Rotator",
      "zh": "创建旋转值",
      "location": "Right-click / Make Rotator",
      "usage": "把 Pitch、Yaw、Roll 合成 Rotator。",
      "tip": "朝向目标常还需 Find Look at Rotation。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Make",
            "zh": "创建"
          },
          {
            "en": "Rotator",
            "zh": "旋转值"
          }
        ],
        "memory": "创建旋转值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Make=创建 → Rotator=旋转值。合起来就是“创建旋转值”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Make Rotator？”，试着回答：把 Pitch、Yaw、Roll 合成 Rotator。"
      }
    },
    {
      "id": 80,
      "category": "变量与数据类型",
      "en": "Break Rotator",
      "zh": "拆分旋转值",
      "location": "Right-click / Break Rotator",
      "usage": "把 Rotator 拆成三个角度。",
      "tip": "注意三个轴的含义，不要只记 X/Y/Z。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Break",
            "zh": "拆分"
          },
          {
            "en": "Rotator",
            "zh": "旋转值"
          }
        ],
        "memory": "拆分旋转值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Break=拆分 → Rotator=旋转值。合起来就是“拆分旋转值”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Break Rotator？”，试着回答：把 Rotator 拆成三个角度。"
      }
    },
    {
      "id": 81,
      "category": "变量与数据类型",
      "en": "Make Transform",
      "zh": "创建变换",
      "location": "Right-click / Make Transform",
      "usage": "组合位置、旋转和缩放。",
      "tip": "Spawn 或 Set Actor Transform 常使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Make",
            "zh": "创建"
          },
          {
            "en": "Transform",
            "zh": "变换"
          }
        ],
        "memory": "创建变换"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Make=创建 → Transform=变换。合起来就是“创建变换”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Make Transform？”，试着回答：组合位置、旋转和缩放。"
      }
    },
    {
      "id": 82,
      "category": "变量与数据类型",
      "en": "Break Transform",
      "zh": "拆分变换",
      "location": "Right-click / Break Transform",
      "usage": "把 Transform 拆成 Location、Rotation、Scale。",
      "tip": "修改其中一项后可用 Make Transform 重组。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Break",
            "zh": "拆分"
          },
          {
            "en": "Transform",
            "zh": "变换"
          }
        ],
        "memory": "拆分变换"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Break=拆分 → Transform=变换。合起来就是“拆分变换”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Break Transform？”，试着回答：把 Transform 拆成 Location、Rotation、Scale。"
      }
    },
    {
      "id": 83,
      "category": "变量与数据类型",
      "en": "Get [Variable]",
      "zh": "读取变量",
      "location": "Drag variable into graph / Get",
      "usage": "取得当前保存的值。",
      "tip": "若连线没有改变原变量，只是读取。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "[Variable]",
            "zh": ""
          }
        ],
        "memory": "读取变量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取。合起来就是“读取变量”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get [Variable]？”，试着回答：取得当前保存的值。"
      }
    },
    {
      "id": 84,
      "category": "变量与数据类型",
      "en": "Set [Variable]",
      "zh": "设置变量",
      "location": "Drag variable into graph / Set",
      "usage": "运行到这里时写入新值。",
      "tip": "Set 节点有白色执行针，必须接入执行流程。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "[Variable]",
            "zh": ""
          }
        ],
        "memory": "设置变量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置。合起来就是“设置变量”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set [Variable]？”，试着回答：运行到这里时写入新值。"
      }
    },
    {
      "id": 85,
      "category": "变量与数据类型",
      "en": "Make Literal Enum",
      "zh": "创建枚举值",
      "location": "Right-click / Make Literal Enum",
      "usage": "生成指定的枚举状态值。",
      "tip": "Switch on Enum 用于根据状态分支。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Make",
            "zh": "创建"
          },
          {
            "en": "Literal",
            "zh": ""
          },
          {
            "en": "Enum",
            "zh": "枚举"
          }
        ],
        "memory": "创建枚举值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Make=创建 → Enum=枚举。合起来就是“创建枚举值”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Make Literal Enum？”，试着回答：生成指定的枚举状态值。"
      }
    },
    {
      "id": 86,
      "category": "变量与数据类型",
      "en": "Set Members in Struct",
      "zh": "修改结构体成员",
      "location": "Node Search / Set Members in",
      "usage": "复制结构体并修改指定字段。",
      "tip": "结构体常按值传递，修改后要保存返回的新结构。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Members",
            "zh": "成员"
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Struct",
            "zh": "结构体"
          }
        ],
        "memory": "修改结构体成员"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Members=成员 → in=在……中 → Struct=结构体。合起来就是“修改结构体成员”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Members in Struct？”，试着回答：复制结构体并修改指定字段。"
      }
    },
    {
      "id": 87,
      "category": "变量与数据类型",
      "en": "Is Valid",
      "zh": "是否有效",
      "location": "Node Search / Is Valid",
      "usage": "检查对象是否存在且未被销毁。",
      "tip": "访问对象前做保护，可减少 Accessed None 错误。",
      "groups": [
        "lifecycle"
      ],
      "scenarios": [
        "pickup",
        "trace"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Valid",
            "zh": ""
          }
        ],
        "memory": "是否有效"
      },
      "memoryAid": {
        "association": "Is Valid 是进门前的“你还在吗”，防止访问已经销毁的对象。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Is Valid？”，试着回答：检查对象是否存在且未被销毁。"
      }
    },
    {
      "id": 88,
      "category": "变量与数据类型",
      "en": "Is Valid Class",
      "zh": "类是否有效",
      "location": "Node Search / Is Valid Class",
      "usage": "检查类引用不为空。",
      "tip": "Spawn 前用有助于定位资源漏填。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Valid",
            "zh": ""
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "类是否有效"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Is=是否 → Class=类。合起来就是“类是否有效”。",
        "method": "先想它能装什么数据，再想一个实际游戏数值。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Is Valid Class？”，试着回答：检查类引用不为空。"
      }
    },
    {
      "id": 89,
      "category": "事件与输入",
      "en": "Event BeginPlay",
      "zh": "开始运行时事件",
      "location": "Event Graph / Override / BeginPlay",
      "usage": "对象进入游戏开始运行时执行一次。",
      "tip": "适合初始化、生成 UI、绑定事件。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Event",
            "zh": "事件"
          },
          {
            "en": "Begin",
            "zh": "开始"
          },
          {
            "en": "Play",
            "zh": "运行"
          }
        ],
        "memory": "开始运行时事件"
      },
      "memoryAid": {
        "association": "Begin Play 就是演出开始：场景一开始运行，这个事件就亮灯登台。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Event BeginPlay？”，试着回答：对象进入游戏开始运行时执行一次。"
      }
    },
    {
      "id": 90,
      "category": "事件与输入",
      "en": "Event Tick",
      "zh": "每帧事件",
      "location": "Event Graph / Override / Tick",
      "usage": "游戏运行期间每帧执行。",
      "tip": "不要把所有逻辑都塞进 Tick；能由事件触发就由事件触发。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Event",
            "zh": "事件"
          },
          {
            "en": "Tick",
            "zh": "每帧"
          }
        ],
        "memory": "每帧事件"
      },
      "memoryAid": {
        "association": "Tick 像时钟每帧滴答一次，画面刷新一次它就走一次。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Event Tick？”，试着回答：游戏运行期间每帧执行。"
      }
    },
    {
      "id": 91,
      "category": "事件与输入",
      "en": "Custom Event",
      "zh": "自定义事件",
      "location": "My Blueprint / Add Custom Event",
      "usage": "创建可由其他节点调用或定时器触发的事件。",
      "tip": "可设为 Call In Editor 方便在编辑器里按钮执行。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Custom",
            "zh": "自定义"
          },
          {
            "en": "Event",
            "zh": "事件"
          }
        ],
        "memory": "自定义事件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Custom=自定义 → Event=事件。合起来就是“自定义事件”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Custom Event？”，试着回答：创建可由其他节点调用或定时器触发的事件。"
      }
    },
    {
      "id": 92,
      "category": "事件与输入",
      "en": "InputAction",
      "zh": "输入动作",
      "location": "Input Event nodes",
      "usage": "旧版输入系统里代表一个按下/松开动作。",
      "tip": "UE5 新项目一般优先 Enhanced Input。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「InputAction」想成门铃和遥控器里的一个工具，它负责“输入动作”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 InputAction？”，试着回答：旧版输入系统里代表一个按下/松开动作。"
      }
    },
    {
      "id": 93,
      "category": "事件与输入",
      "en": "EnhancedInputAction",
      "zh": "增强输入动作",
      "location": "Input Event nodes / EnhancedInputAction",
      "usage": "接收 Enhanced Input Action 的 Started、Triggered、Completed。",
      "tip": "先建立 Input Action，再在 Input Mapping Context 里绑定按键。",
      "groups": [
        "movement"
      ],
      "scenarios": [
        "movement",
        "network-fire"
      ],
      "phrase": null,
      "memoryAid": {
        "association": "Enhanced Input 像遥控器：Action 是按钮含义，Mapping Context 负责把真实按键接上去。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 EnhancedInputAction？”，试着回答：接收 Enhanced Input Action 的 Started、Triggered、Completed。"
      }
    },
    {
      "id": 94,
      "category": "事件与输入",
      "en": "Started",
      "zh": "开始阶段",
      "location": "EnhancedInputAction output pin",
      "usage": "输入刚开始时触发。",
      "tip": "适合开火、起跳这种只触发一次的瞬间动作。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Started」想成门铃和遥控器里的一个工具，它负责“开始阶段”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Started？”，试着回答：输入刚开始时触发。"
      }
    },
    {
      "id": 95,
      "category": "事件与输入",
      "en": "Triggered",
      "zh": "持续触发阶段",
      "location": "EnhancedInputAction output pin",
      "usage": "按住输入期间可重复触发。",
      "tip": "连续移动或蓄力判断常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Triggered」想成门铃和遥控器里的一个工具，它负责“持续触发阶段”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Triggered？”，试着回答：按住输入期间可重复触发。"
      }
    },
    {
      "id": 96,
      "category": "事件与输入",
      "en": "Completed",
      "zh": "结束阶段",
      "location": "EnhancedInputAction output pin",
      "usage": "输入结束时触发。",
      "tip": "松开按键或停止移动时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Completed」想成门铃和遥控器里的一个工具，它负责“结束阶段”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Completed？”，试着回答：输入结束时触发。"
      }
    },
    {
      "id": 97,
      "category": "事件与输入",
      "en": "Canceled",
      "zh": "取消阶段",
      "location": "EnhancedInputAction output pin",
      "usage": "输入因条件变化被取消时触发。",
      "tip": "用于需要收尾的蓄力、瞄准等操作。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Canceled」想成门铃和遥控器里的一个工具，它负责“取消阶段”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Canceled？”，试着回答：输入因条件变化被取消时触发。"
      }
    },
    {
      "id": 98,
      "category": "事件与输入",
      "en": "Input Action Value",
      "zh": "输入动作数值",
      "location": "EnhancedInputAction output pin",
      "usage": "提供按键或摇杆的当前值。",
      "tip": "一维是 Float，二维常是 Vector2D。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Input",
            "zh": "输入"
          },
          {
            "en": "Action",
            "zh": "动作"
          },
          {
            "en": "Value",
            "zh": "数值"
          }
        ],
        "memory": "输入动作数值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Input=输入 → Action=动作 → Value=数值。合起来就是“输入动作数值”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Input Action Value？”，试着回答：提供按键或摇杆的当前值。"
      }
    },
    {
      "id": 99,
      "category": "事件与输入",
      "en": "Axis1D",
      "zh": "一维轴",
      "location": "Input Action Value Type",
      "usage": "单个连续输入轴。",
      "tip": "扳机、滚轮一般是一维。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Axis1D」想成门铃和遥控器里的一个工具，它负责“一维轴”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Axis1D？”，试着回答：单个连续输入轴。"
      }
    },
    {
      "id": 100,
      "category": "事件与输入",
      "en": "Axis2D",
      "zh": "二维轴",
      "location": "Input Action Value Type",
      "usage": "两个连续轴，常用于摇杆。",
      "tip": "取 X/Y 后交给 Add Movement Input。",
      "groups": [
        "movement"
      ],
      "scenarios": [
        "movement"
      ],
      "phrase": null,
      "memoryAid": {
        "association": "把「Axis2D」想成门铃和遥控器里的一个工具，它负责“二维轴”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Axis2D？”，试着回答：两个连续轴，常用于摇杆。"
      }
    },
    {
      "id": 101,
      "category": "事件与输入",
      "en": "Axis3D",
      "zh": "三维轴",
      "location": "Input Action Value Type",
      "usage": "三个连续轴组成的输入值。",
      "tip": "较少直接用于基础移动。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Axis3D」想成门铃和遥控器里的一个工具，它负责“三维轴”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Axis3D？”，试着回答：三个连续轴组成的输入值。"
      }
    },
    {
      "id": 102,
      "category": "事件与输入",
      "en": "Add Movement Input",
      "zh": "添加移动输入",
      "location": "Pawn / Add Movement Input",
      "usage": "给 Pawn 增加一个方向上的移动意图。",
      "tip": "不要直接写 Location；它会让 Character Movement 处理移动。",
      "groups": [
        "movement"
      ],
      "scenarios": [
        "movement"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Movement",
            "zh": "移动"
          },
          {
            "en": "Input",
            "zh": "输入"
          }
        ],
        "memory": "添加移动输入"
      },
      "memoryAid": {
        "association": "Add Movement Input 是告诉角色“往这个方向用力”，真正移动交给 Character Movement。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Movement Input？”，试着回答：给 Pawn 增加一个方向上的移动意图。"
      }
    },
    {
      "id": 103,
      "category": "事件与输入",
      "en": "Get Actor Forward Vector",
      "zh": "获取向前方向",
      "location": "Actor / Get Actor Forward Vector",
      "usage": "取得当前朝向前方的单位方向。",
      "tip": "W 前进常接此向量。",
      "groups": [
        "movement"
      ],
      "scenarios": [
        "movement"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Forward",
            "zh": "前方"
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "获取向前方向"
      },
      "memoryAid": {
        "association": "Forward Vector 是 Actor 鼻子朝向的一支单位箭头。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Actor Forward Vector？”，试着回答：取得当前朝向前方的单位方向。"
      }
    },
    {
      "id": 104,
      "category": "事件与输入",
      "en": "Get Actor Right Vector",
      "zh": "获取向右方向",
      "location": "Actor / Get Actor Right Vector",
      "usage": "取得角色右侧的单位方向。",
      "tip": "A/D 左右移动常用。",
      "groups": [
        "movement"
      ],
      "scenarios": [
        "movement"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Right",
            "zh": "右侧"
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "获取向右方向"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Actor=场景对象 → Right=右侧 → Vector=向量。合起来就是“获取向右方向”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Actor Right Vector？”，试着回答：取得角色右侧的单位方向。"
      }
    },
    {
      "id": 105,
      "category": "事件与输入",
      "en": "Get Actor Up Vector",
      "zh": "获取向上方向",
      "location": "Actor / Get Actor Up Vector",
      "usage": "取得角色上方的单位方向。",
      "tip": "某些跳跃或贴墙逻辑使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Up",
            "zh": "向上"
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "获取向上方向"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Actor=场景对象 → Up=向上 → Vector=向量。合起来就是“获取向上方向”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Actor Up Vector？”，试着回答：取得角色上方的单位方向。"
      }
    },
    {
      "id": 106,
      "category": "事件与输入",
      "en": "Add Controller Yaw Input",
      "zh": "添加控制器左右旋转输入",
      "location": "Pawn / Add Controller Yaw Input",
      "usage": "让控制视角左右旋转。",
      "tip": "鼠标左右移动通常接这里。",
      "groups": [
        "camera"
      ],
      "scenarios": [
        "movement"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Controller",
            "zh": "控制器"
          },
          {
            "en": "Yaw",
            "zh": "左右旋转"
          },
          {
            "en": "Input",
            "zh": "输入"
          }
        ],
        "memory": "添加控制器左右旋转输入"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → Controller=控制器 → Yaw=左右旋转 → Input=输入。合起来就是“添加控制器左右旋转输入”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Controller Yaw Input？”，试着回答：让控制视角左右旋转。"
      }
    },
    {
      "id": 107,
      "category": "事件与输入",
      "en": "Add Controller Pitch Input",
      "zh": "添加控制器上下旋转输入",
      "location": "Pawn / Add Controller Pitch Input",
      "usage": "让控制视角上下旋转。",
      "tip": "鼠标上下移动通常接这里。",
      "groups": [
        "camera"
      ],
      "scenarios": [
        "movement"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Controller",
            "zh": "控制器"
          },
          {
            "en": "Pitch",
            "zh": "俯仰"
          },
          {
            "en": "Input",
            "zh": "输入"
          }
        ],
        "memory": "添加控制器上下旋转输入"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → Controller=控制器 → Pitch=俯仰 → Input=输入。合起来就是“添加控制器上下旋转输入”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Controller Pitch Input？”，试着回答：让控制视角上下旋转。"
      }
    },
    {
      "id": 108,
      "category": "事件与输入",
      "en": "Add Controller Roll Input",
      "zh": "添加控制器侧翻输入",
      "location": "Pawn / Add Controller Roll Input",
      "usage": "改变控制视角的 Roll。",
      "tip": "普通第一/第三人称很少使用，可能让镜头倾斜。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Controller",
            "zh": "控制器"
          },
          {
            "en": "Roll",
            "zh": ""
          },
          {
            "en": "Input",
            "zh": "输入"
          }
        ],
        "memory": "添加控制器侧翻输入"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → Controller=控制器 → Input=输入。合起来就是“添加控制器侧翻输入”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Controller Roll Input？”，试着回答：改变控制视角的 Roll。"
      }
    },
    {
      "id": 109,
      "category": "事件与输入",
      "en": "Get Control Rotation",
      "zh": "获取控制旋转",
      "location": "Controller / Get Control Rotation",
      "usage": "取得玩家视角的朝向。",
      "tip": "角色朝向鼠标时常用其 Yaw。",
      "groups": [
        "camera"
      ],
      "scenarios": [
        "movement"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Control",
            "zh": ""
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "获取控制旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Rotation=旋转。合起来就是“获取控制旋转”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Control Rotation？”，试着回答：取得玩家视角的朝向。"
      }
    },
    {
      "id": 110,
      "category": "事件与输入",
      "en": "Set Control Rotation",
      "zh": "设置控制旋转",
      "location": "Controller / Set Control Rotation",
      "usage": "直接设定玩家视角朝向。",
      "tip": "注意它会改变镜头，不一定改变角色身体。",
      "groups": [
        "camera"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Control",
            "zh": ""
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "设置控制旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Rotation=旋转。合起来就是“设置控制旋转”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Control Rotation？”，试着回答：直接设定玩家视角朝向。"
      }
    },
    {
      "id": 111,
      "category": "事件与输入",
      "en": "Get Player Controller",
      "zh": "获取玩家控制器",
      "location": "Player / Get Player Controller",
      "usage": "取得控制玩家的 Player Controller。",
      "tip": "创建 UI、设置输入模式、显示鼠标都常从这里开始。",
      "groups": [],
      "scenarios": [
        "trace"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "Controller",
            "zh": "控制器"
          }
        ],
        "memory": "获取玩家控制器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Player=玩家 → Controller=控制器。合起来就是“获取玩家控制器”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Player Controller？”，试着回答：取得控制玩家的 Player Controller。"
      }
    },
    {
      "id": 112,
      "category": "事件与输入",
      "en": "Set Input Mode Game Only",
      "zh": "输入模式仅游戏",
      "location": "Player Controller / Set Input Mode Game Only",
      "usage": "键盘鼠标主要交给游戏操作。",
      "tip": "关闭暂停菜单后要恢复此模式。",
      "groups": [
        "ui"
      ],
      "scenarios": [
        "pause-ui"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Input",
            "zh": "输入"
          },
          {
            "en": "Mode",
            "zh": "模式"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "Only",
            "zh": "仅"
          }
        ],
        "memory": "输入模式仅游戏"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Input=输入 → Mode=模式 → Game=游戏 → Only=仅。合起来就是“输入模式仅游戏”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Input Mode Game Only？”，试着回答：键盘鼠标主要交给游戏操作。"
      }
    },
    {
      "id": 113,
      "category": "事件与输入",
      "en": "Set Input Mode UI Only",
      "zh": "输入模式仅 UI",
      "location": "Player Controller / Set Input Mode UI Only",
      "usage": "输入交给 UI，游戏操作暂停接收。",
      "tip": "打开设置菜单时常用。",
      "groups": [
        "ui"
      ],
      "scenarios": [
        "pause-ui"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Input",
            "zh": "输入"
          },
          {
            "en": "Mode",
            "zh": "模式"
          },
          {
            "en": "UI",
            "zh": "界面"
          },
          {
            "en": "Only",
            "zh": "仅"
          }
        ],
        "memory": "输入模式仅 UI"
      },
      "memoryAid": {
        "association": "UI Only 是把方向盘交给菜单，游戏世界暂时不再抢输入。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Input Mode UI Only？”，试着回答：输入交给 UI，游戏操作暂停接收。"
      }
    },
    {
      "id": 114,
      "category": "事件与输入",
      "en": "Set Input Mode Game and UI",
      "zh": "游戏与 UI 都可输入",
      "location": "Player Controller / Set Input Mode Game and UI",
      "usage": "让游戏与 UI 同时接收输入。",
      "tip": "需要边操作边点击界面时使用。",
      "groups": [],
      "scenarios": [
        "movement"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Input",
            "zh": "输入"
          },
          {
            "en": "Mode",
            "zh": "模式"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "and",
            "zh": "并且"
          },
          {
            "en": "UI",
            "zh": ""
          }
        ],
        "memory": "游戏与 UI 都可输入"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Input=输入 → Mode=模式 → Game=游戏 → and=并且。合起来就是“游戏与 UI 都可输入”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Input Mode Game and UI？”，试着回答：让游戏与 UI 同时接收输入。"
      }
    },
    {
      "id": 115,
      "category": "事件与输入",
      "en": "Set Show Mouse Cursor",
      "zh": "显示或隐藏鼠标",
      "location": "Player Controller / Set Show Mouse Cursor",
      "usage": "控制屏幕上是否显示鼠标。",
      "tip": "打开 UI 时通常设为 True。",
      "groups": [
        "ui"
      ],
      "scenarios": [
        "pause-ui"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Show",
            "zh": "显示"
          },
          {
            "en": "Mouse",
            "zh": "鼠标"
          },
          {
            "en": "Cursor",
            "zh": ""
          }
        ],
        "memory": "显示或隐藏鼠标"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Show=显示 → Mouse=鼠标。合起来就是“显示或隐藏鼠标”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Show Mouse Cursor？”，试着回答：控制屏幕上是否显示鼠标。"
      }
    },
    {
      "id": 116,
      "category": "事件与输入",
      "en": "Enable Input",
      "zh": "启用输入",
      "location": "Actor / Enable Input",
      "usage": "让指定玩家控制器向该 Actor 发送输入。",
      "tip": "Actor 需要拿到 Player Controller 参数。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Enable",
            "zh": ""
          },
          {
            "en": "Input",
            "zh": "输入"
          }
        ],
        "memory": "启用输入"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Input=输入。合起来就是“启用输入”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Enable Input？”，试着回答：让指定玩家控制器向该 Actor 发送输入。"
      }
    },
    {
      "id": 117,
      "category": "事件与输入",
      "en": "Disable Input",
      "zh": "禁用输入",
      "location": "Actor / Disable Input",
      "usage": "停止该 Actor 接收玩家输入。",
      "tip": "交还控制权或进入过场时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Disable",
            "zh": "禁用"
          },
          {
            "en": "Input",
            "zh": "输入"
          }
        ],
        "memory": "禁用输入"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Disable=禁用 → Input=输入。合起来就是“禁用输入”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Disable Input？”，试着回答：停止该 Actor 接收玩家输入。"
      }
    },
    {
      "id": 118,
      "category": "事件与输入",
      "en": "Was Input Key Just Pressed",
      "zh": "按键是否刚按下",
      "location": "Input / Was Input Key Just Pressed",
      "usage": "在某一瞬间检测按键是否新按下。",
      "tip": "传统输入方式；新项目优先 Enhanced Input。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Was",
            "zh": ""
          },
          {
            "en": "Input",
            "zh": "输入"
          },
          {
            "en": "Key",
            "zh": "键"
          },
          {
            "en": "Just",
            "zh": ""
          },
          {
            "en": "Pressed",
            "zh": ""
          }
        ],
        "memory": "按键是否刚按下"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Input=输入 → Key=键。合起来就是“按键是否刚按下”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Was Input Key Just Pressed？”，试着回答：在某一瞬间检测按键是否新按下。"
      }
    },
    {
      "id": 119,
      "category": "事件与输入",
      "en": "Is Input Key Down",
      "zh": "按键是否按住",
      "location": "Input / Is Input Key Down",
      "usage": "检测按键当前是否处于按住状态。",
      "tip": "放在 Tick 中每帧查询会产生持续检测。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Input",
            "zh": "输入"
          },
          {
            "en": "Key",
            "zh": "键"
          },
          {
            "en": "Down",
            "zh": ""
          }
        ],
        "memory": "按键是否按住"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Is=是否 → Input=输入 → Key=键。合起来就是“按键是否按住”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Is Input Key Down？”，试着回答：检测按键当前是否处于按住状态。"
      }
    },
    {
      "id": 120,
      "category": "事件与输入",
      "en": "Project World to Screen",
      "zh": "世界坐标转屏幕坐标",
      "location": "Player Controller / Project World to Screen",
      "usage": "把三维世界位置换算成屏幕位置。",
      "tip": "做头顶血条、目标标记常使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Project",
            "zh": ""
          },
          {
            "en": "World",
            "zh": "世界"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "Screen",
            "zh": ""
          }
        ],
        "memory": "世界坐标转屏幕坐标"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：World=世界 → to=到。合起来就是“世界坐标转屏幕坐标”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Project World to Screen？”，试着回答：把三维世界位置换算成屏幕位置。"
      }
    },
    {
      "id": 121,
      "category": "事件与输入",
      "en": "Deproject Screen to World",
      "zh": "屏幕坐标转世界射线",
      "location": "Player Controller / Deproject Screen to World",
      "usage": "从镜头经过屏幕点生成世界空间射线。",
      "tip": "鼠标点击选中物体时常用。",
      "groups": [],
      "scenarios": [
        "trace"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Deproject",
            "zh": ""
          },
          {
            "en": "Screen",
            "zh": ""
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "World",
            "zh": "世界"
          }
        ],
        "memory": "屏幕坐标转世界射线"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：to=到 → World=世界。合起来就是“屏幕坐标转世界射线”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Deproject Screen to World？”，试着回答：从镜头经过屏幕点生成世界空间射线。"
      }
    },
    {
      "id": 122,
      "category": "事件与输入",
      "en": "Get Mouse Position",
      "zh": "获取鼠标位置",
      "location": "Player Controller / Get Mouse Position",
      "usage": "取得鼠标在屏幕上的坐标。",
      "tip": "配合转换成世界方向可做点击选择。",
      "groups": [],
      "scenarios": [
        "trace"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Mouse",
            "zh": "鼠标"
          },
          {
            "en": "Position",
            "zh": "位置"
          }
        ],
        "memory": "获取鼠标位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Mouse=鼠标 → Position=位置。合起来就是“获取鼠标位置”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Mouse Position？”，试着回答：取得鼠标在屏幕上的坐标。"
      }
    },
    {
      "id": 123,
      "category": "事件与输入",
      "en": "Get Player Pawn",
      "zh": "获取玩家 Pawn",
      "location": "Player Controller / Get Controlled Pawn",
      "usage": "取得当前玩家控制的 Pawn。",
      "tip": "常用 Cast To Character 后访问角色功能。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "Pawn",
            "zh": ""
          }
        ],
        "memory": "获取玩家 Pawn"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Player=玩家。合起来就是“获取玩家 Pawn”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Player Pawn？”，试着回答：取得当前玩家控制的 Pawn。"
      }
    },
    {
      "id": 124,
      "category": "事件与输入",
      "en": "Get Player Character",
      "zh": "获取玩家角色",
      "location": "Player / Get Player Character",
      "usage": "取得玩家当前控制的 Character。",
      "tip": "简化常见 Cast 链，但类型固定为 Character。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "Character",
            "zh": ""
          }
        ],
        "memory": "获取玩家角色"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Player=玩家。合起来就是“获取玩家角色”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Player Character？”，试着回答：取得玩家当前控制的 Character。"
      }
    },
    {
      "id": 125,
      "category": "事件与输入",
      "en": "Is Locally Controlled",
      "zh": "是否本地控制",
      "location": "Pawn / Is Locally Controlled",
      "usage": "判断该 Pawn 是否是本机玩家控制。",
      "tip": "联网游戏里处理本地输入和镜头时要考虑。",
      "groups": [
        "network"
      ],
      "scenarios": [
        "network-fire"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Locally",
            "zh": ""
          },
          {
            "en": "Controlled",
            "zh": ""
          }
        ],
        "memory": "是否本地控制"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Is=是否。合起来就是“是否本地控制”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Is Locally Controlled？”，试着回答：判断该 Pawn 是否是本机玩家控制。"
      }
    },
    {
      "id": 126,
      "category": "流程控制",
      "en": "Execution Flow",
      "zh": "执行流程",
      "location": "White execution wires",
      "usage": "白色连线决定节点从谁走到谁。",
      "tip": "数据针不会自动执行节点；不要混淆白线与彩线。",
      "groups": [
        "debug"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Execution",
            "zh": ""
          },
          {
            "en": "Flow",
            "zh": ""
          }
        ],
        "memory": "执行流程"
      },
      "memoryAid": {
        "association": "把「Execution Flow」想成路线上的岔路和红绿灯里的一个工具，它负责“执行流程”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Execution Flow？”，试着回答：白色连线决定节点从谁走到谁。"
      }
    },
    {
      "id": 127,
      "category": "流程控制",
      "en": "Branch",
      "zh": "条件分支",
      "location": "Flow Control / Branch",
      "usage": "根据 Condition 走 True 或 False。",
      "tip": "蓝色判断节点，常接比较结果或 Boolean 变量。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Branch 是岔路口，Condition 决定走 True 还是 False。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Branch？”，试着回答：根据 Condition 走 True 或 False。"
      }
    },
    {
      "id": 128,
      "category": "流程控制",
      "en": "Condition",
      "zh": "条件",
      "location": "Branch / Condition pin",
      "usage": "决定分支方向的布尔输入。",
      "tip": "True 走上面的 True 针，False 走下面的 False 针。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Condition」想成路线上的岔路和红绿灯里的一个工具，它负责“条件”。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Condition？”，试着回答：决定分支方向的布尔输入。"
      }
    },
    {
      "id": 129,
      "category": "流程控制",
      "en": "Sequence",
      "zh": "顺序节点",
      "location": "Flow Control / Sequence",
      "usage": "按编号同时展开多条后续执行路径。",
      "tip": "它表示同一时刻的可继续路径，不等同于 Delay。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Sequence 像分叉电缆，同一次执行可以同时进入多条后续路线。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Sequence？”，试着回答：按编号同时展开多条后续执行路径。"
      }
    },
    {
      "id": 130,
      "category": "流程控制",
      "en": "Do Once",
      "zh": "只执行一次",
      "location": "Flow Control / Do Once",
      "usage": "第一次通过后关闭，直到 Reset。",
      "tip": "适合播放一次音效或只处理首次碰撞。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Do",
            "zh": "执行"
          },
          {
            "en": "Once",
            "zh": "一次"
          }
        ],
        "memory": "只执行一次"
      },
      "memoryAid": {
        "association": "Do Once 像一次性门禁，通过一次后必须 Reset 才会再次打开。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Do Once？”，试着回答：第一次通过后关闭，直到 Reset。"
      }
    },
    {
      "id": 131,
      "category": "流程控制",
      "en": "Reset",
      "zh": "重置",
      "location": "Do Once / Gate / Reset input",
      "usage": "清理节点内部状态，使其可以重新开始。",
      "tip": "忘记 Reset 是最常见的“为什么没反应”原因。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Reset」想成路线上的岔路和红绿灯里的一个工具，它负责“重置”。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Reset？”，试着回答：清理节点内部状态，使其可以重新开始。"
      }
    },
    {
      "id": 132,
      "category": "流程控制",
      "en": "Gate",
      "zh": "门控节点",
      "location": "Flow Control / Gate",
      "usage": "用 Open、Close、Toggle 控制执行是否通过。",
      "tip": "适合临时启用/禁用某段逻辑。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Gate 像可开可关的门，Open 放行、Close 拦截、Toggle 切换。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Gate？”，试着回答：用 Open、Close、Toggle 控制执行是否通过。"
      }
    },
    {
      "id": 133,
      "category": "流程控制",
      "en": "Open",
      "zh": "打开",
      "location": "Gate input",
      "usage": "让 Gate 的 Exit 允许后续执行通过。",
      "tip": "Gate 默认通常是关的。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Open」想成路线上的岔路和红绿灯里的一个工具，它负责“打开”。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Open？”，试着回答：让 Gate 的 Exit 允许后续执行通过。"
      }
    },
    {
      "id": 134,
      "category": "流程控制",
      "en": "Close",
      "zh": "关闭",
      "location": "Gate input",
      "usage": "阻止 Gate 的输出。",
      "tip": "进入过场或锁定状态时可用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Close」想成路线上的岔路和红绿灯里的一个工具，它负责“关闭”。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Close？”，试着回答：阻止 Gate 的输出。"
      }
    },
    {
      "id": 135,
      "category": "流程控制",
      "en": "Toggle",
      "zh": "切换",
      "location": "Gate / Toggle input",
      "usage": "在打开和关闭之间反转。",
      "tip": "一个按键开关某功能时很好用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Toggle」想成路线上的岔路和红绿灯里的一个工具，它负责“切换”。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Toggle？”，试着回答：在打开和关闭之间反转。"
      }
    },
    {
      "id": 136,
      "category": "流程控制",
      "en": "Flip Flop",
      "zh": "交替开关",
      "location": "Flow Control / Flip Flop",
      "usage": "每次触发在 A、B 两条输出之间轮流。",
      "tip": "第一次默认走 A，实际顺序可在节点细节查看。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Flip",
            "zh": ""
          },
          {
            "en": "Flop",
            "zh": ""
          }
        ],
        "memory": "交替开关"
      },
      "memoryAid": {
        "association": "Flip Flop 像跷跷板，一下走 A，一下走 B。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Flip Flop？”，试着回答：每次触发在 A、B 两条输出之间轮流。"
      }
    },
    {
      "id": 137,
      "category": "流程控制",
      "en": "MultiGate",
      "zh": "多路顺序门",
      "location": "Flow Control / MultiGate",
      "usage": "按顺序把多次执行分到多个输出。",
      "tip": "可设置 Loop 循环和随机顺序。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「MultiGate」想成路线上的岔路和红绿灯里的一个工具，它负责“多路顺序门”。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 MultiGate？”，试着回答：按顺序把多次执行分到多个输出。"
      }
    },
    {
      "id": 138,
      "category": "流程控制",
      "en": "Two Way",
      "zh": "两路模式",
      "location": "Flow Control / Switch",
      "usage": "按输入在两个输出之间选择。",
      "tip": "比写多个 Branch 更直观。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Two",
            "zh": ""
          },
          {
            "en": "Way",
            "zh": ""
          }
        ],
        "memory": "两路模式"
      },
      "memoryAid": {
        "association": "把「Two Way」想成路线上的岔路和红绿灯里的一个工具，它负责“两路模式”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Two Way？”，试着回答：按输入在两个输出之间选择。"
      }
    },
    {
      "id": 139,
      "category": "流程控制",
      "en": "For Each Loop",
      "zh": "遍历数组",
      "location": "Array / For Each Loop",
      "usage": "对数组中的每个元素执行一次。",
      "tip": "Element 是当前值，Index 是当前位置，从 0 开始。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "For Each",
            "zh": "对每个元素"
          },
          {
            "en": "Loop",
            "zh": "循环"
          }
        ],
        "memory": "遍历数组"
      },
      "memoryAid": {
        "association": "For Each Loop 像老师逐一点名，每个数组元素都要回应一次。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 For Each Loop？”，试着回答：对数组中的每个元素执行一次。"
      }
    },
    {
      "id": 140,
      "category": "流程控制",
      "en": "For Each Loop with Break",
      "zh": "可中断遍历",
      "location": "Array / For Each Loop with Break",
      "usage": "遍历数组，并可用 Break 提前结束。",
      "tip": "找到第一个满足条件的元素后停止时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "For Each",
            "zh": "对每个元素"
          },
          {
            "en": "Loop",
            "zh": "循环"
          },
          {
            "en": "with",
            "zh": "带有"
          },
          {
            "en": "Break",
            "zh": "中断"
          }
        ],
        "memory": "可中断遍历"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：For Each=对每个元素 → Loop=循环 → with=带有 → Break=中断。合起来就是“可中断遍历”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 For Each Loop with Break？”，试着回答：遍历数组，并可用 Break 提前结束。"
      }
    },
    {
      "id": 141,
      "category": "流程控制",
      "en": "For Loop",
      "zh": "计数循环",
      "location": "Flow Control / For Loop",
      "usage": "从 First Index 到 Last Index 逐个计数。",
      "tip": "适合固定次数，例如生成 10 个道具。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "For",
            "zh": "按次数"
          },
          {
            "en": "Loop",
            "zh": "循环"
          }
        ],
        "memory": "计数循环"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：For=按次数 → Loop=循环。合起来就是“计数循环”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 For Loop？”，试着回答：从 First Index 到 Last Index 逐个计数。"
      }
    },
    {
      "id": 142,
      "category": "流程控制",
      "en": "While Loop",
      "zh": "条件循环",
      "location": "Flow Control / While Loop",
      "usage": "条件为 True 时反复执行。",
      "tip": "极易写出死循环；循环体里必须有终止条件。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "While",
            "zh": "当……时"
          },
          {
            "en": "Loop",
            "zh": "循环"
          }
        ],
        "memory": "条件循环"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：While=当……时 → Loop=循环。合起来就是“条件循环”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 While Loop？”，试着回答：条件为 True 时反复执行。"
      }
    },
    {
      "id": 143,
      "category": "流程控制",
      "en": "Loop Body",
      "zh": "循环体",
      "location": "For / While / For Each / Loop Body pin",
      "usage": "每次循环真正执行的那段逻辑。",
      "tip": "循环体里的执行线必须结束或回到循环流程。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Loop",
            "zh": "循环"
          },
          {
            "en": "Body",
            "zh": "物理体"
          }
        ],
        "memory": "循环体"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Loop=循环 → Body=物理体。合起来就是“循环体”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Loop Body？”，试着回答：每次循环真正执行的那段逻辑。"
      }
    },
    {
      "id": 144,
      "category": "流程控制",
      "en": "Break",
      "zh": "提前退出循环",
      "location": "Loop node / Break input",
      "usage": "停止剩余循环。",
      "tip": "不是 Breakpoint，也不是 Blueprint break。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Break」想成路线上的岔路和红绿灯里的一个工具，它负责“提前退出循环”。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Break？”，试着回答：停止剩余循环。"
      }
    },
    {
      "id": 145,
      "category": "流程控制",
      "en": "Completed",
      "zh": "循环完成",
      "location": "Loop node / Completed pin",
      "usage": "遍历全部完成后继续执行。",
      "tip": "不要在循环体里放 Delay 指望它暂停整个循环。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Completed」想成路线上的岔路和红绿灯里的一个工具，它负责“循环完成”。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Completed？”，试着回答：遍历全部完成后继续执行。"
      }
    },
    {
      "id": 146,
      "category": "流程控制",
      "en": "Delay",
      "zh": "延时",
      "location": "Flow Control / Delay",
      "usage": "等待指定秒数后再继续执行。",
      "tip": "单个蓝图里对它多次调用会覆盖同一计时状态，需要重触发时用 Retriggerable Delay。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Delay 像一个闹钟，时间到之前后面的执行线先等着。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Delay？”，试着回答：等待指定秒数后再继续执行。"
      }
    },
    {
      "id": 147,
      "category": "流程控制",
      "en": "Retriggerable Delay",
      "zh": "可重新计时延时",
      "location": "Flow Control / Retriggerable Delay",
      "usage": "每次触发都重新开始倒计时。",
      "tip": "适合间隔判断，防止短时间重复触发。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Retriggerable",
            "zh": ""
          },
          {
            "en": "Delay",
            "zh": "延时"
          }
        ],
        "memory": "可重新计时延时"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Delay=延时。合起来就是“可重新计时延时”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Retriggerable Delay？”，试着回答：每次触发都重新开始倒计时。"
      }
    },
    {
      "id": 148,
      "category": "流程控制",
      "en": "Set Timer by Event",
      "zh": "按事件设置计时器",
      "location": "Utilities / Time / Set Timer by Event",
      "usage": "等待指定时间后调用一个事件。",
      "tip": "返回 Timer Handle；可 Loop 或只执行一次。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Timer",
            "zh": "计时器"
          },
          {
            "en": "by",
            "zh": "按"
          },
          {
            "en": "Event",
            "zh": "事件"
          }
        ],
        "memory": "按事件设置计时器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Timer=计时器 → by=按 → Event=事件。合起来就是“按事件设置计时器”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Timer by Event？”，试着回答：等待指定时间后调用一个事件。"
      }
    },
    {
      "id": 149,
      "category": "流程控制",
      "en": "Set Timer by Function Name",
      "zh": "按函数名设置计时器",
      "location": "Utilities / Time / Set Timer by Function Name",
      "usage": "按字符串函数名调用计时器。",
      "tip": "函数名拼错不易在编译期发现，优先 Set Timer by Event。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Timer",
            "zh": "计时器"
          },
          {
            "en": "by",
            "zh": "按"
          },
          {
            "en": "Function",
            "zh": "函数"
          },
          {
            "en": "Name",
            "zh": "名称"
          }
        ],
        "memory": "按函数名设置计时器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Timer=计时器 → by=按 → Function=函数 → Name=名称。合起来就是“按函数名设置计时器”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Timer by Function Name？”，试着回答：按字符串函数名调用计时器。"
      }
    },
    {
      "id": 150,
      "category": "流程控制",
      "en": "Clear and Invalidate Timer by Handle",
      "zh": "清除并作废计时器",
      "location": "Utilities / Time / Clear and Invalidate Timer by Handle",
      "usage": "停止指定计时器并清除句柄。",
      "tip": "切换状态或销毁对象前应清理。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Clear",
            "zh": "清除"
          },
          {
            "en": "and",
            "zh": "并且"
          },
          {
            "en": "Invalidate",
            "zh": "作废"
          },
          {
            "en": "Timer",
            "zh": "计时器"
          },
          {
            "en": "by",
            "zh": "按"
          },
          {
            "en": "Handle",
            "zh": "句柄"
          }
        ],
        "memory": "清除并作废计时器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Clear=清除 → and=并且 → Invalidate=作废 → Timer=计时器 → by=按 → Handle=句柄。合起来就是“清除并作废计时器”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Clear and Invalidate Timer by Handle？”，试着回答：停止指定计时器并清除句柄。"
      }
    },
    {
      "id": 151,
      "category": "流程控制",
      "en": "Timer Handle",
      "zh": "计时器句柄",
      "location": "Returned by Set Timer",
      "usage": "用于标识并管理某个计时器。",
      "tip": "保存为变量，之后才可准确清除。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Timer",
            "zh": "计时器"
          },
          {
            "en": "Handle",
            "zh": "句柄"
          }
        ],
        "memory": "计时器句柄"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Timer=计时器 → Handle=句柄。合起来就是“计时器句柄”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Timer Handle？”，试着回答：用于标识并管理某个计时器。"
      }
    },
    {
      "id": 152,
      "category": "流程控制",
      "en": "Switch",
      "zh": "分类型选择",
      "location": "Flow Control / Switch",
      "usage": "根据整数、枚举、字符串等进入不同输出。",
      "tip": "比堆很多 Branch 更易读。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Switch」想成路线上的岔路和红绿灯里的一个工具，它负责“分类型选择”。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Switch？”，试着回答：根据整数、枚举、字符串等进入不同输出。"
      }
    },
    {
      "id": 153,
      "category": "流程控制",
      "en": "Switch on Int",
      "zh": "按整数分支",
      "location": "Switch / Switch on Int",
      "usage": "按整数选择输出，并可配置未匹配默认口。",
      "tip": "索引或状态码常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Switch",
            "zh": "分支"
          },
          {
            "en": "on",
            "zh": ""
          },
          {
            "en": "Int",
            "zh": ""
          }
        ],
        "memory": "按整数分支"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Switch=分支。合起来就是“按整数分支”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Switch on Int？”，试着回答：按整数选择输出，并可配置未匹配默认口。"
      }
    },
    {
      "id": 154,
      "category": "流程控制",
      "en": "Switch on Enum",
      "zh": "按枚举分支",
      "location": "Switch / Switch on Enum",
      "usage": "按命名状态选择输出。",
      "tip": "强烈推荐用于角色状态机式逻辑。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Switch",
            "zh": "分支"
          },
          {
            "en": "on",
            "zh": ""
          },
          {
            "en": "Enum",
            "zh": "枚举"
          }
        ],
        "memory": "按枚举分支"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Switch=分支 → Enum=枚举。合起来就是“按枚举分支”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Switch on Enum？”，试着回答：按命名状态选择输出。"
      }
    },
    {
      "id": 155,
      "category": "流程控制",
      "en": "Switch on String",
      "zh": "按字符串分支",
      "location": "Switch / Switch on String",
      "usage": "根据文本匹配选择输出。",
      "tip": "文本拼写错误不易被编译发现，数据驱动时谨慎。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Switch",
            "zh": "分支"
          },
          {
            "en": "on",
            "zh": ""
          },
          {
            "en": "String",
            "zh": "字符串"
          }
        ],
        "memory": "按字符串分支"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Switch=分支 → String=字符串。合起来就是“按字符串分支”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Switch on String？”，试着回答：根据文本匹配选择输出。"
      }
    },
    {
      "id": 156,
      "category": "流程控制",
      "en": "Select",
      "zh": "数据选择器",
      "location": "Utilities / Select",
      "usage": "根据布尔条件在两组数据中选择一个。",
      "tip": "它不执行两条流程，只是返回数据。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Select」想成路线上的岔路和红绿灯里的一个工具，它负责“数据选择器”。",
        "method": "把节点读成“如果、然后、等待、重复”。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Select？”，试着回答：根据布尔条件在两组数据中选择一个。"
      }
    },
    {
      "id": 157,
      "category": "流程控制",
      "en": "Do N",
      "zh": "执行 N 次",
      "location": "Flow Control / Do N",
      "usage": "允许通过指定次数，之后阻挡。",
      "tip": "需要重置时调用 Reset。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Do",
            "zh": "执行"
          },
          {
            "en": "N",
            "zh": ""
          }
        ],
        "memory": "执行 N 次"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Do=执行。合起来就是“执行 N 次”。",
        "method": "把节点读成“如果、然后、等待、重复”。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Do N？”，试着回答：允许通过指定次数，之后阻挡。"
      }
    },
    {
      "id": 158,
      "category": "数学运算",
      "en": "Add",
      "zh": "加法",
      "location": "Math / Float + Float",
      "usage": "计算两个数相加。",
      "tip": "数值针直接拉出来搜索 + 也能出现。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Add」想成游戏里的计算器里的一个工具，它负责“加法”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Add？”，试着回答：计算两个数相加。"
      }
    },
    {
      "id": 159,
      "category": "数学运算",
      "en": "Subtract",
      "zh": "减法",
      "location": "Math / Float - Float",
      "usage": "计算两个数相减。",
      "tip": "顺序很重要：上面减下面。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Subtract」想成游戏里的计算器里的一个工具，它负责“减法”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Subtract？”，试着回答：计算两个数相减。"
      }
    },
    {
      "id": 160,
      "category": "数学运算",
      "en": "Multiply",
      "zh": "乘法",
      "location": "Math / Float * Float",
      "usage": "计算两个数相乘。",
      "tip": "速度乘倍率、伤害乘防御系数常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Multiply」想成游戏里的计算器里的一个工具，它负责“乘法”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Multiply？”，试着回答：计算两个数相乘。"
      }
    },
    {
      "id": 161,
      "category": "数学运算",
      "en": "Divide",
      "zh": "除法",
      "location": "Math / Float / Float",
      "usage": "计算两个数相除。",
      "tip": "先保证除数不为 0，避免异常或无穷值。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Divide」想成游戏里的计算器里的一个工具，它负责“除法”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Divide？”，试着回答：计算两个数相除。"
      }
    },
    {
      "id": 162,
      "category": "数学运算",
      "en": "Percent",
      "zh": "百分比",
      "location": "Math / Percent",
      "usage": "计算第一数相对第二数的百分比。",
      "tip": "看节点定义确认输入顺序，不要凭外观猜。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Percent」想成游戏里的计算器里的一个工具，它负责“百分比”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Percent？”，试着回答：计算第一数相对第二数的百分比。"
      }
    },
    {
      "id": 163,
      "category": "数学运算",
      "en": "FMod",
      "zh": "小数取余",
      "location": "Math / FMod",
      "usage": "求两数相除的余数，支持小数。",
      "tip": "循环计数、角度绕回常使用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「FMod」想成游戏里的计算器里的一个工具，它负责“小数取余”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 FMod？”，试着回答：求两数相除的余数，支持小数。"
      }
    },
    {
      "id": 164,
      "category": "数学运算",
      "en": "Absolute",
      "zh": "绝对值",
      "location": "Math / Absolute",
      "usage": "忽略负号，返回非负数。",
      "tip": "比较距离差时常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Absolute」想成游戏里的计算器里的一个工具，它负责“绝对值”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Absolute？”，试着回答：忽略负号，返回非负数。"
      }
    },
    {
      "id": 165,
      "category": "数学运算",
      "en": "Ceil",
      "zh": "向上取整",
      "location": "Math / Ceil",
      "usage": "向上取到最近整数，例如 1.2 得 2。",
      "tip": "需要保证数量足够时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Ceil」想成游戏里的计算器里的一个工具，它负责“向上取整”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Ceil？”，试着回答：向上取到最近整数，例如 1.2 得 2。"
      }
    },
    {
      "id": 166,
      "category": "数学运算",
      "en": "Floor",
      "zh": "向下取整",
      "location": "Math / Floor",
      "usage": "向下取到最近整数，例如 1.8 得 1。",
      "tip": "计算网格格数时常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Floor」想成游戏里的计算器里的一个工具，它负责“向下取整”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Floor？”，试着回答：向下取到最近整数，例如 1.8 得 1。"
      }
    },
    {
      "id": 167,
      "category": "数学运算",
      "en": "Round",
      "zh": "四舍五入",
      "location": "Math / Round",
      "usage": "按小数部分接近的整数取整。",
      "tip": "显示分数或距离时常使用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Round」想成游戏里的计算器里的一个工具，它负责“四舍五入”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Round？”，试着回答：按小数部分接近的整数取整。"
      }
    },
    {
      "id": 168,
      "category": "数学运算",
      "en": "Truncate",
      "zh": "截断小数",
      "location": "Math / Truncate",
      "usage": "直接去掉小数部分。",
      "tip": "与 Floor 对负数的处理可能不同。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Truncate」想成游戏里的计算器里的一个工具，它负责“截断小数”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Truncate？”，试着回答：直接去掉小数部分。"
      }
    },
    {
      "id": 169,
      "category": "数学运算",
      "en": "Min",
      "zh": "取较小值",
      "location": "Math / Min",
      "usage": "返回两个值中较小的一个。",
      "tip": "限制速度不超过某个下限或上限时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Min」想成游戏里的计算器里的一个工具，它负责“取较小值”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Min？”，试着回答：返回两个值中较小的一个。"
      }
    },
    {
      "id": 170,
      "category": "数学运算",
      "en": "Max",
      "zh": "取较大值",
      "location": "Math / Max",
      "usage": "返回两个值中较大的一个。",
      "tip": "避免数值降到负值时常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Max」想成游戏里的计算器里的一个工具，它负责“取较大值”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Max？”，试着回答：返回两个值中较大的一个。"
      }
    },
    {
      "id": 171,
      "category": "数学运算",
      "en": "Clamp",
      "zh": "限制范围",
      "location": "Math / Clamp",
      "usage": "把数值限制在 Min 与 Max 之间。",
      "tip": "生命值、镜头角度、滑块值常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Clamp」想成游戏里的计算器里的一个工具，它负责“限制范围”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Clamp？”，试着回答：把数值限制在 Min 与 Max 之间。"
      }
    },
    {
      "id": 172,
      "category": "数学运算",
      "en": "Lerp",
      "zh": "线性插值",
      "location": "Math / Lerp",
      "usage": "按 Alpha 在 A 和 B 之间混合。",
      "tip": "Alpha 0 是 A，1 是 B，0.5 是中间。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Lerp」想成游戏里的计算器里的一个工具，它负责“线性插值”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Lerp？”，试着回答：按 Alpha 在 A 和 B 之间混合。"
      }
    },
    {
      "id": 173,
      "category": "数学运算",
      "en": "Inverse Lerp",
      "zh": "反向插值",
      "location": "Math / Inverse Lerp",
      "usage": "根据当前值反算出它在 A 到 B 中的比例。",
      "tip": "把数值转换到 0 到 1 的进度很有用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Inverse",
            "zh": ""
          },
          {
            "en": "Lerp",
            "zh": ""
          }
        ],
        "memory": "反向插值"
      },
      "memoryAid": {
        "association": "把「Inverse Lerp」想成游戏里的计算器里的一个工具，它负责“反向插值”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Inverse Lerp？”，试着回答：根据当前值反算出它在 A 到 B 中的比例。"
      }
    },
    {
      "id": 174,
      "category": "数学运算",
      "en": "Map Range Clamped",
      "zh": "限制范围的数值映射",
      "location": "Math / Map Range Clamped",
      "usage": "把一个区间映射到另一个区间，并夹住输出。",
      "tip": "例如把 0–100 生命值映射成 0–1 的 UI 进度。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Map",
            "zh": "映射表"
          },
          {
            "en": "Range",
            "zh": "范围"
          },
          {
            "en": "Clamped",
            "zh": ""
          }
        ],
        "memory": "限制范围的数值映射"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Map=映射表 → Range=范围。合起来就是“限制范围的数值映射”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Map Range Clamped？”，试着回答：把一个区间映射到另一个区间，并夹住输出。"
      }
    },
    {
      "id": 175,
      "category": "数学运算",
      "en": "Map Range Unclamped",
      "zh": "不限制范围的数值映射",
      "location": "Math / Map Range Unclamped",
      "usage": "把区间映射到新区间，允许超出两端。",
      "tip": "需要连续超出范围时别用 Clamped。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Map",
            "zh": "映射表"
          },
          {
            "en": "Range",
            "zh": "范围"
          },
          {
            "en": "Unclamped",
            "zh": ""
          }
        ],
        "memory": "不限制范围的数值映射"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Map=映射表 → Range=范围。合起来就是“不限制范围的数值映射”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Map Range Unclamped？”，试着回答：把区间映射到新区间，允许超出两端。"
      }
    },
    {
      "id": 176,
      "category": "数学运算",
      "en": "Random Float in Range",
      "zh": "范围内随机小数",
      "location": "Math / Random / Random Float in Range",
      "usage": "生成 Min 到 Max 之间的随机 Float。",
      "tip": "伤害浮动、掉落概率等常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Random",
            "zh": "随机"
          },
          {
            "en": "Float",
            "zh": "浮点数"
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Range",
            "zh": "范围"
          }
        ],
        "memory": "范围内随机小数"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Random=随机 → Float=浮点数 → in=在……中 → Range=范围。合起来就是“范围内随机小数”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Random Float in Range？”，试着回答：生成 Min 到 Max 之间的随机 Float。"
      }
    },
    {
      "id": 177,
      "category": "数学运算",
      "en": "Random Integer in Range",
      "zh": "范围内随机整数",
      "location": "Math / Random / Random Integer in Range",
      "usage": "生成指定整数区间内的随机整数。",
      "tip": "注意 Max 端是否包含，以节点说明为准。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Random",
            "zh": "随机"
          },
          {
            "en": "Integer",
            "zh": "整数"
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Range",
            "zh": "范围"
          }
        ],
        "memory": "范围内随机整数"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Random=随机 → Integer=整数 → in=在……中 → Range=范围。合起来就是“范围内随机整数”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Random Integer in Range？”，试着回答：生成指定整数区间内的随机整数。"
      }
    },
    {
      "id": 178,
      "category": "数学运算",
      "en": "Random Bool with Weight",
      "zh": "带权重随机布尔",
      "location": "Math / Random / Random Bool with Weight",
      "usage": "按给定概率返回 True 或 False。",
      "tip": "Weight 是 True 的相对概率，仍需结合节点输入看。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Random",
            "zh": "随机"
          },
          {
            "en": "Bool",
            "zh": ""
          },
          {
            "en": "with",
            "zh": "带有"
          },
          {
            "en": "Weight",
            "zh": ""
          }
        ],
        "memory": "带权重随机布尔"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Random=随机 → with=带有。合起来就是“带权重随机布尔”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Random Bool with Weight？”，试着回答：按给定概率返回 True 或 False。"
      }
    },
    {
      "id": 179,
      "category": "数学运算",
      "en": "Random Unit Vector",
      "zh": "随机单位方向",
      "location": "Math / Random / Random Unit Vector",
      "usage": "生成方向随机、长度为 1 的三维方向。",
      "tip": "配合 Multiply 可生成指定半径的随机偏移。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Random",
            "zh": "随机"
          },
          {
            "en": "Unit",
            "zh": ""
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "随机单位方向"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Random=随机 → Vector=向量。合起来就是“随机单位方向”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Random Unit Vector？”，试着回答：生成方向随机、长度为 1 的三维方向。"
      }
    },
    {
      "id": 180,
      "category": "数学运算",
      "en": "Square",
      "zh": "平方",
      "location": "Math / Square",
      "usage": "把数乘以自身。",
      "tip": "距离比较时有时可先平方，避免开根号。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Square」想成游戏里的计算器里的一个工具，它负责“平方”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Square？”，试着回答：把数乘以自身。"
      }
    },
    {
      "id": 181,
      "category": "数学运算",
      "en": "Square Root",
      "zh": "平方根",
      "location": "Math / Square Root",
      "usage": "计算一个非负数的平方根。",
      "tip": "Vector Length 已内部处理三维长度。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Square",
            "zh": ""
          },
          {
            "en": "Root",
            "zh": ""
          }
        ],
        "memory": "平方根"
      },
      "memoryAid": {
        "association": "把「Square Root」想成游戏里的计算器里的一个工具，它负责“平方根”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Square Root？”，试着回答：计算一个非负数的平方根。"
      }
    },
    {
      "id": 182,
      "category": "数学运算",
      "en": "Power",
      "zh": "幂运算",
      "location": "Math / Power",
      "usage": "计算底数的指定次方。",
      "tip": "指数很大时注意数值范围。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Power」想成游戏里的计算器里的一个工具，它负责“幂运算”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Power？”，试着回答：计算底数的指定次方。"
      }
    },
    {
      "id": 183,
      "category": "数学运算",
      "en": "Sign",
      "zh": "符号",
      "location": "Math / Sign",
      "usage": "返回 -1、0 或 1，表示数值正负。",
      "tip": "想只用方向、不管大小时很有用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Sign」想成游戏里的计算器里的一个工具，它负责“符号”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Sign？”，试着回答：返回 -1、0 或 1，表示数值正负。"
      }
    },
    {
      "id": 184,
      "category": "数学运算",
      "en": "Negate",
      "zh": "取反",
      "location": "Math / Negate",
      "usage": "把正负号反过来。",
      "tip": "反向移动向量时可直接用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Negate」想成游戏里的计算器里的一个工具，它负责“取反”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Negate？”，试着回答：把正负号反过来。"
      }
    },
    {
      "id": 185,
      "category": "数学运算",
      "en": "Normalize",
      "zh": "归一化",
      "location": "Math / Vector / Normalize",
      "usage": "把向量长度变为 1，只保留方向。",
      "tip": "移动方向乘以 Speed 才能得到稳定速度。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Normalize」想成游戏里的计算器里的一个工具，它负责“归一化”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Normalize？”，试着回答：把向量长度变为 1，只保留方向。"
      }
    },
    {
      "id": 186,
      "category": "数学运算",
      "en": "Dot Product",
      "zh": "点积",
      "location": "Math / Vector / Dot Product",
      "usage": "衡量两个方向的接近程度。",
      "tip": "同向接近 1，垂直为 0，反向接近 -1。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Dot",
            "zh": ""
          },
          {
            "en": "Product",
            "zh": ""
          }
        ],
        "memory": "点积"
      },
      "memoryAid": {
        "association": "把「Dot Product」想成游戏里的计算器里的一个工具，它负责“点积”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Dot Product？”，试着回答：衡量两个方向的接近程度。"
      }
    },
    {
      "id": 187,
      "category": "数学运算",
      "en": "Cross Product",
      "zh": "叉积",
      "location": "Math / Vector / Cross Product",
      "usage": "由两个向量得到第三个垂直方向。",
      "tip": "适合求侧面或法线方向。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Cross",
            "zh": ""
          },
          {
            "en": "Product",
            "zh": ""
          }
        ],
        "memory": "叉积"
      },
      "memoryAid": {
        "association": "把「Cross Product」想成游戏里的计算器里的一个工具，它负责“叉积”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Cross Product？”，试着回答：由两个向量得到第三个垂直方向。"
      }
    },
    {
      "id": 188,
      "category": "数学运算",
      "en": "Distance",
      "zh": "距离",
      "location": "Math / Vector / Distance",
      "usage": "计算两个位置之间的距离。",
      "tip": "判断玩家是否靠近目标很常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Distance」想成游戏里的计算器里的一个工具，它负责“距离”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Distance？”，试着回答：计算两个位置之间的距离。"
      }
    },
    {
      "id": 189,
      "category": "数学运算",
      "en": "Vector Length",
      "zh": "向量长度",
      "location": "Math / Vector / Vector Length",
      "usage": "计算三维向量长度。",
      "tip": "对速度向量使用可得到当前速度大小。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Vector",
            "zh": "向量"
          },
          {
            "en": "Length",
            "zh": "长度"
          }
        ],
        "memory": "向量长度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Vector=向量 → Length=长度。合起来就是“向量长度”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Vector Length？”，试着回答：计算三维向量长度。"
      }
    },
    {
      "id": 190,
      "category": "数学运算",
      "en": "Vector Length XY",
      "zh": "平面向量长度",
      "location": "Math / Vector / Vector Length XY",
      "usage": "只计算 X/Y 方向的水平长度。",
      "tip": "判断水平移动速度时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Vector",
            "zh": "向量"
          },
          {
            "en": "Length",
            "zh": "长度"
          },
          {
            "en": "XY",
            "zh": ""
          }
        ],
        "memory": "平面向量长度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Vector=向量 → Length=长度。合起来就是“平面向量长度”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Vector Length XY？”，试着回答：只计算 X/Y 方向的水平长度。"
      }
    },
    {
      "id": 191,
      "category": "数学运算",
      "en": "Nearly Equal",
      "zh": "近似相等",
      "location": "Math / Float / Nearly Equal",
      "usage": "在误差容限内判断两个浮点数近似相等。",
      "tip": "浮点数不要总用严格相等比较。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Nearly",
            "zh": ""
          },
          {
            "en": "Equal",
            "zh": ""
          }
        ],
        "memory": "近似相等"
      },
      "memoryAid": {
        "association": "把「Nearly Equal」想成游戏里的计算器里的一个工具，它负责“近似相等”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Nearly Equal？”，试着回答：在误差容限内判断两个浮点数近似相等。"
      }
    },
    {
      "id": 192,
      "category": "数学运算",
      "en": "Is Nearly Zero",
      "zh": "是否近似为零",
      "location": "Math / Float / Is Nearly Zero",
      "usage": "在允许误差内判断是否接近 0。",
      "tip": "停止判断比绝对等于 0 更可靠。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Nearly",
            "zh": ""
          },
          {
            "en": "Zero",
            "zh": ""
          }
        ],
        "memory": "是否近似为零"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Is=是否。合起来就是“是否近似为零”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Is Nearly Zero？”，试着回答：在允许误差内判断是否接近 0。"
      }
    },
    {
      "id": 193,
      "category": "数学运算",
      "en": "Saturate",
      "zh": "限制到 0–1",
      "location": "Math / Saturate",
      "usage": "把结果夹在 0 和 1 之间。",
      "tip": "颜色、Alpha、进度值常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Saturate」想成游戏里的计算器里的一个工具，它负责“限制到 0–1”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Saturate？”，试着回答：把结果夹在 0 和 1 之间。"
      }
    },
    {
      "id": 194,
      "category": "数学运算",
      "en": "Sin",
      "zh": "正弦",
      "location": "Math / Trig / Sin",
      "usage": "计算三角函数正弦值。",
      "tip": "变化周期、圆周位置计算使用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Sin」想成游戏里的计算器里的一个工具，它负责“正弦”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Sin？”，试着回答：计算三角函数正弦值。"
      }
    },
    {
      "id": 195,
      "category": "数学运算",
      "en": "Cos",
      "zh": "余弦",
      "location": "Math / Trig / Cos",
      "usage": "计算三角函数余弦值。",
      "tip": "常与 Sin 配合生成圆周运动。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Cos」想成游戏里的计算器里的一个工具，它负责“余弦”。",
        "method": "用一组具体数字代入，再观察输出变化。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Cos？”，试着回答：计算三角函数余弦值。"
      }
    },
    {
      "id": 196,
      "category": "数学运算",
      "en": "Degrees to Radians",
      "zh": "角度转弧度",
      "location": "Math / Trig / Degrees to Radians",
      "usage": "把 0–360 角度制转成弧度制。",
      "tip": "物理/三角函数有时要求弧度。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Degrees",
            "zh": ""
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "Radians",
            "zh": ""
          }
        ],
        "memory": "角度转弧度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：to=到。合起来就是“角度转弧度”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Degrees to Radians？”，试着回答：把 0–360 角度制转成弧度制。"
      }
    },
    {
      "id": 197,
      "category": "数学运算",
      "en": "Radians to Degrees",
      "zh": "弧度转角度",
      "location": "Math / Trig / Radians to Degrees",
      "usage": "把弧度值转回角度制。",
      "tip": "Rotator 使用角度，注意单位。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Radians",
            "zh": ""
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "Degrees",
            "zh": ""
          }
        ],
        "memory": "弧度转角度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：to=到。合起来就是“弧度转角度”。",
        "method": "用一组具体数字代入，再观察输出变化。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Radians to Degrees？”，试着回答：把弧度值转回角度制。"
      }
    },
    {
      "id": 198,
      "category": "位置·旋转·变换",
      "en": "Get Actor Location",
      "zh": "获取 Actor 位置",
      "location": "Actor / Get Actor Location",
      "usage": "取得对象在世界空间中的位置。",
      "tip": "返回值是 Vector，不是 Rotation。",
      "groups": [
        "transform"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "获取 Actor 位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Actor=场景对象 → Location=位置。合起来就是“获取 Actor 位置”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Actor Location？”，试着回答：取得对象在世界空间中的位置。"
      }
    },
    {
      "id": 199,
      "category": "位置·旋转·变换",
      "en": "Set Actor Location",
      "zh": "设置 Actor 位置",
      "location": "Actor / Set Actor Location",
      "usage": "把对象移动到指定世界位置。",
      "tip": "默认是直接改变位置；需要物理扫掠时打开 Sweep。",
      "groups": [
        "transform"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "设置 Actor 位置"
      },
      "memoryAid": {
        "association": "Set Actor Location 像瞬移指令：直接改成新的世界坐标。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Actor Location？”，试着回答：把对象移动到指定世界位置。"
      }
    },
    {
      "id": 200,
      "category": "位置·旋转·变换",
      "en": "Add Actor World Offset",
      "zh": "添加世界空间偏移",
      "location": "Actor / Add Actor World Offset",
      "usage": "在当前位置上叠加一个世界方向位移。",
      "tip": "按世界 X/Y/Z 移动，不受对象自身旋转影响。",
      "groups": [
        "transform"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "World",
            "zh": "世界"
          },
          {
            "en": "Offset",
            "zh": "偏移"
          }
        ],
        "memory": "添加世界空间偏移"
      },
      "memoryAid": {
        "association": "World Offset 像按地图的东南西北坐标挪一步，不管角色朝哪边。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Actor World Offset？”，试着回答：在当前位置上叠加一个世界方向位移。"
      }
    },
    {
      "id": 201,
      "category": "位置·旋转·变换",
      "en": "Add Actor Local Offset",
      "zh": "添加本地空间偏移",
      "location": "Actor / Add Actor Local Offset",
      "usage": "沿对象自身方向叠加位移。",
      "tip": "角色前方移动时，本地 Forward 会随朝向变化。",
      "groups": [
        "transform"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Local",
            "zh": "本地"
          },
          {
            "en": "Offset",
            "zh": "偏移"
          }
        ],
        "memory": "添加本地空间偏移"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → Actor=场景对象 → Local=本地 → Offset=偏移。合起来就是“添加本地空间偏移”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Actor Local Offset？”，试着回答：沿对象自身方向叠加位移。"
      }
    },
    {
      "id": 202,
      "category": "位置·旋转·变换",
      "en": "Get Actor Rotation",
      "zh": "获取 Actor 旋转",
      "location": "Actor / Get Actor Rotation",
      "usage": "取得对象的当前朝向。",
      "tip": "返回 Rotator，包含 Pitch、Yaw、Roll。",
      "groups": [
        "transform"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "获取 Actor 旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Actor=场景对象 → Rotation=旋转。合起来就是“获取 Actor 旋转”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Actor Rotation？”，试着回答：取得对象的当前朝向。"
      }
    },
    {
      "id": 203,
      "category": "位置·旋转·变换",
      "en": "Set Actor Rotation",
      "zh": "设置 Actor 旋转",
      "location": "Actor / Set Actor Rotation",
      "usage": "直接改变对象朝向。",
      "tip": "设置的是世界旋转，不是相对于父物体的旋转。",
      "groups": [
        "transform"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "设置 Actor 旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Actor=场景对象 → Rotation=旋转。合起来就是“设置 Actor 旋转”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Actor Rotation？”，试着回答：直接改变对象朝向。"
      }
    },
    {
      "id": 204,
      "category": "位置·旋转·变换",
      "en": "Add Actor World Rotation",
      "zh": "添加世界空间旋转",
      "location": "Actor / Add Actor World Rotation",
      "usage": "在现有朝向上叠加世界空间旋转。",
      "tip": "适合持续绕世界轴旋转。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "World",
            "zh": "世界"
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "添加世界空间旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → Actor=场景对象 → World=世界 → Rotation=旋转。合起来就是“添加世界空间旋转”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Actor World Rotation？”，试着回答：在现有朝向上叠加世界空间旋转。"
      }
    },
    {
      "id": 205,
      "category": "位置·旋转·变换",
      "en": "Add Actor Local Rotation",
      "zh": "添加本地空间旋转",
      "location": "Actor / Add Actor Local Rotation",
      "usage": "沿对象自身轴叠加旋转。",
      "tip": "翻滚、绕自身轴转动时使用。",
      "groups": [
        "transform"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Local",
            "zh": "本地"
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "添加本地空间旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → Actor=场景对象 → Local=本地 → Rotation=旋转。合起来就是“添加本地空间旋转”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Actor Local Rotation？”，试着回答：沿对象自身轴叠加旋转。"
      }
    },
    {
      "id": 206,
      "category": "位置·旋转·变换",
      "en": "Get Actor Transform",
      "zh": "获取 Actor 变换",
      "location": "Actor / Get Actor Transform",
      "usage": "取得位置、旋转和缩放。",
      "tip": "Transform 可以传给许多生成和组件节点。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Transform",
            "zh": "变换"
          }
        ],
        "memory": "获取 Actor 变换"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Actor=场景对象 → Transform=变换。合起来就是“获取 Actor 变换”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Actor Transform？”，试着回答：取得位置、旋转和缩放。"
      }
    },
    {
      "id": 207,
      "category": "位置·旋转·变换",
      "en": "Set Actor Transform",
      "zh": "设置 Actor 变换",
      "location": "Actor / Set Actor Transform",
      "usage": "一次性设置位置、旋转和缩放。",
      "tip": "想保留一部分原值时先 Break Transform 再重组。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Transform",
            "zh": "变换"
          }
        ],
        "memory": "设置 Actor 变换"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Actor=场景对象 → Transform=变换。合起来就是“设置 Actor 变换”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Actor Transform？”，试着回答：一次性设置位置、旋转和缩放。"
      }
    },
    {
      "id": 208,
      "category": "位置·旋转·变换",
      "en": "Get Actor Scale 3D",
      "zh": "获取 Actor 缩放",
      "location": "Actor / Get Actor Scale 3D",
      "usage": "取得对象的 X/Y/Z 缩放。",
      "tip": "缩放 1 表示原始大小。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Scale",
            "zh": "缩放"
          },
          {
            "en": "3D",
            "zh": ""
          }
        ],
        "memory": "获取 Actor 缩放"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Actor=场景对象 → Scale=缩放。合起来就是“获取 Actor 缩放”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Actor Scale 3D？”，试着回答：取得对象的 X/Y/Z 缩放。"
      }
    },
    {
      "id": 209,
      "category": "位置·旋转·变换",
      "en": "Set Actor Scale 3D",
      "zh": "设置 Actor 缩放",
      "location": "Actor / Set Actor Scale 3D",
      "usage": "直接设置对象三个轴的大小。",
      "tip": "检查与碰撞缩放有关的选项，避免碰撞体不匹配。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Scale",
            "zh": "缩放"
          },
          {
            "en": "3D",
            "zh": ""
          }
        ],
        "memory": "设置 Actor 缩放"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Actor=场景对象 → Scale=缩放。合起来就是“设置 Actor 缩放”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Actor Scale 3D？”，试着回答：直接设置对象三个轴的大小。"
      }
    },
    {
      "id": 210,
      "category": "位置·旋转·变换",
      "en": "Get World Location",
      "zh": "获取组件世界位置",
      "location": "Scene Component / Get World Location",
      "usage": "取得组件在整个世界中的位置。",
      "tip": "组件附加到父物体后，世界位置会跟随父物体变化。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "World",
            "zh": "世界"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "获取组件世界位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → World=世界 → Location=位置。合起来就是“获取组件世界位置”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get World Location？”，试着回答：取得组件在整个世界中的位置。"
      }
    },
    {
      "id": 211,
      "category": "位置·旋转·变换",
      "en": "Set World Location",
      "zh": "设置组件世界位置",
      "location": "Scene Component / Set World Location",
      "usage": "把组件移动到指定世界坐标。",
      "tip": "只改组件，不一定移动整个 Actor。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "World",
            "zh": "世界"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "设置组件世界位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → World=世界 → Location=位置。合起来就是“设置组件世界位置”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set World Location？”，试着回答：把组件移动到指定世界坐标。"
      }
    },
    {
      "id": 212,
      "category": "位置·旋转·变换",
      "en": "Get Relative Location",
      "zh": "获取相对位置",
      "location": "Scene Component / Get Relative Location",
      "usage": "取得组件相对父组件的位置。",
      "tip": "附加后做局部偏移时常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Relative",
            "zh": ""
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "获取相对位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Location=位置。合起来就是“获取相对位置”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Relative Location？”，试着回答：取得组件相对父组件的位置。"
      }
    },
    {
      "id": 213,
      "category": "位置·旋转·变换",
      "en": "Set Relative Location",
      "zh": "设置相对位置",
      "location": "Scene Component / Set Relative Location",
      "usage": "设置组件相对父组件的位置。",
      "tip": "父物体旋转时，组件会随本地坐标变化。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Relative",
            "zh": ""
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "设置相对位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Location=位置。合起来就是“设置相对位置”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Relative Location？”，试着回答：设置组件相对父组件的位置。"
      }
    },
    {
      "id": 214,
      "category": "位置·旋转·变换",
      "en": "Get World Rotation",
      "zh": "获取组件世界旋转",
      "location": "Scene Component / Get World Rotation",
      "usage": "取得组件在世界空间中的朝向。",
      "tip": "与 Actor Rotation 可因组件层级而不同。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "World",
            "zh": "世界"
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "获取组件世界旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → World=世界 → Rotation=旋转。合起来就是“获取组件世界旋转”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get World Rotation？”，试着回答：取得组件在世界空间中的朝向。"
      }
    },
    {
      "id": 215,
      "category": "位置·旋转·变换",
      "en": "Set World Rotation",
      "zh": "设置组件世界旋转",
      "location": "Scene Component / Set World Rotation",
      "usage": "设置组件的世界朝向。",
      "tip": "摄像机、枪口等附加组件定向时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "World",
            "zh": "世界"
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "设置组件世界旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → World=世界 → Rotation=旋转。合起来就是“设置组件世界旋转”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set World Rotation？”，试着回答：设置组件的世界朝向。"
      }
    },
    {
      "id": 216,
      "category": "位置·旋转·变换",
      "en": "Get Relative Rotation",
      "zh": "获取相对旋转",
      "location": "Scene Component / Get Relative Rotation",
      "usage": "取得组件相对父组件的旋转。",
      "tip": "角色身体上的武器偏移常看这里。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Relative",
            "zh": ""
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "获取相对旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Rotation=旋转。合起来就是“获取相对旋转”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Relative Rotation？”，试着回答：取得组件相对父组件的旋转。"
      }
    },
    {
      "id": 217,
      "category": "位置·旋转·变换",
      "en": "Set Relative Rotation",
      "zh": "设置相对旋转",
      "location": "Scene Component / Set Relative Rotation",
      "usage": "设置组件相对父组件的朝向。",
      "tip": "使用本地轴时，Pitch/Yaw/Roll 的含义要结合父组件。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Relative",
            "zh": ""
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "设置相对旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Rotation=旋转。合起来就是“设置相对旋转”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Relative Rotation？”，试着回答：设置组件相对父组件的朝向。"
      }
    },
    {
      "id": 218,
      "category": "位置·旋转·变换",
      "en": "Teleport",
      "zh": "传送",
      "location": "Actor / Set Actor Location and Rotation",
      "usage": "把对象立即移动到新位置并更新物理状态。",
      "tip": "与普通 Set Location 不同，Teleport 更强调物理同步。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Teleport」想成房间里的遥控车和摄像机里的一个工具，它负责“传送”。",
        "method": "先在脑中画出世界坐标和本地坐标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Teleport？”，试着回答：把对象立即移动到新位置并更新物理状态。"
      }
    },
    {
      "id": 219,
      "category": "位置·旋转·变换",
      "en": "Sweep",
      "zh": "扫掠",
      "location": "Set Actor Location / Sweep pin",
      "usage": "移动时检测路径上是否撞到东西。",
      "tip": "开启后可在撞到时停止，避免穿过物体。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Sweep」想成房间里的遥控车和摄像机里的一个工具，它负责“扫掠”。",
        "method": "先在脑中画出世界坐标和本地坐标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Sweep？”，试着回答：移动时检测路径上是否撞到东西。"
      }
    },
    {
      "id": 220,
      "category": "位置·旋转·变换",
      "en": "Rotate Vector",
      "zh": "旋转向量",
      "location": "Math / Vector / Rotate Vector",
      "usage": "按 Rotator 旋转一个方向向量。",
      "tip": "适合把本地 Forward 变成某朝向的世界方向。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Rotate",
            "zh": ""
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "旋转向量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Vector=向量。合起来就是“旋转向量”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Rotate Vector？”，试着回答：按 Rotator 旋转一个方向向量。"
      }
    },
    {
      "id": 221,
      "category": "位置·旋转·变换",
      "en": "Unrotate Vector",
      "zh": "反向旋转向量",
      "location": "Math / Vector / Unrotate Vector",
      "usage": "按相反旋转把世界方向转回本地空间。",
      "tip": "处理相对方向时与 Rotate Vector 成对。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Unrotate",
            "zh": ""
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "反向旋转向量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Vector=向量。合起来就是“反向旋转向量”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Unrotate Vector？”，试着回答：按相反旋转把世界方向转回本地空间。"
      }
    },
    {
      "id": 222,
      "category": "位置·旋转·变换",
      "en": "Transform Location",
      "zh": "变换位置",
      "location": "Math / Transform / Transform Location",
      "usage": "把本地空间位置转换成世界空间位置。",
      "tip": "不要拿它处理速度向量；方向使用 Transform Direction。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Transform",
            "zh": "变换"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "变换位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Transform=变换 → Location=位置。合起来就是“变换位置”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Transform Location？”，试着回答：把本地空间位置转换成世界空间位置。"
      }
    },
    {
      "id": 223,
      "category": "位置·旋转·变换",
      "en": "Inverse Transform Location",
      "zh": "反向变换位置",
      "location": "Math / Transform / Inverse Transform Location",
      "usage": "把世界空间位置转换回本地空间。",
      "tip": "判断目标在对象前后/左右时常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Inverse",
            "zh": ""
          },
          {
            "en": "Transform",
            "zh": "变换"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "反向变换位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Transform=变换 → Location=位置。合起来就是“反向变换位置”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Inverse Transform Location？”，试着回答：把世界空间位置转换回本地空间。"
      }
    },
    {
      "id": 224,
      "category": "位置·旋转·变换",
      "en": "Transform Direction",
      "zh": "变换方向",
      "location": "Math / Transform / Transform Direction",
      "usage": "旋转方向向量，但不应用平移。",
      "tip": "输入用纯方向，不要混入位置坐标。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Transform",
            "zh": "变换"
          },
          {
            "en": "Direction",
            "zh": "方向"
          }
        ],
        "memory": "变换方向"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Transform=变换 → Direction=方向。合起来就是“变换方向”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Transform Direction？”，试着回答：旋转方向向量，但不应用平移。"
      }
    },
    {
      "id": 225,
      "category": "位置·旋转·变换",
      "en": "Inverse Transform Direction",
      "zh": "反向变换方向",
      "location": "Math / Transform / Inverse Transform Direction",
      "usage": "把世界方向转成本地方向。",
      "tip": "与 Transform Direction 的方向相反。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Inverse",
            "zh": ""
          },
          {
            "en": "Transform",
            "zh": "变换"
          },
          {
            "en": "Direction",
            "zh": "方向"
          }
        ],
        "memory": "反向变换方向"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Transform=变换 → Direction=方向。合起来就是“反向变换方向”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Inverse Transform Direction？”，试着回答：把世界方向转成本地方向。"
      }
    },
    {
      "id": 226,
      "category": "位置·旋转·变换",
      "en": "Find Look at Rotation",
      "zh": "查找朝向目标的旋转",
      "location": "Math / Vector / Find Look at Rotation",
      "usage": "计算从 Start 看向 Target 所需的 Rotator。",
      "tip": "把结果传给 Set Actor Rotation 可面向目标。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Find",
            "zh": "查找"
          },
          {
            "en": "Look at",
            "zh": "注视"
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "查找朝向目标的旋转"
      },
      "memoryAid": {
        "association": "Look at Rotation 像拿尺子从自己指向目标，算出应该朝哪个方向看。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Find Look at Rotation？”，试着回答：计算从 Start 看向 Target 所需的 Rotator。"
      }
    },
    {
      "id": 227,
      "category": "位置·旋转·变换",
      "en": "Make Rotator",
      "zh": "创建旋转值",
      "location": "Math / Rotator / Make Rotator",
      "usage": "组合 Roll、Pitch、Yaw 三个角度。",
      "tip": "UE 的 Rotator 顺序与直觉可能不同，优先使用现成节点。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Make",
            "zh": "创建"
          },
          {
            "en": "Rotator",
            "zh": "旋转值"
          }
        ],
        "memory": "创建旋转值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Make=创建 → Rotator=旋转值。合起来就是“创建旋转值”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Make Rotator？”，试着回答：组合 Roll、Pitch、Yaw 三个角度。"
      }
    },
    {
      "id": 228,
      "category": "位置·旋转·变换",
      "en": "Break Rotator",
      "zh": "拆分旋转值",
      "location": "Math / Rotator / Break Rotator",
      "usage": "拆出 Roll、Pitch、Yaw。",
      "tip": "只修改 Yaw 时保留其他两个原值。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Break",
            "zh": "拆分"
          },
          {
            "en": "Rotator",
            "zh": "旋转值"
          }
        ],
        "memory": "拆分旋转值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Break=拆分 → Rotator=旋转值。合起来就是“拆分旋转值”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Break Rotator？”，试着回答：拆出 Roll、Pitch、Yaw。"
      }
    },
    {
      "id": 229,
      "category": "位置·旋转·变换",
      "en": "Vector",
      "zh": "向量",
      "location": "Math / Vector",
      "usage": "包含 X、Y、Z 的三维数值。",
      "tip": "它既能表示位置也能表示方向或速度，取决于上下文。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Vector 是一支有三个分量的箭头，可以表示位置、方向或速度。",
        "method": "先在脑中画出世界坐标和本地坐标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Vector？”，试着回答：包含 X、Y、Z 的三维数值。"
      }
    },
    {
      "id": 230,
      "category": "位置·旋转·变换",
      "en": "Normal",
      "zh": "法线",
      "location": "Math / Vector / Normal",
      "usage": "长度归一化为 1 的方向。",
      "tip": "碰撞命中结果里的 Normal 表示表面朝外方向。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Normal」想成房间里的遥控车和摄像机里的一个工具，它负责“法线”。",
        "method": "先在脑中画出世界坐标和本地坐标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Normal？”，试着回答：长度归一化为 1 的方向。"
      }
    },
    {
      "id": 231,
      "category": "位置·旋转·变换",
      "en": "VInterp To",
      "zh": "向量平滑插值",
      "location": "Math / Interpolation / VInterp To",
      "usage": "按速度从当前向量逐步逼近目标向量。",
      "tip": "适合位置或方向的平滑跟随。",
      "groups": [
        "transform"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "VInterp",
            "zh": ""
          },
          {
            "en": "To",
            "zh": "到"
          }
        ],
        "memory": "向量平滑插值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：To=到。合起来就是“向量平滑插值”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 VInterp To？”，试着回答：按速度从当前向量逐步逼近目标向量。"
      }
    },
    {
      "id": 232,
      "category": "位置·旋转·变换",
      "en": "RInterp To",
      "zh": "旋转平滑插值",
      "location": "Math / Interpolation / RInterp To",
      "usage": "按速度从当前 Rotator 平滑逼近目标 Rotator。",
      "tip": "镜头转向、角色缓慢朝向目标时使用。",
      "groups": [
        "transform"
      ],
      "scenarios": [
        "movement"
      ],
      "phrase": {
        "parts": [
          {
            "en": "RInterp",
            "zh": ""
          },
          {
            "en": "To",
            "zh": "到"
          }
        ],
        "memory": "旋转平滑插值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：To=到。合起来就是“旋转平滑插值”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 RInterp To？”，试着回答：按速度从当前 Rotator 平滑逼近目标 Rotator。"
      }
    },
    {
      "id": 233,
      "category": "位置·旋转·变换",
      "en": "TInterp To",
      "zh": "变换平滑插值",
      "location": "Math / Interpolation / TInterp To",
      "usage": "按速度平滑逼近目标 Transform。",
      "tip": "同时处理位置、旋转、缩放时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "TInterp",
            "zh": ""
          },
          {
            "en": "To",
            "zh": "到"
          }
        ],
        "memory": "变换平滑插值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：To=到。合起来就是“变换平滑插值”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 TInterp To？”，试着回答：按速度平滑逼近目标 Transform。"
      }
    },
    {
      "id": 234,
      "category": "位置·旋转·变换",
      "en": "FInterp To",
      "zh": "数值平滑插值",
      "location": "Math / Interpolation / FInterp To",
      "usage": "按速度从当前数值平滑逼近目标。",
      "tip": "每帧调用，Delta Time 用 Event Tick 的 Delta Seconds。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "FInterp",
            "zh": ""
          },
          {
            "en": "To",
            "zh": "到"
          }
        ],
        "memory": "数值平滑插值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：To=到。合起来就是“数值平滑插值”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 FInterp To？”，试着回答：按速度从当前数值平滑逼近目标。"
      }
    },
    {
      "id": 235,
      "category": "位置·旋转·变换",
      "en": "Ease",
      "zh": "缓动",
      "location": "Math / Interpolation / Ease",
      "usage": "把 0–1 的线性进度转换成非线性缓动。",
      "tip": "让移动或 UI 动画加速/减速更自然。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Ease」想成房间里的遥控车和摄像机里的一个工具，它负责“缓动”。",
        "method": "先在脑中画出世界坐标和本地坐标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Ease？”，试着回答：把 0–1 的线性进度转换成非线性缓动。"
      }
    },
    {
      "id": 236,
      "category": "位置·旋转·变换",
      "en": "Attach To Component",
      "zh": "附加到组件",
      "location": "Scene Component / Attach To Component",
      "usage": "把当前组件挂到另一个组件下。",
      "tip": "选择 Keep Relative 或 Keep World 决定附加时是否保持当前位置。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Attach",
            "zh": "附加"
          },
          {
            "en": "To",
            "zh": "到"
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": "附加到组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Attach=附加 → To=到 → Component=组件。合起来就是“附加到组件”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Attach To Component？”，试着回答：把当前组件挂到另一个组件下。"
      }
    },
    {
      "id": 237,
      "category": "位置·旋转·变换",
      "en": "Detach From Actor",
      "zh": "从 Actor 分离",
      "location": "Scene Component / Detach From Actor",
      "usage": "解除该组件与父 Actor 的附加关系。",
      "tip": "分离位置规则会影响后续 Transform。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Detach",
            "zh": ""
          },
          {
            "en": "From",
            "zh": "从"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          }
        ],
        "memory": "从 Actor 分离"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：From=从 → Actor=场景对象。合起来就是“从 Actor 分离”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Detach From Actor？”，试着回答：解除该组件与父 Actor 的附加关系。"
      }
    },
    {
      "id": 238,
      "category": "位置·旋转·变换",
      "en": "Set Actor Location and Rotation",
      "zh": "同时设置位置和旋转",
      "location": "Actor / Set Actor Location and Rotation",
      "usage": "一次完成移动与转向。",
      "tip": "需要物理同步时可在 Details 里选择 Teleport。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Location",
            "zh": "位置"
          },
          {
            "en": "and",
            "zh": "并且"
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "同时设置位置和旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Actor=场景对象 → Location=位置 → and=并且 → Rotation=旋转。合起来就是“同时设置位置和旋转”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Actor Location and Rotation？”，试着回答：一次完成移动与转向。"
      }
    },
    {
      "id": 239,
      "category": "位置·旋转·变换",
      "en": "Set World Transform",
      "zh": "设置世界变换",
      "location": "Scene Component / Set World Transform",
      "usage": "设置组件的世界位置、旋转、缩放。",
      "tip": "与 Set Actor Transform 区分：前者只作用于目标组件。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "World",
            "zh": "世界"
          },
          {
            "en": "Transform",
            "zh": "变换"
          }
        ],
        "memory": "设置世界变换"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → World=世界 → Transform=变换。合起来就是“设置世界变换”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set World Transform？”，试着回答：设置组件的世界位置、旋转、缩放。"
      }
    },
    {
      "id": 240,
      "category": "位置·旋转·变换",
      "en": "Set Relative Transform",
      "zh": "设置相对变换",
      "location": "Scene Component / Set Relative Transform",
      "usage": "设置组件相对父组件的完整变换。",
      "tip": "层级组件布局常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Relative",
            "zh": ""
          },
          {
            "en": "Transform",
            "zh": "变换"
          }
        ],
        "memory": "设置相对变换"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Transform=变换。合起来就是“设置相对变换”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Relative Transform？”，试着回答：设置组件相对父组件的完整变换。"
      }
    },
    {
      "id": 241,
      "category": "位置·旋转·变换",
      "en": "Get Forward Vector",
      "zh": "获取前方向量",
      "location": "Rotator / Get Forward Vector",
      "usage": "根据旋转取得前方方向。",
      "tip": "常用于把镜头朝向转成移动方向。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Forward",
            "zh": "前方"
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "获取前方向量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Forward=前方 → Vector=向量。合起来就是“获取前方向量”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Forward Vector？”，试着回答：根据旋转取得前方方向。"
      }
    },
    {
      "id": 242,
      "category": "位置·旋转·变换",
      "en": "Get Right Vector",
      "zh": "获取右方向量",
      "location": "Rotator / Get Right Vector",
      "usage": "根据旋转取得右侧方向。",
      "tip": "横移方向常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Right",
            "zh": "右侧"
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "获取右方向量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Right=右侧 → Vector=向量。合起来就是“获取右方向量”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Right Vector？”，试着回答：根据旋转取得右侧方向。"
      }
    },
    {
      "id": 243,
      "category": "位置·旋转·变换",
      "en": "Get Up Vector",
      "zh": "获取上方向量",
      "location": "Rotator / Get Up Vector",
      "usage": "根据旋转取得上方方向。",
      "tip": "跳跃方向或表面法线可参考。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Up",
            "zh": "向上"
          },
          {
            "en": "Vector",
            "zh": "向量"
          }
        ],
        "memory": "获取上方向量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Up=向上 → Vector=向量。合起来就是“获取上方向量”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Up Vector？”，试着回答：根据旋转取得上方方向。"
      }
    },
    {
      "id": 244,
      "category": "位置·旋转·变换",
      "en": "Clamp Rotation",
      "zh": "限制旋转",
      "location": "Math / Rotator / Clamp Rotation",
      "usage": "限制旋转向量落在给定范围。",
      "tip": "镜头 Pitch 限制时常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Clamp",
            "zh": "限制"
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "限制旋转"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Clamp=限制 → Rotation=旋转。合起来就是“限制旋转”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Clamp Rotation？”，试着回答：限制旋转向量落在给定范围。"
      }
    },
    {
      "id": 245,
      "category": "位置·旋转·变换",
      "en": "Delta Rotation",
      "zh": "旋转差值",
      "location": "Math / Rotator / Delta Rotator",
      "usage": "得到两个 Rotator 之间的角度变化。",
      "tip": "判断转向已经足够接近时可求其长度。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Delta",
            "zh": ""
          },
          {
            "en": "Rotation",
            "zh": "旋转"
          }
        ],
        "memory": "旋转差值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Rotation=旋转。合起来就是“旋转差值”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Delta Rotation？”，试着回答：得到两个 Rotator 之间的角度变化。"
      }
    },
    {
      "id": 246,
      "category": "位置·旋转·变换",
      "en": "Rotator Length",
      "zh": "旋转幅度",
      "location": "Math / Rotator / Rotator Length",
      "usage": "求旋转差值的整体角度大小。",
      "tip": "与目标朝向比较时适合判断“是否已转向”.",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Rotator",
            "zh": "旋转值"
          },
          {
            "en": "Length",
            "zh": "长度"
          }
        ],
        "memory": "旋转幅度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Rotator=旋转值 → Length=长度。合起来就是“旋转幅度”。",
        "method": "先在脑中画出世界坐标和本地坐标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Rotator Length？”，试着回答：求旋转差值的整体角度大小。"
      }
    },
    {
      "id": 247,
      "category": "碰撞·射线·物理",
      "en": "Simulate Physics",
      "zh": "模拟物理",
      "location": "Component / Physics / Simulate Physics",
      "usage": "让组件受重力、冲量、碰撞影响。",
      "tip": "常见属性；运行时可用 Set Simulate Physics 切换。",
      "groups": [
        "physics"
      ],
      "scenarios": [
        "physics"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Simulate",
            "zh": "模拟"
          },
          {
            "en": "Physics",
            "zh": "物理"
          }
        ],
        "memory": "模拟物理"
      },
      "memoryAid": {
        "association": "Simulate Physics 像把物体交给重力，它会掉、会滚、会被撞飞。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Simulate Physics？”，试着回答：让组件受重力、冲量、碰撞影响。"
      }
    },
    {
      "id": 248,
      "category": "碰撞·射线·物理",
      "en": "Set Simulate Physics",
      "zh": "设置是否模拟物理",
      "location": "Primitive Component / Set Simulate Physics",
      "usage": "在运行时开启或关闭物理模拟。",
      "tip": "关闭前先处理好速度与碰撞状态。",
      "groups": [
        "physics"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Simulate",
            "zh": "模拟"
          },
          {
            "en": "Physics",
            "zh": "物理"
          }
        ],
        "memory": "设置是否模拟物理"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Simulate=模拟 → Physics=物理。合起来就是“设置是否模拟物理”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Simulate Physics？”，试着回答：在运行时开启或关闭物理模拟。"
      }
    },
    {
      "id": 249,
      "category": "碰撞·射线·物理",
      "en": "Enable Gravity",
      "zh": "启用重力",
      "location": "Primitive Component / Set Enable Gravity",
      "usage": "让物理体受到重力影响。",
      "tip": "必须已启用物理模拟才能看到完整效果。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Enable",
            "zh": ""
          },
          {
            "en": "Gravity",
            "zh": "重力"
          }
        ],
        "memory": "启用重力"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Gravity=重力。合起来就是“启用重力”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Enable Gravity？”，试着回答：让物理体受到重力影响。"
      }
    },
    {
      "id": 250,
      "category": "碰撞·射线·物理",
      "en": "Mass Override",
      "zh": "质量覆盖",
      "location": "Component / Physics / Mass Override",
      "usage": "手动指定物理质量。",
      "tip": "推力相同时质量会改变加速度。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Mass",
            "zh": ""
          },
          {
            "en": "Override",
            "zh": ""
          }
        ],
        "memory": "质量覆盖"
      },
      "memoryAid": {
        "association": "把「Mass Override」想成感应门、激光笔和台球桌里的一个工具，它负责“质量覆盖”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Mass Override？”，试着回答：手动指定物理质量。"
      }
    },
    {
      "id": 251,
      "category": "碰撞·射线·物理",
      "en": "Center of Mass Offset",
      "zh": "质心偏移",
      "location": "Component / Physics / Center of Mass Offset",
      "usage": "改变旋转与受力的中心点。",
      "tip": "让物体头重脚轻或旋转不平衡时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Center",
            "zh": ""
          },
          {
            "en": "of",
            "zh": ""
          },
          {
            "en": "Mass",
            "zh": ""
          },
          {
            "en": "Offset",
            "zh": "偏移"
          }
        ],
        "memory": "质心偏移"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Offset=偏移。合起来就是“质心偏移”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Center of Mass Offset？”，试着回答：改变旋转与受力的中心点。"
      }
    },
    {
      "id": 252,
      "category": "碰撞·射线·物理",
      "en": "Linear Damping",
      "zh": "线性阻尼",
      "location": "Physics / Linear Damping",
      "usage": "降低平移速度，模拟空气/摩擦阻力。",
      "tip": "值越大越快停下。",
      "groups": [
        "physics"
      ],
      "scenarios": [
        "physics"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Linear",
            "zh": "线性"
          },
          {
            "en": "Damping",
            "zh": "阻尼"
          }
        ],
        "memory": "线性阻尼"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Linear=线性 → Damping=阻尼。合起来就是“线性阻尼”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Linear Damping？”，试着回答：降低平移速度，模拟空气/摩擦阻力。"
      }
    },
    {
      "id": 253,
      "category": "碰撞·射线·物理",
      "en": "Angular Damping",
      "zh": "角阻尼",
      "location": "Physics / Angular Damping",
      "usage": "降低旋转速度。",
      "tip": "防止物体长时间乱转。",
      "groups": [
        "physics"
      ],
      "scenarios": [
        "physics"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Angular",
            "zh": ""
          },
          {
            "en": "Damping",
            "zh": "阻尼"
          }
        ],
        "memory": "角阻尼"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Damping=阻尼。合起来就是“角阻尼”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Angular Damping？”，试着回答：降低旋转速度。"
      }
    },
    {
      "id": 254,
      "category": "碰撞·射线·物理",
      "en": "Add Force",
      "zh": "添加力",
      "location": "Physics / Add Force",
      "usage": "持续推动物理体。",
      "tip": "力应在物理模拟持续期间反复施加或使用冲量。",
      "groups": [
        "physics"
      ],
      "scenarios": [
        "physics"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Force",
            "zh": "力"
          }
        ],
        "memory": "添加力"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → Force=力。合起来就是“添加力”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Force？”，试着回答：持续推动物理体。"
      }
    },
    {
      "id": 255,
      "category": "碰撞·射线·物理",
      "en": "Add Force at Location",
      "zh": "在指定位置添加力",
      "location": "Physics / Add Force at Location",
      "usage": "在偏心位置施力，可产生旋转。",
      "tip": "位置是局部还是世界空间要看节点输入提示。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Force",
            "zh": "力"
          },
          {
            "en": "at",
            "zh": "在指定位置"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "在指定位置添加力"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → Force=力 → at=在指定位置 → Location=位置。合起来就是“在指定位置添加力”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Force at Location？”，试着回答：在偏心位置施力，可产生旋转。"
      }
    },
    {
      "id": 256,
      "category": "碰撞·射线·物理",
      "en": "Add Impulse",
      "zh": "添加冲量",
      "location": "Physics / Add Impulse",
      "usage": "瞬间改变物理速度。",
      "tip": "适合爆炸、击飞、子弹撞击。",
      "groups": [
        "physics"
      ],
      "scenarios": [
        "trace",
        "physics"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Impulse",
            "zh": "冲量"
          }
        ],
        "memory": "添加冲量"
      },
      "memoryAid": {
        "association": "Impulse 是“瞬间一脚”，一下改变速度；Force 则像持续推车。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Impulse？”，试着回答：瞬间改变物理速度。"
      }
    },
    {
      "id": 257,
      "category": "碰撞·射线·物理",
      "en": "Add Impulse at Location",
      "zh": "在指定位置添加冲量",
      "location": "Physics / Add Impulse at Location",
      "usage": "在偏心位置施加瞬间冲量。",
      "tip": "可同时造成平移和旋转。",
      "groups": [
        "physics"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Impulse",
            "zh": "冲量"
          },
          {
            "en": "at",
            "zh": "在指定位置"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "在指定位置添加冲量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → Impulse=冲量 → at=在指定位置 → Location=位置。合起来就是“在指定位置添加冲量”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Impulse at Location？”，试着回答：在偏心位置施加瞬间冲量。"
      }
    },
    {
      "id": 258,
      "category": "碰撞·射线·物理",
      "en": "Add Torque in Radians",
      "zh": "添加扭矩（弧度）",
      "location": "Physics / Add Torque in Radians",
      "usage": "让物理体旋转。",
      "tip": "输入单位是弧度制，与角度制不同。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Torque",
            "zh": ""
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Radians",
            "zh": ""
          }
        ],
        "memory": "添加扭矩（弧度）"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → in=在……中。合起来就是“添加扭矩（弧度）”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Torque in Radians？”，试着回答：让物理体旋转。"
      }
    },
    {
      "id": 259,
      "category": "碰撞·射线·物理",
      "en": "Get Physics Linear Velocity",
      "zh": "获取物理线速度",
      "location": "Physics / Get Physics Linear Velocity",
      "usage": "取得物理体当前平移速度。",
      "tip": "可用来判断是否移动或传给 UI。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Physics",
            "zh": "物理"
          },
          {
            "en": "Linear",
            "zh": "线性"
          },
          {
            "en": "Velocity",
            "zh": "速度"
          }
        ],
        "memory": "获取物理线速度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Physics=物理 → Linear=线性 → Velocity=速度。合起来就是“获取物理线速度”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Physics Linear Velocity？”，试着回答：取得物理体当前平移速度。"
      }
    },
    {
      "id": 260,
      "category": "碰撞·射线·物理",
      "en": "Set Physics Linear Velocity",
      "zh": "设置物理线速度",
      "location": "Physics / Set Physics Linear Velocity",
      "usage": "直接改变物理体平移速度。",
      "tip": "与 Add Impulse 不同，它会覆盖当前速度。",
      "groups": [
        "physics"
      ],
      "scenarios": [
        "physics"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Physics",
            "zh": "物理"
          },
          {
            "en": "Linear",
            "zh": "线性"
          },
          {
            "en": "Velocity",
            "zh": "速度"
          }
        ],
        "memory": "设置物理线速度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Physics=物理 → Linear=线性 → Velocity=速度。合起来就是“设置物理线速度”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Physics Linear Velocity？”，试着回答：直接改变物理体平移速度。"
      }
    },
    {
      "id": 261,
      "category": "碰撞·射线·物理",
      "en": "Get Physics Angular Velocity",
      "zh": "获取物理角速度",
      "location": "Physics / Get Physics Angular Velocity",
      "usage": "取得物理体旋转速度。",
      "tip": "单位与普通 Rotator 不同。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Physics",
            "zh": "物理"
          },
          {
            "en": "Angular",
            "zh": ""
          },
          {
            "en": "Velocity",
            "zh": "速度"
          }
        ],
        "memory": "获取物理角速度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Physics=物理 → Velocity=速度。合起来就是“获取物理角速度”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Physics Angular Velocity？”，试着回答：取得物理体旋转速度。"
      }
    },
    {
      "id": 262,
      "category": "碰撞·射线·物理",
      "en": "Set Physics Angular Velocity",
      "zh": "设置物理角速度",
      "location": "Physics / Set Physics Angular Velocity",
      "usage": "直接设置物理旋转速度。",
      "tip": "常用于停止乱转或设置固定旋转。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Physics",
            "zh": "物理"
          },
          {
            "en": "Angular",
            "zh": ""
          },
          {
            "en": "Velocity",
            "zh": "速度"
          }
        ],
        "memory": "设置物理角速度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Physics=物理 → Velocity=速度。合起来就是“设置物理角速度”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Physics Angular Velocity？”，试着回答：直接设置物理旋转速度。"
      }
    },
    {
      "id": 263,
      "category": "碰撞·射线·物理",
      "en": "Wake All Rigid Bodies",
      "zh": "唤醒所有刚体",
      "location": "Physics / Wake All Rigid Bodies",
      "usage": "让休眠的物理体重新参与模拟。",
      "tip": "对象看似不动但 Is Valid 时，可检查是否休眠。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Wake",
            "zh": ""
          },
          {
            "en": "All",
            "zh": "全部"
          },
          {
            "en": "Rigid",
            "zh": ""
          },
          {
            "en": "Bodies",
            "zh": ""
          }
        ],
        "memory": "唤醒所有刚体"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：All=全部。合起来就是“唤醒所有刚体”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Wake All Rigid Bodies？”，试着回答：让休眠的物理体重新参与模拟。"
      }
    },
    {
      "id": 264,
      "category": "碰撞·射线·物理",
      "en": "Put Rigid Body to Sleep",
      "zh": "让刚体休眠",
      "location": "Physics / Put Rigid Body to Sleep",
      "usage": "停止刚体参与模拟直到被唤醒。",
      "tip": "提升性能；再次受力或碰撞可自动唤醒。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Put",
            "zh": ""
          },
          {
            "en": "Rigid",
            "zh": ""
          },
          {
            "en": "Body",
            "zh": "物理体"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "Sleep",
            "zh": ""
          }
        ],
        "memory": "让刚体休眠"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Body=物理体 → to=到。合起来就是“让刚体休眠”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Put Rigid Body to Sleep？”，试着回答：停止刚体参与模拟直到被唤醒。"
      }
    },
    {
      "id": 265,
      "category": "碰撞·射线·物理",
      "en": "Collision Enabled",
      "zh": "碰撞启用状态",
      "location": "Component / Collision / Collision Enabled",
      "usage": "决定组件是否查询、阻挡或模拟物理。",
      "tip": "不是简单开关：Query Only、Physics Only 等状态含义不同。",
      "groups": [
        "collision"
      ],
      "scenarios": [
        "physics"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Collision",
            "zh": "碰撞"
          },
          {
            "en": "Enabled",
            "zh": "启用状态"
          }
        ],
        "memory": "碰撞启用状态"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Collision=碰撞 → Enabled=启用状态。合起来就是“碰撞启用状态”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Collision Enabled？”，试着回答：决定组件是否查询、阻挡或模拟物理。"
      }
    },
    {
      "id": 266,
      "category": "碰撞·射线·物理",
      "en": "Collision Presets",
      "zh": "碰撞预设",
      "location": "Component / Collision / Collision Presets",
      "usage": "一次性套用常见的阻挡/重叠规则。",
      "tip": "先选合适预设，再在高级通道里微调。",
      "groups": [
        "collision"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Collision",
            "zh": "碰撞"
          },
          {
            "en": "Presets",
            "zh": ""
          }
        ],
        "memory": "碰撞预设"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Collision=碰撞。合起来就是“碰撞预设”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Collision Presets？”，试着回答：一次性套用常见的阻挡/重叠规则。"
      }
    },
    {
      "id": 267,
      "category": "碰撞·射线·物理",
      "en": "Collision Profile Name",
      "zh": "碰撞配置名称",
      "location": "Component / Set Collision Profile Name",
      "usage": "用预设名称设置碰撞。",
      "tip": "字符要准确，大小写或空格错误会找不到配置。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Collision",
            "zh": "碰撞"
          },
          {
            "en": "Profile",
            "zh": "配置"
          },
          {
            "en": "Name",
            "zh": "名称"
          }
        ],
        "memory": "碰撞配置名称"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Collision=碰撞 → Profile=配置 → Name=名称。合起来就是“碰撞配置名称”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Collision Profile Name？”，试着回答：用预设名称设置碰撞。"
      }
    },
    {
      "id": 268,
      "category": "碰撞·射线·物理",
      "en": "Block",
      "zh": "阻挡",
      "location": "Collision Response / Block",
      "usage": "物体挡住目标，并产生命中。",
      "tip": "角色与墙之间通常是 Block。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Block」想成感应门、激光笔和台球桌里的一个工具，它负责“阻挡”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Block？”，试着回答：物体挡住目标，并产生命中。"
      }
    },
    {
      "id": 269,
      "category": "碰撞·射线·物理",
      "en": "Overlap",
      "zh": "重叠",
      "location": "Collision Response / Overlap",
      "usage": "物体可以互相穿过，但会触发重叠事件。",
      "tip": "触发区、拾取物常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Overlap」想成感应门、激光笔和台球桌里的一个工具，它负责“重叠”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Overlap？”，试着回答：物体可以互相穿过，但会触发重叠事件。"
      }
    },
    {
      "id": 270,
      "category": "碰撞·射线·物理",
      "en": "Ignore",
      "zh": "忽略",
      "location": "Collision Response / Ignore",
      "usage": "不与目标通道发生碰撞反应。",
      "tip": "防误触、让某些对象互相穿透时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Ignore」想成感应门、激光笔和台球桌里的一个工具，它负责“忽略”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Ignore？”，试着回答：不与目标通道发生碰撞反应。"
      }
    },
    {
      "id": 271,
      "category": "碰撞·射线·物理",
      "en": "Generate Overlap Events",
      "zh": "生成重叠事件",
      "location": "Component / Collision / Generate Overlap Events",
      "usage": "允许 Overlap 产生事件。",
      "tip": "只有碰撞响应是 Overlap 并且此项开启，才会收到重叠通知。",
      "groups": [
        "collision"
      ],
      "scenarios": [
        "pickup"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Generate",
            "zh": "生成"
          },
          {
            "en": "Overlap",
            "zh": "重叠"
          },
          {
            "en": "Events",
            "zh": "事件"
          }
        ],
        "memory": "生成重叠事件"
      },
      "memoryAid": {
        "association": "Generate Overlap Events 是给触发区装上门铃，有人重叠时才会响。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Generate Overlap Events？”，试着回答：允许 Overlap 产生事件。"
      }
    },
    {
      "id": 272,
      "category": "碰撞·射线·物理",
      "en": "Generate Hit Events",
      "zh": "生成命中事件",
      "location": "Component / Collision / Generate Hit Events",
      "usage": "允许碰撞命中产生 Hit Event。",
      "tip": "需要模拟物理且开启命中事件，使用场景更受限。",
      "groups": [],
      "scenarios": [
        "physics"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Generate",
            "zh": "生成"
          },
          {
            "en": "Hit",
            "zh": "命中"
          },
          {
            "en": "Events",
            "zh": "事件"
          }
        ],
        "memory": "生成命中事件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Generate=生成 → Hit=命中 → Events=事件。合起来就是“生成命中事件”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Generate Hit Events？”，试着回答：允许碰撞命中产生 Hit Event。"
      }
    },
    {
      "id": 273,
      "category": "碰撞·射线·物理",
      "en": "Query Only",
      "zh": "仅查询",
      "location": "Collision Enabled / Query Only",
      "usage": "响应射线、重叠等查询，但不参与物理刚体模拟。",
      "tip": "触发区常用 Query Only，通常关闭 Simulate Physics。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Query",
            "zh": ""
          },
          {
            "en": "Only",
            "zh": "仅"
          }
        ],
        "memory": "仅查询"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Only=仅。合起来就是“仅查询”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Query Only？”，试着回答：响应射线、重叠等查询，但不参与物理刚体模拟。"
      }
    },
    {
      "id": 274,
      "category": "碰撞·射线·物理",
      "en": "Physics Only",
      "zh": "仅物理",
      "location": "Collision Enabled / Physics Only",
      "usage": "用于刚体物理碰撞，但不响应普通查询。",
      "tip": "射线检测不到它时先检查此选项。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Physics",
            "zh": "物理"
          },
          {
            "en": "Only",
            "zh": "仅"
          }
        ],
        "memory": "仅物理"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Physics=物理 → Only=仅。合起来就是“仅物理”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Physics Only？”，试着回答：用于刚体物理碰撞，但不响应普通查询。"
      }
    },
    {
      "id": 275,
      "category": "碰撞·射线·物理",
      "en": "No Collision",
      "zh": "无碰撞",
      "location": "Collision Enabled / No Collision",
      "usage": "完全关闭该组件的碰撞。",
      "tip": "UI、纯装饰物体可能使用；射线也可能检测不到。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "No",
            "zh": ""
          },
          {
            "en": "Collision",
            "zh": "碰撞"
          }
        ],
        "memory": "无碰撞"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Collision=碰撞。合起来就是“无碰撞”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 No Collision？”，试着回答：完全关闭该组件的碰撞。"
      }
    },
    {
      "id": 276,
      "category": "碰撞·射线·物理",
      "en": "Line Trace By Channel",
      "zh": "按通道发射线检测",
      "location": "Collision / Line Trace By Channel",
      "usage": "从 Start 到 End 查找第一个符合条件的碰撞。",
      "tip": "变量名 Return Value 只是是否命中，要查看 Out Hit 才是命中详情。",
      "groups": [
        "collision"
      ],
      "scenarios": [
        "trace",
        "network-fire"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Line",
            "zh": "射线"
          },
          {
            "en": "Trace",
            "zh": "检测"
          },
          {
            "en": "By",
            "zh": "按"
          },
          {
            "en": "Channel",
            "zh": "通道"
          }
        ],
        "memory": "按通道发射线检测"
      },
      "memoryAid": {
        "association": "Line Trace 像从镜头射出一条激光，看它先碰到谁。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Line Trace By Channel？”，试着回答：从 Start 到 End 查找第一个符合条件的碰撞。"
      }
    },
    {
      "id": 277,
      "category": "碰撞·射线·物理",
      "en": "Line Trace For Objects",
      "zh": "按物体类型发射线检测",
      "location": "Collision / Line Trace For Objects",
      "usage": "只检测指定 Object Type 的物体。",
      "tip": "适合区分 Pawn、WorldStatic 等类别。",
      "groups": [],
      "scenarios": [
        "trace"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Line",
            "zh": "射线"
          },
          {
            "en": "Trace",
            "zh": "检测"
          },
          {
            "en": "For",
            "zh": "用于"
          },
          {
            "en": "Objects",
            "zh": "对象"
          }
        ],
        "memory": "按物体类型发射线检测"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Line=射线 → Trace=检测 → For=用于 → Objects=对象。合起来就是“按物体类型发射线检测”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Line Trace For Objects？”，试着回答：只检测指定 Object Type 的物体。"
      }
    },
    {
      "id": 278,
      "category": "碰撞·射线·物理",
      "en": "Multi Line Trace By Channel",
      "zh": "按通道多次射线检测",
      "location": "Collision / Multi Line Trace By Channel",
      "usage": "沿一条线收集多个命中结果。",
      "tip": "返回的是 Hit Results 数组，穿透检测常用。",
      "groups": [],
      "scenarios": [
        "trace"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Multi",
            "zh": ""
          },
          {
            "en": "Line",
            "zh": "射线"
          },
          {
            "en": "Trace",
            "zh": "检测"
          },
          {
            "en": "By",
            "zh": ""
          },
          {
            "en": "Channel",
            "zh": "通道"
          }
        ],
        "memory": "按通道多次射线检测"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Line=射线 → Trace=检测 → Channel=通道。合起来就是“按通道多次射线检测”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Multi Line Trace By Channel？”，试着回答：沿一条线收集多个命中结果。"
      }
    },
    {
      "id": 279,
      "category": "碰撞·射线·物理",
      "en": "Sphere Trace By Channel",
      "zh": "球形射线检测",
      "location": "Collision / Sphere Trace By Channel",
      "usage": "沿路径扫掠一个球体。",
      "tip": "适合检测有一定宽度的命中范围。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Sphere",
            "zh": "球形"
          },
          {
            "en": "Trace",
            "zh": "检测"
          },
          {
            "en": "By",
            "zh": ""
          },
          {
            "en": "Channel",
            "zh": "通道"
          }
        ],
        "memory": "球形射线检测"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Sphere=球形 → Trace=检测 → Channel=通道。合起来就是“球形射线检测”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Sphere Trace By Channel？”，试着回答：沿路径扫掠一个球体。"
      }
    },
    {
      "id": 280,
      "category": "碰撞·射线·物理",
      "en": "Box Trace By Channel",
      "zh": "盒形射线检测",
      "location": "Collision / Box Trace By Channel",
      "usage": "沿路径扫掠一个盒子。",
      "tip": "需要宽度和高度范围时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Box",
            "zh": "盒形"
          },
          {
            "en": "Trace",
            "zh": "检测"
          },
          {
            "en": "By",
            "zh": ""
          },
          {
            "en": "Channel",
            "zh": "通道"
          }
        ],
        "memory": "盒形射线检测"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Box=盒形 → Trace=检测 → Channel=通道。合起来就是“盒形射线检测”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Box Trace By Channel？”，试着回答：沿路径扫掠一个盒子。"
      }
    },
    {
      "id": 281,
      "category": "碰撞·射线·物理",
      "en": "Capsule Trace By Channel",
      "zh": "胶囊体射线检测",
      "location": "Collision / Capsule Trace By Channel",
      "usage": "沿路径扫掠胶囊体。",
      "tip": "角色体型检测常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Capsule",
            "zh": "胶囊体"
          },
          {
            "en": "Trace",
            "zh": "检测"
          },
          {
            "en": "By",
            "zh": ""
          },
          {
            "en": "Channel",
            "zh": "通道"
          }
        ],
        "memory": "胶囊体射线检测"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Capsule=胶囊体 → Trace=检测 → Channel=通道。合起来就是“胶囊体射线检测”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Capsule Trace By Channel？”，试着回答：沿路径扫掠胶囊体。"
      }
    },
    {
      "id": 282,
      "category": "碰撞·射线·物理",
      "en": "Sweep Single By Channel",
      "zh": "按通道单次扫掠",
      "location": "Collision / Sweep Single By Channel",
      "usage": "用给定形状沿路径检测最近碰撞。",
      "tip": "与 Trace 类似，注意节点版本和输入差异。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Sweep",
            "zh": ""
          },
          {
            "en": "Single",
            "zh": ""
          },
          {
            "en": "By",
            "zh": ""
          },
          {
            "en": "Channel",
            "zh": "通道"
          }
        ],
        "memory": "按通道单次扫掠"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Channel=通道。合起来就是“按通道单次扫掠”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Sweep Single By Channel？”，试着回答：用给定形状沿路径检测最近碰撞。"
      }
    },
    {
      "id": 283,
      "category": "碰撞·射线·物理",
      "en": "Hit Result",
      "zh": "命中结果",
      "location": "Trace / Out Hit pin",
      "usage": "包含命中对象、位置、法线、骨骼等详情。",
      "tip": "从 Out Hit 拉出 Break Hit Result 读取字段。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Hit",
            "zh": "命中"
          },
          {
            "en": "Result",
            "zh": "结果"
          }
        ],
        "memory": "命中结果"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Hit=命中 → Result=结果。合起来就是“命中结果”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Hit Result？”，试着回答：包含命中对象、位置、法线、骨骼等详情。"
      }
    },
    {
      "id": 284,
      "category": "碰撞·射线·物理",
      "en": "Break Hit Result",
      "zh": "拆分命中结果",
      "location": "Collision / Break Hit Result",
      "usage": "把 Hit Result 拆成多个可读字段。",
      "tip": "只取需要字段，图表更清晰。",
      "groups": [
        "collision"
      ],
      "scenarios": [
        "trace"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Break",
            "zh": "拆分"
          },
          {
            "en": "Hit",
            "zh": "命中"
          },
          {
            "en": "Result",
            "zh": "结果"
          }
        ],
        "memory": "拆分命中结果"
      },
      "memoryAid": {
        "association": "Hit Result 是命中快递盒，Break 就是把 Actor、位置和法线拆出来。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Break Hit Result？”，试着回答：把 Hit Result 拆成多个可读字段。"
      }
    },
    {
      "id": 285,
      "category": "碰撞·射线·物理",
      "en": "Hit Actor",
      "zh": "命中的 Actor",
      "location": "Break Hit Result / Hit Actor",
      "usage": "发生碰撞的具体 Actor。",
      "tip": "继续操作前仍建议 Is Valid。",
      "groups": [
        "collision"
      ],
      "scenarios": [
        "trace"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Hit",
            "zh": "命中"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          }
        ],
        "memory": "命中的 Actor"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Hit=命中 → Actor=场景对象。合起来就是“命中的 Actor”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Hit Actor？”，试着回答：发生碰撞的具体 Actor。"
      }
    },
    {
      "id": 286,
      "category": "碰撞·射线·物理",
      "en": "Hit Component",
      "zh": "命中的组件",
      "location": "Break Hit Result / Hit Component",
      "usage": "碰到的具体组件。",
      "tip": "同一个 Actor 可有多个碰撞组件。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Hit",
            "zh": "命中"
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": "命中的组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Hit=命中 → Component=组件。合起来就是“命中的组件”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Hit Component？”，试着回答：碰到的具体组件。"
      }
    },
    {
      "id": 287,
      "category": "碰撞·射线·物理",
      "en": "Hit Location",
      "zh": "命中位置",
      "location": "Break Hit Result / Location",
      "usage": "射线与物体相交的世界位置。",
      "tip": "生成特效、弹孔常放在这里。",
      "groups": [
        "collision"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Hit",
            "zh": "命中"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "命中位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Hit=命中 → Location=位置。合起来就是“命中位置”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Hit Location？”，试着回答：射线与物体相交的世界位置。"
      }
    },
    {
      "id": 288,
      "category": "碰撞·射线·物理",
      "en": "Impact Point",
      "zh": "撞击点",
      "location": "Break Hit Result / Impact Point",
      "usage": "实际碰撞接触点。",
      "tip": "与 Trace End 不一定相同。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Impact",
            "zh": ""
          },
          {
            "en": "Point",
            "zh": ""
          }
        ],
        "memory": "撞击点"
      },
      "memoryAid": {
        "association": "把「Impact Point」想成感应门、激光笔和台球桌里的一个工具，它负责“撞击点”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Impact Point？”，试着回答：实际碰撞接触点。"
      }
    },
    {
      "id": 289,
      "category": "碰撞·射线·物理",
      "en": "Impact Normal",
      "zh": "撞击法线",
      "location": "Break Hit Result / Impact Normal",
      "usage": "碰撞表面的朝外方向。",
      "tip": "可让特效朝表面外侧旋转。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Impact",
            "zh": ""
          },
          {
            "en": "Normal",
            "zh": "法线"
          }
        ],
        "memory": "撞击法线"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Normal=法线。合起来就是“撞击法线”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Impact Normal？”，试着回答：碰撞表面的朝外方向。"
      }
    },
    {
      "id": 290,
      "category": "碰撞·射线·物理",
      "en": "Trace Start",
      "zh": "检测起点",
      "location": "Trace nodes / Start",
      "usage": "射线或扫掠开始的位置。",
      "tip": "通常取枪口或摄像机位置。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Trace",
            "zh": "检测"
          },
          {
            "en": "Start",
            "zh": ""
          }
        ],
        "memory": "检测起点"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Trace=检测。合起来就是“检测起点”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Trace Start？”，试着回答：射线或扫掠开始的位置。"
      }
    },
    {
      "id": 291,
      "category": "碰撞·射线·物理",
      "en": "Trace End",
      "zh": "检测终点",
      "location": "Trace nodes / End",
      "usage": "射线或扫掠结束的位置。",
      "tip": "用 Start + Forward × Length 计算终点。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Trace",
            "zh": "检测"
          },
          {
            "en": "End",
            "zh": "结束"
          }
        ],
        "memory": "检测终点"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Trace=检测 → End=结束。合起来就是“检测终点”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Trace End？”，试着回答：射线或扫掠结束的位置。"
      }
    },
    {
      "id": 292,
      "category": "碰撞·射线·物理",
      "en": "Trace Channel",
      "zh": "追踪通道",
      "location": "Collision / Trace Channel",
      "usage": "决定射线与哪类碰撞通道交互。",
      "tip": "Visibility、Camera、Pawn 等默认通道很常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Trace",
            "zh": "检测"
          },
          {
            "en": "Channel",
            "zh": "通道"
          }
        ],
        "memory": "追踪通道"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Trace=检测 → Channel=通道。合起来就是“追踪通道”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Trace Channel？”，试着回答：决定射线与哪类碰撞通道交互。"
      }
    },
    {
      "id": 293,
      "category": "碰撞·射线·物理",
      "en": "Visibility",
      "zh": "可见性碰撞通道",
      "location": "Trace Channel / Visibility",
      "usage": "常见的通用查询通道。",
      "tip": "很多东西默认设为阻挡 Visibility，但不能假设所有 Actor 都如此。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Visibility」想成感应门、激光笔和台球桌里的一个工具，它负责“可见性碰撞通道”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Visibility？”，试着回答：常见的通用查询通道。"
      }
    },
    {
      "id": 294,
      "category": "碰撞·射线·物理",
      "en": "Camera",
      "zh": "摄像机碰撞通道",
      "location": "Trace Channel / Camera",
      "usage": "用于镜头避障等查询。",
      "tip": "镜头拉近时常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Camera」想成感应门、激光笔和台球桌里的一个工具，它负责“摄像机碰撞通道”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Camera？”，试着回答：用于镜头避障等查询。"
      }
    },
    {
      "id": 295,
      "category": "碰撞·射线·物理",
      "en": "Pawn",
      "zh": "Pawn 碰撞通道",
      "location": "Collision Object Type / Pawn",
      "usage": "代表角色或可控制实体的碰撞类别。",
      "tip": "常用于忽略角色之间的推挤或做角色检测。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Pawn 是遥控玩具，能被玩家或 AI 握住控制器。",
        "method": "先想检测什么，再想碰到后产生什么反应。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Pawn？”，试着回答：代表角色或可控制实体的碰撞类别。"
      }
    },
    {
      "id": 296,
      "category": "碰撞·射线·物理",
      "en": "WorldStatic",
      "zh": "静态世界物体",
      "location": "Collision Object Type / World Static",
      "usage": "不会移动的场景几何，如墙、地面。",
      "tip": "网格如果会移动，通常应设为 WorldDynamic。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「WorldStatic」想成感应门、激光笔和台球桌里的一个工具，它负责“静态世界物体”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 WorldStatic？”，试着回答：不会移动的场景几何，如墙、地面。"
      }
    },
    {
      "id": 297,
      "category": "碰撞·射线·物理",
      "en": "WorldDynamic",
      "zh": "动态世界物体",
      "location": "Collision Object Type / World Dynamic",
      "usage": "可在游戏中移动的普通场景物体。",
      "tip": "门、箱子、移动平台常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「WorldDynamic」想成感应门、激光笔和台球桌里的一个工具，它负责“动态世界物体”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 WorldDynamic？”，试着回答：可在游戏中移动的普通场景物体。"
      }
    },
    {
      "id": 298,
      "category": "碰撞·射线·物理",
      "en": "PhysicsBody",
      "zh": "物理刚体",
      "location": "Collision Object Type / Physics Body",
      "usage": "参与物理模拟的物体类别。",
      "tip": "与是否 Simulate Physics 是两个不同设置。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「PhysicsBody」想成感应门、激光笔和台球桌里的一个工具，它负责“物理刚体”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 PhysicsBody？”，试着回答：参与物理模拟的物体类别。"
      }
    },
    {
      "id": 299,
      "category": "碰撞·射线·物理",
      "en": "Ignore Actor When Moving",
      "zh": "移动时忽略指定 Actor",
      "location": "Primitive Component / Ignore Actor When Moving",
      "usage": "让移动扫掠忽略一个对象。",
      "tip": "防止角色被自己附加的碰撞体挡住。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Ignore",
            "zh": ""
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "When",
            "zh": ""
          },
          {
            "en": "Moving",
            "zh": ""
          }
        ],
        "memory": "移动时忽略指定 Actor"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Actor=场景对象。合起来就是“移动时忽略指定 Actor”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Ignore Actor When Moving？”，试着回答：让移动扫掠忽略一个对象。"
      }
    },
    {
      "id": 300,
      "category": "碰撞·射线·物理",
      "en": "Set Collision Enabled",
      "zh": "设置碰撞启用状态",
      "location": "Primitive Component / Set Collision Enabled",
      "usage": "运行时切换 Query/Physics/No Collision。",
      "tip": "切换前确认目标用法，避免射线与物理互不一致。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Collision",
            "zh": "碰撞"
          },
          {
            "en": "Enabled",
            "zh": "启用状态"
          }
        ],
        "memory": "设置碰撞启用状态"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Collision=碰撞 → Enabled=启用状态。合起来就是“设置碰撞启用状态”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Collision Enabled？”，试着回答：运行时切换 Query/Physics/No Collision。"
      }
    },
    {
      "id": 301,
      "category": "碰撞·射线·物理",
      "en": "Set Collision Response to All Channels",
      "zh": "设置对所有通道的碰撞响应",
      "location": "Primitive Component / Set Collision Response to All Channels",
      "usage": "一次性把所有通道设为 Block、Overlap 或 Ignore。",
      "tip": "用于重置，之后通常还需单独调整关键通道。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Collision",
            "zh": "碰撞"
          },
          {
            "en": "Response",
            "zh": ""
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "All",
            "zh": "全部"
          },
          {
            "en": "Channels",
            "zh": ""
          }
        ],
        "memory": "设置对所有通道的碰撞响应"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Collision=碰撞 → to=到 → All=全部。合起来就是“设置对所有通道的碰撞响应”。",
        "method": "先想检测什么，再想碰到后产生什么反应。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Collision Response to All Channels？”，试着回答：一次性把所有通道设为 Block、Overlap 或 Ignore。"
      }
    },
    {
      "id": 302,
      "category": "Actor与对象",
      "en": "Spawn Actor from Class",
      "zh": "从类生成 Actor",
      "location": "Actor / Spawn Actor from Class",
      "usage": "运行时创建一个类实例。",
      "tip": "Class 输入是类引用；Collision Handling 决定生成时如何处理碰撞。",
      "groups": [
        "lifecycle"
      ],
      "scenarios": [
        "network-fire"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Spawn",
            "zh": "生成"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "from",
            "zh": "从"
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "从类生成 Actor"
      },
      "memoryAid": {
        "association": "Spawn 像工厂照着一张类图纸生产一个新的 Actor。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Spawn Actor from Class？”，试着回答：运行时创建一个类实例。"
      }
    },
    {
      "id": 303,
      "category": "Actor与对象",
      "en": "Spawn Actor Deferred",
      "zh": "延后完成的生成",
      "location": "Actor / Spawn Actor Deferred",
      "usage": "先生成对象但暂不完成初始化。",
      "tip": "可在完成前设置属性，再调用 Finish Spawning Actor。",
      "groups": [
        "lifecycle"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Spawn",
            "zh": "生成"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Deferred",
            "zh": ""
          }
        ],
        "memory": "延后完成的生成"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Spawn=生成 → Actor=场景对象。合起来就是“延后完成的生成”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Spawn Actor Deferred？”，试着回答：先生成对象但暂不完成初始化。"
      }
    },
    {
      "id": 304,
      "category": "Actor与对象",
      "en": "Finish Spawning Actor",
      "zh": "完成延后生成",
      "location": "Actor / Finish Spawning Actor",
      "usage": "结束 Deferred Spawn 的初始化流程。",
      "tip": "必须与 Spawn Actor Deferred 配套。",
      "groups": [
        "lifecycle"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Finish",
            "zh": "完成"
          },
          {
            "en": "Spawning",
            "zh": ""
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          }
        ],
        "memory": "完成延后生成"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Finish=完成 → Actor=场景对象。合起来就是“完成延后生成”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Finish Spawning Actor？”，试着回答：结束 Deferred Spawn 的初始化流程。"
      }
    },
    {
      "id": 305,
      "category": "Actor与对象",
      "en": "Destroy Actor",
      "zh": "销毁 Actor",
      "location": "Actor / Destroy Actor",
      "usage": "从关卡中移除对象并触发销毁流程。",
      "tip": "销毁后不能再访问其成员；UI 事件等引用也要清理。",
      "groups": [
        "lifecycle"
      ],
      "scenarios": [
        "pickup"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Destroy",
            "zh": "销毁"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          }
        ],
        "memory": "销毁 Actor"
      },
      "memoryAid": {
        "association": "Destroy Actor 像演员退场并被清走，旧门票也就失效了。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Destroy Actor？”，试着回答：从关卡中移除对象并触发销毁流程。"
      }
    },
    {
      "id": 306,
      "category": "Actor与对象",
      "en": "Destroy Component",
      "zh": "销毁组件",
      "location": "Scene Component / Destroy Component",
      "usage": "移除指定组件。",
      "tip": "不要拿它当隐藏；需要恢复时用 Set Visibility。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Destroy",
            "zh": "销毁"
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": "销毁组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Destroy=销毁 → Component=组件。合起来就是“销毁组件”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Destroy Component？”，试着回答：移除指定组件。"
      }
    },
    {
      "id": 307,
      "category": "Actor与对象",
      "en": "Get Class",
      "zh": "获取对象类",
      "location": "Utilities / Get Class",
      "usage": "取得对象实际所属的类。",
      "tip": "调试 Cast 失败时打印类名很有帮助。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "获取对象类"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Class=类。合起来就是“获取对象类”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Class？”，试着回答：取得对象实际所属的类。"
      }
    },
    {
      "id": 308,
      "category": "Actor与对象",
      "en": "Get Display Name",
      "zh": "获取显示名称",
      "location": "Class / Get Display Name",
      "usage": "取得类或对象在编辑器中的可读名称。",
      "tip": "不要把它当成稳定的存档 ID。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Display",
            "zh": ""
          },
          {
            "en": "Name",
            "zh": "名称"
          }
        ],
        "memory": "获取显示名称"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Name=名称。合起来就是“获取显示名称”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Display Name？”，试着回答：取得类或对象在编辑器中的可读名称。"
      }
    },
    {
      "id": 309,
      "category": "Actor与对象",
      "en": "Class Is Child Of",
      "zh": "类是否为指定类的子类",
      "location": "Class / Class Is Child Of",
      "usage": "判断一个类是否继承自另一类。",
      "tip": "适合在 Spawn 前检查类引用是否兼容。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Class",
            "zh": "类"
          },
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Child",
            "zh": ""
          },
          {
            "en": "Of",
            "zh": ""
          }
        ],
        "memory": "类是否为指定类的子类"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Class=类 → Is=是否。合起来就是“类是否为指定类的子类”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Class Is Child Of？”，试着回答：判断一个类是否继承自另一类。"
      }
    },
    {
      "id": 310,
      "category": "Actor与对象",
      "en": "Get Actor of Class",
      "zh": "获取某个类的 Actor",
      "location": "Actor / Get Actor of Class",
      "usage": "在场景中查找指定类的第一个实例。",
      "tip": "多实例场景不适合依赖“第一个”。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "of",
            "zh": ""
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "获取某个类的 Actor"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Actor=场景对象 → Class=类。合起来就是“获取某个类的 Actor”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Actor of Class？”，试着回答：在场景中查找指定类的第一个实例。"
      }
    },
    {
      "id": 311,
      "category": "Actor与对象",
      "en": "Get All Actors of Class",
      "zh": "获取某类全部 Actor",
      "location": "Actor / Get All Actors of Class",
      "usage": "返回匹配类的一组 Actor 数组。",
      "tip": "不要每帧全场景查找；缓存引用更好。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "All",
            "zh": "全部"
          },
          {
            "en": "Actors",
            "zh": ""
          },
          {
            "en": "of",
            "zh": ""
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "获取某类全部 Actor"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → All=全部 → Class=类。合起来就是“获取某类全部 Actor”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get All Actors of Class？”，试着回答：返回匹配类的一组 Actor 数组。"
      }
    },
    {
      "id": 312,
      "category": "Actor与对象",
      "en": "Get Component by Class",
      "zh": "按类获取组件",
      "location": "Actor / Get Component by Class",
      "usage": "取得 Actor 上指定类的组件。",
      "tip": "可能为空，访问前用 Is Valid。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Component",
            "zh": "组件"
          },
          {
            "en": "by",
            "zh": "按"
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "按类获取组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Component=组件 → by=按 → Class=类。合起来就是“按类获取组件”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Component by Class？”，试着回答：取得 Actor 上指定类的组件。"
      }
    },
    {
      "id": 313,
      "category": "Actor与对象",
      "en": "Find Component by Tag",
      "zh": "按标签查找组件",
      "location": "Actor / Find Component by Tag",
      "usage": "通过组件 Tag 找到数组中的一个组件。",
      "tip": "Tag 拼写要一致，且同一 Tag 多组件时只取匹配项。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Find",
            "zh": "查找"
          },
          {
            "en": "Component",
            "zh": "组件"
          },
          {
            "en": "by",
            "zh": "按"
          },
          {
            "en": "Tag",
            "zh": ""
          }
        ],
        "memory": "按标签查找组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Find=查找 → Component=组件 → by=按。合起来就是“按标签查找组件”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Find Component by Tag？”，试着回答：通过组件 Tag 找到数组中的一个组件。"
      }
    },
    {
      "id": 314,
      "category": "Actor与对象",
      "en": "Get Owner",
      "zh": "获取拥有者",
      "location": "Component / Get Owner",
      "usage": "取得拥有该组件的 Actor。",
      "tip": "组件逻辑常通过 Owner 访问整个对象。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Owner",
            "zh": ""
          }
        ],
        "memory": "获取拥有者"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取。合起来就是“获取拥有者”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Owner？”，试着回答：取得拥有该组件的 Actor。"
      }
    },
    {
      "id": 315,
      "category": "Actor与对象",
      "en": "Set Owner",
      "zh": "设置拥有者",
      "location": "Spawned Actor / Set Owner",
      "usage": "建立对象之间的拥有关系。",
      "tip": "对网络权限和逻辑归属可能有影响。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Owner",
            "zh": ""
          }
        ],
        "memory": "设置拥有者"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置。合起来就是“设置拥有者”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Owner？”，试着回答：建立对象之间的拥有关系。"
      }
    },
    {
      "id": 316,
      "category": "Actor与对象",
      "en": "Get Owning Actor",
      "zh": "获取所属 Actor",
      "location": "Component / Get Owning Actor",
      "usage": "从组件取得它所属的 Actor。",
      "tip": "与 Get Owner 很接近；以节点提示为准。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Owning",
            "zh": ""
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          }
        ],
        "memory": "获取所属 Actor"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Actor=场景对象。合起来就是“获取所属 Actor”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Owning Actor？”，试着回答：从组件取得它所属的 Actor。"
      }
    },
    {
      "id": 317,
      "category": "Actor与对象",
      "en": "Get Parent Actor",
      "zh": "获取父 Actor",
      "location": "Attachment / Get Parent Actor",
      "usage": "取得该对象当前附加到的父 Actor。",
      "tip": "未附加时可能无效。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Parent",
            "zh": ""
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          }
        ],
        "memory": "获取父 Actor"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Actor=场景对象。合起来就是“获取父 Actor”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Parent Actor？”，试着回答：取得该对象当前附加到的父 Actor。"
      }
    },
    {
      "id": 318,
      "category": "Actor与对象",
      "en": "Actor Has Tag",
      "zh": "Actor 是否有标签",
      "location": "Actor / Actor Has Tag",
      "usage": "检查对象是否带某个 Tag。",
      "tip": "Tag 是文本标识，大小写和拼写必须一致。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Has",
            "zh": "拥有"
          },
          {
            "en": "Tag",
            "zh": ""
          }
        ],
        "memory": "Actor 是否有标签"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Actor=场景对象 → Has=拥有。合起来就是“Actor 是否有标签”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Actor Has Tag？”，试着回答：检查对象是否带某个 Tag。"
      }
    },
    {
      "id": 319,
      "category": "Actor与对象",
      "en": "Add Actor Tag",
      "zh": "添加 Actor 标签",
      "location": "Actor / Add Actor Tag",
      "usage": "运行时给对象添加 Tag。",
      "tip": "适合简单分类；复杂属性更适合变量或数据结构。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Tag",
            "zh": ""
          }
        ],
        "memory": "添加 Actor 标签"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → Actor=场景对象。合起来就是“添加 Actor 标签”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add Actor Tag？”，试着回答：运行时给对象添加 Tag。"
      }
    },
    {
      "id": 320,
      "category": "Actor与对象",
      "en": "Remove Actor Tag",
      "zh": "移除 Actor 标签",
      "location": "Actor / Remove Actor Tag",
      "usage": "移除指定标签。",
      "tip": "避免无限重复添加同一标签。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Remove",
            "zh": "移除"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Tag",
            "zh": ""
          }
        ],
        "memory": "移除 Actor 标签"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Remove=移除 → Actor=场景对象。合起来就是“移除 Actor 标签”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Remove Actor Tag？”，试着回答：移除指定标签。"
      }
    },
    {
      "id": 321,
      "category": "Actor与对象",
      "en": "Set Life Span",
      "zh": "设置寿命",
      "location": "Actor / Set Life Span",
      "usage": "经过指定秒数后自动销毁。",
      "tip": "0 通常表示不自动销毁。",
      "groups": [
        "lifecycle"
      ],
      "scenarios": [
        "pickup",
        "physics"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Life",
            "zh": ""
          },
          {
            "en": "Span",
            "zh": ""
          }
        ],
        "memory": "设置寿命"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置。合起来就是“设置寿命”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Life Span？”，试着回答：经过指定秒数后自动销毁。"
      }
    },
    {
      "id": 322,
      "category": "Actor与对象",
      "en": "Set Actor Hidden in Game",
      "zh": "设置游戏中是否隐藏",
      "location": "Actor / Set Actor Hidden in Game",
      "usage": "控制对象渲染是否可见。",
      "tip": "隐藏不等于关闭碰撞或 Tick。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Hidden",
            "zh": ""
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Game",
            "zh": "游戏"
          }
        ],
        "memory": "设置游戏中是否隐藏"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Actor=场景对象 → in=在……中 → Game=游戏。合起来就是“设置游戏中是否隐藏”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Actor Hidden in Game？”，试着回答：控制对象渲染是否可见。"
      }
    },
    {
      "id": 323,
      "category": "Actor与对象",
      "en": "Set Actor Enable Collision",
      "zh": "设置 Actor 碰撞总开关",
      "location": "Actor / Set Actor Enable Collision",
      "usage": "统一开关该 Actor 的碰撞。",
      "tip": "隐藏、禁用碰撞、停止 Tick 是三件不同的事。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Enable",
            "zh": ""
          },
          {
            "en": "Collision",
            "zh": "碰撞"
          }
        ],
        "memory": "设置 Actor 碰撞总开关"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Actor=场景对象 → Collision=碰撞。合起来就是“设置 Actor 碰撞总开关”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Actor Enable Collision？”，试着回答：统一开关该 Actor 的碰撞。"
      }
    },
    {
      "id": 324,
      "category": "Actor与对象",
      "en": "Set Actor Tick Enabled",
      "zh": "启用或禁用 Tick",
      "location": "Actor / Set Actor Tick Enabled",
      "usage": "控制该 Actor 的 Tick 是否执行。",
      "tip": "大量临时关闭的对象可借此节省性能。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Tick",
            "zh": "每帧"
          },
          {
            "en": "Enabled",
            "zh": "启用状态"
          }
        ],
        "memory": "启用或禁用 Tick"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Actor=场景对象 → Tick=每帧 → Enabled=启用状态。合起来就是“启用或禁用 Tick”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Actor Tick Enabled？”，试着回答：控制该 Actor 的 Tick 是否执行。"
      }
    },
    {
      "id": 325,
      "category": "Actor与对象",
      "en": "Set Actor Tick Interval",
      "zh": "设置 Tick 间隔",
      "location": "Actor / Set Actor Tick Interval",
      "usage": "让 Tick 不必每帧执行。",
      "tip": "适合不需要每帧更新的低频检查。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Tick",
            "zh": "每帧"
          },
          {
            "en": "Interval",
            "zh": ""
          }
        ],
        "memory": "设置 Tick 间隔"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Actor=场景对象 → Tick=每帧。合起来就是“设置 Tick 间隔”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Actor Tick Interval？”，试着回答：让 Tick 不必每帧执行。"
      }
    },
    {
      "id": 326,
      "category": "Actor与对象",
      "en": "Set Actor Label",
      "zh": "设置 Actor 标签名",
      "location": "Editor Scripting / Set Actor Label",
      "usage": "修改对象在编辑器大纲中的名字。",
      "tip": "主要用于编辑器组织，不是玩家看到的显示文本。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Label",
            "zh": ""
          }
        ],
        "memory": "设置 Actor 标签名"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Actor=场景对象。合起来就是“设置 Actor 标签名”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Actor Label？”，试着回答：修改对象在编辑器大纲中的名字。"
      }
    },
    {
      "id": 327,
      "category": "Actor与对象",
      "en": "Get World Delta Seconds",
      "zh": "获取世界帧间隔",
      "location": "World / Get World Delta Seconds",
      "usage": "取得上一帧到当前帧的秒数。",
      "tip": "乘到速度上可让运动不受帧率影响。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "World",
            "zh": "世界"
          },
          {
            "en": "Delta",
            "zh": ""
          },
          {
            "en": "Seconds",
            "zh": ""
          }
        ],
        "memory": "获取世界帧间隔"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → World=世界。合起来就是“获取世界帧间隔”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get World Delta Seconds？”，试着回答：取得上一帧到当前帧的秒数。"
      }
    },
    {
      "id": 328,
      "category": "Actor与对象",
      "en": "Get Game Time in Seconds",
      "zh": "获取游戏运行秒数",
      "location": "Game / Get Game Time in Seconds",
      "usage": "取得从游戏开始累计的时间。",
      "tip": "在暂停等状态下行为要结合游戏设置看。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "Time",
            "zh": ""
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Seconds",
            "zh": ""
          }
        ],
        "memory": "获取游戏运行秒数"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Game=游戏 → in=在……中。合起来就是“获取游戏运行秒数”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Game Time in Seconds？”，试着回答：取得从游戏开始累计的时间。"
      }
    },
    {
      "id": 329,
      "category": "Actor与对象",
      "en": "Make Array",
      "zh": "创建数组",
      "location": "Array / Make Array",
      "usage": "把若干项组合成数组。",
      "tip": "每一项类型必须一致或可兼容。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Make",
            "zh": "创建"
          },
          {
            "en": "Array",
            "zh": "数组"
          }
        ],
        "memory": "创建数组"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Make=创建 → Array=数组。合起来就是“创建数组”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Make Array？”，试着回答：把若干项组合成数组。"
      }
    },
    {
      "id": 330,
      "category": "Actor与对象",
      "en": "Add",
      "zh": "数组添加",
      "location": "Array / Add",
      "usage": "向数组末尾加入一项。",
      "tip": "Set 用 Add Item；名称看起来相近，选中节点后看输入类型。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Add」想成舞台上的演员进出场里的一个工具，它负责“数组添加”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Add？”，试着回答：向数组末尾加入一项。"
      }
    },
    {
      "id": 331,
      "category": "Actor与对象",
      "en": "Remove Item",
      "zh": "数组移除一项",
      "location": "Array / Remove Item",
      "usage": "按匹配值移除一个元素。",
      "tip": "对象或结构比较规则需注意。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Remove",
            "zh": "移除"
          },
          {
            "en": "Item",
            "zh": "项目"
          }
        ],
        "memory": "数组移除一项"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Remove=移除 → Item=项目。合起来就是“数组移除一项”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Remove Item？”，试着回答：按匹配值移除一个元素。"
      }
    },
    {
      "id": 332,
      "category": "Actor与对象",
      "en": "Remove Index",
      "zh": "按索引移除",
      "location": "Array / Remove Index",
      "usage": "删除指定位置的元素。",
      "tip": "删除后后面元素索引会向前移动。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Remove",
            "zh": "移除"
          },
          {
            "en": "Index",
            "zh": "索引"
          }
        ],
        "memory": "按索引移除"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Remove=移除 → Index=索引。合起来就是“按索引移除”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Remove Index？”，试着回答：删除指定位置的元素。"
      }
    },
    {
      "id": 333,
      "category": "Actor与对象",
      "en": "Get (a copy)",
      "zh": "按索引读取数组项",
      "location": "Array / Get (a copy)",
      "usage": "取得指定索引的元素副本。",
      "tip": "名字强调 copy；结构体修改后不自动写回原数组。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "copy",
            "zh": ""
          },
          {
            "en": "",
            "zh": ""
          }
        ],
        "memory": "按索引读取数组项"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取。合起来就是“按索引读取数组项”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get (a copy)？”，试着回答：取得指定索引的元素副本。"
      }
    },
    {
      "id": 334,
      "category": "Actor与对象",
      "en": "Set Array Elem",
      "zh": "设置数组元素",
      "location": "Array / Set Array Elem",
      "usage": "按索引写入新元素。",
      "tip": "索引越界会出问题，写入前确认长度。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Array",
            "zh": "数组"
          },
          {
            "en": "Elem",
            "zh": ""
          }
        ],
        "memory": "设置数组元素"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Array=数组。合起来就是“设置数组元素”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Array Elem？”，试着回答：按索引写入新元素。"
      }
    },
    {
      "id": 335,
      "category": "Actor与对象",
      "en": "Array Length",
      "zh": "数组长度",
      "location": "Array / Length",
      "usage": "取得数组元素数量。",
      "tip": "最后一个有效索引是 Length - 1。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Array",
            "zh": "数组"
          },
          {
            "en": "Length",
            "zh": "长度"
          }
        ],
        "memory": "数组长度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Array=数组 → Length=长度。合起来就是“数组长度”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Array Length？”，试着回答：取得数组元素数量。"
      }
    },
    {
      "id": 336,
      "category": "Actor与对象",
      "en": "Contains Item",
      "zh": "数组是否包含元素",
      "location": "Array / Contains Item",
      "usage": "检查数组中是否存在指定值。",
      "tip": "判断对象相等时依据引用或结构比较规则。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Contains",
            "zh": "包含"
          },
          {
            "en": "Item",
            "zh": "项目"
          }
        ],
        "memory": "数组是否包含元素"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Contains=包含 → Item=项目。合起来就是“数组是否包含元素”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Contains Item？”，试着回答：检查数组中是否存在指定值。"
      }
    },
    {
      "id": 337,
      "category": "Actor与对象",
      "en": "Find Item",
      "zh": "查找元素索引",
      "location": "Array / Find Item",
      "usage": "返回匹配元素的位置。",
      "tip": "没找到时返回 -1，必须判断。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Find",
            "zh": "查找"
          },
          {
            "en": "Item",
            "zh": "项目"
          }
        ],
        "memory": "查找元素索引"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Find=查找 → Item=项目。合起来就是“查找元素索引”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Find Item？”，试着回答：返回匹配元素的位置。"
      }
    },
    {
      "id": 338,
      "category": "Actor与对象",
      "en": "Clear Array",
      "zh": "清空数组",
      "location": "Array / Clear",
      "usage": "移除所有元素。",
      "tip": "清空前是否需要销毁元素要单独处理。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Clear",
            "zh": "清除"
          },
          {
            "en": "Array",
            "zh": "数组"
          }
        ],
        "memory": "清空数组"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Clear=清除 → Array=数组。合起来就是“清空数组”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Clear Array？”，试着回答：移除所有元素。"
      }
    },
    {
      "id": 339,
      "category": "Actor与对象",
      "en": "Append Array",
      "zh": "追加数组",
      "location": "Array / Append Array",
      "usage": "把另一数组中的元素加入当前数组。",
      "tip": "容易产生重复项；需要去重时用 Set。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Append",
            "zh": ""
          },
          {
            "en": "Array",
            "zh": "数组"
          }
        ],
        "memory": "追加数组"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Array=数组。合起来就是“追加数组”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Append Array？”，试着回答：把另一数组中的元素加入当前数组。"
      }
    },
    {
      "id": 340,
      "category": "Actor与对象",
      "en": "Set Add",
      "zh": "集合添加",
      "location": "Set / Add",
      "usage": "向 Set 添加元素，重复值不会新增。",
      "tip": "Set 不保证可用于稳定顺序显示。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "集合"
          },
          {
            "en": "Add",
            "zh": "添加"
          }
        ],
        "memory": "集合添加"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=集合 → Add=添加。合起来就是“集合添加”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Add？”，试着回答：向 Set 添加元素，重复值不会新增。"
      }
    },
    {
      "id": 341,
      "category": "Actor与对象",
      "en": "Set Contains Item",
      "zh": "集合是否包含",
      "location": "Set / Contains Item",
      "usage": "检查元素是否存在。",
      "tip": "适合快速去重判断。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "集合"
          },
          {
            "en": "Contains",
            "zh": "包含"
          },
          {
            "en": "Item",
            "zh": "项目"
          }
        ],
        "memory": "集合是否包含"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=集合 → Contains=包含 → Item=项目。合起来就是“集合是否包含”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Contains Item？”，试着回答：检查元素是否存在。"
      }
    },
    {
      "id": 342,
      "category": "Actor与对象",
      "en": "Map Add",
      "zh": "映射添加键值",
      "location": "Map / Add",
      "usage": "添加一个 Key → Value 对应关系。",
      "tip": "同一 Key 添加新值会更新原项。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Map",
            "zh": "映射表"
          },
          {
            "en": "Add",
            "zh": "添加"
          }
        ],
        "memory": "映射添加键值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Map=映射表 → Add=添加。合起来就是“映射添加键值”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Map Add？”，试着回答：添加一个 Key → Value 对应关系。"
      }
    },
    {
      "id": 343,
      "category": "Actor与对象",
      "en": "Map Find",
      "zh": "映射查找",
      "location": "Map / Find",
      "usage": "用 Key 查找对应 Value。",
      "tip": "需要看 Found 输出判断是否找到。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Map",
            "zh": "映射表"
          },
          {
            "en": "Find",
            "zh": "查找"
          }
        ],
        "memory": "映射查找"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Map=映射表 → Find=查找。合起来就是“映射查找”。",
        "method": "先想谁被创建或销毁，再想旧引用是否仍然有效。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Map Find？”，试着回答：用 Key 查找对应 Value。"
      }
    },
    {
      "id": 344,
      "category": "组件与可见性",
      "en": "Static Mesh Component",
      "zh": "静态网格组件",
      "location": "Components / Add / Static Mesh",
      "usage": "在 Actor 中显示静态模型。",
      "tip": "模型本身不是碰撞；需要同时检查碰撞组件。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Static",
            "zh": ""
          },
          {
            "en": "Mesh",
            "zh": "网格"
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": "静态网格组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Mesh=网格 → Component=组件。合起来就是“静态网格组件”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Static Mesh Component？”，试着回答：在 Actor 中显示静态模型。"
      }
    },
    {
      "id": 345,
      "category": "组件与可见性",
      "en": "Set Static Mesh",
      "zh": "设置静态网格",
      "location": "Static Mesh Component / Set Static Mesh",
      "usage": "运行时替换显示的静态模型。",
      "tip": "新模型过大或 pivot 不同会让视觉位置变化。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Static",
            "zh": ""
          },
          {
            "en": "Mesh",
            "zh": "网格"
          }
        ],
        "memory": "设置静态网格"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Mesh=网格。合起来就是“设置静态网格”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Static Mesh？”，试着回答：运行时替换显示的静态模型。"
      }
    },
    {
      "id": 346,
      "category": "组件与可见性",
      "en": "Skeletal Mesh Component",
      "zh": "骨骼网格组件",
      "location": "Components / Add / Skeletal Mesh",
      "usage": "显示可被骨骼和动画驱动的模型。",
      "tip": "通常需要配套 Anim Class 和材质。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Skeletal",
            "zh": ""
          },
          {
            "en": "Mesh",
            "zh": "网格"
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": "骨骼网格组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Mesh=网格 → Component=组件。合起来就是“骨骼网格组件”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Skeletal Mesh Component？”，试着回答：显示可被骨骼和动画驱动的模型。"
      }
    },
    {
      "id": 347,
      "category": "组件与可见性",
      "en": "Set Skeletal Mesh",
      "zh": "设置骨骼网格",
      "location": "Skeletal Mesh Component / Set Skeletal Mesh",
      "usage": "运行时替换骨骼模型。",
      "tip": "替换后检查动画实例与绑定是否符合。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Skeletal",
            "zh": ""
          },
          {
            "en": "Mesh",
            "zh": "网格"
          }
        ],
        "memory": "设置骨骼网格"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Mesh=网格。合起来就是“设置骨骼网格”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Skeletal Mesh？”，试着回答：运行时替换骨骼模型。"
      }
    },
    {
      "id": 348,
      "category": "组件与可见性",
      "en": "Camera Component",
      "zh": "摄像机组件",
      "location": "Components / Add / Camera",
      "usage": "为 Actor 或视图提供摄像机。",
      "tip": "要让某摄像机成为视角，通常需 Set View Target with Blend。",
      "groups": [
        "camera"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Camera",
            "zh": "镜头"
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": "摄像机组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Camera=镜头 → Component=组件。合起来就是“摄像机组件”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Camera Component？”，试着回答：为 Actor 或视图提供摄像机。"
      }
    },
    {
      "id": 349,
      "category": "组件与可见性",
      "en": "Spring Arm Component",
      "zh": "弹簧臂组件",
      "location": "Components / Add / Spring Arm",
      "usage": "让第三人称镜头与遮挡物保持距离。",
      "tip": "常见层级是 SpringArm 下挂 Camera。",
      "groups": [
        "camera"
      ],
      "scenarios": [
        "movement"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Spring",
            "zh": "弹簧"
          },
          {
            "en": "Arm",
            "zh": "臂"
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": "弹簧臂组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Spring=弹簧 → Arm=臂 → Component=组件。合起来就是“弹簧臂组件”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Spring Arm Component？”，试着回答：让第三人称镜头与遮挡物保持距离。"
      }
    },
    {
      "id": 350,
      "category": "组件与可见性",
      "en": "Set View Target with Blend",
      "zh": "平滑切换观察目标",
      "location": "Player Controller / Set View Target with Blend",
      "usage": "把玩家镜头切换到指定 Actor 的摄像机。",
      "tip": "Blend Time 为 0 会立即切换。",
      "groups": [
        "camera"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "View",
            "zh": "视图"
          },
          {
            "en": "Target",
            "zh": ""
          },
          {
            "en": "with",
            "zh": "带有"
          },
          {
            "en": "Blend",
            "zh": ""
          }
        ],
        "memory": "平滑切换观察目标"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → View=视图 → with=带有。合起来就是“平滑切换观察目标”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set View Target with Blend？”，试着回答：把玩家镜头切换到指定 Actor 的摄像机。"
      }
    },
    {
      "id": 351,
      "category": "组件与可见性",
      "en": "Set Visibility",
      "zh": "设置可见性",
      "location": "Scene Component / Set Visibility",
      "usage": "控制组件是否显示，并决定是否参与命中测试。",
      "tip": "Visible/Hidden 与 Collapsed 等枚举含义随 UI/组件不同。",
      "groups": [
        "ui"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Visibility",
            "zh": "可见性"
          }
        ],
        "memory": "设置可见性"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Visibility=可见性。合起来就是“设置可见性”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Visibility？”，试着回答：控制组件是否显示，并决定是否参与命中测试。"
      }
    },
    {
      "id": 352,
      "category": "组件与可见性",
      "en": "Set Hidden in Game",
      "zh": "设置游戏中隐藏",
      "location": "Scene Component / Set Hidden in Game",
      "usage": "让组件在运行时不可见。",
      "tip": "用于 Actor 的子组件；整个 Actor 也有同名设置。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Hidden",
            "zh": ""
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Game",
            "zh": "游戏"
          }
        ],
        "memory": "设置游戏中隐藏"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → in=在……中 → Game=游戏。合起来就是“设置游戏中隐藏”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Hidden in Game？”，试着回答：让组件在运行时不可见。"
      }
    },
    {
      "id": 353,
      "category": "组件与可见性",
      "en": "Visibility Enum",
      "zh": "可见性枚举",
      "location": "UI / ESlateVisibility",
      "usage": "描述 UI 元素的可见和交互状态。",
      "tip": "Collapsed 完全不占布局；Hidden 仍占布局但不可见。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Visibility",
            "zh": "可见性"
          },
          {
            "en": "Enum",
            "zh": "枚举"
          }
        ],
        "memory": "可见性枚举"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Visibility=可见性 → Enum=枚举。合起来就是“可见性枚举”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Visibility Enum？”，试着回答：描述 UI 元素的可见和交互状态。"
      }
    },
    {
      "id": 354,
      "category": "组件与可见性",
      "en": "Visible",
      "zh": "可见且可交互",
      "location": "Visibility / Visible",
      "usage": "UI 或组件显示并参与交互。",
      "tip": "UI 里通常表示能看见也能点。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Visible」想成乐高积木和舞台灯光里的一个工具，它负责“可见且可交互”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Visible？”，试着回答：UI 或组件显示并参与交互。"
      }
    },
    {
      "id": 355,
      "category": "组件与可见性",
      "en": "Hidden",
      "zh": "隐藏",
      "location": "Visibility / Hidden",
      "usage": "不显示，但可能保留布局或碰撞。",
      "tip": "不要把它和 Collapsed 混为一谈。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Hidden」想成乐高积木和舞台灯光里的一个工具，它负责“隐藏”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Hidden？”，试着回答：不显示，但可能保留布局或碰撞。"
      }
    },
    {
      "id": 356,
      "category": "组件与可见性",
      "en": "Collapsed",
      "zh": "折叠",
      "location": "Visibility / Collapsed",
      "usage": "不显示，也不占据布局空间。",
      "tip": "想让后面的 UI 元素补位时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Collapsed」想成乐高积木和舞台灯光里的一个工具，它负责“折叠”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Collapsed？”，试着回答：不显示，也不占据布局空间。"
      }
    },
    {
      "id": 357,
      "category": "组件与可见性",
      "en": "Hit Test Invisible",
      "zh": "命中测试不可见",
      "location": "Visibility / Hit Test Invisible",
      "usage": "显示元素，但不让该元素自己拦截点击。",
      "tip": "通常让子控件继续接收点击。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Hit",
            "zh": "命中"
          },
          {
            "en": "Test",
            "zh": ""
          },
          {
            "en": "Invisible",
            "zh": ""
          }
        ],
        "memory": "命中测试不可见"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Hit=命中。合起来就是“命中测试不可见”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Hit Test Invisible？”，试着回答：显示元素，但不让该元素自己拦截点击。"
      }
    },
    {
      "id": 358,
      "category": "组件与可见性",
      "en": "Self Hit Test Invisible",
      "zh": "自身不接收命中",
      "location": "Visibility / Self Hit Test Invisible",
      "usage": "该控件自身不接收命中，子控件仍可接收。",
      "tip": "装饰背景盖住按钮时很有用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Self",
            "zh": ""
          },
          {
            "en": "Hit",
            "zh": "命中"
          },
          {
            "en": "Test",
            "zh": ""
          },
          {
            "en": "Invisible",
            "zh": ""
          }
        ],
        "memory": "自身不接收命中"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Hit=命中。合起来就是“自身不接收命中”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Self Hit Test Invisible？”，试着回答：该控件自身不接收命中，子控件仍可接收。"
      }
    },
    {
      "id": 359,
      "category": "组件与可见性",
      "en": "Set Material",
      "zh": "设置材质",
      "location": "Primitive Component / Set Material",
      "usage": "给网格模型替换材质。",
      "tip": "需要多个材质插槽时指定 Element Index。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Material",
            "zh": "材质"
          }
        ],
        "memory": "设置材质"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Material=材质。合起来就是“设置材质”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Material？”，试着回答：给网格模型替换材质。"
      }
    },
    {
      "id": 360,
      "category": "组件与可见性",
      "en": "Create Dynamic Material Instance",
      "zh": "创建动态材质实例",
      "location": "Material / Create Dynamic Material Instance",
      "usage": "运行时生成可改参数的材质实例。",
      "tip": "保存返回的材质实例变量，后续才能更新参数。",
      "groups": [],
      "scenarios": [
        "trace"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Create",
            "zh": "创建"
          },
          {
            "en": "Dynamic",
            "zh": "动态"
          },
          {
            "en": "Material",
            "zh": "材质"
          },
          {
            "en": "Instance",
            "zh": "实例"
          }
        ],
        "memory": "创建动态材质实例"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Create=创建 → Dynamic=动态 → Material=材质 → Instance=实例。合起来就是“创建动态材质实例”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Create Dynamic Material Instance？”，试着回答：运行时生成可改参数的材质实例。"
      }
    },
    {
      "id": 361,
      "category": "组件与可见性",
      "en": "Set Vector Parameter Value",
      "zh": "设置向量材质参数",
      "location": "Material Instance Dynamic / Set Vector Parameter Value",
      "usage": "运行时修改颜色或向量类材质参数。",
      "tip": "参数名必须和材质里完全一致。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Vector",
            "zh": "向量"
          },
          {
            "en": "Parameter",
            "zh": ""
          },
          {
            "en": "Value",
            "zh": "值"
          }
        ],
        "memory": "设置向量材质参数"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Vector=向量 → Value=值。合起来就是“设置向量材质参数”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Vector Parameter Value？”，试着回答：运行时修改颜色或向量类材质参数。"
      }
    },
    {
      "id": 362,
      "category": "组件与可见性",
      "en": "Set Scalar Parameter Value",
      "zh": "设置标量材质参数",
      "location": "Material Instance Dynamic / Set Scalar Parameter Value",
      "usage": "运行时修改单个数值材质参数。",
      "tip": "例如发光强度、透明度。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Scalar",
            "zh": "标量"
          },
          {
            "en": "Parameter",
            "zh": ""
          },
          {
            "en": "Value",
            "zh": "值"
          }
        ],
        "memory": "设置标量材质参数"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Scalar=标量 → Value=值。合起来就是“设置标量材质参数”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Scalar Parameter Value？”，试着回答：运行时修改单个数值材质参数。"
      }
    },
    {
      "id": 363,
      "category": "组件与可见性",
      "en": "Set Texture Parameter Value",
      "zh": "设置纹理材质参数",
      "location": "Material Instance Dynamic / Set Texture Parameter Value",
      "usage": "运行时替换材质中的纹理。",
      "tip": "纹理类型和采样方式要匹配。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Texture",
            "zh": ""
          },
          {
            "en": "Parameter",
            "zh": ""
          },
          {
            "en": "Value",
            "zh": "值"
          }
        ],
        "memory": "设置纹理材质参数"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Value=值。合起来就是“设置纹理材质参数”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Texture Parameter Value？”，试着回答：运行时替换材质中的纹理。"
      }
    },
    {
      "id": 364,
      "category": "组件与可见性",
      "en": "Set Render Custom Depth",
      "zh": "设置自定义深度渲染",
      "location": "Primitive Component / Set Render Custom Depth",
      "usage": "让对象进入 Custom Depth 缓冲，用于描边等效果。",
      "tip": "还需材质或后处理配合才能真正显示。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Render",
            "zh": ""
          },
          {
            "en": "Custom",
            "zh": "自定义"
          },
          {
            "en": "Depth",
            "zh": ""
          }
        ],
        "memory": "设置自定义深度渲染"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Custom=自定义。合起来就是“设置自定义深度渲染”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Render Custom Depth？”，试着回答：让对象进入 Custom Depth 缓冲，用于描边等效果。"
      }
    },
    {
      "id": 365,
      "category": "组件与可见性",
      "en": "Set Custom Depth Stencil Value",
      "zh": "设置自定义深度模板值",
      "location": "Primitive Component / Set Custom Depth Stencil Value",
      "usage": "给 Custom Depth 对象写入模板编号。",
      "tip": "用在后处理遮罩或描边区分对象。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Custom",
            "zh": "自定义"
          },
          {
            "en": "Depth",
            "zh": ""
          },
          {
            "en": "Stencil",
            "zh": ""
          },
          {
            "en": "Value",
            "zh": "值"
          }
        ],
        "memory": "设置自定义深度模板值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Custom=自定义 → Value=值。合起来就是“设置自定义深度模板值”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Custom Depth Stencil Value？”，试着回答：给 Custom Depth 对象写入模板编号。"
      }
    },
    {
      "id": 366,
      "category": "组件与可见性",
      "en": "Component Tags",
      "zh": "组件标签",
      "location": "Component Details / Tags",
      "usage": "给组件添加文本标签，便于查找。",
      "tip": "多个同类组件时比固定索引更易维护。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Component",
            "zh": "组件"
          },
          {
            "en": "Tags",
            "zh": ""
          }
        ],
        "memory": "组件标签"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Component=组件。合起来就是“组件标签”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Component Tags？”，试着回答：给组件添加文本标签，便于查找。"
      }
    },
    {
      "id": 367,
      "category": "组件与可见性",
      "en": "Auto Activate",
      "zh": "自动激活",
      "location": "Component Details / Auto Activate",
      "usage": "对象开始时自动启用该组件。",
      "tip": "声音、特效、粒子常受它影响。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Auto",
            "zh": ""
          },
          {
            "en": "Activate",
            "zh": ""
          }
        ],
        "memory": "自动激活"
      },
      "memoryAid": {
        "association": "把「Auto Activate」想成乐高积木和舞台灯光里的一个工具，它负责“自动激活”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Auto Activate？”，试着回答：对象开始时自动启用该组件。"
      }
    },
    {
      "id": 368,
      "category": "组件与可见性",
      "en": "Auto Destroy",
      "zh": "自动销毁",
      "location": "Component / Audio or effect settings",
      "usage": "组件完成播放后自动清理。",
      "tip": "适用于一次性音效或特效，不适合需要重复播放的组件。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Auto",
            "zh": ""
          },
          {
            "en": "Destroy",
            "zh": "销毁"
          }
        ],
        "memory": "自动销毁"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Destroy=销毁。合起来就是“自动销毁”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Auto Destroy？”，试着回答：组件完成播放后自动清理。"
      }
    },
    {
      "id": 369,
      "category": "组件与可见性",
      "en": "Start with Tick Enabled",
      "zh": "开始时启用 Tick",
      "location": "Actor / Tick settings",
      "usage": "控制 Actor 开始时是否自动每帧执行。",
      "tip": "不需要 Tick 的对象关闭可减少开销。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Start",
            "zh": ""
          },
          {
            "en": "with",
            "zh": "带有"
          },
          {
            "en": "Tick",
            "zh": "每帧"
          },
          {
            "en": "Enabled",
            "zh": "启用状态"
          }
        ],
        "memory": "开始时启用 Tick"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：with=带有 → Tick=每帧 → Enabled=启用状态。合起来就是“开始时启用 Tick”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Start with Tick Enabled？”，试着回答：控制 Actor 开始时是否自动每帧执行。"
      }
    },
    {
      "id": 370,
      "category": "组件与可见性",
      "en": "Tick Even when Paused",
      "zh": "暂停时仍执行 Tick",
      "location": "Actor / Tick settings",
      "usage": "游戏暂停时继续执行该对象的 Tick。",
      "tip": "暂停菜单逻辑可能仍需 Tick，但不要滥用。",
      "groups": [],
      "scenarios": [
        "pause-ui"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Tick",
            "zh": "每帧"
          },
          {
            "en": "Even",
            "zh": "即使"
          },
          {
            "en": "when",
            "zh": ""
          },
          {
            "en": "Paused",
            "zh": "暂停"
          }
        ],
        "memory": "暂停时仍执行 Tick"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Tick=每帧 → Even=即使 → Paused=暂停。合起来就是“暂停时仍执行 Tick”。",
        "method": "先想这个组件负责模型、碰撞、镜头还是显示。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Tick Even when Paused？”，试着回答：游戏暂停时继续执行该对象的 Tick。"
      }
    },
    {
      "id": 371,
      "category": "UI / UMG",
      "en": "Create Widget",
      "zh": "创建控件",
      "location": "User Interface / Create Widget",
      "usage": "根据 Widget Class 创建一个 UI 实例。",
      "tip": "Create 只是创建，还要 Add to Viewport/Player Screen 才会显示。",
      "groups": [
        "ui"
      ],
      "scenarios": [
        "pickup",
        "pause-ui"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Create",
            "zh": "创建"
          },
          {
            "en": "Widget",
            "zh": "控件"
          }
        ],
        "memory": "创建控件"
      },
      "memoryAid": {
        "association": "Create Widget 是先把界面造出来，Add to Viewport 才是把它挂到屏幕。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Create Widget？”，试着回答：根据 Widget Class 创建一个 UI 实例。"
      }
    },
    {
      "id": 372,
      "category": "UI / UMG",
      "en": "Add to Viewport",
      "zh": "添加到视口",
      "location": "User Widget / Add to Viewport",
      "usage": "把控件显示到整个屏幕 UI 层。",
      "tip": "单机游戏常用；多人本地分屏要思考归属屏幕。",
      "groups": [
        "ui"
      ],
      "scenarios": [
        "pickup",
        "pause-ui"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "Viewport",
            "zh": "视口"
          }
        ],
        "memory": "添加到视口"
      },
      "memoryAid": {
        "association": "Viewport 是玩家眼前的屏幕，Add 就是把控件钉上去。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add to Viewport？”，试着回答：把控件显示到整个屏幕 UI 层。"
      }
    },
    {
      "id": 373,
      "category": "UI / UMG",
      "en": "Add to Player Screen",
      "zh": "添加到玩家屏幕",
      "location": "User Widget / Add to Player Screen",
      "usage": "把控件绑定到指定 Player Controller 的屏幕。",
      "tip": "本地多人分屏时比 Add to Viewport 更明确。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Add",
            "zh": "添加"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "Screen",
            "zh": ""
          }
        ],
        "memory": "添加到玩家屏幕"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Add=添加 → to=到 → Player=玩家。合起来就是“添加到玩家屏幕”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Add to Player Screen？”，试着回答：把控件绑定到指定 Player Controller 的屏幕。"
      }
    },
    {
      "id": 374,
      "category": "UI / UMG",
      "en": "Remove from Parent",
      "zh": "从父控件移除",
      "location": "User Widget / Remove from Parent",
      "usage": "把 UI 从当前层级中移除。",
      "tip": "隐藏和移除不同；移除后需要重新添加才显示。",
      "groups": [
        "ui"
      ],
      "scenarios": [
        "pause-ui"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Remove",
            "zh": "移除"
          },
          {
            "en": "from",
            "zh": "从"
          },
          {
            "en": "Parent",
            "zh": ""
          }
        ],
        "memory": "从父控件移除"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Remove=移除 → from=从。合起来就是“从父控件移除”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Remove from Parent？”，试着回答：把 UI 从当前层级中移除。"
      }
    },
    {
      "id": 375,
      "category": "UI / UMG",
      "en": "Widget Tree",
      "zh": "控件树",
      "location": "Widget Blueprint / Designer",
      "usage": "UI 元素的父子层级。",
      "tip": "理解 Canvas Panel、Vertical/Horizontal Box 的布局关系。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Widget",
            "zh": "控件"
          },
          {
            "en": "Tree",
            "zh": ""
          }
        ],
        "memory": "控件树"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Widget=控件。合起来就是“控件树”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Widget Tree？”，试着回答：UI 元素的父子层级。"
      }
    },
    {
      "id": 376,
      "category": "UI / UMG",
      "en": "Construct",
      "zh": "构造事件",
      "location": "User Widget / Event Construct",
      "usage": "控件被创建并加入层级时执行。",
      "tip": "不要把复杂初始化重复放在多个事件里。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Construct」想成玩家眼前的 HUD里的一个工具，它负责“构造事件”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Construct？”，试着回答：控件被创建并加入层级时执行。"
      }
    },
    {
      "id": 377,
      "category": "UI / UMG",
      "en": "Destruct",
      "zh": "析构事件",
      "location": "User Widget / Event Destruct",
      "usage": "控件被移除并销毁时执行。",
      "tip": "适合解绑事件、清理计时器。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Destruct」想成玩家眼前的 HUD里的一个工具，它负责“析构事件”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Destruct？”，试着回答：控件被移除并销毁时执行。"
      }
    },
    {
      "id": 378,
      "category": "UI / UMG",
      "en": "Widget Class",
      "zh": "控件类",
      "location": "Create Widget / Class pin",
      "usage": "指定要实例化的 Widget Blueprint 类型。",
      "tip": "变量类型选 User Widget 时，具体类仍需正确设置。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Widget",
            "zh": "控件"
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "控件类"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Widget=控件 → Class=类。合起来就是“控件类”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Widget Class？”，试着回答：指定要实例化的 Widget Blueprint 类型。"
      }
    },
    {
      "id": 379,
      "category": "UI / UMG",
      "en": "Set Text (Text)",
      "zh": "设置文本",
      "location": "Text Block / Set Text",
      "usage": "更新 Text Block 显示的本地化文本。",
      "tip": "Text 类型适合 UI；String 需要转换为 Text。",
      "groups": [
        "ui"
      ],
      "scenarios": [
        "pickup"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Text",
            "zh": "文本"
          },
          {
            "en": "(Text)",
            "zh": "文本类型"
          }
        ],
        "memory": "设置文本"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Text=文本 → (Text)=文本类型。合起来就是“设置文本”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Text (Text)？”，试着回答：更新 Text Block 显示的本地化文本。"
      }
    },
    {
      "id": 380,
      "category": "UI / UMG",
      "en": "Set Text (String)",
      "zh": "设置字符串文本",
      "location": "Text Block / Set Text",
      "usage": "用 String 更新显示的文本。",
      "tip": "节点会根据输入类型自动选择版本。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Text",
            "zh": "文本"
          },
          {
            "en": "(String)",
            "zh": "字符串类型"
          }
        ],
        "memory": "设置字符串文本"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Text=文本 → (String)=字符串类型。合起来就是“设置字符串文本”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Text (String)？”，试着回答：用 String 更新显示的文本。"
      }
    },
    {
      "id": 381,
      "category": "UI / UMG",
      "en": "Get Text",
      "zh": "获取文本",
      "location": "Text Block / Get Text",
      "usage": "读取控件当前显示内容。",
      "tip": "显示值不等于原始业务数据，尽量保存源数据。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Text",
            "zh": "文本"
          }
        ],
        "memory": "获取文本"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Text=文本。合起来就是“获取文本”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Text？”，试着回答：读取控件当前显示内容。"
      }
    },
    {
      "id": 382,
      "category": "UI / UMG",
      "en": "Set Percent",
      "zh": "设置进度值",
      "location": "Progress Bar / Set Percent",
      "usage": "设置 Progress Bar 的 0–1 进度。",
      "tip": "生命值要先除以最大值并 Clamp。",
      "groups": [
        "ui"
      ],
      "scenarios": [
        "pickup"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Percent",
            "zh": ""
          }
        ],
        "memory": "设置进度值"
      },
      "memoryAid": {
        "association": "Percent 进度条只认 0–1，先做除法，再 Clamp，再 Set Percent。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Percent？”，试着回答：设置 Progress Bar 的 0–1 进度。"
      }
    },
    {
      "id": 383,
      "category": "UI / UMG",
      "en": "Set Color and Opacity",
      "zh": "设置颜色和透明度",
      "location": "UI / Set Color and Opacity",
      "usage": "修改 UI 元素的颜色与Alpha。",
      "tip": "不同控件的颜色参数可能不同，确认目标控件。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Color",
            "zh": "颜色"
          },
          {
            "en": "and",
            "zh": "并且"
          },
          {
            "en": "Opacity",
            "zh": ""
          }
        ],
        "memory": "设置颜色和透明度"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Color=颜色 → and=并且。合起来就是“设置颜色和透明度”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Color and Opacity？”，试着回答：修改 UI 元素的颜色与Alpha。"
      }
    },
    {
      "id": 384,
      "category": "UI / UMG",
      "en": "Set Is Enabled",
      "zh": "设置是否可用",
      "location": "UI / Set Is Enabled",
      "usage": "启用或禁用控件的交互。",
      "tip": "禁用外观由控件样式决定，不一定自动变灰。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Enabled",
            "zh": "启用状态"
          }
        ],
        "memory": "设置是否可用"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Is=是否 → Enabled=启用状态。合起来就是“设置是否可用”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Is Enabled？”，试着回答：启用或禁用控件的交互。"
      }
    },
    {
      "id": 385,
      "category": "UI / UMG",
      "en": "On Clicked",
      "zh": "点击事件",
      "location": "Button / On Clicked",
      "usage": "按钮被点击时执行。",
      "tip": "按钮本身需要可见且有可交互的命中测试。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "On",
            "zh": "在……时"
          },
          {
            "en": "Clicked",
            "zh": "被点击"
          }
        ],
        "memory": "点击事件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：On=在……时 → Clicked=被点击。合起来就是“点击事件”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 On Clicked？”，试着回答：按钮被点击时执行。"
      }
    },
    {
      "id": 386,
      "category": "UI / UMG",
      "en": "On Check State Changed",
      "zh": "勾选状态变化事件",
      "location": "Check Box / On Check State Changed",
      "usage": "复选框状态改变时执行。",
      "tip": "输出通常包含是否已勾选。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "On",
            "zh": "在……时"
          },
          {
            "en": "Check",
            "zh": "勾选"
          },
          {
            "en": "State",
            "zh": "状态"
          },
          {
            "en": "Changed",
            "zh": ""
          }
        ],
        "memory": "勾选状态变化事件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：On=在……时 → Check=勾选 → State=状态。合起来就是“勾选状态变化事件”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 On Check State Changed？”，试着回答：复选框状态改变时执行。"
      }
    },
    {
      "id": 387,
      "category": "UI / UMG",
      "en": "On Value Changed",
      "zh": "数值变化事件",
      "location": "Slider / On Value Changed",
      "usage": "滑块值改变时执行。",
      "tip": "频繁拖动时会连续触发；昂贵操作不要每次全做。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "On",
            "zh": "在……时"
          },
          {
            "en": "Value",
            "zh": "值"
          },
          {
            "en": "Changed",
            "zh": ""
          }
        ],
        "memory": "数值变化事件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：On=在……时 → Value=值。合起来就是“数值变化事件”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 On Value Changed？”，试着回答：滑块值改变时执行。"
      }
    },
    {
      "id": 388,
      "category": "UI / UMG",
      "en": "On Text Changed",
      "zh": "文本变化事件",
      "location": "Editable Text / On Text Changed",
      "usage": "输入文本改变时执行。",
      "tip": "适合搜索框；输入完成可再看 On Text Committed。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "On",
            "zh": "在……时"
          },
          {
            "en": "Text",
            "zh": "文本"
          },
          {
            "en": "Changed",
            "zh": ""
          }
        ],
        "memory": "文本变化事件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：On=在……时 → Text=文本。合起来就是“文本变化事件”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 On Text Changed？”，试着回答：输入文本改变时执行。"
      }
    },
    {
      "id": 389,
      "category": "UI / UMG",
      "en": "On Text Committed",
      "zh": "文本提交事件",
      "location": "Editable Text / On Text Committed",
      "usage": "玩家完成输入时执行。",
      "tip": "可避免每输入一个字符都做昂贵检查。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "On",
            "zh": "在……时"
          },
          {
            "en": "Text",
            "zh": "文本"
          },
          {
            "en": "Committed",
            "zh": ""
          }
        ],
        "memory": "文本提交事件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：On=在……时 → Text=文本。合起来就是“文本提交事件”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 On Text Committed？”，试着回答：玩家完成输入时执行。"
      }
    },
    {
      "id": 390,
      "category": "UI / UMG",
      "en": "Horizontal Box",
      "zh": "水平布局盒",
      "location": "Widget Blueprint / Palette / Panel",
      "usage": "子控件从左到右排列。",
      "tip": "设置填充分配与对齐决定剩余空间如何使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Horizontal",
            "zh": "水平"
          },
          {
            "en": "Box",
            "zh": "盒形"
          }
        ],
        "memory": "水平布局盒"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Horizontal=水平 → Box=盒形。合起来就是“水平布局盒”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Horizontal Box？”，试着回答：子控件从左到右排列。"
      }
    },
    {
      "id": 391,
      "category": "UI / UMG",
      "en": "Vertical Box",
      "zh": "垂直布局盒",
      "location": "Widget Blueprint / Palette / Panel",
      "usage": "子控件从上到下排列。",
      "tip": "适合菜单、列表项和设置页。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Vertical",
            "zh": ""
          },
          {
            "en": "Box",
            "zh": "盒形"
          }
        ],
        "memory": "垂直布局盒"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Box=盒形。合起来就是“垂直布局盒”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Vertical Box？”，试着回答：子控件从上到下排列。"
      }
    },
    {
      "id": 392,
      "category": "UI / UMG",
      "en": "Canvas Panel",
      "zh": "画布面板",
      "location": "Widget Blueprint / Palette / Panel",
      "usage": "按屏幕锚点和绝对位置摆放控件。",
      "tip": "适合主界面布局，但响应式管理比 Box 复杂。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Canvas",
            "zh": ""
          },
          {
            "en": "Panel",
            "zh": ""
          }
        ],
        "memory": "画布面板"
      },
      "memoryAid": {
        "association": "把「Canvas Panel」想成玩家眼前的 HUD里的一个工具，它负责“画布面板”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Canvas Panel？”，试着回答：按屏幕锚点和绝对位置摆放控件。"
      }
    },
    {
      "id": 393,
      "category": "UI / UMG",
      "en": "Overlay",
      "zh": "叠放布局",
      "location": "Widget Blueprint / Palette / Panel",
      "usage": "多个子控件叠放在同一区域。",
      "tip": "做字幕、提示层、图标叠图常用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Overlay」想成玩家眼前的 HUD里的一个工具，它负责“叠放布局”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Overlay？”，试着回答：多个子控件叠放在同一区域。"
      }
    },
    {
      "id": 394,
      "category": "UI / UMG",
      "en": "Grid Panel",
      "zh": "网格布局",
      "location": "Widget Blueprint / Palette / Panel",
      "usage": "按行列放置子控件。",
      "tip": "等宽网格可用 Uniform Grid Panel。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Grid",
            "zh": ""
          },
          {
            "en": "Panel",
            "zh": ""
          }
        ],
        "memory": "网格布局"
      },
      "memoryAid": {
        "association": "把「Grid Panel」想成玩家眼前的 HUD里的一个工具，它负责“网格布局”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Grid Panel？”，试着回答：按行列放置子控件。"
      }
    },
    {
      "id": 395,
      "category": "UI / UMG",
      "en": "Uniform Grid Panel",
      "zh": "等分网格",
      "location": "Widget Blueprint / Palette / Panel",
      "usage": "把子控件放入尺寸一致的网格单元。",
      "tip": "物品格、数字键盘常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Uniform",
            "zh": ""
          },
          {
            "en": "Grid",
            "zh": ""
          },
          {
            "en": "Panel",
            "zh": ""
          }
        ],
        "memory": "等分网格"
      },
      "memoryAid": {
        "association": "把「Uniform Grid Panel」想成玩家眼前的 HUD里的一个工具，它负责“等分网格”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Uniform Grid Panel？”，试着回答：把子控件放入尺寸一致的网格单元。"
      }
    },
    {
      "id": 396,
      "category": "UI / UMG",
      "en": "Size Box",
      "zh": "尺寸盒",
      "location": "Widget Blueprint / Palette / Layout",
      "usage": "限定子控件的宽度、高度或最大尺寸。",
      "tip": "控制布局时不要靠缩放字体解决所有尺寸问题。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Size",
            "zh": ""
          },
          {
            "en": "Box",
            "zh": "盒形"
          }
        ],
        "memory": "尺寸盒"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Box=盒形。合起来就是“尺寸盒”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Size Box？”，试着回答：限定子控件的宽度、高度或最大尺寸。"
      }
    },
    {
      "id": 397,
      "category": "UI / UMG",
      "en": "Scale Box",
      "zh": "缩放盒",
      "location": "Widget Blueprint / Palette / Layout",
      "usage": "让子控件随分配空间缩放。",
      "tip": "保持比例与拉伸模式决定不同屏幕上的效果。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Scale",
            "zh": "缩放"
          },
          {
            "en": "Box",
            "zh": "盒形"
          }
        ],
        "memory": "缩放盒"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Scale=缩放 → Box=盒形。合起来就是“缩放盒”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Scale Box？”，试着回答：让子控件随分配空间缩放。"
      }
    },
    {
      "id": 398,
      "category": "UI / UMG",
      "en": "Scroll Box",
      "zh": "滚动框",
      "location": "Widget Blueprint / Palette / Panel",
      "usage": "内容超出可见区域时可滚动。",
      "tip": "列表项很多时考虑动态生成与复用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Scroll",
            "zh": ""
          },
          {
            "en": "Box",
            "zh": "盒形"
          }
        ],
        "memory": "滚动框"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Box=盒形。合起来就是“滚动框”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Scroll Box？”，试着回答：内容超出可见区域时可滚动。"
      }
    },
    {
      "id": 399,
      "category": "UI / UMG",
      "en": "Border",
      "zh": "边框容器",
      "location": "Widget Blueprint / Palette / Common",
      "usage": "带背景和描边的容器。",
      "tip": "可包裹子控件形成卡片视觉。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Border」想成玩家眼前的 HUD里的一个工具，它负责“边框容器”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Border？”，试着回答：带背景和描边的容器。"
      }
    },
    {
      "id": 400,
      "category": "UI / UMG",
      "en": "Image",
      "zh": "图片控件",
      "location": "Widget Blueprint / Palette / Common",
      "usage": "显示纹理或 Brush。",
      "tip": "按钮图标可动态 Set Brush from Texture。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Image」想成玩家眼前的 HUD里的一个工具，它负责“图片控件”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Image？”，试着回答：显示纹理或 Brush。"
      }
    },
    {
      "id": 401,
      "category": "UI / UMG",
      "en": "Text Block",
      "zh": "文本块",
      "location": "Widget Blueprint / Palette / Common",
      "usage": "显示不可编辑文本。",
      "tip": "动态更新用 Set Text。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Text",
            "zh": "文本"
          },
          {
            "en": "Block",
            "zh": ""
          }
        ],
        "memory": "文本块"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Text=文本。合起来就是“文本块”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Text Block？”，试着回答：显示不可编辑文本。"
      }
    },
    {
      "id": 402,
      "category": "UI / UMG",
      "en": "Progress Bar",
      "zh": "进度条",
      "location": "Widget Blueprint / Palette / Common",
      "usage": "显示 0–1 的进度。",
      "tip": "生命、蓄力、加载都可映射到这里。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Progress",
            "zh": "进度"
          },
          {
            "en": "Bar",
            "zh": "条"
          }
        ],
        "memory": "进度条"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Progress=进度 → Bar=条。合起来就是“进度条”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Progress Bar？”，试着回答：显示 0–1 的进度。"
      }
    },
    {
      "id": 403,
      "category": "UI / UMG",
      "en": "Button",
      "zh": "按钮",
      "location": "Widget Blueprint / Palette / Common",
      "usage": "可点击的 UI 控件。",
      "tip": "按钮事件通常在 Details 或节点里绑定 On Clicked。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Button」想成玩家眼前的 HUD里的一个工具，它负责“按钮”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Button？”，试着回答：可点击的 UI 控件。"
      }
    },
    {
      "id": 404,
      "category": "UI / UMG",
      "en": "Set Input Mode",
      "zh": "设置输入模式",
      "location": "Player Controller / Set Input Mode",
      "usage": "决定 UI 与游戏接收输入的优先级。",
      "tip": "打开菜单后还要考虑 Show Mouse Cursor。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Input",
            "zh": "输入"
          },
          {
            "en": "Mode",
            "zh": "模式"
          }
        ],
        "memory": "设置输入模式"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Input=输入 → Mode=模式。合起来就是“设置输入模式”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Input Mode？”，试着回答：决定 UI 与游戏接收输入的优先级。"
      }
    },
    {
      "id": 405,
      "category": "UI / UMG",
      "en": "Get Owning Player",
      "zh": "获取所属玩家控制器",
      "location": "User Widget / Get Owning Player",
      "usage": "取得创建该 UI 的 Player Controller。",
      "tip": "运行时获取玩家相关对象比硬编码索引更稳。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Owning",
            "zh": ""
          },
          {
            "en": "Player",
            "zh": "玩家"
          }
        ],
        "memory": "获取所属玩家控制器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Player=玩家。合起来就是“获取所属玩家控制器”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Owning Player？”，试着回答：取得创建该 UI 的 Player Controller。"
      }
    },
    {
      "id": 406,
      "category": "UI / UMG",
      "en": "Get Player Screen Size",
      "zh": "获取玩家屏幕尺寸",
      "location": "Widget / Viewport / Get Viewport Size",
      "usage": "取得 UI 可用的屏幕宽高。",
      "tip": "响应式布局不应默认写死一个分辨率。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "Screen",
            "zh": ""
          },
          {
            "en": "Size",
            "zh": ""
          }
        ],
        "memory": "获取玩家屏幕尺寸"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Player=玩家。合起来就是“获取玩家屏幕尺寸”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Player Screen Size？”，试着回答：取得 UI 可用的屏幕宽高。"
      }
    },
    {
      "id": 407,
      "category": "UI / UMG",
      "en": "Play Animation",
      "zh": "播放 UI 动画",
      "location": "User Widget / Animations / Play Animation",
      "usage": "播放 Widget Blueprint 内制作的 UI 动画。",
      "tip": "与骨骼模型动画不是同一节点语境。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Play",
            "zh": "播放"
          },
          {
            "en": "Animation",
            "zh": "动画"
          }
        ],
        "memory": "播放 UI 动画"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Play=播放 → Animation=动画。合起来就是“播放 UI 动画”。",
        "method": "把游戏数据换算成玩家能看懂的界面反馈。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Play Animation？”，试着回答：播放 Widget Blueprint 内制作的 UI 动画。"
      }
    },
    {
      "id": 408,
      "category": "音频",
      "en": "Play Sound 2D",
      "zh": "播放 2D 声音",
      "location": "Audio / Play Sound 2D",
      "usage": "播放不依赖世界位置的音效。",
      "tip": "适合 UI 点击声、菜单提示声。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Play",
            "zh": "播放"
          },
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "2D",
            "zh": ""
          }
        ],
        "memory": "播放 2D 声音"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Play=播放 → Sound=声音。合起来就是“播放 2D 声音”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Play Sound 2D？”，试着回答：播放不依赖世界位置的音效。"
      }
    },
    {
      "id": 409,
      "category": "音频",
      "en": "Play Sound at Location",
      "zh": "在世界位置播放声音",
      "location": "Audio / Play Sound at Location",
      "usage": "在指定世界坐标播放音效。",
      "tip": "适合爆炸、脚步、道具落地。",
      "groups": [],
      "scenarios": [
        "pickup",
        "network-fire"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Play",
            "zh": "播放"
          },
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "at",
            "zh": "在指定位置"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "在世界位置播放声音"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Play=播放 → Sound=声音 → at=在指定位置 → Location=位置。合起来就是“在世界位置播放声音”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Play Sound at Location？”，试着回答：在指定世界坐标播放音效。"
      }
    },
    {
      "id": 410,
      "category": "音频",
      "en": "Play Sound Attached",
      "zh": "在附加位置播放声音",
      "location": "Audio / Play Sound Attached",
      "usage": "让声音跟随一个组件播放。",
      "tip": "适合持续音源，如引擎声、火焰声。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Play",
            "zh": "播放"
          },
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "Attached",
            "zh": ""
          }
        ],
        "memory": "在附加位置播放声音"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Play=播放 → Sound=声音。合起来就是“在附加位置播放声音”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Play Sound Attached？”，试着回答：让声音跟随一个组件播放。"
      }
    },
    {
      "id": 411,
      "category": "音频",
      "en": "Spawn Sound 2D",
      "zh": "生成 2D 声音组件",
      "location": "Audio / Spawn Sound 2D",
      "usage": "返回 Audio Component，便于后续控制。",
      "tip": "只在需要 Stop、Fade 等控制时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Spawn",
            "zh": "生成"
          },
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "2D",
            "zh": ""
          }
        ],
        "memory": "生成 2D 声音组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Spawn=生成 → Sound=声音。合起来就是“生成 2D 声音组件”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Spawn Sound 2D？”，试着回答：返回 Audio Component，便于后续控制。"
      }
    },
    {
      "id": 412,
      "category": "音频",
      "en": "Spawn Sound at Location",
      "zh": "在位置生成声音组件",
      "location": "Audio / Spawn Sound at Location",
      "usage": "生成可控制的空间音源组件。",
      "tip": "保存返回的 Audio Component 才能停止。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Spawn",
            "zh": "生成"
          },
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "at",
            "zh": "在指定位置"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "在位置生成声音组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Spawn=生成 → Sound=声音 → at=在指定位置 → Location=位置。合起来就是“在位置生成声音组件”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Spawn Sound at Location？”，试着回答：生成可控制的空间音源组件。"
      }
    },
    {
      "id": 413,
      "category": "音频",
      "en": "Spawn Sound Attached",
      "zh": "生成附加声音组件",
      "location": "Audio / Spawn Sound Attached",
      "usage": "生成跟随组件的声音。",
      "tip": "注意 Attach Location Type 和世界/相对位置。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Spawn",
            "zh": "生成"
          },
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "Attached",
            "zh": ""
          }
        ],
        "memory": "生成附加声音组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Spawn=生成 → Sound=声音。合起来就是“生成附加声音组件”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Spawn Sound Attached？”，试着回答：生成跟随组件的声音。"
      }
    },
    {
      "id": 414,
      "category": "音频",
      "en": "Audio Component",
      "zh": "音频组件",
      "location": "Audio / Audio Component",
      "usage": "在 Actor 上播放和管理声音。",
      "tip": "声音的播放/停止/音量常由它控制。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Audio",
            "zh": ""
          },
          {
            "en": "Component",
            "zh": "组件"
          }
        ],
        "memory": "音频组件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Component=组件。合起来就是“音频组件”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Audio Component？”，试着回答：在 Actor 上播放和管理声音。"
      }
    },
    {
      "id": 415,
      "category": "音频",
      "en": "Set Sound",
      "zh": "设置声音资源",
      "location": "Audio Component / Set Sound",
      "usage": "替换音频组件当前播放的 Sound 资源。",
      "tip": "替换后是否自动播放取决于当前状态。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Sound",
            "zh": "声音"
          }
        ],
        "memory": "设置声音资源"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Sound=声音。合起来就是“设置声音资源”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Sound？”，试着回答：替换音频组件当前播放的 Sound 资源。"
      }
    },
    {
      "id": 416,
      "category": "音频",
      "en": "Play",
      "zh": "播放",
      "location": "Audio Component / Play",
      "usage": "让音频组件开始播放。",
      "tip": "若已开始，根据节点行为可能不会重头播放。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Play」想成场景里的喇叭里的一个工具，它负责“播放”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Play？”，试着回答：让音频组件开始播放。"
      }
    },
    {
      "id": 417,
      "category": "音频",
      "en": "Stop",
      "zh": "停止",
      "location": "Audio Component / Stop",
      "usage": "停止音频播放。",
      "tip": "需要从头再播时调用 Play 或重新开始。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Stop」想成场景里的喇叭里的一个工具，它负责“停止”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Stop？”，试着回答：停止音频播放。"
      }
    },
    {
      "id": 418,
      "category": "音频",
      "en": "Fade In",
      "zh": "淡入",
      "location": "Audio Component / Fade In",
      "usage": "从低音量逐步增加到目标音量。",
      "tip": "持续时间单位通常为秒。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Fade",
            "zh": ""
          },
          {
            "en": "In",
            "zh": ""
          }
        ],
        "memory": "淡入"
      },
      "memoryAid": {
        "association": "把「Fade In」想成场景里的喇叭里的一个工具，它负责“淡入”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Fade In？”，试着回答：从低音量逐步增加到目标音量。"
      }
    },
    {
      "id": 419,
      "category": "音频",
      "en": "Fade Out",
      "zh": "淡出",
      "location": "Audio Component / Fade Out",
      "usage": "逐步降低音量并停止。",
      "tip": "过场、场景切换常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Fade",
            "zh": ""
          },
          {
            "en": "Out",
            "zh": "输出"
          }
        ],
        "memory": "淡出"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Out=输出。合起来就是“淡出”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Fade Out？”，试着回答：逐步降低音量并停止。"
      }
    },
    {
      "id": 420,
      "category": "音频",
      "en": "Set Volume Multiplier",
      "zh": "设置音量倍数",
      "location": "Audio Component / Set Volume Multiplier",
      "usage": "调整音频组件的相对音量。",
      "tip": "1 为原始音量，0 为静音；具体范围以节点为准。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Volume",
            "zh": ""
          },
          {
            "en": "Multiplier",
            "zh": ""
          }
        ],
        "memory": "设置音量倍数"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置。合起来就是“设置音量倍数”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Volume Multiplier？”，试着回答：调整音频组件的相对音量。"
      }
    },
    {
      "id": 421,
      "category": "音频",
      "en": "Set Pitch Multiplier",
      "zh": "设置音高倍数",
      "location": "Audio Component / Set Pitch Multiplier",
      "usage": "调整播放速度/音高。",
      "tip": "过度变化会让声音失真。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Pitch",
            "zh": "俯仰"
          },
          {
            "en": "Multiplier",
            "zh": ""
          }
        ],
        "memory": "设置音高倍数"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Pitch=俯仰。合起来就是“设置音高倍数”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Pitch Multiplier？”，试着回答：调整播放速度/音高。"
      }
    },
    {
      "id": 422,
      "category": "音频",
      "en": "Is Playing",
      "zh": "是否正在播放",
      "location": "Audio Component / Is Playing",
      "usage": "检查音频组件当前是否播放。",
      "tip": "循环音效常用于判断是否需要创建新实例。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Playing",
            "zh": ""
          }
        ],
        "memory": "是否正在播放"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Is=是否。合起来就是“是否正在播放”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Is Playing？”，试着回答：检查音频组件当前是否播放。"
      }
    },
    {
      "id": 423,
      "category": "音频",
      "en": "Sound Class",
      "zh": "声音类别",
      "location": "Sound asset / Sound Class",
      "usage": "把声音分组统一管理音量。",
      "tip": "Music、SFX、Voice 通常分不同类别。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "声音类别"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Sound=声音 → Class=类。合起来就是“声音类别”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Sound Class？”，试着回答：把声音分组统一管理音量。"
      }
    },
    {
      "id": 424,
      "category": "音频",
      "en": "Sound Attenuation",
      "zh": "声音衰减",
      "location": "Sound asset / Attenuation",
      "usage": "定义空间声音随距离衰减和传播方式。",
      "tip": "3D 声音听不到时检查是否使用 Attenuation。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "Attenuation",
            "zh": ""
          }
        ],
        "memory": "声音衰减"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Sound=声音。合起来就是“声音衰减”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Sound Attenuation？”，试着回答：定义空间声音随距离衰减和传播方式。"
      }
    },
    {
      "id": 425,
      "category": "音频",
      "en": "Sound Cue",
      "zh": "声音提示资源",
      "location": "Audio / Sound Cue",
      "usage": "把多段声音组合并加随机、调制等规则。",
      "tip": "随机脚步、组合音常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "Cue",
            "zh": ""
          }
        ],
        "memory": "声音提示资源"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Sound=声音。合起来就是“声音提示资源”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Sound Cue？”，试着回答：把多段声音组合并加随机、调制等规则。"
      }
    },
    {
      "id": 426,
      "category": "音频",
      "en": "Sound Mix",
      "zh": "声音混音",
      "location": "Audio / Sound Mix",
      "usage": "组合多组音量的混音配置。",
      "tip": "进入水下、过场改变整体声音时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "Mix",
            "zh": ""
          }
        ],
        "memory": "声音混音"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Sound=声音。合起来就是“声音混音”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Sound Mix？”，试着回答：组合多组音量的混音配置。"
      }
    },
    {
      "id": 427,
      "category": "音频",
      "en": "Set Sound Mix Class Override",
      "zh": "覆盖声音类别音量",
      "location": "Audio / Set Sound Mix Class Override",
      "usage": "临时改变指定 Sound Class 的音量。",
      "tip": "离开状态后要恢复覆盖。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Sound",
            "zh": "声音"
          },
          {
            "en": "Mix",
            "zh": ""
          },
          {
            "en": "Class",
            "zh": "类"
          },
          {
            "en": "Override",
            "zh": ""
          }
        ],
        "memory": "覆盖声音类别音量"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Sound=声音 → Class=类。合起来就是“覆盖声音类别音量”。",
        "method": "先想声音在哪里播放，再考虑2D还是空间音频。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Sound Mix Class Override？”，试着回答：临时改变指定 Sound Class 的音量。"
      }
    },
    {
      "id": 428,
      "category": "动画",
      "en": "Play Animation",
      "zh": "播放动画",
      "location": "Skeletal Mesh Component / Play Animation",
      "usage": "在组件上播放单个动画资源。",
      "tip": "循环与播放速率在节点设置；复杂状态优先 Animation Blueprint。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Play",
            "zh": "播放"
          },
          {
            "en": "Animation",
            "zh": "动画"
          }
        ],
        "memory": "播放动画"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Play=播放 → Animation=动画。合起来就是“播放动画”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Play Animation？”，试着回答：在组件上播放单个动画资源。"
      }
    },
    {
      "id": 429,
      "category": "动画",
      "en": "Play Anim Montage",
      "zh": "播放动画蒙太奇",
      "location": "Animation / Play Anim Montage",
      "usage": "播放可分段、可中断的 Montage。",
      "tip": "攻击、受击、交互动画常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Play",
            "zh": "播放"
          },
          {
            "en": "Anim",
            "zh": "动画"
          },
          {
            "en": "Montage",
            "zh": "蒙太奇"
          }
        ],
        "memory": "播放动画蒙太奇"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Play=播放 → Anim=动画 → Montage=蒙太奇。合起来就是“播放动画蒙太奇”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Play Anim Montage？”，试着回答：播放可分段、可中断的 Montage。"
      }
    },
    {
      "id": 430,
      "category": "动画",
      "en": "Stop Anim Montage",
      "zh": "停止动画蒙太奇",
      "location": "Animation / Stop Anim Montage",
      "usage": "停止当前或指定 Montage。",
      "tip": "Blend Out 时间影响停止是否平滑。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Stop",
            "zh": ""
          },
          {
            "en": "Anim",
            "zh": "动画"
          },
          {
            "en": "Montage",
            "zh": "蒙太奇"
          }
        ],
        "memory": "停止动画蒙太奇"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Anim=动画 → Montage=蒙太奇。合起来就是“停止动画蒙太奇”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Stop Anim Montage？”，试着回答：停止当前或指定 Montage。"
      }
    },
    {
      "id": 431,
      "category": "动画",
      "en": "Montage Play",
      "zh": "播放蒙太奇",
      "location": "Anim Instance / Montage Play",
      "usage": "在动画蓝图实例中播放 Montage。",
      "tip": "通常通过角色获取 Anim Instance 后调用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Montage",
            "zh": "蒙太奇"
          },
          {
            "en": "Play",
            "zh": "播放"
          }
        ],
        "memory": "播放蒙太奇"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Montage=蒙太奇 → Play=播放。合起来就是“播放蒙太奇”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Montage Play？”，试着回答：在动画蓝图实例中播放 Montage。"
      }
    },
    {
      "id": 432,
      "category": "动画",
      "en": "Montage Stop",
      "zh": "停止蒙太奇",
      "location": "Anim Instance / Montage Stop",
      "usage": "停止指定 Montage。",
      "tip": "循环攻击结束或被击时调用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Montage",
            "zh": "蒙太奇"
          },
          {
            "en": "Stop",
            "zh": ""
          }
        ],
        "memory": "停止蒙太奇"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Montage=蒙太奇。合起来就是“停止蒙太奇”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Montage Stop？”，试着回答：停止指定 Montage。"
      }
    },
    {
      "id": 433,
      "category": "动画",
      "en": "Get Anim Instance",
      "zh": "获取动画实例",
      "location": "Skeletal Mesh Component / Get Anim Instance",
      "usage": "取得驱动该骨骼网格的 Anim Instance。",
      "tip": "访问动画蓝图变量和事件前常需它。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Anim",
            "zh": "动画"
          },
          {
            "en": "Instance",
            "zh": "实例"
          }
        ],
        "memory": "获取动画实例"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Anim=动画 → Instance=实例。合起来就是“获取动画实例”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Anim Instance？”，试着回答：取得驱动该骨骼网格的 Anim Instance。"
      }
    },
    {
      "id": 434,
      "category": "动画",
      "en": "Set Anim Instance Class",
      "zh": "设置动画实例类",
      "location": "Skeletal Mesh Component / Set Anim Instance Class",
      "usage": "运行时更换动画蓝图类型。",
      "tip": "替换模型后常需同步更换。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Anim",
            "zh": "动画"
          },
          {
            "en": "Instance",
            "zh": "实例"
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "设置动画实例类"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Anim=动画 → Instance=实例 → Class=类。合起来就是“设置动画实例类”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Anim Instance Class？”，试着回答：运行时更换动画蓝图类型。"
      }
    },
    {
      "id": 435,
      "category": "动画",
      "en": "Set Play Rate",
      "zh": "设置播放速率",
      "location": "Animation / Set Play Rate",
      "usage": "改变动画播放快慢。",
      "tip": "0 会停住，负值可能反向播放，具体资源支持而定。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Play",
            "zh": "播放"
          },
          {
            "en": "Rate",
            "zh": "速率"
          }
        ],
        "memory": "设置播放速率"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Play=播放 → Rate=速率。合起来就是“设置播放速率”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Play Rate？”，试着回答：改变动画播放快慢。"
      }
    },
    {
      "id": 436,
      "category": "动画",
      "en": "Set Playing",
      "zh": "设置是否播放",
      "location": "Animation / Set Playing",
      "usage": "开始或暂停动画实例状态。",
      "tip": "与 Montage 播放状态可能分开管理。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Playing",
            "zh": ""
          }
        ],
        "memory": "设置是否播放"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置。合起来就是“设置是否播放”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Playing？”，试着回答：开始或暂停动画实例状态。"
      }
    },
    {
      "id": 437,
      "category": "动画",
      "en": "Set Position",
      "zh": "设置动画时间位置",
      "location": "Animation / Set Position",
      "usage": "直接跳到动画的指定秒数。",
      "tip": "跳跃前检查当前资源长度。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Position",
            "zh": "位置"
          }
        ],
        "memory": "设置动画时间位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Position=位置。合起来就是“设置动画时间位置”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Position？”，试着回答：直接跳到动画的指定秒数。"
      }
    },
    {
      "id": 438,
      "category": "动画",
      "en": "Animation Sequence",
      "zh": "动画序列",
      "location": "Content Browser / Animation",
      "usage": "一条有时间和通道的骨骼动画。",
      "tip": "是资源，不等于何时播放它的逻辑。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Animation",
            "zh": "动画"
          },
          {
            "en": "Sequence",
            "zh": ""
          }
        ],
        "memory": "动画序列"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Animation=动画。合起来就是“动画序列”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Animation Sequence？”，试着回答：一条有时间和通道的骨骼动画。"
      }
    },
    {
      "id": 439,
      "category": "动画",
      "en": "Animation Montage",
      "zh": "动画蒙太奇",
      "location": "Content Browser / Animation",
      "usage": "可在游戏事件中播放、分段和混合的动画资源。",
      "tip": "与 Sequence 的区别是更适合游戏动作流程。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Animation",
            "zh": "动画"
          },
          {
            "en": "Montage",
            "zh": "蒙太奇"
          }
        ],
        "memory": "动画蒙太奇"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Animation=动画 → Montage=蒙太奇。合起来就是“动画蒙太奇”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Animation Montage？”，试着回答：可在游戏事件中播放、分段和混合的动画资源。"
      }
    },
    {
      "id": 440,
      "category": "动画",
      "en": "Event Blueprint Update Animation",
      "zh": "更新动画事件",
      "location": "Animation Blueprint / Event Graph",
      "usage": "动画蓝图每次更新时执行。",
      "tip": "用于根据角色速度、状态更新动画变量。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Event",
            "zh": "事件"
          },
          {
            "en": "Blueprint",
            "zh": "蓝图"
          },
          {
            "en": "Update",
            "zh": ""
          },
          {
            "en": "Animation",
            "zh": "动画"
          }
        ],
        "memory": "更新动画事件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Event=事件 → Blueprint=蓝图 → Animation=动画。合起来就是“更新动画事件”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Event Blueprint Update Animation？”，试着回答：动画蓝图每次更新时执行。"
      }
    },
    {
      "id": 441,
      "category": "动画",
      "en": "State Machine",
      "zh": "动画状态机",
      "location": "AnimGraph / Add New State Machine",
      "usage": "在 Idle、Run、Jump 等动画状态间切换。",
      "tip": "先写状态转移条件，再连接各状态的动画。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "State",
            "zh": "状态"
          },
          {
            "en": "Machine",
            "zh": ""
          }
        ],
        "memory": "动画状态机"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：State=状态。合起来就是“动画状态机”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 State Machine？”，试着回答：在 Idle、Run、Jump 等动画状态间切换。"
      }
    },
    {
      "id": 442,
      "category": "动画",
      "en": "Transition Rule",
      "zh": "状态转移规则",
      "location": "Animation State Machine / Transition",
      "usage": "决定能否从当前状态切到下一状态。",
      "tip": "返回 True 才执行转移；注意规则方向和优先级。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Transition",
            "zh": ""
          },
          {
            "en": "Rule",
            "zh": ""
          }
        ],
        "memory": "状态转移规则"
      },
      "memoryAid": {
        "association": "把「Transition Rule」想成木偶的关节和动作编排里的一个工具，它负责“状态转移规则”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Transition Rule？”，试着回答：决定能否从当前状态切到下一状态。"
      }
    },
    {
      "id": 443,
      "category": "动画",
      "en": "Blend Space",
      "zh": "混合空间",
      "location": "Content Browser / Animation",
      "usage": "按速度、方向等参数在多个动画间混合。",
      "tip": "适合从停止到奔跑、不同方向移动。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Blend",
            "zh": ""
          },
          {
            "en": "Space",
            "zh": ""
          }
        ],
        "memory": "混合空间"
      },
      "memoryAid": {
        "association": "把「Blend Space」想成木偶的关节和动作编排里的一个工具，它负责“混合空间”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Blend Space？”，试着回答：按速度、方向等参数在多个动画间混合。"
      }
    },
    {
      "id": 444,
      "category": "动画",
      "en": "Aim Offset",
      "zh": "瞄准偏移",
      "location": "Content Browser / Animation",
      "usage": "按 Pitch/Yaw 混合上半身瞄准姿态。",
      "tip": "常与 Aim Offset 状态和变量配合。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Aim",
            "zh": ""
          },
          {
            "en": "Offset",
            "zh": "偏移"
          }
        ],
        "memory": "瞄准偏移"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Offset=偏移。合起来就是“瞄准偏移”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Aim Offset？”，试着回答：按 Pitch/Yaw 混合上半身瞄准姿态。"
      }
    },
    {
      "id": 445,
      "category": "动画",
      "en": "Anim Notify",
      "zh": "动画通知",
      "location": "Animation Sequence / Notify",
      "usage": "在动画指定时间触发事件。",
      "tip": "脚步、武器碰撞窗口常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Anim",
            "zh": "动画"
          },
          {
            "en": "Notify",
            "zh": ""
          }
        ],
        "memory": "动画通知"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Anim=动画。合起来就是“动画通知”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Anim Notify？”，试着回答：在动画指定时间触发事件。"
      }
    },
    {
      "id": 446,
      "category": "动画",
      "en": "Anim Notify State",
      "zh": "动画通知状态",
      "location": "Animation Sequence / Notify State",
      "usage": "在动画一段时间区间内开始和结束。",
      "tip": "持续效果比单个 Notify 更适合。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Anim",
            "zh": "动画"
          },
          {
            "en": "Notify",
            "zh": ""
          },
          {
            "en": "State",
            "zh": "状态"
          }
        ],
        "memory": "动画通知状态"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Anim=动画 → State=状态。合起来就是“动画通知状态”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Anim Notify State？”，试着回答：在动画一段时间区间内开始和结束。"
      }
    },
    {
      "id": 447,
      "category": "动画",
      "en": "Root Motion",
      "zh": "根运动",
      "location": "Animation Sequence / Root Motion",
      "usage": "让动画中的根骨位移驱动角色移动。",
      "tip": "与角色代码移动混用前要检查 Root Motion Mode。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Root",
            "zh": ""
          },
          {
            "en": "Motion",
            "zh": ""
          }
        ],
        "memory": "根运动"
      },
      "memoryAid": {
        "association": "把「Root Motion」想成木偶的关节和动作编排里的一个工具，它负责“根运动”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Root Motion？”，试着回答：让动画中的根骨位移驱动角色移动。"
      }
    },
    {
      "id": 448,
      "category": "动画",
      "en": "Skeleton",
      "zh": "骨架资源",
      "location": "Content Browser / Skeleton",
      "usage": "共享骨骼结构与动画目标的资源。",
      "tip": "不同骨骼网格可共享同一 Skeleton。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Skeleton」想成木偶的关节和动作编排里的一个工具，它负责“骨架资源”。",
        "method": "先想状态，再想播放哪段动作。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Skeleton？”，试着回答：共享骨骼结构与动画目标的资源。"
      }
    },
    {
      "id": 449,
      "category": "动画",
      "en": "Morph Target",
      "zh": "形变目标",
      "location": "Skeletal Mesh / Morph Target",
      "usage": "控制表情、肌肉等形状变化。",
      "tip": "可在动画或蓝图中设置权重。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Morph",
            "zh": ""
          },
          {
            "en": "Target",
            "zh": ""
          }
        ],
        "memory": "形变目标"
      },
      "memoryAid": {
        "association": "把「Morph Target」想成木偶的关节和动作编排里的一个工具，它负责“形变目标”。",
        "method": "先想状态，再想播放哪段动作。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Morph Target？”，试着回答：控制表情、肌肉等形状变化。"
      }
    },
    {
      "id": 450,
      "category": "AI与导航",
      "en": "AI Move To",
      "zh": "AI 移动到目标",
      "location": "AI / AI Move To",
      "usage": "让 AI Pawn 朝目标位置或 Actor 移动。",
      "tip": "需要导航网格覆盖目标区域。",
      "groups": [
        "ai"
      ],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": {
        "parts": [
          {
            "en": "AI",
            "zh": ""
          },
          {
            "en": "Move",
            "zh": "移动"
          },
          {
            "en": "To",
            "zh": "到"
          }
        ],
        "memory": "AI 移动到目标"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Move=移动 → To=到。合起来就是“AI 移动到目标”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 AI Move To？”，试着回答：让 AI Pawn 朝目标位置或 Actor 移动。"
      }
    },
    {
      "id": 451,
      "category": "AI与导航",
      "en": "Move To Location",
      "zh": "移动到位置",
      "location": "AI / Move To Location",
      "usage": "下发移动到世界位置的任务。",
      "tip": "更底层，常与 AI Controller 配合。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Move",
            "zh": "移动"
          },
          {
            "en": "To",
            "zh": "到"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "移动到位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Move=移动 → To=到 → Location=位置。合起来就是“移动到位置”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Move To Location？”，试着回答：下发移动到世界位置的任务。"
      }
    },
    {
      "id": 452,
      "category": "AI与导航",
      "en": "Move To Actor",
      "zh": "移动到 Actor",
      "location": "AI / Move To Actor",
      "usage": "追踪并靠近另一个 Actor。",
      "tip": "目标会动时比固定位置更合适。",
      "groups": [
        "ai"
      ],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Move",
            "zh": "移动"
          },
          {
            "en": "To",
            "zh": "到"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          }
        ],
        "memory": "移动到 Actor"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Move=移动 → To=到 → Actor=场景对象。合起来就是“移动到 Actor”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Move To Actor？”，试着回答：追踪并靠近另一个 Actor。"
      }
    },
    {
      "id": 453,
      "category": "AI与导航",
      "en": "Simple Move To Location",
      "zh": "简单移动到位置",
      "location": "AI / Simple Move To Location",
      "usage": "快速让受控 Pawn 移动到位置。",
      "tip": "没有完整行为树的轻量方案。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Simple",
            "zh": ""
          },
          {
            "en": "Move",
            "zh": "移动"
          },
          {
            "en": "To",
            "zh": "到"
          },
          {
            "en": "Location",
            "zh": "位置"
          }
        ],
        "memory": "简单移动到位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Move=移动 → To=到 → Location=位置。合起来就是“简单移动到位置”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Simple Move To Location？”，试着回答：快速让受控 Pawn 移动到位置。"
      }
    },
    {
      "id": 454,
      "category": "AI与导航",
      "en": "Simple Move To Actor",
      "zh": "简单移动到 Actor",
      "location": "AI / Simple Move To Actor",
      "usage": "快速让 Pawn 移动到某对象。",
      "tip": "目标销毁后要处理失败或停止。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Simple",
            "zh": ""
          },
          {
            "en": "Move",
            "zh": "移动"
          },
          {
            "en": "To",
            "zh": "到"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          }
        ],
        "memory": "简单移动到 Actor"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Move=移动 → To=到 → Actor=场景对象。合起来就是“简单移动到 Actor”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Simple Move To Actor？”，试着回答：快速让 Pawn 移动到某对象。"
      }
    },
    {
      "id": 455,
      "category": "AI与导航",
      "en": "Get Random Reachable Point in Radius",
      "zh": "获取半径内随机可达点",
      "location": "Navigation / Get Random Reachable Point in Radius",
      "usage": "从导航网格上取得可到达的随机位置。",
      "tip": "不是任意空间点，必须落在导航数据上。",
      "groups": [
        "ai"
      ],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Random",
            "zh": "随机"
          },
          {
            "en": "Reachable",
            "zh": ""
          },
          {
            "en": "Point",
            "zh": ""
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Radius",
            "zh": ""
          }
        ],
        "memory": "获取半径内随机可达点"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Random=随机 → in=在……中。合起来就是“获取半径内随机可达点”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Random Reachable Point in Radius？”，试着回答：从导航网格上取得可到达的随机位置。"
      }
    },
    {
      "id": 456,
      "category": "AI与导航",
      "en": "Get Random Location in Navigable Radius",
      "zh": "获取导航半径内随机位置",
      "location": "Navigation / Get Random Location in Navigable Radius",
      "usage": "在给定半径内查找可导航的位置。",
      "tip": "目标点是否生成成功要看节点返回结果。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Random",
            "zh": "随机"
          },
          {
            "en": "Location",
            "zh": "位置"
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Navigable",
            "zh": ""
          },
          {
            "en": "Radius",
            "zh": ""
          }
        ],
        "memory": "获取导航半径内随机位置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Random=随机 → Location=位置 → in=在……中。合起来就是“获取导航半径内随机位置”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Random Location in Navigable Radius？”，试着回答：在给定半径内查找可导航的位置。"
      }
    },
    {
      "id": 457,
      "category": "AI与导航",
      "en": "Project Point to Navigation",
      "zh": "投影点到导航网格",
      "location": "Navigation / Project Point to Navigation",
      "usage": "把任意世界位置投影到附近可导航区域。",
      "tip": "原位置悬空或离导航太远时可能失败。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Project",
            "zh": ""
          },
          {
            "en": "Point",
            "zh": ""
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "Navigation",
            "zh": ""
          }
        ],
        "memory": "投影点到导航网格"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：to=到。合起来就是“投影点到导航网格”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Project Point to Navigation？”，试着回答：把任意世界位置投影到附近可导航区域。"
      }
    },
    {
      "id": 458,
      "category": "AI与导航",
      "en": "NavMeshBoundsVolume",
      "zh": "导航网格边界体积",
      "location": "Place Actors / Volumes / Nav Mesh Bounds Volume",
      "usage": "划定 AI 可以寻路的区域。",
      "tip": "放置后需要构建/刷新导航数据。",
      "groups": [
        "ai"
      ],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": null,
      "memoryAid": {
        "association": "把「NavMeshBoundsVolume」想成机器人在走廊里找路里的一个工具，它负责“导航网格边界体积”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 NavMeshBoundsVolume？”，试着回答：划定 AI 可以寻路的区域。"
      }
    },
    {
      "id": 459,
      "category": "AI与导航",
      "en": "Navigation Query",
      "zh": "导航查询",
      "location": "Navigation system",
      "usage": "查询可达性、路径和随机点。",
      "tip": "AI 总站着不动时先检查导航网格。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Navigation",
            "zh": ""
          },
          {
            "en": "Query",
            "zh": ""
          }
        ],
        "memory": "导航查询"
      },
      "memoryAid": {
        "association": "把「Navigation Query」想成机器人在走廊里找路里的一个工具，它负责“导航查询”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Navigation Query？”，试着回答：查询可达性、路径和随机点。"
      }
    },
    {
      "id": 460,
      "category": "AI与导航",
      "en": "AIController",
      "zh": "AI 控制器",
      "location": "Class Settings / Parent Class",
      "usage": "控制 AI Pawn 并运行行为树等 AI 功能。",
      "tip": "和 PlayerController 类似，但由 AI 逻辑驱动。",
      "groups": [
        "ai"
      ],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": null,
      "memoryAid": {
        "association": "把「AIController」想成机器人在走廊里找路里的一个工具，它负责“AI 控制器”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 AIController？”，试着回答：控制 AI Pawn 并运行行为树等 AI 功能。"
      }
    },
    {
      "id": 461,
      "category": "AI与导航",
      "en": "Behavior Tree",
      "zh": "行为树",
      "location": "Content Browser / Add / Artificial Intelligence",
      "usage": "组织 AI 任务和选择逻辑。",
      "tip": "需要 Blackboard 保存共享数据。",
      "groups": [
        "ai"
      ],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Behavior",
            "zh": ""
          },
          {
            "en": "Tree",
            "zh": ""
          }
        ],
        "memory": "行为树"
      },
      "memoryAid": {
        "association": "把「Behavior Tree」想成机器人在走廊里找路里的一个工具，它负责“行为树”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Behavior Tree？”，试着回答：组织 AI 任务和选择逻辑。"
      }
    },
    {
      "id": 462,
      "category": "AI与导航",
      "en": "Blackboard",
      "zh": "黑板",
      "location": "Content Browser / Add / Artificial Intelligence",
      "usage": "为行为树提供可共享的键值数据。",
      "tip": "TargetActor、PatrolPoint 等键要与行为树节点一致。",
      "groups": [
        "ai"
      ],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": null,
      "memoryAid": {
        "association": "把「Blackboard」想成机器人在走廊里找路里的一个工具，它负责“黑板”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Blackboard？”，试着回答：为行为树提供可共享的键值数据。"
      }
    },
    {
      "id": 463,
      "category": "AI与导航",
      "en": "Task",
      "zh": "行为树任务",
      "location": "Behavior Tree / Add Task",
      "usage": "行为树中的具体动作节点。",
      "tip": "可返回 Succeeded、Failed 或 In Progress。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Task」想成机器人在走廊里找路里的一个工具，它负责“行为树任务”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Task？”，试着回答：行为树中的具体动作节点。"
      }
    },
    {
      "id": 464,
      "category": "AI与导航",
      "en": "Decorator",
      "zh": "行为树装饰器",
      "location": "Behavior Tree / Decorator",
      "usage": "控制节点能否执行的条件。",
      "tip": "适合冷却、检测、比较黑板值。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Decorator」想成机器人在走廊里找路里的一个工具，它负责“行为树装饰器”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Decorator？”，试着回答：控制节点能否执行的条件。"
      }
    },
    {
      "id": 465,
      "category": "AI与导航",
      "en": "Service",
      "zh": "行为树服务",
      "location": "Behavior Tree / Service",
      "usage": "在节点激活期间周期性执行辅助更新。",
      "tip": "用于更新黑板、检查状态。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Service」想成机器人在走廊里找路里的一个工具，它负责“行为树服务”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Service？”，试着回答：在节点激活期间周期性执行辅助更新。"
      }
    },
    {
      "id": 466,
      "category": "AI与导航",
      "en": "Pawn Sensing",
      "zh": "Pawn 感知组件",
      "location": "Components / Add / Pawn Sensing",
      "usage": "基于视觉和听觉感知玩家。",
      "tip": "检测不等于会攻击，还需行为树或代码决策。",
      "groups": [
        "ai"
      ],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Pawn",
            "zh": ""
          },
          {
            "en": "Sensing",
            "zh": ""
          }
        ],
        "memory": "Pawn 感知组件"
      },
      "memoryAid": {
        "association": "把「Pawn Sensing」想成机器人在走廊里找路里的一个工具，它负责“Pawn 感知组件”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Pawn Sensing？”，试着回答：基于视觉和听觉感知玩家。"
      }
    },
    {
      "id": 467,
      "category": "AI与导航",
      "en": "AIPerception",
      "zh": "AI 感知系统",
      "location": "AI / AIPerception",
      "usage": "配置视觉、听觉等感知源。",
      "tip": "感知结果通常通过事件写入黑板或变量。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「AIPerception」想成机器人在走廊里找路里的一个工具，它负责“AI 感知系统”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 AIPerception？”，试着回答：配置视觉、听觉等感知源。"
      }
    },
    {
      "id": 468,
      "category": "AI与导航",
      "en": "Get Controlled Pawn",
      "zh": "获取被控制 Pawn",
      "location": "Controller / Get Controlled Pawn",
      "usage": "从 Controller 取得正在控制的 Pawn。",
      "tip": "实现前检查是否为空。",
      "groups": [],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Controlled",
            "zh": ""
          },
          {
            "en": "Pawn",
            "zh": ""
          }
        ],
        "memory": "获取被控制 Pawn"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取。合起来就是“获取被控制 Pawn”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Controlled Pawn？”，试着回答：从 Controller 取得正在控制的 Pawn。"
      }
    },
    {
      "id": 469,
      "category": "AI与导航",
      "en": "Set Focus",
      "zh": "让 AI 注视目标",
      "location": "AIController / Set Focus",
      "usage": "让 AI 将视线/朝向集中在目标上。",
      "tip": "常用于对话或战斗时面向玩家。",
      "groups": [],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Focus",
            "zh": ""
          }
        ],
        "memory": "让 AI 注视目标"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置。合起来就是“让 AI 注视目标”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Focus？”，试着回答：让 AI 将视线/朝向集中在目标上。"
      }
    },
    {
      "id": 470,
      "category": "AI与导航",
      "en": "Clear Focus",
      "zh": "清除注视",
      "location": "AIController / Clear Focus",
      "usage": "取消 AI 当前注视目标。",
      "tip": "行为切换时使用，避免一直盯着旧目标。",
      "groups": [],
      "scenarios": [
        "ai-patrol"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Clear",
            "zh": "清除"
          },
          {
            "en": "Focus",
            "zh": ""
          }
        ],
        "memory": "清除注视"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Clear=清除。合起来就是“清除注视”。",
        "method": "先看导航网格是否有路，再看 AI 如何选择目标。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Clear Focus？”，试着回答：取消 AI 当前注视目标。"
      }
    },
    {
      "id": 471,
      "category": "游戏流程·存档",
      "en": "Save Game to Slot",
      "zh": "保存游戏到存档槽",
      "location": "SaveGame / Save Game to Slot",
      "usage": "把 SaveGame 对象序列化写入指定槽位。",
      "tip": "需要一个保存了数据的 SaveGame 对象，而不是只给槽名。",
      "groups": [
        "save"
      ],
      "scenarios": [
        "pickup",
        "pause-ui",
        "save-load"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Save",
            "zh": "保存"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "Slot",
            "zh": "槽位"
          }
        ],
        "memory": "保存游戏到存档槽"
      },
      "memoryAid": {
        "association": "SaveGame 是打包盒，Slot 是抽屉编号；先装数据，再放进槽位。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Save Game to Slot？”，试着回答：把 SaveGame 对象序列化写入指定槽位。"
      }
    },
    {
      "id": 472,
      "category": "游戏流程·存档",
      "en": "Load Game from Slot",
      "zh": "从存档槽加载",
      "location": "SaveGame / Load Game from Slot",
      "usage": "读取指定槽位的存档对象。",
      "tip": "槽位不存在时可能返回无效对象，先检查。",
      "groups": [
        "save"
      ],
      "scenarios": [
        "save-load"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Load",
            "zh": "加载"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "from",
            "zh": "从"
          },
          {
            "en": "Slot",
            "zh": "槽位"
          }
        ],
        "memory": "从存档槽加载"
      },
      "memoryAid": {
        "association": "Load 是按抽屉编号把存档盒重新取出来。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Load Game from Slot？”，试着回答：读取指定槽位的存档对象。"
      }
    },
    {
      "id": 473,
      "category": "游戏流程·存档",
      "en": "Does Save Game Exist",
      "zh": "存档是否存在",
      "location": "SaveGame / Does Save Game Exist",
      "usage": "检查指定槽位是否有存档。",
      "tip": "在显示“继续游戏”按钮前先判断。",
      "groups": [
        "save"
      ],
      "scenarios": [
        "save-load"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Does",
            "zh": ""
          },
          {
            "en": "Save",
            "zh": "保存"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "Exist",
            "zh": ""
          }
        ],
        "memory": "存档是否存在"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Save=保存 → Game=游戏。合起来就是“存档是否存在”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Does Save Game Exist？”，试着回答：检查指定槽位是否有存档。"
      }
    },
    {
      "id": 474,
      "category": "游戏流程·存档",
      "en": "Delete Game in Slot",
      "zh": "删除存档槽",
      "location": "SaveGame / Delete Game in Slot",
      "usage": "删除指定槽位的存档。",
      "tip": "确认操作前让玩家明确选择，避免误删。",
      "groups": [],
      "scenarios": [
        "save-load"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Delete",
            "zh": ""
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Slot",
            "zh": "槽位"
          }
        ],
        "memory": "删除存档槽"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Game=游戏 → in=在……中 → Slot=槽位。合起来就是“删除存档槽”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Delete Game in Slot？”，试着回答：删除指定槽位的存档。"
      }
    },
    {
      "id": 475,
      "category": "游戏流程·存档",
      "en": "Create Save Game Object",
      "zh": "创建存档对象",
      "location": "SaveGame / Create Save Game Object",
      "usage": "实例化一个 SaveGame 蓝图。",
      "tip": "先建 SaveGame 子类并在其中声明要保存的变量。",
      "groups": [
        "save"
      ],
      "scenarios": [
        "save-load"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Create",
            "zh": "创建"
          },
          {
            "en": "Save",
            "zh": "保存"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "Object",
            "zh": "对象"
          }
        ],
        "memory": "创建存档对象"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Create=创建 → Save=保存 → Game=游戏 → Object=对象。合起来就是“创建存档对象”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Create Save Game Object？”，试着回答：实例化一个 SaveGame 蓝图。"
      }
    },
    {
      "id": 476,
      "category": "游戏流程·存档",
      "en": "SaveGame",
      "zh": "存档类",
      "location": "Class Settings / Parent Class / SaveGame",
      "usage": "可作为保存数据容器的专用对象。",
      "tip": "只把可序列化的简单数据放进去。",
      "groups": [
        "save"
      ],
      "scenarios": [
        "save-load"
      ],
      "phrase": null,
      "memoryAid": {
        "association": "把「SaveGame」想成游戏的存档抽屉和书签里的一个工具，它负责“存档类”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 SaveGame？”，试着回答：可作为保存数据容器的专用对象。"
      }
    },
    {
      "id": 477,
      "category": "游戏流程·存档",
      "en": "Get Game Instance",
      "zh": "获取游戏实例",
      "location": "Game / Get Game Instance",
      "usage": "取得跨关卡存在的 GameInstance。",
      "tip": "适合放少量全局状态或持有子系统。",
      "groups": [
        "save"
      ],
      "scenarios": [
        "save-load"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "Instance",
            "zh": "实例"
          }
        ],
        "memory": "获取游戏实例"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Game=游戏 → Instance=实例。合起来就是“获取游戏实例”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Game Instance？”，试着回答：取得跨关卡存在的 GameInstance。"
      }
    },
    {
      "id": 478,
      "category": "游戏流程·存档",
      "en": "Get Game Mode",
      "zh": "获取游戏模式",
      "location": "Game / Get Game Mode",
      "usage": "取得本局游戏规则对象。",
      "tip": "客户端可能无法可靠取得服务器专属状态，联网时注意权限。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "Mode",
            "zh": "模式"
          }
        ],
        "memory": "获取游戏模式"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Game=游戏 → Mode=模式。合起来就是“获取游戏模式”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Game Mode？”，试着回答：取得本局游戏规则对象。"
      }
    },
    {
      "id": 479,
      "category": "游戏流程·存档",
      "en": "Get Game State",
      "zh": "获取游戏状态",
      "location": "Game / Get Game State",
      "usage": "取得所有玩家共享的 GameState。",
      "tip": "比分、回合等共享状态优先放这里。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "State",
            "zh": "状态"
          }
        ],
        "memory": "获取游戏状态"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Game=游戏 → State=状态。合起来就是“获取游戏状态”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Game State？”，试着回答：取得所有玩家共享的 GameState。"
      }
    },
    {
      "id": 480,
      "category": "游戏流程·存档",
      "en": "Get Player State",
      "zh": "获取玩家状态",
      "location": "Player / Get Player State",
      "usage": "取得某个玩家的共享状态对象。",
      "tip": "保存玩家名、得分、队伍等。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "State",
            "zh": "状态"
          }
        ],
        "memory": "获取玩家状态"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Player=玩家 → State=状态。合起来就是“获取玩家状态”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Player State？”，试着回答：取得某个玩家的共享状态对象。"
      }
    },
    {
      "id": 481,
      "category": "游戏流程·存档",
      "en": "Get Player Camera Manager",
      "zh": "获取玩家镜头管理器",
      "location": "Player / Get Player Camera Manager",
      "usage": "取得当前控制玩家的 CameraManager。",
      "tip": "屏幕震动、镜头淡入淡出等常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "Camera",
            "zh": "镜头"
          },
          {
            "en": "Manager",
            "zh": ""
          }
        ],
        "memory": "获取玩家镜头管理器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Player=玩家 → Camera=镜头。合起来就是“获取玩家镜头管理器”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Player Camera Manager？”，试着回答：取得当前控制玩家的 CameraManager。"
      }
    },
    {
      "id": 482,
      "category": "游戏流程·存档",
      "en": "Open Level (by Name)",
      "zh": "按名称打开关卡",
      "location": "Game / Open Level (by Name)",
      "usage": "切换到指定的已配置关卡。",
      "tip": "关卡名拼写错误会导致跳转失败；优先使用可验证的引用方式。",
      "groups": [],
      "scenarios": [
        "pause-ui"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Open",
            "zh": "打开"
          },
          {
            "en": "Level",
            "zh": "关卡"
          },
          {
            "en": "by",
            "zh": "按"
          },
          {
            "en": "Name",
            "zh": "名称"
          },
          {
            "en": "",
            "zh": ""
          }
        ],
        "memory": "按名称打开关卡"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Open=打开 → Level=关卡 → by=按 → Name=名称。合起来就是“按名称打开关卡”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Open Level (by Name)？”，试着回答：切换到指定的已配置关卡。"
      }
    },
    {
      "id": 483,
      "category": "游戏流程·存档",
      "en": "Open Level (by Object Reference)",
      "zh": "按对象引用打开关卡",
      "location": "Game / Open Level (by Object Reference)",
      "usage": "用关卡资源引用切换关卡。",
      "tip": "减少关卡名字符串拼写问题。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Open",
            "zh": "打开"
          },
          {
            "en": "Level",
            "zh": "关卡"
          },
          {
            "en": "by",
            "zh": "按"
          },
          {
            "en": "Object",
            "zh": "对象"
          },
          {
            "en": "Reference",
            "zh": "引用"
          },
          {
            "en": "",
            "zh": ""
          }
        ],
        "memory": "按对象引用打开关卡"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Open=打开 → Level=关卡 → by=按 → Object=对象 → Reference=引用。合起来就是“按对象引用打开关卡”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Open Level (by Object Reference)？”，试着回答：用关卡资源引用切换关卡。"
      }
    },
    {
      "id": 484,
      "category": "游戏流程·存档",
      "en": "Get Current Level Name",
      "zh": "获取当前关卡名",
      "location": "Game / Get Current Level Name",
      "usage": "取得当前关卡名称。",
      "tip": "含拼接后缀时要按节点设置处理。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Current",
            "zh": ""
          },
          {
            "en": "Level",
            "zh": "关卡"
          },
          {
            "en": "Name",
            "zh": "名称"
          }
        ],
        "memory": "获取当前关卡名"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Level=关卡 → Name=名称。合起来就是“获取当前关卡名”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Current Level Name？”，试着回答：取得当前关卡名称。"
      }
    },
    {
      "id": 485,
      "category": "游戏流程·存档",
      "en": "Set Game Paused",
      "zh": "设置游戏暂停",
      "location": "Game / Set Game Paused",
      "usage": "暂停游戏的时间推进与部分逻辑。",
      "tip": "暂停菜单本身要保证仍能处理输入和 UI。",
      "groups": [],
      "scenarios": [
        "pause-ui"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "Paused",
            "zh": "暂停"
          }
        ],
        "memory": "设置游戏暂停"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Game=游戏 → Paused=暂停。合起来就是“设置游戏暂停”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Game Paused？”，试着回答：暂停游戏的时间推进与部分逻辑。"
      }
    },
    {
      "id": 486,
      "category": "游戏流程·存档",
      "en": "Is Game Paused",
      "zh": "游戏是否暂停",
      "location": "Game / Is Game Paused",
      "usage": "查询当前暂停状态。",
      "tip": "暂停并不自动禁止所有 Tick，要检查 Tick Even when Paused。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Game",
            "zh": "游戏"
          },
          {
            "en": "Paused",
            "zh": "暂停"
          }
        ],
        "memory": "游戏是否暂停"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Is=是否 → Game=游戏 → Paused=暂停。合起来就是“游戏是否暂停”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Is Game Paused？”，试着回答：查询当前暂停状态。"
      }
    },
    {
      "id": 487,
      "category": "游戏流程·存档",
      "en": "Restart Player",
      "zh": "重生成玩家",
      "location": "GameMode / Restart Player",
      "usage": "让指定 Player Controller 重新获得一个 Pawn。",
      "tip": "玩家死亡后重生常用；具体选择 PlayerStart 由生成规则决定。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Restart",
            "zh": ""
          },
          {
            "en": "Player",
            "zh": "玩家"
          }
        ],
        "memory": "重生成玩家"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Player=玩家。合起来就是“重生成玩家”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Restart Player？”，试着回答：让指定 Player Controller 重新获得一个 Pawn。"
      }
    },
    {
      "id": 488,
      "category": "游戏流程·存档",
      "en": "Restart Player at Player Start",
      "zh": "在 PlayerStart 重生",
      "location": "GameMode / Restart Player at Player Start",
      "usage": "在指定出生点重新生成玩家。",
      "tip": "出生点被阻挡或碰撞没设置好时会出问题。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Restart",
            "zh": ""
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "at",
            "zh": "在指定位置"
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "Start",
            "zh": ""
          }
        ],
        "memory": "在 PlayerStart 重生"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Player=玩家 → at=在指定位置 → Player=玩家。合起来就是“在 PlayerStart 重生”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Restart Player at Player Start？”，试着回答：在指定出生点重新生成玩家。"
      }
    },
    {
      "id": 489,
      "category": "游戏流程·存档",
      "en": "Find Player Start",
      "zh": "查找玩家出生点",
      "location": "GameMode / Find Player Start",
      "usage": "为玩家找到合适的 PlayerStart。",
      "tip": "多人游戏需结合排除已使用出生点等规则。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Find",
            "zh": "查找"
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "Start",
            "zh": ""
          }
        ],
        "memory": "查找玩家出生点"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Find=查找 → Player=玩家。合起来就是“查找玩家出生点”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Find Player Start？”，试着回答：为玩家找到合适的 PlayerStart。"
      }
    },
    {
      "id": 490,
      "category": "游戏流程·存档",
      "en": "Get Default Pawn Class",
      "zh": "获取默认 Pawn 类",
      "location": "GameMode / Get Default Pawn Class",
      "usage": "读取本局默认玩家 Pawn 类型。",
      "tip": "最终使用哪个类还会受 GameMode 和重生逻辑影响。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Default",
            "zh": ""
          },
          {
            "en": "Pawn",
            "zh": ""
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "获取默认 Pawn 类"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Class=类。合起来就是“获取默认 Pawn 类”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Default Pawn Class？”，试着回答：读取本局默认玩家 Pawn 类型。"
      }
    },
    {
      "id": 491,
      "category": "游戏流程·存档",
      "en": "Set Default Pawn Class",
      "zh": "设置默认 Pawn 类",
      "location": "GameMode / Class Defaults",
      "usage": "指定 GameMode 默认生成的 Pawn。",
      "tip": "通常应在 GameMode 蓝图 Class Defaults 中设置，而不是每帧改。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Set",
            "zh": "设置"
          },
          {
            "en": "Default",
            "zh": ""
          },
          {
            "en": "Pawn",
            "zh": ""
          },
          {
            "en": "Class",
            "zh": "类"
          }
        ],
        "memory": "设置默认 Pawn 类"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Set=设置 → Class=类。合起来就是“设置默认 Pawn 类”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Set Default Pawn Class？”，试着回答：指定 GameMode 默认生成的 Pawn。"
      }
    },
    {
      "id": 492,
      "category": "游戏流程·存档",
      "en": "Quit Game",
      "zh": "退出游戏",
      "location": "Game / Quit Game",
      "usage": "结束当前游戏进程。",
      "tip": "打包编辑器版本与正式包表现可能不同。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Quit",
            "zh": ""
          },
          {
            "en": "Game",
            "zh": "游戏"
          }
        ],
        "memory": "退出游戏"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Game=游戏。合起来就是“退出游戏”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Quit Game？”，试着回答：结束当前游戏进程。"
      }
    },
    {
      "id": 493,
      "category": "游戏流程·存档",
      "en": "Execute Console Command",
      "zh": "执行控制台命令",
      "location": "Game / Execute Console Command",
      "usage": "运行 Engine 的控制台命令。",
      "tip": "正式发布包通常不允许随意执行，注意安全与兼容。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Execute",
            "zh": ""
          },
          {
            "en": "Console",
            "zh": ""
          },
          {
            "en": "Command",
            "zh": ""
          }
        ],
        "memory": "执行控制台命令"
      },
      "memoryAid": {
        "association": "把「Execute Console Command」想成游戏的存档抽屉和书签里的一个工具，它负责“执行控制台命令”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Execute Console Command？”，试着回答：运行 Engine 的控制台命令。"
      }
    },
    {
      "id": 494,
      "category": "游戏流程·存档",
      "en": "Seed Random Stream",
      "zh": "设置随机种子",
      "location": "Math / Random / Seed Random Stream",
      "usage": "让随机流按固定种子可复现。",
      "tip": "调试随机掉落或关卡生成时很有用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Seed",
            "zh": ""
          },
          {
            "en": "Random",
            "zh": "随机"
          },
          {
            "en": "Stream",
            "zh": ""
          }
        ],
        "memory": "设置随机种子"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Random=随机。合起来就是“设置随机种子”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Seed Random Stream？”，试着回答：让随机流按固定种子可复现。"
      }
    },
    {
      "id": 495,
      "category": "游戏流程·存档",
      "en": "Random Stream",
      "zh": "随机流结构",
      "location": "Math / Random / RandomStream",
      "usage": "保存独立的随机序列状态。",
      "tip": "多个系统共用随机源会让结果互相影响。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Random",
            "zh": "随机"
          },
          {
            "en": "Stream",
            "zh": ""
          }
        ],
        "memory": "随机流结构"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Random=随机。合起来就是“随机流结构”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Random Stream？”，试着回答：保存独立的随机序列状态。"
      }
    },
    {
      "id": 496,
      "category": "游戏流程·存档",
      "en": "Enable HUD",
      "zh": "启用 HUD",
      "location": "HUD / Enable HUD",
      "usage": "让指定玩家显示 HUD。",
      "tip": "UMG 项目不一定使用传统 HUD 类。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Enable",
            "zh": ""
          },
          {
            "en": "HUD",
            "zh": ""
          }
        ],
        "memory": "启用 HUD"
      },
      "memoryAid": {
        "association": "把「Enable HUD」想成游戏的存档抽屉和书签里的一个工具，它负责“启用 HUD”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Enable HUD？”，试着回答：让指定玩家显示 HUD。"
      }
    },
    {
      "id": 497,
      "category": "游戏流程·存档",
      "en": "Show Mouse Cursor",
      "zh": "显示鼠标光标",
      "location": "Player Controller / Set Show Mouse Cursor",
      "usage": "启用或关闭玩家鼠标光标。",
      "tip": "打开菜单时设置 True，返回游戏时设 False。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Show",
            "zh": "显示"
          },
          {
            "en": "Mouse",
            "zh": "鼠标"
          },
          {
            "en": "Cursor",
            "zh": ""
          }
        ],
        "memory": "显示鼠标光标"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Show=显示 → Mouse=鼠标。合起来就是“显示鼠标光标”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Show Mouse Cursor？”，试着回答：启用或关闭玩家鼠标光标。"
      }
    },
    {
      "id": 498,
      "category": "游戏流程·存档",
      "en": "Travel Map",
      "zh": "切换地图",
      "location": "Game / Open Level",
      "usage": "让玩家进入另一个关卡。",
      "tip": "会重建大部分世界对象；跨关卡数据放 GameInstance 或 SaveGame。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Travel",
            "zh": ""
          },
          {
            "en": "Map",
            "zh": "映射表"
          }
        ],
        "memory": "切换地图"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Map=映射表。合起来就是“切换地图”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Travel Map？”，试着回答：让玩家进入另一个关卡。"
      }
    },
    {
      "id": 499,
      "category": "游戏流程·存档",
      "en": "Seamless Travel",
      "zh": "无缝切换地图",
      "location": "Game / Server Travel",
      "usage": "在联网游戏中切换地图并尽量保留连接。",
      "tip": "需要正确处理过渡地图与玩家迁移。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Seamless",
            "zh": ""
          },
          {
            "en": "Travel",
            "zh": ""
          }
        ],
        "memory": "无缝切换地图"
      },
      "memoryAid": {
        "association": "把「Seamless Travel」想成游戏的存档抽屉和书签里的一个工具，它负责“无缝切换地图”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Seamless Travel？”，试着回答：在联网游戏中切换地图并尽量保留连接。"
      }
    },
    {
      "id": 500,
      "category": "游戏流程·存档",
      "en": "Get World",
      "zh": "获取世界对象",
      "location": "World / Get World",
      "usage": "取得运行中世界，用于时间、生成、查询等。",
      "tip": "获取 World 后再访问其子系统与时序信息。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "World",
            "zh": "世界"
          }
        ],
        "memory": "获取世界对象"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → World=世界。合起来就是“获取世界对象”。",
        "method": "先想当前流程状态，再想跨关卡是否要保留。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get World？”，试着回答：取得运行中世界，用于时间、生成、查询等。"
      }
    },
    {
      "id": 501,
      "category": "联网",
      "en": "Replicates",
      "zh": "是否复制",
      "location": "Variable Details / Replication",
      "usage": "让变量值从服务器同步到客户端。",
      "tip": "不是所有客户端修改都会自动回传服务器。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Replicates」想成服务器广播站里的一个工具，它负责“是否复制”。",
        "method": "先判断权威端，再想谁需要收到结果。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Replicates？”，试着回答：让变量值从服务器同步到客户端。"
      }
    },
    {
      "id": 502,
      "category": "联网",
      "en": "Replicated",
      "zh": "复制变量标记",
      "location": "Variable Details / Replication",
      "usage": "变量在网络上同步。",
      "tip": "需要在类或变量设置里正确启用。",
      "groups": [
        "network"
      ],
      "scenarios": [
        "network-fire"
      ],
      "phrase": null,
      "memoryAid": {
        "association": "Replicated 像服务器把最新状态抄送一份给客户端。",
        "method": "先判断权威端，再想谁需要收到结果。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Replicated？”，试着回答：变量在网络上同步。"
      }
    },
    {
      "id": 503,
      "category": "联网",
      "en": "Replicated Using",
      "zh": "复制时回调",
      "location": "Variable Details / Replication",
      "usage": "变量值同步到客户端时触发 RepNotify。",
      "tip": "用于让 UI 或动画响应网络值变化。",
      "groups": [
        "network"
      ],
      "scenarios": [
        "network-fire"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Replicated",
            "zh": ""
          },
          {
            "en": "Using",
            "zh": "使用"
          }
        ],
        "memory": "复制时回调"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Using=使用。合起来就是“复制时回调”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Replicated Using？”，试着回答：变量值同步到客户端时触发 RepNotify。"
      }
    },
    {
      "id": 504,
      "category": "联网",
      "en": "RepNotify",
      "zh": "复制通知",
      "location": "Function / OnRep_",
      "usage": "网络复制变量更新后调用的函数。",
      "tip": "本地每帧改值不等于服务器复制；先判断权限。",
      "groups": [
        "network"
      ],
      "scenarios": [
        "network-fire"
      ],
      "phrase": null,
      "memoryAid": {
        "association": "把「RepNotify」想成服务器广播站里的一个工具，它负责“复制通知”。",
        "method": "先判断权威端，再想谁需要收到结果。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 RepNotify？”，试着回答：网络复制变量更新后调用的函数。"
      }
    },
    {
      "id": 505,
      "category": "联网",
      "en": "On Rep",
      "zh": "复制回调",
      "location": "Function Details / Replication",
      "usage": "声明变量同步后调用该函数。",
      "tip": "常用于同步血量显示、开火特效等。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "On",
            "zh": "在……时"
          },
          {
            "en": "Rep",
            "zh": ""
          }
        ],
        "memory": "复制回调"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：On=在……时。合起来就是“复制回调”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 On Rep？”，试着回答：声明变量同步后调用该函数。"
      }
    },
    {
      "id": 506,
      "category": "联网",
      "en": "Has Authority",
      "zh": "是否有权威权限",
      "location": "Actor / Has Authority",
      "usage": "判断当前执行端是否拥有这份对象的服务器权威。",
      "tip": "关键状态改值通常应放在权威端。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Has",
            "zh": "拥有"
          },
          {
            "en": "Authority",
            "zh": ""
          }
        ],
        "memory": "是否有权威权限"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Has=拥有。合起来就是“是否有权威权限”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Has Authority？”，试着回答：判断当前执行端是否拥有这份对象的服务器权威。"
      }
    },
    {
      "id": 507,
      "category": "联网",
      "en": "Is Locally Controlled",
      "zh": "是否本地控制",
      "location": "Pawn / Is Locally Controlled",
      "usage": "判断 Pawn 是否由本机玩家控制。",
      "tip": "处理本地输入、镜头和预测时常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Locally",
            "zh": ""
          },
          {
            "en": "Controlled",
            "zh": ""
          }
        ],
        "memory": "是否本地控制"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Is=是否。合起来就是“是否本地控制”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Is Locally Controlled？”，试着回答：判断 Pawn 是否由本机玩家控制。"
      }
    },
    {
      "id": 508,
      "category": "联网",
      "en": "Switch Has Authority",
      "zh": "根据权限分支",
      "location": "Network / Switch Has Authority",
      "usage": "自动把 Authority 与 Remote 两种情况分开。",
      "tip": "优先用这个节点减少手写 Branch。",
      "groups": [
        "network"
      ],
      "scenarios": [
        "network-fire"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Switch",
            "zh": "分支"
          },
          {
            "en": "Has",
            "zh": "是否拥有"
          },
          {
            "en": "Authority",
            "zh": "权威权限"
          }
        ],
        "memory": "根据权限分支"
      },
      "memoryAid": {
        "association": "Switch Has Authority 是路口检查“我在服务器还是客户端”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Switch Has Authority？”，试着回答：自动把 Authority 与 Remote 两种情况分开。"
      }
    },
    {
      "id": 509,
      "category": "联网",
      "en": "Server",
      "zh": "服务器事件",
      "location": "Custom Event / Replication / Run on Server",
      "usage": "客户端调用后，在服务器端执行事件。",
      "tip": "Server RPC 不能由客户端伪造信任；关键规则仍要在服务器校验。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Server」想成服务器广播站里的一个工具，它负责“服务器事件”。",
        "method": "先判断权威端，再想谁需要收到结果。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Server？”，试着回答：客户端调用后，在服务器端执行事件。"
      }
    },
    {
      "id": 510,
      "category": "联网",
      "en": "Client",
      "zh": "客户端事件",
      "location": "Custom Event / Replication / Run on Owning Client",
      "usage": "服务器通知拥有该对象的客户端执行。",
      "tip": "通常用于只在目标客户端出现的 UI、声音或提示。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Client」想成服务器广播站里的一个工具，它负责“客户端事件”。",
        "method": "先判断权威端，再想谁需要收到结果。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Client？”，试着回答：服务器通知拥有该对象的客户端执行。"
      }
    },
    {
      "id": 511,
      "category": "联网",
      "en": "Multicast",
      "zh": "多播事件",
      "location": "Custom Event / Replication / Multicast",
      "usage": "让相关客户端共同执行一个事件。",
      "tip": "适合大家都能看到的开火、爆炸等表现。",
      "groups": [
        "network"
      ],
      "scenarios": [
        "network-fire"
      ],
      "phrase": null,
      "memoryAid": {
        "association": "Multicast 像广播站，同一个事件同时通知所有相关客户端。",
        "method": "先判断权威端，再想谁需要收到结果。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Multicast？”，试着回答：让相关客户端共同执行一个事件。"
      }
    },
    {
      "id": 512,
      "category": "联网",
      "en": "Run on Server",
      "zh": "在服务器执行",
      "location": "Replication dropdown",
      "usage": "指定该自定义事件由服务器执行。",
      "tip": "需要有有效 RPC 条件与权限。",
      "groups": [
        "network"
      ],
      "scenarios": [
        "network-fire"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Run",
            "zh": "运行"
          },
          {
            "en": "on",
            "zh": ""
          },
          {
            "en": "Server",
            "zh": ""
          }
        ],
        "memory": "在服务器执行"
      },
      "memoryAid": {
        "association": "Run on Server 是客户端给服务器递申请，最终决定权在服务器。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Run on Server？”，试着回答：指定该自定义事件由服务器执行。"
      }
    },
    {
      "id": 513,
      "category": "联网",
      "en": "Run on Owning Client",
      "zh": "在拥有客户端执行",
      "location": "Replication dropdown",
      "usage": "指定仅在拥有该 Actor 的客户端执行。",
      "tip": "“所有客户端”要用 Multicast。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Run",
            "zh": "运行"
          },
          {
            "en": "on",
            "zh": ""
          },
          {
            "en": "Owning",
            "zh": ""
          },
          {
            "en": "Client",
            "zh": ""
          }
        ],
        "memory": "在拥有客户端执行"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Run=运行。合起来就是“在拥有客户端执行”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Run on Owning Client？”，试着回答：指定仅在拥有该 Actor 的客户端执行。"
      }
    },
    {
      "id": 514,
      "category": "联网",
      "en": "Net Multicast",
      "zh": "网络多播",
      "location": "Replication dropdown",
      "usage": "把事件发给相关客户端。",
      "tip": "多播不一定适合每个本地都能算的纯视觉结果。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Net",
            "zh": ""
          },
          {
            "en": "Multicast",
            "zh": ""
          }
        ],
        "memory": "网络多播"
      },
      "memoryAid": {
        "association": "把「Net Multicast」想成服务器广播站里的一个工具，它负责“网络多播”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Net Multicast？”，试着回答：把事件发给相关客户端。"
      }
    },
    {
      "id": 515,
      "category": "联网",
      "en": "Replicating Movement",
      "zh": "复制移动",
      "location": "Component / Movement Replication",
      "usage": "让角色或移动组件的位移同步到网络客户端。",
      "tip": "Character Movement 已有专用复制逻辑，勿重复实现。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Replicating",
            "zh": ""
          },
          {
            "en": "Movement",
            "zh": "移动"
          }
        ],
        "memory": "复制移动"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Movement=移动。合起来就是“复制移动”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Replicating Movement？”，试着回答：让角色或移动组件的位移同步到网络客户端。"
      }
    },
    {
      "id": 516,
      "category": "联网",
      "en": "Net Update Frequency",
      "zh": "网络更新频率",
      "location": "Actor / Replication",
      "usage": "控制网络相关状态更新频率。",
      "tip": "提高会增加带宽；不必要的高频更新会造成开销。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Net",
            "zh": ""
          },
          {
            "en": "Update",
            "zh": ""
          },
          {
            "en": "Frequency",
            "zh": ""
          }
        ],
        "memory": "网络更新频率"
      },
      "memoryAid": {
        "association": "把「Net Update Frequency」想成服务器广播站里的一个工具，它负责“网络更新频率”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Net Update Frequency？”，试着回答：控制网络相关状态更新频率。"
      }
    },
    {
      "id": 517,
      "category": "联网",
      "en": "Net Priority",
      "zh": "网络优先级",
      "location": "Actor / Replication",
      "usage": "在网络拥塞时决定 Actor 更新的重要程度。",
      "tip": "玩家角色通常比远处装饰对象更重要。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Net",
            "zh": ""
          },
          {
            "en": "Priority",
            "zh": ""
          }
        ],
        "memory": "网络优先级"
      },
      "memoryAid": {
        "association": "把「Net Priority」想成服务器广播站里的一个工具，它负责“网络优先级”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Net Priority？”，试着回答：在网络拥塞时决定 Actor 更新的重要程度。"
      }
    },
    {
      "id": 518,
      "category": "联网",
      "en": "Only Relevant to Owner",
      "zh": "仅与拥有者相关",
      "location": "Actor / Replication",
      "usage": "只在拥有者客户端保留相关性。",
      "tip": "适用于仅拥有者需要看到的个人对象。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Only",
            "zh": "仅"
          },
          {
            "en": "Relevant",
            "zh": ""
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "Owner",
            "zh": ""
          }
        ],
        "memory": "仅与拥有者相关"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Only=仅 → to=到。合起来就是“仅与拥有者相关”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Only Relevant to Owner？”，试着回答：只在拥有者客户端保留相关性。"
      }
    },
    {
      "id": 519,
      "category": "联网",
      "en": "Get Net Mode",
      "zh": "获取网络模式",
      "location": "Network / Get Net Mode",
      "usage": "判断当前运行环境是单机、专用服务器还是客户端。",
      "tip": "常用于避免服务器创建 UI 或客户端生成权威对象。",
      "groups": [
        "network"
      ],
      "scenarios": [
        "network-fire"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Net",
            "zh": ""
          },
          {
            "en": "Mode",
            "zh": "模式"
          }
        ],
        "memory": "获取网络模式"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Mode=模式。合起来就是“获取网络模式”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Net Mode？”，试着回答：判断当前运行环境是单机、专用服务器还是客户端。"
      }
    },
    {
      "id": 520,
      "category": "联网",
      "en": "Is Server",
      "zh": "是否为服务器",
      "location": "Network / Is Server",
      "usage": "判断当前端是否服务器。",
      "tip": "与 Has Authority 在 Actor 上下文的含义要区分。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Server",
            "zh": ""
          }
        ],
        "memory": "是否为服务器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Is=是否。合起来就是“是否为服务器”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Is Server？”，试着回答：判断当前端是否服务器。"
      }
    },
    {
      "id": 521,
      "category": "联网",
      "en": "Is Standalone",
      "zh": "是否单机模式",
      "location": "Network / Is Standalone",
      "usage": "判断是否非联网单机模式。",
      "tip": "本地测试和打包服务器测试结果可能不同。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Is",
            "zh": "是否"
          },
          {
            "en": "Standalone",
            "zh": ""
          }
        ],
        "memory": "是否单机模式"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Is=是否。合起来就是“是否单机模式”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Is Standalone？”，试着回答：判断是否非联网单机模式。"
      }
    },
    {
      "id": 522,
      "category": "联网",
      "en": "Get Player Controller (by Index)",
      "zh": "按索引获取玩家控制器",
      "location": "Player / Get Player Controller",
      "usage": "取得指定玩家索引的 Controller。",
      "tip": "索引 0 通常指第一个本地玩家，但多人场景要确认。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Player",
            "zh": "玩家"
          },
          {
            "en": "Controller",
            "zh": "控制器"
          },
          {
            "en": "by",
            "zh": "按"
          },
          {
            "en": "Index",
            "zh": "索引"
          },
          {
            "en": "",
            "zh": ""
          }
        ],
        "memory": "按索引获取玩家控制器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Player=玩家 → Controller=控制器 → by=按 → Index=索引。合起来就是“按索引获取玩家控制器”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Player Controller (by Index)？”，试着回答：取得指定玩家索引的 Controller。"
      }
    },
    {
      "id": 523,
      "category": "联网",
      "en": "Owning Player",
      "zh": "拥有玩家",
      "location": "Widget / Get Owning Player",
      "usage": "获取 UI 对应的玩家控制器。",
      "tip": "UI 里的玩家相关操作常从它开始。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Owning",
            "zh": ""
          },
          {
            "en": "Player",
            "zh": "玩家"
          }
        ],
        "memory": "拥有玩家"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Player=玩家。合起来就是“拥有玩家”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Owning Player？”，试着回答：获取 UI 对应的玩家控制器。"
      }
    },
    {
      "id": 524,
      "category": "联网",
      "en": "Replicate Movement",
      "zh": "复制移动状态",
      "location": "Actor / Replication",
      "usage": "开启对象位置、旋转、速度的同步。",
      "tip": "物理复制和普通 Transform 复制要明确选择。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Replicate",
            "zh": ""
          },
          {
            "en": "Movement",
            "zh": "移动"
          }
        ],
        "memory": "复制移动状态"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Movement=移动。合起来就是“复制移动状态”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Replicate Movement？”，试着回答：开启对象位置、旋转、速度的同步。"
      }
    },
    {
      "id": 525,
      "category": "联网",
      "en": "Rep Movement",
      "zh": "复制移动设置",
      "location": "Movement Component / Replication",
      "usage": "配置速度、旋转等移动同步细节。",
      "tip": "角色网络移动不要轻易与 CharacterMovement 自定义同步并冲突。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Rep",
            "zh": ""
          },
          {
            "en": "Movement",
            "zh": "移动"
          }
        ],
        "memory": "复制移动设置"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Movement=移动。合起来就是“复制移动设置”。",
        "method": "先判断权威端，再想谁需要收到结果。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Rep Movement？”，试着回答：配置速度、旋转等移动同步细节。"
      }
    },
    {
      "id": 526,
      "category": "数据表与资源",
      "en": "Data Table",
      "zh": "数据表",
      "location": "Content Browser / Add / Miscellaneous / Data Table",
      "usage": "用行结构保存大量配置数据。",
      "tip": "必须先设计 Row Structure，再填每一行。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Data",
            "zh": "数据"
          },
          {
            "en": "Table",
            "zh": "表"
          }
        ],
        "memory": "数据表"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Data=数据 → Table=表。合起来就是“数据表”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Data Table？”，试着回答：用行结构保存大量配置数据。"
      }
    },
    {
      "id": 527,
      "category": "数据表与资源",
      "en": "Data Table Row Handle",
      "zh": "数据表行句柄",
      "location": "Variable Type / Data Table Row Handle",
      "usage": "引用某个数据表中的一行。",
      "tip": "便于在蓝图里配置表与行的组合。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Data",
            "zh": "数据"
          },
          {
            "en": "Table",
            "zh": "表"
          },
          {
            "en": "Row",
            "zh": ""
          },
          {
            "en": "Handle",
            "zh": "句柄"
          }
        ],
        "memory": "数据表行句柄"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Data=数据 → Table=表 → Handle=句柄。合起来就是“数据表行句柄”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Data Table Row Handle？”，试着回答：引用某个数据表中的一行。"
      }
    },
    {
      "id": 528,
      "category": "数据表与资源",
      "en": "Get Data Table Row",
      "zh": "获取数据表行",
      "location": "Data Table / Get Data Table Row",
      "usage": "按行名取得整行结构。",
      "tip": "检查 Row Found；行名拼错会导致数据无效。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Get",
            "zh": "获取"
          },
          {
            "en": "Data",
            "zh": "数据"
          },
          {
            "en": "Table",
            "zh": "表"
          },
          {
            "en": "Row",
            "zh": ""
          }
        ],
        "memory": "获取数据表行"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Get=获取 → Data=数据 → Table=表。合起来就是“获取数据表行”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Get Data Table Row？”，试着回答：按行名取得整行结构。"
      }
    },
    {
      "id": 529,
      "category": "数据表与资源",
      "en": "Find Data Table Row",
      "zh": "查找数据表行",
      "location": "Data Table / Find Data Table Row",
      "usage": "查找指定行并返回是否成功。",
      "tip": "比只 Get 更适合需要确认结果的数据配置。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Find",
            "zh": "查找"
          },
          {
            "en": "Data",
            "zh": "数据"
          },
          {
            "en": "Table",
            "zh": "表"
          },
          {
            "en": "Row",
            "zh": ""
          }
        ],
        "memory": "查找数据表行"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Find=查找 → Data=数据 → Table=表。合起来就是“查找数据表行”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Find Data Table Row？”，试着回答：查找指定行并返回是否成功。"
      }
    },
    {
      "id": 530,
      "category": "数据表与资源",
      "en": "Make Data Table Row Handle",
      "zh": "创建数据表行句柄",
      "location": "Data Table / Make Data Table Row Handle",
      "usage": "把 Data Table 与 Row Name 组合成句柄。",
      "tip": "句柄可存成变量，之后交给取行节点。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Make",
            "zh": "创建"
          },
          {
            "en": "Data",
            "zh": "数据"
          },
          {
            "en": "Table",
            "zh": "表"
          },
          {
            "en": "Row",
            "zh": ""
          },
          {
            "en": "Handle",
            "zh": "句柄"
          }
        ],
        "memory": "创建数据表行句柄"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Make=创建 → Data=数据 → Table=表 → Handle=句柄。合起来就是“创建数据表行句柄”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Make Data Table Row Handle？”，试着回答：把 Data Table 与 Row Name 组合成句柄。"
      }
    },
    {
      "id": 531,
      "category": "数据表与资源",
      "en": "CSV",
      "zh": "逗号分隔文本",
      "location": "Content Browser / Data Table import",
      "usage": "常见的数据表导入格式。",
      "tip": "列名必须与结构字段一致，编码与分隔符要正确。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「CSV」想成仓库货架和配置表里的一个工具，它负责“逗号分隔文本”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 CSV？”，试着回答：常见的数据表导入格式。"
      }
    },
    {
      "id": 532,
      "category": "数据表与资源",
      "en": "Import from CSV",
      "zh": "从 CSV 导入",
      "location": "Data Table asset / Reimport",
      "usage": "把表格数据导入 Data Table。",
      "tip": "结构字段改名后旧 CSV 需要用新列名重新导入。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Import",
            "zh": ""
          },
          {
            "en": "from",
            "zh": "从"
          },
          {
            "en": "CSV",
            "zh": ""
          }
        ],
        "memory": "从 CSV 导入"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：from=从。合起来就是“从 CSV 导入”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Import from CSV？”，试着回答：把表格数据导入 Data Table。"
      }
    },
    {
      "id": 533,
      "category": "数据表与资源",
      "en": "Data Asset",
      "zh": "数据资产",
      "location": "Content Browser / Add / Miscellaneous / Data Asset",
      "usage": "用资产形式保存一组配置。",
      "tip": "比散落变量更容易在多个关卡和蓝图中复用。",
      "groups": [],
      "scenarios": [
        "save-load"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Data",
            "zh": "数据"
          },
          {
            "en": "Asset",
            "zh": "资产"
          }
        ],
        "memory": "数据资产"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Data=数据 → Asset=资产。合起来就是“数据资产”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Data Asset？”，试着回答：用资产形式保存一组配置。"
      }
    },
    {
      "id": 534,
      "category": "数据表与资源",
      "en": "Primary Data Asset",
      "zh": "主数据资产",
      "location": "Content Browser / Add / Miscellaneous / Data Asset",
      "usage": "支持资产管理器注册与异步加载的数据资产。",
      "tip": "做模块化资源目录时常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Primary",
            "zh": ""
          },
          {
            "en": "Data",
            "zh": "数据"
          },
          {
            "en": "Asset",
            "zh": "资产"
          }
        ],
        "memory": "主数据资产"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Data=数据 → Asset=资产。合起来就是“主数据资产”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Primary Data Asset？”，试着回答：支持资产管理器注册与异步加载的数据资产。"
      }
    },
    {
      "id": 535,
      "category": "数据表与资源",
      "en": "Asset Manager",
      "zh": "资产管理器",
      "location": "Engine subsystem / Asset Manager",
      "usage": "按 Asset ID 管理并加载资源。",
      "tip": "加载是异步的，要处理后完成回调。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Asset",
            "zh": "资产"
          },
          {
            "en": "Manager",
            "zh": ""
          }
        ],
        "memory": "资产管理器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Asset=资产。合起来就是“资产管理器”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Asset Manager？”，试着回答：按 Asset ID 管理并加载资源。"
      }
    },
    {
      "id": 536,
      "category": "数据表与资源",
      "en": "Async Load Asset",
      "zh": "异步加载资源",
      "location": "Asset Manager / Async Load Asset",
      "usage": "后台加载资源，完成后回调。",
      "tip": "不要在每帧重复发起同一个加载。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Async",
            "zh": ""
          },
          {
            "en": "Load",
            "zh": ""
          },
          {
            "en": "Asset",
            "zh": "资产"
          }
        ],
        "memory": "异步加载资源"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Asset=资产。合起来就是“异步加载资源”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Async Load Asset？”，试着回答：后台加载资源，完成后回调。"
      }
    },
    {
      "id": 537,
      "category": "数据表与资源",
      "en": "Load Asset",
      "zh": "同步加载资源",
      "location": "Asset Manager / Load Asset",
      "usage": "立即加载并返回资源。",
      "tip": "大量同步加载可能造成卡顿，优先异步加载。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Load",
            "zh": ""
          },
          {
            "en": "Asset",
            "zh": "资产"
          }
        ],
        "memory": "同步加载资源"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Asset=资产。合起来就是“同步加载资源”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Load Asset？”，试着回答：立即加载并返回资源。"
      }
    },
    {
      "id": 538,
      "category": "数据表与资源",
      "en": "Static Mesh",
      "zh": "静态网格资源",
      "location": "Variable Type / Static Mesh",
      "usage": "可显示并可带碰撞的静态模型资源。",
      "tip": "Static Mesh 是资源；Actor/Component 是世界里的实例。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Static",
            "zh": ""
          },
          {
            "en": "Mesh",
            "zh": "网格"
          }
        ],
        "memory": "静态网格资源"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Mesh=网格。合起来就是“静态网格资源”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Static Mesh？”，试着回答：可显示并可带碰撞的静态模型资源。"
      }
    },
    {
      "id": 539,
      "category": "数据表与资源",
      "en": "Skeletal Mesh",
      "zh": "骨骼网格资源",
      "location": "Variable Type / Skeletal Mesh",
      "usage": "可被骨骼和动画驱动的模型资源。",
      "tip": "需要 Skeleton 和 Anim Blueprint 配合。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Skeletal",
            "zh": ""
          },
          {
            "en": "Mesh",
            "zh": "网格"
          }
        ],
        "memory": "骨骼网格资源"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Mesh=网格。合起来就是“骨骼网格资源”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Skeletal Mesh？”，试着回答：可被骨骼和动画驱动的模型资源。"
      }
    },
    {
      "id": 540,
      "category": "数据表与资源",
      "en": "Material Interface",
      "zh": "材质接口资源",
      "location": "Variable Type / Material Interface",
      "usage": "材质与材质实例的共同资源类型。",
      "tip": "给组件设置材质时优先用这个通用类型。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Material",
            "zh": "材质"
          },
          {
            "en": "Interface",
            "zh": "接口"
          }
        ],
        "memory": "材质接口资源"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Material=材质 → Interface=接口。合起来就是“材质接口资源”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Material Interface？”，试着回答：材质与材质实例的共同资源类型。"
      }
    },
    {
      "id": 541,
      "category": "数据表与资源",
      "en": "Texture2D",
      "zh": "二维纹理资源",
      "location": "Variable Type / Texture2D",
      "usage": "UI 图片和材质常用的二维图像。",
      "tip": "图片大小和压缩模式会影响内存与显示。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Texture2D」想成仓库货架和配置表里的一个工具，它负责“二维纹理资源”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Texture2D？”，试着回答：UI 图片和材质常用的二维图像。"
      }
    },
    {
      "id": 542,
      "category": "数据表与资源",
      "en": "SoundBase",
      "zh": "声音基础资源",
      "location": "Variable Type / Sound Base",
      "usage": "可传给音频组件的声音资源类型。",
      "tip": "不同声音资产构建方式有共同基类含义。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「SoundBase」想成仓库货架和配置表里的一个工具，它负责“声音基础资源”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 SoundBase？”，试着回答：可传给音频组件的声音资源类型。"
      }
    },
    {
      "id": 543,
      "category": "数据表与资源",
      "en": "String Table",
      "zh": "字符串表",
      "location": "Localization / String Table",
      "usage": "集中管理可本地化文本。",
      "tip": "避免把玩家文本硬编码在多个蓝图里。",
      "groups": [],
      "scenarios": [
        "save-load"
      ],
      "phrase": {
        "parts": [
          {
            "en": "String",
            "zh": "字符串"
          },
          {
            "en": "Table",
            "zh": "表"
          }
        ],
        "memory": "字符串表"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：String=字符串 → Table=表。合起来就是“字符串表”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 String Table？”，试着回答：集中管理可本地化文本。"
      }
    },
    {
      "id": 544,
      "category": "数据表与资源",
      "en": "Format Text",
      "zh": "格式化文本",
      "location": "Text / Format Text",
      "usage": "把多个值替换到带占位符的文本中。",
      "tip": "UI 里比 String Append 更适合本地化。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Format",
            "zh": "格式化"
          },
          {
            "en": "Text",
            "zh": "文本"
          }
        ],
        "memory": "格式化文本"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Format=格式化 → Text=文本。合起来就是“格式化文本”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Format Text？”，试着回答：把多个值替换到带占位符的文本中。"
      }
    },
    {
      "id": 545,
      "category": "数据表与资源",
      "en": "Text to String",
      "zh": "文本转字符串",
      "location": "Text / To String",
      "usage": "把 Text 转回 String。",
      "tip": "会丢失部分本地化语义；仅在 API 需要 String 时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Text",
            "zh": "文本"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "String",
            "zh": "字符串"
          }
        ],
        "memory": "文本转字符串"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Text=文本 → to=到 → String=字符串。合起来就是“文本转字符串”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Text to String？”，试着回答：把 Text 转回 String。"
      }
    },
    {
      "id": 546,
      "category": "数据表与资源",
      "en": "Class",
      "zh": "类引用类型",
      "location": "Variable Type / Class",
      "usage": "描述一种对象类型。",
      "tip": "实例是可操作对象，类是可生成类型的模板。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Class」想成仓库货架和配置表里的一个工具，它负责“类引用类型”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Class？”，试着回答：描述一种对象类型。"
      }
    },
    {
      "id": 547,
      "category": "数据表与资源",
      "en": "Soft Reference Pin",
      "zh": "软引用输入",
      "location": "Object/Class pins",
      "usage": "按需引用资源而不是强加载。",
      "tip": "需要显式 Load Asset 才能变成可用的强引用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Soft",
            "zh": ""
          },
          {
            "en": "Reference",
            "zh": "引用"
          },
          {
            "en": "Pin",
            "zh": ""
          }
        ],
        "memory": "软引用输入"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Reference=引用。合起来就是“软引用输入”。",
        "method": "先想数据放在哪里，再想运行时如何读取。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Soft Reference Pin？”，试着回答：按需引用资源而不是强加载。"
      }
    },
    {
      "id": 548,
      "category": "调试与运行",
      "en": "Print String",
      "zh": "打印字符串",
      "location": "Utilities / String / Print String",
      "usage": "在屏幕和输出日志显示调试信息。",
      "tip": "开发时用，正式发布前考虑减少或关闭。",
      "groups": [
        "debug"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Print",
            "zh": ""
          },
          {
            "en": "String",
            "zh": "字符串"
          }
        ],
        "memory": "打印字符串"
      },
      "memoryAid": {
        "association": "Print String 是在画面和日志上贴一张即时便签。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Print String？”，试着回答：在屏幕和输出日志显示调试信息。"
      }
    },
    {
      "id": 549,
      "category": "调试与运行",
      "en": "Print Text",
      "zh": "打印文本",
      "location": "Utilities / String / Print Text",
      "usage": "打印本地化 Text 调试信息。",
      "tip": "中文字符显示异常时检查字体和编码设置。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Print",
            "zh": ""
          },
          {
            "en": "Text",
            "zh": "文本"
          }
        ],
        "memory": "打印文本"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Text=文本。合起来就是“打印文本”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Print Text？”，试着回答：打印本地化 Text 调试信息。"
      }
    },
    {
      "id": 550,
      "category": "调试与运行",
      "en": "Breakpoint",
      "zh": "断点",
      "location": "Blueprint graph / F9 or right-click",
      "usage": "让执行在指定节点暂停，便于检查变量。",
      "tip": "先运行 PIE，出问题再在可疑节点前设断点。",
      "groups": [
        "debug"
      ],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "Breakpoint 是给执行线放一个暂停按钮，让你停下来检查。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Breakpoint？”，试着回答：让执行在指定节点暂停，便于检查变量。"
      }
    },
    {
      "id": 551,
      "category": "调试与运行",
      "en": "Watch Value",
      "zh": "监视值",
      "location": "Blueprint Debugger / Watched Values",
      "usage": "持续查看某个变量当前值。",
      "tip": "可帮助确认 Tick 中变量是否变化。",
      "groups": [
        "debug"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Watch",
            "zh": ""
          },
          {
            "en": "Value",
            "zh": "值"
          }
        ],
        "memory": "监视值"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Value=值。合起来就是“监视值”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Watch Value？”，试着回答：持续查看某个变量当前值。"
      }
    },
    {
      "id": 552,
      "category": "调试与运行",
      "en": "Blueprint Debugger",
      "zh": "蓝图调试器",
      "location": "Debug / Blueprint Debugger",
      "usage": "暂停时查看执行位置、调用栈和变量。",
      "tip": "遇到分支不按时，先看实际执行了哪条白线。",
      "groups": [
        "debug"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Blueprint",
            "zh": "蓝图"
          },
          {
            "en": "Debugger",
            "zh": ""
          }
        ],
        "memory": "蓝图调试器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Blueprint=蓝图。合起来就是“蓝图调试器”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Blueprint Debugger？”，试着回答：暂停时查看执行位置、调用栈和变量。"
      }
    },
    {
      "id": 553,
      "category": "调试与运行",
      "en": "Execution Flow",
      "zh": "执行流",
      "location": "Debug / Execution Flow",
      "usage": "显示事件执行顺序与耗时热点。",
      "tip": "用于识别 Tick 中重复或昂贵节点。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Execution",
            "zh": ""
          },
          {
            "en": "Flow",
            "zh": ""
          }
        ],
        "memory": "执行流"
      },
      "memoryAid": {
        "association": "把「Execution Flow」想成监控屏幕和放大镜里的一个工具，它负责“执行流”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Execution Flow？”，试着回答：显示事件执行顺序与耗时热点。"
      }
    },
    {
      "id": 554,
      "category": "调试与运行",
      "en": "Show Debug Line",
      "zh": "绘制调试线",
      "location": "Debug / Draw Debug Line",
      "usage": "在世界中画一条临时的彩色线。",
      "tip": "常用来看射线、方向和距离，正式发布前清理。",
      "groups": [
        "debug"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Show",
            "zh": "显示"
          },
          {
            "en": "Debug",
            "zh": ""
          },
          {
            "en": "Line",
            "zh": "射线"
          }
        ],
        "memory": "绘制调试线"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Show=显示 → Line=射线。合起来就是“绘制调试线”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Show Debug Line？”，试着回答：在世界中画一条临时的彩色线。"
      }
    },
    {
      "id": 555,
      "category": "调试与运行",
      "en": "Draw Debug Sphere",
      "zh": "绘制调试球",
      "location": "Debug / Draw Debug Sphere",
      "usage": "在世界中画出临时的检测球。",
      "tip": "用于检查范围攻击、随机点是否在目标半径内。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Draw",
            "zh": ""
          },
          {
            "en": "Debug",
            "zh": ""
          },
          {
            "en": "Sphere",
            "zh": "球形"
          }
        ],
        "memory": "绘制调试球"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Sphere=球形。合起来就是“绘制调试球”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Draw Debug Sphere？”，试着回答：在世界中画出临时的检测球。"
      }
    },
    {
      "id": 556,
      "category": "调试与运行",
      "en": "Draw Debug Box",
      "zh": "绘制调试盒",
      "location": "Debug / Draw Debug Box",
      "usage": "显示一个临时三维盒子。",
      "tip": "便于检查体积碰撞和出生范围。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Draw",
            "zh": ""
          },
          {
            "en": "Debug",
            "zh": ""
          },
          {
            "en": "Box",
            "zh": "盒形"
          }
        ],
        "memory": "绘制调试盒"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Box=盒形。合起来就是“绘制调试盒”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Draw Debug Box？”，试着回答：显示一个临时三维盒子。"
      }
    },
    {
      "id": 557,
      "category": "调试与运行",
      "en": "Simulate",
      "zh": "模拟运行",
      "location": "Play toolbar / Simulate",
      "usage": "运行游戏逻辑但不进行玩家控制。",
      "tip": "适合观察 AI、物理和定时器。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Simulate」想成监控屏幕和放大镜里的一个工具，它负责“模拟运行”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Simulate？”，试着回答：运行游戏逻辑但不进行玩家控制。"
      }
    },
    {
      "id": 558,
      "category": "调试与运行",
      "en": "Pause",
      "zh": "暂停运行",
      "location": "PIE controls / Pause",
      "usage": "暂停当前模拟或游戏运行。",
      "tip": "暂停后仍可单步检查逻辑。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Pause」想成监控屏幕和放大镜里的一个工具，它负责“暂停运行”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Pause？”，试着回答：暂停当前模拟或游戏运行。"
      }
    },
    {
      "id": 559,
      "category": "调试与运行",
      "en": "Step",
      "zh": "单步执行",
      "location": "PIE controls / Step",
      "usage": "在暂停状态下执行下一段逻辑。",
      "tip": "必须配合断点才能高效定位问题。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Step」想成监控屏幕和放大镜里的一个工具，它负责“单步执行”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Step？”，试着回答：在暂停状态下执行下一段逻辑。"
      }
    },
    {
      "id": 560,
      "category": "调试与运行",
      "en": "Eject",
      "zh": "脱离玩家控制",
      "location": "PIE / Eject",
      "usage": "从 Pawn 视角切到自由观察摄像机。",
      "tip": "检查场景位置和对象时很方便。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Eject」想成监控屏幕和放大镜里的一个工具，它负责“脱离玩家控制”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Eject？”，试着回答：从 Pawn 视角切到自由观察摄像机。"
      }
    },
    {
      "id": 561,
      "category": "调试与运行",
      "en": "Possess",
      "zh": "接管 Pawn",
      "location": "PIE / Possess",
      "usage": "让玩家控制器接管所选 Pawn。",
      "tip": "测试多个角色或出生后的状态时有用。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Possess」想成监控屏幕和放大镜里的一个工具，它负责“接管 Pawn”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Possess？”，试着回答：让玩家控制器接管所选 Pawn。"
      }
    },
    {
      "id": 562,
      "category": "调试与运行",
      "en": "Show Mouse Cursor",
      "zh": "显示鼠标",
      "location": "PIE / Set Show Mouse Cursor",
      "usage": "调试时显示鼠标，便于操作 UI。",
      "tip": "运行时显示鼠标还必须配合输入模式。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Show",
            "zh": "显示"
          },
          {
            "en": "Mouse",
            "zh": "鼠标"
          },
          {
            "en": "Cursor",
            "zh": ""
          }
        ],
        "memory": "显示鼠标"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Show=显示 → Mouse=鼠标。合起来就是“显示鼠标”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Show Mouse Cursor？”，试着回答：调试时显示鼠标，便于操作 UI。"
      }
    },
    {
      "id": 563,
      "category": "调试与运行",
      "en": "Stat FPS",
      "zh": "显示帧率",
      "location": "Console / Stat FPS",
      "usage": "显示当前帧率与帧耗时。",
      "tip": "Console 命令不是蓝图节点，但游戏开发排性能时常用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Stat",
            "zh": ""
          },
          {
            "en": "FPS",
            "zh": ""
          }
        ],
        "memory": "显示帧率"
      },
      "memoryAid": {
        "association": "把「Stat FPS」想成监控屏幕和放大镜里的一个工具，它负责“显示帧率”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Stat FPS？”，试着回答：显示当前帧率与帧耗时。"
      }
    },
    {
      "id": 564,
      "category": "调试与运行",
      "en": "Stat Unit",
      "zh": "显示帧耗时明细",
      "location": "Console / Stat Unit",
      "usage": "查看 Game、Draw、GPU 等时间。",
      "tip": "判断瓶颈在逻辑还是渲染时使用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Stat",
            "zh": ""
          },
          {
            "en": "Unit",
            "zh": ""
          }
        ],
        "memory": "显示帧耗时明细"
      },
      "memoryAid": {
        "association": "把「Stat Unit」想成监控屏幕和放大镜里的一个工具，它负责“显示帧耗时明细”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Stat Unit？”，试着回答：查看 Game、Draw、GPU 等时间。"
      }
    },
    {
      "id": 565,
      "category": "调试与运行",
      "en": "Inspect",
      "zh": "检查对象",
      "location": "Editor Debug / Inspect",
      "usage": "查看对象、组件和当下状态。",
      "tip": "比只看节点变量更能发现对象层级问题。",
      "groups": [],
      "scenarios": [],
      "phrase": null,
      "memoryAid": {
        "association": "把「Inspect」想成监控屏幕和放大镜里的一个工具，它负责“检查对象”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 按“英文 → 中文 → 使用场景”顺序回忆三遍。",
        "selfCheck": "如果题目问“什么时候用 Inspect？”，试着回答：查看对象、组件和当下状态。"
      }
    },
    {
      "id": 566,
      "category": "调试与运行",
      "en": "Live Coding",
      "zh": "实时编译",
      "location": "Play toolbar / Live Coding",
      "usage": "在不完全重启编辑器时编译代码修改。",
      "tip": "蓝图节点改动通常在编辑器内更直接，代码功能各有边界。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Live",
            "zh": ""
          },
          {
            "en": "Coding",
            "zh": ""
          }
        ],
        "memory": "实时编译"
      },
      "memoryAid": {
        "association": "把「Live Coding」想成监控屏幕和放大镜里的一个工具，它负责“实时编译”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Live Coding？”，试着回答：在不完全重启编辑器时编译代码修改。"
      }
    },
    {
      "id": 567,
      "category": "调试与运行",
      "en": "Recompile Blueprint",
      "zh": "重新编译蓝图",
      "location": "Blueprint Editor / Compile",
      "usage": "重新生成蓝图并刷新引用。",
      "tip": "修改枚举、结构或父类后常需重新编译相关蓝图。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Recompile",
            "zh": ""
          },
          {
            "en": "Blueprint",
            "zh": "蓝图"
          }
        ],
        "memory": "重新编译蓝图"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Blueprint=蓝图。合起来就是“重新编译蓝图”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Recompile Blueprint？”，试着回答：重新生成蓝图并刷新引用。"
      }
    },
    {
      "id": 568,
      "category": "调试与运行",
      "en": "Refresh All Nodes",
      "zh": "刷新所有节点",
      "location": "Graph / Refresh Nodes",
      "usage": "让旧节点适配新的函数/变量定义。",
      "tip": "接口或函数签名改动后，节点可能显示错误，刷新能重新同步。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Refresh",
            "zh": ""
          },
          {
            "en": "All",
            "zh": "全部"
          },
          {
            "en": "Nodes",
            "zh": ""
          }
        ],
        "memory": "刷新所有节点"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：All=全部。合起来就是“刷新所有节点”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Refresh All Nodes？”，试着回答：让旧节点适配新的函数/变量定义。"
      }
    },
    {
      "id": 569,
      "category": "调试与运行",
      "en": "Replace Variable References",
      "zh": "替换变量引用",
      "location": "Variable / Find References / Replace",
      "usage": "把引用批量换到另一个变量。",
      "tip": "改名或重构前先确认每条引用都适用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Replace",
            "zh": ""
          },
          {
            "en": "Variable",
            "zh": ""
          },
          {
            "en": "References",
            "zh": ""
          }
        ],
        "memory": "替换变量引用"
      },
      "memoryAid": {
        "association": "把「Replace Variable References」想成监控屏幕和放大镜里的一个工具，它负责“替换变量引用”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Replace Variable References？”，试着回答：把引用批量换到另一个变量。"
      }
    },
    {
      "id": 570,
      "category": "调试与运行",
      "en": "Find in Blueprints",
      "zh": "在所有蓝图中查找",
      "location": "Content Browser / Find in Blueprints",
      "usage": "搜索整个项目中的函数、变量、节点或文本。",
      "tip": "不知道功能藏在哪个蓝图时非常有用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Find",
            "zh": "查找"
          },
          {
            "en": "in",
            "zh": "在……中"
          },
          {
            "en": "Blueprints",
            "zh": ""
          }
        ],
        "memory": "在所有蓝图中查找"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Find=查找 → in=在……中。合起来就是“在所有蓝图中查找”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Find in Blueprints？”，试着回答：搜索整个项目中的函数、变量、节点或文本。"
      }
    },
    {
      "id": 571,
      "category": "调试与运行",
      "en": "Reference Viewer",
      "zh": "引用查看器",
      "location": "Content Browser / Reference Viewer",
      "usage": "查看资产被谁使用、它又引用了谁。",
      "tip": "删除资产前用它确认没有遗漏引用。",
      "groups": [],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Reference",
            "zh": "引用"
          },
          {
            "en": "Viewer",
            "zh": ""
          }
        ],
        "memory": "引用查看器"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Reference=引用。合起来就是“引用查看器”。",
        "method": "先让实际值可见，再判断逻辑在哪里偏离预期。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Reference Viewer？”，试着回答：查看资产被谁使用、它又引用了谁。"
      }
    },
    {
      "id": 572,
      "category": "事件与输入",
      "en": "Event ActorBeginOverlap",
      "zh": "Actor 开始重叠事件",
      "location": "Physics / Collision events",
      "usage": "当两个物体刚开始重叠时执行。",
      "tip": "触发区需要启用 Generate Overlap Events，并把碰撞响应设为 Overlap。",
      "groups": [
        "collision"
      ],
      "scenarios": [
        "pickup"
      ],
      "phrase": {
        "parts": [
          {
            "en": "Event",
            "zh": "事件"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "Begin",
            "zh": "开始"
          },
          {
            "en": "Overlap",
            "zh": "重叠"
          }
        ],
        "memory": "Actor 开始重叠事件"
      },
      "memoryAid": {
        "association": "BeginOverlap 是感应门的第一声“有人进来了”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Event ActorBeginOverlap？”，试着回答：当两个物体刚开始重叠时执行。"
      }
    },
    {
      "id": 573,
      "category": "事件与输入",
      "en": "Event ActorEndOverlap",
      "zh": "Actor 结束重叠事件",
      "location": "Physics / Collision events",
      "usage": "当两个物体结束重叠时执行。",
      "tip": "通常与 BeginOverlap 成对处理，避免进入/离开状态卡住。",
      "groups": [
        "collision"
      ],
      "scenarios": [],
      "phrase": {
        "parts": [
          {
            "en": "Event",
            "zh": "事件"
          },
          {
            "en": "Actor",
            "zh": "场景对象"
          },
          {
            "en": "End",
            "zh": "结束"
          },
          {
            "en": "Overlap",
            "zh": "重叠"
          }
        ],
        "memory": "Actor 结束重叠事件"
      },
      "memoryAid": {
        "association": "把这条节点读成一条指令：Event=事件 → Actor=场景对象 → End=结束 → Overlap=重叠。合起来就是“Actor 结束重叠事件”。",
        "method": "先想是谁触发它，再想触发后哪条执行线开始。 先用拆分卡片读两遍，再遮住中文默写完整英文，最后用一个游戏场景复述它。",
        "selfCheck": "如果题目问“什么时候用 Event ActorEndOverlap？”，试着回答：当两个物体结束重叠时执行。"
      }
    }
  ],
  "wordGlossary": [
    {
      "en": "Actor",
      "zh": "场景对象",
      "note": "Actor 是能够放进关卡、拥有 Transform 的基础场景对象。"
    },
    {
      "en": "Add",
      "zh": "添加",
      "note": "向数组、集合、向量或输入值中增加内容。"
    },
    {
      "en": "All",
      "zh": "全部",
      "note": "Blueprint 节点中常见的组成部分，意思是“全部”。"
    },
    {
      "en": "and",
      "zh": "并且",
      "note": "Blueprint 节点中常见的组成部分，意思是“并且”。"
    },
    {
      "en": "Anim",
      "zh": "动画",
      "note": "Blueprint 节点中常见的组成部分，意思是“动画”。"
    },
    {
      "en": "Animation",
      "zh": "动画",
      "note": "骨骼网格的动画资源、状态或播放入口。"
    },
    {
      "en": "Arm",
      "zh": "臂",
      "note": "Blueprint 节点中常见的组成部分，意思是“臂”。"
    },
    {
      "en": "Array",
      "zh": "数组",
      "note": "Blueprint 节点中常见的组成部分，意思是“数组”。"
    },
    {
      "en": "Asset",
      "zh": "资产",
      "note": "Blueprint 节点中常见的组成部分，意思是“资产”。"
    },
    {
      "en": "at",
      "zh": "在指定位置",
      "note": "Blueprint 节点中常见的组成部分，意思是“在指定位置”。"
    },
    {
      "en": "Attach",
      "zh": "附加",
      "note": "Blueprint 节点中常见的组成部分，意思是“附加”。"
    },
    {
      "en": "Axis",
      "zh": "轴",
      "note": "Blueprint 节点中常见的组成部分，意思是“轴”。"
    },
    {
      "en": "Bar",
      "zh": "条",
      "note": "Blueprint 节点中常见的组成部分，意思是“条”。"
    },
    {
      "en": "Begin",
      "zh": "开始",
      "note": "Blueprint 节点中常见的组成部分，意思是“开始”。"
    },
    {
      "en": "Blueprint",
      "zh": "蓝图",
      "note": "蓝图是一种可视化脚本资产，用来创建游戏逻辑、对象类型或界面。"
    },
    {
      "en": "Body",
      "zh": "物理体",
      "note": "Blueprint 节点中常见的组成部分，意思是“物理体”。"
    },
    {
      "en": "Box",
      "zh": "盒形",
      "note": "Blueprint 节点中常见的组成部分，意思是“盒形”。"
    },
    {
      "en": "Break",
      "zh": "拆分",
      "note": "把复合数据类型拆开成多个成员，也可表示中断循环。"
    },
    {
      "en": "Button",
      "zh": "按钮",
      "note": "Blueprint 节点中常见的组成部分，意思是“按钮”。"
    },
    {
      "en": "by",
      "zh": "按",
      "note": "Blueprint 节点中常见的组成部分，意思是“按”。"
    },
    {
      "en": "Camera",
      "zh": "镜头",
      "note": "Blueprint 节点中常见的组成部分，意思是“镜头”。"
    },
    {
      "en": "Capsule",
      "zh": "胶囊体",
      "note": "Blueprint 节点中常见的组成部分，意思是“胶囊体”。"
    },
    {
      "en": "Channel",
      "zh": "通道",
      "note": "Blueprint 节点中常见的组成部分，意思是“通道”。"
    },
    {
      "en": "Check",
      "zh": "勾选",
      "note": "Blueprint 节点中常见的组成部分，意思是“勾选”。"
    },
    {
      "en": "Clamp",
      "zh": "限制",
      "note": "Blueprint 节点中常见的组成部分，意思是“限制”。"
    },
    {
      "en": "Class",
      "zh": "类",
      "note": "Blueprint 节点中常见的组成部分，意思是“类”。"
    },
    {
      "en": "Clear",
      "zh": "清除",
      "note": "Blueprint 节点中常见的组成部分，意思是“清除”。"
    },
    {
      "en": "Clicked",
      "zh": "被点击",
      "note": "Blueprint 节点中常见的组成部分，意思是“被点击”。"
    },
    {
      "en": "Collision",
      "zh": "碰撞",
      "note": "控制对象是否阻挡、重叠、响应射线以及参与物理模拟。"
    },
    {
      "en": "Color",
      "zh": "颜色",
      "note": "Blueprint 节点中常见的组成部分，意思是“颜色”。"
    },
    {
      "en": "Completed",
      "zh": "完成",
      "note": "Blueprint 节点中常见的组成部分，意思是“完成”。"
    },
    {
      "en": "Component",
      "zh": "组件",
      "note": "Component 是附加到 Actor 上的功能模块，例如网格、碰撞、声音或移动。"
    },
    {
      "en": "Contains",
      "zh": "包含",
      "note": "Blueprint 节点中常见的组成部分，意思是“包含”。"
    },
    {
      "en": "Controller",
      "zh": "控制器",
      "note": "Blueprint 节点中常见的组成部分，意思是“控制器”。"
    },
    {
      "en": "Create",
      "zh": "创建",
      "note": "Blueprint 节点中常见的组成部分，意思是“创建”。"
    },
    {
      "en": "Custom",
      "zh": "自定义",
      "note": "Blueprint 节点中常见的组成部分，意思是“自定义”。"
    },
    {
      "en": "Damping",
      "zh": "阻尼",
      "note": "Blueprint 节点中常见的组成部分，意思是“阻尼”。"
    },
    {
      "en": "Data",
      "zh": "数据",
      "note": "Blueprint 节点中常见的组成部分，意思是“数据”。"
    },
    {
      "en": "Delay",
      "zh": "延时",
      "note": "Blueprint 节点中常见的组成部分，意思是“延时”。"
    },
    {
      "en": "Destroy",
      "zh": "销毁",
      "note": "从游戏世界中移除对象，之后旧引用可能失效。"
    },
    {
      "en": "Direction",
      "zh": "方向",
      "note": "Blueprint 节点中常见的组成部分，意思是“方向”。"
    },
    {
      "en": "Disable",
      "zh": "禁用",
      "note": "Blueprint 节点中常见的组成部分，意思是“禁用”。"
    },
    {
      "en": "Distance",
      "zh": "距离",
      "note": "Blueprint 节点中常见的组成部分，意思是“距离”。"
    },
    {
      "en": "Do",
      "zh": "执行",
      "note": "Blueprint 节点中常见的组成部分，意思是“执行”。"
    },
    {
      "en": "Dynamic",
      "zh": "动态",
      "note": "Blueprint 节点中常见的组成部分，意思是“动态”。"
    },
    {
      "en": "Each",
      "zh": "每个",
      "note": "Blueprint 节点中常见的组成部分，意思是“每个”。"
    },
    {
      "en": "Enabled",
      "zh": "启用状态",
      "note": "Blueprint 节点中常见的组成部分，意思是“启用状态”。"
    },
    {
      "en": "End",
      "zh": "结束",
      "note": "Blueprint 节点中常见的组成部分，意思是“结束”。"
    },
    {
      "en": "Enum",
      "zh": "枚举",
      "note": "Blueprint 节点中常见的组成部分，意思是“枚举”。"
    },
    {
      "en": "Even",
      "zh": "即使",
      "note": "Blueprint 节点中常见的组成部分，意思是“即使”。"
    },
    {
      "en": "Event",
      "zh": "事件",
      "note": "事件是执行图的入口，分为生命周期事件、输入事件和自定义事件。"
    },
    {
      "en": "Events",
      "zh": "事件",
      "note": "Blueprint 节点中常见的组成部分，意思是“事件”。"
    },
    {
      "en": "Find",
      "zh": "查找",
      "note": "Blueprint 节点中常见的组成部分，意思是“查找”。"
    },
    {
      "en": "Finish",
      "zh": "完成",
      "note": "Blueprint 节点中常见的组成部分，意思是“完成”。"
    },
    {
      "en": "Float",
      "zh": "浮点数",
      "note": "Blueprint 节点中常见的组成部分，意思是“浮点数”。"
    },
    {
      "en": "For",
      "zh": "用于",
      "note": "Blueprint 节点中常见的组成部分，意思是“用于”。"
    },
    {
      "en": "Force",
      "zh": "力",
      "note": "Blueprint 节点中常见的组成部分，意思是“力”。"
    },
    {
      "en": "Format",
      "zh": "格式化",
      "note": "Blueprint 节点中常见的组成部分，意思是“格式化”。"
    },
    {
      "en": "Forward",
      "zh": "前方",
      "note": "Blueprint 节点中常见的组成部分，意思是“前方”。"
    },
    {
      "en": "from",
      "zh": "从",
      "note": "Blueprint 节点中常见的组成部分，意思是“从”。"
    },
    {
      "en": "From",
      "zh": "从",
      "note": "Blueprint 节点中常见的组成部分，意思是“从”。"
    },
    {
      "en": "Function",
      "zh": "函数",
      "note": "Blueprint 节点中常见的组成部分，意思是“函数”。"
    },
    {
      "en": "Game",
      "zh": "游戏",
      "note": "指当前游戏流程，常见于 GameMode、GameState 或打开关卡等节点。"
    },
    {
      "en": "Generate",
      "zh": "生成",
      "note": "Blueprint 节点中常见的组成部分，意思是“生成”。"
    },
    {
      "en": "Get",
      "zh": "获取",
      "note": "读取并返回已有的数据或对象引用，本身通常不修改目标。"
    },
    {
      "en": "Gravity",
      "zh": "重力",
      "note": "Blueprint 节点中常见的组成部分，意思是“重力”。"
    },
    {
      "en": "Handle",
      "zh": "句柄",
      "note": "Blueprint 节点中常见的组成部分，意思是“句柄”。"
    },
    {
      "en": "Has",
      "zh": "拥有",
      "note": "Blueprint 节点中常见的组成部分，意思是“拥有”。"
    },
    {
      "en": "Hit",
      "zh": "命中",
      "note": "Blueprint 节点中常见的组成部分，意思是“命中”。"
    },
    {
      "en": "Horizontal",
      "zh": "水平",
      "note": "Blueprint 节点中常见的组成部分，意思是“水平”。"
    },
    {
      "en": "Impulse",
      "zh": "冲量",
      "note": "Blueprint 节点中常见的组成部分，意思是“冲量”。"
    },
    {
      "en": "in",
      "zh": "在……中",
      "note": "Blueprint 节点中常见的组成部分，意思是“在……中”。"
    },
    {
      "en": "Index",
      "zh": "索引",
      "note": "Blueprint 节点中常见的组成部分，意思是“索引”。"
    },
    {
      "en": "Input",
      "zh": "输入",
      "note": "来自玩家按键、鼠标、摇杆或输入动作的数据。"
    },
    {
      "en": "Instance",
      "zh": "实例",
      "note": "基于原资源创建的可独立设置参数的副本。"
    },
    {
      "en": "Integer",
      "zh": "整数",
      "note": "Blueprint 节点中常见的组成部分，意思是“整数”。"
    },
    {
      "en": "Interface",
      "zh": "接口",
      "note": "Blueprint 节点中常见的组成部分，意思是“接口”。"
    },
    {
      "en": "Invalidate",
      "zh": "作废",
      "note": "Blueprint 节点中常见的组成部分，意思是“作废”。"
    },
    {
      "en": "Is",
      "zh": "是否",
      "note": "Blueprint 节点中常见的组成部分，意思是“是否”。"
    },
    {
      "en": "Item",
      "zh": "项目",
      "note": "Blueprint 节点中常见的组成部分，意思是“项目”。"
    },
    {
      "en": "Items",
      "zh": "项目",
      "note": "Blueprint 节点中常见的组成部分，意思是“项目”。"
    },
    {
      "en": "Key",
      "zh": "键",
      "note": "Blueprint 节点中常见的组成部分，意思是“键”。"
    },
    {
      "en": "Length",
      "zh": "长度",
      "note": "Blueprint 节点中常见的组成部分，意思是“长度”。"
    },
    {
      "en": "Level",
      "zh": "关卡",
      "note": "Blueprint 节点中常见的组成部分，意思是“关卡”。"
    },
    {
      "en": "Line",
      "zh": "射线",
      "note": "Blueprint 节点中常见的组成部分，意思是“射线”。"
    },
    {
      "en": "Linear",
      "zh": "线性",
      "note": "Blueprint 节点中常见的组成部分，意思是“线性”。"
    },
    {
      "en": "Local",
      "zh": "本地",
      "note": "表示对象自身的本地空间，会随着父对象或 Actor 的旋转变化。"
    },
    {
      "en": "Location",
      "zh": "位置",
      "note": "Blueprint 节点中常见的组成部分，意思是“位置”。"
    },
    {
      "en": "Loop",
      "zh": "循环",
      "note": "Blueprint 节点中常见的组成部分，意思是“循环”。"
    },
    {
      "en": "Make",
      "zh": "创建",
      "note": "把分散的数据组合成一个复合值，例如 Make Vector。"
    },
    {
      "en": "Map",
      "zh": "映射表",
      "note": "Blueprint 节点中常见的组成部分，意思是“映射表”。"
    },
    {
      "en": "Material",
      "zh": "材质",
      "note": "定义模型表面外观和渲染参数。"
    },
    {
      "en": "Member",
      "zh": "成员",
      "note": "Blueprint 节点中常见的组成部分，意思是“成员”。"
    },
    {
      "en": "Mesh",
      "zh": "网格",
      "note": "Blueprint 节点中常见的组成部分，意思是“网格”。"
    },
    {
      "en": "Mode",
      "zh": "模式",
      "note": "Blueprint 节点中常见的组成部分，意思是“模式”。"
    },
    {
      "en": "Montage",
      "zh": "蒙太奇",
      "note": "可在游戏中分段播放、混合或中断的动作动画。"
    },
    {
      "en": "Mouse",
      "zh": "鼠标",
      "note": "Blueprint 节点中常见的组成部分，意思是“鼠标”。"
    },
    {
      "en": "Move",
      "zh": "移动",
      "note": "Blueprint 节点中常见的组成部分，意思是“移动”。"
    },
    {
      "en": "Movement",
      "zh": "移动",
      "note": "Blueprint 节点中常见的组成部分，意思是“移动”。"
    },
    {
      "en": "Name",
      "zh": "名称",
      "note": "Blueprint 节点中常见的组成部分，意思是“名称”。"
    },
    {
      "en": "New",
      "zh": "新建",
      "note": "Blueprint 节点中常见的组成部分，意思是“新建”。"
    },
    {
      "en": "Normal",
      "zh": "法线",
      "note": "Blueprint 节点中常见的组成部分，意思是“法线”。"
    },
    {
      "en": "Object",
      "zh": "对象",
      "note": "Blueprint 节点中常见的组成部分，意思是“对象”。"
    },
    {
      "en": "Objects",
      "zh": "对象",
      "note": "Blueprint 节点中常见的组成部分，意思是“对象”。"
    },
    {
      "en": "Offset",
      "zh": "偏移",
      "note": "Blueprint 节点中常见的组成部分，意思是“偏移”。"
    },
    {
      "en": "On",
      "zh": "在……时",
      "note": "Blueprint 节点中常见的组成部分，意思是“在……时”。"
    },
    {
      "en": "Once",
      "zh": "一次",
      "note": "Blueprint 节点中常见的组成部分，意思是“一次”。"
    },
    {
      "en": "Only",
      "zh": "仅",
      "note": "Blueprint 节点中常见的组成部分，意思是“仅”。"
    },
    {
      "en": "Open",
      "zh": "打开",
      "note": "Blueprint 节点中常见的组成部分，意思是“打开”。"
    },
    {
      "en": "Out",
      "zh": "输出",
      "note": "Blueprint 节点中常见的组成部分，意思是“输出”。"
    },
    {
      "en": "Overlap",
      "zh": "重叠",
      "note": "Blueprint 节点中常见的组成部分，意思是“重叠”。"
    },
    {
      "en": "Pause",
      "zh": "暂停",
      "note": "Blueprint 节点中常见的组成部分，意思是“暂停”。"
    },
    {
      "en": "Paused",
      "zh": "暂停",
      "note": "Blueprint 节点中常见的组成部分，意思是“暂停”。"
    },
    {
      "en": "Physics",
      "zh": "物理",
      "note": "与刚体、重力、力、冲量和碰撞模拟有关的系统。"
    },
    {
      "en": "Pitch",
      "zh": "俯仰",
      "note": "Blueprint 节点中常见的组成部分，意思是“俯仰”。"
    },
    {
      "en": "Play",
      "zh": "播放",
      "note": "Blueprint 节点中常见的组成部分，意思是“播放”。"
    },
    {
      "en": "Player",
      "zh": "玩家",
      "note": "指玩家相关的 Pawn、Controller 或 Player State。"
    },
    {
      "en": "Position",
      "zh": "位置",
      "note": "Blueprint 节点中常见的组成部分，意思是“位置”。"
    },
    {
      "en": "Profile",
      "zh": "配置",
      "note": "Blueprint 节点中常见的组成部分，意思是“配置”。"
    },
    {
      "en": "Progress",
      "zh": "进度",
      "note": "Blueprint 节点中常见的组成部分，意思是“进度”。"
    },
    {
      "en": "Random",
      "zh": "随机",
      "note": "Blueprint 节点中常见的组成部分，意思是“随机”。"
    },
    {
      "en": "Range",
      "zh": "范围",
      "note": "Blueprint 节点中常见的组成部分，意思是“范围”。"
    },
    {
      "en": "Rate",
      "zh": "速率",
      "note": "Blueprint 节点中常见的组成部分，意思是“速率”。"
    },
    {
      "en": "Reference",
      "zh": "引用",
      "note": "Blueprint 节点中常见的组成部分，意思是“引用”。"
    },
    {
      "en": "Remove",
      "zh": "移除",
      "note": "Blueprint 节点中常见的组成部分，意思是“移除”。"
    },
    {
      "en": "Reset",
      "zh": "重置",
      "note": "Blueprint 节点中常见的组成部分，意思是“重置”。"
    },
    {
      "en": "Result",
      "zh": "结果",
      "note": "Blueprint 节点中常见的组成部分，意思是“结果”。"
    },
    {
      "en": "Right",
      "zh": "右侧",
      "note": "Blueprint 节点中常见的组成部分，意思是“右侧”。"
    },
    {
      "en": "Rotation",
      "zh": "旋转",
      "note": "Blueprint 节点中常见的组成部分，意思是“旋转”。"
    },
    {
      "en": "Rotator",
      "zh": "旋转值",
      "note": "Blueprint 节点中常见的组成部分，意思是“旋转值”。"
    },
    {
      "en": "Run",
      "zh": "运行",
      "note": "Blueprint 节点中常见的组成部分，意思是“运行”。"
    },
    {
      "en": "Save",
      "zh": "保存",
      "note": "把运行时数据写入 SaveGame 或磁盘槽位。"
    },
    {
      "en": "Scalar",
      "zh": "标量",
      "note": "Blueprint 节点中常见的组成部分，意思是“标量”。"
    },
    {
      "en": "Scale",
      "zh": "缩放",
      "note": "Blueprint 节点中常见的组成部分，意思是“缩放”。"
    },
    {
      "en": "Set",
      "zh": "设置",
      "note": "作动词时表示设置；出现在 Set Add、Set Contains Item 时指无重复元素的集合。"
    },
    {
      "en": "Show",
      "zh": "显示",
      "note": "Blueprint 节点中常见的组成部分，意思是“显示”。"
    },
    {
      "en": "Simulate",
      "zh": "模拟",
      "note": "Blueprint 节点中常见的组成部分，意思是“模拟”。"
    },
    {
      "en": "Slot",
      "zh": "槽位",
      "note": "存档槽位的名称或句柄，用于区分不同存档。"
    },
    {
      "en": "Sound",
      "zh": "声音",
      "note": "Blueprint 节点中常见的组成部分，意思是“声音”。"
    },
    {
      "en": "Spawn",
      "zh": "生成",
      "note": "在运行时创建一个新的 Actor、声音或效果实例。"
    },
    {
      "en": "Sphere",
      "zh": "球形",
      "note": "Blueprint 节点中常见的组成部分，意思是“球形”。"
    },
    {
      "en": "Spring",
      "zh": "弹簧",
      "note": "Blueprint 节点中常见的组成部分，意思是“弹簧”。"
    },
    {
      "en": "State",
      "zh": "状态",
      "note": "Blueprint 节点中常见的组成部分，意思是“状态”。"
    },
    {
      "en": "String",
      "zh": "字符串",
      "note": "Blueprint 节点中常见的组成部分，意思是“字符串”。"
    },
    {
      "en": "Struct",
      "zh": "结构体",
      "note": "Blueprint 节点中常见的组成部分，意思是“结构体”。"
    },
    {
      "en": "Switch",
      "zh": "分支",
      "note": "Blueprint 节点中常见的组成部分，意思是“分支”。"
    },
    {
      "en": "Table",
      "zh": "表",
      "note": "Blueprint 节点中常见的组成部分，意思是“表”。"
    },
    {
      "en": "Text",
      "zh": "文本",
      "note": "Blueprint 节点中常见的组成部分，意思是“文本”。"
    },
    {
      "en": "Tick",
      "zh": "每帧",
      "note": "Blueprint 节点中常见的组成部分，意思是“每帧”。"
    },
    {
      "en": "Timer",
      "zh": "计时器",
      "note": "Blueprint 节点中常见的组成部分，意思是“计时器”。"
    },
    {
      "en": "to",
      "zh": "到",
      "note": "Blueprint 节点中常见的组成部分，意思是“到”。"
    },
    {
      "en": "To",
      "zh": "到",
      "note": "Blueprint 节点中常见的组成部分，意思是“到”。"
    },
    {
      "en": "Trace",
      "zh": "检测",
      "note": "Blueprint 节点中常见的组成部分，意思是“检测”。"
    },
    {
      "en": "Transform",
      "zh": "变换",
      "note": "Transform 同时包含 Location、Rotation 与 Scale。"
    },
    {
      "en": "Type",
      "zh": "类型",
      "note": "Blueprint 节点中常见的组成部分，意思是“类型”。"
    },
    {
      "en": "Up",
      "zh": "向上",
      "note": "Blueprint 节点中常见的组成部分，意思是“向上”。"
    },
    {
      "en": "Using",
      "zh": "使用",
      "note": "Blueprint 节点中常见的组成部分，意思是“使用”。"
    },
    {
      "en": "Value",
      "zh": "值",
      "note": "Blueprint 节点中常见的组成部分，意思是“值”。"
    },
    {
      "en": "Vector",
      "zh": "向量",
      "note": "Blueprint 节点中常见的组成部分，意思是“向量”。"
    },
    {
      "en": "Velocity",
      "zh": "速度",
      "note": "Blueprint 节点中常见的组成部分，意思是“速度”。"
    },
    {
      "en": "View",
      "zh": "视图",
      "note": "Blueprint 节点中常见的组成部分，意思是“视图”。"
    },
    {
      "en": "Viewport",
      "zh": "视口",
      "note": "玩家当前看到的屏幕显示区域。"
    },
    {
      "en": "Visibility",
      "zh": "可见性",
      "note": "Blueprint 节点中常见的组成部分，意思是“可见性”。"
    },
    {
      "en": "While",
      "zh": "当……时",
      "note": "Blueprint 节点中常见的组成部分，意思是“当……时”。"
    },
    {
      "en": "Widget",
      "zh": "控件",
      "note": "UMG 界面控件，例如按钮、文本、进度条和整个菜单。"
    },
    {
      "en": "with",
      "zh": "带有",
      "note": "Blueprint 节点中常见的组成部分，意思是“带有”。"
    },
    {
      "en": "World",
      "zh": "世界",
      "note": "表示整个游戏世界空间；World Offset 会按世界坐标移动。"
    },
    {
      "en": "Yaw",
      "zh": "左右旋转",
      "note": "Blueprint 节点中常见的组成部分，意思是“左右旋转”。"
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "基础与编辑器",
      "phase": "认识蓝图",
      "purpose": "先分清类、组件、事件图和变量放在哪里。",
      "count": 50,
      "previous": "",
      "next": "变量与数据类型"
    },
    {
      "id": 2,
      "name": "变量与数据类型",
      "phase": "认识蓝图",
      "purpose": "知道什么数据该用 Boolean、Float、Vector、Struct 保存。",
      "count": 38,
      "previous": "基础与编辑器",
      "next": "事件与输入"
    },
    {
      "id": 3,
      "name": "事件与输入",
      "phase": "接收意图",
      "purpose": "把按键、鼠标和游戏事件变成可执行的蓝图逻辑。",
      "count": 39,
      "previous": "变量与数据类型",
      "next": "流程控制"
    },
    {
      "id": 4,
      "name": "流程控制",
      "phase": "组织逻辑",
      "purpose": "让节点按条件、顺序、循环和延时执行。",
      "count": 32,
      "previous": "事件与输入",
      "next": "数学运算"
    },
    {
      "id": 5,
      "name": "数学运算",
      "phase": "计算数据",
      "purpose": "处理数值、随机、范围映射与方向计算。",
      "count": 40,
      "previous": "流程控制",
      "next": "位置·旋转·变换"
    },
    {
      "id": 6,
      "name": "位置·旋转·变换",
      "phase": "驱动空间",
      "purpose": "让物体移动、转向并正确使用世界与本地坐标。",
      "count": 49,
      "previous": "数学运算",
      "next": "碰撞·射线·物理"
    },
    {
      "id": 7,
      "name": "碰撞·射线·物理",
      "phase": "检测互动",
      "purpose": "判断物体是否相遇、射线打中了什么以及如何产生物理反馈。",
      "count": 55,
      "previous": "位置·旋转·变换",
      "next": "Actor与对象"
    },
    {
      "id": 8,
      "name": "Actor与对象",
      "phase": "管理对象",
      "purpose": "生成、查找、销毁对象并管理引用生命周期。",
      "count": 42,
      "previous": "碰撞·射线·物理",
      "next": "组件与可见性"
    },
    {
      "id": 9,
      "name": "组件与可见性",
      "phase": "搭建表现",
      "purpose": "组合模型、镜头、材质与显示状态。",
      "count": 27,
      "previous": "Actor与对象",
      "next": "UI / UMG"
    },
    {
      "id": 10,
      "name": "UI / UMG",
      "phase": "反馈界面",
      "purpose": "把状态展示为按钮、文本、进度条与菜单。",
      "count": 37,
      "previous": "组件与可见性",
      "next": "音频"
    },
    {
      "id": 11,
      "name": "音频",
      "phase": "声音反馈",
      "purpose": "为命中和交互增加空间音效与动态音频控制。",
      "count": 20,
      "previous": "UI / UMG",
      "next": "动画"
    },
    {
      "id": 12,
      "name": "动画",
      "phase": "动作表现",
      "purpose": "用状态机和动画蒙太奇表达角色动作。",
      "count": 22,
      "previous": "音频",
      "next": "AI与导航"
    },
    {
      "id": 13,
      "name": "AI与导航",
      "phase": "行为决策",
      "purpose": "让 AI 能找到路径、巡逻、追踪并响应感知。",
      "count": 21,
      "previous": "动画",
      "next": "游戏流程·存档"
    },
    {
      "id": 14,
      "name": "游戏流程·存档",
      "phase": "流程闭环",
      "purpose": "管理关卡、暂停、重生与保存读取。",
      "count": 30,
      "previous": "AI与导航",
      "next": "联网"
    },
    {
      "id": 15,
      "name": "联网",
      "phase": "多人协同",
      "purpose": "理解服务器权威、复制与客户端反馈。",
      "count": 25,
      "previous": "游戏流程·存档",
      "next": "数据表与资源"
    },
    {
      "id": 16,
      "name": "数据表与资源",
      "phase": "数据扩展",
      "purpose": "用数据表、数据资产和异步加载扩展内容。",
      "count": 22,
      "previous": "联网",
      "next": "调试与运行"
    },
    {
      "id": 17,
      "name": "调试与运行",
      "phase": "验证修正",
      "purpose": "用打印、断点和性能统计定位问题。",
      "count": 24,
      "previous": "数据表与资源",
      "next": ""
    }
  ],
  "conceptGroups": [
    {
      "id": "movement",
      "title": "玩家移动闭环",
      "note": "从输入意图到角色位移，移动交给 Character Movement 处理。",
      "termIds": [
        93,
        100,
        102,
        103,
        104,
        7,
        8,
        11
      ]
    },
    {
      "id": "camera",
      "title": "视角与镜头",
      "note": "控制器负责视角旋转，SpringArm 与 Camera 负责第三人称镜头表现。",
      "termIds": [
        106,
        107,
        109,
        110,
        349,
        348,
        350
      ]
    },
    {
      "id": "transform",
      "title": "位置、旋转与平滑跟随",
      "note": "先分清世界坐标与本地坐标，再决定瞬移、偏移还是插值。",
      "termIds": [
        199,
        200,
        201,
        203,
        205,
        231,
        232,
        198,
        202
      ]
    },
    {
      "id": "collision",
      "title": "碰撞检测到命中结果",
      "note": "重叠适合触发区，射线适合瞄准和点击，命中结果提供对象、位置与法线。",
      "termIds": [
        271,
        572,
        573,
        276,
        284,
        285,
        287,
        266,
        265
      ]
    },
    {
      "id": "physics",
      "title": "物理反馈",
      "note": "物理模拟负责真实碰撞；冲量是一次性速度变化，力是持续推动。",
      "termIds": [
        247,
        248,
        256,
        257,
        254,
        260,
        252,
        253
      ]
    },
    {
      "id": "lifecycle",
      "title": "对象生命周期",
      "note": "生成对象后要设置属性，交互后要校验引用，结束时再销毁或定时清理。",
      "termIds": [
        302,
        303,
        304,
        305,
        321,
        87,
        44
      ]
    },
    {
      "id": "ui",
      "title": "状态到界面的反馈",
      "note": "游戏状态先计算成 0–1 或文本，再交给 UMG 显示；输入模式单独设置。",
      "termIds": [
        371,
        372,
        374,
        379,
        382,
        351,
        113,
        112,
        115
      ]
    },
    {
      "id": "save",
      "title": "存档与读取",
      "note": "先创建 SaveGame 容器和数据，再写入槽位；读取前判断槽位是否存在。",
      "termIds": [
        475,
        476,
        471,
        472,
        473,
        477
      ]
    },
    {
      "id": "network",
      "title": "联网开火与状态同步",
      "note": "关键判定放服务器；所有客户端需要看到的表现再交给 Multicast。",
      "termIds": [
        508,
        512,
        511,
        502,
        503,
        504,
        125,
        519
      ]
    },
    {
      "id": "ai",
      "title": "AI 导航与行为",
      "note": "导航网格提供可走区域，行为树做决策，AI Move To 执行移动。",
      "termIds": [
        458,
        455,
        450,
        452,
        460,
        461,
        462,
        466
      ]
    },
    {
      "id": "debug",
      "title": "观察与验证",
      "note": "先让执行顺序和实际值可见，再判断是类型、碰撞、距离还是网络问题。",
      "termIds": [
        548,
        550,
        551,
        552,
        554,
        126
      ]
    }
  ],
  "scenarios": [
    {
      "id": "pickup",
      "title": "拾取道具与即时反馈",
      "short": "进入触发区后识别玩家、销毁道具、播放声音并更新 UI。",
      "level": "入门",
      "outcome": "这条链路把碰撞、类型识别、对象生命周期和反馈串在一起，是大多数交互原型的基础。",
      "steps": [
        {
          "step": 1,
          "id": 271,
          "en": "Generate Overlap Events",
          "zh": "生成重叠事件",
          "note": "先确保触发区能产生重叠事件。"
        },
        {
          "step": 2,
          "id": 572,
          "en": "Event ActorBeginOverlap",
          "zh": "Actor 开始重叠事件",
          "note": "玩家进入范围时开始执行。"
        },
        {
          "step": 3,
          "id": 44,
          "en": "Cast To",
          "zh": "类型转换",
          "note": "判断进入的对象是否是目标角色。"
        },
        {
          "step": 4,
          "id": 305,
          "en": "Destroy Actor",
          "zh": "销毁 Actor",
          "note": "道具被拾取后从场景移除。"
        },
        {
          "step": 5,
          "id": 409,
          "en": "Play Sound at Location",
          "zh": "在世界位置播放声音",
          "note": "在原位置播放拾取音效。"
        },
        {
          "step": 6,
          "id": 371,
          "en": "Create Widget",
          "zh": "创建控件",
          "note": "创建提示控件。"
        },
        {
          "step": 7,
          "id": 372,
          "en": "Add to Viewport",
          "zh": "添加到视口",
          "note": "把拾取提示显示出来。"
        },
        {
          "step": 8,
          "id": 379,
          "en": "Set Text (Text)",
          "zh": "设置文本",
          "note": "用本地化文本显示获得的物品名。"
        }
      ],
      "extensions": [
        {
          "id": 87,
          "en": "Is Valid",
          "zh": "是否有效",
          "note": "对象或引用无效时不要继续访问。"
        },
        {
          "id": 321,
          "en": "Set Life Span",
          "zh": "设置寿命",
          "note": "让临时提示或特效自动清理。"
        },
        {
          "id": 471,
          "en": "Save Game to Slot",
          "zh": "保存游戏到存档槽",
          "note": "把已获得的物品写入存档。"
        },
        {
          "id": 382,
          "en": "Set Percent",
          "zh": "设置进度值",
          "note": "如果道具与背包容量有关，可同步更新进度。"
        }
      ]
    },
    {
      "id": "movement",
      "title": "第三人称移动与镜头",
      "short": "把 Enhanced Input 的方向值交给角色移动，并让控制器持续调整视角。",
      "level": "入门",
      "outcome": "输入只提供意图，Character Movement 处理位移；镜头旋转和角色旋转要分开理解。",
      "steps": [
        {
          "step": 1,
          "id": 93,
          "en": "EnhancedInputAction",
          "zh": "增强输入动作",
          "note": "接收移动动作与视角动作。"
        },
        {
          "step": 2,
          "id": 100,
          "en": "Axis2D",
          "zh": "二维轴",
          "note": "读取二维摇杆或 WASD 方向。"
        },
        {
          "step": 3,
          "id": 102,
          "en": "Add Movement Input",
          "zh": "添加移动输入",
          "note": "把方向意图交给 Pawn 移动组件。"
        },
        {
          "step": 4,
          "id": 103,
          "en": "Get Actor Forward Vector",
          "zh": "获取向前方向",
          "note": "计算角色前方。"
        },
        {
          "step": 5,
          "id": 104,
          "en": "Get Actor Right Vector",
          "zh": "获取向右方向",
          "note": "计算角色右方。"
        },
        {
          "step": 6,
          "id": 106,
          "en": "Add Controller Yaw Input",
          "zh": "添加控制器左右旋转输入",
          "note": "鼠标左右改变视角。"
        },
        {
          "step": 7,
          "id": 107,
          "en": "Add Controller Pitch Input",
          "zh": "添加控制器上下旋转输入",
          "note": "鼠标上下改变俯仰。"
        },
        {
          "step": 8,
          "id": 349,
          "en": "Spring Arm Component",
          "zh": "弹簧臂组件",
          "note": "让第三人称镜头自动避开遮挡。"
        }
      ],
      "extensions": [
        {
          "id": 232,
          "en": "RInterp To",
          "zh": "旋转平滑插值",
          "note": "让角色或镜头平滑朝向目标。"
        },
        {
          "id": 114,
          "en": "Set Input Mode Game and UI",
          "zh": "游戏与 UI 都可输入",
          "note": "打开地图或聊天框时仍保留部分操作。"
        },
        {
          "id": 109,
          "en": "Get Control Rotation",
          "zh": "获取控制旋转",
          "note": "从镜头朝向计算角色前进方向。"
        }
      ]
    },
    {
      "id": "trace",
      "title": "射线交互与射击判断",
      "short": "从屏幕像素发射世界射线，读取命中对象并施加反馈。",
      "level": "进阶",
      "outcome": "区分 Return Value 与 Out Hit；真正可用的对象、位置与法线都来自命中结果。",
      "steps": [
        {
          "step": 1,
          "id": 111,
          "en": "Get Player Controller",
          "zh": "获取玩家控制器",
          "note": "取得当前玩家的控制器。"
        },
        {
          "step": 2,
          "id": 122,
          "en": "Get Mouse Position",
          "zh": "获取鼠标位置",
          "note": "读取屏幕上的鼠标位置。"
        },
        {
          "step": 3,
          "id": 121,
          "en": "Deproject Screen to World",
          "zh": "屏幕坐标转世界射线",
          "note": "把屏幕坐标转换成世界空间起点与方向。"
        },
        {
          "step": 4,
          "id": 276,
          "en": "Line Trace By Channel",
          "zh": "按通道发射线检测",
          "note": "沿方向检测第一个命中。"
        },
        {
          "step": 5,
          "id": 284,
          "en": "Break Hit Result",
          "zh": "拆分命中结果",
          "note": "拆分命中结果。"
        },
        {
          "step": 6,
          "id": 285,
          "en": "Hit Actor",
          "zh": "命中的 Actor",
          "note": "获取真正被打中的 Actor。"
        },
        {
          "step": 7,
          "id": 87,
          "en": "Is Valid",
          "zh": "是否有效",
          "note": "访问对象成员前检查引用。"
        },
        {
          "step": 8,
          "id": 256,
          "en": "Add Impulse",
          "zh": "添加冲量",
          "note": "给可移动物体施加击退反馈。"
        }
      ],
      "extensions": [
        {
          "id": 278,
          "en": "Multi Line Trace By Channel",
          "zh": "按通道多次射线检测",
          "note": "需要穿透或多个命中时改成多次射线。"
        },
        {
          "id": 277,
          "en": "Line Trace For Objects",
          "zh": "按物体类型发射线检测",
          "note": "只检测指定 Object Type。"
        },
        {
          "id": 360,
          "en": "Create Dynamic Material Instance",
          "zh": "创建动态材质实例",
          "note": "命中时改变颜色或发光参数。"
        }
      ]
    },
    {
      "id": "physics",
      "title": "物理箱子与击飞",
      "short": "开启碰撞与物理模拟，再用冲量和阻尼控制真实反馈。",
      "level": "入门",
      "outcome": "物体不动时，依次检查是否模拟物理、碰撞是否启用、是否已休眠以及质量是否过大。",
      "steps": [
        {
          "step": 1,
          "id": 265,
          "en": "Collision Enabled",
          "zh": "碰撞启用状态",
          "note": "先确认物体能参与物理碰撞。"
        },
        {
          "step": 2,
          "id": 247,
          "en": "Simulate Physics",
          "zh": "模拟物理",
          "note": "开启重力与刚体模拟。"
        },
        {
          "step": 3,
          "id": 256,
          "en": "Add Impulse",
          "zh": "添加冲量",
          "note": "给箱子一个瞬时推力。"
        },
        {
          "step": 4,
          "id": 260,
          "en": "Set Physics Linear Velocity",
          "zh": "设置物理线速度",
          "note": "直接覆盖当前速度。"
        },
        {
          "step": 5,
          "id": 252,
          "en": "Linear Damping",
          "zh": "线性阻尼",
          "note": "让箱子逐渐减速并停止。"
        },
        {
          "step": 6,
          "id": 321,
          "en": "Set Life Span",
          "zh": "设置寿命",
          "note": "碎片或临时物体到时自动销毁。"
        }
      ],
      "extensions": [
        {
          "id": 254,
          "en": "Add Force",
          "zh": "添加力",
          "note": "持续施加风、吸引或推进力。"
        },
        {
          "id": 272,
          "en": "Generate Hit Events",
          "zh": "生成命中事件",
          "note": "需要碰撞命中反馈时开启。"
        },
        {
          "id": 253,
          "en": "Angular Damping",
          "zh": "角阻尼",
          "note": "防止物体长时间乱转。"
        }
      ]
    },
    {
      "id": "pause-ui",
      "title": "暂停菜单与输入模式",
      "short": "显示 UMG、切换输入模式、显示鼠标并暂停游戏。",
      "level": "入门",
      "outcome": "输入模式、鼠标和暂停是三个独立设置；返回游戏时要成组恢复。",
      "steps": [
        {
          "step": 1,
          "id": 371,
          "en": "Create Widget",
          "zh": "创建控件",
          "note": "创建暂停菜单控件。"
        },
        {
          "step": 2,
          "id": 372,
          "en": "Add to Viewport",
          "zh": "添加到视口",
          "note": "把菜单显示到屏幕。"
        },
        {
          "step": 3,
          "id": 113,
          "en": "Set Input Mode UI Only",
          "zh": "输入模式仅 UI",
          "note": "让点击交给界面。"
        },
        {
          "step": 4,
          "id": 115,
          "en": "Set Show Mouse Cursor",
          "zh": "显示或隐藏鼠标",
          "note": "显示鼠标方便点击。"
        },
        {
          "step": 5,
          "id": 485,
          "en": "Set Game Paused",
          "zh": "设置游戏暂停",
          "note": "暂停游戏时间推进。"
        },
        {
          "step": 6,
          "id": 374,
          "en": "Remove from Parent",
          "zh": "从父控件移除",
          "note": "关闭菜单时移除控件。"
        },
        {
          "step": 7,
          "id": 112,
          "en": "Set Input Mode Game Only",
          "zh": "输入模式仅游戏",
          "note": "恢复游戏操作。"
        },
        {
          "step": 8,
          "id": 115,
          "en": "Set Show Mouse Cursor",
          "zh": "显示或隐藏鼠标",
          "note": "返回游戏时隐藏鼠标。"
        }
      ],
      "extensions": [
        {
          "id": 370,
          "en": "Tick Even when Paused",
          "zh": "暂停时仍执行 Tick",
          "note": "暂停菜单需要持续更新的对象可开启。"
        },
        {
          "id": 471,
          "en": "Save Game to Slot",
          "zh": "保存游戏到存档槽",
          "note": "在菜单中加入保存按钮。"
        },
        {
          "id": 482,
          "en": "Open Level (by Name)",
          "zh": "按名称打开关卡",
          "note": "在菜单中切换关卡。"
        }
      ]
    },
    {
      "id": "ai-patrol",
      "title": "敌人巡逻与追踪",
      "short": "导航网格、随机可达点、行为树和 AI Move To 共同组成敌人行为。",
      "level": "进阶",
      "outcome": "AI 不动时优先检查导航覆盖、NavMesh 构建和 Move To 返回结果。",
      "steps": [
        {
          "step": 1,
          "id": 458,
          "en": "NavMeshBoundsVolume",
          "zh": "导航网格边界体积",
          "note": "划定 AI 可以行走的区域。"
        },
        {
          "step": 2,
          "id": 455,
          "en": "Get Random Reachable Point in Radius",
          "zh": "获取半径内随机可达点",
          "note": "获取可导航的巡逻点。"
        },
        {
          "step": 3,
          "id": 450,
          "en": "AI Move To",
          "zh": "AI 移动到目标",
          "note": "让 AI Pawn 移动到目标。"
        },
        {
          "step": 4,
          "id": 460,
          "en": "AIController",
          "zh": "AI 控制器",
          "note": "运行 AI 行为并持有决策逻辑。"
        },
        {
          "step": 5,
          "id": 461,
          "en": "Behavior Tree",
          "zh": "行为树",
          "note": "组织巡逻、追踪和攻击任务。"
        },
        {
          "step": 6,
          "id": 462,
          "en": "Blackboard",
          "zh": "黑板",
          "note": "保存当前目标、巡逻点与状态。"
        },
        {
          "step": 7,
          "id": 466,
          "en": "Pawn Sensing",
          "zh": "Pawn 感知组件",
          "note": "识别附近玩家。"
        },
        {
          "step": 8,
          "id": 452,
          "en": "Move To Actor",
          "zh": "移动到 Actor",
          "note": "目标会移动时持续追踪。"
        }
      ],
      "extensions": [
        {
          "id": 469,
          "en": "Set Focus",
          "zh": "让 AI 注视目标",
          "note": "对话或战斗时面向玩家。"
        },
        {
          "id": 468,
          "en": "Get Controlled Pawn",
          "zh": "获取被控制 Pawn",
          "note": "从 AIController 取回当前 AI 角色。"
        },
        {
          "id": 470,
          "en": "Clear Focus",
          "zh": "清除注视",
          "note": "结束交互后取消注视。"
        }
      ]
    },
    {
      "id": "save-load",
      "title": "保存与读取进度",
      "short": "建立 SaveGame 数据容器，写入槽位并在下次启动时恢复。",
      "level": "进阶",
      "outcome": "SaveGame 对象保存数据，槽位负责存储；跨关卡的小型全局状态可以放 GameInstance。",
      "steps": [
        {
          "step": 1,
          "id": 475,
          "en": "Create Save Game Object",
          "zh": "创建存档对象",
          "note": "创建存档数据容器。"
        },
        {
          "step": 2,
          "id": 476,
          "en": "SaveGame",
          "zh": "存档类",
          "note": "用它作为自定义存档类的父类。"
        },
        {
          "step": 3,
          "id": 23,
          "en": "Blueprint Variable",
          "zh": "蓝图变量",
          "note": "把玩家位置、金币和已解锁内容写成可保存变量。"
        },
        {
          "step": 4,
          "id": 471,
          "en": "Save Game to Slot",
          "zh": "保存游戏到存档槽",
          "note": "把数据写入指定槽位。"
        },
        {
          "step": 5,
          "id": 473,
          "en": "Does Save Game Exist",
          "zh": "存档是否存在",
          "note": "读取前判断槽位是否存在。"
        },
        {
          "step": 6,
          "id": 472,
          "en": "Load Game from Slot",
          "zh": "从存档槽加载",
          "note": "读取已有存档。"
        },
        {
          "step": 7,
          "id": 44,
          "en": "Cast To",
          "zh": "类型转换",
          "note": "把加载对象转换成具体的 SaveGame 子类。"
        },
        {
          "step": 8,
          "id": 477,
          "en": "Get Game Instance",
          "zh": "获取游戏实例",
          "note": "读取需要跨关卡保留的少量全局状态。"
        }
      ],
      "extensions": [
        {
          "id": 474,
          "en": "Delete Game in Slot",
          "zh": "删除存档槽",
          "note": "实现删除存档按钮。"
        },
        {
          "id": 543,
          "en": "String Table",
          "zh": "字符串表",
          "note": "把存档标题和提示做成可本地化文本。"
        },
        {
          "id": 533,
          "en": "Data Asset",
          "zh": "数据资产",
          "note": "把静态物品配置与玩家动态存档分开。"
        }
      ]
    },
    {
      "id": "network-fire",
      "title": "多人开火同步",
      "short": "本地输入触发服务器判定，再把所有人能看到的表现广播出去。",
      "level": "进阶",
      "outcome": "输入在客户端，伤害和生成等关键规则放服务器，声音与特效可多播给客户端。",
      "steps": [
        {
          "step": 1,
          "id": 93,
          "en": "EnhancedInputAction",
          "zh": "增强输入动作",
          "note": "本地客户端接收开火输入。"
        },
        {
          "step": 2,
          "id": 125,
          "en": "Is Locally Controlled",
          "zh": "是否本地控制",
          "note": "确认该 Pawn 由当前客户端控制。"
        },
        {
          "step": 3,
          "id": 508,
          "en": "Switch Has Authority",
          "zh": "根据权限分支",
          "note": "区分服务器与远端执行分支。"
        },
        {
          "step": 4,
          "id": 512,
          "en": "Run on Server",
          "zh": "在服务器执行",
          "note": "请求服务器执行开火判定。"
        },
        {
          "step": 5,
          "id": 276,
          "en": "Line Trace By Channel",
          "zh": "按通道发射线检测",
          "note": "服务器验证命中对象。"
        },
        {
          "step": 6,
          "id": 511,
          "en": "Multicast",
          "zh": "多播事件",
          "note": "通知相关客户端播放开火表现。"
        },
        {
          "step": 7,
          "id": 302,
          "en": "Spawn Actor from Class",
          "zh": "从类生成 Actor",
          "note": "在服务器生成可复制的投射物或效果。"
        },
        {
          "step": 8,
          "id": 409,
          "en": "Play Sound at Location",
          "zh": "在世界位置播放声音",
          "note": "在命中位置播放空间音效。"
        }
      ],
      "extensions": [
        {
          "id": 502,
          "en": "Replicated",
          "zh": "复制变量标记",
          "note": "同步血量、弹药等关键状态。"
        },
        {
          "id": 503,
          "en": "Replicated Using",
          "zh": "复制时回调",
          "note": "同步后触发表现回调。"
        },
        {
          "id": 504,
          "en": "RepNotify",
          "zh": "复制通知",
          "note": "让客户端在状态复制后更新 UI。"
        },
        {
          "id": 519,
          "en": "Get Net Mode",
          "zh": "获取网络模式",
          "note": "调试专用服务器与客户端分支。"
        }
      ]
    }
  ],
  "tutorials": [
    {
      "id": "blueprint-overview",
      "title": "蓝图可视化脚本",
      "category": "入门总览",
      "type": "官方文档",
      "level": "入门",
      "summary": "理解 Blueprint 的类、事件图、变量、函数、宏与组件之间的关系，适合作为整条学习路线的起点。",
      "learn": "知道该把逻辑放在 Level Blueprint、Blueprint Class 还是组件中，并能读懂一个基础节点图。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/blueprints-visual-scripting-in-unreal-engine",
      "scenarioIds": [
        "pickup",
        "movement"
      ],
      "related": [
        "Blueprint Class",
        "Event Graph",
        "Blueprint Variable",
        "Component"
      ],
      "track": "蓝图基础路线",
      "intent": "概念理解",
      "tags": [
        "Blueprint",
        "类",
        "事件图",
        "组件"
      ],
      "prerequisite": "无需前置知识，先理解蓝图是什么。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        1,
        17,
        23,
        19
      ]
    },
    {
      "id": "blueprint-basic-guide",
      "title": "蓝图基础用户指南",
      "category": "入门总览",
      "type": "官方快速入门",
      "level": "入门",
      "summary": "通过实操建立第一个蓝图，并练习变量、事件、函数、流程控制与对象通信。",
      "learn": "把单独的节点连成可运行的小功能，并理解何时应该创建函数或自定义事件。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/blueprint-basic-user-guide-in-unreal-engine",
      "scenarioIds": [
        "pickup",
        "pause-ui"
      ],
      "related": [
        "Blueprint Class",
        "Branch",
        "Function",
        "Cast To"
      ],
      "track": "蓝图基础路线",
      "intent": "动手实现",
      "tags": [
        "变量",
        "函数",
        "流程",
        "对象通信"
      ],
      "prerequisite": "已经能打开蓝图编辑器并创建 Blueprint Class。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        1,
        127,
        36,
        44
      ]
    },
    {
      "id": "events",
      "title": "Unreal Engine 事件",
      "category": "事件与输入",
      "type": "官方文档",
      "level": "基础",
      "summary": "理解 BeginPlay、Tick、输入事件和自定义事件如何进入执行流程。",
      "learn": "看懂白色执行线从哪里开始，并能判断一次性初始化、持续更新和事件驱动的区别。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/events-in-unreal-engine",
      "scenarioIds": [
        "pickup",
        "movement"
      ],
      "related": [
        "Event BeginPlay",
        "Event Tick",
        "Custom Event",
        "Execution Pin"
      ],
      "track": "蓝图基础路线",
      "intent": "概念理解",
      "tags": [
        "BeginPlay",
        "Tick",
        "事件",
        "执行线"
      ],
      "prerequisite": "知道事件图是什么。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        89,
        90,
        91,
        42
      ]
    },
    {
      "id": "blueprint-communication",
      "title": "蓝图通信",
      "category": "事件与输入",
      "type": "官方文档",
      "level": "进阶",
      "summary": "比较 Cast、接口、Event Dispatcher 等通信方式，减少对象之间的硬引用。",
      "learn": "根据对象关系选择直接引用、类型转换或事件派发，并知道耦合更低的方案。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/blueprint-communication-in-unreal-engine",
      "scenarioIds": [
        "pickup",
        "pause-ui"
      ],
      "related": [
        "Cast To",
        "Blueprint Interface",
        "Event Dispatcher",
        "Bind Event"
      ],
      "track": "蓝图基础路线",
      "intent": "系统设计",
      "tags": [
        "Cast",
        "接口",
        "Event Dispatcher",
        "低耦合"
      ],
      "prerequisite": "理解对象引用、类型和事件。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        44,
        3,
        34,
        35
      ]
    },
    {
      "id": "enhanced-input",
      "title": "增强输入 Enhanced Input",
      "category": "事件与输入",
      "type": "官方文档",
      "level": "基础",
      "summary": "建立 Input Action 与 Input Mapping Context，区分 Started、Triggered、Completed 等输入阶段。",
      "learn": "把 WASD、鼠标和摇杆输入接到角色移动与镜头控制，而不是把按键写死在蓝图里。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/enhanced-input-in-unreal-engine",
      "scenarioIds": [
        "movement",
        "network-fire"
      ],
      "related": [
        "EnhancedInputAction",
        "Axis2D",
        "Add Movement Input",
        "Input Action Value"
      ],
      "track": "交互系统路线",
      "intent": "动手实现",
      "tags": [
        "Input Action",
        "Mapping Context",
        "移动",
        "镜头"
      ],
      "prerequisite": "知道 Pawn、Character 和 Player Controller。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        93,
        100,
        102,
        98
      ]
    },
    {
      "id": "umg-ui",
      "title": "UMG UI 设计器快速入门",
      "category": "界面 UI",
      "type": "官方快速入门",
      "level": "入门",
      "summary": "创建 Widget Blueprint，布局按钮、文本与进度条，并把它显示到玩家屏幕上。",
      "learn": "完成一个能打开、关闭、更新文本并切换输入模式的 UI，而不是只停留在 Designer 布局。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/umg-ui-designer-quick-start-guide-in-unreal-engine",
      "scenarioIds": [
        "pause-ui",
        "pickup"
      ],
      "related": [
        "Create Widget",
        "Add to Viewport",
        "Set Text (Text)",
        "Set Input Mode UI Only"
      ],
      "track": "交互系统路线",
      "intent": "动手实现",
      "tags": [
        "Widget",
        "按钮",
        "文本",
        "输入模式"
      ],
      "prerequisite": "知道如何把控件添加到 Viewport。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        371,
        372,
        379,
        113
      ]
    },
    {
      "id": "collision",
      "title": "虚幻引擎中的碰撞",
      "category": "碰撞与物理",
      "type": "官方文档",
      "level": "基础",
      "summary": "理解碰撞启用状态、碰撞预设、对象类型、追踪通道和重叠事件。",
      "learn": "定位为什么角色穿墙、射线打不中或触发区没有反应，并正确组合 Query 与 Overlap。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/collision-in-unreal-engine",
      "scenarioIds": [
        "pickup",
        "trace"
      ],
      "related": [
        "Collision Enabled",
        "Generate Overlap Events",
        "Line Trace By Channel",
        "Break Hit Result"
      ],
      "track": "交互系统路线",
      "intent": "排错与实现",
      "tags": [
        "Overlap",
        "Block",
        "射线",
        "碰撞预设"
      ],
      "prerequisite": "理解 Actor 与组件的基础区别。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        265,
        271,
        276,
        284
      ]
    },
    {
      "id": "physics",
      "title": "虚幻引擎中的物理",
      "category": "碰撞与物理",
      "type": "官方文档",
      "level": "基础",
      "summary": "理解刚体模拟、重力、质量、冲量、力和阻尼，建立可信的击飞与物体反馈。",
      "learn": "能够排查物理物体为什么不动，并把碰撞检测与物理反馈正确衔接。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/physics-in-unreal-engine",
      "scenarioIds": [
        "physics"
      ],
      "related": [
        "Simulate Physics",
        "Add Impulse",
        "Add Force",
        "Linear Damping"
      ],
      "track": "玩法表现路线",
      "intent": "动手实现",
      "tags": [
        "刚体",
        "重力",
        "冲量",
        "阻尼"
      ],
      "prerequisite": "理解碰撞启用状态和基础向量。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        247,
        256,
        254,
        252
      ]
    },
    {
      "id": "animation-blueprints",
      "title": "虚幻引擎中的动画蓝图",
      "category": "动画",
      "type": "官方文档",
      "level": "进阶",
      "summary": "学习 Animation Blueprint、状态机与变量驱动动画，让角色动作响应当前游戏状态。",
      "learn": "把移动速度、是否跳跃等变量映射到动画状态，并理解状态转移的基本条件。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/animation-blueprints-in-unreal-engine",
      "scenarioIds": [
        "movement",
        "ai-patrol"
      ],
      "related": [
        "Animation Blueprint",
        "State Machine",
        "Transition Rule",
        "Event Blueprint Update Animation"
      ],
      "track": "玩法表现路线",
      "intent": "系统设计",
      "tags": [
        "AnimGraph",
        "状态机",
        "转移规则",
        "变量"
      ],
      "prerequisite": "已经有骨骼网格与动画资源。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        15,
        441,
        442,
        440
      ]
    },
    {
      "id": "navigation",
      "title": "虚幻引擎中的寻路系统",
      "category": "AI 与导航",
      "type": "官方文档",
      "level": "进阶",
      "summary": "配置 NavMesh、导航边界和查询，让 AI 能获得可达点并沿路径移动。",
      "learn": "定位 AI 不移动的问题，理解导航网格覆盖、可导航随机点和 Move To 的关系。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/navigation-system-in-unreal-engine",
      "scenarioIds": [
        "ai-patrol"
      ],
      "related": [
        "NavMeshBoundsVolume",
        "Get Random Reachable Point in Radius",
        "AI Move To",
        "Move To Actor"
      ],
      "track": "AI 与流程路线",
      "intent": "系统设计",
      "tags": [
        "NavMesh",
        "寻路",
        "可达点",
        "AI Move To"
      ],
      "prerequisite": "知道 Pawn 与 AI Controller 的职责。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        458,
        455,
        450,
        452
      ]
    },
    {
      "id": "save-load",
      "title": "在虚幻引擎中保存和加载游戏",
      "category": "存档与流程",
      "type": "官方文档",
      "level": "进阶",
      "summary": "创建 SaveGame 类、保存到槽位并在游戏启动后恢复玩家进度。",
      "learn": "把需要持久化的变量集中到存档类，并区分静态配置和动态游戏状态。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/saving-and-loading-your-game-in-unreal-engine",
      "scenarioIds": [
        "save-load"
      ],
      "related": [
        "Create Save Game Object",
        "Save Game to Slot",
        "Load Game from Slot",
        "Does Save Game Exist"
      ],
      "track": "AI 与流程路线",
      "intent": "系统设计",
      "tags": [
        "SaveGame",
        "槽位",
        "读取",
        "持久化"
      ],
      "prerequisite": "理解变量和关卡流程。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        475,
        471,
        472,
        473
      ]
    },
    {
      "id": "networking",
      "title": "虚幻引擎中的联网和多人游戏",
      "category": "联网",
      "type": "官方文档",
      "level": "进阶",
      "summary": "理解服务器权威、Actor 复制、RPC 与客户端反馈，建立多人游戏的基本心智模型。",
      "learn": "判断哪些逻辑必须在服务器执行，哪些视觉反馈应该通知客户端。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/networking-and-multiplayer-in-unreal-engine",
      "scenarioIds": [
        "network-fire"
      ],
      "related": [
        "Switch Has Authority",
        "Run on Server",
        "Multicast",
        "Replicated"
      ],
      "track": "联网与数据路线",
      "intent": "系统设计",
      "tags": [
        "服务器权威",
        "复制",
        "RPC",
        "Multicast"
      ],
      "prerequisite": "先理解 Actor 生命周期和玩家控制器。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        508,
        512,
        511,
        502
      ]
    },
    {
      "id": "materials",
      "title": "在虚幻引擎中创建和使用材质实例",
      "category": "材质表现",
      "type": "官方快速入门",
      "level": "基础",
      "summary": "通过动态材质实例在运行时改变颜色、数值与纹理参数。",
      "learn": "为受击、拾取或选中状态制作可切换的视觉反馈，而不是复制整套材质。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/creating-and-using-material-instances-in-unreal-engine",
      "scenarioIds": [
        "trace",
        "pickup"
      ],
      "related": [
        "Create Dynamic Material Instance",
        "Set Vector Parameter Value",
        "Set Scalar Parameter Value",
        "Set Material"
      ],
      "track": "玩法表现路线",
      "intent": "动手实现",
      "tags": [
        "材质实例",
        "颜色",
        "参数",
        "反馈"
      ],
      "prerequisite": "了解组件如何设置材质。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        360,
        361,
        362,
        359
      ]
    },
    {
      "id": "data-driven",
      "title": "数据驱动 Gameplay 元素",
      "category": "数据与架构",
      "type": "官方文档",
      "level": "进阶",
      "summary": "理解 Data Asset、Data Table 和配置驱动方式，将玩法数据与蓝图逻辑分开。",
      "learn": "用数据表扩展物品、敌人和技能配置，避免在蓝图中硬编码大量参数。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/data-driven-gameplay-elements-in-unreal-engine",
      "scenarioIds": [
        "pickup",
        "save-load"
      ],
      "related": [
        "Data Table",
        "Data Asset",
        "Get Data Table Row",
        "Structure"
      ],
      "track": "联网与数据路线",
      "intent": "系统设计",
      "tags": [
        "Data Table",
        "Data Asset",
        "配置",
        "Struct"
      ],
      "prerequisite": "能够创建变量和结构体。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        526,
        533,
        528,
        67
      ]
    },
    {
      "id": "gameplay-framework",
      "title": "虚幻引擎中的 Gameplay 框架",
      "category": "数据与架构",
      "type": "官方文档",
      "level": "进阶",
      "summary": "分清 GameMode、GameState、PlayerController、PlayerState 与 Pawn 的职责。",
      "learn": "知道玩家输入、共享状态、玩家个人状态和游戏规则分别应该放在哪个对象。",
      "url": "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/gameplay-framework-in-unreal-engine",
      "scenarioIds": [
        "pause-ui",
        "save-load",
        "network-fire"
      ],
      "related": [
        "Game Mode Base",
        "Game State Base",
        "Player Controller",
        "Player State"
      ],
      "track": "AI 与流程路线",
      "intent": "概念理解",
      "tags": [
        "GameMode",
        "GameState",
        "Controller",
        "PlayerState"
      ],
      "prerequisite": "知道关卡中会存在多种游戏对象。",
      "verifiedOn": "2026-10-27",
      "relatedIds": [
        9,
        10,
        11,
        12
      ]
    },
    {
      "id": "epic-learning-catalog",
      "title": "Epic 官方学习资源目录",
      "category": "官方入口",
      "type": "官方学习平台",
      "level": "索引",
      "summary": "进入 Epic Developer Community 的 Unreal Engine 学习目录，继续浏览官方教程、课程、示例与社区内容。",
      "learn": "用官方分类和搜索继续查找本页尚未收录的视频、课程与示例工程。",
      "url": "https://dev.epicgames.com/community/unreal-engine/learning",
      "scenarioIds": [],
      "related": [],
      "track": "继续检索",
      "intent": "查找更多资料",
      "tags": [
        "官方目录",
        "课程",
        "示例",
        "社区"
      ],
      "prerequisite": "先从本页找到目标主题，再用目录扩大搜索。",
      "verifiedOn": "2026-10-27",
      "relatedIds": []
    }
  ],
  "reviewSchedule": [
    {
      "label": "5 分钟",
      "minutes": 5
    },
    {
      "label": "30 分钟",
      "minutes": 30
    },
    {
      "label": "12 小时",
      "minutes": 720
    },
    {
      "label": "1 天",
      "minutes": 1440
    },
    {
      "label": "2 天",
      "minutes": 2880
    },
    {
      "label": "4 天",
      "minutes": 5760
    },
    {
      "label": "7 天",
      "minutes": 10080
    },
    {
      "label": "15 天",
      "minutes": 21600
    },
    {
      "label": "30 天",
      "minutes": 43200
    }
  ]
};
