import React from 'react';
import { BLOG_URLS, TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';
import { 
  Heart,
  ArrowUpRight,
  User,
  Loader2,
  Trophy,
  Sparkles,
  Award
} from 'lucide-react';

const Donors: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: donors, loading, error } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_URLS.donorsLabel,
    maxResults: 24
  });

  return (
    <section id="donors" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background Accents - No Frames */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute top-1/2 -right-48 w-[40rem] h-[40rem] bg-indigo-50 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-sky-50 rounded-full blur-[80px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl shadow-blue-200 flex items-center justify-center transform hover:rotate-12 transition-transform duration-500">
              <Heart className="h-10 w-10 text-white fill-white/20" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 text-yellow-400 w-6 h-6 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
            {t.sectionTitles.donors}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Honoring the benevolent hearts that empower our vision. Every contribution is a seed for a brighter future at Argal.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <div className="relative">
              <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-300 animate-pulse" />
              </div>
            </div>
            <span className="text-blue-900/40 font-black tracking-[0.3em] uppercase text-[10px]">Illuminating_Benefactors...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-slate-400 italic">Live feed temporarily unavailable. Please browse the Wall on our blog.</p>
          </div>
        ) : donors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {donors.map((donor, idx) => (
              <a 
                key={donor.id}
                href={donor.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col transition-all duration-700 ${
                  idx % 2 === 0 ? 'lg:translate-y-8' : 'lg:-translate-y-4'
                }`}
              >
                {/* Flowing Card Design - No hard container borders */}
                <div className="bg-white/40 backdrop-blur-sm rounded-[3rem] p-8 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] group-hover:bg-white transition-all duration-500 flex flex-col items-center text-center h-full">
                  
                  <div className="relative mb-8">
                    <div className="w-28 h-28 rounded-[2.5rem] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl border-4 border-white">
                      {donor.thumbnail ? (
                        <img src={donor.thumbnail} alt={donor.title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                          <User className="w-12 h-12" />
                        </div>
                      )}
                    </div>
                    {idx < 3 && (
                      <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white p-2 rounded-2xl shadow-lg border-2 border-white animate-bounce">
                        <Award className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-slate-800 mb-3 leading-tight min-h-[3rem] flex items-center">
                    {donor.title}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className={`w-3 h-3 ${i < 3 ? 'text-blue-400' : 'text-slate-200'}`} />
                    ))}
                  </div>

                  <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-3 italic mb-8 flex-grow">
                    {donor.summary}
                  </p>
                  
                  <div className="mt-auto group-hover:text-blue-600 text-slate-300 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 transition-colors">
                    Explore Legacy <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 italic font-light">The Wall is currently being polished with new entries.</div>
        )}

        <div className="mt-32 flex flex-col items-center gap-6">
          <a 
            href={BLOG_URLS.donorsLabel}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-14 py-5 bg-slate-900 hover:bg-blue-600 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all shadow-2xl hover:shadow-blue-500/40 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              View Full Wall of Honor
              <Trophy className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.4em]">Live Digital Registry since 2012 B.S.</span>
        </div>
      </div>
    </section>
  );
};

export default Donors;