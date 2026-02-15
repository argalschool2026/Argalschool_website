
import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';
import { 
  ArrowRight, 
  MessageSquareQuote, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Loader2, 
  User,
  Star,
  Image as ImageIcon,
  Landmark,
  BadgeCheck,
  ClipboardList,
  History,
  ExternalLink
} from 'lucide-react';

const TeamHome: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  // Fetch exactly 4 posts with label 'Massage' as requested
  const { posts: leadershipPosts, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.leadership,
    maxResults: 4 
  });

  const getCardIcon = (index: number) => {
    switch (index) {
      case 0: return GraduationCap; // Principal
      case 1: return ShieldCheck; // Chairman
      case 2: return Users; // PTA
      default: return Landmark; // Others
    }
  };

  const getCardColor = (index: number) => {
    switch (index) {
      case 0: return 'blue';
      case 1: return 'indigo';
      case 2: return 'slate';
      default: return 'emerald';
    }
  };

  const directoryLinks = [
    { 
      name: language === 'en' ? "Full Staff Board" : "पूर्ण शिक्षक विवरण", 
      link: BLOG_URLS.staffDirectory, 
      icon: GraduationCap, 
      color: "text-blue-600", 
      bg: "bg-blue-50" 
    },
    { 
      name: language === 'en' ? "SMC Members" : "विव्यस सदस्यहरू", 
      link: BLOG_URLS.smcDirectory, 
      icon: ShieldCheck, 
      color: "text-indigo-600", 
      bg: "bg-indigo-50" 
    },
    { 
      name: language === 'en' ? "PTA Members" : "पीटीए सदस्यहरू", 
      link: BLOG_URLS.ptaDirectory, 
      icon: Users, 
      color: "text-emerald-600", 
      bg: "bg-emerald-50" 
    },
  ];

  const legacyLinks = [
    { name: language === 'en' ? "Former Principals Archive" : "पूर्व प्रधानाध्यापकहरूको अभिलेख", link: BLOG_URLS.exPrincipal },
    { name: language === 'en' ? "Ex-SMC Chairmen Record" : "पूर्व विव्यस अध्यक्षहरूको अभिलेख", link: BLOG_URLS.exChairman },
    { name: language === 'en' ? "Ex-PTA Chairmen List" : "पूर्व पीटीए अध्यक्षहरूको सूची", link: BLOG_URLS.exPta },
  ];

  return (
    <section id="team-preview" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-50/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-blue-600/10 text-blue-700 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-600/20 shadow-sm">
            <BadgeCheck className="w-4 h-4" /> Governance & Direction
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            {t.sectionTitles.teamPreview}
          </h2>
          <div className="w-24 h-2 bg-blue-600 rounded-full mx-auto mb-8"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            The visionary minds guiding Argal Secondary School towards institutional excellence and holistic student development.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <div className="relative">
              <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Star className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
            </div>
            <span className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px]">Syncing_Leadership_Hub...</span>
          </div>
        ) : leadershipPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {leadershipPosts.map((leader, index) => {
              const Icon = getCardIcon(index);
              const color = getCardColor(index);
              
              return (
                <div key={leader.id} className="group relative">
                  {/* Floating Glow Effect */}
                  <div className={`absolute inset-0 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-${color}-600`}></div>
                  
                  <div className="relative bg-white/70 backdrop-blur-md border border-white rounded-[3rem] p-7 h-full flex flex-col hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-500 overflow-hidden">
                    
                    {/* Portrait Frame */}
                    <div className="relative mb-8 w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 shadow-inner group-hover:-rotate-1 transition-transform duration-700">
                      {leader.thumbnail ? (
                        <img 
                          src={leader.thumbnail} 
                          alt={leader.title} 
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 filter saturate-[0.85] group-hover:saturate-100"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-200">
                           <User className="w-24 h-24" />
                        </div>
                      )}
                      
                      {/* Institutional Badge */}
                      <div className={`absolute bottom-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-2xl z-20 transition-transform duration-500 group-hover:scale-110 ${
                        color === 'blue' ? 'bg-blue-600 shadow-blue-500/40' : 
                        color === 'indigo' ? 'bg-indigo-600 shadow-indigo-500/40' : 
                        color === 'slate' ? 'bg-slate-900 shadow-slate-900/40' : 'bg-emerald-600 shadow-emerald-500/40'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Professional Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                         <div className="text-white">
                            <span className="text-[8px] font-black uppercase tracking-widest block mb-1 opacity-60">Verified Official</span>
                            <span className="text-xs font-bold flex items-center gap-2"><ImageIcon className="w-3.5 h-3.5 text-blue-400" /> Digital Profile</span>
                         </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-1">
                      <h3 className="text-2xl font-black text-slate-900 mb-2 leading-none group-hover:text-blue-600 transition-colors">
                        {leader.title}
                      </h3>
                      <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                        {leader.author || 'Institutional Representative'}
                      </p>

                      <div className="relative mb-8 flex-1">
                        <MessageSquareQuote className="absolute -top-4 -left-4 w-12 h-12 text-slate-100 opacity-50" />
                        <p className="text-slate-600 italic leading-relaxed relative z-10 pl-2 font-light text-sm line-clamp-4">
                          "{leader.summary.replace(/<[^>]*>/g, '')}"
                        </p>
                      </div>

                      <div className="pt-6 border-t border-slate-100 mt-auto">
                        <a 
                          href={leader.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] hover:text-blue-600 transition-all group/link"
                        >
                          Message Detail
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[4rem] border border-slate-100 shadow-sm mb-20">
             <Landmark className="w-16 h-16 text-slate-100 mx-auto mb-6" />
             <p className="text-slate-400 font-light italic">Leadership messages are currently being updated by the administration.</p>
          </div>
        )}

        {/* Extended Directory Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Current Team Directories */}
            <div className="lg:col-span-7 bg-white rounded-[3rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="flex items-center gap-4 mb-10">
                    <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl">
                        <ClipboardList className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">{language === 'en' ? "Institutional Directories" : "संस्थागत विवरणहरू"}</h3>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Current Governance & Faculty Board</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {directoryLinks.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-blue-100"
                        >
                            <div className={`mb-6 p-4 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <span className="text-center text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-blue-600 transition-colors leading-relaxed">{item.name}</span>
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                               <ExternalLink className="w-4 h-4 text-slate-300" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Historical Archives */}
            <div className="lg:col-span-5 bg-slate-900 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <History className="w-64 h-64 text-white" />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-4 bg-white/10 text-white rounded-2xl backdrop-blur-md border border-white/10">
                            <History className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight">{language === 'en' ? "Historical Archives" : "ऐतिहासिक अभिलेख"}</h3>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Legacy of Leadership</p>
                        </div>
                    </div>

                    <div className="space-y-4 flex-1">
                        {legacyLinks.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:translate-x-2"
                            >
                                <div className="flex items-center gap-4">
                                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors"></div>
                                  <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-wider">{item.name}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all text-slate-500">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TeamHome;
