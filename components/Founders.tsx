
import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';
import { ExternalLink, Award, ArrowRight, History, Loader2, User, Landmark } from 'lucide-react';

const Founders: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: founders, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.founders,
    maxResults: 20
  });

  // Helper to get initials from a name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <section id="founders" className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Background Decorative Detail */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-blue-600/10 rounded-[1.5rem] mb-6 border border-blue-600/20 shadow-xl shadow-blue-900/5">
            <History className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            {t.sectionTitles.founders}
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
            {language === 'en' 
              ? "Honoring the visionaries who laid the first brick of Argal Secondary School in 2012 B.S."
              : "२०१२ सालमा अर्गल माध्यमिक विद्यालयको पहिलो ईट्टा राख्ने सपना देख्ने महान व्यक्तिहरूको सम्मानमा।"}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            <span className="text-slate-400 font-mono text-xs tracking-widest uppercase">Fetching Founder Records...</span>
          </div>
        ) : founders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {founders.map((founder) => (
              <div key={founder.id} className="group h-[400px] w-full [perspective:1000px]">
                 <div className="relative h-full w-full rounded-[2.5rem] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl">
                    
                    {/* Front Face */}
                    <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-white flex flex-col items-center justify-center p-6 border-l-[10px] border-blue-900 [backface-visibility:hidden]">
                        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-slate-100 shadow-xl mb-6 transition-transform duration-500 group-hover:scale-95 bg-slate-50">
                          {founder.thumbnail ? (
                            <img 
                              src={founder.thumbnail} 
                              alt={founder.title} 
                              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 text-blue-900/40">
                              <Landmark className="w-10 h-10 mb-2 opacity-20" />
                              <span className="text-2xl font-black tracking-tighter opacity-30">{getInitials(founder.title)}</span>
                              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                                <User className="w-24 h-24" />
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-blue-900/5"></div>
                        </div>
                        <h3 className="text-xl font-black text-slate-800 mb-2 text-center leading-tight line-clamp-2">{founder.title}</h3>
                        <div className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.2em] text-[9px] mt-2">
                          <Award className="w-3 h-3" /> Institutional Pillar
                        </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-blue-950 text-white flex flex-col items-center justify-center p-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl">
                        <div className="w-10 h-10 bg-blue-800 rounded-2xl flex items-center justify-center mb-4">
                           <Award className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-black mb-4 border-b-2 border-blue-500/50 pb-2 w-full line-clamp-1">{founder.title}</h3>
                        <p className="text-xs leading-relaxed italic text-blue-100/80 mb-6 font-light line-clamp-4">
                          "{founder.summary}"
                        </p>
                        <a 
                          href={founder.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-white hover:text-blue-900 text-white px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95 group/link"
                        >
                          Legacy Record <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>

                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <p>Founder archives are being synchronized from the historical ledger.</p>
          </div>
        )}

        {/* Global Archive Link */}
        <div className="flex justify-center">
            <a 
              href={BLOG_URLS.founders}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-5 text-sm font-black text-white transition-all duration-300 rounded-[2rem] shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-1 bg-slate-900 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                 View Historical Founder Archive
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Founders;
