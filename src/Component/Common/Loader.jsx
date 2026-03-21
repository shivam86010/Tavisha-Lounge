// import { useEffect, useState } from 'react';

// const Loader = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 0.8;
//       });
//     }, 12);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
//       {/* Deep gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#14100c] to-[#0a0a0a]"></div>
      
//       {/* Light beams */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]">
//           <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent"></div>
//           <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent"></div>
//           <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent"></div>
//         </div>
//       </div>

//       {/* Main container */}
//       <div className="relative z-10">
//         {/* Glass card */}
//         <div className="relative backdrop-blur-sm bg-white/[0.01] rounded-[2rem] p-12 border border-white/5">
//           {/* Primary ring */}
//           <div className="relative w-56 h-56 md:w-64 md:h-64">
//             {/* Outer ring */}
//             <div className="absolute inset-0 rounded-full border border-white/10"></div>
            
//             {/* Progress ring with gradient */}
//             <svg className="absolute inset-0 w-full h-full transform -rotate-90">
//               <defs>
//                 <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
//                   <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
//                 </linearGradient>
//               </defs>
//               <circle
//                 cx="50%"
//                 cy="50%"
//                 r="48%"
//                 fill="none"
//                 stroke="url(#goldRing)"
//                 strokeWidth="1.2"
//                 strokeDasharray="4 4"
//               />
//               <circle
//                 cx="50%"
//                 cy="50%"
//                 r="48%"
//                 fill="none"
//                 stroke="#D4AF37"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeDasharray={`${2 * Math.PI * 48}%`}
//                 strokeDashoffset={`${2 * Math.PI * 48 * (1 - progress / 100)}%`}
//                 style={{ transition: 'stroke-dashoffset 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
//               />
//             </svg>

//             {/* Center emblem */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative">
//                 {/* Glow ring */}
//                 <div className="absolute inset-[-15px] rounded-full bg-[#D4AF37]/5 blur-md"></div>
                
//                 {/* Main symbol */}
//                 <div className="relative w-20 h-20 md:w-24 md:h-24">
//                   <div className="absolute inset-0 border border-[#D4AF37]/40 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
//                   <div className="absolute inset-[6px] border border-[#D4AF37]/20 rounded-full"></div>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-3xl md:text-4xl font-serif font-light text-[#D4AF37] tracking-wider">
//                       R
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Orbiting particles */}
//             <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
//               {[...Array(3)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute"
//                   style={{
//                     left: '50%',
//                     top: '15%',
//                     transform: `rotate(${i * 120}deg) translateX(95px)`,
//                   }}
//                 >
//                   <div className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_6px_rgba(212,175,55,0.6)]"></div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Progress text */}
//           <div className="mt-10 text-center">
//             <div className="flex justify-center gap-4 mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="w-[2px] h-[2px] rounded-full transition-all duration-500"
//                   style={{
//                     background: i * 20 <= progress ? '#D4AF37' : 'rgba(255,255,255,0.15)',
//                     transform: i * 20 <= progress ? 'scaleY(2)' : 'scaleY(1)',
//                   }}
//                 />
//               ))}
//             </div>
//             <div className="font-mono text-[10px] tracking-[0.3em] text-white/20">
//               LOADING
//             </div>
//           </div>
//         </div>

//         {/* Corner decorations */}
//         <div className="absolute -top-4 -left-4 w-8 h-8">
//           <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#D4AF37]/50 to-transparent"></div>
//           <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
//         </div>
//         <div className="absolute -top-4 -right-4 w-8 h-8">
//           <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#D4AF37]/50 to-transparent"></div>
//           <div className="absolute top-0 right-0 h-px w-full bg-gradient-to-l from-[#D4AF37]/50 to-transparent"></div>
//         </div>
//         <div className="absolute -bottom-4 -left-4 w-8 h-8">
//           <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-[#D4AF37]/50 to-transparent"></div>
//           <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
//         </div>
//         <div className="absolute -bottom-4 -right-4 w-8 h-8">
//           <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[#D4AF37]/50 to-transparent"></div>
//           <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[#D4AF37]/50 to-transparent"></div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.6;
//             transform: scale(1.05);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Loader;

//second loader

// import { useEffect, useState } from 'react';

// const Loader = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 0.7;
//       });
//     }, 10);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed inset-0 bg-[#030303] z-[9999] flex items-center justify-center overflow-hidden">
//       {/* Dramatic spotlight effect */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]"></div>
      
//       {/* Moving light beam */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] animate-[rotate_20s_linear_infinite]">
//           <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent"></div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10">
//         {/* Outer container */}
//         <div className="relative">
//           {/* Reflection effect */}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 via-transparent to-transparent blur-2xl"></div>
          
//           {/* Main ring container */}
//           <div className="relative w-72 h-72 md:w-80 md:h-80">
//             {/* Base ring */}
//             <div className="absolute inset-0 rounded-full border border-white/5"></div>
            
//             {/* Decorative rings */}
//             <div className="absolute inset-4 rounded-full border border-[#D4AF37]/10 animate-[pulse_3s_ease-in-out_infinite]"></div>
//             <div className="absolute inset-8 rounded-full border border-[#D4AF37]/5"></div>
            
//             {/* Progress ring - sophisticated */}
//             <svg className="absolute inset-0 w-full h-full transform -rotate-90">
//               <defs>
//                 <linearGradient id="premiumGold" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
//                   <stop offset="30%" stopColor="#F3D572" stopOpacity="1" />
//                   <stop offset="70%" stopColor="#F3D572" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
//                 </linearGradient>
//                 <filter id="glowPremium">
//                   <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
//                   <feMerge>
//                     <feMergeNode in="coloredBlur"/>
//                     <feMergeNode in="SourceGraphic"/>
//                   </feMerge>
//                 </filter>
//               </defs>
//               <circle
//                 cx="50%"
//                 cy="50%"
//                 r="46%"
//                 fill="none"
//                 stroke="url(#premiumGold)"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeDasharray="6 6"
//               />
//               <circle
//                 cx="50%"
//                 cy="50%"
//                 r="46%"
//                 fill="none"
//                 stroke="#D4AF37"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 filter="url(#glowPremium)"
//                 strokeDasharray={`${2 * Math.PI * 46}%`}
//                 strokeDashoffset={`${2 * Math.PI * 46 * (1 - progress / 100)}%`}
//                 style={{ transition: 'stroke-dashoffset 0.15s cubic-bezier(0.4, 0, 0.2, 1)' }}
//               />
//             </svg>

//             {/* Center piece - luxurious */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative">
//                 {/* Multi-layer glow */}
//                 <div className="absolute inset-[-30px] bg-[#D4AF37]/10 blur-3xl rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
//                 <div className="absolute inset-[-15px] bg-[#D4AF37]/20 blur-xl rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
                
//                 {/* Main emblem */}
//                 <div className="relative w-28 h-28 md:w-32 md:h-32">
//                   {/* Intricate pattern */}
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent"></div>
//                   <div className="absolute inset-[2px] rounded-full border border-[#D4AF37]/30"></div>
//                   <div className="absolute inset-[6px] rounded-full border border-[#D4AF37]/20"></div>
//                   <div className="absolute inset-[10px] rounded-full border border-[#D4AF37]/10"></div>
                  
//                   {/* Center icon */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="text-5xl md:text-6xl font-serif font-light text-[#D4AF37] tracking-wider mb-1">
//                         R
//                       </div>
//                       <div className="w-6 h-px bg-[#D4AF37]/30 mx-auto"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Orbiting diamonds */}
//             <div className="absolute inset-0 animate-[spin_24s_linear_infinite]">
//               {[...Array(6)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute"
//                   style={{
//                     left: '50%',
//                     top: '6%',
//                     transform: `rotate(${i * 60}deg) translateX(110px)`,
//                   }}
//                 >
//                   <div className="relative">
//                     <div className="w-1 h-1 bg-[#D4AF37] rotate-45"></div>
//                     <div className="absolute inset-0 w-1 h-1 bg-[#D4AF37]/50 rotate-45 blur-[1px]"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Inner orbiting dots */}
//             <div className="absolute inset-0 animate-[spin_16s_linear_infinite_reverse]">
//               {[...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute w-0.5 h-0.5 bg-[#D4AF37]/40 rounded-full"
//                   style={{
//                     left: '50%',
//                     top: '12%',
//                     transform: `rotate(${i * 45}deg) translateX(75px)`,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Premium progress indicator */}
//           <div className="mt-16 space-y-4">
//             {/* Elegant progress bar */}
//             <div className="relative w-64 md:w-80 mx-auto">
//               <div className="h-[1px] bg-white/5 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-all duration-300"
//                   style={{ width: `${progress}%` }}
//                 ></div>
//               </div>
              
//               {/* Percentage */}
//               <div className="absolute -top-6 right-0">
//                 <span className="text-[10px] font-mono text-[#D4AF37]/60 tracking-wider">
//                   {Math.floor(progress)}%
//                 </span>
//               </div>
//             </div>
            
//             {/* Minimal status text */}
//             <div className="text-center">
//               <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase font-sans">
//                 Curating excellence
//               </p>
//             </div>
//           </div>

//           {/* Corner ornaments */}
//           <div className="absolute -top-8 -left-8 w-12 h-12">
//             <svg viewBox="0 0 24 24" className="w-full h-full text-[#D4AF37]/20">
//               <path fill="currentColor" d="M4 4L8 8M20 4L16 8M4 20L8 16M20 20L16 16" stroke="currentColor" strokeWidth="1"/>
//             </svg>
//           </div>
//           <div className="absolute -top-8 -right-8 w-12 h-12">
//             <svg viewBox="0 0 24 24" className="w-full h-full text-[#D4AF37]/20">
//               <path fill="currentColor" d="M20 4L16 8M4 4L8 8M20 20L16 16M4 20L8 16" stroke="currentColor" strokeWidth="1"/>
//             </svg>
//           </div>
//           <div className="absolute -bottom-8 -left-8 w-12 h-12">
//             <svg viewBox="0 0 24 24" className="w-full h-full text-[#D4AF37]/20">
//               <path fill="currentColor" d="M4 20L8 16M20 20L16 16M4 4L8 8M20 4L16 8" stroke="currentColor" strokeWidth="1"/>
//             </svg>
//           </div>
//           <div className="absolute -bottom-8 -right-8 w-12 h-12">
//             <svg viewBox="0 0 24 24" className="w-full h-full text-[#D4AF37]/20">
//               <path fill="currentColor" d="M20 20L16 16M4 20L8 16M20 4L16 8M4 4L8 8" stroke="currentColor" strokeWidth="1"/>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Floating particles - elegant */}
//       {[...Array(50)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full pointer-events-none"
//           style={{
//             width: Math.random() * 1.5 + 0.5 + 'px',
//             height: Math.random() * 1.5 + 0.5 + 'px',
//             background: `rgba(212, 175, 55, ${0.1 + Math.random() * 0.2})`,
//             left: Math.random() * 100 + '%',
//             top: Math.random() * 100 + '%',
//             animation: `floatPremium ${10 + Math.random() * 15}s ease-in-out infinite`,
//             animationDelay: Math.random() * 10 + 's',
//             filter: 'blur(0.5px)',
//           }}
//         />
//       ))}

//       <style>{`
//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
        
//         @keyframes floatPremium {
//           0%, 100% {
//             transform: translateY(0) translateX(0);
//             opacity: 0;
//           }
//           10% {
//             opacity: 0.5;
//           }
//           90% {
//             opacity: 0.5;
//           }
//           100% {
//             transform: translateY(-200px) translateX(100px);
//             opacity: 0;
//           }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.6;
//             transform: scale(1.1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Loader;

//third loader 
// import { useEffect, useState } from 'react';

// const Loader = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 0.5;
//       });
//     }, 8);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed inset-0 bg-[#0c0a08] z-[9999] flex items-center justify-center">
//       {/* Luxurious silk texture background */}
//       <div className="absolute inset-0" style={{
//         background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 100%)',
//       }}></div>
      
//       {/* Animated light sweep */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] animate-[sweep_12s_ease-in-out_infinite]">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent rotate-45"></div>
//         </div>
//       </div>

//       {/* Main luxury container */}
//       <div className="relative z-10">
//         {/* Elegant frame with shadow */}
//         <div className="relative p-8">
//           {/* Main ring assembly */}
//           <div className="relative w-96 h-96">
//             {/* Outer decorative ring */}
//             <div className="absolute inset-0 rounded-full border border-[#D4AF37]/10"></div>
//             <div className="absolute inset-[10px] rounded-full border border-[#D4AF37]/5"></div>
            
//             {/* Rotating ring pattern */}
//             <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
//               <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#D4AF37]/30" style={{ transform: 'rotate(45deg)' }}></div>
//             </div>
            
//             {/* Progress ring - Elegant and bold */}
//             <svg className="absolute inset-0 w-full h-full transform -rotate-90">
//               <defs>
//                 <linearGradient id="luxuryGold" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
//                   <stop offset="20%" stopColor="#F5E6B0" stopOpacity="1" />
//                   <stop offset="50%" stopColor="#FFFAE6" stopOpacity="1" />
//                   <stop offset="80%" stopColor="#F5E6B0" stopOpacity="1" />
//                   <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
//                 </linearGradient>
//                 <filter id="luxuryGlow">
//                   <feGaussianBlur stdDeviation="3" result="blur" />
//                   <feMerge>
//                     <feMergeNode in="blur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>
//               {/* Background ring */}
//               <circle
//                 cx="50%"
//                 cy="50%"
//                 r="44%"
//                 fill="none"
//                 stroke="rgba(212,175,55,0.1)"
//                 strokeWidth="3"
//               />
//               {/* Progress ring */}
//               <circle
//                 cx="50%"
//                 cy="50%"
//                 r="44%"
//                 fill="none"
//                 stroke="url(#luxuryGold)"
//                 strokeWidth="3.5"
//                 strokeLinecap="round"
//                 filter="url(#luxuryGlow)"
//                 strokeDasharray={`${2 * Math.PI * 44}%`}
//                 strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress / 100)}%`}
//                 style={{ transition: 'stroke-dashoffset 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)' }}
//               />
//             </svg>

//             {/* Center masterpiece */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative">
//                 {/* Glow aura */}
//                 <div className="absolute inset-[-40px] bg-[#D4AF37]/10 blur-3xl rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>
                
//                 {/* Main emblem container */}
//                 <div className="relative w-40 h-40">
//                   {/* Intricate background pattern */}
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5"></div>
                  
//                   {/* Concentric rings */}
//                   <div className="absolute inset-0 rounded-full border border-[#D4AF37]/40"></div>
//                   <div className="absolute inset-[8px] rounded-full border border-[#D4AF37]/30"></div>
//                   <div className="absolute inset-[16px] rounded-full border border-[#D4AF37]/20"></div>
//                   <div className="absolute inset-[24px] rounded-full border border-[#D4AF37]/10"></div>
                  
//                   {/* Central jewel */}
//                   <div className="absolute inset-[32px] rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F5E6B0] shadow-2xl flex items-center justify-center">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-white/30 rounded-full blur-sm"></div>
//                       <span className="relative text-4xl font-serif text-[#2c2418] font-light">R</span>
//                     </div>
//                   </div>
                  
//                   {/* Diamond accents */}
//                   <div className="absolute -top-2 left-1/2 -translate-x-1/2">
//                     <div className="w-2 h-2 bg-[#D4AF37] rotate-45 shadow-lg"></div>
//                   </div>
//                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
//                     <div className="w-2 h-2 bg-[#D4AF37] rotate-45 shadow-lg"></div>
//                   </div>
//                   <div className="absolute top-1/2 -left-2 -translate-y-1/2">
//                     <div className="w-2 h-2 bg-[#D4AF37] rotate-45 shadow-lg"></div>
//                   </div>
//                   <div className="absolute top-1/2 -right-2 -translate-y-1/2">
//                     <div className="w-2 h-2 bg-[#D4AF37] rotate-45 shadow-lg"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Orbiting gems */}
//             <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
//               {[...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute"
//                   style={{
//                     left: '50%',
//                     top: '5%',
//                     transform: `rotate(${i * 45}deg) translateX(130px)`,
//                   }}
//                 >
//                   <div className="relative">
//                     <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
//                     <div className="absolute inset-0 w-1.5 h-1.5 bg-[#D4AF37]/50 rotate-45 blur-[1px]"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Inner orbiting stars */}
//             <div className="absolute inset-0 animate-[spin_18s_linear_infinite_reverse]">
//               {[...Array(12)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute"
//                   style={{
//                     left: '50%',
//                     top: '10%',
//                     transform: `rotate(${i * 30}deg) translateX(90px)`,
//                   }}
//                 >
//                   <div className="w-1 h-1 bg-[#D4AF37]/60 rounded-full shadow-[0_0_4px_rgba(212,175,55,0.4)]"></div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Luxurious progress section */}
//           <div className="mt-12 space-y-6">
//             {/* Elegant progress bar with pearl effect */}
//             <div className="relative w-80 mx-auto">
//               <div className="h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full">
//                 <div 
//                   className="h-full bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37] to-[#D4AF37]/30 rounded-full transition-all duration-300 relative"
//                   style={{ width: `${progress}%` }}
//                 >
//                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
//                 </div>
//               </div>
              
//               {/* Percentage with elegance */}
//               <div className="absolute -top-8 right-0">
//                 <div className="flex items-baseline gap-0.5">
//                   <span className="text-xl font-light text-[#D4AF37] font-serif">{Math.floor(progress)}</span>
//                   <span className="text-xs text-white/30">%</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Sophisticated status */}
//             <div className="text-center space-y-2">
//               <div className="flex justify-center gap-2">
//                 <div className="w-6 h-px bg-[#D4AF37]/30"></div>
//                 <div className="w-1 h-1 bg-[#D4AF37]/50 rounded-full"></div>
//                 <div className="w-6 h-px bg-[#D4AF37]/30"></div>
//               </div>
//               <p className="text-[11px] tracking-[0.3em] text-white/20 uppercase font-sans font-light">
//                 Preparing Royal Experience
//               </p>
//             </div>
//           </div>

//           {/* Opulent corner ornaments */}
//           <div className="absolute -top-12 -left-12 w-16 h-16">
//             <svg viewBox="0 0 40 40" className="w-full h-full">
//               <path d="M0,0 L10,0 L0,10" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"/>
//               <path d="M0,0 L0,10" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
//               <path d="M0,0 L10,0" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
//               <circle cx="0" cy="0" r="1.5" fill="#D4AF37" fillOpacity="0.3"/>
//             </svg>
//           </div>
//           <div className="absolute -top-12 -right-12 w-16 h-16">
//             <svg viewBox="0 0 40 40" className="w-full h-full">
//               <path d="M40,0 L30,0 L40,10" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"/>
//               <path d="M40,0 L40,10" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
//               <path d="M40,0 L30,0" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
//               <circle cx="40" cy="0" r="1.5" fill="#D4AF37" fillOpacity="0.3"/>
//             </svg>
//           </div>
//           <div className="absolute -bottom-12 -left-12 w-16 h-16">
//             <svg viewBox="0 0 40 40" className="w-full h-full">
//               <path d="M0,40 L10,40 L0,30" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"/>
//               <path d="M0,40 L0,30" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
//               <path d="M0,40 L10,40" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
//               <circle cx="0" cy="40" r="1.5" fill="#D4AF37" fillOpacity="0.3"/>
//             </svg>
//           </div>
//           <div className="absolute -bottom-12 -right-12 w-16 h-16">
//             <svg viewBox="0 0 40 40" className="w-full h-full">
//               <path d="M40,40 L30,40 L40,30" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"/>
//               <path d="M40,40 L40,30" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
//               <path d="M40,40 L30,40" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
//               <circle cx="40" cy="40" r="1.5" fill="#D4AF37" fillOpacity="0.3"/>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Elegant floating particles */}
//       {[...Array(80)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full pointer-events-none"
//           style={{
//             width: Math.random() * 2 + 0.5 + 'px',
//             height: Math.random() * 2 + 0.5 + 'px',
//             background: `radial-gradient(circle, rgba(212,175,55,${0.2 + Math.random() * 0.3}), transparent)`,
//             left: Math.random() * 100 + '%',
//             top: Math.random() * 100 + '%',
//             animation: `drift ${15 + Math.random() * 20}s ease-in-out infinite`,
//             animationDelay: Math.random() * 10 + 's',
//             filter: 'blur(0.5px)',
//           }}
//         />
//       ))}

//       <style>{`
//         @keyframes sweep {
//           0%, 100% {
//             transform: rotate(0deg);
//             opacity: 0;
//           }
//           50% {
//             transform: rotate(180deg);
//             opacity: 1;
//           }
//         }
        
//         @keyframes drift {
//           0% {
//             transform: translateY(0) translateX(0);
//             opacity: 0;
//           }
//           20% {
//             opacity: 0.6;
//           }
//           80% {
//             opacity: 0.6;
//           }
//           100% {
//             transform: translateY(-300px) translateX(150px);
//             opacity: 0;
//           }
//         }
        
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.7;
//             transform: scale(1.2);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Loader;

import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 0.6;
      });
    }, 12);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#050302] z-[9999] flex items-center justify-center">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]"></div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px'
      }}></div>

      <div className="relative">
        {/* Elegant frame */}
        <div className="relative p-10">
          {/* Main loader assembly */}
          <div className="relative w-[340px] h-[340px]">
            {/* Background rings */}
            <div className="absolute inset-0 rounded-full border border-white/5"></div>
            <div className="absolute inset-[15px] rounded-full border border-white/5"></div>
            <div className="absolute inset-[30px] rounded-full border border-white/5"></div>
            
            {/* Primary progress ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <defs>
                <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                  <stop offset="30%" stopColor="#F5E6B0" stopOpacity="1" />
                  <stop offset="70%" stopColor="#F5E6B0" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
                </linearGradient>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="2" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle
                cx="170"
                cy="170"
                r="155"
                fill="none"
                stroke="rgba(212,175,55,0.15)"
                strokeWidth="1.5"
              />
              <circle
                cx="170"
                cy="170"
                r="155"
                fill="none"
                stroke="url(#primaryGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#softGlow)"
                strokeDasharray={`${2 * Math.PI * 155}`}
                strokeDashoffset={`${2 * Math.PI * 155 * (1 - progress / 100)}`}
                style={{ transition: 'stroke-dashoffset 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)' }}
              />
            </svg>

            {/* Elegant centerpiece */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Radiant glow */}
                <div className="absolute inset-[-50px] bg-[#D4AF37]/5 blur-3xl rounded-full"></div>
                
                {/* Main medallion */}
                <div className="relative w-[180px] h-[180px]">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-[#D4AF37]/30"></div>
                  <div className="absolute inset-[8px] rounded-full border border-[#D4AF37]/20"></div>
                  <div className="absolute inset-[16px] rounded-full border border-[#D4AF37]/10"></div>
                  
                  {/* Center piece */}
                  <div className="absolute inset-[24px] rounded-full bg-gradient-to-br from-[#1a1510] to-[#0f0c09] shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-serif text-[#D4AF37] font-light tracking-wider mb-1">R</div>
                      <div className="w-8 h-px bg-[#D4AF37]/40 mx-auto"></div>
                      <div className="text-[8px] tracking-[0.2em] text-[#D4AF37]/40 uppercase mt-2 font-sans">oyal</div>
                    </div>
                  </div>
                  
                  {/* Decorative studs */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '0%',
                        transform: `rotate(${angle}deg) translateX(80px)`,
                      }}
                    >
                      <div className="w-1 h-1 bg-[#D4AF37]/60 rounded-full shadow-[0_0_6px_rgba(212,175,55,0.4)]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-[spin_24s_linear_infinite]">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '4%',
                    transform: `rotate(${i * 60}deg) translateX(150px)`,
                  }}
                >
                  <div className="relative">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]/40 rounded-full"></div>
                    <div className="absolute inset-0 w-1.5 h-1.5 bg-[#D4AF37]/20 rounded-full blur-[1px] animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-0 animate-[spin_16s_linear_infinite_reverse]">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#D4AF37]/30 rounded-full"
                  style={{
                    left: '50%',
                    top: '8%',
                    transform: `rotate(${i * 30}deg) translateX(110px)`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Elegant progress display */}
          <div className="mt-12 text-center space-y-5">
            {/* Minimalist progress bar */}
            <div className="relative w-64 mx-auto">
              <div className="h-[1px] bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37] to-[#D4AF37]/50 transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              {/* Percentage */}
              <div className="absolute -top-7 right-0">
                <span className="text-xs font-light text-[#D4AF37]/70 tracking-wide">
                  {Math.floor(progress)}<span className="text-white/30 text-[10px]">%</span>
                </span>
              </div>
            </div>

            {/* Refined status */}
            <div className="space-y-2">
              <div className="flex justify-center items-center gap-2">
                <div className="w-4 h-px bg-[#D4AF37]/30"></div>
                <div className="w-1 h-1 bg-[#D4AF37]/50 rounded-full"></div>
                <div className="w-4 h-px bg-[#D4AF37]/30"></div>
              </div>
              <p className="text-[9px] tracking-[0.25em] text-white/25 uppercase font-sans">
                Curating elegance
              </p>
            </div>
          </div>

          {/* Corner flourishes */}
          <div className="absolute -top-12 -left-12">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M0 0L8 8M0 8L8 0" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"/>
              <circle cx="4" cy="4" r="1" fill="#D4AF37" fillOpacity="0.2"/>
            </svg>
          </div>
          <div className="absolute -top-12 -right-12">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M32 0L24 8M32 8L24 0" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"/>
              <circle cx="28" cy="4" r="1" fill="#D4AF37" fillOpacity="0.2"/>
            </svg>
          </div>
          <div className="absolute -bottom-12 -left-12">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M0 32L8 24M0 24L8 32" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"/>
              <circle cx="4" cy="28" r="1" fill="#D4AF37" fillOpacity="0.2"/>
            </svg>
          </div>
          <div className="absolute -bottom-12 -right-12">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M32 32L24 24M32 24L24 32" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"/>
              <circle cx="28" cy="28" r="1" fill="#D4AF37" fillOpacity="0.2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Delicate floating particles */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 0.5 + Math.random() * 1.5 + 'px',
            height: 0.5 + Math.random() * 1.5 + 'px',
            background: `rgba(212, 175, 55, ${0.1 + Math.random() * 0.2})`,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `floatUp ${12 + Math.random() * 15}s ease-in-out infinite`,
            animationDelay: Math.random() * 8 + 's',
          }}
        />
      ))}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.4;
          }
          85% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-250px) translateX(80px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;