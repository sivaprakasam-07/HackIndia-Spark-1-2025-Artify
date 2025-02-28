import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FiDollarSign, FiInfo } from 'react-icons/fi'

const PostJob = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  
  const jobType = watch('jobType', 'hourly')
  
  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      // In a real app, this would send the job data to the API
      console.log('Submitting job:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Redirect to jobs page after successful submission
      navigate('/jobs')
    } catch (error) {
      console.error('Error posting job:', error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-2">Post a Job</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Fill out the form below to post a new job and find the perfect freelancer
        </p>
        
        <div className="bg-white dark:bg-dark-100 rounded-lg shadow-md overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Job Title
              </label>
              <input
                id="title"
                type="text"
                className={`input-field ${errors.title ? 'border-red-500 dark:border-red-500' : ''}`}
                placeholder="e.g. Senior React Developer for E-commerce Platform"
                {...register('title', { 
                  required: 'Job title is required',
                  minLength: {
                    value: 10,
                    message: 'Job title should be at least 10 characters'
                  }
                })}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                Job Description
              </label>
              <textarea
                id="description"
                rows="8"
                className={`input-field ${errors.description ? 'border-red-500 dark:border-red-500' : ''}`}
                placeholder="Describe the job in detail, including responsibilities, requirements, and any other relevant information..."
                {...register('description', { 
                  required: 'Job description is required',
                  minLength: {
                    value: 100,
                    message: 'Job description should be at least 100 characters'
                  }
                })}
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="skills" className="block text-sm font-medium mb-1">
                Required Skills (comma separated)
              </label>
              <input
                id="skills"
                type="text"
                className={`input-field ${errors.skills ? 'border-red-500 dark:border-red-500' : ''}`}
                placeholder="e.g. React, Node.js, MongoDB"
                {...register('skills', { 
                  required: 'Skills are required'
                })}
              />
              {errors.skills && (
                <p className="mt-1 text-sm text-red-500">{errors.skills.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Job Type
              </label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    id="hourly"
                    type="radio"
                    value="hourly"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    {...register('jobType', { required: true })}
                    defaultChecked
                  />
                  <label htmlFor="hourly" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Hourly
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="fixed"
                    type="radio"
                    value="fixed"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    {...register('jobType', { required: true })}
                  />
                  <label htmlFor="fixed" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Fixed Price
                  </label>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="minBudget" className="block text-sm font-medium mb-1">
                  {jobType === 'hourly' ? 'Minimum Hourly Rate ($)' : 'Minimum Budget ($)'}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    id="minBudget"
                    type="number"
                    className={`input-field pl-8 ${errors.minBudget ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder={jobType === 'hourly' ? 'e.g. 25' : 'e.g. 500'}
                    {...register('minBudget', { 
                      required: 'Minimum budget is required',
                      min: {
                        value: jobType === 'hourly' ? 5 : 100,
                        message: `Minimum ${jobType === 'hourly' ? 'hourly rate' : 'budget'} is too low`
                      }
                    })}
                  />
                </div>
                {errors.minBudget && (
                  <p className="mt-1 text-sm text-red-500">{errors.minBudget.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="maxBudget" className="block text-sm font-medium mb-1">
                  {jobType === 'hourly' ? 'Maximum Hourly Rate ($)' : 'Maximum Budget ($)'}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    id="maxBudget"
                    type="number"
                    className={`input-field pl-8 ${errors.maxBudget ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder={jobType === 'hourly' ? 'e.g. 50' : 'e.g. 1000'}
                    {...register('maxBudget', { 
                      required: 'Maximum budget is required',
                      min: {
                        value: jobType === 'hourly' ? 5 : 100,
                        message: `Maximum ${jobType === 'hourly' ? 'hourly rate' : 'budget'} is too low`
                      }
                    })}
                  />
                </div>
                {errors.maxBudget && (
                  <p className="mt-1 text-sm text-red-500">{errors.maxBudget.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="experienceLevel" className="block text-sm font-medium mb-1">
                  Experience Level
                </label>
                <select
                  id="experienceLevel"
                  className={`input-field ${errors.experienceLevel ? 'border-red-500 dark:border-red-500' : ''}`}
                  {...register('experienceLevel', { 
                    required: 'Experience level is required'
                  })}
                >
                  <option value="">Select experience level</option>
                  <option value="Entry">Entry Level</option>
                  <option value="Mid-Level">Mid Level</option>
                  <option value="Senior">Senior Level</option>
                </select>
                {errors.experienceLevel && (
                  <p className="mt-1 text-sm text-red-500">{errors.experienceLevel.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="estimatedDuration" className="block text-sm font-medium mb-1">
                  Estimated Duration
                </label>
                <select
                  id="estimatedDuration"
                  className={`input-field ${errors.estimatedDuration ? 'border-red-500 dark:border-red-500' : ''}`}
                  {...register('estimatedDuration', { 
                    required: 'Estimated duration is required'
                  })}
                >
                  <option value="">Select duration</option>
                  <option value="Less than 1 week">Less than 1 week</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
                {errors.estimatedDuration && (
                  <p className="mt-1 text-sm text-red-500">{errors.estimatedDuration.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium mb-1">
                Application Deadline
              </label>
              <input
                id="deadline"
                type="date"
                className={`input-field ${errors.deadline ? 'border-red-500 dark:border-red-500' : ''}`}
                {...register('deadline', { 
                  required: 'Application deadline is required'
                })}
              />
              {errors.deadline && (
                <p className="mt-1 text-sm text-red-500">{errors.deadline.message}</p>
              )}
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-start">
              <FiInfo className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">Tips for getting great proposals</h4>
                <ul className="mt-2 text-sm text-blue-700 dark:text-blue-400 list-disc list-inside space-y-1">
                  <li>Be specific about your requirements and expectations</li>
                  <li>Provide clear deliverables and milestones</li>
                  <li>Set a realistic budget for the scope of work</li>
                  <li>Respond quickly to questions from potential freelancers</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn-primary flex items-center justify-center min-w-[150px]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Post Job'
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default PostJob