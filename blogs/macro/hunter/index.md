---
title: 猎人通用宏
date: 2022/11/30
author: 天梦
tags:
 - 宏
categories:
 - 猎人
---

### 假死,防误按

```
#showtooltip 假死
/stopattack [combat,nomounted]
/cleartarget [combat,nomounted]
/施放 [combat,nomounted]!假死
/dismount [mounted]
```

### 一键宏

```
#showtooltip [mod]8;杀戮射击
/startattack
/施放 [mod]8;[@focus,harm][]宁神射击
/施放 杀戮射击
/施放 奇美拉射击
/施放 瞄准射击
/施放 [combat,harm]杀戮命令
/施放 稳固射击
/施放 [nochanneling:稳固射击]奥术射击
```

### 没宝宝招宝宝,有宝宝治疗
```
/cast [nopet]召唤宠物;治疗宠物
```