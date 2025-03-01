import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDollarSign, FiClock, FiTag } from 'react-icons/fi';

const jobDescriptions = {
  1: {
    title: "Senior React Developer for E-commerce Platform",
    company: "ShopTech Inc.",
    location: "Remote",
    jobType: "Hourly ($40-$60/hr)",
    level: "Senior",
    description: `ShopTech Inc. is seeking an experienced Senior React Developer to contribute to the development of a cutting-edge e-commerce platform. The candidate will be responsible for designing and implementing UI components, managing state with Redux, optimizing performance, and integrating GraphQL APIs. The role involves working closely with designers, backend developers, and product managers to deliver a seamless shopping experience.`,
    requiredSkills: [
      "React.js – Advanced knowledge of React.js for building scalable front-end applications.",
      "Redux – Experience in state management using Redux.",
      "GraphQL – Ability to integrate GraphQL APIs for efficient data fetching.",
      "Responsive Design – Expertise in developing user-friendly and mobile-responsive interfaces."
    ],
    responsibilities: [
      "Develop and optimize UI components for an e-commerce application.",
      "Implement Redux for efficient state management.",
      "Integrate GraphQL APIs for smooth data fetching.",
      "Ensure the application is mobile-friendly and responsive.",
      "Collaborate with backend teams, designers, and stakeholders."
    ]
  },
  2: {
    title: "Full Stack Developer for Healthcare Application",
    company: "HealthPlus",
    location: "Remote",
    jobType: "Fixed Price ($5000-$8000)",
    level: "Mid-Level",
    description: `HealthPlus is looking for a Full Stack Developer to enhance its healthcare application by developing new features and improving existing functionalities. The role involves working on both front-end and back-end components, ensuring scalability, performance, and security in a healthcare environment.`,
    requiredSkills: [
      "Node.js – Proficient in server-side development with Node.js.",
      "React.js – Strong front-end development experience using React.js.",
      "MongoDB – Database management and optimization skills.",
      "Express.js – Ability to develop RESTful APIs using Express."
    ],
    responsibilities: [
      "Develop and maintain web applications for healthcare solutions.",
      "Implement secure and efficient APIs.",
      "Work with databases for data storage and retrieval.",
      "Collaborate with UI/UX designers and backend teams.",
      "Ensure the system complies with healthcare security standards."
    ]
  },
  3: {
    title: "DevOps Engineer for Cloud Infrastructure",
    company: "CloudTech Solutions",
    location: "Remote",
    jobType: "Hourly ($50-$70/hr)",
    level: "Senior",
    description: `CloudTech Solutions is looking for a DevOps Engineer to set up, manage, and optimize cloud infrastructure. The engineer will be responsible for automating deployments, managing cloud resources, and implementing CI/CD pipelines.`,
    requiredSkills: [
      "AWS – Experience in cloud computing and infrastructure management.",
      "Docker – Containerization and orchestration expertise.",
      "Kubernetes – Managing containerized applications at scale.",
      "CI/CD – Implementing and maintaining continuous integration and deployment pipelines."
    ],
    responsibilities: [
      "Design and maintain cloud infrastructure on AWS.",
      "Implement containerization using Docker and Kubernetes.",
      "Automate deployment processes using CI/CD pipelines.",
      "Monitor system performance and troubleshoot issues.",
      "Ensure security and compliance of cloud resources."
    ]
  },
  4: {
    title: "UI/UX Designer for Mobile App",
    company: "AppWorks",
    location: "Remote",
    jobType: "Fixed Price ($3000-$5000)",
    level: "Mid-Level",
    description: `AppWorks is looking for a UI/UX Designer to design intuitive and visually appealing interfaces for a mobile application. The designer will be responsible for creating user flows, wireframes, and high-fidelity prototypes.`,
    requiredSkills: [
      "UI Design – Creating aesthetically pleasing user interfaces.",
      "UX Design – Ensuring a seamless user experience.",
      "Figma – Proficiency in Figma for wireframing and prototyping.",
      "Mobile Design – Experience in designing for mobile platforms (iOS & Android)."
    ],
    responsibilities: [
      "Conduct user research and understand user needs.",
      "Design wireframes, prototypes, and final UI elements.",
      "Collaborate with developers to ensure accurate implementation.",
      "Improve app usability and accessibility.",
      "Create style guides and design systems for consistency."
    ]
  },
  5: {
    title: "Backend Developer for Financial System",
    company: "FinSecure",
    location: "Remote",
    jobType: "Hourly ($45-$65/hr)",
    level: "Senior",
    description: `FinSecure is looking for an experienced Backend Developer to work on a financial system, ensuring security, performance, and reliability. The role involves developing secure APIs, managing databases, and implementing security best practices.`,
    requiredSkills: [
      "Node.js – Strong backend development experience.",
      "PostgreSQL – Experience in relational databases and query optimization.",
      "Security – Knowledge of best security practices in financial systems.",
      "API Development – Ability to create and manage scalable APIs."
    ],
    responsibilities: [
      "Develop and maintain backend architecture.",
      "Implement security measures to protect financial transactions.",
      "Optimize database performance.",
      "Build and document APIs for front-end and third-party integrations.",
      "Ensure system scalability and reliability."
    ]
  }
};

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      // Simulate API call
      setTimeout(() => {
        const numericJobId = Number(jobId);
        if (jobDescriptions[numericJobId]) {
          setJob(jobDescriptions[numericJobId]);
        } else {
          setJob(null);
        }
        setLoading(false);
      }, 1000);
    };

    fetchJob();
  }, [jobId]);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!job) {
    return <div className="text-center py-12">Job not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">{job.description}</p>
        
        <div className="bg-white dark:bg-dark-100 rounded-lg shadow-md overflow-hidden p-6 space-y-6">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FiDollarSign className="mr-1" />
            <span>{job.jobType}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FiClock className="mr-1" />
            <span>{job.level}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FiTag className="mr-1" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FiTag className="mr-1" />
            <span>{job.location}</span>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Required Skills</h2>
            <ul className="list-disc list-inside">
              {job.requiredSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Responsibilities</h2>
            <ul className="list-disc list-inside">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default JobDetails;