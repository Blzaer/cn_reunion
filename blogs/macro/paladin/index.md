---
title: 猎人通用宏
date: 2022/11/30
author: 天梦、emi、给力
tags:
 - 宏
categories:
 - 圣骑士
---

```
#showtooltip 圣盾术
/cast [combat]圣盾术
/cast [combat]圣佑术
/cast [combat,@player]保护之手
```

### 惩戒单体一键宏

```
#showtooltip
/startattack
/cancelaura 保护之手
/施放 [mod]8;[actionbar:2]圣光审判;[actionbar:3]公正审判;智慧审判
/施放 愤怒之锤
/施放 [combat,harm]神圣风暴
/施放 十字军打击
/施放 驱邪术
```

### 惩戒群体一键宏
```
#showtooltip 奉献
/startattack
/cancelaura 保护之手
/施放 愤怒之锤
/施放 [actionbar:2]圣光审判;[actionbar:3]公正审判;智慧审判
/施放 [combat,harm]神圣风暴
/施放 十字军打击
/施放 奉献
/施放 驱邪术
```

### 控制

```
#showtooltip
/cast 制裁之锤
/cast 忏悔
/cast 超度邪恶
```

### 设焦点给自由(给别的技能同理,技能名自行更改!)

```
#showtooltip 自由之手
/cast [@focus,help,exists,nodead]自由之手
```

### 必暴击震级

```
#showtooltip
/cast 神恩术
/cast 神圣震击
```

### 防骑一键宏

```
#showtooltip
/startattack 
/castsequence reset=8/combat 神圣之盾,正义盾击,智慧审判,正义之锤,奉献,正义盾击,神圣之盾,正义之锤,智慧审判,正义盾击,奉献,正义之锤
```