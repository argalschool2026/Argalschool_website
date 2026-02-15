
import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Loader2, User, Users } from 'lucide-react';
import { useBlogger } from '../hooks/useBlogger';

const Staff: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: staffPosts, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.staff,
    maxResults: 50
  });

  return (
    <section id="staff" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 text-blue-600 rounded-2xl mb-6">
            <Users className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            {t.sectionTitles.staff}
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Meet the dedicated educators and professionals shaping the minds of tomorrow at Argal.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            <span className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">Scanning_Faculty_Directory...</span>
          </div>
        ) : staffPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {staffPosts.map((member) => (
              <a 
                key={member.id} 
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                  {member.thumbnail ? (
                    <img src={member.thumbnail} alt={member.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400"><User className="w-16 h-16" /></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <span className="text-white font-bold text-xs flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl">View Profile <ExternalLink className="w-3.5 h-3.5" /></span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">{member.title}</h3>
                  <p className="text-blue-600/60 font-black uppercase tracking-[0.2em] text-[10px]">{member.summary.split('...')[0].substring(0, 30)}</p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 italic">Faculty directory is currently offline.</div>
        )}
      </div>
    </section>
  );
};

export default Staff;
