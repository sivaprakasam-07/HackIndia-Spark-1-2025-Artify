import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSearch, FiFilter, FiDollarSign, FiClock, FiMapPin, FiTag } from 'react-icons/fi'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    search: '',
    skills: [],
    minBudget: '',
    maxBudget: '',
    jobType: 'all',
    experienceLevel: 'all'
  })
  const [showFilters, setShowFilters] = useState(false)
  
  // Mock data for demonstration
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setJobs([
        {
          id: 1,
          title: 'Senior React Developer for E-commerce Platform',
          description: 'We are looking for an experienced React developer to help build our e-commerce platform. The ideal candidate should have experience with Redux, GraphQL, and responsive design.',
          skills: ['React', 'Redux', 'GraphQL', 'Responsive Design'],
          budget: { min: 40, max: 60, type: 'hourly' },
          postedDate: '2025-04-01T12:00:00Z',
          deadline: '2025-04-30T12:00:00Z',
          location: 'Remote',
          experienceLevel: 'Senior',
          company: {
            name: 'ShopTech Inc.',
            logo: 'https://via.placeholder.com/50'
          }
        },
        {
          id: 2,
          title: 'Full Stack Developer for Healthcare Application',
          description: 'We need a full stack developer to work on our healthcare application. The project involves building new features and improving existing ones.',
          skills: ['Node.js', 'React', 'MongoDB', 'Express'],
          budget: { min: 5000, max: 8000, type: 'fixed' },
          postedDate: '2025-04-02T12:00:00Z',
          deadline: '2025-05-15T12:00:00Z',
          location: 'Remote',
          experienceLevel: 'Mid-Level',
          company: {
            name: 'HealthPlus',
            logo: 'https://via.placeholder.com/50'
          }
        },
        {
          id: 3,
          title: 'DevOps Engineer for Cloud Infrastructure',
          description: 'Looking for a DevOps engineer to help us set up and maintain our cloud infrastructure. Experience with AWS, Docker, and CI/CD pipelines is required.',
          skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
          budget: { min: 50, max: 70, type: 'hourly' },
          postedDate: '2025-04-03T12:00:00Z',
          deadline: '2025-04-25T12:00:00Z',
          location: 'Remote',
          experienceLevel: 'Senior',
          company: {
            name: 'CloudTech Solutions',
            logo: 'https://via.placeholder.com/50'
          }
        },
        {
          id: 4,
          title: 'UI/UX Designer for Mobile App',
          description: 'We are seeking a talented UI/UX designer to create beautiful and intuitive interfaces for our mobile application.',
          skills: ['UI Design', 'UX Design', 'Figma', 'Mobile Design'],
          budget: { min: 3000, max: 5000, type: 'fixed' },
          postedDate: '2025-04-04T12:00:00Z',
          deadline: '2025-05-10T12:00:00Z',
          location: 'Remote',
          experienceLevel: 'Mid-Level',
          company: {
            name: 'AppWorks',
            logo: 'https://via.placeholder.com/50'
          }
        },
        {
          id: 5,
          title: 'Backend Developer for Financial System',
          description: 'We need a backend developer to work on our financial system. Strong knowledge of security practices and experience with financial systems is a plus.',
          skills: ['Node.js', 'PostgreSQL', 'Security', 'API Development'],
          budget: { min: 45, max: 65, type: 'hourly' },
          postedDate: '2025-04-05T12:00:00Z',
          deadline: '2025-05-05T12:00:00Z',
          location: 'Remote',
          experienceLevel: 'Senior',
          company: {
            name: 'FinSecure',
            logo: 'https://via.placeholder.com/50'
          }
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSkillToggle = (skill) => {
    setFilters(prev => {
      const skills = [...prev.skills]
      if (skills.includes(skill)) {
        return { ...prev, skills: skills.filter(s => s !== skill) }
      } else {
        return { ...prev, skills: [...skills, skill] }
      }
    })
  }
  
  const resetFilters = () => {
    setFilters({
      search: '',
      skills: [],
      minBudget: '',
      maxBudget: '',
      jobType: 'all',
      experienceLevel: 'all'
    })
  }
  
  // Filter jobs based on filters
  const filteredJobs = jobs.filter(job => {
    // Search filter
    if (filters.search && !job.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !job.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false
    }
    
    // Skills filter
    if (filters.skills.length > 0 && !filters.skills.some(skill => job.skills.includes(skill))) {
      return false
    }
    
    // Budget filter
    if (filters.minBudget && (
      (job.budget.type === 'hourly' && job.budget.min < parseInt(filters.minBudget)) ||
      (job.budget.type === 'fixed' && job.budget.min < parseInt(filters.minBudget) * 100)
    )) {
      return false
    }
    
    if (filters.maxBudget && (
      (job.budget.type === 'hourly' && job.budget.max > parseInt(filters.maxBudget)) ||
      (job.budget.type === 'fixed' && job.budget.max > parseInt(filters.maxBudget) * 100)
    )) {
      return false
    }
    
    // Job type filter
    if (filters.jobType !== 'all' && job.budget.type !== filters.jobType) {
      return false
    }
    
    // Experience level filter
    if (filters.experienceLevel !== 'all' && job.experienceLevel !== filters.experienceLevel) {
      return false
    }
    
    return true
  })
  
  // Format date to relative time (e.g., "2 days ago")
  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24))
    
    if (diffInDays === 0) {
      return 'Today'
    } else if (diffInDays === 1) {
      return 'Yesterday'
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`
    } else if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7)
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
    } else {
      const months = Math.floor(diffInDays / 30)
      return `${months} ${months === 1 ? 'month' : 'months'} ago`
    }
  }
  
  // All available skills from jobs for filter
  const allSkills = [...new Set(jobs.flatMap(job => job.skills))]
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Find Jobs</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Discover opportunities that match your skills and interests
          </p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 btn-outline"
          >
            <FiFilter />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
        </div>
      </div>
      
      {/* Search and filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search for jobs by title or keyword..."
                className="input-field pl-10"
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <button className="btn-primary">Search</button>
        </div>
        
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6 mt-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {allSkills.map(skill => (
                    <button
                      key={skill}
                      onClick={() => handleSkillToggle(skill)}
                      className={`text-xs px-3 py-1 rounded-full ${
                        filters.skills.includes(skill)
                          ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Budget</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="minBudget" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Min ($)
                    </label>
                    <input
                      type="number"
                      id="minBudget"
                      name="minBudget"
                      value={filters.minBudget}
                      onChange={handleFilterChange}
                      className="input-field"
                      placeholder="Min"
                    />
                  </div>
                  <div>
                    <label htmlFor="maxBudget" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Max ($)
                    </label>
                    <input
                      type="number"
                      id="maxBudget"
                      name="maxBudget"
                      value={filters.maxBudget}
                      onChange={handleFilterChange}
                      className="input-field"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Job Type</h3>
                <select
                  name="jobType"
                  value={filters.jobType}
                  onChange={handleFilterChange}
                  className="input-field"
                >
                  <option value="all">All Types</option>
                  <option value="hourly">Hourly</option>
                  <option value="fixed">Fixed Price</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Experience Level</h3>
                <select
                  name="experienceLevel"
                  value={filters.experienceLevel}
                  onChange={handleFilterChange}
                  className="input-field"
                >
                  <option value="all">All Levels</option>
                  <option value="Entry">Entry Level</option>
                  <option value="Mid-Level">Mid Level</option>
                  <option value="Senior">Senior Level</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button
                onClick={resetFilters}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mr-4"
              >
                Reset Filters
              </button>
              <button className="btn-primary">Apply Filters</button>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Job listings */}
      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No jobs found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters or search criteria
            </p>
          </div>
        ) : (
          filteredJobs.map(job => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-dark-100 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <img
                      src={job.company.logo}
                      alt={job.company.name}
                      className="h-12 w-12 rounded-md mr-4"
                    />
                    <div>
                      <Link to={`/jobs/${job.id}`} className="text-xl font-semibold hover:text-primary-600 dark:hover:text-primary-400">
                        {job.title}
                      </Link>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        {job.company.name} • {job.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                      {formatRelativeTime(job.postedDate)}
                    </span>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600 dark:text-gray-400 line-clamp-2">
                  {job.description}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map(skill => (
                    <span key={skill} className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FiDollarSign className="mr-1" />
                      <span>
                        {job.budget.type === 'hourly' 
                          ? `$${job.budget.min}-$${job.budget.max}/hr` 
                          : `$${job.budget.min}-$${job.budget.max}`}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FiClock className="mr-1" />
                      <span>{job.budget.type === 'hourly' ? 'Hourly' : 'Fixed Price'}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FiTag className="mr-1" />
                      <span>{job.experienceLevel}</span>
                    </div>
                  </div>
                  
                  <Link to={`/jobs/${job.id}`} className="btn-primary mt-4 sm:mt-0">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}

export default Jobs