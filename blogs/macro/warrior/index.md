---
title: 战士通用宏
date: 2022/11/30
author: 天梦
tags:
 - 宏
categories:
 - 战士
---

### 主狂暴副防御

```
#showtooltip
/startattack
/施放 [combat,spec:1]死亡之愿
/施放 [combat,spec:1]10
/施放 [mod]8;[spec:2,noform:2]防御姿态;[spec:1,form:1]狂暴姿态;[form:3]嗜血;盾牌猛击
/施放 [form:2]复仇;旋风斩
/施放 [form:2,spec:2]惩戒痛击;乘胜追击
/施放 [spec:2]毁灭打击;斩杀
/施放 [form:1/3]英勇打击
/施放 [spec:1]破甲攻击
```

```
#showtooltip
/startattack
/施放 [noform:1,mod]战斗姿态;[mod]反击风暴;[form:1/2]撕裂;猛击
/施放 [nomod]英勇打击
/施放 [nomounted,nomod,combat,spec:1]血性狂暴
/stopcasting [spec:1,nomod]
```

```
#showtooltip
/startattack
/施放 [mod,spec:2]震荡波;[mod]英勇之怒;[form:1/2]雷霆一击;旋风斩
/施放 [nomod,spec:2]盾牌猛击;[mod]拦截
/施放 [nomod,spec:1]嗜血;[nomod]复仇
/施放 [nomod,form:1/3]乘胜追击
/施放 [nomod]顺劈斩
```

```
#showtooltip
/施放 [noform:1,mod]战斗姿态;[mod]碎裂投掷;[form:1/3]嗜血;[harm]嘲讽
/施放 [form:2]复仇;乘胜追击
/施放 [spec:2,form:2]惩戒痛击
/施放 [form:2,spec:2]毁灭打击;破甲攻击
/施放 [form:1/3]英勇打击
/施放 [nomounted,nomod,combat,spec:2]血性狂暴
```

```
/施放 [noform:3,spec:1]狂暴姿态;拦截
/施放 [spec:1]血性狂暴
/use 15
```

```
#showtooltip [mod]战斗怒吼;[noform:3,spec:1]!狂暴姿态;命令怒吼
/施放 [mod]战斗怒吼;[noform:3,spec:1]!狂暴姿态;[nomounted]命令怒吼
/equipslot [spec:1]16 影锋
/equipslot [spec:1]17 掘墓者
/equipslot [spec:2]16 托格拜恩，冰霜之王的战斧
/equipslot [spec:2]17 绝望屏障
/cast 血性狂暴
```

```
#showtooltip [mod]法术反射;[noform:2]!防御姿态;盾牌格挡
/equipslot 17 绝望屏障
/施放 [mod]法术反射;[noform:2]!防御姿态;[combat]盾牌格挡
/施放 [mod,combat]14;[noform:2]!防御姿态;[combat,spec:2]血性狂暴
```

```
#showtooltip [mod,spec:1]银色长枪;[mod]震荡猛击;[form:2]盾击;拳击
/equipslot [mod,spec:1]16 银色长枪
/equipslot [mod,spec:1]17 绝望屏障
/施放 [mod]震荡猛击;[form:1]狂暴姿态;[form:2]盾击;拳击
/施放 [nomod]英勇投掷
/施放 [nomod]射击
/施放 [nomod]投掷
/施放 [nomod]狂暴之怒
```

```
#showtooltip [help]援护;[spec:1,combat]拦截;冲锋
/施放 [help,noform:2,nodead]!防御姿态;[help,nodead]援护;[spec:1,combat,noform:3]狂暴姿态;[spec:1,combat]拦截;[spec:1,noform:1,harm]战斗姿态;冲锋
/施放 [help,form:2][combat,form:3]血性狂暴
/施放 [form:1/3,harm]断筋
```

```
#showtooltip [mod]盾墙;狂怒回复
/equipslot 17 冰川之墙
/施放 [noform:2]!防御姿态;[mod]盾墙;狂怒回复
/use [nomod,combat]14
```

```
#showtooltip 鲁莽
/施放 [noform:3]狂暴姿态;[combat]鲁莽
/施放 [combat]死亡之愿
```