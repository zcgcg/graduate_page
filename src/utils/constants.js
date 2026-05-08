// ===== 梦幻淡粉色调色盘 =====
export const COLORS = {
  bg: '#fff5f7',
  light: '#fce4ec',
  primary: '#f8bbd0',
  medium: '#f48fb1',
  accent: '#ec407a',
  dark: '#5d2e46',
  gold: '#f0d060',
  goldLight: '#f7e898',
  goldDark: '#d4a830',
  rose: '#e8a0bf',
  lavender: '#e1bee7',
  cream: '#fff0f5',
  mist: '#fceff1',
}

// ===== 时间线年份数据（2022-2026） =====
export const TIMELINE_YEARS = [
  {
    year: 2022,
    title: '初入校园',
    subtitle: '故事的开始',
    description:
      '怀揣梦想与忐忑，踏入这片陌生的校园。那时的你，脸上还带着青涩，对一切都充满好奇与期待。',
    details: [
      '新生报到，第一次远离家',
      '军训场上的汗水和笑声',
      '加入了第一个学生社团',
      '认识了大学里的第一批朋友',
    ],
    // 图片路径接口 — 修改此处即可更换图片
    image: '/images/photos/1.jpg',
    defaultImage: '/images/photos/ChatGPT_Image_1.png',
  },
  {
    year: 2023,
    title: '成长蜕变',
    subtitle: '在探索中前行',
    description:
      '褪去青涩，开始真正融入大学生活。在知识的海洋中遨游，在社团活动中挥洒热情，每一步都是成长的印记。',
    details: [
      '专业课学习渐入佳境',
      '积极参与学校活动',
      '担任社团核心成员',
      '结识了志同道合的伙伴',
    ],
    image: '/images/photos/2.jpg',
    defaultImage: '/images/photos/ChatGPT_Image_1.png',
  },
  {
    year: 2024,
    title: '奋斗时光',
    subtitle: '为梦想全力以赴',
    description:
      '大三是最忙碌也最充实的一年。在实验室里通宵达旦，在图书馆里奋笔疾书，每一个深夜都在为梦想铺路。',
    details: [
      '深入专业领域研究',
      '投身参与学科竞赛',
      '努力获得学校奖学金',
      '尝试明确毕业后的方向',
    ],
    image: '/images/photos/3.jpg',
    defaultImage: '/images/photos/ChatGPT_Image_1.png',
  },
  {
    year: 2025,
    title: '辛勤征程',
    subtitle: '迈向社会的第一步',
    description:
      '简历投了又改，面试面了又面。经历了焦虑、期待、失落与喜悦，终于收获了属于自己的offer。',
    details: [
      '努力学习准备考研',
      '参加多场校园招聘会',
      '经历了不知多少次面试',
      '收获了心仪的录取通知',
    ],
    image: '/images/photos/4.jpg',
    defaultImage: '/images/photos/ChatGPT_Image_1.png',
  },
  {
    year: 2026,
    title: '圆满毕业',
    subtitle: '不说再见',
    description:
      '穿上学位服的那一刻，四年的时光在脑海中闪过。从青涩到成熟，从迷茫到坚定，感谢这一路所有的相遇与陪伴。',
    details: [
      '完成毕业论文答辩',
      '拍摄毕业照留念',
      '与好友惜别',
      '带着回忆奔赴下一程',
    ],
    image: '/images/photos/5.jpg',
    defaultImage: '/images/photos/ChatGPT_Image_1.png',
  },
]

// ===== 照片数据 =====
export const DEFAULT_PHOTOS = [
  { id: 1, url: '/images/photos/1.jpg', year: 2022 },
  { id: 2, url: '/images/photos/2.jpg', year: 2023 },
  { id: 3, url: '/images/photos/3.jpg', year: 2024 },
  { id: 4, url: '/images/photos/4.jpg', year: 2025 },
  { id: 5, url: '/images/photos/5.jpg', year: 2026 },
]

// ===== 留言数据 =====
export const DEFAULT_MESSAGES = [
  {
    id: 1,
    author: '室友小陈',
    content: '四年的室友，一辈子的兄弟！记得我们一起通宵复习、一起点外卖的日子，愿你我前程似锦！',
    avatar: '/images/avatars/default.png',
  },
  {
    id: 2,
    author: '班长小张',
    content: '感谢你为班级做的一切，你是最棒的班长。毕业快乐，常联系！',
    avatar: '/images/avatars/default.png',
  },
  {
    id: 3,
    author: '学妹小李',
    content: '学长/学姐毕业快乐！谢谢你一直以来的照顾和指导，我会以你为榜样继续努力的！',
    avatar: '/images/avatars/default.png',
  },
  {
    id: 4,
    author: '指导老师',
    content: '看着你四年来的成长，老师很欣慰。保持这份热忱，未来一定更加精彩！',
    avatar: '/images/avatars/default.png',
  },
]

// ===== 语录标签 =====
export const QUOTES = [
  '愿归来仍是少年',
  '山水万程，皆有好运',
  '保持热爱，奔赴山海',
  '各自努力，顶峰相见',
  '青春不散场',
  '未来皆可期',
  '以梦为马，不负韶华',
  '前路浩浩荡荡',
  '万事尽可期待',
  '庆幸相遇，无憾别离',
  '星河徜徉，一路有光',
  '跃入人海，各有风雨灿烂',
  '此去繁花似锦',
  '再见依然如故',
  '永远年轻，永远热泪盈眶',
]

// ===== 心愿清单 =====
export const WISHLIST = [
  { emoji: '🌍', text: '去看极光' },
  { emoji: '📚', text: '读100本书' },
  { emoji: '✈️', text: '环游世界' },
  { emoji: '🎸', text: '学会一门乐器' },
  { emoji: '🏃', text: '跑一次马拉松' },
  { emoji: '🐱', text: '养一只猫' },
  { emoji: '🏠', text: '有一个温馨的家' },
  { emoji: '💼', text: '成为行业专家' },
]

// ===== 音频路径 =====
export const AUDIO_PATHS = {
  background: '/audio/background.mp3',
  seal: '/audio/seal.mp3',
  page: '/audio/page.mp3',
  firework: '/audio/firework.mp3',
}
