import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 响应拦截
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.warn('API 请求失败，使用本地数据:', error.message)
    return Promise.reject(error)
  }
)

export default api
