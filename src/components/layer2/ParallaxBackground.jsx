import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ParallaxBackground = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.3])

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* 浮动圆形装饰 */}
      <div
        className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #f8bbd0 0%, transparent 70%)',
          transform: 'translateY(0)',
        }}
      />
      <div
        className="absolute bottom-40 right-10 w-64 h-64 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #e1bee7 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #f0d060 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

export default ParallaxBackground
