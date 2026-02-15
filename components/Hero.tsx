import React from 'react';
import { SCHOOL_ADDRESS, TRANSLATIONS, SCHOOL_NAME } from '../constants';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  // Specific Plus Code location provided by user
  const MAP_LOCATION = "7CQG+FPP, Argal 33300";
  const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_LOCATION)}&t=k&z=18&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="home" className="relative min-h-[650px] lg:h-[750px] w-full bg-slate-950 flex items-center overflow-hidden pt-16 lg:pt-0">
      {/* Background with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?nature,mountain" 
          alt="School Landscape" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent hidden lg:block"></div>
        <div className="absolute inset-0 bg-slate-950/60 lg:hidden"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-1 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Column: Text Content (Occupies 3 columns) */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full mb-8 animate-in slide-in-from-top duration-700">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-blue-100 text-[10px] font-bold uppercase tracking-[0.2em]">ESTD. 2012 B.S.</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
              {t.hero.title}
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light drop-shadow-md">
              {t.hero.subtitle}
            </p>

            {/* Address Pill */}
            <div className="flex items-center gap-3 text-blue-200 text-sm md:text-base font-medium mb-12 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm group hover:border-blue-500/50 transition-all cursor-default">
              <div className="relative">
                <MapPin className="h-5 w-5 text-blue-400 animate-bounce" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-blue-400/30 blur-sm rounded-full"></div>
              </div>
              <span>{SCHOOL_ADDRESS}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a 
                href="#news" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-2xl shadow-2xl shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2 group"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#history" 
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-lg font-bold py-4 px-10 rounded-2xl transition-all hover:-translate-y-1"
              >
                Our Legacy
              </a>
            </div>
          </div>

          {/* Right Column: Map Component (Occupies 2 columns, pushed to the edge) */}
          <div className="hidden lg:flex lg:col-span-2 justify-end items-center">
            <div className="relative w-full max-w-sm animate-in slide-in-from-right duration-1000">
              
              {/* Borderless Map Container */}
              <div className="bg-slate-900 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative group overflow-hidden">
                <div className="rounded-[2.5rem] overflow-hidden h-[450px] w-full relative">
                  <iframe 
                    src={MAP_EMBED_URL} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="School Satellite View"
                  ></iframe>
                  
                  {/* Map Overlay Button */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/5 flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex flex-col">
                      <span className="text-white text-[10px] font-black uppercase tracking-widest">Satellite Intel</span>
                      <span className="text-blue-400 text-[8px] font-mono">PLUS: {MAP_LOCATION}</span>
                    </div>
                    <a 
                      href={`https://www.google.com/maps/search/${encodeURIComponent(MAP_LOCATION)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-blue-600/10 blur-[100px] rounded-full -z-10 group-hover:bg-blue-600/20 transition-all duration-1000"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;