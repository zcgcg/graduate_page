/**
 * 工具函数集
 */

// 线性插值
export const lerp = (a, b, t) => a + (b - a) * t

// 防抖
export const debounce = (fn, delay = 300) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

// 节流
export const throttle = (fn, limit = 300) => {
  let inThrottle = false
  return (...args) => {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// 随机范围
export const randomRange = (min, max) => Math.random() * (max - min) + min

// 获取图片完整路径
export const getImagePath = (path) => {
  if (!path) return '/images/photos/ChatGPT_Image_1.png'
  return path
}

// 格式化日期
export const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}
