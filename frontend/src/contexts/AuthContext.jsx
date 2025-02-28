import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  // Configure axios defaults
  axios.defaults.baseURL = import.meta.env.VITE_API_URL
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  // Check if user is authenticated on initial load
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setLoading(false)
        return
      }

      try {
        const res = await axios.get('/users/me')
        setUser(res.data)
        setIsAuthenticated(true)
      } catch (error) {
        console.error('Authentication error:', error)
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
        setIsAuthenticated(false)
      } finally {
        setLoading(false)
      }
    }

    verifyToken()
  }, [token])

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post('/auth/login', { email, password })
      const { token, user } = res.data
      
      localStorage.setItem('token', token)
      setToken(token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setUser(user)
      setIsAuthenticated(true)
      toast.success('Login successful!')
      
      return { success: true, user }
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed'
      toast.error(message)
      return { success: false, message }
    }
  }

  // Register function
  const register = async (userData, role) => {
    try {
      const res = await axios.post(`/auth/register/${role}`, userData)
      const { token, user } = res.data
      
      localStorage.setItem('token', token)
      setToken(token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setUser(user)
      setIsAuthenticated(true)
      toast.success('Registration successful!')
      
      return { success: true, user }
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed'
      toast.error(message)
      return { success: false, message }
    }
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
    setIsAuthenticated(false)
    delete axios.defaults.headers.common['Authorization']
    toast.info('You have been logged out')
  }

  // Update user profile
  const updateProfile = async (userData) => {
    try {
      const res = await axios.put('/users/profile', userData)
      setUser(res.data)
      toast.success('Profile updated successfully!')
      return { success: true, user: res.data }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to update profile'
      toast.error(message)
      return { success: false, message }
    }
  }

  // OAuth login
  const oauthLogin = async (provider, code) => {
    try {
      const res = await axios.post(`/auth/${provider}`, { code })
      const { token, user } = res.data
      
      localStorage.setItem('token', token)
      setToken(token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setUser(user)
      setIsAuthenticated(true)
      toast.success('Login successful!')
      
      return { success: true, user }
    } catch (error) {
      const message = error.response?.data?.message || `${provider} login failed`
      toast.error(message)
      return { success: false, message }
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      loading,
      login,
      register,
      logout,
      updateProfile,
      oauthLogin
    }}>
      {children}
    </AuthContext.Provider>
  )
}