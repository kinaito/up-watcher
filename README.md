# 咕咕创作者（up-watcher）

> 创建时间：2026-05-07

## 项目简介

"咕咕创作者 — 一眼发现你关注的创作者最新作品，发掘值得看的内容。"
核心功能：按发布作品的时间降序排列你关注的创作者，降低推荐算法的干扰。

## 当前版本

v0.7.0

## 📦 安装教程

### 前置条件：必须先安装油猴脚本管理器

本工具是一个油猴脚本（UserScript），需要先安装油猴脚本管理器才能使用。

#### 步骤 1：安装油猴脚本管理器

推荐以下浏览器扩展：

| 浏览器 | 推荐扩展 | 安装地址 |
|--------|---------|---------|
| Chrome / Edge / 360等Chromium内核 | Tampermonkey | [Chrome 网上应用店](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) |
| Firefox | Tampermonkey | [Firefox 附加组件](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/) |
| Safari | Tampermonkey | Mac App Store 搜索安装 |
| 国内浏览器（QQ、UC等） | Violentmonkey（暴力猴） | 对应浏览器扩展商店搜索 |

#### 步骤 2：安装本脚本

1. 确保油猴脚本管理器已安装并启用（浏览器右上角会显示油猴图标）
2. 打开 `gugu-creator.user.js` 文件
3. 复制文件全部内容
4. 点击浏览器右上角油猴图标 → 「添加新脚本」
5. 清空默认代码，粘贴复制的脚本内容
6. 按 `Ctrl+S`（Mac 按 `Command+S`）保存
7. 刷新 B站 页面即可使用

#### 步骤 3：验证安装成功

- 打开任意 B站 页面
- 页面左侧会出现一个半隐藏的蓝毛女生悬浮按钮
- 鼠标悬停或点击按钮即可打开「咕咕创作者」面板

## 功能特性

- 左侧滑出面板，按最新作品发布时间排序创作者
- 圆形头像 + 作者名 + 最新作品标题 + 发布时间
- 支持B站关注分组筛选
- WBI签名算法，兼容B站API签名校验
- 5并发批量同步，快速拉取数据
- 数据缓存到 localStorage，面板打开即显示
- 🆕 v0.7.0 新增：主播身份智能识别，自动区分主播/视频创作者/咕咕创作者
- 🆕 v0.7.0 新增：创作者分组移动功能，一键调整分组
- 🆕 v0.7.0 新增：多维度时间智能显示，近7天绿色高亮，超1年弱化显示
- 🆕 v0.7.0 新增：同步过程支持后台运行，关闭面板不影响进度
- 🆕 v0.7.0 新增：每日首次打开自动同步，无需手动操作

## 📝 版本历史

### v0.7.0 (2026-05-10) | 智能分类 + 体验升级
- ✨ 新增：主播身份智能识别，自动区分主播/视频创作者/咕咕创作者
- ✨ 新增：创作者分组移动功能，鼠标悬停显示按钮，一键调整分组
- ✨ 新增：多维度时间智能显示，近7天发布绿色高亮，超过1年未更新弱化显示
- ✨ 新增：同步过程支持后台运行，关闭面板不影响同步进度
- ✨ 新增：每日首次打开自动同步，无需手动操作
- ⚡ 优化：发布时间固定右对齐，布局更整齐易读
- ⚡ 优化：同步速度大幅提升

### v0.5.2 (2026-05-07)
- 脚本文件重命名为`gugu-creator.user.js`，与品牌名统一
- 补充`@license MIT`，符合Greasyfork发布要求
- 新增脚本图标（base64内嵌）
- 优化描述文案
- 补充`@homepageURL`和`@supportURL`指向GitHub仓库

## 文件说明

- `CHANGELOG.md` — 版本变更记录
- `gugu-creator.user.js` — 咕咕创作者（稳定版）
- `bilibili-tracker-test.user.js` — 诊断测试脚本

## 技术要点

- `@grant none` — 直接操作页面DOM，避免Tampermonkey沙箱隔离
- 内联MD5 + WBI签名 — 不依赖外部脚本加载
- 字符串拼接构建HTML — 避免模板字符串在Tampermonkey中的语法错误
- `credentials:'include'` — 处理B站httpOnly cookie

## 作者

V二同学

## 联系方式

- 微信公众号：男朋友的求生欲
- 邮箱：<konekowang@iCloud.com>
- 问题反馈：<https://github.com/kinaito/up-watcher/issues>
