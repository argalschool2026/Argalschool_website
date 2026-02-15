import React from 'react';
import { MANAGEMENT_COMMITTEE, TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Management: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="management" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wide border-b-4 border-blue-600 inline-block pb-2">
            {t.sectionTitles.management}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The School Management Committee (SMC) guiding our strategic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {MANAGEMENT_COMMITTEE.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden text-center group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mt-1">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;