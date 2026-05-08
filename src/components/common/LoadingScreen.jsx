import { motion } from 'framer-motion'

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center dream-gradient"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 花朵装饰 */}
      <motion.div
        className="text-6xl mb-8"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        🌸
      </motion.div>

      <motion.h1
        className="text-4xl md:text-5xl font-serif font-bold text-dream-dark mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        时光回响
      </motion.h1>

      <motion.p
        className="text-dream-medium text-lg mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        正在加载回忆...
      </motion.p>

      {/* 进度条 */}
      <motion.div
        className="w-48 h-1 bg-dream-light rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-dream-medium to-dream-accent rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          onAnimationComplete={onComplete}
        />
      </motion.div>

      <motion.div
        className="mt-6 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {['💫', '✨', '🌟', '⭐'].map((star, i) => (
          <motion.span
            key={i}
            className="text-xl"
            animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
          >
            {star}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
