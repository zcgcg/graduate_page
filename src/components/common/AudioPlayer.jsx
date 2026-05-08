import { useAudio } from '../../hooks/useAudio'

const AudioPlayer = () => {
  const { isPlaying, isLoaded, togglePlay } = useAudio()

  if (!isLoaded) return null

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full
                 bg-dream-primary/80 backdrop-blur-sm
                 flex items-center justify-center
                 shadow-lg hover:shadow-xl
                 transition-all duration-300 hover:scale-110
                 gold-glow"
      aria-label={isPlaying ? '暂停音乐' : '播放音乐'}
    >
      {isPlaying ? (
        // 音符图标 - 播放中
        <svg className="w-6 h-6 text-dream-dark" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      ) : (
        // 音符图标 - 暂停
        <svg className="w-6 h-6 text-dream-dark" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          <line x1="18" y1="3" x2="18" y2="19" stroke="currentColor" strokeWidth="2" />
        </svg>
      )}
    </button>
  )
}

export default AudioPlayer
