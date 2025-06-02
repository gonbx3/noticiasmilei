import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/src/assets/argentina-flag-icon.svg" 
              alt="Bandera Argentina" 
              className="h-8 w-8 mr-2"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-primary-600">Resumen Presidencial</h1>
              <p className="text-xs text-gray-500 -mt-1">Javier Milei</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/news" 
                className={`font-medium hover:text-primary-500 transition-colors ${
                  location.pathname === '/news' ? 'text-primary-500' : 'text-gray-700'
                }`}
              >
                Noticias Argentina
              </Link>
              <Link 
                to="/" 
                className={`font-medium hover:text-primary-500 transition-colors ${
                  location.pathname === '/' ? 'text-primary-500' : 'text-gray-700'
                }`}
              >
                Hoy
              </Link>
              <Link 
                to="/historical" 
                className={`font-medium hover:text-primary-500 transition-colors ${
                  location.pathname === '/historical' ? 'text-primary-500' : 'text-gray-700'
                }`}
              >
                Histórico
              </Link>
              <Link 
                to="/about" 
                className={`font-medium hover:text-primary-500 transition-colors ${
                  location.pathname === '/about' ? 'text-primary-500' : 'text-gray-700'
                }`}
              >
                Acerca de
              </Link>
            </nav>
            
            <button 
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Buscar"
            >
              <FaSearch className="text-gray-700" />
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleSearch}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Buscar"
            >
              <FaSearch className="text-gray-700" />
            </button>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <FaTimes className="text-gray-700" />
              ) : (
                <FaBars className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/news" 
              className={`font-medium p-2 rounded hover:bg-gray-100 transition-colors ${
                location.pathname === '/news' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              Noticias Argentina
            </Link>
            <Link 
              to="/" 
              className={`font-medium p-2 rounded hover:bg-gray-100 transition-colors ${
                location.pathname === '/' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              Hoy
            </Link>
            <Link 
              to="/historical" 
              className={`font-medium p-2 rounded hover:bg-gray-100 transition-colors ${
                location.pathname === '/historical' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              Histórico
            </Link>
            <Link 
              to="/about" 
              className={`font-medium p-2 rounded hover:bg-gray-100 transition-colors ${
                location.pathname === '/about' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              Acerca de
            </Link>
          </nav>
        </motion.div>
      )}
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div 
          className="absolute top-full left-0 w-full bg-white shadow-lg z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearchSubmit} className="flex">
              <input 
                type="text" 
                placeholder="Buscar temas, fechas, decretos..." 
                className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                type="submit"
                className="bg-primary-500 text-white p-2 rounded-r hover:bg-primary-600 transition-colors"
              >
                <FaSearch />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;