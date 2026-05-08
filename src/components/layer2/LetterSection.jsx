import { motion } from 'framer-motion'

/**
 * 手写信组件
 *
 * 修改接口：直接修改下方的 letterContent 数组内容
 */

const letterContent = [
  '亲爱的张美婷姐姐：',
  '',
  '写下这封信的时候，窗外的阳光正好洒在书桌上，有一种梦幻的感觉，让我惊讶于竟然已经离你高考过去4年了。',
  '',
  '那时候的你，对一切都充满好奇，又对一切都感到陌生。你不知道未来四年会遇见谁，会发生什么故事，会成为什么样的人。',
  '',
  '如今回头看，这四年真像一场长长的梦。梦里有过迷茫——在深夜的自习室里对着看不懂的教材发呆；',
  '梦里有过泪水——为了一个实验数据反复失败，为了一个项目熬夜到天亮；',
  '梦里也有过欢笑——和室友在宿舍里分享零食和秘密，和朋友们在操场上聊天到深夜。',
  '',
  '但你走过来了。每一个熬过的夜，每一个克服的困难，都让你变得更加坚强。你不再是那个青涩的少年了——你学会了独立思考，学会了承担责任，学会了在逆境中寻找希望。',
  '',
  '毕业不是结束，而是新的开始。前方的路或许依然充满未知，但你已经有了面对一切的勇气。',
  '',
  '愿你在未来的日子里，永远保持这份热忱，永远相信美好的事情即将发生。弟弟永远支持你。',
  '',
  '此去经年，愿你前程似锦。',
  '归来时，仍是少年。',
  '',
  '—— 致最爱最爱的姐姐',
]

const LetterSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12
                     shadow-lg border border-dream-light/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 信纸头部 */}
          <div className="flex items-center gap-2 mb-8 pb-6 border-b border-dream-light">
            <span className="text-dream-accent text-lg">♥</span>
            <span className="text-dream-medium text-sm tracking-widest">一封信 · 弟弟张朝贵写给姐姐</span>
          </div>

          {/* 信纸内容 */}
          <div className="space-y-3">
            {letterContent.map((line, i) => (
              <motion.p
                key={i}
                className={`text-sm md:text-base leading-relaxed ${
                  line.startsWith('——')
                    ? 'text-right text-dream-accent/60 italic'
                    : line === ''
                    ? 'h-4'
                    : line.startsWith('亲爱的')
                    ? 'text-dream-dark font-medium text-base'
                    : 'text-dream-dark/70'
                }`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* 信纸底部 */}
          <div className="mt-8 pt-6 border-t border-dream-light flex justify-between items-center">
            <span className="text-dream-medium/50 text-xs">写于毕业前夕</span>
            <span className="text-dream-medium/50 text-xs">2026 · 夏</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LetterSection
