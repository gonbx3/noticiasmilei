import { FaServer, FaRobot, FaNewspaper, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div>
      <section className="mb-12">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Acerca del Proyecto
        </motion.h1>
        
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-700 mb-4 leading-relaxed">
            El <strong>Resumen Presidencial IA</strong> es una herramienta que utiliza inteligencia artificial para analizar y resumir las actividades diarias del presidente de Argentina, Javier Milei, y su gabinete.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nuestro objetivo es proporcionar a los ciudadanos información clara, concisa y objetiva sobre las acciones del gobierno nacional, facilitando la transparencia y el acceso a la información pública.
          </p>
          <p className="text-gray-700 leading-relaxed">
            La plataforma recopila información de fuentes oficiales, como el Boletín Oficial, comunicados de la Casa Rosada, ministerios y secretarías, así como de medios de comunicación verificados, para ofrecer un panorama completo de la actividad gubernamental.
          </p>
        </motion.div>
      </section>
      
      <section className="mb-12">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Cómo funciona
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <FaServer className="text-primary-500 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Recopilación de datos</h3>
            </div>
            <p className="text-gray-600">
              Nuestro sistema recopila automáticamente información de fuentes oficiales y medios verificados. Monitorizamos el Boletín Oficial, comunicados de prensa, redes sociales oficiales y principales medios de comunicación del país.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-secondary-100 p-3 rounded-full mr-4">
                <FaRobot className="text-secondary-500 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Procesamiento con IA</h3>
            </div>
            <p className="text-gray-600">
              Utilizamos modelos avanzados de inteligencia artificial para analizar y procesar la información recopilada. Nuestra IA identifica eventos relevantes, elimina redundancias y organiza la información por categorías.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-accent-100 p-3 rounded-full mr-4">
                <FaNewspaper className="text-accent-500 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Resumen diario</h3>
            </div>
            <p className="text-gray-600">
              La IA genera un resumen ejecutivo diario que destaca las actividades más importantes del presidente y su gabinete. Cada evento se clasifica por categoría y se proporciona acceso a las fuentes originales para quienes deseen profundizar.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-success-100 p-3 rounded-full mr-4">
                <FaShieldAlt className="text-success-500 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Verificación y actualización</h3>
            </div>
            <p className="text-gray-600">
              Para garantizar la precisión, nuestro equipo supervisa el proceso y verifica la información generada. Los resúmenes se actualizan a lo largo del día a medida que se publican nuevas informaciones relevantes.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="mb-12">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Nuestro compromiso
        </motion.h2>
        
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nos comprometemos a proporcionar información objetiva y verificada, basada exclusivamente en hechos y declaraciones oficiales. No realizamos interpretaciones ni incluimos opiniones personales en nuestros resúmenes.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Este proyecto es independiente y no tiene afiliación con ningún partido político, organización gubernamental o medio de comunicación. Nuestro único objetivo es facilitar el acceso a la información sobre la actividad gubernamental.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Valoramos la transparencia, por lo que siempre proporcionamos enlaces a las fuentes originales de información y aclaramos cuando el contenido ha sido generado mediante inteligencia artificial.
          </p>
        </motion.div>
      </section>
      
      <section>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Contacto
        </motion.h2>
        
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="text-gray-700 mb-6 leading-relaxed">
            Si tienes sugerencias, comentarios o has detectado alguna imprecisión en nuestros resúmenes, no dudes en contactarnos. Tu feedback nos ayuda a mejorar este servicio.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button className="btn-primary">
              Enviar mensaje
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;