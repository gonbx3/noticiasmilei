import { useState } from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, activeCategories, onCategoryChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCategory = (category) => {
    if (activeCategories.includes(category)) {
      onCategoryChange(activeCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...activeCategories, category]);
    }
  };

  const clearFilters = () => {
    onCategoryChange([]);
  };

  const selectAllFilters = () => {
    onCategoryChange([...categories]);
  };

  const getCategoryColor = (category) => {
    const categoryColors = {
      'economía': 'bg-accent-300 text-accent-900 hover:bg-accent-400',
      'política exterior': 'bg-secondary-400 text-white hover:bg-secondary-500',
      'seguridad': 'bg-error-500 text-white hover:bg-error-600',
      'salud': 'bg-success-500 text-white hover:bg-success-600',
      'educación': 'bg-primary-500 text-white hover:bg-primary-600',
      'decretos': 'bg-warning-400 text-warning-900 hover:bg-warning-500',
      'default': 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    };

    return categoryColors[category.toLowerCase()] || categoryColors.default;
  };

  const getInactiveColor = (category) => {
    return 'bg-gray-100 text-gray-500 hover:bg-gray-200';
  };

  // For small screens, only show a few categories and a "more" button
  const visibleCategories = isExpanded ? categories : categories.slice(0, 3);
  const hasMoreCategories = categories.length > 3;

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {visibleCategories.map(category => (
          <motion.button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              activeCategories.includes(category) 
                ? getCategoryColor(category) 
                : getInactiveColor(category)
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
        
        {hasMoreCategories && (
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Menos' : 'Más filtros'}
          </motion.button>
        )}
      </div>
      
      {activeCategories.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-primary-500 transition-colors"
          >
            Limpiar filtros
          </button>
          {activeCategories.length < categories.length && (
            <button
              onClick={selectAllFilters}
              className="text-sm text-gray-500 hover:text-primary-500 transition-colors ml-4"
            >
              Seleccionar todos
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;