# 时光回响 (Echoes of Time) - 毕业纪念网页

一个具有高级感、叙事性的毕业纪念网页，采用双层架构与平滑滚动单页设计。

---

## 目录

- [项目概述](#项目概述)
- [设计思路与架构](#设计思路与架构)
- [页面结构](#页面结构)
- [代码架构](#代码架构)
- [技术栈与依赖](#技术栈与依赖)
- [环境变量配置](#环境变量配置)
- [后端接口设计](#后端接口设计)
- [自定义配置指南](#自定义配置指南)
- [快速开始](#快速开始)
- [部署说明](#部署说明)

---

## 项目概述

**时光回响** 是一个为毕业纪念设计的互动网页，采用「信封开启」的沉浸式入口，结合叙事性的时间线滚动体验，唤起对大学四年时光的珍贵回忆。

### 核心特性

- **双层架构**：封面层（信封开启）+ 内容层（时间线叙事）
- **沉浸式体验**：火漆印开启动画、Canvas 烟花背景、粒子场效果
- **音频氛围**：背景音乐 + 多场景音效（需用户交互触发）
- **响应式设计**：完整的移动端适配
- **涩谷式美学**：深蓝烫金配色方案

---

## 设计思路与架构

### 第一层：封面（Cover Layer）

**设计思路**：模拟实体信封的仪式感，通过「火漆印」作为入口触发器，引导用户进入主内容。

**包含部分**：
- `Cover.jsx` - 封面主组件，烟花背景 + 星星粒子 + 标题动画
- `Envelope.jsx` - 信封组件，支持开启动画（封口旋转 + 信纸升起）
- `SealEffect.jsx` - 火漆印视觉特效
- `FireworksCanvas.jsx` - Canvas 烟花动画背景

**交互流程**：
1. 用户访问网页 → 加载动画 → 显示封面
2. 用户点击火漆印 → 触发爆炸粒子效果 → 信封开启动画
3. 1.5秒后自动切换到第二层

### 第二层：时间线（Timeline Layer）

**设计思路**：单页滚动叙事架构，通过垂直滚动带动时间线进程，各内容区块依次展现。整体视觉风格为「时光轴」叙事。

**包含部分**（按滚动顺序）：
1. `HeroSection` - 首屏英雄区，毕业主题标语
2. `YearCard` × 4 - 求学成长时间线卡片（2022-2025）
3. `BlessingCard` - 毕业祝福卡片
4. `LetterSection` - 手写信长文区块
5. `QuoteWall` - 软萌语录标签墙
6. `ChemFeature` - 应用化学工程师趣味区块
7. `WishList` - 未来心愿清单
8. `Epilogue` - 终章抒情收尾
9. `Footer` - 页脚（含返回顶部按钮）

**辅助组件**：
- `NavBar` - 固定顶部导航栏
- `ParallaxBackground` - 视差背景装饰
- `ParticleField` - 粒子场背景效果

---

## 页面结构

```
┌─────────────────────────────────────────┐
│  第一层：封面 (Cover Layer)              │
│  ┌─────────────────────────────────┐    │
│  │  Canvas 烟花背景                  │    │
│  │  ★ 星星粒子                      │    │
│  │                                   │    │
│  │      ╔═══════════════╗           │    │
│  │      ║  时光回响    ║           │    │
│  │      ║  ECHOES...   ║           │    │
│  │      ╚═══════════════╝           │    │
│  │                                   │    │
│  │      ┌─────────────┐              │    │
│  │      │  [火漆印]  │              │    │
│  │      │  信封组件   │              │    │
│  │      └─────────────┘              │    │
│  │                                   │    │
│  │   点击火漆印开启时光之旅            │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
                    ↓ 点击火漆印
┌─────────────────────────────────────────┐
│  第二层：时间线 (Timeline Layer)         │
│  ┌─────────────────────────────────┐    │
│  │ [NavBar 固定导航栏]              │    │
│  ├─────────────────────────────────┤    │
│  │ [ParallaxBackground]            │    │
│  │ [ParticleField]                 │    │
│  ├─────────────────────────────────┤    │
│  │ HERO SECTION 首屏               │    │
│  ├─────────────────────────────────┤    │
│  │ TIMELINE 时间线 (4年卡片)        │    │
│  │  ├── 2022 初入校园              │    │
│  │  ├── 2023 成长蜕变              │    │
│  │  ├── 2024 奋斗时光              │    │
│  │  └── 2025 收获满满              │    │
│  ├─────────────────────────────────┤    │
│  │ BLESSING CARD 毕业祝福          │    │
│  ├─────────────────────────────────┤    │
│  │ LETTER SECTION 手写信            │    │
│  ├─────────────────────────────────┤    │
│  │ QUOTE WALL 语录标签墙           │    │
│  ├─────────────────────────────────┤    │
│  │ CHEM FEATURE 化学特色区         │    │
│  ├─────────────────────────────────┤    │
│  │ WISH LIST 心愿清单              │    │
│  ├─────────────────────────────────┤    │
│  │ EPILOGUE 终章                   │    │
│  ├─────────────────────────────────┤    │
│  │ FOOTER 页脚                    │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [AudioPlayer 浮动音频控制]              │
└─────────────────────────────────────────┘
```

---

## 代码架构

```
D:\python_project\zmt_2
├── public/                          # 静态公共资源
│   ├── audio/                       # 音频文件
│   │   ├── background.flac          # 背景音乐（循环）
│   │   ├── seal.flac               # 火漆印爆炸音效
│   │   ├── page.flac              # 翻页音效
│   │   └── firework.flac          # 烟花音效
│   └── images/                      # 图片素材
│       ├── photos/                 # 毕业照片（时间线卡片用）
│       └── avatars/                # 留言者头像
│
├── src/
│   ├── components/
│   │   ├── layer1/                 # 第一层：封面
│   │   │   ├── Cover.jsx           # 封面主组件
│   │   │   ├── Envelope.jsx       # 信封组件（开启动画）
│   │   │   └── SealEffect.jsx     # 火漆印效果
│   │   │
│   │   ├── layer2/                 # 第二层：时间线内容
│   │   │   ├── Timeline.jsx        # 主容器（滚动监听）
│   │   │   ├── NavBar.jsx          # 固定导航栏
│   │   │   ├── HeroSection.jsx     # 首屏英雄区
│   │   │   ├── YearCard.jsx        # 年份卡片（支持4年）
│   │   │   ├── BlessingCard.jsx    # 毕业祝福卡片
│   │   │   ├── LetterSection.jsx   # 手写信区块
│   │   │   ├── QuoteWall.jsx       # 语录标签墙
│   │   │   ├── ChemFeature.jsx     # 应用化学特色区
│   │   │   ├── WishList.jsx        # 未来心愿清单
│   │   │   ├── Epilogue.jsx        # 终章收尾
│   │   │   ├── Footer.jsx          # 页脚
│   │   │   ├── ParallaxBackground.jsx  # 视差背景
│   │   │   └── ParticleField.jsx   # 粒子场
│   │   │
│   │   └── common/                 # 公共组件
│   │       ├── AudioPlayer.jsx     # 音频播放器（浮动控制）
│   │       ├── LoadingScreen.jsx   # 加载屏幕
│   │       ├── MobileTip.jsx       # 移动端提示
│   │       └── FireworksCanvas.jsx # Canvas烟花
│   │
│   ├── hooks/                       # 自定义 React Hooks
│   │   ├── useAudio.js             # Howler.js 音频封装
│   │   ├── useScrollProgress.js    # 滚动进度监听
│   │   ├── useIntersectionObserver.js  # 元素可见性检测
│   │   └── useGyroscope.js         # 陀螺仪（预留功能）
│   │
│   ├── services/                    # 数据接口层
│   │   ├── api.js                  # Axios 实例配置
│   │   ├── messages.js             # 留言 CRUD 接口
│   │   ├── photos.js               # 照片接口
│   │   └── audio.js                # 音频路径配置
│   │
│   ├── styles/
│   │   └── index.css               # Tailwind 入口 + 全局样式
│   │
│   ├── utils/
│   │   ├── constants.js            # 全局常量（配色、时间线数据等）
│   │   └── helpers.js              # 工具函数（lerp、debounce等）
│   │
│   ├── App.jsx                     # 根组件（层切换逻辑）
│   └── main.jsx                    # React DOM 挂载
│
├── index.html                      # HTML 入口
├── vite.config.js                  # Vite 配置
├── tailwind.config.js               # Tailwind 主题配置
├── postcss.config.js                # PostCSS 配置
├── package.json
└── README.md
```

### 组件层级

```
App
├── LoadingScreen          # 加载状态
├── Cover (Layer 1)
│   ├── FireworksCanvas
│   ├── Stars Animation
│   └── Envelope
│       └── SealEffect
│           └── ExplosionParticles
│
└── Timeline (Layer 2)
    ├── NavBar
    ├── ParallaxBackground
    ├── ParticleField
    ├── HeroSection
    ├── YearCard × 4
    ├── BlessingCard
    ├── LetterSection
    ├── QuoteWall
    ├── ChemFeature
    ├── WishList
    ├── Epilogue
    └── Footer

# 全局浮动组件
├── AudioPlayer
└── MobileTip
```

---

## 技术栈与依赖

### 核心依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| `react` | ^18.2.0 | UI 框架 |
| `react-dom` | ^18.2.0 | React DOM 渲染 |
| `framer-motion` | ^10.18.0 | 动画与过渡效果 |
| `howler` | ^2.2.4 | 音频播放管理 |
| `axios` | ^1.6.2 | HTTP 请求（后端接口） |

### 开发依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| `vite` | ^5.0.10 | 构建工具 |
| `@vitejs/plugin-react` | ^4.2.1 | React 插件 |
| `tailwindcss` | ^3.4.0 | 原子化 CSS 框架 |
| `autoprefixer` | ^10.4.16 | PostCSS 插件 |
| `postcss` | ^8.4.32 | CSS 转换工具 |

### 依赖用途详解

#### framer-motion
用于所有 UI 动画，包括：
- 页面切换过渡（`AnimatePresence`）
- 滚动进入动画（`whileInView`）
- 微交互效果（`whileHover`、`whileTap`）
- 信封开启动画（封口旋转、信纸升起）
- 爆炸粒子效果

#### howler
封装 Web Audio API，提供可靠的跨浏览器音频播放：
- 背景音乐循环播放
- 火漆印爆炸音效
- 翻页音效
- 烟花音效

#### axios
HTTP 客户端，用于：
- 获取后端留言数据
- 获取后端照片数据
- 提交用户留言

---

## 环境变量配置

复制 `.env.example` 为 `.env` 并配置：

```bash
# API 配置
VITE_API_BASE_URL=http://localhost:3000/api

# 资源路径（相对 public 目录）
VITE_AUDIO_PATH=/audio
VITE_IMAGE_PATH=/images
VITE_MODEL_PATH=/models

# 3D/交互配置
VITE_ENABLE_GYROSCOPE=true    # 是否启用陀螺仪
VITE_PARTICLES_COUNT=1000     # 粒子数量

# 环境模式
VITE_APP_MODE=development
```

---

## 后端接口设计

### 接口概述

项目预留后端接口，支持留言、照片等数据的动态获取。当前为**静态优先策略**：优先使用本地常量数据，后端接口失败时自动降级。

### 接口列表

#### 1. 获取留言列表

```
GET /api/messages
```

**响应格式**：
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "author": "张三",
      "content": "愿你前程似锦，归来仍是少年！",
      "avatar": "/images/avatars/avatar1.png"
    }
  ]
}
```

**降级策略**：接口失败时返回 `DEFAULT_MESSAGES`（`src/utils/constants.js`）

---

#### 2. 提交留言

```
POST /api/messages
```

**请求格式**：
```json
{
  "author": "留言者姓名",
  "content": "留言内容",
  "avatar": "/images/avatars/default.png"
}
```

**响应格式**：
```json
{
  "success": true,
  "data": {
    "id": 4,
    "author": "留言者姓名",
    "content": "留言内容",
    "avatar": "/images/avatars/default.png",
    "createdAt": "2026-04-28T10:00:00Z"
  }
}
```

---

#### 3. 获取照片列表

```
GET /api/photos
```

**响应格式**：
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "url": "/images/photos/photo1.jpg",
      "year": 2022
    },
    {
      "id": 2,
      "url": "/images/photos/photo2.jpg",
      "year": 2023
    }
  ]
}
```

**降级策略**：接口失败时返回 `DEFAULT_PHOTOS`

---

#### 4. 按年份获取照片

```
GET /api/photos?year=2022
```

**响应格式**：同 `GET /api/photos`，筛选指定年份

---

### 本地静态数据配置

如无需后端，可直接在 `src/utils/constants.js` 中修改：

```javascript
// 留言数据
export const DEFAULT_MESSAGES = [
  { id: 1, author: '张三', content: '...', avatar: '...' }
]

// 照片数据
export const DEFAULT_PHOTOS = [
  { id: 1, url: '/images/photos/xxx.jpg', year: 2022 }
]

// 时间线年份
export const TIMELINE_YEARS = [
  { year: 2022, title: '初入校园', description: '...' },
  { year: 2023, title: '成长蜕变', description: '...' },
  { year: 2024, title: '奋斗时光', description: '...' },
  { year: 2025, title: '收获满满', description: '...' }
]
```

---

## 自定义配置指南

### 1. 配色方案

修改 `src/utils/constants.js` 或 `tailwind.config.js`：

```javascript
// constants.js
export const COLORS = {
  primary: '#1a237e',      // 主色-深蓝
  primaryDark: '#0d1421',  // 背景-墨蓝
  primaryLight: '#3949ab',  // 浅蓝
  gold: '#d4af37',          // 点缀-金色
  goldLight: '#e6c65c',     // 浅金
  goldDark: '#b8960c',      // 深金
  ink: '#0d1421',           // 墨色
  paper: '#f5f5f0'          // 纸白
}
```

### 2. 时间线数据

修改 `TIMELINE_YEARS` 常量：

```javascript
export const TIMELINE_YEARS = [
  { year: 2022, title: '初入校园', description: '怀揣梦想...' },
  { year: 2023, title: '成长蜕变', description: '在知识的海洋...' },
  // ...
]
```

### 3. 时间线卡片照片

修改 `src/components/layer2/YearCard.jsx` 中的 `YEAR_IMAGES`：

```javascript
const YEAR_IMAGES = [
  '/images/photos/2022.jpg',  // 2022年
  '/images/photos/2023.jpg',  // 2023年
  '/images/photos/2024.jpg',  // 2024年
  '/images/photos/2025.jpg',  // 2025年
]
```

### 4. 语录标签墙内容

修改 `src/components/layer2/QuoteWall.jsx` 中的 `quotes` 数组。

### 5. 手写信内容

修改 `src/components/layer2/LetterSection.jsx` 中的正文内容。

### 6. 化学特色区内容

修改 `src/components/layer2/ChemFeature.jsx` 中的：
- `features` 统计数据数组
- `jokes` 趣味语录数组

### 7. 音频文件

将音频文件放入 `public/audio/` 目录：

| 文件名 | 用途 |
|--------|------|
| `background.flac` | 背景音乐 |
| `seal.flac` | 火漆印爆炸音效 |
| `page.flac` | 翻页音效 |
| `firework.flac` | 烟花音效 |

### 8. 照片素材

将照片放入 `public/images/photos/` 目录，支持 JPG/PNG/WebP 格式。

---

## 快速开始

### 前置条件

- Node.js >= 16
- npm >= 8

### 安装与运行

```bash
# 克隆项目后，进入目录
cd D:\python_project\zmt_2

# 安装依赖（仅首次运行或依赖变更后）
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

### 访问地址

- 开发服务器：http://localhost:3000/
- 预览构建：http://localhost:4173/

---

## 部署说明

### 构建产物

执行 `npm run build` 后，生成 `dist/` 目录，包含所有静态文件。

### 部署平台推荐

| 平台 | 特点 | 适用场景 |
|------|------|----------|
| Vercel | 零配置、免费 | React 项目首选 |
| Netlify | 拖拽部署、免费 | 静态网站 |
| GitHub Pages | 免费、需配置 | 开源项目 |
| 阿里云 OSS | 按量付费、大流量 | 企业级部署 |
| 腾讯云 COS | 按量付费、大流量 | 企业级部署 |

### Vercel 部署步骤

1. 将项目推送到 GitHub 仓库
2. 登录 Vercel，Import GitHub 项目
3. Framework Preset 选择 `Vite`
4. 点击 Deploy

### 静态服务器部署

```bash
# 构建
npm run build

# 将 dist 目录内容部署到任意静态服务器
# Nginx 配置示例：
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 音频文件 MIME 类型
    location ~* \.(flac)$ {
        add_header Content-Type audio/flac;
    }
}
```

---

## 注意事项

1. **音频播放限制**：现代浏览器要求用户交互后才能播放音频，因此背景音乐需用户点击后才开始播放。

2. **Three.js 残留**：如需完全移除 Three.js 相关代码（当前项目已移除），需额外清理：
   - `src/utils/helpers.js` 中的 THREE 导入和 `createParticleGeometry`
   - `vite.config.js` 中的 `optimizeDeps.include` three 相关配置

3. **移动端适配**：项目已完整适配移动端，使用 Tailwind 响应式断点（sm/md/lg）。

4. **SEO 优化**：当前为单页应用，如需 SEO 支持，建议后续集成 Next.js 或添加 SSR/预渲染方案。

---

*最后更新：2026-04-28*
