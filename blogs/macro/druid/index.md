---
title: 德鲁伊通用宏
date: 2022/11/30
author: 天梦
tags:
 - 宏
categories:
 - 德鲁伊
---

```
#showtooltip
/cleartarget [stealth]
/targetenemy [stealth]
/startattack [form:3/1,nostealth]
/施放 [mod]8;[stealth]突袭;[spec:1,form:1]裂伤（熊）;[form:1]割伤;[spec:1,form:3]裂伤（豹）;[form:3]爪击;[form:5,spec:2]愤怒;愈合
/施放 [combat,nostealth]精灵之火（野性）
/施放 [form:1]割伤
```

```
#showtooltip
/startattack [stance:3/1,nostealth]
/施放 [nomod,stance:3,combat,nostealth]猛虎之怒
/use [nomod,stance:3,combat,nostealth]14
/施放 [mod]休眠;[stealth]毁灭;[form:1]低吼;[form:3]割裂;[form:5,spec:2]自然之力;回春术
```

```
#showtooltip
/startattack [stance:3/1,nostealth]
/施放 [mod]战争践踏;[stealth]突袭;[form:1]割伤;[form:3]斜掠;[form:5,spec:2]星火术;生命绽放
/施放 [form:1,spec:1]重殴;[spec:2]月火术
```

```
#showtooltip
/施放 [spec:2,form:5]虫群;治疗之触
```

```
#showtooltip
/施放 [swimming]!水栖形态;[nocombat,flyable]!迅捷飞行形态;!旅行形态
/use [combat][noflyable]15
```

```
#showtooltip
/target [mod]活体地狱火
/startattack [stance:3/1,nostealth]
/施放 [mod]月火术;[form:1]横扫（熊）;[form:3]野蛮咆哮;[form:5,spec:2]台风;愤怒
/施放 [form:1]重殴
```

```
#showtooltip
/startattack [stance:3/1,nostealth]
/施放 [form:1]挫志咆哮;[form:3]割碎;[form:5,spec:2]星辰坠落;宁静
```

```
#showtooltip
/施放 [@focus,exists,harm][@mouseover,exists,harm][]旋风
```

```
#showtooltip
/施放 [@focus,exists,harm][@mouseover,exists,harm][]纠缠根须
```

```
#showtooltip
/施放 [form:1]挑战咆哮;[form:3]!潜行;飓风
```

```
#showtooltip
/target gotyou
/施放 [mod]激活;![form:1/3]精灵之火（野性）;精灵之火
/script UIErrorsFrame:Hide()
```

```
#showtooltip [spec:1]狂暴;!枭兽形态
/施放 [combat,spec:1]狂暴;!枭兽形态
/script UIErrorsFrame:Hide()
```

```
#showtooltip
/施放 [form:1,spec:1]野性冲锋 - 熊;[form:3,spec:1]野性冲锋 - 豹;滋养
/施放 [form:1]激怒
```