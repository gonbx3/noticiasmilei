import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

dayjs.locale('es');

const DateSelector = ({ selectedDate, onDateChange }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const today = dayjs();
  
  const formattedDate = dayjs(selectedDate).format('DD [de] MMMM [de] YYYY');
  const isToday = dayjs(selectedDate).isSame(today, 'day');
  
  const goToPreviousDay = () => {
    onDateChange(dayjs(selectedDate).subtract(1, 'day').toDate());
  };
  
  const goToNextDay = () => {
    if (!dayjs(selectedDate).isAfter(today, 'day')) {
      onDateChange(dayjs(selectedDate).add(1, 'day').toDate());
    }
  };
  
  const goToToday = () => {
    onDateChange(today.toDate());
  };
  
  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };
  
  return (
    <div className="relative mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center mb-4 sm:mb-0">
          <button 
            onClick={goToPreviousDay}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Día anterior"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          
          <button 
            onClick={toggleCalendar}
            className="flex items-center px-4 py-2 mx-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium text-gray-800 capitalize">{formattedDate}</span>
            <FaCalendarAlt className="ml-2 text-primary-500" />
          </button>
          
          <button 
            onClick={goToNextDay}
            className={`p-2 rounded-full transition-colors ${
              dayjs(selectedDate).isSame(today, 'day')
                ? 'text-gray-400 cursor-not-allowed'
                : 'hover:bg-gray-100 text-gray-600'
            }`}
            disabled={dayjs(selectedDate).isSame(today, 'day')}
            aria-label="Día siguiente"
          >
            <FaChevronRight className={dayjs(selectedDate).isSame(today, 'day') ? 'text-gray-300' : 'text-gray-600'} />
          </button>
        </div>
        
        {!isToday && (
          <button 
            onClick={goToToday}
            className="px-4 py-2 text-sm bg-primary-50 text-primary-500 rounded-md hover:bg-primary-100 transition-colors"
          >
            Ir a hoy
          </button>
        )}
      </div>
      
      {isCalendarOpen && (
        <motion.div 
          className="absolute z-10 mt-2 w-full sm:w-auto sm:min-w-[320px] bg-white rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* This would be replaced with a proper calendar component */}
          <div className="p-4">
            <div className="text-center mb-4">
              <h3 className="font-medium">Seleccionar fecha</h3>
              <p className="text-sm text-gray-500">
                Solo disponible hasta {today.format('DD [de] MMMM [de] YYYY')}
              </p>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, i) => (
                <div key={i} className="text-center text-xs font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            <div className="p-4 text-center">
              <p className="text-gray-500 text-sm">
                Componente de calendario simplificado para la demo
              </p>
              <button
                onClick={goToToday}
                className="mt-2 px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
              >
                Seleccionar hoy
              </button>
              <button
                onClick={toggleCalendar}
                className="mt-2 ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DateSelector;