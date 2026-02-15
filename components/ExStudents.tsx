import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { Users, ArrowUpRight, Loader2, Globe, GraduationCap, Calendar, Compass, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';

const ExStudents: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: records, loading, error } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.studentRecords,
    maxResults: 16
  });

  return (
    <section id="ex-students" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Space-like flowing background - No hard frames */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[150px]"></div>
        
        {/* Decorative Constellation Dots */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white/20 rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] mb-8 shadow-2xl relative group hover:scale-110 transition-transform duration-500">
            <GraduationCap className="h-12 w-12 text-blue-400" />
            <Star className="absolute -top-2 -right-2 text-yellow-500 w-6 h-6 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            {t.sectionTitles.exStudents}
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-8 text-blue-400/40">
             <div className="h-px w-20 bg-gradient-to-r from-transparent to-current"></div>
             <Compass className="w-6 h-6 animate-bounce" />
             <div className="h-px w-20 bg-gradient-to-l from-transparent to-current"></div>
          </div>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Our alumni are our global ambassadors. From 2012 B.S. to today, explore the legacy of the thousands who have shaped Argal.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-8">
            <div className="relative">
              <Loader2 className="w-20 h-20 text-blue-500 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="w-8 h-8 text-blue-300 animate-pulse" />
              </div>
            </div>
            <span className="text-white/20 font-black tracking-[0.5em] uppercase text-[10px]">Connecting_Global_Alumni...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem]">
            <p className="text-slate-500 font-light">Registry connection paused. Please visit the Alumni blog for records.</p>
          </div>
        ) : records.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {records.map((record, idx) => (
              <a 
                key={record.id}
                href={record.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative h-[500px] rounded-[3.5rem] bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-700 ${
                  idx % 3 === 0 ? 'lg:translate-y-6' : ''
                }`}
              >
                {/* Immersive Image Overlay */}
                <div className="absolute inset-0 z-0">
                  {record.thumbnail ? (
                    <img src={record.thumbnail} alt={record.title} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-900/50">
                      <Users className="w-24 h-24 text-white/5" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                </div>

                <div className="absolute inset-0 z-10 p-10 flex flex-col">
                  <div className="flex items-center gap-3 text-blue-400 text-[9px] font-black uppercase tracking-[0.4em] mb-6">
                     <Calendar className="w-4 h-4" /> Batch Archive
                  </div>
                  
                  <h3 className="text-3xl font-black text-white leading-none mb-4 group-hover:text-blue-300 transition-colors">
                    {record.title}
                  </h3>
                  
                  <div className="w-12 h-1 bg-blue-600/40 rounded-full mb-8 group-hover:w-24 transition-all duration-700"></div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-5 mb-8 italic">
                    {record.summary}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                     <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Institutional Heritage</span>
                     <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500 transform group-hover:rotate-12">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                     </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-700 font-bold uppercase tracking-[0.5em]">Network Offline</div>
        )}

        <div className="mt-32 flex flex-col items-center gap-8">
          <a 
            href={BLOG_URLS.studentRecords}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 bg-white hover:bg-blue-600 text-slate-950 hover:text-white px-16 py-6 rounded-full font-black text-sm uppercase tracking-[0.3em] transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Global Batch Directory
              <Globe className="w-6 h-6 group-hover:rotate-180 transition-transform duration-1000" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          
          <div className="flex items-center gap-4 text-slate-700 font-black text-[10px] uppercase tracking-[0.6em]">
             Heritage • Connection • Excellence
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
};

export default ExStudents;