
import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { History as HistoryIcon, Landmark, Calendar, Loader2, ArrowRight, Trophy, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';

const History: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: historyPosts, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.history,
    maxResults: 1
  });

  const content = historyPosts.length > 0 ? historyPosts[0] : null;

  // Logic: 
  // Current BS Year approx = AD + 57.
  // Established 2012 BS.
  // To show "70 years" in 2024 AD (2081 BS), we calculate relative to 2011.
  // (2024 + 57) - 2011 = 2081 - 2011 = 70.
  // This ensures it starts at 70 and increments automatically every year.
  const currentBsYear = new Date().getFullYear() + 57;
  const yearsOfExcellence = currentBsYear - 2011;

  if (!loading && !content) return null;

  return (
    <section id="history" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none select-none">
        <Landmark className="w-96 h-96" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <div className="inline-flex items-center justify-center p-4 bg-blue-600 rounded-3xl shadow-xl shadow-blue-600/20 mb-8">
              <HistoryIcon className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-none">
              {t.sectionTitles.history}
            </h2>
            <div className="flex items-center gap-3 text-blue-600 font-bold text-lg mb-8">
              <Calendar className="w-5 h-5" />
              <span>Established 2012 B.S.</span>
            </div>

            {/* Dynamic Stats Section */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-2">
                   <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                     <Trophy className="w-6 h-6" />
                   </div>
                   <div className="text-4xl font-black text-slate-800">{yearsOfExcellence}</div>
                </div>
                <div className="text-slate-500 font-bold text-xs uppercase tracking-widest pl-1">Proud Years of Excellence</div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-2">
                   <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                     <GraduationCap className="w-6 h-6" />
                   </div>
                   <div className="text-4xl font-black text-slate-800">+1000</div>
                </div>
                <div className="text-slate-500 font-bold text-xs uppercase tracking-widest pl-1">Students Passed</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-slate-50/50 p-8 md:p-12 rounded-[3rem] border border-slate-100 backdrop-blur-sm relative min-h-[400px]">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                  <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">Syncing_History...</span>
                </div>
              ) : content ? (
                <>
                  <h3 className="text-2xl font-bold text-slate-800 mb-8 font-serif italic border-b border-slate-200 pb-4">
                    {content.title}
                  </h3>
                  <div className="text-lg text-slate-600 leading-relaxed font-light prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: content.content }} />
                  <div className="mt-12 pt-8 border-t border-slate-200">
                    <a href={content.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-widest group">
                      Full Historical Record <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
