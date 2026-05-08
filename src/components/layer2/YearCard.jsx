import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * 年份卡片组件
 *
 * 修改接口：
 * - 更换图片：修改 yearData.image 或直接替换 DEFAULT_IMAGE 路径
 * - 修改年份/标题/描述：修改 constants.js 中的 TIMELINE_YEARS
 */

const DEFAULT_IMAGE = '/images/photos/4.jpg'

const YearCard = ({ yearData, index }) => {
  const { year, title, subtitle, description, details, image } = yearData
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      className="w-full max-w-xl"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden
                      shadow-lg hover:shadow-xl transition-all duration-300
                      border border-dream-light/50 dream-glow">
        {/* 左右布局：图片 | 文字 */}
        <div className="flex flex-row min-h-[220px]">

          {/* 左侧：图片区域 */}
          <div className="relative w-[200px] min-w-[200px] overflow-hidden bg-dream-light/30 flex-shrink-0">
            <img
              src={!imgError ? (image || DEFAULT_IMAGE) : DEFAULT_IMAGE}
              alt={`${year}年`}
              className="w-full h-full object-cover transition-transform duration-500
                         hover:scale-110 absolute inset-0"
              onError={() => setImgError(true)}
            />
            {/* 年份徽标（在图片左上角） */}
            <div className="absolute top-3 left-3 bg-dream-gold/90 text-dream-dark
                            text-xs font-bold px-3 py-1 rounded-full shadow-md
                            backdrop-blur-sm z-10">
              {year}
            </div>
            {/* 右侧渐变遮罩 */}
            <div className="absolute inset-y-0 right-0 w-12
                            bg-gradient-to-l from-white/80 to-transparent" />
          </div>

          {/* 右侧：文字内容 */}
          <div className="flex-1 p-5 text-left flex flex-col justify-between min-w-0">
            <div>
              <h3 className="text-xl font-serif font-bold text-dream-dark mb-1">
                {title}
              </h3>
              <p className="text-dream-medium text-xs tracking-widest mb-3">
                {subtitle}
              </p>
              <p className="text-dream-dark/70 text-sm leading-relaxed mb-3">
                {description}
              </p>

              {/* 详情列表 */}
              {details && details.length > 0 && (
                <ul className="space-y-1.5">
                  {details.map((detail, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-xs text-dream-dark/60"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-dream-accent mt-0.5 flex-shrink-0">✦</span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* 底部年份数字装饰 */}
            <div className="mt-3 flex justify-end">
              <span className="text-2xl font-serif font-bold text-dream-primary/20 select-none">
                {year}
              </span>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default YearCard
