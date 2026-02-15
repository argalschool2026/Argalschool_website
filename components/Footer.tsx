import React from 'react';
import { SCHOOL_NAME, SCHOOL_ADDRESS, TRANSLATIONS } from '../constants';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const importantLinks = [
    { name: 'Ministry of Education (MoEST)', url: 'https://moest.gov.np/' },
    { name: 'National Examination Board (NEB)', url: 'https://www.neb.gov.np/' },
    { name: 'Curriculum Development Centre (CDC)', url: 'https://moecdc.gov.np/' },
    { name: 'Center for HR Development (CEHRD)', url: 'https://cehrd.gov.np/' },
    { name: 'Education Review Office (ERO)', url: 'https://www.ero.gov.np/' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6 border-t-4 border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* ERIC NEPAL Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">ERIC NEPAL : Design and IT support</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              ERIC Nepal is a premier IT solution provider specializing in innovative web design, software development, and digital branding tailored for modern educational institutions and businesses.
            </p>
            <a 
              href="https://www.ericnepal.youware.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
            >
              <Globe className="w-4 h-4 mr-2" /> Visit Website
            </a>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">{t.footer.importantLinks}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-400 shrink-0" />
                <span>{SCHOOL_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400 shrink-0" />
                <span>+977-9800000000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400 shrink-0" />
                <span>info@argalschool.edu.np</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">{t.footer.connect}</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-6 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_NAME}. {t.footer.rights}</p>
          <p className="flex items-center gap-1">
            {t.footer.designedBy} <a href="https://www.ericnepal.youware.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">ERIC Nepal</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;