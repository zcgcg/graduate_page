import { motion } from 'framer-motion'
import { QUOTES } from '../../utils/constants'

const QuoteWall = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-dream-dark mb-2">
            致青春
          </h2>
          <div className="w-12 h-0.5 bg-dream-gold mx-auto" />
        </motion.div>

        {/* 标签墙 */}
        <div className="flex flex-wrap justify-center gap-3">
          {QUOTES.map((quote, i) => (
            <motion.span
              key={i}
              className="inline-block px-4 py-2 rounded-full
                         bg-white/70 backdrop-blur-sm
                         text-sm text-dream-dark/70
                         shadow-sm border border-dream-light/50
                         cursor-default select-none
                         hover:bg-dream-primary/30 hover:border-dream-primary/50
                         hover:text-dream-dark hover:shadow-md
                         transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.08, y: -2 }}
            >
              {quote}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuoteWall
