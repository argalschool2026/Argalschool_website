import React from 'react';
import { BLOG_LABELS, BLOG_URLS, TRANSLATIONS } from '../constants';
import { 
  Camera, 
  ExternalLink, 
  Loader2, 
  Maximize2, 
  Image as ImageIcon,
  ArrowRight,
  Eye
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';

const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const { posts: galleryItems, loading, error } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: BLOG_LABELS.photos,
    maxResults: 16
  });

  return (
    <section id="gallery" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-blue-600 rounded-3xl shadow-xl shadow-blue-600/20 mb-6">
            <Camera className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            {t.sectionTitles.gallery}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            A visual journey through Argal Secondary School. Captured moments of academic pursuit, creative expression, and community spirit.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-80 gap-4">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
            <span className="text-slate-500 font-mono text-xs tracking-widest uppercase">Opening_Visual_Archives...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-slate-500">
            <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p>Archive connection paused. Please visit our photo blog directly.</p>
          </div>
        ) : galleryItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <a 
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-[2rem] bg-slate-900 border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2 h-[500px]' : 'h-64'
                }`}
              >
                {item.thumbnail ? (
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-700">
                    <ImageIcon className="w-12 h-12" />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Captured Moment</span>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
                      <Eye className="w-4 h-4" /> Expand perspective
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500 italic">
            Visual archive is being synchronized with the blog label "{BLOG_LABELS.photos}".
          </div>
        )}

        <div className="mt-20 text-center">
          <a 
            href={BLOG_URLS.photos}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-5 text-sm font-black text-white transition-all duration-300 rounded-[2rem] shadow-2xl hover:shadow-blue-600/30 bg-slate-900 border border-white/10 hover:border-blue-500 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
               Explore Full Visual Archive
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity rounded-[2rem]"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;