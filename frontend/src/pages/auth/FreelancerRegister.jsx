import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

const FreelancerRegister = () => {
  const { register: registerUser, oauthLogin } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const { register: registerForm, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password', '');

  const onSubmit = async (data) => {
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsLoading(true);
    try {
      // Combine all form data
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        title: data.title,
        skills: data.skills.split(',').map(skill => skill.trim()),
        hourlyRate: data.hourlyRate,
        experience: data.experience,
        bio: data.bio,
        github: data.github,
        linkedin: data.linkedin,
        portfolio: data.portfolio
      };

      const result = await registerUser(userData, 'freelancer');
      if (result.success) {
        navigate('/dashboard');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthRegister = (provider) => {
    setIsLoading(true);
    let authProvider;
    if (provider === 'github') {
      authProvider = new GithubAuthProvider();
    } else if (provider === 'google') {
      authProvider = new GoogleAuthProvider();
    }

    signInWithPopup(auth, authProvider)
      .then((result) => {
        console.log(result.user);
        setIsLoading(false);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="max-w-2xl mx-auto my-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="card p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Create a Freelancer Account</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Join Mindlancer and start finding work that matches your skills
          </p>
        </div>
        
        {/* Step indicator */}
        <div className="flex items-center justify-between mb-8">
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
            <div className={`h-1 w-12 ${step >= 3 ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
          </div>
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
              3
            </div>
          </div>
        </div>
        
        {step === 1 && (
          <>
            <div className="space-y-4 mb-6">
              <button
                onClick={() => handleOAuthRegister('github')}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors"
              >
                <FiGithub className="h-5 w-5" />
                <span>Continue with GitHub</span>
              </button>
              
              <button
                onClick={() => handleOAuthRegister('google')}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors"
              >
                <FiUser className="h-5 w-5" />
                <span>Continue with Google</span>
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
                  Full Name
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
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    className={`input-field pl-10 ${errors.email ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder="you@example.com"
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
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Professional Title
                </label>
                <input
                  id="title"
                  type="text"
                  className={`input-field ${errors.title ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="e.g. Full Stack Developer"
                  {...registerForm('title', { 
                    required: 'Professional title is required'
                  })}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="skills" className="block text-sm font-medium mb-1">
                  Skills (comma separated)
                </label>
                <input
                  id="skills"
                  type="text"
                  className={`input-field ${errors.skills ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="e.g. React, Node.js, MongoDB"
                  {...registerForm('skills', { 
                    required: 'Skills are required'
                  })}
                />
                {errors.skills && (
                  <p className="mt-1 text-sm text-red-500">{errors.skills.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="hourlyRate" className="block text-sm font-medium mb-1">
                  Hourly Rate (USD)
                </label>
                <input
                  id="hourlyRate"
                  type="number"
                  className={`input-field ${errors.hourlyRate ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="e.g. 50"
                  {...registerForm('hourlyRate', { 
                    required: 'Hourly rate is required',
                    min: {
                      value: 5,
                      message: 'Minimum hourly rate is $5'
                    }
                  })}
                />
                {errors.hourlyRate && (
                  <p className="mt-1 text-sm text-red-500">{errors.hourlyRate.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-1">
                  Years of Experience
                </label>
                <select
                  id="experience"
                  className={`input-field ${errors.experience ? 'border-red-500 dark:border-red-500' : ''}`}
                  {...registerForm('experience', { 
                    required: 'Experience is required'
                  })}
                >
                  <option value="">Select experience</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-500">{errors.experience.message}</p>
                )}
              </div>
            </>
          )}
          
          {step === 3 && (
            <>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium mb-1">
                  Professional Bio
                </label>
                <textarea
                  id="bio"
                  rows="4"
                  className={`input-field ${errors.bio ? 'border-red-500 dark:border-red-500' : ''}`}
                  placeholder="Tell clients about your background, experience, and why you're the best for the job"
                  {...registerForm('bio', { 
                    required: 'Bio is required',
                    minLength: {
                      value: 100,
                      message: 'Bio should be at least 100 characters'
                    }
                  })}
                ></textarea>
                {errors.bio && (
                  <p className="mt-1 text-sm text-red-500">{errors.bio.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="github" className="block text-sm font-medium mb-1">
                  GitHub Profile URL (optional)
                </label>
                <input
                  id="github"
                  type="text"
                  className="input-field"
                  placeholder="https://github.com/yourusername"
                  {...registerForm('github')}
                />
              </div>
              
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium mb-1">
                  LinkedIn Profile URL (optional)
                </label>
                <input
                  id="linkedin"
                  type="text"
                  className="input-field"
                  placeholder="https://linkedin.com/in/yourusername"
                  {...registerForm('linkedin')}
                />
              </div>
              
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium mb-1">
                  Portfolio Website (optional)
                </label>
                <input
                  id="portfolio"
                  type="text"
                  className="input-field"
                  placeholder="https://yourportfolio.com"
                  {...registerForm('portfolio')}
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
              className={`btn-primary ${step < 3 ? '' : 'w-full'} flex items-center justify-center`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : step < 3 ? 'Continue' : 'Create Account'}
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
};

export default FreelancerRegister;