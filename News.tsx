import React from 'react';
import { NEWS_UPDATES, TRANSLATIONS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const News: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="news" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-4">
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide">
              {t.sectionTitles.news}
            </h2>
            <p className="mt-2 text-gray-600">Updates and happenings at Argal Secondary.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
            View Archive <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_UPDATES.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  News
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {item.summary}
                </p>
                <a href="#" className="text-blue-600 font-semibold text-sm hover:underline mt-auto inline-flex items-center">
                  Read Full Story
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-blue-600 font-medium">
            View Archive <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;