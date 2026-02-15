
import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { 
  Sun, 
  FlaskConical, 
  Trophy, 
  Users, 
  Heart, 
  Rocket, 
  Lightbulb, 
  GraduationCap, 
  Loader2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';

const BestPractices: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: dynamicPractices, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.bestPractices,
    maxResults: 6
  });

  const getIcon = (index: number) => {
    const icons = [Rocket, Lightbulb, Trophy, FlaskConical, Users, Sun, GraduationCap, Heart];
    const Icon = icons[index % icons.length];
    return <Icon className="w-8 h-8" />;
  };

  const colors = [
    'from-blue-600 to-indigo-600',
    'from-amber-500 to-orange-600',
    'from-emerald-500 to-teal-600',
    'from-purple-600 to-pink-600',
    'from-rose-500 to-red-600',
    'from-cyan-500 to-blue-600'
  ];

  return (
    <section id="best-practices" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-600/20">
             <Rocket className="w-3.5 h-3.5" /> Institutional Innovation
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            {t.sectionTitles.bestPractices}
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Unique pedagogical approaches and community-driven initiatives that define the standard of excellence at Argal Secondary School.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Syncing Excellence Modules...</span>
          </div>
        ) : dynamicPractices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dynamicPractices.map((practice, index) => (
              <div key={practice.id} className="group relative h-80 [perspective:1000px]">
                <div className="relative h-full w-full rounded-[2.5rem] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl hover:shadow-2xl">
                  
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full w-full rounded-[2.5rem] bg-slate-50 border border-slate-100 p-10 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                      <div className={`p-5 rounded-2xl bg-white shadow-lg text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        {getIcon(index)}
                      </div>
                      <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4 tracking-tight">
                        {practice.title}
                      </h3>
                      <div className="mt-auto flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                         <span className="w-6 h-px bg-slate-200"></span>
                         Module {index + 1}
                         <span className="w-6 h-px bg-slate-200"></span>
                      </div>
                  </div>

                  {/* Back Face */}
                  <div className={`absolute inset-0 h-full w-full rounded-[2.5rem] bg-gradient-to-br ${colors[index % colors.length]} text-white p-10 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        {practice.title}
                      </h3>
                      <p className="text-sm leading-relaxed opacity-90 mb-8 font-light italic">
                        "{practice.summary.replace(/<[^>]*>/g, '')}"
                      </p>
                      <a 
                        href={practice.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-slate-900 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 border border-white/20"
                      >
                        Explore Initiative <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
             <Lightbulb className="w-12 h-12 text-slate-200 mx-auto mb-4" />
             <p className="text-slate-400 italic">The academic committee is currently documenting our best practices.</p>
          </div>
        )}

        <div className="mt-20 text-center">
          <a 
            href={BLOG_URLS.bestPractices}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] hover:text-blue-600 transition-all"
          >
            Institutional Excellence Ledger <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
