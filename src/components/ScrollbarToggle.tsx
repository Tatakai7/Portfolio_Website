import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function ScrollbarToggle() {
  const [isScrollbarVisible, setIsScrollbarVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleScrollbar = () => {
    const newVisibility = !isScrollbarVisible;
    setIsScrollbarVisible(newVisibility);
    
    if (newVisibility) {
      document.documentElement.style.setProperty('--scrollbar-width', '8px');
      document.documentElement.style.setProperty('--scrollbar-track-bg', '#f1f5f9');
      document.documentElement.style.setProperty('--scrollbar-thumb-bg', 'linear-gradient(to bottom, #3b82f6, #8b5cf6)');
      document.documentElement.style.setProperty('--scrollbar-thumb-hover-bg', 'linear-gradient(to bottom, #2563eb, #7c3aed)');
      document.documentElement.classList.remove('hide-scrollbar');
    } else {
      document.documentElement.style.setProperty('--scrollbar-width', '0px');
      document.documentElement.style.setProperty('--scrollbar-track-bg', 'transparent');
      document.documentElement.style.setProperty('--scrollbar-thumb-bg', 'transparent');
      document.documentElement.style.setProperty('--scrollbar-thumb-hover-bg', 'transparent');
      document.documentElement.classList.add('hide-scrollbar');
    }
  };

  return (
    <button
      onClick={toggleScrollbar}
      className={`fixed right-6 bottom-6 z-50 p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-110 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      title={isScrollbarVisible ? 'Hide Scrollbar' : 'Show Scrollbar'}
    >
      <div className="relative">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        
        {/* Icon container */}
        <div className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
          {isScrollbarVisible ? (
            <Eye size={24} className="transition-all duration-300" />
          ) : (
            <EyeOff size={24} className="transition-all duration-300" />
          )}
        </div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-150"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {isScrollbarVisible ? 'Hide Scrollbar' : 'Show Scrollbar'}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-700"></div>
      </div>
    </button>
  );
}