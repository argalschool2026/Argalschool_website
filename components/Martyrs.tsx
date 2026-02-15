
import React, { useState, useMemo } from 'react';
import { TRANSLATIONS, BLOG_URLS, BLOG_LABELS } from '../constants';
import { Flame, ExternalLink, ArrowRight, Quote, Flower, Flower2, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';
import { Martyr } from '../types';

const Martyrs: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const [offeredIds, setOfferedIds] = useState<Set<string>>(new Set());

  const { posts: blogMartyrs, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.martyrs,
    maxResults: 20
  });

  const allMartyrs = useMemo(() => {
    return blogMartyrs.map(post => ({
      id: post.id,
      name: post.title,
      designation: 'Respected Educator',
      dateOfMartyrdom: post.published,
      description: post.summary,
      image: post.thumbnail || 'https://picsum.photos/300/400?grayscale',
      link: post.link
    })) as Martyr[];
  }, [blogMartyrs]);

  const handleOfferFlowers = (id: string, e: React.MouseEvent) => {
    setOfferedIds(prev => new Set(prev).add(id));
    setTimeout(() => {
      setOfferedIds(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 3000);
  };

  if (!loading && allMartyrs.length === 0) return null;

  return (
    <section id="martyrs" className="py-24 bg-[#fffaf5] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex flex-wrap justify-around items-center p-12">
        {[...Array(12)].map((_, i) => (
          <Flower key={i} className={`w-64 h-64 ${i % 2 === 0 ? 'rotate-12' : '-rotate-12'}`} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-16">
          <div className="inline-flex items-center justify-center p-5 bg-orange-100 rounded-full mb-6 shadow-xl shadow-orange-200 border-2 border-orange-200">
            <Flame className="h-10 w-10 text-orange-600 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
            {t.sectionTitles.martyrs}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6 text-orange-600/60">
             <div className="h-px w-12 bg-orange-200"></div>
             <Flower2 className="w-5 h-5" />
             <div className="h-px w-12 bg-orange-200"></div>
          </div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto italic font-serif text-lg leading-relaxed">
            {language === 'en' 
              ? '"We pay our deepest tributes with garlands of memory to our respected teachers who sacrificed their lives while serving this institution."'
              : '"हाम्रो विद्यालयमा सेवारत रहँदा आफ्नो जीवन बलिदान गर्नुहुने आदरणीय शिक्षकहरूप्रति श्रद्धाञ्जलीका पुष्पगुच्छा सहित भावपूर्ण श्रद्धाञ्जली अर्पण गर्दछौं।"'}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
            <p className="text-orange-900/40 font-black uppercase tracking-widest text-xs">Accessing Sacred Archives...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto mb-20">
            {allMartyrs.map((martyr) => (
              <div key={martyr.id} className="group h-[500px] md:h-80 w-full [perspective:1000px]">
                  <div className="relative h-full w-full rounded-3xl shadow-2xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0 h-full w-full rounded-3xl bg-white overflow-hidden border-[12px] border-orange-50 shadow-inner flex flex-col md:flex-row [backface-visibility:hidden]">
                          <div className="w-full md:w-2/5 h-1/2 md:h-full relative overflow-hidden bg-slate-100 border-r border-orange-100">
                              <img src={martyr.image} alt={martyr.name} className="w-full h-full object-cover filter grayscale sepia-[0.2] transition-transform duration-1000 group-hover:scale-105" />
                              {offeredIds.has(martyr.id) && (
                                <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
                                    {[...Array(12)].map((_, i) => (
                                      <div key={i} className="absolute animate-[petal-fall_2s_ease-out_forwards]" style={{ left: `${Math.random() * 100}%`, top: `-10%`, animationDelay: `${Math.random() * 1}s` }} >
                                        <Flower2 className="text-orange-400 w-6 h-6 rotate-45" />
                                      </div>
                                    ))}
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent"></div>
                          </div>
                          <div className="w-full md:w-3/5 p-8 flex flex-col justify-center text-left relative bg-white">
                              <h3 className="text-2xl font-black text-slate-800 leading-tight mb-2 tracking-tight">{martyr.name}</h3>
                              <p className="text-red-600 font-black uppercase tracking-[0.2em] text-[10px]">{martyr.designation}</p>
                              <div className="mt-auto flex items-center gap-3 py-3 border-t border-orange-50">
                                <div className="p-1.5 bg-orange-50 rounded-lg"><Flower2 className="w-4 h-4 text-orange-500" /></div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Recorded Date</span>
                                    <span className="text-sm font-black text-slate-700">{martyr.dateOfMartyrdom}</span>
                                </div>
                              </div>
                          </div>
                      </div>
                      <div className="absolute inset-0 h-full w-full rounded-3xl bg-slate-950 text-white p-10 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border-b-[12px] border-orange-600 group/back hover:bg-slate-900 transition-all duration-500">
                          <Quote className="w-10 h-10 text-orange-500/20 mb-6" />
                          <h3 className="text-2xl font-bold mb-4 tracking-tight">{martyr.name}</h3>
                          <p className="text-orange-100 italic text-sm leading-relaxed mb-10 line-clamp-4 px-6 font-light max-w-md">"{martyr.description}"</p>
                          <div className="flex flex-col gap-4 w-full items-center">
                            <button onClick={(e) => handleOfferFlowers(martyr.id, e)} className="group relative inline-flex items-center gap-3 bg-white text-orange-950 px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-2xl active:scale-95 hover:bg-orange-50" >
                              <Flower2 className="w-4 h-4 animate-spin-slow" /> Offer Tribute Flowers
                            </button>
                            <a href={martyr.link || BLOG_URLS.sahid} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-colors" >
                              Read Biography <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                      </div>
                  </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `@keyframes petal-fall { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(300px) rotate(360deg); opacity: 0; } } .animate-spin-slow { animation: spin 6s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }` }} />
    </section>
  );
};

export default Martyrs;
