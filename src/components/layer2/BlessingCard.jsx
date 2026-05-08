import { motion } from 'framer-motion'

/**
 * 毕业祝福组件 — 父母亲笔信卡片
 *
 * 修改接口：
 * - 图片路径：修改下方的 fatherLetterImage 和 motherLetterImages
 * - 文字内容：修改下方的 fatherLetterText 和 motherLetterText
 */

// ============================================
// 图片路径配置（修改这里以更换图片）
// ============================================
const fatherLetterImage = '/images/photos/father_letter.jpg'
const motherLetterImages = [
  '/images/photos/mother_1.jpg',
  '/images/photos/mother_2.jpg'
]

// ============================================
// 文字内容配置（修改这里以更换文字）
// ============================================
const fatherLetterText = `亲爱的美婷：

你好，当你看到这封信的时候，你大概已经穿上了学校的学位服在同学中、在镜头前笑得很灿烂了。四年的大学生涯，你成长了很多，收获更多。本科学习，你闯湖南吉首，战天津，游北京收获满满，本科生生涯即将完满结束。未来会更美好！

接下来的研究生学习、以后的人生道路，爸爸、妈妈希望您过得更充实、更快乐、更幸福。同时希望你在研究生阶段继续严格要求自己，努力学习，从高质量完成研究生的学习任务和目标，为以后的人生奠定坚实的基础。在学习其间提升、锻炼自己的生活技能，养成自律的自己，良好的习惯，多与优秀的人交流，学习、进步。同时学会搞一个属于自己、属于家人的小厨房——人生美口福。

再一个要求是在现实生活中，要学会与困难与挫折共存，理想和现实一定存在差距的，不顺境时可以哭也可以找爸爸妈妈或者其它信得过的人倾诉和解决。但过后一定要更努力、更积极，团结想帮助和愿意帮助你的人一起解决。没有不能解决的问题。加油！

第三就是掌握好努力照顾好自己。因为随着年龄的增长，独立的生活必定会到来，是时候学会煮一餐自己喜欢的菜、一味喜欢的美食。和家人分享自己每一次取得的收获，相成为人生的一种快乐。

最后就是懂得珍惜自己的身体，做好自己的日常作息，管理好日常开支，努力争取赚更多的钱，按时休息，按时吃饭，多做运动，好身体是美好生活的保障。祝一切顺意，心想事成！

爸：张荣 字
2026.5.5日`

const motherLetterText = `宝贝女儿，

见字如见面。

得知研究生录取信息的你，妈妈心里又是骄傲，又是高兴。那个安安静静，不争不抢的小女儿，终要脱离父母独自去开启"生物制药"的研究生生活了。

在外面成长，但妈妈想叮嘱你几句。你性格随和，这很好，说明你内心丰盈，不轻易被外界的信息所干扰。生物制药是个精细活，实验里的培养基，显微镜下的细胞，都需要你这份耐心和定力。"做科研就像熬一锅汤，火候到了，东西自然就出来了，不要急，把自己逼得太紧。"

妈妈对你没有太大的野心，不求你将来研发出灵丹妙药，只希望你在实验数据里，能找到自己心安的快乐。希望你在新的岗位上，把日子过得像你的性格一样舒展，吃好，睡好，开开心心过好每一天。

当你受委屈了，或者实验不顺心了，随时给妈妈打电话。你要记得，无论你在哪里，妈妈永远是你最坚强的后盾，永远是温暖的家。

宝贝女儿，去享受你的研究生生活吧，

毕业快乐。

爱你的妈妈`

const BlessingCard = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dream-dark mb-2">
            毕业祝福
          </h2>
          <div className="w-12 h-0.5 bg-dream-gold mx-auto mb-3" />
          <p className="text-dream-medium text-sm tracking-widest">
            Graduation Blessing
          </p>
        </motion.div>

        {/* 父母亲笔信卡片 */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10
                     shadow-lg hover:shadow-xl transition-all duration-500
                     border border-dream-light/50 dream-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
        >
          {/* 父母信件区域 - 左右两栏 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* 左侧：父亲信件 */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-3">
                <h3 className="text-lg font-serif font-bold text-dream-dark">父亲的亲笔信</h3>
              </div>
              {/* 父亲图片（主体，大尺寸） */}
              <div className="mb-3">
                <img
                  src={fatherLetterImage}
                  alt="父亲的亲笔信"
                  className="w-full h-[700px] object-contain rounded-lg shadow-md"
                />
              </div>
              {/* 父亲文字（辅助，小区域） */}
              <div className="bg-dream-light/30 rounded-lg p-3">
                <p className="text-xs text-dream-dark/80 leading-relaxed whitespace-pre-line font-serif">
                  {fatherLetterText}
                </p>
              </div>
            </motion.div>

            {/* 右侧：母亲信件 */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-3">
                <h3 className="text-lg font-serif font-bold text-dream-dark">母亲的亲笔信</h3>
              </div>
              {/* 母亲图片（两张垂直堆叠，主体，大尺寸） */}
              <div className="mb-3">
                <div className="flex flex-col">
                  <img
                    src={motherLetterImages[0]}
                    alt="母亲的亲笔信 1"
                    className="w-full h-[350px] object-contain rounded-t-lg shadow-md"
                  />
                  <img
                    src={motherLetterImages[1]}
                    alt="母亲的亲笔信 2"
                    className="w-full h-[350px] object-contain rounded-b-lg shadow-md"
                  />
                </div>
              </div>
              {/* 母亲文字（辅助，小区域） */}
              <div className="bg-dream-light/30 rounded-lg p-3">
                <p className="text-xs text-dream-dark/80 leading-relaxed whitespace-pre-line font-serif">
                  {motherLetterText}
                </p>
              </div>
            </motion.div>
          </div>

          {/* 装饰分隔线 */}
          <div className="flex items-center gap-3 mb-6">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-dream-primary to-transparent" />
            <span className="text-dream-gold">♥</span>
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-dream-primary to-transparent" />
          </div>

          {/* 底部装饰 */}
          <div className="flex justify-center gap-2">
            {['🌸', '✨', '⭐', '✨', '🌸'].map((e, i) => (
              <motion.span
                key={i}
                className="text-lg"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              >
                {e}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlessingCard
