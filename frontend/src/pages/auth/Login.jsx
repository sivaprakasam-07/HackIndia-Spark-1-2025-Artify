import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
  const { login, oauthLogin } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard'
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      const result = await login(data.email, data.password)
      if (result.success) {
        navigate(from, { replace: true })
      }
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleOAuthLogin = (provider) => {
    // In a real implementation, this would redirect to the OAuth provider
    // For now, we'll just simulate the process
    console.log(`Logging in with ${provider}`)
    
    // Simulate successful OAuth login
    const mockCode = 'mock_oauth_code'
    oauthLogin(provider, mockCode)
      .then(result => {
        if (result.success) {
          navigate(from, { replace: true })
        }
      })
  }
  
  return (
    <div className="max-w-md mx-auto my-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="card p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Sign in to your Mindlancer account
          </p>
        </div>
        
        <div className="space-y-4 mb-6">
          <button
            onClick={() => handleOAuthLogin('github')}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors"
          >
            <FiGithub className="h-5 w-5" />
            <span>Continue with GitHub</span>
          </button>
          
          <button
            onClick={() => handleOAuthLogin('linkedin')}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors"
          >
            <FiLinkedin className="h-5 w-5" />
            <span>Continue with LinkedIn</span>
          </button>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
          <span className="text-sm text-gray-500 dark:text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                className={`input-field pl-10 ${errors.email ? 'border-red-500 dark:border-red-500' : ''}`}
                placeholder="you@example.com"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              <FiMail className="absolute left-3 top-3 text-gray-400" />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className={`input-field pl-10 ${errors.password ? 'border-red-500 dark:border-red-500' : ''}`}
                placeholder="••••••••"
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
              />
              <FiLock className="absolute left-3 top-3 text-gray-400" />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-500">
              Forgot password?
            </Link>
          </div>
          
          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-600 hover:text-primary-500 font-medium">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

export default Login