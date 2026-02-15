
import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';
import { History, Loader2, ArrowUpRight, Award, ExternalLink } from 'lucide-react';

const ExManagement: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: archives, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.exManagement,
    maxResults: 12
  });

  return (
    <section id="ex-management" className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-900 text-white rounded-[2rem] mb-6 shadow-2xl">
            <History className="h-10 w-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            {t.sectionTitles.exManagement}
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg font-light">
            A tribute to the former committees whose leadership built the pillars of Argal Secondary School.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-slate-900 animate-spin" />
            <span className="text-slate-400 font-black tracking-widest uppercase text-[10px]">Restoring_Archives...</span>
          </div>
        ) : archives.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {archives.map((post) => (
              <a 
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50 rounded-[3rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-sm">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Tenure Record</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-4 font-light italic mb-8">
                  {post.summary}
                </p>

                <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{post.published}</div>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
             <p className="text-slate-400 italic mb-6">Historical committee records are available in our central archive.</p>
             <a 
              href={BLOG_URLS.base}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl active:scale-95"
             >
                Access Official Archives <ExternalLink className="w-4 h-4" />
             </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExManagement;
