import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const NewsHighlight = ({ title, description, imageUrl, source, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ 
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-white font-bold text-lg line-clamp-2">{title}</h3>
          <p className="text-white/80 text-sm mt-1">{source}</p>
        </div>
      </div>
      <div className="p-4 bg-white">
        <div 
          className={`text-gray-600 text-sm transition-all duration-300 ${
            isExpanded ? '' : 'line-clamp-4'
          }`}
        >
          {description}
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            className="text-primary-500 text-sm font-medium hover:text-primary-600"
          >
            {isExpanded ? 'Leer menos' : 'Leer más'}
          </button>
          
          <div 
            className="flex items-center text-primary-500 text-sm font-medium"
            style={{ 
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 0.2s ease' 
            }}
          >
            Ver noticia completa <FaChevronRight className="ml-1" size={12} />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default NewsHighlight;