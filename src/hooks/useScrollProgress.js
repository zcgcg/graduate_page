import { useState, useEffect } from 'react'
import { throttle } from '../utils/helpers'

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const [direction, setDirection] = useState('down')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = throttle(() => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? scrollY / docHeight : 0
      setProgress(p)
      setDirection(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY
    }, 50)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { progress, direction }
}
