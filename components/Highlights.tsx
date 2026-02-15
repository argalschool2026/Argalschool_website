import React from 'react';
import { HIGHLIGHTS, TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Highlights: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide border-b-4 border-blue-600 inline-block pb-2">
            {t.sectionTitles.highlights}
          </h2>
          <p className="mt-4 text-gray-600">
            Discover what makes Argal Secondary School the best choice for your child.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((item, index) => (
            <div key={index} className="group h-64 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-50 shadow-sm border border-slate-100 flex flex-col items-center justify-center p-6 [backface-visibility:hidden]">
                  <div className="inline-flex items-center justify-center p-5 bg-blue-100 text-blue-600 rounded-full mb-4">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <div className="mt-4 text-xs text-gray-400 font-medium uppercase tracking-widest">Hover for details</div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-600 text-white flex flex-col items-center justify-center p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{item.description}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;