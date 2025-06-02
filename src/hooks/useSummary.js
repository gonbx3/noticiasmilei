import { useQuery } from 'react-query';
import axios from 'axios';
import dayjs from 'dayjs';

// This is a mock API function
const fetchSummaryData = async (date) => {
  // In a real app, this would be an API call
  // For demo purposes, we'll return mock data
  
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  const formattedDate = dayjs(date).format('YYYY-MM-DD');
  
  // Mock data
  return {
    date: formattedDate,
    executiveSummary: "El presidente Javier Milei encabezó hoy una reunión de gabinete económico donde se discutieron avances en el plan de ajuste fiscal. Posteriormente, anunció nuevas medidas para la liberación del mercado cambiario y firmó un decreto para simplificar trámites burocráticos. En el ámbito internacional, mantuvo una llamada con el presidente de Brasil para discutir acuerdos comerciales en el marco del Mercosur.",
    lastUpdated: dayjs().format('DD/MM/YYYY HH:mm'),
    categories: [
      'Economía', 
      'Política Exterior', 
      'Decretos', 
      'Seguridad', 
      'Salud', 
      'Educación'
    ],
    items: [
      {
        id: 1,
        title: 'Reunión de gabinete económico',
        content: 'El presidente Milei encabezó una reunión con su equipo económico para evaluar el avance del plan de ajuste fiscal y discutir próximos pasos en la reducción del gasto público.',
        category: 'Economía',
        timestamp: '09:30',
        source: 'https://www.casarosada.gob.ar',
      },
      {
        id: 2,
        title: 'Anuncio de liberación cambiaria',
        content: 'En conferencia de prensa, el presidente anunció nuevas medidas para la progresiva liberación del mercado de cambios, con el objetivo de eliminar restricciones al comercio exterior.',
        category: 'Economía',
        timestamp: '11:15',
        source: 'https://www.economia.gob.ar',
      },
      {
        id: 3,
        title: 'Llamada con presidente de Brasil',
        content: 'Milei mantuvo una conversación telefónica con el presidente de Brasil para fortalecer lazos comerciales y discutir próximas reuniones del Mercosur.',
        category: 'Política Exterior',
        timestamp: '14:30',
        source: 'https://www.cancilleria.gob.ar',
      },
      {
        id: 4,
        title: 'Decreto de simplificación administrativa',
        content: 'Se firmó el Decreto 392/2025 que elimina más de 100 trámites burocráticos para facilitar la apertura de empresas y reducir la carga regulatoria para los emprendedores.',
        category: 'Decretos',
        timestamp: '16:45',
        source: 'https://www.boletinoficial.gob.ar',
      },
      {
        id: 5,
        title: 'Reunión con gobernadores del norte',
        content: 'El presidente se reunió con gobernadores de provincias del norte para discutir planes de infraestructura y seguridad fronteriza.',
        category: 'Seguridad',
        timestamp: '18:00',
        source: 'https://www.argentina.gob.ar',
      },
    ],
    newsHighlights: [
      {
        id: 1,
        title: 'Argentina avanza en su plan de estabilización económica',
        description: 'Los indicadores económicos muestran señales positivas tras los primeros meses de aplicación del plan económico del gobierno de Milei. El Ministerio de Economía destacó la reducción del déficit fiscal y la desaceleración de la inflación. Las medidas implementadas incluyen una significativa reducción del gasto público, la eliminación de subsidios distorsivos y la modernización del sistema monetario. Analistas internacionales han elogiado el compromiso del gobierno con la disciplina fiscal y las reformas estructurales.',
        imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        source: 'Ministerio de Economía',
        url: 'https://www.economia.gob.ar',
      },
      {
        id: 2,
        title: 'Nuevos acuerdos comerciales con Brasil en el horizonte',
        description: 'Los presidentes de Argentina y Brasil acordaron fortalecer el comercio bilateral y modernizar el Mercosur. Durante la conversación, se discutieron iniciativas para reducir barreras comerciales, agilizar procesos aduaneros y promover la integración energética. El encuentro también abordó la posibilidad de establecer una moneda común para el comercio regional y la coordinación de políticas económicas. Expertos señalan que estos acuerdos podrían impulsar significativamente el intercambio comercial entre ambos países.',
        imageUrl: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        source: 'Ministerio de Relaciones Exteriores',
        url: 'https://www.cancilleria.gob.ar',
      },
      {
        id: 3,
        title: 'Simplificación de trámites para emprendedores',
        description: 'El nuevo decreto elimina más de 100 trámites y procedimientos burocráticos para facilitar la creación de empresas. La medida busca reducir significativamente los tiempos y costos asociados con la apertura de nuevos negocios. Entre las principales modificaciones se encuentra la implementación de un sistema digital unificado, la eliminación de requisitos redundantes y la automatización de procesos de aprobación. Además, se establecen plazos máximos para las respuestas administrativas y se simplifican los procedimientos de registro de marcas y patentes.',
        imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        source: 'Boletín Oficial',
        url: 'https://www.boletinoficial.gob.ar',
      }
    ]
  };
};

export const useSummary = (date) => {
  return useQuery(
    ['summary', dayjs(date).format('YYYY-MM-DD')],
    () => fetchSummaryData(date),
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    }
  );
};