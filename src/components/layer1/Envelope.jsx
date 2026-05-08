import { motion } from 'framer-motion'

const Envelope = ({ visible }) => {
  if (!visible) return null

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 信封主体 */}
      <motion.div
        className="relative w-48 h-36 mx-auto"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* 信封底部 */}
        <div className="absolute inset-0 bg-gradient-to-br from-dream-primary to-dream-rose rounded-lg shadow-xl" />

        {/* 信纸升起 */}
        <motion.div
          className="absolute left-2 right-2 bg-white/95 rounded shadow-md p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: -40, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="w-full h-1 bg-dream-primary/30 rounded mb-2" />
          <div className="w-3/4 h-1 bg-dream-primary/20 rounded mb-2" />
          <div className="w-1/2 h-1 bg-dream-primary/20 rounded" />
          {/* 小小的心形装饰 */}
          <div className="mt-3 text-center text-dream-accent/40 text-lg">♥</div>
        </motion.div>

        {/* 封口 flap - 旋转打开 */}
        <motion.div
          className="absolute -top-8 left-0 right-0"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: 180 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
          style={{ transformOrigin: 'bottom center', perspective: 600 }}
        >
          <div
            className="w-0 h-0 mx-auto"
            style={{
              borderLeft: '96px solid transparent',
              borderRight: '96px solid transparent',
              borderBottom: '50px solid #f48fb1',
            }}
          />
        </motion.div>
      </motion.div>

      {/* 光芒效果 */}
      <motion.div
        className="absolute inset-0 -m-4 rounded-xl"
        animate={{
          boxShadow: [
            '0 0 20px rgba(232, 160, 191, 0.3)',
            '0 0 40px rgba(232, 160, 191, 0.5)',
            '0 0 20px rgba(232, 160, 191, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  )
}

export default Envelope
