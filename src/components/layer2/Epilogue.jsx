import { motion } from 'framer-motion'

/**
 * 终章组件 — 2:6:2 三栏布局
 *
 * 修改接口：
 * - 中央图片：修改 CENTER_IMAGE 路径
 * - 左侧文字：修改 leftText 数组内容
 * - 右侧文字：修改 rightText 数组内容
 */

const CENTER_IMAGE = '/images/photos/ChatGPT_Image_3_final.png'

const leftText = [
  '时光荏苒',
  '岁月如歌',
  '四载春秋',
  '恍如一梦',
  '初入校园',
  '青涩面庞',
  '图书馆里',
  '奋笔疾书',
  '实验室中',
  '通宵达旦',
  '林荫道上',
  '欢声笑语',
]

const rightText = [
  '今朝离别',
  '各奔东西',
  '愿你前程',
  '繁花似锦',
  '愿你不忘',
  '少年初心',
  '山水万程',
  '皆有好运',
  '星河徜徉',
  '一路有光',
  '毕业快乐',
  '后会有期',
]

// 交替出现在文字中的装饰
const decorations = ['✦', '✧', '♥', '☆', '❀']

const Epilogue = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[600px] bg-dream-primary/5 rounded-full blur-3xl" />
      </div>

      {/* 标题 */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dream-dark mb-3">
          终章 · 不说再见
        </h2>
        <div className="w-16 h-0.5 bg-dream-gold mx-auto" />
      </motion.div>

      {/* ===== 1:8:1 三栏布局（图片更大） ===== */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 min-h-[600px]">
          {/* ===== 左栏 1 — 竖排文字 ===== */}
          <div className="flex items-center justify-center py-8 md:py-0" style={{ flex: 1 }}>
            <div className="vertical-text text-lg md:text-xl leading-loose text-dream-dark/70 space-y-1">
              {leftText.map((text, i) => (
                <motion.span
                  key={i}
                  className="block hover:text-dream-accent transition-colors duration-300 cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {i % 3 === 1 ? (
                    <span className="text-dream-gold mx-1">{decorations[i % decorations.length]}</span>
                  ) : null}
                  {text}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ===== 中栏 5 — 图片 ===== */}
          <div className="flex items-center justify-center px-2 md:px-6" style={{ flex: 5 }}>
            <motion.div
              className="relative h-full aspect-[7/10] mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* 图片 - 10:7比例 */}
              <img
                src={CENTER_IMAGE}
                alt="毕业留念"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* 渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-dream-bg/20 to-transparent rounded-2xl" />
              {/* 装饰边框 */}
              <div className="absolute -inset-2 rounded-2xl border border-dream-primary/20 -z-10" />
              <div className="absolute -inset-4 rounded-2xl border border-dream-primary/10 -z-20" />
              {/* 浮动装饰 */}
              <motion.div
                className="absolute -top-4 -right-4 text-3xl"
                animate={{ rotate: [0, 15, 0], y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌸
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 text-2xl"
                animate={{ rotate: [0, -15, 0], y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </motion.div>
          </div>

          {/* ===== 右栏 1 — 竖排文字 ===== */}
          <div className="flex items-center justify-center py-8 md:py-0" style={{ flex: 1 }}>
            <div className="vertical-text text-lg md:text-xl leading-loose text-dream-dark/70 space-y-1">
              {rightText.map((text, i) => (
                <motion.span
                  key={i}
                  className="block hover:text-dream-accent transition-colors duration-300 cursor-default"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {text}
                  {i % 3 === 2 ? (
                    <span className="text-dream-gold mx-1">{decorations[i % decorations.length]}</span>
                  ) : null}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 底部寄语 */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-dream-medium text-sm italic font-light">
          "愿此去繁花似锦，再相逢依然如故"
        </p>
      </motion.div>
    </section>
  )
}

export default Epilogue
