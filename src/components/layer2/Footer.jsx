import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 px-4 text-center dream-gradient">
      {/* 装饰 */}
      <div className="flex justify-center gap-3 mb-8">
        {['🌸', '✨', '🎓', '✨', '🌸'].map((emoji, i) => (
          <motion.span
            key={i}
            className="text-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      <motion.h3
        className="text-2xl md:text-3xl font-serif font-bold text-dream-dark mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        毕业快乐
      </motion.h3>

      <motion.p
        className="text-dream-medium text-sm mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Happy Graduation
      </motion.p>

      <motion.p
        className="text-dream-dark/40 text-xs mb-8 max-w-md mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        2022 — 2026
        <br />
        感谢这四年所有的相遇与陪伴
      </motion.p>

      {/* 返回顶部 */}
      <motion.button
        onClick={scrollToTop}
        className="inline-flex items-center gap-2 text-xs text-dream-medium/60
                   hover:text-dream-accent transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        whileHover={{ y: -2 }}
      >
        <span>↑ 返回顶部</span>
      </motion.button>

      <motion.div
        className="mt-8 text-xs text-dream-medium/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        © 2026 · 时光回响 · 谨以此纪念我们的青春
      </motion.div>
    </footer>
  )
}

export default Footer
