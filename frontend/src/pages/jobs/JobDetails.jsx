import React from 'react'; // Ensure proper imports

const JobDetails = () => {
  // ...existing code...
  const handleClick = () => setShowProposalForm(false); // Define the function properly
  // ...existing code...
  return (
    <div onClick={handleClick}>
      <div className="lg:col-span-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white dark:bg-dark-100 rounded-lg shadow-md overflow-hidden sticky top-24"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">About the Client</h2>
            
            <div className="mb-4">
              <Link to={`/companies/${job.company.id}`} className="font-medium hover:text-primary-600 dark:hover:text-primary-400">
                {job.company.name}
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {job.company.location}
              </p>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Founded</span>
                <span>{job.company.foundedYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Company size</span>
                <span>{job.company.employees}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Website</span>
                <a 
                  href={job.company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 dark:hover:text-primary-400"
                >
                  Visit
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-medium mb-2">Job Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Proposals</span>
                  <span>{job.proposals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Deadline</span>
                  <span>{formatDate(job.deadline)}</span>
                </div>
              </div>
            </div>
            
            {isAuthenticated ? (
              user?.role === 'freelancer' ? (
                <div className="mt-6">
                  <button 
                    onClick={() => setShowProposalForm(true)}
                    className="btn-primary w-full"
                  >
                    Submit a Proposal
                  </button>
                </div>
              ) : user?.role === 'business' ? (
                <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                  You're logged in as a business. Switch to a freelancer account to submit proposals.
                </div>
              ) : null
            ) : (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Sign in to submit a proposal for this job
                </p>
                <Link to="/login" className="btn-primary w-full">
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetails;