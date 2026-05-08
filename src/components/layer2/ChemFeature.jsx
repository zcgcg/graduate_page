import { motion } from 'framer-motion'

/**
 * 应用化学工程师特色区
 *
 * 修改接口：直接修改下方的 features 和 jokes 数组
 */

const features = [
  { icon: '🧪', label: '实验时长', value: '1200+', unit: '小时' },
  { icon: '📊', label: '实验报告', value: '200+', unit: '份' },
  { icon: '🔬', label: '使用仪器', value: '30+', unit: '种' },
  { icon: '📝', label: '发表论文', value: '1', unit: '篇' },
]

const jokes = [
  '有机实验三大难题：产物去哪儿了、产物是什么、产物为什么是这个颜色',
  '化学人的浪漫："你的美如苯环，离域而不可分割"',
  '那些年我们追过的反应：银镜反应、碘钟反应、"老师这个反应为什么会爆炸"',
  '四大化学实验守则：小心、再小心、非常小心、以及——跑！',
  '最熟悉的陌生人：旋转蒸发仪、磁力搅拌器、还有那台永远不听话的pH计',
]

const ChemFeature = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-dream-dark mb-2">
            应用化学 · 工程师の日常
          </h2>
          <p className="text-dream-medium/60 text-sm">
            Applied Chemistry · Engineering Life
          </p>
          <div className="w-12 h-0.5 bg-dream-gold mx-auto mt-3" />
        </motion.div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center
                         shadow-md border border-dream-light/50
                         hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl mb-2">{feat.icon}</div>
              <div className="text-2xl font-bold text-dream-accent mb-1">
                {feat.value}
              </div>
              <div className="text-xs text-dream-medium">{feat.label}</div>
              <div className="text-xs text-dream-medium/50">{feat.unit}</div>
            </motion.div>
          ))}
        </div>

        {/* 趣味语录 */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-dream-light/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-dream-medium text-sm mb-4 tracking-widest">
            ⚗️ 化学人的自我吐槽
          </h3>
          <div className="space-y-3">
            {jokes.map((joke, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 text-sm text-dream-dark/60 leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-dream-gold flex-shrink-0 mt-0.5">🧪</span>
                <span>{joke}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChemFeature
