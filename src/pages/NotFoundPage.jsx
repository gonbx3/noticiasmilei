import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-primary-300">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-6">Página no encontrada</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
        </p>
        <Link 
          to="/"
          className="btn-primary inline-flex items-center"
        >
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;