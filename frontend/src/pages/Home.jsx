// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { FiSearch, FiCode, FiBriefcase, FiDollarSign, FiShield } from 'react-icons/fi'

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                 Connect with Top Software Developers
//               </h1>
//               <p className="text-lg mb-8 text-white/90">
//                 Mindlancer is the premier marketplace for businesses to find skilled developers and for freelancers to discover exciting projects.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link to="/register/business" className="btn-secondary">
//                   Hire Developers
//                 </Link>
//                 <Link to="/register/freelancer" className="bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-center">
//                   Find Work
//                 </Link>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="hidden md:block"
//             >
//               <div className="glass p-6 rounded-xl">
//                 <div className="bg-white/10 p-4 rounded-lg mb-4"></div>
//                 <div className="bg-white/10 p-2 rounded-lg mb-3 w-3/4"></div>
//                 <div className="bg-white/10 p-2 rounded-lg mb-3 w-1/2"></div>
//                 <div className="bg-white/10 p-2 rounded-lg w-2/3"></div>
//                 <div className="mt-6 flex justify-end">
//                   <div className="bg-white/20 px-4 py-2 rounded-lg w-1/3"></div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
        
//         {/* Curved shape at bottom */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
//             <path 
//               fill="currentColor" 
//               fillOpacity="1" 
//               d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
//               className="text-gray-50 dark:text-dark-200"
//             ></path>
//           </svg>
//         </div>
//       </section>
      
//       {/* Search Section */}
//       <section className="py-12 bg-gray-50 dark:bg-dark-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="card-glass max-w-3xl mx-auto">
//             <h2 className="text-2xl font-bold mb-6 text-center">Find Your Perfect Match</h2>
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="flex-grow">
//                 <div className="relative">
//                   <input 
//                     type="text" 
//                     placeholder="Search for jobs or freelancers..." 
//                     className="input-field pl-10"
//                   />
//                   <FiSearch className="absolute left-3 top-3 text-gray-400" />
//                 </div>
//               </div>
//               <button className="btn-primary">Search</button>
//             </div>
//             <div className="mt-4 flex flex-wrap gap-2">
//               <span className="text-xs bg-gray-200 dark:bg-dark-100 px-2 py-1 rounded-full">React</span>
//               <span className="text-xs bg-gray-200 dark:bg-dark-100 px-2 py-1 rounded-full">Node.js</span>
//               <span className="text-xs bg-gray-200 dark:bg-dark-100 px-2 py-1 rounded-full">Full Stack</span>
//               <span className="text-xs bg-gray-200 dark:bg-dark-100 px-2 py-1 rounded-full">UI/UX</span>
//               <span className="text-xs bg-gray-200 dark:bg-dark-100 px-2 py-1 rounded-full">DevOps</span>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Features Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Why Choose Mindlancer?</h2>
//             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//               Our platform connects talented developers with businesses looking for the perfect match, with features designed to make the process seamless.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <motion.div 
//               className="card p-6"
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-4">
//                 <FiCode className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Skilled Developers</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Access a global pool of pre-vetted software developers with verified skills and experience.
//               </p>
//             </motion.div>
            
//             <motion.div 
//               className="card p-6"
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-4">
//                 <FiBriefcase className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Quality Projects</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Find meaningful projects from reputable businesses looking for your specific expertise.
//               </p>
//             </motion.div>
            
//             <motion.div 
//               className="card p-6"
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-4">
//                 <FiDollarSign className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Our escrow system ensures that payments are secure and freelancers get paid for completed work.
//               </p>
//             </motion.div>
            
//             <motion.div 
//               className="card p-6"
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-4">
//                 <FiShield className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Our dedicated support team helps resolve any issues that may arise during project execution.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>
      
//       {/* How It Works Section */}
//       <section className="py-16 bg-gray-50 dark:bg-dark-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">How It Works</h2>
//             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//               Getting started with Mindlancer is easy, whether you're looking to hire talent or find work.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
//               <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Sign up and create a detailed profile showcasing your skills or business needs.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
//               <h3 className="text-xl font-semibold mb-2">Connect & Collaborate</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Post jobs or submit proposals, communicate through our platform, and find the perfect match.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
//               <h3 className="text-xl font-semibold mb-2">Work & Get Paid</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Complete milestones, submit work, and receive secure payments through our platform.
//               </p>
//             </div>
//           </div>
          
//           <div className="mt-12 text-center">
//             <Link to="/register" className="btn-primary">
//               Get Started Today
//             </Link>
//           </div>
//         </div>
//       </section>
      
//       {/* Testimonials Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
//             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//               Hear from freelancers and businesses who have found success on our platform.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="card p-6">
//               <div className="flex items-center mb-4">
//                 <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
//                 <div className="ml-4">
//                   <h4 className="font-semibold">Sarah Johnson</h4>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 dark:text-gray-400">
//                 "Mindlancer has transformed my freelance career. I've connected with amazing clients and worked on projects that truly challenge and inspire me."
//               </p>
//             </div>
            
//             <div className="card p-6">
//               <div className="flex items-center mb-4">
//                 <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
//                 <div className="ml-4">
//                   <h4 className="font-semibold">Michael Chen</h4>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">CTO, TechStart Inc.</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 dark:text-gray-400">
//                 "We found an exceptional developer through Mindlancer who helped us launch our MVP in record time. The quality of talent on this platform is outstanding."
//               </p>
//             </div>
            
//             <div className="card p-6">
//               <div className="flex items-center mb-4">
//                 <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
//                 <div className="ml-4">
//                   <h4 className="font-semibold">Elena Rodriguez</h4>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 dark:text-gray-400">
//                 "The secure payment system and clear project scopes make working through Mindlancer a breeze. I've built a sustainable freelance business here."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Join thousands of freelancers and businesses already using Mindlancer to connect, collaborate, and create amazing software.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/register/business" className="btn-secondary">
//               Hire Developers
//             </Link>
//             <Link to="/register/freelancer" className="bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium">
//               Find Work
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home
// filepath: /d:/MINDLANCER-007/frontend/src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiCode, FiBriefcase, FiDollarSign, FiShield } from 'react-icons/fi';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/jobs/search?query=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Connect with Top Software Developers
              </h1>
              <p className="text-lg mb-8 text-white/90">
                Mindlancer is the premier marketplace for businesses to find skilled developers and for freelancers to discover exciting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register/business" className="btn-secondary">
                  Hire Developers
                </Link>
                <Link to="/register/freelancer" className="bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-center">
                  Find Work
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="glass p-6 rounded-xl">
                <div className="bg-white/10 p-4 rounded-lg mb-4"></div>
                <div className="bg-white/10 p-2 rounded-lg mb-3 w-3/4"></div>
                <div className="bg-white/10 p-2 rounded-lg mb-3 w-1/2"></div>
                <div className="bg-white/10 p-2 rounded-lg w-2/3"></div>
                <div className="mt-6 flex justify-end">
                  <div className="bg-white/20 px-4 py-2 rounded-lg w-1/3"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Curved shape at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="currentColor" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              className="text-gray-50 dark:text-dark-200"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-12 bg-gray-50 dark:bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-glass max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Your Perfect Match</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search for jobs or freelancers..." 
                    className="input-field pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FiSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
              <button className="btn-primary" onClick={handleSearch}>Search</button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs bg-gray-200 dark:bg-dark-100 px-2 py-1 rounded-full">React</span>
              <span className="text-xs bg-gray-200 dark:bg-dark-100 px-2 py-1 rounded-full">Node.js</span>
              <span className="text-xs bg-gray-200 dark:bg-dark-100 px-2 py-1 rounded-full">Full Stack</span>
              <span className="text-xs bg-gray-200 dark:bg-dark-100 px-2 py-1 rounded-full">UI/UX</span>
              <span className="text-xs bg-gray-200 dark:bg-dark-100 px-2 py-1 rounded-full">DevOps</span>
            </div>
            {searchResults.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Search Results</h3>
                <ul>
                  {searchResults.map((job) => (
                    <li key={job._id} className="mb-4">
                      <div className="card p-4">
                        <h4 className="text-lg font-semibold">{job.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Mindlancer?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our platform connects talented developers with businesses looking for the perfect match, with features designed to make the process seamless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="card p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <FiCode className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skilled Developers</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access a global pool of pre-vetted software developers with verified skills and experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <FiBriefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Find meaningful projects from reputable businesses looking for your specific expertise.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <FiDollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our escrow system ensures that payments are secure and freelancers get paid for completed work.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <FiShield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our dedicated support team helps resolve any issues that may arise during project execution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Getting started with Mindlancer is easy, whether you're looking to hire talent or find work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sign up and create a detailed profile showcasing your skills or business needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Connect & Collaborate</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Post jobs or submit proposals, communicate through our platform, and find the perfect match.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Work & Get Paid</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Complete milestones, submit work, and receive secure payments through our platform.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/register" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from freelancers and businesses who have found success on our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "Mindlancer has transformed my freelance career. I've connected with amazing clients and worked on projects that truly challenge and inspire me."
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CTO, TechStart Inc.</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "We found an exceptional developer through Mindlancer who helped us launch our MVP in record time. The quality of talent on this platform is outstanding."
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Elena Rodriguez</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "The secure payment system and clear project scopes make working through Mindlancer a breeze. I've built a sustainable freelance business here."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers and businesses already using Mindlancer to connect, collaborate, and create amazing software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register/business" className="btn-secondary">
              Hire Developers
            </Link>
            <Link to="/register/freelancer" className="bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium">
              Find Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;