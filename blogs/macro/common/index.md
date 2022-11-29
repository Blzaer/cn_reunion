---
title: 通用宏
date: 2022/11/30
author: 天梦
tags:
 - 宏
categories:
 - 通用
---

### 一键上马宏,自行更改技能和坐骑名字即可

```
#showtooltip
/cast [flyable,nocombat,outdoors]!迅捷紫色驭风者
/cast [nocombat,outdoors]!乌鸦之神
/cast [nomounted]圣洁护盾
```

### 【插件卡死重置宏】(伤害统计和dbm失效可用)

```
/run local f = CreateFrame("frame",nil, UIParent); f:SetScript("OnUpdate", CombatLogClearEntries);
```

### 最远视角宏

```
/script SetCVar(&quot;cameraDistanceMax&quot;, 50)

```

### 一键卸下所有武器

```
/stopattacking
/run PickupInventoryItem(16)PutItemInBackpack()
/run PickupInventoryItem(17)PutItemInBackpack()
/run PickupInventoryItem(18)PutItemInBackpack()
```