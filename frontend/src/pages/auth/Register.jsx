import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiUser, FiBriefcase } from 'react-icons/fi'

const Register = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold">Join Mindlancer</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
          Choose how you want to use Mindlancer. You can always create another account later.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="card p-8 flex flex-col items-center text-center"
        >
          <div className="h-16 w-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 mb-4">
            <FiUser className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold mb-2">I'm a Freelancer</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Find work, showcase your skills, and connect with clients looking for your expertise.
          </p>
          <ul className="text-left space-y-2 mb-8">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Create a professional profile</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Browse and apply to jobs</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Get paid securely for your work</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Build your reputation with reviews</span>
            </li>
          </ul>
          <Link to="/register/freelancer" className="btn-primary w-full">
            Join as a Freelancer
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="card p-8 flex flex-col items-center text-center"
        >
          <div className="h-16 w-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center text-secondary-600 mb-4">
            <FiBriefcase className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold mb-2">I'm a Business</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Post jobs, hire talented developers, and get your projects completed efficiently.
          </p>
          <ul className="text-left space-y-2 mb-8">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Post jobs and receive proposals</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Browse freelancer profiles</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Secure payment protection</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Manage projects efficiently</span>
            </li>
          </ul>
          <Link to="/register/business" className="btn-secondary w-full">
            Join as a Business
          </Link>
        </motion.div>
      </div>
      
      <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{' '}
        <Link to="/login" className="text-primary-600 hover:text-primary-500 font-medium">
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default Register