import { useEffect, useState } from 'react';

const Loader = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 z-[9999]">
      <div className="text-center">
        {/* Plate Container */}
        <div className="relative w-[120px] h-[120px] mx-auto mb-8">
          {/* Plate */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] relative animate-[plateSpin_3s_ease-in-out_infinite]">
            {/* Fork */}
            <div className="absolute w-[4px] h-10 bg-gray-400 bottom-[-30px] left-[30px] rounded-sm -rotate-[15deg] before:content-[''] before:absolute before:w-3 before:h-[4px] before:bg-gray-400 before:top-[-8px] before:left-[-4px] before:rounded-sm"></div>
            {/* Knife */}
            <div className="absolute w-[4px] h-10 bg-gray-400 bottom-[-30px] right-[30px] rounded-sm rotate-[15deg] before:content-[''] before:absolute before:w-2 before:h-[4px] before:bg-gray-400 before:top-[-8px] before:left-[-2px] before:rounded-sm"></div>
          </div>
          
          {/* Steam */}
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2">
            <div className="absolute w-[2px] h-5 bg-white/60 left-[-10px] animate-[steamRise_1.5s_ease-in-out_infinite]"></div>
            <div className="absolute w-[2px] h-5 bg-white/60 left-0 animate-[steamRise_1.5s_ease-in-out_infinite] animation-delay-300"></div>
            <div className="absolute w-[2px] h-5 bg-white/60 left-[10px] animate-[steamRise_1.5s_ease-in-out_infinite] animation-delay-600"></div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="text-center">
          <h2 className="text-white text-2xl md:text-3xl font-medium mb-2">
            Preparing your dining experience{dots}
          </h2>
          <p className="text-white/80 text-sm md:text-base">
            Please wait while we set the table
          </p>
        </div>
      </div>

      {/* Custom Keyframes for Tailwind */}
      <style>{`
        @keyframes plateSpin {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
        }
        
        @keyframes steamRise {
          0% {
            opacity: 0;
            transform: translateY(0) scaleY(0);
          }
          50% {
            opacity: 0.6;
            transform: translateY(-20px) scaleY(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) scaleY(0);
          }
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default Loader;