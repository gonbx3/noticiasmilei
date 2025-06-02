import { useState } from 'react';
import { motion } from 'framer-motion';
import NewsHighlight from '../components/NewsHighlight';
import AdBanner from '../components/AdBanner';

const NewsPage = () => {
  const [activeSource, setActiveSource] = useState('todos');
  
  // Mock data for news sources
  const sources = [
    { id: 'todos', name: 'Todos' },
    { id: 'clarin', name: 'Clarín' },
    { id: 'lanacion', name: 'La Nación' },
    { id: 'infobae', name: 'Infobae' },
    { id: 'perfil', name: 'Perfil' },
    { id: 'telam', name: 'Télam' },
  ];
  
  // Mock data for news articles
  const newsArticles = [
    {
      id: 1,
      title: 'Avances en la negociación con el FMI: los detalles del acuerdo',
      description: 'El Ministerio de Economía anunció importantes avances en las negociaciones con el Fondo Monetario Internacional. Las conversaciones se centraron en la revisión del programa vigente y la posibilidad de un nuevo acuerdo que permita mayor flexibilidad en las metas fiscales. Los equipos técnicos de ambas partes trabajaron intensamente durante las últimas semanas para alcanzar un entendimiento que beneficie a ambas partes. El ministro destacó que se mantiene el objetivo de déficit cero para 2024.',
      imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      source: 'Clarín',
      url: '#'
    },
    {
      id: 2,
      title: 'Nueva ley de inversiones: el Congreso debate los cambios propuestos',
      description: 'El Congreso de la Nación comenzó el debate sobre la nueva ley de inversiones propuesta por el Poder Ejecutivo. La iniciativa busca modernizar el marco regulatorio para atraer inversiones extranjeras y dinamizar la economía nacional. Entre los puntos más destacados se encuentran beneficios fiscales para sectores estratégicos, simplificación de trámites administrativos y garantías para la repatriación de capitales. La oposición presentó sus observaciones y propuestas de modificaciones.',
      imageUrl: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      source: 'La Nación',
      url: '#'
    },
    // Add more mock news articles here
  ];
  
  const filteredNews = activeSource === 'todos' 
    ? newsArticles 
    : newsArticles.filter(article => article.source.toLowerCase() === activeSource);
  
  return (
    <div>
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Noticias Argentina
        </h1>
        <p className="text-xl text-gray-600">
          Resumen de las principales noticias del país
        </p>
      </motion.section>
      
      <div className="mb-8 flex flex-wrap gap-2">
        {sources.map(source => (
          <button
            key={source.id}
            onClick={() => setActiveSource(source.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeSource === source.id
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {source.name}
          </button>
        ))}
      </div>
      
      <AdBanner className="mb-8" slot="horizontal" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article, index) => (
          <>
            {index > 0 && index % 6 === 0 && (
              <div className="col-span-full my-8">
                <AdBanner slot="horizontal" />
              </div>
            )}
            <NewsHighlight
              key={article.id}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              source={article.source}
              url={article.url}
            />
          </>
        ))}
      </div>
      
      <div className="mt-8">
        <AdBanner slot="horizontal" />
      </div>
    </div>
  );
};

export default NewsPage;