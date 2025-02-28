import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon, FiBell, FiMessageSquare, FiUser } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const { darkMode, toggleDarkMode } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-dark-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Mindlancer" />
              <span className="ml-2 text-xl font-bold text-primary-600">Mindlancer</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400">
                Home
              </Link>
              <Link to="/jobs" className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400">
                Find Jobs
              </Link>
              <Link to="/freelancers" className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400">
                Hire Freelancers
              </Link>
              {isAuthenticated && user?.role === 'business' && (
                <Link to="/post-job" className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400">
                  Post a Job
                </Link>
              )}
            </div>
          </div>
          
          {/* Right side navigation */}
          <div className="flex items-center">
            {/* Theme toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>
            
            {/* Authenticated user actions */}
            {isAuthenticated ? (
              <div className="hidden md:flex md:items-center md:ml-4">
                <Link to="/messages" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-200">
                  <FiMessageSquare className="h-5 w-5" />
                </Link>
                <Link to="/notifications" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-200">
                  <FiBell className="h-5 w-5" />
                </Link>
                
                {/* User dropdown */}
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="flex items-center text-sm rounded-full focus:outline-none"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
                        {user?.name ? user.name.charAt(0).toUpperCase() : <FiUser />}
                      </div>
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-dark-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-dark-200" role="menuitem">
                          Dashboard
                        </Link>
                        <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-dark-200" role="menuitem">
                          Profile
                        </Link>
                        {user?.role === 'admin' && (
                          <Link to="/admin" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-dark-200" role="menuitem">
                            Admin Panel
                          </Link>
                        )}
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-dark-200"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex md:items-center md:ml-6 md:space-x-4">
                <Link to="/login" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400">
                  Log in
                </Link>
                <Link to="/register" className="btn-primary text-sm">
                  Sign up
                </Link>
              </div>
            )}
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-dark-200 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
                {isOpen ? (
                  <FiX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FiMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200">
                Home
              </Link>
              <Link to="/jobs" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200">
                Find Jobs
              </Link>
              <Link to="/freelancers" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200">
                Hire Freelancers
              </Link>
              {isAuthenticated && user?.role === 'business' && (
                <Link to="/post-job" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200">
                  Post a Job
                </Link>
              )}
            </div>
            
            {isAuthenticated ? (
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white">
                      {user?.name ? user.name.charAt(0).toUpperCase() : <FiUser />}
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium">{user?.name || 'User'}</div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{user?.email}</div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200">
                    Profile
                  </Link>
                  <Link to="/messages" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200">
                    Messages
                  </Link>
                  <Link to="/notifications" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200">
                    Notifications
                  </Link>
                  {user?.role === 'admin' && (
                    <Link to="/admin" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200">
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center space-x-4 px-5">
                  <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-200">
                    Log in
                  </Link>
                  <Link to="/register" className="btn-primary">
                    Sign up
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar