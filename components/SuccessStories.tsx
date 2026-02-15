import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';
import { Medal, Loader2, User, ExternalLink, ArrowRight } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: stories, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.success,
    maxResults: 8
  });

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual Background Details */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <Medal className="absolute -bottom-20 -right-20 w-96 h-96 text-blue-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-5 bg-blue-600 rounded-full mb-6 shadow-2xl shadow-blue-500/30">
            <Medal className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            {t.sectionTitles.successStories}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Celebrating the achievements of our brilliant alumni who are making an impact globally.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase">Accessing Alumni Records...</span>
          </div>
        ) : stories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="group h-80 [perspective:1000px]">
                <div className="relative h-full w-full rounded-[2.5rem] shadow-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-slate-800 overflow-hidden border border-slate-700 [backface-visibility:hidden]">
                    <div className="h-4/5 w-full relative">
                      {story.thumbnail ? (
                        <img 
                          src={story.thumbnail} 
                          alt={story.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-700">
                          <User className="w-20 h-20" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-transparent"></div>
                    </div>
                    <div className="h-1/5 bg-slate-800 flex items-center justify-center border-t border-slate-700 px-4">
                      <h3 className="text-sm font-black text-white text-center uppercase tracking-widest line-clamp-1">{story.title}</h3>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-blue-900/95 text-white px-6 py-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-blue-500/50 shadow-blue-500/20 shadow-2xl">
                    <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                    <div className="w-8 h-1 bg-blue-400 rounded-full mb-6"></div>
                    <p className="text-sm leading-relaxed text-blue-100 font-light mb-8 line-clamp-4 italic">
                      "{story.summary}"
                    </p>
                    <a 
                      href={story.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg"
                    >
                      Read Bio <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500 italic">
            Alumni success stories will be featured here as they are added to our records.
          </div>
        )}

        <div className="mt-20 text-center">
            <a 
              href={BLOG_URLS.success}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-blue-400 hover:text-white font-black text-xs uppercase tracking-[0.3em] transition-all group"
            >
              Browse Global Alumni Directory <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;