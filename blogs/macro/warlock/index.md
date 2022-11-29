---
title: 术士通用宏
date: 2022/11/30
author: 天梦
tags:
 - 宏
categories:
 - 术士
---

```
#showtooltip
/targetenemy [noexists][dead]
/施放 [mod]8;[spec:1,@focus]鬼影缠身;[actionbar:2]厄运诅咒
/施放 [spec:1,nomod]鬼影缠身
/施放 [nomod]暗影箭
/施放 [nomod]生命分流
/use [combat,nomod]10
```

```
#showtooltip
/施放 [mod]吸取生命;[spec:1]痛苦无常;献祭
/use [combat,spec:2]14
```

```
#showtooltip
/施放 [mod]吸取灵魂;痛苦诅咒
```

```
#showtooltip
/施放 [mod,nocombat]生命分流;[mod,pet:地狱猎犬,@player]吞噬魔法;[mod,pet:虚空行者]牺牲;[mod,pet:恶魔卫士]痛楚;[combat]生命分流;生命分流(等级 1)
/use [mod,combat]邪能治疗石
```

```
#showtooltip
/施放 [mod]奥术洪流;[spec:2,nopet]召唤恶魔卫士;[nopet]召唤地狱猎犬;[pet:地狱猎犬]暗影撕咬;[pet:小鬼]火焰箭;[pet:虚空行者]折磨;[pet:魅魔]剧痛鞭笞;[pet:恶魔卫士]顺劈斩
/petattack [nomod,@mouseover,harm][nomod]
/petdefensive [nomod]
```

```
#showtooltip
/施放 [@focus,exists,harm][@mouseover,exists,harm][]放逐术
```

```
#showtooltip
/施放 [@mouseover,exists,harm][]死亡缠绕
/use 15
```

```
#showtooltip
/施放 [actionbar:2,nomod]厄运诅咒
/施放 [nomod,spec:2]灵魂之火
/施放 [mod]生命通道;[spec:1,nopet]召唤地狱猎犬;[pet:地狱猎犬]法术封锁;[pet:虚空行者]受难;[pet:魅魔]诱惑;[pet:恶魔卫士]拦截
/petpassive [mod]
/施放 [nomod]生命分流
```

```
#showtooltip [mod]腐蚀之种;暗影烈焰
/施放 [mod]腐蚀之种;[spec:2]烧尽
/施放 [nomod,harm,exists,nodead]暗影烈焰
/targetenemy [mod]
/施放 [nomod]生命分流
```

```
#showtooltip
/施放 !恶魔变形
/施放 !恶魔冲锋
/施放 !献祭光环
/施放 !暗影顺劈
```

```
#showtooltip
/施放 [mod]灵魂碎裂;暗影防护结界
```

```
#showtooltip
/施放 [@focus,exists,harm][@mouseover,exists,harm][]恐惧
```

```
#showtooltip
/施放 [mod]奴役恶魔;[nocombat,flyable,outdoors]!绿色驭风者
/施放 [nomod,nocombat,outdoors]!恐惧战马
/施放 [nomod,@focus,harm,nodead,exists,spec:2][nomod,@mouseover,harm,nodead,exists,spec:2][nomod]暗影箭(等级 1)
```

```
#showtooltip
/use [spec:1,combat,nomod,harm,exists]10
/施放 [mod,spec:2]挑战嚎叫
/use [combat,spec:1]14
/施放 [mod]地狱烈焰;[@mouseover,exists,harm][]腐蚀术
```

```
#showtooltip
/施放 [mod]元素诅咒;语言诅咒
/dismount [mounted]
```