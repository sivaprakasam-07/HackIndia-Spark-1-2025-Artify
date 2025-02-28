import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="h-12 w-12 rounded-full border-4 border-t-primary-600 border-r-primary-600 border-b-primary-300 border-l-primary-300"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

export default LoadingSpinner