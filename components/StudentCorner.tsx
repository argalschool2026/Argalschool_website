
import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { Palette, Sparkles, Loader2, ArrowRight, ExternalLink, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';

const StudentCorner: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: creations, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.creative,
    maxResults: 6
  });

  return (
    <section id="creation-corner" className="py-20 bg-white relative overflow-hidden h-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3 fill-purple-600" /> Talent Showcase
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
              {t.sectionTitles.creationCorner}
            </h2>
          </div>
          <a 
            href={BLOG_URLS.creative} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-black text-xs uppercase tracking-widest group transition-all"
          >
            Creative Hub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {loading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-10 h-10 text-purple-600 animate-spin" />
              <span className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">Loading_Creations...</span>
            </div>
          ) : creations.length > 0 ? (
            creations.map((item) => (
              <a 
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-64 rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-slate-200">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20">
                      <Palette className="w-12 h-12 text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded">Student Work</span>
                  </div>
                  <h3 className="text-white font-black text-lg leading-tight mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/60 text-[10px] font-medium">
                     <Heart className="w-3 h-3 text-red-500 fill-red-500" /> Inspired by Argal
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-white/20 backdrop-blur-xl rounded-full text-white border border-white/20">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-slate-400 italic text-sm">
              The creative corner is currently being curated.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StudentCorner;
