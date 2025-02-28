import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSearch, FiFilter, FiDollarSign, FiStar, FiMapPin } from 'react-icons/fi'

const Freelancers = () => {
  const [freelancers, setFreelancers] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    search: '',
    skills: [],
    minRate: '',
    maxRate: '',
    experienceLevel: 'all'
  })
  const [showFilters, setShowFilters] = useState(false)
  
  // Mock data for demonstration
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFreelancers([
        {
          id: 1,
          name: 'Sarah Johnson',
          title: 'Senior Frontend Developer',
          bio: 'Experienced frontend developer specializing in React and modern JavaScript frameworks. I build responsive, accessible, and performant web applications.',
          skills: ['React', 'TypeScript', 'CSS', 'Responsive Design'],
          hourlyRate: 65,
          rating: 4.9,
          reviews: 27,
          location: 'San Francisco, CA',
          experienceLevel: 'Senior',
          avatar: 'https://via.placeholder.com/100'
        },
        {
          id: 2,
          name: 'Michael Chen',
          title: 'Full Stack Developer',
          bio: 'Full stack developer with expertise in Node.js, React, and MongoDB. I specialize in building scalable web applications and RESTful APIs.',
          skills: ['Node.js', 'React', 'MongoDB', 'Express'],
          hourlyRate: 55,
          rating: 4.8,
          reviews: 19,
          location: 'Toronto, Canada',
          experienceLevel: 'Mid-Level',
          avatar: 'https://via.placeholder.com/100'
        },
        {
          id: 3,
          name: 'Elena Rodriguez',
          title: 'Backend Developer',
          bio: 'Backend developer with a focus on building secure and scalable APIs. Experienced in Node.js, Python, and database design.',
          skills: ['Node.js', 'Python', 'PostgreSQL', 'API Development'],
          hourlyRate: 60,
          rating: 4.7,
          reviews: 15,
          location: 'Madrid, Spain',
          experienceLevel: 'Senior',
          avatar: 'https://via.placeholder.com/100'
        },
        {
          id: 4,
          name: 'David Kim',
          title: 'UI/UX Designer & Developer',
          bio: 'Designer and developer with a passion for creating beautiful and functional user interfaces. I combine design thinking with technical skills.',
          skills: ['UI Design', 'UX Design', 'React', 'Figma'],
          hourlyRate: 70,
          rating: 5.0,
          reviews: 12,
          location: 'Seoul, South Korea',
          experienceLevel: 'Senior',
          avatar: 'https://via.placeholder.com/100'
        },
        {
          id: 5,
          name: 'Olivia Wilson',
          title: 'Mobile App Developer',
          bio: 'Mobile developer specializing in React Native and cross-platform applications. I build performant and user-friendly mobile experiences.',
          skills: ['React Native', 'JavaScript', 'iOS', 'Android'],
          hourlyRate: 60,
          rating: 4.6,
          reviews: 8,
          location: 'London, UK',
          experienceLevel: 'Mid-Level',
          avatar: 'https://via.placeholder.com/100'
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
      minRate: '',
      maxRate: '',
      experienceLevel: 'all'
    })
  }
  
  // Filter freelancers based on filters
  const filteredFreelancers = freelancers.filter(freelancer => {
    // Search filter
    if (filters.search && !freelancer.name.toLowerCase().includes(filters.search.toLowerCase()) && 
        !freelancer.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !freelancer.bio.toLowerCase().includes(filters.search.toLowerCase())) {
      return false
    }
    
    // Skills filter
    if (filters.skills.length > 0 && !filters.skills.some(skill => freelancer.skills.includes(skill))) {
      return false
    }
    
    // Rate filter
    if (filters.minRate && freelancer.hourlyRate < parseInt(filters.minRate)) {
      return false
    }
    
    if (filters.maxRate && freelancer.hourlyRate > parseInt(filters.maxRate)) {
      return false
    }
    
    // Experience level filter
    if (filters.experienceLevel !== 'all' && freelancer.experienceLevel !== filters.experienceLevel) {
      return false
    }
    
    return true
  })
  
  // All available skills from freelancers for filter
  const allSkills = [...new Set(freelancers.flatMap(freelancer => freelancer.skills))]
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Find Freelancers</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Discover talented developers for your projects
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
                placeholder="Search for freelancers by name, title, or skills..."
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
                <h3 className="text-sm font-medium mb-2">Hourly Rate</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="minRate" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Min ($)
                    </label>
                    <input
                      type="number"
                      id="minRate"
                      name="minRate"
                      value={filters.minRate}
                      onChange={handleFilterChange}
                      className="input-field"
                      placeholder="Min"
                    />
                  </div>
                  <div>
                    <label htmlFor="maxRate" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Max ($)
                    </label>
                    <input
                      type="number"
                      id="maxRate"
                      name="maxRate"
                      value={filters.maxRate}
                      onChange={handleFilterChange}
                      className="input-field"
                      placeholder="Max"
                    />
                  </div>
                </div>
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
      
      {/* Freelancer listings */}
      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : filteredFreelancers.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No freelancers found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters or search criteria
            </p>
          </div>
        ) : (
          filteredFreelancers.map(freelancer => (
            <motion.div
              key={freelancer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-dark-100 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <img
                    src={freelancer.avatar}
                    alt={freelancer.name}
                    className="h-16 w-16 rounded-full mr-4 object-cover"
                  />
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <Link to={`/freelancers/${freelancer.id}`} className="text-xl font-semibold hover:text-primary-600 dark:hover:text-primary-400">
                          {freelancer.name}
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {freelancer.title}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0 flex items-center">
                        <div className="flex items-center text-yellow-500 mr-2">
                          <FiStar className="fill-current" />
                          <span className="ml-1 text-gray-900 dark:text-gray-100">{freelancer.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          ({freelancer.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400 line-clamp-2">
                      {freelancer.bio}
                    </p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {freelancer.skills.map(skill => (
                        <span key={skill} className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <FiDollarSign className="mr-1" />
                          <span>${freelancer.hourlyRate}/hr</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <FiMapPin className="mr-1" />
                          <span>{freelancer.location}</span>
                        </div>
                      </div>
                      
                      <Link to={`/freelancers/${freelancer.id}`} className="btn-primary mt-4 sm:mt-0">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}

export default Freelancers