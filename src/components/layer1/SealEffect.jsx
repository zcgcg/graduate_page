import { motion } from 'framer-motion'

const SealEffect = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative cursor-pointer focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 火漆印主体 */}
      <motion.div
        className="w-24 h-24 rounded-full relative flex items-center justify-center
                   bg-gradient-to-br from-dream-accent via-dream-rose to-dream-accent
                   shadow-xl cursor-pointer"
        animate={{
          boxShadow: [
            '0 0 15px rgba(236, 64, 122, 0.4)',
            '0 0 30px rgba(236, 64, 122, 0.6)',
            '0 0 15px rgba(236, 64, 122, 0.4)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* 印章图案 */}
        <div className="text-white text-center">
          <div className="text-lg font-serif font-bold">♥</div>
          <div className="text-xs tracking-widest mt-0.5">时光</div>
        </div>

        {/* 装饰边框 */}
        <div className="absolute inset-1 rounded-full border border-white/30" />
        <div className="absolute inset-2 rounded-full border border-white/20" />
      </motion.div>

      {/* 悬挂丝带 */}
      <motion.div
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4
                   bg-gradient-to-b from-dream-accent to-transparent"
        animate={{ height: [16, 20, 16] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* 光晕 */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            '0 0 30px rgba(236, 64, 122, 0.2)',
            '0 0 50px rgba(236, 64, 122, 0.4)',
            '0 0 30px rgba(236, 64, 122, 0.2)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* 点击后爆炸粒子效果 - 通过父组件处理 */}
    </motion.button>
  )
}

export default SealEffect
