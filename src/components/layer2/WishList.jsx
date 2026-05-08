import { motion } from 'framer-motion'
import { WISHLIST } from '../../utils/constants'

const WishList = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* 标题 */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-dream-dark mb-2">
            未来心愿
          </h2>
          <p className="text-dream-medium/60 text-sm">
            关于未来的小小期待
          </p>
          <div className="w-12 h-0.5 bg-dream-gold mx-auto mt-3" />
        </motion.div>

        {/* 心愿网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {WISHLIST.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-5 text-center
                         shadow-md border border-dream-light/50
                         hover:shadow-lg transition-all duration-300
                         cursor-default group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {item.emoji}
              </div>
              <p className="text-xs text-dream-dark/60">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WishList
