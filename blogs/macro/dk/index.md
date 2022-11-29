---
title: 死亡骑士通用宏
date: 2022/11/30
author: 天梦
tags:
 - 宏
categories:
 - 死亡骑士
---

### 一键宏

```
#showtooltip [mod]8;[spec:1]鲜血打击;冰冷触摸
/startattack
/施放 [mod]8;[nostance:2,spec:2]冰霜灵气;[nostance:1,spec:1]鲜血灵气
/施放 [spec:1]鲜血打击;冰冷触摸
/施放 [spec:2]符文打击
/施放 [spec:1]天灾打击;暗影打击
/施放 [spec:1]凋零缠绕
/施放 [nomounted]寒冬号角
/施放 [nomod,combat,spec:2]活力分流

```

```
#showtooltip
/cast [@mouseover,harm][]寒冰锁链
END
MACRO 16777219 "6" INV_Misc_QuestionMark
#showtooltip
/petattack [@mouseover,harm][]
/petdefensive
/cast [spec:2]冰冷触摸;[nopet][@pet,dead]亡者复生;[@mouseover,harm][]跳跃
/cast [spec:2,combat]活力分流
```

```
#showtooltip
/startattack
/castsequence [spec:1,nomod]reset=target/5 暗影打击,冰冷触摸;[nomod]reset=target/5 暗影打击,传染
/castsequence [spec:1,nomod]reset=target/5 冰冷触摸,暗影打击
/cast [mod]亡者大军;[spec:1,combat]活力分流
/cast [nomod]凋零缠绕
```

```
#showtooltip
/petpassive [mod]
/cast [nomod]心灵冰冻;[@pet]凋零缠绕
/cast [nomod]凋零缠绕
```

```
#showtooltip
/cast [spec:1,nopet][@pet,dead,spec:1]亡者复生;[spec:1]撕扯;吸血鬼之血
/cast [spec:2]符文分流
/cast [spec:1]凋零缠绕
/cast [nomounted]寒冬号角
/cast [spec:2,nomod,combat]活力分流
```

```
#showtooltip
/startattack
/castsequence [mod]reset=5/target/combat 传染,血液沸腾;血液沸腾
/cast [spec:1]天灾打击;灵界打击
/cast [spec:2]符文打击;凋零缠绕
/cast [nomounted]寒冬号角
/cast [combat]活力分流
```

```
#showtooltip [spec:1]召唤石像鬼;符文武器增效
/startattack
/cast [combat]召唤石像鬼
/cast [combat]符文武器增效
```