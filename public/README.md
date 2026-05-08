# 素材目录

此目录用于存放项目所需的各种媒体资源。

## 目录结构

```
public/
├── audio/                 # 背景音乐和音效
│   ├── background.mp3   # 背景音乐
│   ├── seal.mp3         # 火漆印爆炸音效
│   ├── page.mp3         # 翻页音效
│   ├── firework.mp3     # 烟花音效
│   └── messages/        # 语音祝福
│       ├── msg1.mp3
│       ├── msg2.mp3
│       ├── msg3.mp3
│       └── msg4.mp3
│
├── images/              # 图片素材
│   ├── photos/         # 毕业照片
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   ├── photo3.jpg
│   │   └── photo4.jpg
│   └── avatars/        # 留言头像
│       ├── avatar1.jpg
│       └── default-avatar.png
│
├── models/             # 3D模型 (.gltf/.glb)
│   └── (如有自定义3D模型放置于此)
│
└── textures/           # 纹理图片
    └── (如有自定义纹理放置于此)
```

## 素材说明

### 音频文件格式
- 支持格式：MP3, WAV, OGG
- 建议背景音乐：MP3, 128kbps以上
- 建议音效：MP3, 64kbps以上

### 图片格式
- 支持格式：JPG, PNG, WebP
- 建议尺寸：
  - 照片：1920x1080 或更高
  - 头像：200x200 或 400x400

### 3D模型格式
- 支持格式：GLTF, GLB
- 如使用外部模型，请放置于此目录

## 占位符说明

代码中已设置默认占位符，当素材缺失时会显示默认样式。
添加素材后，刷新页面即可看到效果。
