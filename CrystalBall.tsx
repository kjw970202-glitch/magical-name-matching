
import React from 'react';

interface CrystalBallProps {
  isRevealing: boolean;
  partnerName: string | null;
}

const CrystalBall: React.FC<CrystalBallProps> = ({ isRevealing, partnerName }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Divine Light Aura */}
        <div className={`absolute inset-0 rounded-full transition-all duration-1000 ${isRevealing ? 'bg-amber-100/40 blur-3xl scale-125' : 'bg-blue-50/20 blur-xl scale-90'}`}></div>
        
        {/* Main Radiant Sphere */}
        <div className={`relative w-48 h-48 rounded-full flex items-center justify-center overflow-hidden transition-all duration-1000 bg-white shadow-[0_0_50px_rgba(255,255,255,0.8)] border-4 border-white ${isRevealing ? 'scale-110' : 'scale-100'}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-amber-50"></div>
          
          {/* Animated Particles/Glitter */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute bg-amber-300 rounded-full animate-pulse"
                style={{
                  width: '4px', height: '4px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: i * 0.5 + 's'
                }}
              ></div>
            ))}
          </div>

          {/* Name Display */}
          <div className={`z-10 text-center transition-all duration-1000 ${isRevealing ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <p className="text-slate-400 text-[10px] tracking-[0.4em] uppercase font-bold mb-1">하나님의 선물</p>
            <h3 className="text-4xl font-bold text-slate-800 tracking-tighter">
              {partnerName}
            </h3>
            <div className="w-8 h-0.5 bg-amber-400 mx-auto mt-2 rounded-full"></div>
          </div>
        </div>
        
        {/* Wings or Halos - Optional Aesthetic */}
        <div className="absolute -z-10 opacity-10">
          <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CrystalBall;
