import { motion } from 'framer-motion';

const DailySummary = ({ summary, date }) => {
  return (
    <motion.section 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border-l-4 border-primary-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Resumen Ejecutivo</h2>
        
        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed">
            {summary}
          </p>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <span>Actualizado: {date}</span>
          <span className="mx-2">•</span>
          <span className="text-primary-500">Generado con IA</span>
        </div>
      </div>
    </motion.section>
  );
};

export default DailySummary;