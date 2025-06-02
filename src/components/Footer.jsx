import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/src/assets/argentina-flag-icon.svg" 
                alt="Bandera Argentina" 
                className="h-8 w-8 mr-2"
              />
              <h2 className="text-xl font-bold text-primary-600">Resumen Presidencial</h2>
            </Link>
            <p className="text-gray-600 max-w-md">
              Resúmenes diarios generados con IA sobre las actividades del presidente Javier Milei y su gabinete, basados en fuentes oficiales y medios de comunicación.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Enlaces</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-primary-500 transition-colors">Resumen de hoy</Link>
              <Link to="/news" className="text-gray-600 hover:text-primary-500 transition-colors">Noticias Argentina</Link>
              <Link to="/historical" className="text-gray-600 hover:text-primary-500 transition-colors">Archivo histórico</Link>
              <Link to="/about" className="text-gray-600 hover:text-primary-500 transition-colors">Acerca del proyecto</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Fuentes</h3>
            <nav className="flex flex-col space-y-2">
              <a 
                href="https://www.casarosada.gob.ar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                Casa Rosada
              </a>
              <a 
                href="https://www.boletinoficial.gob.ar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                Boletín Oficial
              </a>
              <a 
                href="https://www.argentina.gob.ar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                Argentina.gob.ar
              </a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Resumen Presidencial IA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;