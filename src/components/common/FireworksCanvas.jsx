import { useEffect, useRef } from 'react'

// 梦幻粉色烟花调色盘
const PALETTES = [
  ['#f8bbd0', '#f48fb1', '#fce4ec', '#ec407a'],  // 粉色系
  ['#e8a0bf', '#e1bee7', '#fff0f5', '#f0d060'],  // 玫瑰紫金系
  ['#ffcdd2', '#ef9a9a', '#f8bbd0', '#ce93d8'],  // 珊瑚紫系
]

class FWRocket {
  constructor(sx, sy, tx, ty) {
    this.x = sx
    this.y = sy
    this.tx = tx
    this.ty = ty
    this.dist = Math.hypot(tx - sx, ty - sy)
    this.speed = 3 + Math.random() * 2.5
    this.angle = Math.atan2(ty - sy, tx - sx)
    this.vx = Math.cos(this.angle) * this.speed
    this.vy = Math.sin(this.angle) * this.speed
    this.trail = []
    this.alive = true
    this.hue = 330 // 粉色色调
  }

  update() {
    this.trail.push({ x: this.x, y: this.y, a: 1 })
    if (this.trail.length > 15) this.trail.shift()
    this.x += this.vx
    this.y += this.vy

    if (Math.hypot(this.x - this.tx, this.y - this.ty) < this.dist * 0.06) {
      this.explode()
      this.alive = false
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.trail.length; i++) {
      const t = this.trail[i]
      ctx.beginPath()
      ctx.arc(t.x, t.y, 2, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${this.hue},80%,70%,${(i / this.trail.length) * 0.6})`
      ctx.fill()
    }
    ctx.beginPath()
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2)
    ctx.fillStyle = '#fff'
    ctx.fill()
  }

  explode() {
    const pal = PALETTES[Math.floor(Math.random() * PALETTES.length)]
    const count = 90 + Math.floor(Math.random() * 60)

    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2
      const sp = 3 + Math.random() * 2
      fwParticles.push(new FWParticle(
        this.x, this.y,
        pal[i % pal.length],
        Math.cos(a) * sp,
        Math.sin(a) * sp,
        true
      ))
    }
  }
}

let fwParticles = []
let fwRockets = []

class FWParticle {
  constructor(x, y, color, vx, vy, trail) {
    this.x = x
    this.y = y
    this.color = color
    this.vx = vx
    this.vy = vy
    this.alpha = 1
    this.decay = 0.005 + Math.random() * 0.01
    this.gravity = 0.02
    this.trail = trail
    this.trailArr = []
    this.size = 2 + Math.random() * 2
    this.twinkle = Math.random() > 0.5
  }

  update() {
    if (this.trail) {
      this.trailArr.push({ x: this.x, y: this.y, a: this.alpha })
      if (this.trailArr.length > 8) this.trailArr.shift()
    }
    this.vy += this.gravity
    this.vx *= 0.98
    this.vy *= 0.98
    this.x += this.vx
    this.y += this.vy
    this.alpha -= this.decay
  }

  draw(ctx) {
    if (this.alpha <= 0) return

    if (this.trail) {
      for (let i = 0; i < this.trailArr.length; i++) {
        const t = this.trailArr[i]
        ctx.beginPath()
        ctx.arc(t.x, t.y, this.size * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = t.a * (i / this.trailArr.length) * 0.4
        ctx.fill()
      }
    }

    ctx.globalAlpha = this.twinkle
      ? (Math.random() > 0.3 ? this.alpha : this.alpha * 0.4)
      : this.alpha
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()

    // 辉光效果
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size * 3.5, 0, Math.PI * 2)
    const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3.5)
    g.addColorStop(0, this.color)
    g.addColorStop(1, 'transparent')
    ctx.fillStyle = g
    ctx.globalAlpha = this.alpha * 0.2
    ctx.fill()

    ctx.globalAlpha = 1
  }
}

const FireworksCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const autoFirework = () => {
      const x = Math.random() * canvas.width
      const y = 50 + Math.random() * (canvas.height * 0.5)
      fwRockets.push(new FWRocket(x, canvas.height + 10, x, y))
    }

    const interval = setInterval(autoFirework, 400 + Math.random() * 200)
    setTimeout(autoFirework, 100)
    setTimeout(autoFirework, 300)
    setTimeout(autoFirework, 500)

    let animationId
    const fwLoop = () => {
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = 'rgba(0,0,0,0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'lighter'

      fwRockets = fwRockets.filter(r => {
        r.update()
        r.draw(ctx)
        return r.alive
      })

      fwParticles = fwParticles.filter(p => {
        p.update()
        p.draw(ctx)
        return p.alpha > 0.01
      })

      animationId = requestAnimationFrame(fwLoop)
    }

    fwLoop()

    return () => {
      window.removeEventListener('resize', resize)
      clearInterval(interval)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default FireworksCanvas
