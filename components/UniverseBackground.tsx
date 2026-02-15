import React from 'react';

const UniverseBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-900 pointer-events-none">
      <div className="stars-container absolute inset-0">
        <style dangerouslySetInnerHTML={{__html: `
          .stars-container {
            background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
          }
          .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle var(--duration) ease-in-out infinite;
            opacity: var(--opacity);
          }
          @keyframes twinkle {
            0% { transform: scale(1); opacity: var(--opacity); }
            50% { transform: scale(1.5); opacity: 1; }
            100% { transform: scale(1); opacity: var(--opacity); }
          }
        `}} />
        {[...Array(50)].map((_, i) => {
          const style = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            '--duration': `${Math.random() * 3 + 2}s`,
            '--opacity': Math.random() * 0.7 + 0.3
          } as React.CSSProperties;
          return <div key={i} className="star" style={style} />;
        })}
      </div>
    </div>
  );
};

export default UniverseBackground;