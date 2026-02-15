import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { 
  Database,
  ArrowUpRight,
  Loader2,
  TrendingUp,
  Leaf,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';

const AkshayaKosh: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: funds, loading, error } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.fund,
    maxResults: 12
  });

  return (
    <section id="akshaya-kosh" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Organic Shapes - No frames */}
      <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-emerald-50 rounded-full blur-[150px] opacity-40 translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-teal-50 rounded-full blur-[120px] opacity-30 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-2xl text-[10px] font-black uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" /> Transparency & Legacy
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
              {t.sectionTitles.akshayaKosh}
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
              Our endowment funds are the bedrock of our academic sustainability, ensuring scholarships and institutional growth for generations to come.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
             <div className="p-8 bg-white rounded-[2.5rem] shadow-xl shadow-emerald-900/5 flex items-center gap-5 border border-emerald-50">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                   <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                   <div className="text-3xl font-black text-slate-800">100%</div>
                   <div className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em]">Verified Integrity</div>
                </div>
             </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
            <span className="text-emerald-900/30 font-black tracking-widest uppercase text-[10px]">Synchronizing_Endowments...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-[3rem] border border-emerald-50">
            <p className="text-slate-400">Archival link temporarily offline. Please view funds on our blog.</p>
          </div>
        ) : funds.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {funds.map((fund, idx) => (
              <a 
                key={fund.id}
                href={fund.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block break-inside-avoid group relative"
              >
                <div className="bg-white/70 backdrop-blur-md rounded-[3rem] p-10 border border-white hover:border-emerald-200 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <Zap className="w-5 h-5 text-emerald-200 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  
                  <h4 className="text-xl font-black text-slate-900 leading-tight mb-4 tracking-tight group-hover:text-emerald-800 transition-colors">
                    {fund.title}
                  </h4>
                  
                  <p className="text-slate-500 text-sm leading-relaxed font-light mb-8 line-clamp-4 italic">
                    {fund.summary}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-emerald-50">
                     <div className="text-[9px] font-black text-emerald-600/50 uppercase tracking-[0.3em]">Endowment Pillar</div>
                     <ArrowUpRight className="w-5 h-5 text-emerald-600 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 italic font-light">Endowment archives are being updated for the current session.</div>
        )}

        <div className="mt-20 text-center">
          <a 
            href={BLOG_URLS.fund}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-14 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all shadow-2xl hover:shadow-emerald-600/30 active:scale-95"
          >
            Access Full Endowment Ledger
            <Database className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AkshayaKosh;