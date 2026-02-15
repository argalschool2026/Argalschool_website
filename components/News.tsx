import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { Newspaper, Calendar, ArrowRight, Loader2, ExternalLink, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';

const News: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: newsItems, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.news,
    maxResults: 6
  });

  return (
    <section id="news" className="py-20 bg-white relative overflow-hidden h-full border-r border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <Zap className="w-3 h-3 fill-blue-600" /> School Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
              {t.sectionTitles.news}
            </h2>
          </div>
          <a 
            href={BLOG_URLS.news} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-black text-xs uppercase tracking-widest group transition-all"
          >
            Digital Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
              <span className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">Syncing_News_Feed...</span>
            </div>
          ) : newsItems.length > 0 ? (
            newsItems.map((item) => (
              <a 
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row gap-6 p-4 bg-slate-50 hover:bg-white rounded-3xl border border-transparent hover:border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden shrink-0 bg-slate-200">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <Newspaper className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center text-left">
                  <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                    <Calendar className="w-3 h-3" /> {item.published}
                  </div>
                  <h3 className="text-lg font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed font-light">
                    {item.summary}
                  </p>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center py-10 text-slate-400 italic text-sm">
              No recent news broadcasts found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;