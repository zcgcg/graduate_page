import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FireworksCanvas from '../common/FireworksCanvas'
import { playBgm } from '../../hooks/useAudio'
import Envelope from './Envelope'
import SealEffect from './SealEffect'

// 封面两侧图片路径 — 修改此处即可更换
const SIDE_IMAGES = {
  left: '/images/photos/first1.jpg',
  right: '/images/photos/first2.jpg',
}

const Cover = ({ onOpen }) => {
  const [sealBroken, setSealBroken] = useState(false)
  const [showEnvelope, setShowEnvelope] = useState(false)
  const [showContent, setShowContent] = useState(true)

  // 星星数据
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 3,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
  }))

  const handleSealClick = () => {
    // 用户首次交互时触发音乐播放（绕过浏览器自动播放限制）
    playBgm()
    setSealBroken(true)
    setTimeout(() => {
      setShowEnvelope(true)
    }, 600)
    setTimeout(() => {
      setShowContent(false)
      onOpen()
    }, 2500)
  }

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div
          className="relative w-full h-screen overflow-hidden dream-gradient"
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* 烟花背景 */}
          <FireworksCanvas />

          {/* 星星粒子 */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: star.size,
                  height: star.size,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: star.duration,
                  delay: star.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* ===== 4:3:4 三栏布局 ===== */}
          <div
            className="relative mx-auto flex items-center justify-center"
            style={{
              zIndex: 2,
              height: '90vh',
              maxWidth: '1400px',
              padding: '0 2rem',
            }}
          >
            {/* 左栏 4 */}
            <div className="hidden md:block relative" style={{ flex: 4, height: '80vh' }}>
              <div className="w-full h-full relative overflow-hidden rounded-2xl">
                {/* 底层：清晰图片 */}
                <img
                  src={SIDE_IMAGES.left}
                  alt="回忆剪影"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* 上层：边缘虚化（中心清晰，从 60% 半径渐变为边缘模糊） */}
                <img
                  src={SIDE_IMAGES.left}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  style={{
                    filter: 'blur(12px)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 50%, black 80%)',
                    maskImage: 'radial-gradient(ellipse at center, transparent 50%, black 80%)',
                  }}
                />
                {/* 渐变遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-r from-dream-bg/50 via-transparent to-transparent rounded-2xl" />
              </div>
            </div>

            {/* 中栏 3 — 现有内容居中 */}
            <div className="flex flex-col items-center justify-center px-4 md:px-8" style={{ flex: 3 }}>
              {/* 标题 */}
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-serif font-bold
                               bg-gradient-to-r from-dream-accent via-dream-rose to-dream-accent
                               bg-clip-text text-transparent
                               drop-shadow-lg mb-3">
                  时光回响
                </h1>
                <p className="text-dream-medium text-lg md:text-xl font-light tracking-widest">
                  Echoes of Time
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="w-8 h-px bg-dream-primary" />
                  <span className="text-dream-rose text-sm tracking-widest">毕业纪念</span>
                  <span className="w-8 h-px bg-dream-primary" />
                </div>
              </motion.div>

              {/* 副标题 */}
              <motion.p
                className="text-dream-dark/60 text-sm md:text-base text-center mb-8 max-w-xs leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                每一段青春都会老去
                <br />
                但记忆里的我们永远年轻
              </motion.p>

              {/* 火漆印 + 信封组件 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                {!sealBroken ? (
                  <SealEffect onClick={handleSealClick} />
                ) : (
                  <Envelope visible={showEnvelope} />
                )}
              </motion.div>

              {/* 署名 */}
              <motion.p
                className="mt-6 text-dream-accent/80 text-sm md:text-base font-light tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                —— to 张美婷
              </motion.p>

              {/* 提示文字 */}
              {!sealBroken && (
                <motion.p
                  className="mt-6 text-dream-medium/60 text-xs tracking-widest animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  点击火漆印 · 开启时光之旅
                </motion.p>
              )}
            </div>

            {/* 右栏 4 */}
            <div className="hidden md:block relative" style={{ flex: 4, height: '80vh' }}>
              <div className="w-full h-full relative overflow-hidden rounded-2xl">
                {/* 底层：清晰图片 */}
                <img
                  src={SIDE_IMAGES.right}
                  alt="回忆剪影"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* 上层：边缘虚化 */}
                <img
                  src={SIDE_IMAGES.right}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  style={{
                    filter: 'blur(12px)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 50%, black 80%)',
                    maskImage: 'radial-gradient(ellipse at center, transparent 50%, black 80%)',
                  }}
                />
                {/* 渐变遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-l from-dream-bg/50 via-transparent to-transparent rounded-2xl" />
              </div>
            </div>
          </div>

          {/* 底部装饰 */}
          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            style={{ zIndex: 2 }}
          >
            {['🌸', '✨', '💫', '🌟', '🌸'].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Cover
