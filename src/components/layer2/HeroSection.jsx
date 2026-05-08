import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-dream-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-dream-rose/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-96 h-96 bg-dream-lavender/10 rounded-full blur-3xl" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* 装饰上标 */}
        <motion.div
          className="flex justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {['🌸', '✨', '🎓', '✨', '🌸'].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6
                     bg-gradient-to-r from-dream-accent via-dream-rose to-dream-accent
                     bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          毕业快乐
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          className="text-xl md:text-2xl text-dream-medium font-light tracking-widest mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Happy Graduation
        </motion.p>

        {/* 分隔线 */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="w-12 h-px bg-dream-primary" />
          <span className="text-dream-gold text-lg">◆</span>
          <span className="w-12 h-px bg-dream-primary" />
        </motion.div>

        {/* 引言 */}
        <motion.p
          className="text-dream-dark/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          从 2022 到 2026，四年时光转瞬即逝。
          <br />
          那些欢笑与泪水、拼搏与成长，
          <br />
          都将化作记忆里最闪耀的星光。
        </motion.p>

        {/* 滚动提示 */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-dream-medium rounded-full mx-auto
                       flex justify-center pt-2"
          >
            <motion.div
              className="w-1.5 h-1.5 bg-dream-medium rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-dream-medium/50 text-xs mt-2 tracking-widest">
            向下滚动
          </p>
        </motion.div>

        {/* 署名祝福 */}
        <motion.p
          className="mt-8 text-4xl md:text-5xl font-serif font-bold
                     bg-gradient-to-r from-dream-accent via-dream-rose to-dream-accent
                     bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          张美婷毕业快乐啊！！！
        </motion.p>
      </div>
    </section>
  )
}

export default HeroSection
