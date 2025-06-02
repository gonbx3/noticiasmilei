import { useState } from 'react';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';

const HistoricalPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const categories = [
    'Todas las categorías',
    'Economía',
    'Política Exterior',
    'Decretos',
    'Seguridad',
    'Salud',
    'Educación'
  ];
  
  // Mock historical data (would come from an API in a real app)
  const mockHistoricalData = [
    {
      id: 1,
      date: '15/02/2025',
      title: 'Anuncio del plan económico',
      category: 'Economía',
      summary: 'El presidente Milei presentó las bases de su plan económico para los próximos 4 años.'
    },
    {
      id: 2,
      date: '20/02/2025',
      title: 'Reunión con el FMI',
      category: 'Economía',
      summary: 'El presidente y su equipo económico se reunieron con representantes del FMI.'
    },
    {
      id: 3,
      date: '25/02/2025',
      title: 'Viaje a Estados Unidos',
      category: 'Política Exterior',
      summary: 'El presidente realizó su primer viaje oficial a Estados Unidos.'
    },
    {
      id: 4,
      date: '01/03/2025',
      title: 'Reforma del sistema de salud',
      category: 'Salud',
      summary: 'Se anunció una reforma integral del sistema de salud público.'
    },
    {
      id: 5,
      date: '05/03/2025',
      title: 'Decreto de emergencia económica',
      category: 'Decretos',
      summary: 'Se firmó un decreto declarando la emergencia económica por 180 días.'
    },
  ];
  
  // Filter data based on search, date range, and category
  const filteredData = mockHistoricalData.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === '' || 
      selectedCategory === 'Todas las categorías' || 
      item.category === selectedCategory;
      
    // Date filtering would be more complex in a real app
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Archivo Histórico
        </h1>
        <p className="text-xl text-gray-600">
          Explora las actividades pasadas del presidente y su gabinete
        </p>
      </section>
      
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Buscar en el archivo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Buscar por palabra clave
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Ej: economía, comercio, etc."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Categoría
              </label>
              <select
                id="category"
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700 mb-1">
                Rango de fechas
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="dateRange"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="DD/MM/YYYY - DD/MM/YYYY"
                  disabled
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500">
                  Próximamente
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button className="btn-primary">
              Buscar
            </button>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="section-title">Resultados ({filteredData.length})</h2>
        
        {filteredData.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">No se encontraron resultados para tu búsqueda.</p>
            <button 
              className="mt-4 text-primary-500 hover:text-primary-600 font-medium"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredData.map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div className="flex items-center mb-2 md:mb-0">
                    <span className="text-gray-500 mr-3">{item.date}</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                    Ver detalles
                  </button>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.summary}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HistoricalPage;