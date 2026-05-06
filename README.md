# 咕咕创作者（up-watcher）源码仓库

> 创建时间：2026-05-07

## 项目简介

**咕咕创作者** — 一眼发现你关注的创作者最新作品，发掘值得看的内容。

核心功能：按发布作品的时间降序排列你关注的创作者，降低推荐算法的干扰。

## 当前版本

v0.5.2

## 📦 安装教程

### 前置条件：必须先安装油猴脚本管理器

本工具是一个 **油猴脚本（UserScript）**，需要先安装油猴脚本管理器才能使用。

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
- 页面左侧会出现一个半隐藏的粉色悬浮按钮 📺
- 鼠标悬停或点击按钮即可打开「咕咕创作者」面板

## 功能特性

- 左侧滑出面板，按最新作品发布时间排序创作者
- 圆形头像 + 作者名 + 最新作品标题 + 发布时间
- 支持B站关注分组筛选
- WBI签名算法，兼容B站API签名校验
- 5并发批量同步，快速拉取数据
- 数据缓存到 localStorage，面板打开即显示

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

