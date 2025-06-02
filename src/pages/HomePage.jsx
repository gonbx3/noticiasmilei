import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';

import DateSelector from '../components/DateSelector';
import DailySummary from '../components/DailySummary';
import CategoryFilter from '../components/CategoryFilter';
import SummaryCard from '../components/SummaryCard';
import NewsHighlight from '../components/NewsHighlight';
import LoadingState from '../components/LoadingState';
import AdBanner from '../components/AdBanner';
import { useSummary } from '../hooks/useSummary';

const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeCategories, setActiveCategories] = useState([]);
  
  const { data, isLoading, isError } = useSummary(selectedDate);
  
  useEffect(() => {
    // When data is loaded, set all categories as active by default
    if (data && data.categories) {
      setActiveCategories(data.categories);
    }
  }, [data]);
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const handleCategoryChange = (categories) => {
    setActiveCategories(categories);
  };
  
  const filteredItems = data?.items?.filter(item => 
    activeCategories.length === 0 || 
    activeCategories.some(cat => cat.toLowerCase() === item.category.toLowerCase())
  ) || [];
  
  if (isLoading) {
    return <LoadingState />;
  }
  
  if (isError) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-error-500 mb-4">Error al cargar los datos</h2>
        <p className="text-gray-600">
          No pudimos cargar la información. Por favor, intenta nuevamente más tarde.
        </p>
      </div>
    );
  }
  
  return (
    <div>
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Resumen Presidencial
        </h1>
        <p className="text-xl text-gray-600">
          Actividades diarias del presidente Javier Milei y su gabinete
        </p>
      </motion.section>
      
      <DateSelector 
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
      
      {data && (
        <>
          <DailySummary 
            summary={data.executiveSummary}
            date={data.lastUpdated}
          />
          
          <AdBanner className="my-8" slot="horizontal" />
          
          <section className="mb-12">
            <h2 className="section-title">Destacados del día</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.newsHighlights.map(highlight => (
                <NewsHighlight
                  key={highlight.id}
                  title={highlight.title}
                  description={highlight.description}
                  imageUrl={highlight.imageUrl}
                  source={highlight.source}
                  url={highlight.url}
                />
              ))}
            </div>
          </section>
          
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="section-title">Detalle de actividades</h2>
            </div>
            
            <CategoryFilter 
              categories={data.categories}
              activeCategories={activeCategories}
              onCategoryChange={handleCategoryChange}
            />
            
            {filteredItems.length === 0 ? (
              <p className="text-center py-8 text-gray-500">
                No hay actividades para los filtros seleccionados.
              </p>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredItems.map((item, index) => (
                    <>
                      {index === Math.floor(filteredItems.length / 2) && (
                        <div className="col-span-full my-6">
                          <AdBanner slot="horizontal" />
                        </div>
                      )}
                      <SummaryCard
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        category={item.category}
                        timestamp={item.timestamp}
                        source={item.source}
                      />
                    </>
                  ))}
                </div>
                <div className="mt-8">
                  <AdBanner slot="horizontal" />
                </div>
              </>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;