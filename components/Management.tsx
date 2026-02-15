
import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';
import { Loader2, ShieldCheck, User, ExternalLink, Award } from 'lucide-react';

const Management: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: smcPosts, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.management || 'SMC',
    maxResults: 24
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <section id="management" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Structural Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-slate-900 text-white rounded-2xl mb-6 shadow-xl shadow-slate-900/10">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            {t.sectionTitles.management}
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {language === 'en'
              ? "The School Management Committee (SMC) providing strategic governance and institutional integrity."
              : "विद्यालय व्यवस्थापन समिति (विव्यस) जसले रणनीतिक सुशासन र संस्थागत निष्ठा प्रदान गर्दछ।"}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-12 h-12 text-slate-900 animate-spin" />
            <span className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">Accessing SMC Directory...</span>
          </div>
        ) : smcPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {smcPosts.map((member) => (
              <a 
                key={member.id} 
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[3rem] p-8 border border-slate-200/60 hover:border-blue-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="relative w-32 h-32 rounded-[2rem] overflow-hidden mb-6 bg-slate-50 shadow-inner group-hover:rotate-3 transition-transform">
                  {member.thumbnail ? (
                    <img 
                      src={member.thumbnail} 
                      alt={member.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-300">
                       <span className="text-2xl font-black opacity-40">{getInitials(member.title)}</span>
                       <User className="absolute w-20 h-20 opacity-[0.03]" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"></div>
                </div>

                <h3 className="text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {member.title}
                </h3>
                
                <div className="flex items-center gap-1.5 mb-6">
                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                   <p className="text-slate-400 font-black uppercase tracking-widest text-[9px]">
                      {member.summary.split('.')[0].substring(0, 30)}
                   </p>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-slate-300 group-hover:text-blue-600 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest">Member Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 italic bg-white rounded-[3rem] border border-slate-100">
             <div className="mb-4 flex justify-center"><Award className="w-10 h-10 opacity-20" /></div>
             Committee records are currently being archived in the digital directory.
          </div>
        )}
      </div>
    </section>
  );
};

export default Management;
