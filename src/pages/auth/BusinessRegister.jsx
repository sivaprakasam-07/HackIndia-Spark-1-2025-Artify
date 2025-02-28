<div className="max-w-2xl mx-auto my-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="card p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Create a Business Account</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Join Mindlancer and start hiring talented developers for your projects
          </p>
        </div>
        
        {/* Step indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
              1
            </div>
            <div className={`h-1 w-12 ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
          </div>
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
              2
            </div>
          </div>
        </div>
        
        {step === 1 && (
          <>
            <div className="space-y-4 mb-6">
              <button
                onClick={() => handleOAuthRegister('linkedin')}
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
          </>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    className={`input-field pl-10 ${errors.name ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder="John Doe"
                    {...registerForm('name', { 
                      required: 'Name is required'
                    })}
                  />
                  <FiUser className="absolute left-3 top-3 text-gray-400" />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Work Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    className={`input-field pl-10 ${errors.email ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder="you@company.com"
                    {...registerForm('email', { 
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
                    {...registerForm('password', { 
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters'
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
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    className={`input-field pl-10 ${errors.confirmPassword ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder="••••••••"
                    {...registerForm('confirmPassword', { 
                      required: 'Please confirm your password',
                      validate: value => value === password || 'Passwords do not match'
                    })}
                  />
                  <FiLock className="absolute left-3 top-3 text-gray-400" />
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
                )}
              </div>
            </>
          )}
          
          {step === 2 && (
            <>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium mb-1">
                  Company Name
                </label>
                <div className="relative">
                  <input
                    id="companyName"
                    type="text"
                    className={`input-field pl-10 ${errors.companyName ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder="Acme Inc."
                    {...registerForm('companyName', { 
                      required: 'Company name is required'
                    })}
                  />
                  <FiBriefcase className="absolute left-3 top-3 text-gray-400" />
                </div>
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-500">{errors.companyName.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="industry" className="block text-sm font-medium mb-1">
                  Industry
                </label>
                <select
                  id="industry"
                  className={`input-field ${errors.industry ? 'border-red-500 dark:border-red-500' : ''}`}
                  {...registerForm('industry', { 
                    required: 'Industry is required'
                  })}
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="media">Media & Entertainment</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
                {errors.industry && (
                  <p className="mt-1 text-sm text-red-500">{errors.industry.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="companySize" className="block text-sm font-medium mb-1">
                  Company Size
                </label>
                <select
                  id="companySize"
                  className={`input-field ${errors.companySize ? 'border-red-500 dark:border-red-500' : ''}`}
                  {...registerForm('companySize', { 
                    required: 'Company size is required'
                  })}
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
                {errors.companySize && (
                  <p className="mt-1 text-sm text-red-500">{errors.companySize.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-medium mb-1">
                  Company Website (optional)
                </label>
                <div className="relative">
                  <input
                    id="website"
                    type="text"
                    className="input-field pl-10"
                    placeholder="https://yourcompany.com"
                    {...registerForm('website')}
                  />
                  <FiGlobe className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Company Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className={`input-field ${errors.description ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="Tell freelancers about your company and the types of projects you typically need help with"
                  {...registerForm('description', { 
                    required: 'Company description is required',
                    minLength: {
                      value: 50,
                      message: 'Description should be at least 50 characters'
                    }
                  })}
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium mb-1">
                  LinkedIn Company Page (optional)
                </label>
                <input
                  id="linkedin"
                  type="text"
                  className="input-field"
                  placeholder="https://linkedin.com/company/yourcompany"
                  {...registerForm('linkedin')}
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  {...registerForm('terms', { 
                    required: 'You must agree to the terms and conditions'
                  })}
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary-600 hover:text-primary-500">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary-600 hover:text-primary-500">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.terms && (
                <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
              )}
            </>
          )}
          
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn-outline"
              >
                Back
              </button>
            )}
            
            <button
              type="submit"
              className={`btn-primary ${step < 2 ? '' : 'w-full'} flex items-center justify-center`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : step < 2 ? 'Continue' : 'Create Account'}
            </button>
          </div>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:text-primary-500 font-medium">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default BusinessRegister