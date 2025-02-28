import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import { useTheme } from './contexts/ThemeContext'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/common/LoadingSpinner'

// Lazy loaded components
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/auth/Login'))
const Register = lazy(() => import('./pages/auth/Register'))
const FreelancerRegister = lazy(() => import('./pages/auth/FreelancerRegister'))
const BusinessRegister = lazy(() => import('./pages/auth/BusinessRegister'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const Jobs = lazy(() => import('./pages/jobs/Jobs'))
const JobDetails = lazy(() => import('./pages/jobs/JobDetails'))
const PostJob = lazy(() => import('./pages/jobs/PostJob'))
const Freelancers = lazy(() => import('./pages/freelancers/Freelancers'))
const FreelancerProfile = lazy(() => import('./pages/freelancers/FreelancerProfile'))
const Messages = lazy(() => import('./pages/messages/Messages'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Protected route component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuthenticated, loading } = useAuth()
  
  if (loading) return <LoadingSpinner />
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }
  
  return children
}

function App() {
  const { darkMode } = useTheme()
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-200 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="register/freelancer" element={<FreelancerRegister />} />
            <Route path="register/business" element={<BusinessRegister />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/:id" element={<JobDetails />} />
            <Route path="freelancers" element={<Freelancers />} />
            <Route path="freelancers/:id" element={<FreelancerProfile />} />
            
            {/* Protected routes */}
            <Route path="dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="post-job" element={
              <ProtectedRoute allowedRoles={['business']}>
                <PostJob />
              </ProtectedRoute>
            } />
            <Route path="messages" element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            } />
            <Route path="admin/*" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App