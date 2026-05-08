import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: '开篇', href: '#hero' },
  { label: '时光轴', href: '#timeline' },
  { label: '祝福', href: '#blessing' },
  { label: '终章', href: '#epilogue' },
]

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <span className="text-dream-dark font-serif text-sm tracking-widest">
          ✦ 时光回响
        </span>

        {/* 桌面端导航 */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs text-dream-dark/60 hover:text-dream-accent
                         tracking-wider transition-colors duration-300
                         relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-dream-accent
                               transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* 移动端汉堡菜单 */}
        <button
          className="md:hidden text-dream-dark"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-dream-light"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-dream-dark/60 hover:text-dream-accent
                             transition-colors py-1"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default NavBar
