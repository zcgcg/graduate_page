import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/common/LoadingScreen'
import Cover from './components/layer1/Cover'
import Timeline from './components/layer2/Timeline'
import AudioPlayer from './components/common/AudioPlayer'
import MobileTip from './components/common/MobileTip'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* 第一层：封面 */}
      {!isLoading && !isOpen && <Cover onOpen={handleOpen} />}

      {/* 第二层：时间线 */}
      {!isLoading && isOpen && <Timeline />}

      {/* 全局浮动组件 */}
      {!isLoading && (
        <>
          <AudioPlayer />
          <MobileTip />
        </>
      )}
    </div>
  )
}

export default App
