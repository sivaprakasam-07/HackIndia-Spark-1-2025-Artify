import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white dark:bg-dark-100 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Mindlancer" />
              <span className="ml-2 text-xl font-bold text-primary-600">Mindlancer</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Connect with top software developers and businesses worldwide. Find your next project or hire the perfect talent.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                <FiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* For Freelancers */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">For Freelancers</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/jobs" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/create-profile" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link to="/freelancer-resources" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          {/* For Businesses */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">For Businesses</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/post-job" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/freelancers" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Find Freelancers
                </Link>
              </li>
              <li>
                <Link to="/business-resources" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Mindlancer. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              Terms
            </Link>
            <Link to="/cookies" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer