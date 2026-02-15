import React from 'react';
import { BLOG_URLS, TRANSLATIONS } from '../constants';
import { ExternalLink, Palette, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlogger } from '../hooks/useBlogger';

const StudentCorner: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  // Fetch 3 posts with label 'creative'
  const { posts, loading, error } = useBlogger({ 
    blogUrl: BLOG_URLS.creative, 
    label: 'creative', 
    maxResults: 3 
  });

  return (
    <section id="creation-corner" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
            <Palette className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide border-b-4 border-purple-600 inline-block pb-2">
            {t.sectionTitles.creationCorner}
          </h2>
          <p className="mt-4 text-gray-600">
            Showcasing the artistic and literary talents of our students.
          </p>
        </div>

        {loading ? (
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1, 2, 3].map(i => (
               <div key={i} className="bg-slate-50 rounded-lg h-80 animate-pulse border border-slate-100"></div>
             ))}
           </div>
        ) : error || posts.length === 0 ? (
          <div className="text-center py-10 bg-slate-50 rounded-xl">
            <p className="text-gray-500 mb-2">{error || "No creative works found yet."}</p>
             <a href={BLOG_URLS.creative} target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">
               Check the Creative Corner Blog
             </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {posts.map((post) => (
              <div key={post.id} className="bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block relative h-56 overflow-hidden">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                     <h3 className="text-white text-lg font-bold line-clamp-2 drop-shadow-md">{post.title}</h3>
                  </div>
                </a>
                <div className="p-5">
                   <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.summary}</p>
                   <a 
                     href={post.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-purple-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform"
                   >
                     View Creation <ArrowRight className="ml-1 h-4 w-4" />
                   </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
           <a 
            href={BLOG_URLS.creative} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            See More Creative Works <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentCorner;