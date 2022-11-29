---
title: 法师通用宏
date: 2022/11/30
author: 天梦
tags:
 - 宏
categories:
 - 法师
---

### 冰箱,防误按(按多次冰箱不会解开,需配合下面的宏一起)

```
#showtooltip
/cast !寒冰屏障



火球术(可以配合上面的冰箱宏一起用.冰箱过后用这个宏可解)

#showtooltip [mod]8;火球术
/cancelaura 寒冰屏障
/targetenemy [noexists,nomod][dead,nomod]
/cast [mod]8;!法术吸取
/cast [nomod]!火球术
/cast [nomod]!火焰冲击
/script UIErrorsFrame:Hide()
```

### LOD进剑打鬼魂

```
/target 卑劣的灵魂
/target 动力炸弹
/cast 冰枪术
```