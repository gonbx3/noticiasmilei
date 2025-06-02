import { motion } from 'framer-motion';

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 mb-4"
      >
        <div className="w-full h-full rounded-full border-4 border-t-primary-500 border-r-primary-300 border-b-primary-100 border-l-primary-300"></div>
      </motion.div>
      <p className="text-gray-600 font-medium">Cargando información...</p>
    </div>
  );
};

export default LoadingState;