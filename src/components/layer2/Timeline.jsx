import { useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import YearCard from './YearCard'
import BlessingCard from './BlessingCard'
import LetterSection from './LetterSection'
import QuoteWall from './QuoteWall'
import ChemFeature from './ChemFeature'
import WishList from './WishList'
import Epilogue from './Epilogue'
import Footer from './Footer'
import ParallaxBackground from './ParallaxBackground'
import ParticleField from './ParticleField'
import FireworksCanvasLight from '../common/FireworksCanvasLight'
import { TIMELINE_YEARS } from '../../utils/constants'

const Timeline = () => {
  const containerRef = useRef(null)
  const [activeYear, setActiveYear] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} className="relative dream-gradient min-h-screen">
      {/* 浮动背景 */}
      <ParallaxBackground />
      <ParticleField />
      <FireworksCanvasLight />

      {/* 固定导航栏 */}
      <NavBar />

      <div className="relative z-10">
        {/* ===== Hero 首屏 ===== */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* ===== 时间线区域 ===== */}
        <section id="timeline" className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* 时间线标题 */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dream-dark mb-3">
                时光之轴
              </h2>
              <div className="w-16 h-0.5 bg-dream-gold mx-auto mb-3" />
              <p className="text-dream-medium text-sm tracking-widest">
                scroll down
              </p>
            </motion.div>

            {/* ===== 垂直时间轴 ===== */}
            <div className="relative">
              {/* 金色主轴线 */}
              <div className="timeline-axis absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block" />

              {/* 移动端轴线 */}
              <div className="timeline-axis absolute left-8 top-0 bottom-0 md:hidden" />

              {/* 年份卡片 */}
              {TIMELINE_YEARS.map((yearData, index) => (
                <div key={yearData.year}>
                  {/* 桌面端：左右交错布局 */}
                  <div className="hidden md:flex relative mb-24 last:mb-0 min-h-[200px]">
                    {/* 左侧半区 */}
                    <div className="w-1/2 flex items-center justify-center">
                      {index % 2 === 0 ? (
                        <motion.div
                          className="pr-16 flex justify-end w-full"
                          initial={{ opacity: 0, x: -60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-100px' }}
                          transition={{ duration: 0.6 }}
                        >
                          <YearCard yearData={yearData} index={index} />
                        </motion.div>
                      ) : null}
                    </div>

                    {/* 金色圆形节点（绝对居中） */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                                 w-12 h-12 rounded-full
                                 bg-gradient-to-br from-dream-gold to-dream-goldDark
                                 flex items-center justify-center
                                 shadow-lg gold-glow"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, type: 'spring' }}
                    >
                      <span className="text-dream-dark font-bold text-lg font-serif">
                        {index + 1}
                      </span>
                    </motion.div>

                    {/* 右侧半区 */}
                    <div className="w-1/2 flex items-center justify-center">
                      {index % 2 !== 0 ? (
                        <motion.div
                          className="pl-16 flex justify-start w-full"
                          initial={{ opacity: 0, x: 60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-100px' }}
                          transition={{ duration: 0.6 }}
                        >
                          <YearCard yearData={yearData} index={index} />
                        </motion.div>
                      ) : null}
                    </div>
                  </div>

                  {/* 移动端：左侧节点 + 右侧卡片 */}
                  <div className="md:hidden relative mb-12 pl-16">
                    {/* 节点 */}
                    <motion.div
                      className="absolute left-4 top-6 -translate-x-1/2 z-20
                                 w-10 h-10 rounded-full
                                 bg-gradient-to-br from-dream-gold to-dream-goldDark
                                 flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, type: 'spring' }}
                    >
                      <span className="text-dream-dark font-bold text-sm font-serif">
                        {index + 1}
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5 }}
                    >
                      <YearCard yearData={yearData} index={index} />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 祝福卡片 ===== */}
        <section id="blessing" className="py-16">
          <BlessingCard />
        </section>

        {/* ===== 手写信 ===== */}
        <section className="py-16">
          <LetterSection />
        </section>

        {/* ===== 语录墙 ===== */}
        <section className="py-16">
          <QuoteWall />
        </section>

        {/* ===== 化学特色区 ===== */}
        <section className="py-16">
          <ChemFeature />
        </section>

        {/* ===== 心愿清单 ===== */}
        <section className="py-16">
          <WishList />
        </section>

        {/* ===== 终章 ===== */}
        <section id="epilogue" className="py-16">
          <Epilogue />
        </section>

        {/* ===== 页脚 ===== */}
        <Footer />
      </div>
    </div>
  )
}

export default Timeline
