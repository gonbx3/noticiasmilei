import { useState } from 'react';
import { FaShareAlt, FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const SummaryCard = ({ title, content, category, timestamp, source }) => {
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  const toggleShareMenu = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${title} - ${content} (Fuente: ${source})`);
    alert('Contenido copiado al portapapeles');
    setIsShareMenuOpen(false);
  };

  const getCategoryColor = (category) => {
    const categories = {
      'economía': 'bg-accent-300 text-accent-900',
      'política exterior': 'bg-secondary-400 text-white',
      'seguridad': 'bg-error-500 text-white',
      'salud': 'bg-success-500 text-white',
      'educación': 'bg-primary-500 text-white',
      'decretos': 'bg-warning-400 text-warning-900',
      'default': 'bg-gray-200 text-gray-800'
    };

    return categories[category.toLowerCase()] || categories.default;
  };

  return (
    <motion.div 
      className="card overflow-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(category)}`}>
            {category}
          </span>
          <div className="relative">
            <button 
              onClick={toggleShareMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Compartir"
            >
              <FaShareAlt className="text-gray-500" />
            </button>
            
            <AnimatePresence>
              {isShareMenuOpen && (
                <motion.div 
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-1">
                    <button 
                      onClick={() => {
                        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} - Resumen Presidencial IA`)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
                        setIsShareMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaTwitter className="mr-2 text-blue-400" />
                      Compartir en Twitter
                    </button>
                    <button 
                      onClick={() => {
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
                        setIsShareMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaFacebook className="mr-2 text-blue-600" />
                      Compartir en Facebook
                    </button>
                    <button 
                      onClick={copyToClipboard}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaLink className="mr-2 text-gray-500" />
                      Copiar enlace
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{content}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{timestamp}</span>
          <a 
            href={source} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-500 hover:underline"
          >
            Ver fuente
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SummaryCard;