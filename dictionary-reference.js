/*
 * Independently written bilingual UE5 reference vocabulary.
 * System documentation links describe context, not verification of an exact node name.
 * Reference IDs are permanent; the learning corpus and existing progress IDs stay intact.
 */
(() => {
  const data = window.BLUEPRINT_DATA;
  if (!data?.terms) return;
  const root = "https://dev.epicgames.com/documentation/en-us/unreal-engine/";
  const sections = [
    ["编辑器与项目", "unreal-engine-terminology", "编辑器、资源管理与项目设置中的界面术语。", `
Unreal Editor|虚幻编辑器
Project|项目
Project Browser|项目浏览器
Project Settings|项目设置
Editor Preferences|编辑器偏好设置
Plugins|插件
Content Drawer|内容抽屉
Content Browser|内容浏览器
World Outliner|世界大纲视图
Details Panel|细节面板
Viewport|视口
Perspective|透视视图
Orthographic|正交视图
Top View|顶视图
Front View|前视图
Side View|侧视图
Lit|光照显示
Unlit|无光照显示
Wireframe|线框显示
Game View|游戏视图
Immersive Mode|沉浸模式
Realtime|实时更新
Show Flags|显示标记
Scalability|可伸缩性设置
Engine Scalability Settings|引擎可伸缩性设置
Exposure|曝光
Camera Speed|摄像机移动速度
Field of View|视野角度
Pilot Actor|操控该Actor视角
Bookmark|视口书签
Snap|吸附
Grid Snapping|网格吸附
Rotation Snapping|旋转吸附
Scale Snapping|缩放吸附
Surface Snapping|表面吸附
Vertex Snapping|顶点吸附
Pivot|轴心点
Gizmo|变换操纵器
Local Space|局部空间
World Space|世界空间
Selection|选择
Multi Selection|多选
Group Actors|编组Actor
Lock Actor Movement|锁定Actor移动
Duplicate|复制对象
Rename|重命名
Delete|删除
Undo|撤销
Redo|重做
Save All|全部保存
Fix Up Redirectors|修复重定向器
Reference Viewer|引用查看器
Size Map|资源大小图
Asset Audit|资源审计
Migrate|迁移资源
Redirector|重定向器
Collection|资源集合
Favorite|收藏
Filter|筛选器
Search|搜索
Import|导入
Export|导出
Reimport|重新导入
Auto Reimport|自动重新导入
Source Control|版本控制
Check Out|签出
Submit to Source Control|提交到版本控制
Changelist|变更列表
Diff|比较差异
Conflict|冲突
Template|模板
Feature Pack|功能包
Starter Content|初学者内容
Derived Data Cache|派生数据缓存；DDC
DDC|派生数据缓存
Intermediate|中间生成目录
Saved|项目保存数据目录
Config|配置目录
Content|内容目录
Binaries|二进制文件目录
uproject|虚幻项目文件扩展名
uasset|虚幻资源文件扩展名
umap|关卡文件扩展名
`],
    ["蓝图图表与编程", "blueprints-visual-scripting-in-unreal-engine", "蓝图编辑器、节点连线和面向对象编程中的术语。", `
Blueprint|蓝图
Blueprint Editor|蓝图编辑器
Blueprint Class|蓝图类
Level Blueprint|关卡蓝图
Blueprint Interface|蓝图接口
Blueprint Function Library|蓝图函数库
Blueprint Macro Library|蓝图宏库
Data Only Blueprint|仅数据蓝图
Event Graph|事件图表
Construction Script|构造脚本
Function Graph|函数图表
My Blueprint|我的蓝图面板
Components Panel|组件面板
Class Settings|类设置
Class Defaults|类默认值
Parent Class|父类
Reparent Blueprint|重新指定蓝图父类
Compile|编译
Compiler Results|编译结果
Find in Blueprints|在蓝图中查找
Context Sensitive|情境关联筛选
Node|节点
Pin|引脚
Input Pin|输入引脚
Output Pin|输出引脚
Execution Pin|执行引脚
Data Pin|数据引脚
Wire|连线
Reroute Node|重路由节点
Comment Box|注释框
Collapsed Graph|折叠图表
Collapse to Function|折叠为函数
Collapse to Macro|折叠为宏
Promote to Variable|提升为变量
Split Struct Pin|拆分结构体引脚
Recombine Struct Pin|重新合并结构体引脚
Watch This Value|监视此值
Breakpoint|断点
Debug Filter|调试对象筛选
Pure Function|纯函数
Impure Function|带执行引脚的非纯函数
Const Function|不修改对象状态的函数
Latent Action|潜在动作；可延后完成的操作
Local Variable|局部变量
Member Variable|成员变量
Return Value|返回值
Return Node|返回节点
Pass by Reference|按引用传递
Default Value|默认值
Instance Editable|实例可编辑
Expose on Spawn|生成时公开
Private|私有
Protected|受保护
Public|公开
Read Only|只读
Category|分类
Tooltip|提示说明
Deprecation|弃用标记
Deprecated|已弃用
Override|重写
Inheritance|继承
Interface|接口
Implementation|实现
Instance|实例
Object Reference|对象引用
Class Reference|类引用
Soft Object Reference|软对象引用
Soft Class Reference|软类引用
Hard Reference|硬引用
Weak Reference|弱引用
Circular Reference|循环引用
Garbage Collection|垃圾回收
Serialization|序列化
Reflection|反射
Delegate|委托
Multicast Delegate|多播委托
Event Dispatcher|事件分发器
Bind Event|绑定事件
Unbind Event|解绑事件
Call Parent Function|调用父类函数
Message|接口消息
Self|自身对象
Target|目标对象
Outer|外部持有对象
Object Name|对象名称
Display Name|显示名称
`],
    ["数据类型与容器", "blueprint-variables-in-unreal-engine", "变量类型、集合容器和数据转换中的术语。", `
Boolean|布尔值；真或假
Byte|字节；8位无符号整数
Integer|整数
Integer64|64位整数
Float|浮点数
Double|双精度浮点数
Real|实数类型
String|字符串
Name|名称标识
Text|可本地化文本
Vector|三维向量
Vector2D|二维向量
Vector4|四维向量
Rotator|旋转角；俯仰偏航翻滚
Quaternion|四元数旋转
Transform|变换；位置旋转缩放
Linear Color|线性颜色
Color|颜色
Enum|枚举
Enumeration|枚举类型
Struct|结构体
Structure|结构体
Array|数组
Set|集合；元素不重复
Map|映射；键值对
Key|键
Value|值
Index|索引
Element|元素
Length|长度
Capacity|容量
Wildcard|通配类型
True|真
False|假
None|无值
Null|空引用
Valid|有效
Invalid|无效
Cast|类型转换
Conversion|转换
Append|追加
Insert|插入
Remove|移除
Clear|清空
Contains|包含
Find|查找
Sort|排序
Reverse|反转顺序
Shuffle|随机打乱
Resize|调整大小
Is Empty|是否为空
Last Index|最后一个索引
Is Valid Index|索引是否有效
Add Unique|不重复添加
Remove Index|按索引移除
Remove Item|按值移除元素
Find Item|查找元素索引
Set Array Elem|设置数组元素
Array Element|数组元素
Array Index|数组索引
Loop Body|循环体
Array Length|数组长度
Keys|全部键
Values|全部值
Union|并集
Intersection|交集
Difference|差集
To String|转为字符串
To Text|转为文本
Format Text|格式化文本
Parse Into Array|按分隔符拆成数组
Replace|替换
Substring|子字符串
Left Chop|从右端截去字符
Right Chop|从左端截去字符
Trim|去除两端空白
To Upper|转为大写
To Lower|转为小写
Starts With|是否以前缀开头
Ends With|是否以后缀结尾
Case Sensitive|区分大小写
Regular Expression|正则表达式
`],
    ["流程与时间", "flow-control-in-unreal-engine", "执行顺序、循环、时间轴和计时逻辑。", `
Branch|分支判断
Condition|条件
Sequence|顺序执行
Do Once|仅执行一次
Do N|执行指定次数
Gate|执行门
MultiGate|多路执行门
Flip Flop|交替执行
For Loop|计数循环
For Loop with Break|可中断的计数循环
For Each Loop|遍历数组
For Each Loop with Break|可中断的遍历
While Loop|条件循环
Completed|执行完成
Break|中断循环
Continue|继续
Switch on Int|按整数分流
Switch on Name|按名称分流
Switch on String|按字符串分流
Switch on Enum|按枚举分流
Select|按条件选择值
Delay|延迟执行
Retriggerable Delay|可重新计时的延迟
Set Timer by Event|按事件设置定时器
Set Timer by Function Name|按函数名设置定时器
Clear and Invalidate Timer by Handle|清除定时器并使句柄无效
Pause Timer by Handle|按句柄暂停定时器
Unpause Timer by Handle|恢复定时器
Is Timer Active by Handle|检查定时器是否运行
Is Timer Paused by Handle|检查定时器是否暂停
Get Timer Remaining Time by Handle|获取定时器剩余时间
Get Timer Elapsed Time by Handle|获取定时器已用时间
Timer Handle|定时器句柄
Timeline|时间轴
Float Track|浮点轨道
Vector Track|向量轨道
Event Track|事件轨道
Curve|曲线
Curve Float|浮点曲线
Curve Vector|向量曲线
Play from Start|从头播放
Reverse from End|从结尾倒放
Set Play Rate|设置播放速率
Set New Time|设置新的时间位置
Finished|播放完成
Update|更新
Delta Seconds|当前帧耗时秒数
Time Dilation|时间膨胀；时间倍率
Set Global Time Dilation|设置全局时间倍率
Set Game Paused|设置游戏暂停
Get Game Time in Seconds|获取游戏时间秒数
Get Real Time Seconds|获取真实经过时间
Tick Interval|Tick执行间隔
Tick Group|Tick执行阶段
Async|异步
Synchronous|同步
Callback|回调
`],
    ["数学与空间", "BlueprintAPI?application_version=5.6", "标量运算、向量方向与空间变换。节点名称和重载以当前引擎为准。", `
Translation|平移
Rotation|旋转
Scale|缩放
Location|位置
Position|位置坐标
Direction|方向
Forward|前方
Right|右侧
Up|上方
Pitch|俯仰角
Yaw|偏航角
Roll|翻滚角
Axis|轴
X Axis|X轴
Y Axis|Y轴
Z Axis|Z轴
Origin|原点
Offset|偏移
Distance|距离
Magnitude|模长
Normalize|归一化
Normalized|已归一化
Unit Vector|单位向量
Dot Product|点积
Cross Product|叉积
Vector Length|向量长度
Vector Length Squared|向量长度平方
Distance Squared|距离平方
Lerp|线性插值
Interpolation|插值
Alpha|插值比例；透明度通道
VInterp To|向量平滑趋近
RInterp To|旋转平滑趋近
FInterp To|浮点平滑趋近
Ease|缓动
Clamp|限制在区间内
Map Range Clamped|映射区间并限制结果
Map Range Unclamped|映射区间且不限制结果
Min|最小值
Max|最大值
Abs|绝对值
Sign|正负符号
Round|四舍五入
Floor|向下取整
Ceil|向上取整
Truncate|截去小数
Fraction|小数部分
Modulo|取余
Power|乘方
Square Root|平方根
Exponential|指数
Logarithm|对数
Sin|正弦
Cos|余弦
Tan|正切
Atan2|二参数反正切
Degrees|角度
Radians|弧度
Degrees to Radians|角度转弧度
Radians to Degrees|弧度转角度
Pi|圆周率
Random Stream|随机流
Random Integer in Range|区间随机整数
Random Float in Range|区间随机浮点数
Random Unit Vector|随机单位向量
Seed|随机种子
Nearly Equal|近似相等
Tolerance|容差
Epsilon|极小容差值
Make Vector|构造向量
Break Vector|拆分向量
Make Rotator|构造旋转
Break Rotator|拆分旋转
Make Transform|构造变换
Break Transform|拆分变换
Compose Transforms|组合变换
Invert Transform|求逆变换
Transform Location|变换位置坐标
Inverse Transform Location|反向变换位置坐标
Transform Direction|变换方向
Inverse Transform Direction|反向变换方向
Find Look at Rotation|计算朝向目标的旋转
Rotate Vector|旋转向量
Unrotate Vector|反向旋转向量
Project Vector on to Plane|将向量投影到平面
Mirror Vector by Normal|按法线镜像向量
Normal|法线
Plane|平面
Bounds|包围范围
Bounding Box|包围盒
Bounding Sphere|包围球
Extent|半尺寸范围
`],
    ["游戏框架与对象", "gameplay-framework-in-unreal-engine", "游戏规则、角色控制以及对象生命周期。", `
UObject|虚幻对象基类
Actor|可放入世界的对象
Pawn|可被控制的实体
Character|带角色移动能力的Pawn
Controller|控制器
Player Controller|玩家控制器
AI Controller|AI控制器
Game Mode|游戏规则模式
Game Mode Base|游戏模式基础类
Game State|游戏全局状态
Player State|玩家状态
Game Instance|游戏实例
Game Session|游戏会话
HUD|抬头显示界面
Player Camera Manager|玩家摄像机管理器
Spectator Pawn|观察者Pawn
Player Start|玩家出生点
World|世界
Level|关卡
Persistent Level|持久关卡
Sublevel|子关卡
World Settings|世界设置
Subsystem|子系统
Engine Subsystem|引擎子系统
Editor Subsystem|编辑器子系统
Game Instance Subsystem|游戏实例子系统
World Subsystem|世界子系统
Local Player Subsystem|本地玩家子系统
Spawn|生成对象
Destroy|销毁对象
Spawn Actor from Class|根据类生成Actor
Begin Deferred Actor Spawn from Class|开始延迟生成Actor
Finish Spawning Actor|完成Actor生成
Spawn Collision Handling Method|生成时碰撞处理方式
Always Spawn|始终生成
Owner|所有者
Instigator|发起者
Possess|控制Pawn
Un Possess|解除对Pawn的控制
Get Controlled Pawn|获取被控制的Pawn
Get Player Character|获取玩家角色
Get Player Pawn|获取玩家Pawn
Get Player Controller|获取玩家控制器
Get Game Instance|获取游戏实例
Get Game Mode|获取游戏模式
Get Game State|获取游戏状态
Get All Actors of Class|获取指定类的所有Actor
Get All Actors with Tag|获取带指定标签的Actor
Actor Has Tag|检查Actor标签
Get Actor of Class|获取指定类的一个Actor
Set Owner|设置所有者
Get Owner|获取所有者
Get Instigator|获取发起者
Get Class|获取对象所属类
Class Is Child Of|判断类是否继承自指定类
Does Implement Interface|是否实现接口
Is Valid|是否为有效对象
Is Actor Being Destroyed|Actor是否正在销毁
Set Life Span|设置存活时长
Get Life Span|获取剩余存活时长
Transient|瞬态；不持久保存
Archetype|原型对象
Class Default Object|类默认对象；CDO
CDO|类默认对象
Tick|逐帧更新
Begin Play|开始运行
End Play|结束运行
Construction|构造阶段
`],
    ["输入与角色移动", "enhanced-input-in-unreal-engine", "键鼠、手柄、触屏输入和角色移动参数。", `
Enhanced Input|增强输入
Input Action|输入动作
Input Mapping Context|输入映射上下文
Input Trigger|输入触发器
Input Modifier|输入修饰器
Input Component|输入组件
Enhanced Input Component|增强输入组件
Enhanced Input Local Player Subsystem|增强输入本地玩家子系统
Mapping|映射
Dead Zone|死区
Swizzle Input Axis Values|重排输入轴值
Negate|取反
Scalar|标量缩放
Chorded Action|组合按键动作
Hold|长按
Tap|轻点
Pulse|脉冲触发
Down|保持按下
Pressed|刚按下
Released|刚松开
Started|开始触发判断
Ongoing|触发条件持续处理中
Triggered|已满足触发条件
Completed|触发过程完成
Canceled|触发被取消
Consume Input|消耗输入
Input Priority|输入优先级
Enable Input|启用输入
Disable Input|禁用输入
Set Input Mode Game Only|仅游戏输入模式
Set Input Mode UI Only|仅界面输入模式
Set Input Mode Game and UI|游戏与界面共同输入模式
Show Mouse Cursor|显示鼠标光标
Mouse Sensitivity|鼠标灵敏度
Gamepad|手柄
Analog|模拟输入
Axis Value|轴输入值
Touch|触摸
Gesture|手势
Key Binding|按键绑定
Remapping|重新映射按键
Character Movement Component|角色移动组件
Movement Mode|移动模式
Walking|行走状态
Falling|下落状态
Swimming|游泳状态
Flying|飞行状态
Custom Movement Mode|自定义移动模式
Max Walk Speed|最大行走速度
Max Acceleration|最大加速度
Braking Deceleration Walking|行走制动减速度
Ground Friction|地面摩擦系数
Air Control|空中控制能力
Gravity Scale|重力倍率
Jump Z Velocity|起跳竖直速度
Jump Max Count|最大连续跳跃次数
Orient Rotation to Movement|旋转朝向移动方向
Use Controller Rotation Yaw|使用控制器偏航旋转
Rotation Rate|旋转速率
Crouched Half Height|蹲伏胶囊体半高
Step Height|可跨越台阶高度
Walkable Floor Angle|可行走地面角度
Movement Base|角色所站立的移动基底
Add Movement Input|添加移动输入
Add Controller Yaw Input|添加控制器偏航输入
Add Controller Pitch Input|添加控制器俯仰输入
Launch Character|弹射角色
Stop Movement Immediately|立即停止移动
Is Falling|是否正在下落
Is Moving on Ground|是否在地面移动
Is Swimming|是否正在游泳
Get Velocity|获取速度
Get Current Acceleration|获取当前加速度
Event Landed|落地事件
Landed|落地
`],
    ["组件与变换", "components-in-unreal-engine", "组件层级、物体附着和运行时空间操作。", `
Actor Component|Actor组件
Scene Component|场景组件
Primitive Component|图元组件
Root Component|根组件
Static Mesh Component|静态网格体组件
Skeletal Mesh Component|骨骼网格体组件
Instanced Static Mesh Component|实例化静态网格体组件
Hierarchical Instanced Static Mesh Component|分层实例化静态网格体组件
Spline Component|样条组件
Spline Mesh Component|样条网格体组件
Child Actor Component|子Actor组件
Spring Arm Component|弹簧臂组件
Camera Component|摄像机组件
Audio Component|音频组件
Widget Component|控件组件
Widget Interaction Component|控件交互组件
Projectile Movement Component|抛射体移动组件
Rotating Movement Component|旋转移动组件
Box Collision|盒体碰撞组件
Sphere Collision|球体碰撞组件
Capsule Collision|胶囊碰撞组件
Attach|附着
Detach|分离
Attachment|附着关系
Parent|父级
Child|子级
Socket|插槽
Bone|骨骼
Relative Transform|相对变换
World Transform|世界变换
Mobility|移动性
Static|静态
Stationary|固定；有限运行时变化
Movable|可移动
Visibility|可见性
Hidden in Game|游戏中隐藏
Activate|激活
Deactivate|停用
Set Visibility|设置可见性
Set Hidden in Game|设置游戏中隐藏
Set Actor Hidden in Game|设置Actor在游戏中隐藏
Get Actor Location|获取Actor位置
Set Actor Location|设置Actor位置
Get Actor Rotation|获取Actor旋转
Set Actor Rotation|设置Actor旋转
Get Actor Transform|获取Actor变换
Set Actor Transform|设置Actor变换
Add Actor World Offset|添加Actor世界位置偏移
Add Actor Local Offset|添加Actor局部位置偏移
Add Actor World Rotation|添加Actor世界旋转
Add Actor Local Rotation|添加Actor局部旋转
Set Relative Location|设置相对位置
Set Relative Rotation|设置相对旋转
Set Relative Scale 3D|设置相对三维缩放
Set World Location|设置世界位置
Set World Rotation|设置世界旋转
Get World Location|获取世界位置
Get Forward Vector|获取前方向量
Get Right Vector|获取右方向量
Get Up Vector|获取上方向量
Attach Actor to Component|将Actor附着到组件
Attach Component to Component|将组件附着到组件
Detach from Actor|从Actor分离
Get Component by Class|按类获取组件
Get Components by Class|按类获取组件列表
Get Children Components|获取子组件
Get Socket Location|获取插槽位置
Get Socket Transform|获取插槽变换
Keep Relative|保持相对变换
Keep World|保持世界变换
Snap to Target|吸附到目标变换
Weld Simulated Bodies|焊接模拟刚体
`],
    ["碰撞射线与伤害", "collision-in-unreal-engine", "物理碰撞、射线检测、命中结果与伤害传递。", `
Collision|碰撞
Collision Presets|碰撞预设
Collision Enabled|碰撞启用方式
Collision Response|碰撞响应
Collision Channel|碰撞通道
Object Channel|对象通道
Trace Channel|射线通道
Object Type|对象类型
World Static|世界静态物体
World Dynamic|世界动态物体
Physics Body|物理物体
Visibility Channel|可见性检测通道
Camera Channel|摄像机检测通道
Block|阻挡
Overlap|重叠
Ignore|忽略
Query Only|仅查询碰撞
Physics Only|仅物理碰撞
Query and Physics|查询与物理碰撞
No Collision|无碰撞
Generate Overlap Events|生成重叠事件
Simulation Generates Hit Events|模拟生成命中事件
Simple Collision|简单碰撞
Complex Collision|复杂碰撞
Trace Complex|使用复杂碰撞进行检测
Sweep|扫掠检测
Teleport|瞬移处理
Hit Result|命中结果
Blocking Hit|阻挡性命中
Initial Overlap|起始时重叠
Impact Point|撞击点
Impact Normal|撞击法线
Hit Actor|命中的Actor
Hit Component|命中的组件
Hit Bone Name|命中骨骼名称
Physical Material|物理材质
Surface Type|表面类型
Face Index|面索引
Penetration Depth|穿透深度
Actors to Ignore|需要忽略的Actor
Ignore Self|忽略自身
Draw Debug Type|调试绘制方式
Line Trace by Channel|按通道进行直线检测
Line Trace for Objects|按对象类型进行直线检测
Multi Line Trace by Channel|按通道获取多个直线命中
Sphere Trace by Channel|按通道进行球体扫掠
Box Trace by Channel|按通道进行盒体扫掠
Capsule Trace by Channel|按通道进行胶囊扫掠
Sphere Overlap Actors|查询球体内重叠Actor
Box Overlap Actors|查询盒体内重叠Actor
Get Overlapping Actors|获取重叠Actor
Is Overlapping Actor|是否与指定Actor重叠
Break Hit Result|拆分命中结果
Apply Damage|施加通用伤害
Apply Point Damage|施加点伤害
Apply Radial Damage|施加径向伤害
Damage Type|伤害类型
Damage Causer|造成伤害的对象
Base Damage|基础伤害
Damage Falloff|伤害衰减
Event Any Damage|任意伤害事件
Event Point Damage|点伤害事件
Event Radial Damage|径向伤害事件
Event Hit|命中事件
On Component Begin Overlap|组件开始重叠事件
On Component End Overlap|组件结束重叠事件
On Component Hit|组件命中事件
`],
    ["物理与Chaos", "physics-in-unreal-engine", "刚体运动、物理约束、布料和破碎系统。", `
Simulation|模拟
Simulate Physics|模拟物理
Rigid Body|刚体
Mass|质量
Mass Scale|质量倍率
Density|密度
Center of Mass|质心
Inertia|惯性
Inertia Tensor|惯性张量
Linear Velocity|线速度
Angular Velocity|角速度
Linear Damping|线性阻尼
Angular Damping|角阻尼
Force|力
Impulse|冲量
Torque|扭矩
Gravity|重力
Enable Gravity|启用重力
Friction|摩擦
Restitution|恢复系数；弹性
Sleep|休眠
Wake|唤醒
CCD|连续碰撞检测
Continuous Collision Detection|连续碰撞检测
Substepping|物理子步进
Solver|求解器
Constraint|约束
Physics Constraint|物理约束
Constraint Instance|约束实例
Linear Limit|线性约束限制
Angular Limit|角度约束限制
Swing|摆动
Twist|扭转
Drive|驱动
Stiffness|刚度
Damping|阻尼
Breakable|可断裂
Physics Asset|物理资源
Physics Handle|物理抓取句柄
Ragdoll|布娃娃
Chaos|虚幻物理与破坏系统
Chaos Solver|Chaos求解器
Geometry Collection|几何体集合
Fracture|破碎切割
Cluster|簇
Strain|应变
Field System|场系统
Anchor Field|锚定场
Chaos Cache|Chaos模拟缓存
Chaos Cloth|Chaos布料
Cloth Simulation|布料模拟
Cloth Paint|布料权重绘制
Chaos Vehicles|Chaos载具系统
Wheel|车轮
Suspension|悬挂
Transmission|变速器
Aerodynamics|空气动力学
Buoyancy|浮力
Fluid|流体
Add Force|添加力
Add Force at Location|在位置添加力
Add Impulse|添加冲量
Add Impulse at Location|在位置添加冲量
Add Torque in Radians|添加以弧度计的扭矩
Set Physics Linear Velocity|设置物理线速度
Set Physics Angular Velocity in Degrees|设置以角度计的物理角速度
Set Simulate Physics|设置是否模拟物理
Wake All Rigid Bodies|唤醒全部刚体
Put All Rigid Bodies to Sleep|使全部刚体休眠
`],
    ["UMG布局与控件", "umg-ui-designer-quick-start-guide-in-unreal-engine", "游戏界面控件、布局尺寸和输入焦点。", `
UMG|虚幻动态界面系统
Slate|虚幻底层界面框架
User Widget|用户控件
Widget Blueprint|控件蓝图
Widget Tree|控件树
Designer|界面设计器
Hierarchy|层级
Palette|控件面板
Canvas Panel|画布面板
Canvas Panel Slot|画布插槽
Horizontal Box|水平框
Vertical Box|垂直框
Overlay|叠层容器
Grid Panel|网格面板
Uniform Grid Panel|均匀网格面板
Wrap Box|自动换行框
Scroll Box|滚动框
Size Box|尺寸框
Scale Box|缩放框
Safe Zone|安全区域
Border|边框控件
Spacer|占位间隔
Named Slot|命名插槽
Widget Switcher|控件切换器
Retainer Box|保留渲染框
Invalidation Box|无效化缓存框
Button|按钮
Text Block|文本块
Rich Text Block|富文本块
Editable Text|可编辑文本
Editable Text Box|可编辑文本框
Multi Line Editable Text|多行可编辑文本
Image|图像
Progress Bar|进度条
Slider|滑块
Spin Box|数值微调框
Check Box|复选框
Combo Box|下拉选择框
List View|列表视图
Tile View|平铺列表视图
Tree View|树形视图
Expandable Area|可折叠区域
Menu Anchor|菜单锚点
Throbber|加载转动指示器
Circular Throbber|圆形加载指示器
Anchors|锚点
Alignment|对齐
Padding|内边距
Margin|外边距
Slot|布局插槽
Fill|填充
Auto Size|自动尺寸
Size to Content|尺寸适应内容
Desired Size|期望尺寸
Minimum Desired Width|最小期望宽度
Render Transform|渲染变换
Render Opacity|渲染不透明度
Clipping|裁剪
Z Order|叠放顺序
DPI Scaling|屏幕像素密度缩放
Focus|输入焦点
Is Focusable|是否可获得焦点
Hit Test|命中测试；交互检测
Visible|可见且可交互
Collapsed|折叠且不占布局空间
Hidden|隐藏但保留布局空间
Not Hit-Testable|不参与交互命中测试
Create Widget|创建控件
Add to Viewport|添加到游戏视口
Add to Player Screen|添加到玩家屏幕
Remove from Parent|从父级移除
Set Text|设置文本
Set Brush from Texture|使用纹理设置图像画刷
Set Percent|设置进度比例
Set Keyboard Focus|设置键盘焦点
Get Owning Player|获取所属玩家控制器
Viewport Size|视口尺寸
Screen Space|屏幕空间
Drag Drop Operation|拖放操作
Pointer Event|指针事件
Event Reply|事件响应结果
Handled|已处理事件
Unhandled|未处理事件
Common UI|通用跨平台界面插件
Common Activatable Widget|可激活通用控件
`],
    ["动画资产与混合", "animation-blueprints-in-unreal-engine", "骨骼动画资源、动画图表和姿态混合。", `
Animation Blueprint|动画蓝图
Anim Instance|动画实例
Anim Graph|动画图表
Animation Sequence|动画序列
Animation Montage|动画蒙太奇
Animation Composite|动画复合资源
Blend Space|混合空间
Blend Space 1D|一维混合空间
Aim Offset|瞄准偏移
Pose|姿态
Reference Pose|参考姿态
Bind Pose|绑定姿态
Additive Animation|叠加动画
Additive Pose|叠加姿态
Mesh Space|网格体空间
Component Space|组件空间
Bone Space|骨骼空间
State Machine|状态机
State|状态
Transition|过渡
Transition Rule|过渡规则
Conduit|过渡通道
Entry|入口
State Alias|状态别名
Cached Pose|缓存姿态
Save Cached Pose|保存缓存姿态
Use Cached Pose|使用缓存姿态
Slot Node|动画插槽节点
Default Slot|默认动画插槽
Sync Group|同步组
Sync Marker|同步标记
Leader|同步主导者
Follower|同步跟随者
Blend Weight|混合权重
Blend Time|混合时长
Blend Poses by Bool|按布尔值混合姿态
Blend Poses by Enum|按枚举混合姿态
Layered Blend per Bone|逐骨骼分层混合
Apply Additive|应用叠加姿态
Inertialization|惯性化过渡
Animation Notify|动画通知
Anim Notify State|持续型动画通知
Montage Section|蒙太奇片段
Montage Branching Point|蒙太奇分支点
Root Motion|根运动
Root Bone|根骨骼
Root Motion Mode|根运动模式
Root Lock|根骨骼锁定
Root Motion Extraction|提取根运动
Stride Warping|步幅扭曲
Orientation Warping|朝向扭曲
Motion Warping|运动扭曲
Distance Matching|距离匹配
Motion Matching|运动匹配
Pose Search|姿态搜索
Pose Search Database|姿态搜索数据库
Pose Search Schema|姿态搜索结构定义
Trajectory|运动轨迹
Choosers|选择器系统
Animation Budget Allocator|动画预算分配器
Linked Anim Graph|链接动画图表
Linked Anim Layer|链接动画层
Animation Layer Interface|动画层接口
Animation Curve|动画曲线
Morph Target|变形目标
Retargeting|动画重定向
IK Rig|IK绑定资源
IK Retargeter|IK重定向器
Retarget Pose|重定向姿态
Retarget Chain|重定向骨骼链
Montage Play|播放蒙太奇
Montage Stop|停止蒙太奇
Montage Jump to Section|跳到蒙太奇片段
Try Get Pawn Owner|尝试获取所属Pawn
Get Anim Instance|获取动画实例
`],
    ["骨骼与Control Rig", "control-rig-in-unreal-engine", "骨骼绑定、程序化姿态和角色控制器。", `
Skeleton|骨架
Skeletal Mesh|骨骼网格体
Skeletal Mesh Editor|骨骼网格体编辑器
Bone Hierarchy|骨骼层级
Virtual Bone|虚拟骨骼
Skin Weight|蒙皮权重
Skinning|蒙皮
Influence|骨骼影响
Control Rig|控制绑定系统
Rig Graph|绑定图表
Control|控制器
Null Element|空元素
Rig Hierarchy|绑定层级
Forwards Solve|正向求解
Backwards Solve|反向求解
Construction Event|绑定构造事件
Rig Unit|绑定运算单元
Control Shape|控制器形状
Control Space|控制器空间
Space Switching|空间切换
Initial Transform|初始变换
Current Transform|当前变换
Global Transform|全局变换
Local Transform|局部变换
Inverse Kinematics|反向运动学；IK
Forward Kinematics|正向运动学；FK
IK|反向运动学
FK|正向运动学
Full Body IK|全身反向运动学
Two Bone IK|双骨骼IK
FABRIK|基于前后迭代的IK求解
CCDIK|循环坐标下降IK
Effector|末端效应器
Pole Vector|极向量；弯曲方向
Preferred Angle|首选弯曲角度
Limit Rotation|限制旋转
Foot Placement|脚部放置
Look At|朝向目标
Aim Constraint|瞄准约束
Parent Constraint|父级约束
Transform Constraint|变换约束
RigVM|绑定虚拟机
Modular Control Rig|模块化控制绑定
Deformer Graph|变形器图表
ML Deformer|机器学习变形器
`],
    ["材质与着色", "unreal-engine-materials", "材质编辑器、表面着色属性和材质表达式。", `
Material|材质
Material Editor|材质编辑器
Material Instance|材质实例
Material Instance Constant|常量材质实例
Dynamic Material Instance|动态材质实例
Material Function|材质函数
Material Parameter Collection|材质参数集合
Material Layer|材质层
Material Attributes|材质属性集合
Material Domain|材质域
Surface|表面
Deferred Decal|延迟贴花
Post Process|后期处理
User Interface|用户界面
Volume|体积
Blend Mode|混合模式
Opaque|不透明
Masked|遮罩
Translucent|半透明
Additive|叠加
Modulate|调制
Alpha Composite|透明度合成
Shading Model|着色模型
Default Lit|默认光照着色
Unlit|无光照着色
Subsurface|次表面
Subsurface Profile|次表面轮廓
Clear Coat|清漆涂层
Two Sided Foliage|双面植被着色
Thin Translucent|薄层半透明
Single Layer Water|单层水体着色
Base Color|基础颜色
Metallic|金属度
Specular|高光反射参数
Roughness|粗糙度
Anisotropy|各向异性
Emissive Color|自发光颜色
Opacity|不透明度
Opacity Mask|不透明度遮罩
Normal Map|法线贴图
World Position Offset|世界位置偏移
Pixel Depth Offset|像素深度偏移
Ambient Occlusion|环境光遮蔽
Refraction|折射
Refraction Index|折射率
Two Sided|双面渲染
Dithered LOD Transition|抖动LOD过渡
Scalar Parameter|标量参数
Vector Parameter|向量参数
Static Switch Parameter|静态开关参数
Texture Sample|纹理采样
Texture Object|纹理对象
Texture Coordinate|纹理坐标
Texture Sample Parameter 2D|二维纹理采样参数
Panner|纹理平移器
Rotator|旋转器；也指三轴旋转类型
Fresnel|菲涅耳效果
Desaturation|去饱和
Saturate|限制到0至1
One Minus|一减输入值
Multiply|相乘
Add|相加
Subtract|相减
Divide|相除
Power|乘方
Linear Interpolate|线性插值
Component Mask|分量遮罩
Append Vector|拼接向量分量
Normalize|归一化
Dot Product|点积
Cross Product|叉积
World Position|世界位置
Absolute World Position|绝对世界位置
Object Position|对象位置
Actor Position|Actor位置
Camera Position|摄像机位置
Camera Vector|朝摄像机的向量
Vertex Normal WS|世界空间顶点法线
Pixel Normal WS|世界空间像素法线
Screen Position|屏幕位置
Scene Texture|场景纹理
Scene Depth|场景深度
Pixel Depth|像素深度
Depth Fade|深度淡化
Distance Field Gradient|距离场梯度
Distance to Nearest Surface|到最近表面的距离
Custom Expression|自定义着色表达式
HLSL|高级着色语言
Substrate|分层材质着色框架
Slab|Substrate表面层
BSDF|双向散射分布函数
`],
    ["纹理与资源", "textures-in-unreal-engine", "纹理导入、颜色空间、采样和显存管理。", `
Texture|纹理
Texture 2D|二维纹理
Texture Cube|立方体纹理
Texture Array|纹理数组
Volume Texture|体积纹理
Render Target|渲染目标
Texture Render Target 2D|二维纹理渲染目标
Cube Render Target|立方体渲染目标
Virtual Texture|虚拟纹理
Streaming Virtual Texture|流送虚拟纹理
Runtime Virtual Texture|运行时虚拟纹理
RVT|运行时虚拟纹理
UDIM|多块UV纹理布局
UV|纹理坐标
UV Channel|UV通道
Texel|纹素
Texel Density|纹素密度
Resolution|分辨率
Aspect Ratio|宽高比
Mip Map|多级渐远纹理
Mip Level|渐远纹理级别
Mip Bias|渐远纹理偏差
Texture Streaming|纹理流送
Streaming Pool|流送资源池
Pool Size|资源池大小
Compression|压缩
Compression Settings|压缩设置
sRGB|标准RGB颜色空间
Linear Color Space|线性颜色空间
HDR|高动态范围
LDR|低动态范围
Alpha Channel|透明度通道
Channel Packing|通道打包
Normal Map Compression|法线贴图压缩
Grayscale|灰度
Filter|过滤方式
Nearest|最近邻采样
Bilinear|双线性采样
Trilinear|三线性采样
Anisotropic Filtering|各向异性过滤
Address Mode|寻址方式
Wrap|循环寻址
Clamp|边界钳制
Mirror|镜像寻址
Texture Group|纹理组
LOD Bias|细节层级偏差
Never Stream|不进行纹理流送
Flip Green Channel|翻转绿色通道
`],
    ["渲染与光照", "rendering-and-graphics-in-unreal-engine", "UE5渲染管线、光照、阴影和画质设置。", `
Rendering|渲染
Renderer|渲染器
Deferred Rendering|延迟渲染
Forward Shading|前向着色
Path Tracer|路径追踪器
Ray Tracing|光线追踪
Hardware Ray Tracing|硬件光线追踪
Software Ray Tracing|软件光线追踪
Lumen|动态全局光照与反射系统
Global Illumination|全局光照
Indirect Lighting|间接光照
Direct Lighting|直接光照
Reflection|反射
Screen Space Reflection|屏幕空间反射
Screen Traces|屏幕追踪
Surface Cache|表面缓存
Lumen Scene|Lumen场景表示
Distance Field|距离场
Mesh Distance Field|网格体距离场
Global Distance Field|全局距离场
Nanite|虚拟化几何体系统
Virtualized Geometry|虚拟化几何体
Fallback Mesh|回退网格体
Cluster Culling|簇剔除
Virtual Shadow Maps|虚拟阴影贴图
VSM|虚拟阴影贴图
Shadow Map|阴影贴图
Cascaded Shadow Maps|级联阴影贴图
Contact Shadows|接触阴影
Shadow Bias|阴影偏差
Cast Shadow|投射阴影
Self Shadow|自身阴影
Directional Light|平行光
Point Light|点光源
Spot Light|聚光灯
Rect Light|矩形光源
Sky Light|天空光
Sky Atmosphere|天空大气
Exponential Height Fog|指数高度雾
Volumetric Fog|体积雾
Volumetric Cloud|体积云
Light Function|光源函数
IES Profile|IES配光文件
Light Intensity|光照强度
Lumen Unit|流明光度单位
Candela|坎德拉
Lux|勒克斯
Temperature|色温
Attenuation Radius|衰减半径
Source Radius|光源半径
Source Length|光源长度
Inner Cone Angle|内锥角
Outer Cone Angle|外锥角
Lightmass|预计算光照系统
GPU Lightmass|GPU预计算光照
Lightmap|光照贴图
Lightmap UV|光照贴图UV
Lightmap Resolution|光照贴图分辨率
Lightmass Importance Volume|光照构建重要性体积
Volumetric Lightmap|体积光照贴图
Reflection Capture|反射捕获
Sphere Reflection Capture|球形反射捕获
Planar Reflection|平面反射
Ambient Cubemap|环境立方体贴图
Occlusion Culling|遮挡剔除
Frustum Culling|视锥剔除
Distance Culling|距离剔除
Precomputed Visibility|预计算可见性
Anti Aliasing|抗锯齿
TAA|时间抗锯齿
TSR|时间超分辨率
FXAA|快速近似抗锯齿
MSAA|多重采样抗锯齿
Screen Percentage|屏幕渲染比例
Dynamic Resolution|动态分辨率
Upscaling|上采样放大
Motion Vector|运动向量
GBuffer|几何信息缓冲区
Depth Buffer|深度缓冲区
Stencil Buffer|模板缓冲区
Custom Depth|自定义深度
Custom Stencil|自定义模板值
Render Pass|渲染通道
Draw Call|绘制调用
Overdraw|过度绘制
`],
    ["后期与摄像机", "post-process-effects-in-unreal-engine", "画面风格、镜头和后期处理参数。", `
Post Process Volume|后期处理体积
Unbound|无界范围
Blend Radius|混合半径
Blend Weight|混合权重
Bloom|泛光
Lens Flare|镜头光晕
Depth of Field|景深
Motion Blur|运动模糊
Chromatic Aberration|色差
Vignette|暗角
Film Grain|胶片颗粒
Lens Dirt|镜头污渍
Color Grading|颜色分级
White Balance|白平衡
Saturation|饱和度
Contrast|对比度
Gamma|伽马
Gain|增益
Offset|偏移
Shadows|暗部
Midtones|中间调
Highlights|亮部
Tone Mapping|色调映射
Tonemapper|色调映射器
ACES|学院色彩编码系统
LUT|颜色查找表
Auto Exposure|自动曝光
Exposure Compensation|曝光补偿
Metering Mode|测光模式
Histogram|直方图
Local Exposure|局部曝光
Cine Camera Actor|电影摄像机Actor
Filmback|胶片背板规格
Focal Length|焦距
Aperture|光圈
F Stop|光圈值
Focus Distance|对焦距离
Manual Focus|手动对焦
Tracking Focus|跟踪对焦
Shutter Speed|快门速度
ISO|感光度
Camera Shake|摄像机抖动
Camera Modifier|摄像机修饰器
Set View Target with Blend|混合切换观察目标
Camera Cut|镜头切换
Orthographic Width|正交视图宽度
Near Clip Plane|近裁剪面
Far Clip Plane|远裁剪面
Letterboxing|画面上下黑边
`],
    ["Niagara特效", "creating-visual-effects-in-niagara-for-unreal-engine", "粒子系统、发射器、模块和特效模拟。", `
Niagara|虚幻视觉特效系统
Niagara System|Niagara系统
Niagara Emitter|Niagara发射器
Niagara Module|Niagara模块
Niagara Parameter Collection|Niagara参数集合
System Spawn|系统生成阶段
System Update|系统更新阶段
Emitter Spawn|发射器生成阶段
Emitter Update|发射器更新阶段
Particle Spawn|粒子生成阶段
Particle Update|粒子更新阶段
Simulation Stage|模拟阶段
Scratch Pad|临时自定义模块区
Scratch Pad Module|临时自定义模块
Parameter Map|参数映射
User Parameter|用户参数
Dynamic Input|动态输入
Data Interface|数据接口
Data Channel|数据通道
CPU Simulation|CPU模拟
GPU Simulation|GPU模拟
Local Space Simulation|局部空间模拟
Fixed Bounds|固定包围范围
Emitter State|发射器状态
Spawn Rate|每秒生成数量
Spawn Burst Instantaneous|瞬间爆发生成
Initialize Particle|初始化粒子
Particle Age|粒子年龄
Lifetime|生命周期时长
Normalized Age|归一化年龄
Particle ID|粒子标识
Position|位置
Velocity|速度
Acceleration|加速度
Drag|阻力
Curl Noise Force|旋涡噪声力
Vortex Force|涡流力
Point Attraction Force|点吸引力
Solve Forces and Velocity|求解力与速度
Collision Query|碰撞查询
Kill Particle|销毁粒子
Sprite Renderer|面片粒子渲染器
Mesh Renderer|网格体粒子渲染器
Ribbon Renderer|带状粒子渲染器
Light Renderer|粒子光源渲染器
Ribbon|拖尾带
Sprite Size|面片尺寸
Sub Image|子图
SubUV|子图UV动画
Color over Life|随生命周期变化的颜色
Scale Color|颜色缩放
Skeletal Mesh Data Interface|骨骼网格体数据接口
Grid 2D|二维网格
Grid 3D|三维网格
Neighbor Grid 3D|三维邻域网格
Niagara Fluids|Niagara流体模拟
Flipbook|序列帧图集
Effect Type|特效类型资源
Scalability Override|可伸缩性覆盖设置
Warmup|预热模拟
Spawn System at Location|在位置生成Niagara系统
Spawn System Attached|生成并附着Niagara系统
Set Niagara Variable Float|设置Niagara浮点变量
`],
    ["AI与行为逻辑", "artificial-intelligence-in-unreal-engine", "AI决策、感知、行为树和状态树。", `
Artificial Intelligence|人工智能
Behavior Tree|行为树
Blackboard|黑板
Blackboard Key|黑板键
Root|根节点
Selector|选择器节点
Sequence|顺序节点
Simple Parallel|简单并行节点
Task|任务
Decorator|装饰器；执行条件
Service|服务；周期更新逻辑
Observer Aborts|观察者中断模式
Abort Self|中断自身分支
Lower Priority|较低优先级
Both|两者
Run Behavior Tree|运行行为树
Use Blackboard|使用黑板
Set Value as Object|设置黑板对象值
Set Value as Vector|设置黑板向量值
Clear Blackboard Value|清除黑板值
Finish Execute|完成行为树任务
Finish Abort|完成任务中断
AI Perception|AI感知
AI Perception Component|AI感知组件
AI Perception Stimuli Source|AI感知刺激源
Sight|视觉
Hearing|听觉
Damage Sense|伤害感知
Team|阵营
Affiliation|阵营关系
Friendly|友方
Neutral|中立
Hostile|敌对
Stimulus|感知刺激
Stimuli|多个感知刺激
Sight Radius|视觉半径
Lose Sight Radius|丢失视觉半径
Peripheral Vision Angle|周边视野角度
Detection by Affiliation|按阵营关系检测
Report Noise Event|报告噪声事件
On Target Perception Updated|目标感知更新事件
Pawn Sensing|Pawn感应组件
Environment Query System|环境查询系统；EQS
EQS|环境查询系统
Query Template|查询模板
Generator|生成器
Test|测试条件
Context|上下文
Score|评分
Scoring Equation|评分公式
Run EQS Query|运行环境查询
StateTree|状态树
State Tree|状态树
Evaluator|求值器
Enter Condition|进入条件
Transition Condition|过渡条件
Smart Object|智能对象
Smart Object Slot|智能对象交互插槽
Gameplay Behavior|游戏行为
Mass Entity|Mass实体框架
Mass Agent|Mass代理
Fragment|实体数据片段
Processor|实体处理器
Archetype|实体原型；也指对象原型
Zone Graph|区域图
Crowd|群体
Avoidance|避让
`],
    ["寻路与导航", "navigation-system-in-unreal-engine", "导航网格生成、路径搜索和AI移动。", `
Navigation|导航
Navigation Mesh|导航网格
NavMesh|导航网格
Nav Mesh Bounds Volume|导航网格边界体积
Recast NavMesh|Recast导航网格
Navigation Invoker|导航生成调用器
Nav Modifier Volume|导航修改体积
Nav Link Proxy|导航链接代理
Smart Link|智能导航链接
Navigation Link|导航链接
Navigation Area|导航区域
Area Class|区域类
Area Cost|区域通行代价
Navigation Query Filter|导航查询过滤器
Agent|导航代理
Agent Radius|代理半径
Agent Height|代理高度
Cell Size|导航生成单元尺寸
Cell Height|导航生成单元高度
Tile Size|导航瓦片尺寸
Runtime Generation|运行时生成
Dynamic Modifiers Only|仅动态修改器
Pathfinding|寻路
Path Following|路径跟随
Path Point|路径点
Partial Path|不完整路径
Acceptance Radius|到达判定半径
Allow Partial Path|允许不完整路径
Project Point to Navigation|将点投射到导航网格
Get Random Reachable Point in Radius|获取半径内随机可达点
Get Random Location in Navigable Radius|获取可导航半径内随机位置
Find Path to Location Synchronously|同步寻找目标位置路径
AI Move To|命令AI移动
Simple Move to Location|简单移动到位置
Simple Move to Actor|简单移动到Actor
Stop Movement|停止移动
On Success|成功时
On Fail|失败时
RVO Avoidance|相互速度障碍避让
Detour Crowd|Detour群体导航
Path Cost|路径代价
Path Length|路径长度
`],
    ["技能系统与标签", "understanding-the-unreal-engine-gameplay-ability-system", "GAS技能、属性、效果和游戏标签。通常需要启用对应插件。", `
Gameplay Ability System|游戏技能系统；GAS
GAS|游戏技能系统
Ability System Component|技能系统组件；ASC
ASC|技能系统组件
Gameplay Ability|游戏技能
Ability Task|技能任务
Gameplay Effect|游戏效果
Gameplay Attribute|游戏属性
Attribute Set|属性集合
Gameplay Cue|游戏表现提示
Gameplay Tag|游戏标签
Gameplay Tag Container|游戏标签容器
Gameplay Tag Query|游戏标签查询
Gameplay Event|游戏事件
Gameplay Event Data|游戏事件数据
Ability Spec|技能规格
Gameplay Effect Spec|游戏效果规格
Gameplay Effect Context|游戏效果上下文
Active Gameplay Effect|激活中的游戏效果
Gameplay Effect Handle|游戏效果句柄
Prediction|预测
Prediction Key|预测键
Activation|激活
Activation Owned Tags|激活期间持有的标签
Activation Required Tags|激活要求的标签
Activation Blocked Tags|阻止激活的标签
Cancel Abilities with Tag|取消带指定标签的技能
Block Abilities with Tag|阻止带指定标签的技能
Cost|消耗
Cooldown|冷却
Commit Ability|提交技能消耗与冷却检查
End Ability|结束技能
Cancel Ability|取消技能
Try Activate Ability|尝试激活技能
Give Ability|授予技能
Clear Ability|移除已授予技能
Duration Policy|持续时间策略
Instant|瞬时效果
Infinite|无限持续
Has Duration|有持续时长
Period|周期
Stacking|叠层
Stack Limit Count|叠层数量上限
Modifier|修饰器
Magnitude|数值幅度
Set By Caller|由调用方提供数值
Scalable Float|可随等级变化的浮点值
Execution Calculation|执行计算
Modifier Magnitude Calculation|修饰幅度计算
Base Value|基础值
Current Value|当前值
Buff|增益状态
Debuff|减益状态
Granted Tags|授予的标签
Asset Tags|资源标签
Target Data|目标数据
Target Actor|目标Actor
Wait Gameplay Event|等待游戏事件
Wait Target Data|等待目标数据
Send Gameplay Event to Actor|向Actor发送游戏事件
Has Matching Gameplay Tag|是否具有匹配标签
Matches Tag|是否匹配标签
Matches Tag Exact|是否精确匹配标签
`],
    ["网络与多人", "networking-and-multiplayer-in-unreal-engine", "客户端服务器通信、状态复制和多人会话。", `
Networking|网络通信
Multiplayer|多人游戏
Server|服务器
Client|客户端
Dedicated Server|专用服务器
Listen Server|监听服务器；玩家兼任主机
Standalone|独立运行
Authority|权威端控制权
Has Authority|是否具有权威控制权
Switch Has Authority|按权威端状态分支
Replication|网络复制
Replicates|启用网络复制
Replicate Movement|复制移动
Replicated|已设为复制
RepNotify|复制通知
OnRep|复制更新回调前缀
RPC|远程过程调用
Remote Procedure Call|远程过程调用
Run on Server|在服务器执行
Run on Owning Client|在所属客户端执行
NetMulticast|网络多播调用
Reliable|可靠传输
Unreliable|不可靠传输
Net Role|网络角色
Local Role|本地网络角色
Remote Role|远端网络角色
Autonomous Proxy|自主代理
Simulated Proxy|模拟代理
Relevancy|网络相关性
Net Cull Distance|网络剔除距离
Net Update Frequency|网络更新频率
Dormancy|网络休眠
Flush Net Dormancy|唤醒网络休眠以发送更新
Force Net Update|强制网络更新
Owner Only|仅所有者可见或接收
Owner No See|所有者不可见
Only Relevant to Owner|仅与所有者相关
Net Connection|网络连接
Actor Channel|Actor网络通道
Packet|数据包
Packet Loss|丢包
Latency|延迟
Ping|网络往返延迟
Bandwidth|带宽
Net Driver|网络驱动
Replication Graph|复制图
Iris|新一代网络复制框架
Network Prediction|网络预测
Client Prediction|客户端预测
Server Reconciliation|服务器校正
Interpolation|插值
Extrapolation|外推
Seamless Travel|无缝地图切换
Server Travel|服务器地图切换
Client Travel|客户端地图切换
Online Subsystem|在线子系统
Online Services|在线服务
Session|会话
Create Session|创建会话
Find Sessions|查找会话
Join Session|加入会话
Destroy Session|销毁会话
Lobby|大厅
Matchmaking|匹配
Presence|在线状态
Unique Net ID|唯一网络身份标识
EOS|Epic在线服务
`],
    ["存档与数据资源", "saving-and-loading-your-game-in-unreal-engine", "持久化存档、数据驱动配置和异步资源加载。", `
Save Game|存档对象
Save Game Object|存档对象
Save Slot|存档槽
Slot Name|存档槽名称
User Index|用户索引
Create Save Game Object|创建存档对象
Save Game to Slot|保存到存档槽
Load Game from Slot|从存档槽读取
Does Save Game Exist|检查存档是否存在
Delete Game in Slot|删除槽内存档
Async Save Game to Slot|异步保存到存档槽
Async Load Game from Slot|异步读取存档槽
Save Game to Memory|将存档序列化到内存
Checkpoint|检查点
Persistent Data|持久化数据
Data Table|数据表
Data Table Row Handle|数据表行句柄
Row Name|行名称
Row Structure|行结构
Get Data Table Row|获取数据表行
Get Data Table Row Names|获取数据表行名列表
Curve Table|曲线表
Data Asset|数据资源
Primary Data Asset|主数据资源
Primary Asset ID|主资源标识
Primary Asset Type|主资源类型
Asset Manager|资源管理器
Asset Registry|资源注册表
Asset Bundle|资源捆绑
Streamable Manager|可流送资源管理器
Async Load Asset|异步加载资源
Async Load Class Asset|异步加载类资源
Soft Object Path|软对象路径
Soft Class Path|软类路径
Package|资源包
Package Path|资源包路径
Asset Path|资源路径
Asset Name|资源名称
Asset Label|资源标签
Primary Asset Label|主资源标签
Data Registry|数据注册表
Data Validation|数据校验
CSV|逗号分隔值文件
JSON|结构化文本数据格式
INI|配置文件格式
Localization|本地化
Localization Dashboard|本地化控制台
String Table|字符串表
Culture|语言地区设置
Namespace|命名空间
Text Key|文本键
Gather Text|收集可本地化文本
`],
    ["音频与MetaSounds", "audio-in-unreal-engine-5", "音频资源、空间声音、混音和程序化音效。", `
Sound Wave|声音波形资源
Sound Cue|声音提示资源
Sound Class|声音类
Sound Mix|声音混合配置
Sound Attenuation|声音衰减配置
Sound Concurrency|声音并发配置
Sound Submix|声音子混音
Sound Source Bus|声音源总线
Audio Bus|音频总线
Audio Volume|音频体积区域
Audio Modulation|音频调制
Audio Mixer|音频混音器
MetaSound|程序化音频图资源
MetaSound Source|MetaSound音源
MetaSound Patch|MetaSound可复用子图
MetaSound Preset|MetaSound预设
Wave Player|波形播放器
Envelope|包络
ADSR|起音衰减持续释放包络
Oscillator|振荡器
Frequency|频率
Amplitude|振幅
Pitch|音高
Volume Multiplier|音量倍率
Pitch Multiplier|音高倍率
Attenuation|随距离衰减
Spatialization|空间化
Panning|声像定位
Occlusion|遮挡
Reverb|混响
Delay Effect|延迟回声效果
Low Pass Filter|低通滤波器
High Pass Filter|高通滤波器
Equalizer|均衡器
Compressor|压缩器
Limiter|限幅器
Doppler|多普勒效应
Looping|循环播放
Virtualization|音源虚拟化
Listener|听音位置
Quartz|精确音频计时系统
Soundscape|环境声场系统
Play Sound 2D|播放非空间二维声音
Play Sound at Location|在位置播放声音
Spawn Sound 2D|创建二维音频组件并播放
Spawn Sound at Location|在位置创建音频组件并播放
Spawn Sound Attached|附着创建音频组件并播放
Fade In|淡入
Fade Out|淡出
Set Sound Mix Class Override|覆盖声音混合中的声音类参数
Set Volume Multiplier|设置音量倍率
Set Pitch Multiplier|设置音高倍率
On Audio Finished|音频播放完成事件
`],
    ["关卡与开放世界", "world-partition-in-unreal-engine", "大世界分区、关卡流送和数据层。", `
World Partition|世界分区
World Partition Editor|世界分区编辑器
Runtime Grid|运行时网格
Grid Cell|网格单元
Cell Size|网格单元尺寸
Loading Range|加载范围
Streaming Source|流送源
World Partition Streaming Source Component|世界分区流送源组件
Spatially Loaded|按空间加载
Data Layer|数据层
Data Layer Asset|数据层资源
Data Layer Instance|数据层实例
Runtime Data Layer|运行时数据层
Editor Data Layer|编辑器数据层
Loaded|已加载
Activated|已激活
Unloaded|未加载
One File Per Actor|每个Actor一个文件
OFPA|每个Actor一个文件
External Actors|外部Actor资源
HLOD|分层细节层级
Hierarchical Level of Detail|分层细节层级
HLOD Layer|分层LOD层
Level Instance|关卡实例
Packed Level Actor|打包关卡Actor
Level Streaming|关卡流送
Level Streaming Volume|关卡流送体积
Load Stream Level|加载流送关卡
Unload Stream Level|卸载流送关卡
Open Level|打开关卡
Level Visibility|关卡可见性
World Composition|世界组成；旧式大世界方案
World Origin Rebasing|世界原点重设
Large World Coordinates|大世界坐标
LWC|大世界坐标
Streaming Distance|流送距离
Always Loaded|始终加载
Block on Load|加载时阻塞
Make Visible After Load|加载后显示
Runtime Hash|运行时空间哈希结构
Minimap|小地图
World Partition Builder|世界分区构建器
`],
    ["地形植被与水体", "landscape-outdoor-terrain-in-unreal-engine", "地形编辑、植被实例和水体环境。", `
Landscape|地形
Landscape Mode|地形编辑模式
Heightmap|高度图
Weightmap|权重图
Landscape Component|地形组件
Landscape Section|地形区段
Landscape Proxy|地形代理
Landscape Streaming Proxy|地形流送代理
Landscape Edit Layer|地形编辑层
Landscape Layer|地形图层
Landscape Layer Info|地形图层信息
Weight Blended Layer|权重混合图层
Non Weight Blended Layer|非权重混合图层
Sculpt|雕刻
Smooth|平滑
Flatten|压平
Ramp|坡道
Erosion|侵蚀
Hydro Erosion|水力侵蚀
Noise|噪声
Retopologize|重新拓扑
Visibility Tool|地形可见性工具
Landscape Hole|地形洞口
Landscape Spline|地形样条
Landscape Grass Type|地形草类型
Landscape Grass Output|地形草输出
Landscape Layer Blend|地形图层混合
Landscape Layer Sample|地形图层采样
Landscape Layer Coords|地形图层坐标
Brush Size|笔刷尺寸
Tool Strength|工具强度
Falloff|衰减
Foliage|植被
Foliage Mode|植被编辑模式
Foliage Type|植被类型
Static Mesh Foliage|静态网格体植被
Actor Foliage|Actor植被
Procedural Foliage Spawner|程序化植被生成器
Procedural Foliage Volume|程序化植被体积
Cull Distance|剔除距离
Align to Normal|对齐表面法线
Random Yaw|随机偏航角
Density Scaling|密度缩放
Water Body|水体
Water Body Ocean|海洋水体
Water Body Lake|湖泊水体
Water Body River|河流水体
Water Zone|水域
Water Mesh|水面网格体
Water Waves|水波
Gerstner Waves|格斯特纳波
Underwater Post Process|水下后期处理
`],
    ["PCG程序化生成", "procedural-content-generation-overview", "程序化内容生成图、点数据和空间采样。需要PCG相关插件。", `
Procedural Content Generation|程序化内容生成
PCG|程序化内容生成框架
PCG Graph|PCG图表
PCG Component|PCG组件
PCG Volume|PCG体积
PCG Settings|PCG节点设置
Point Data|点数据
Spatial Data|空间数据
Attribute Set|属性集合
Metadata|元数据
Attribute|属性
Point Density|点密度
Point Transform|点变换
Point Bounds|点包围范围
Point Seed|点随机种子
Surface Sampler|表面采样器
Volume Sampler|体积采样器
Spline Sampler|样条采样器
Mesh Sampler|网格体采样器
Get Landscape Data|获取地形数据
Get Actor Data|获取Actor数据
Get Spline Data|获取样条数据
Transform Points|变换点
Density Filter|密度过滤器
Attribute Filter|属性过滤器
Attribute Noise|属性噪声
Density Noise|密度噪声
Self Pruning|自重叠裁剪
Projection|投射
Intersection|交集
Difference|差集
Union|并集
Merge|合并
Copy Points|复制点
Static Mesh Spawner|静态网格体生成器
Spawn Actor|生成Actor
Subgraph|子图
Loop|循环
HiGen Grid Size|分层生成网格尺寸
Partitioned Generation|分区生成
Runtime Generation|运行时生成
Generation Radius|生成半径
Cleanup|清理生成结果
Determinism|确定性
Generate|生成
`],
    ["建模与网格体", "modeling-mode-in-unreal-engine", "编辑器建模工具、几何结构和网格体处理。", `
Static Mesh|静态网格体
Dynamic Mesh|动态网格体
Procedural Mesh|程序化网格体
Geometry Script|几何体脚本
Modeling Mode|建模模式
Mesh|网格体
Vertex|顶点
Edge|边
Face|面
Triangle|三角形
Polygon|多边形
PolyGroup|多边形组
Topology|拓扑
Vertex Color|顶点颜色
Tangent|切线
Binormal|副法线
UV Seam|UV接缝
UV Island|UV岛
Unwrap|展开UV
UV Editor|UV编辑器
Remesh|重新网格化
Simplify|简化网格
Reduce|减面
Subdivide|细分
Extrude|挤出
Inset|内插
Bevel|倒角
Boolean Operation|布尔运算
Union|并集
Subtract|相减
Intersect|相交
Weld|焊接
Bridge|桥接
Fill Hole|补洞
Smooth|平滑
Sculpt|雕刻
Displace|置换
Lattice|晶格变形
Mirror|镜像
Trim|修剪
Plane Cut|平面切割
Bake|烘焙
Bake Texture|烘焙纹理
Bake Transform|烘焙变换
Collision Hull|碰撞凸壳
Convex Decomposition|凸分解
Auto Convex Collision|自动凸碰撞
LOD|细节层级
LOD Group|细节层级组
LOD Screen Size|LOD屏幕尺寸阈值
Proxy Mesh|代理网格体
Merge Actors|合并Actor
Mesh Merge|网格体合并
Mesh Instancing|网格体实例化
Pivot Tool|轴心编辑工具
Accept|接受修改
Cancel|取消修改
Complete|完成操作
`],
    ["Sequencer与影视", "cinematics-and-movie-making-in-unreal-engine", "时间线镜头制作、序列编辑和离线渲染。", `
Sequencer|序列编辑器
Level Sequence|关卡序列
Level Sequence Actor|关卡序列Actor
Level Sequence Player|关卡序列播放器
Master Sequence|主序列
Subsequence|子序列
Shot|镜头片段
Camera Cut Track|摄像机切换轨道
Track|轨道
Section|区段
Keyframe|关键帧
Key|关键帧；也指容器键
Channel|通道
Auto Key|自动打关键帧
Key All|为全部通道打关键帧
Interpolation Mode|插值模式
Constant|常量保持
Linear|线性
Cubic|三次曲线
Tangent|曲线切线
Weighted Tangent|加权切线
Curve Editor|曲线编辑器
Dope Sheet|关键帧表
Playback Range|播放范围
Working Range|工作范围
Frame Rate|帧率
Display Rate|显示帧率
Tick Resolution|时间采样分辨率
Timecode|时间码
Frame Number|帧编号
Spawnable|由序列生成的对象
Possessable|由序列控制的已有对象
Object Binding|对象绑定
Binding Override|绑定覆盖
Transform Track|变换轨道
Animation Track|动画轨道
Audio Track|音频轨道
Event Track|事件轨道
Visibility Track|可见性轨道
Material Parameter Track|材质参数轨道
Attach Track|附着轨道
Time Dilation Track|时间倍率轨道
Director Blueprint|序列导演蓝图
Event Endpoint|事件端点
Pre Roll|前滚预处理
Post Roll|后滚处理
Restore State|恢复原始状态
Keep State|保留最终状态
Take Recorder|镜头录制器
Movie Render Queue|影片渲染队列
Movie Render Graph|影片渲染图
Render Job|渲染任务
Temporal Samples|时间采样数
Spatial Samples|空间采样数
Warm Up Frames|预热帧数
High Resolution Tiling|高分辨率分块渲染
EXR|高动态范围图像格式
Alpha Output|透明度输出
Burn In|画面叠印信息
`],
    ["调试与性能", "testing-and-optimizing-your-content", "运行调试、性能分析和资源开销定位。", `
Debugging|调试
Profiling|性能分析
Unreal Insights|虚幻性能洞察工具
Timing Insights|时序分析
Memory Insights|内存分析
Networking Insights|网络分析
Asset Loading Insights|资源加载分析
Trace|追踪记录；也指射线检测
Trace Channel|追踪记录通道；也指射线通道
Trace Store|追踪记录存储
CPU|中央处理器
GPU|图形处理器
Game Thread|游戏线程
Render Thread|渲染线程
RHI Thread|渲染硬件接口线程
Worker Thread|工作线程
Frame Time|每帧耗时
FPS|每秒帧数
Hitch|卡顿
Stall|停顿等待
Bottleneck|性能瓶颈
Game Bound|受游戏线程限制
GPU Bound|受GPU限制
Memory Budget|内存预算
VRAM|显存
Allocation|内存分配
Leak|内存泄漏
Garbage Collection|垃圾回收
Stat Unit|查看帧与线程耗时的命令
Stat FPS|显示帧率的命令
Stat GPU|显示GPU开销的命令
Stat Streaming|显示流送统计的命令
ProfileGPU|GPU帧分析命令
Stat RHI|查看渲染硬件资源统计的命令
MemReport|内存报告命令
Console Variable|控制台变量；CVar
CVar|控制台变量
Console Command|控制台命令
Execute Console Command|执行控制台命令
Output Log|输出日志
Message Log|消息日志
Print String|打印字符串
Print Text|打印文本
Draw Debug Line|绘制调试线
Draw Debug Sphere|绘制调试球
Draw Debug Box|绘制调试盒
Visual Logger|可视化日志
Gameplay Debugger|游戏逻辑调试器
Blueprint Debugger|蓝图调试器
Call Stack|调用栈
Watch Value|监视变量值
Step Into|单步进入
Step Over|单步跳过
Step Out|单步跳出
Accessed None|访问了空对象引用的错误
Infinite Loop|无限循环
Assertion|断言
Ensure|可恢复断言检查
Crash Report|崩溃报告
Automation Test|自动化测试
Functional Test|功能测试
`],
    ["打包平台与构建", "packaging-your-project", "项目构建、资源烘焙、平台部署和安装包。", `
Build|构建
Cook|资源烘焙；转换为目标平台数据
Package|打包；也指资源包
Deploy|部署
Launch|启动
Build Configuration|构建配置
Debug|调试构建
DebugGame|游戏调试构建
Development|开发构建
Test|测试构建
Shipping|发行构建
Editor Target|编辑器目标
Game Target|游戏目标
Client Target|客户端目标
Server Target|服务器目标
Target Platform|目标平台
Build Target|构建目标
UnrealBuildTool|虚幻构建工具；UBT
UBT|虚幻构建工具
Unreal Automation Tool|虚幻自动化工具；UAT
UAT|虚幻自动化工具
BuildCookRun|构建烘焙运行流程
Commandlet|命令行处理工具类
Pak File|Pak资源归档
Io Store|IO资源容器系统
UTOC|IoStore容器目录文件
UCAS|IoStore容器数据文件
Chunk|资源分块
Chunk ID|资源分块标识
DLC|可下载扩展内容
Patch|补丁
Staging Directory|待打包文件暂存目录
Cook by the Book|预先烘焙资源
Cook on the Fly|按需烘焙资源
Iterative Cooking|迭代烘焙
Shader Compilation|着色器编译
Shader Permutation|着色器变体
Shader Library|着色器库
PSO|管线状态对象
PSO Cache|管线状态缓存
Shader Pipeline Cache|着色管线缓存
Device Profile|设备配置档
Platform Overrides|平台覆盖设置
SDK|软件开发工具包
NDK|安卓原生开发工具包
Android|安卓平台
APK|安卓安装包
AAB|安卓应用捆绑包
Android Manifest|安卓应用清单
Package Name|应用包名
Signing Key|签名密钥
Keystore|密钥库
Minimum SDK Version|最低安卓接口版本
Target SDK Version|目标安卓接口版本
Arm64|64位ARM架构
Vulkan|跨平台图形接口
OpenGL ES|嵌入式图形接口
Metal|Apple图形接口
DirectX 12|微软图形接口版本12
RHI|渲染硬件接口
Mobile HDR|移动端高动态范围渲染
Mobile Preview|移动端预览
Screen Orientation|屏幕方向
Safe Area|安全显示区域
Touch Interface|触摸界面
`],
    ["编辑器自动化与导入", "scripting-and-automating-the-unreal-editor", "编辑器工具开发、内容导入和制作管线。", `
Editor Utility Widget|编辑器工具控件
Editor Utility Blueprint|编辑器工具蓝图
Editor Scripting|编辑器脚本
Scripted Action|脚本化操作
Asset Action Utility|资源操作工具
Actor Action Utility|Actor操作工具
Editor Utility Subsystem|编辑器工具子系统
Editor Actor Subsystem|编辑器Actor子系统
Editor Asset Subsystem|编辑器资源子系统
Python|Python脚本语言
Python Editor Script Plugin|Python编辑器脚本插件
Blutility|编辑器蓝图工具的旧称
Tool Menu|工具菜单
Transaction|可撤销事务
Scoped Transaction|限定作用域的事务
Asset Tools|资源工具
Asset Import Task|资源导入任务
Import Data|导入来源数据
Factory|资源创建工厂
Interchange|通用资源导入框架
Interchange Pipeline|Interchange导入管线
Datasmith|设计数据导入工具集
Datasmith Direct Link|Datasmith实时关联
FBX|常用模型动画交换格式
glTF|图形传输格式
USD|通用场景描述格式
Alembic|几何体缓存交换格式
Geometry Cache|几何体缓存
Import Uniform Scale|统一导入缩放
Convert Scene|转换场景坐标
Convert Scene Unit|转换场景单位
Combine Meshes|合并网格体
Import Normals|导入法线
Compute Normals|计算法线
Generate Lightmap UVs|生成光照贴图UV
Import Materials|导入材质
Import Textures|导入纹理
Import Animations|导入动画
Reimport Base Mesh|重新导入基础网格
Content Pipeline|内容制作管线
Live Link|实时数据连接框架
Live Link Subject|Live Link数据主体
Live Link Source|Live Link数据来源
Remote Control|远程控制
Remote Control Preset|远程控制预设
Multi User Editing|多人协同编辑
Concert|多人协作通信框架
`],
    ["XR与交互设备", "developing-for-xr-experiences-in-unreal-engine", "虚拟现实、增强现实和追踪设备。", `
XR|扩展现实
VR|虚拟现实
AR|增强现实
MR|混合现实
OpenXR|跨平台XR接口标准
HMD|头戴式显示器
Head Mounted Display|头戴式显示器
Motion Controller|运动控制器
Motion Controller Component|运动控制器组件
Tracking|追踪
Tracking Origin|追踪原点
Tracking Space|追踪空间
World to Meters|世界单位与米的比例
Stereo Rendering|立体渲染
Instanced Stereo|实例化立体渲染
Mobile Multi View|移动端多视图
Late Update|晚期姿态更新
Foveated Rendering|注视点渲染
Eye Tracking|眼动追踪
Hand Tracking|手部追踪
Hand Joint|手部关节
Haptic Feedback|触觉反馈
Play Haptic Effect|播放触觉效果
Chaperone|VR活动边界
Play Area|活动区域
Room Scale|房间尺度
Seated|坐姿模式
Recenter|重置中心
Teleportation|传送移动
Snap Turn|分段转向
Smooth Locomotion|平滑移动
Passthrough|透视显示现实画面
AR Session|增强现实会话
AR Pin|增强现实空间锚点
AR Plane|增强现实检测平面
AR Tracked Geometry|增强现实追踪几何
`],
    ["常见动作与参数单词", "unreal-engine-terminology", "阅读节点名、引脚和属性时常见的基础英语。", `
Get|获取
Set|设置
Add|添加；相加
Remove|移除
Create|创建
Destroy|销毁
Spawn|生成
Find|查找
Search|搜索
Apply|应用
Reset|重置
Clear|清空
Enable|启用
Disable|禁用
Start|开始
Stop|停止
Pause|暂停
Resume|恢复
Play|播放
Reverse|反向
Open|打开
Close|关闭
Load|加载
Unload|卸载
Save|保存
Read|读取
Write|写入
Request|请求
Response|响应
Result|结果
Success|成功
Failure|失败
Valid|有效
Invalid|无效
Pending|待处理
Active|激活的
Enabled|已启用
Disabled|已禁用
Visible|可见
Hidden|隐藏
Current|当前
Previous|上一个
Next|下一个
First|第一个
Last|最后一个
Begin|开始
End|结束
Enter|进入
Exit|退出
On|在某事件发生时
Off|关闭；离开
Before|之前
After|之后
Pre|预先
Post|之后
Initial|初始
Final|最终
Default|默认
Custom|自定义
Optional|可选
Required|必需
Override|覆盖；重写
Inherited|继承的
Mutable|可修改的
Immutable|不可修改的
Relative|相对的
Absolute|绝对的
Local|局部；本地
Global|全局
World|世界
Screen|屏幕
Viewport|视口
Coordinate|坐标
Space|空间
Offset|偏移
Origin|原点
Destination|目的地
Source|来源
Target|目标
Input|输入
Output|输出
Parameter|参数
Argument|实参
Property|属性
Variable|变量
Function|函数
Method|方法
Event|事件
Action|动作
Operation|操作
Handle|句柄
Reference|引用
Pointer|指针
Instance|实例
Class|类
Object|对象
Component|组件
Library|库
Macro|宏
Blueprint|蓝图
Level|关卡
BP|Blueprint的缩写；蓝图
Actor|场景中的对象
Pawn|可被控制的实体
Actor Component|Actor组件
Execute|执行
Evaluate|求值
Initialize|初始化
Initialized|已初始化
Construct|构建
Destruct|析构
Update|更新
Refresh|刷新
Rebuild|重新构建
Notify|通知
Listen|监听
Bind|绑定
Unbind|解绑
Broadcast|广播
Register|注册
Unregister|注销
Attach|附着
Detach|分离
Connect|连接
Disconnect|断开连接
Combine|组合
Split|拆分
Break|拆解；中断
Make|构造
Convert|转换
Cast|类型转换
Compare|比较
Equal|相等
Not Equal|不相等
Greater|大于
Less|小于
And|且
Or|或
Not|非
Any|任意
All|全部
Each|每个
Count|数量
Amount|数量；数值
Rate|速率
Speed|速度大小
Velocity|速度向量
Acceleration|加速度
Duration|持续时长
Interval|间隔
Elapsed|已过去的
Remaining|剩余的
Delay|延迟
Frequency|频率
Strength|强度
Intensity|强度
Weight|权重
Ratio|比例
Range|范围
Radius|半径
Diameter|直径
Height|高度
Width|宽度
Depth|深度
Length|长度
Size|大小
Scale|缩放
Threshold|阈值
Limit|限制
Minimum|最小值
Maximum|最大值
Average|平均值
Total|总计
Amount|数值量
Random|随机
Seed|随机种子
Loop|循环
Looping|循环的
Repeat|重复
Continuous|连续的
Discrete|离散的
Smooth|平滑
Blend|混合
Fade|淡入淡出
Transition|过渡
Interpolation|插值
Clamp|限制范围
Normalize|归一化
Filter|过滤
Mask|遮罩
Channel|通道
Layer|图层
Layered|分层的
Stack|堆栈；叠层
Queue|队列
Priority|优先级
Order|顺序
Index|索引
Element|元素
Item|项
Entry|条目；入口
Collection|集合
Container|容器
Mapping|映射
Context|上下文
Mode|模式
Type|类型
Flag|标记
Tag|标签
Name|名称
Label|标签文字
Display|显示
Description|说明
Tooltip|提示说明
Preview|预览
Debug|调试
Trace|追踪；射线检测
Hit|命中
Overlap|重叠
Collision|碰撞
Physics|物理
Simulation|模拟
Simulate|模拟
Force|力；强制
Impulse|冲量
Torque|扭矩
Mass|质量
Gravity|重力
Friction|摩擦
Bounce|弹跳
Restitution|恢复系数
Constraint|约束
Linear|线性的
Angular|角度的
Rotation|旋转
Translation|平移
Transform|变换
Location|位置
Direction|方向
Forward|前方
Backward|后方
Left|左侧
Right|右侧
Up|向上
Down|向下
Horizontal|水平
Vertical|垂直
Pitch|俯仰
Yaw|偏航
Roll|翻滚
Vector|向量
Normal|法线；普通
Tangent|切线
Axis|轴
Angle|角度
Degrees|度
Radians|弧度
Distance|距离
Plane|平面
Bounds|包围范围
Mesh|网格体
Skeleton|骨架
Skeletal|骨骼的
Bone|骨骼
Socket|插槽
Root|根
Parent|父级
Child|子级
Owner|所有者
Owning|所属的
Instigator|发起者
Controlled|被控制的
Possess|控制Pawn
Possessed|已被控制
Movement|移动
Walk|行走
Walking|行走中
Run|奔跑；运行
Jump|跳跃
Jumped|已起跳
Fall|下落
Falling|下落中
Landed|已落地
Ledge|边缘
Crouch|蹲伏
Swim|游泳
Fly|飞行
Ground|地面
Floor|地板；向下取整
Wall|墙壁
Ceiling|天花板
Surface|表面
Point|点
Radial|径向
Box|盒体
Sphere|球体
Capsule|胶囊体
Line|线
Ray|射线
Sweep|扫掠
Extent|半尺寸范围
Impact|撞击
Penetration|穿透
Block|阻挡
Ignore|忽略
Damage|伤害
Health|生命值
Stamina|耐力
Mana|法力
Armor|护甲
Cooldown|冷却
Ability|技能
Attribute|属性
Effect|效果
Cue|表现提示
Task|任务
Behavior|行为
Navigation|导航
Path|路径
Goal|目标位置
Reachable|可达的
Acceptable|可接受的
Acceptance|到达判定
Radius|半径
Success|成功
Failed|失败的
Abort|中止
Cancel|取消
Complete|完成
Completed|已完成
Trigger|触发器；触发
Triggered|已触发
Pressed|已按下
Released|已松开
Clicked|已点击
Hovered|已悬停
Unhovered|已结束悬停
Cursor|光标
Mouse|鼠标
Keyboard|键盘
Gamepad|手柄
Touch|触摸
Finger|手指
Gesture|手势
Focus|焦点
Received|已接收
Lost|失去
Widget|控件
Panel|面板
Canvas|画布
Overlay|叠层
Slot|插槽
Anchor|锚点
Alignment|对齐
Padding|内边距
Margin|外边距
Visibility|可见性
Opacity|不透明度
Brush|画刷
Texture|纹理
Material|材质
Color|颜色
Red|红色
Green|绿色
Blue|蓝色
Alpha|透明度；插值比例
Render|渲染
Rendering|渲染过程
Shading|着色
Light|光源
Shadow|阴影
Reflection|反射
Refraction|折射
Roughness|粗糙度
Metallic|金属度
Specular|高光
Emissive|自发光的
Bloom|泛光
Exposure|曝光
Saturation|饱和度
Contrast|对比度
Depth|深度
Resolution|分辨率
Quality|质量
Sample|采样
Streaming|流送
Virtual|虚拟的
Cache|缓存
Buffer|缓冲区
Memory|内存
Resource|资源
Asset|资源资产
Package|资源包；打包
Module|模块
Plugin|插件
Subsystem|子系统
Runtime|运行时
Editor|编辑器
Development|开发
Shipping|发行
Platform|平台
Device|设备
Mobile|移动设备
Desktop|桌面设备
Network|网络
Server|服务器
Client|客户端
Authority|权威控制权
Replicate|网络复制
Replicated|已设为网络复制
Remote|远程
Local|本地；局部
Reliable|可靠的
Unreliable|不可靠的
Prediction|预测
Session|会话
Connection|连接
`],
  ];

  const normalized = (value) => String(value).toLowerCase().replace(/[\s_-]+/g, "").replace(/[^a-z0-9\u4e00-\u9fff]/g, "");
  const existing = new Map(data.terms.map((term) => [normalized(term.en), term]));
  const references = [];
  const categories = [];
  const dictionaryWords = new Map((data.wordGlossary || []).map((word) => [word.en.toLowerCase(), word]));
  for (const [label, slug, context, rows] of sections) {
    const category = `参考 · ${label}`;
    const sourceUrl = root + slug;
    let count = 0;
    rows.trim().split(/\r?\n/).forEach((row, index) => {
      const [en, zh, usage] = row.split("|").map((value) => value?.trim());
      if (!en || !zh) throw new Error(`Invalid reference row: ${label} ${index}`);
      const key = normalized(en);
      // Existing learning entries retain their IDs, descriptions and schedules.
      if (existing.has(key)) return;
      const term = {
        id: 100000 + sections.findIndex((section) => section[0] === label) * 1000 + index,
        en, zh, category, dictionaryOnly: true,
        location: `UE5 / ${label} / ${en}`,
        usage: usage || `${zh}。${context}`,
        tip: "这是参考词条，可能是概念、属性、资源、工具或节点名称。不会自动加入背诵；节点可用性取决于引擎版本、对象类型及启用的插件。",
        aliases: [en.replace(/\s+/g, ""), ...(zh.match(/[A-Z][A-Z0-9]{1,}/g) || [])],
        groups: [], scenarios: [], sourceUrl,
        sourceLabel: "Epic 官方系统资料",
      };
      existing.set(key, term);
      references.push(term);
      count += 1;
      if (/^[A-Za-z]+$/.test(en) && !dictionaryWords.has(en.toLowerCase())) {
        dictionaryWords.set(en.toLowerCase(), { en, zh, note: context });
      }
    });
    if (count) categories.push({ name: category, count, purpose: context, sourceUrl });
  }
  // Supply split meanings only when every part has an actual local translation.
  for (const term of references) {
    const words = term.en.split(/\s+/);
    const parts = words.map((en) => ({ en, zh: dictionaryWords.get(en.toLowerCase())?.zh || "" }));
    if (words.length > 1 && parts.every((part) => part.zh)) {
      term.phrase = { parts, memory: `组合理解：${parts.map((part) => `${part.en}（${part.zh}）`).join(" + ")} → ${term.zh}` };
    }
  }
  data.wordGlossary = [...dictionaryWords.values()];
  data.dictionaryTerms = references;
  data.referenceCategories = categories;
  data.dictionaryTotalTerms = data.terms.length + references.length;
  data.dictionaryCoverage = {
    version: "1.2.13", updated: "2026-11-18", sections: categories.length,
    note: "覆盖UE5主要系统的参考术语，非所有版本和插件节点的完整清单。中文为本站学习释义；系统资料链接不代表该名称一定是可搜索节点。",
    officialUrl: root + "BlueprintAPI?application_version=5.8",
  };
})();
