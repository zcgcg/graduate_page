import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const MobileTip = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <AnimatePresence>
      {isMobile && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-20 left-4 right-4 z-50
                     bg-white/90 backdrop-blur-sm rounded-xl p-4
                     shadow-lg border border-dream-light"
        >
          <p className="text-sm text-dream-dark text-center">
            👆 点击火漆印开启时光之旅
          </p>
          <button
            onClick={() => setDismissed(true)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-dream-medium
                       rounded-full text-white text-xs flex items-center justify-center"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileTip
