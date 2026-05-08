import { useState, useEffect, useRef, useCallback } from 'react'
import { Howl } from 'howler'
import { AUDIO_PATHS } from '../utils/constants'

// 模块级变量，方便外部直接调用播放
let bgmInstance = null

/** 由外部组件在用户交互时调用，绕过浏览器自动播放限制 */
export const playBgm = () => {
  if (bgmInstance && !bgmInstance.playing()) {
    bgmInstance.play()
    return true
  }
  return false
}

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const bgmRef = useRef(null)

  useEffect(() => {
    // 初始化背景音乐
    const howl = new Howl({
      src: [AUDIO_PATHS.background],
      loop: true,
      volume: 0.3,
      autoplay: false,
      onload: () => {
        setIsLoaded(true)
        // 尝试乐观自动播放（浏览器可能阻止，不阻塞流程）
        if (howl) {
          howl.play()
          setIsPlaying(true)
        }
      },
    })

    bgmRef.current = howl
    bgmInstance = howl

    return () => {
      bgmInstance = null
      if (bgmRef.current) {
        bgmRef.current.unload()
      }
    }
  }, [])

  const togglePlay = useCallback(() => {
    if (!bgmRef.current) return
    if (isPlaying) {
      bgmRef.current.pause()
      setIsPlaying(false)
    } else {
      bgmRef.current.play()
      setIsPlaying(true)
    }
  }, [isPlaying])

  const playSe = useCallback((src) => {
    const sound = new Howl({ src: [src], volume: 0.5 })
    sound.play()
  }, [])

  return { isPlaying, isLoaded, togglePlay, playSe }
}
