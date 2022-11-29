---
title: 萨满通用宏
date: 2022/11/30
author: 天梦
tags:
 - 宏
categories:
 - 萨满
---

```
#showtooltip [mod]8;[spec:1]风暴打击;治疗波
/startattack [spec:1]
/施放 [nomod,@targettarget]净化术
/施放 [nomod,@focus]净化术
/施放 [nomod]净化术
/施放 [mod]8;[spec:1]风暴打击;激流
/castsequence [spec:1]reset=target 烈焰震击,大地震击;治疗波
/施放 [combat,spec:1]火焰新星
/施放 熔岩猛击
/施放 [spec:1]闪电之盾
```

```
#showtooltip
/施放 [nomod,spec:2]激流
/施放 [mod]净化图腾;[spec:1]根基图腾;次级治疗波
```

```
#showtooltip [mod]战栗图腾;[spec:1]熔岩图腾;治疗链
/施放 [nomod,@targettarget]净化术
/施放 [nomod,@focus]净化术
/施放 [nomod]净化术
/施放 [nomod,spec:2]激流
/施放 [mod]战栗图腾;[spec:1]熔岩图腾;治疗链
```

```
#showtooltip [spec:2]潮汐之力;治疗波
/use [combat]14
/施放 [nomod,spec:2]潮汐之力
/施放 [nomod,spec:2]自然迅捷
/施放 治疗波
```

```
#showtooltip
/施放 [outdoors]!幽灵狼
/use 15
```

```
#showtooltip
/施放 [@player,spec:2]净化灵魂;[@player]驱毒术
/dismount [mounted]
```

```
#showtooltip
/施放 [nomod,@targettarget,harm][nomod]闪电链;[spec:1]元素的召唤;先祖的召唤
/施放 [nomod,@targettarget,harm][nomod,spec:2]熔岩爆裂
/施放 [nomod,@targettarget,harm][nomod]大地震击
/施放 [nomod,@targettarget,harm][nomod]闪电箭
/use [combat]10
```

### 爆发
```
#showtooltip [spec:1,nopet]野性狼魂;[spec:1]猛击;狂暴(种族特长)
/施放 [spec:1,nopet]野性狼魂;[spec:1]猛击
/施放 [combat]狂暴(种族特长)
```

```
#showtooltip
/stopcasting
/施放 [mod]收回图腾;[@focus,exists][]风剪
```

```
#showtooltip 嗜血
/施放 [spec:1]野性狼魂
/施放 [combat]嗜血
```

```
#showtooltip 冰霜震击
/施放 [nomod,@targettarget]净化术
/施放 [nomod,@focus]净化术
/施放 [nomod]净化术
/施放 冰霜震击
```

```
#showtooltip [spec:1]萨满之怒;法力之潮图腾
/施放 [nomod]水之护盾;[spec:1]萨满之怒;法力之潮图腾
```

```
#showtooltip 地缚图腾
/施放 [nomod]闪电之盾;地缚图腾
```

```
#showtooltip
/施放 [nomod]火元素图腾;土元素图腾
```

```
#showtooltip 自然迅捷
/cast [combat]自然迅捷
/use [combat]13
/use [combat]14
/use [combat]10
```