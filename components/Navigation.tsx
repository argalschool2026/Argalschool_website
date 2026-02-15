
import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Globe, ChevronDown, Users, History, Award, Languages } from 'lucide-react';
import { SCHOOL_NAME, TRANSLATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamLinks = [
    { name: t.nav.management, href: '#management', icon: Users },
    { name: t.nav.exManagement, href: '#ex-management', icon: History },
    { name: t.nav.founders, href: '#founders', icon: Award },
    { name: t.nav.staff, href: '#staff', icon: Users },
  ];

  const mainLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.history, href: '#history' },
    { name: t.nav.martyrs, href: '#martyrs', special: true },
    { name: t.nav.news, href: '#news' },
    { name: t.nav.donors, href: '#donors' },
    { name: t.nav.akshayaKosh, href: '#akshaya-kosh' },
    { name: t.nav.exStudents, href: '#ex-students' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace('#', '');
    const isSeparateView = ['management', 'staff', 'ex-management'].includes(id);

    if (window.location.hash === href) {
       e.preventDefault(); 
       if (isSeparateView) {
         window.scrollTo({ top: 0, behavior: 'smooth' });
       } else {
         const element = document.getElementById(id);
         if (element) {
           const headerOffset = 112; // Adjusted for Nav + Notice height
           const elementPosition = element.getBoundingClientRect().top;
           const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
           window.scrollTo({ top: offsetPosition, behavior: "smooth" });
         }
       }
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[110] h-16 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' 
          : 'bg-slate-900 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-3 shrink-0"
        >
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-600/20">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className={`text-base font-black tracking-tighter leading-none transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              {SCHOOL_NAME.split(' ')[0]}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-500">
              Argal, Baglung
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1">
          {mainLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`px-3 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all ${
                link.special ? 'text-red-500 hover:bg-red-50' : 
                scrolled ? 'text-slate-600 hover:bg-slate-100 hover:text-blue-600' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Our Team Dropdown */}
          <div className="relative group">
            <button 
              className={`px-3 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest flex items-center gap-1 transition-all ${
                scrolled ? 'text-slate-600 group-hover:bg-slate-100 group-hover:text-blue-600' : 'text-slate-300 group-hover:bg-white/10 group-hover:text-white'
              }`}
            >
              {t.nav.team} <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 w-56 text-slate-900">
                {teamLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-xl transition-colors group/item"
                  >
                    <div className="p-1.5 bg-slate-50 text-slate-400 group-hover/item:bg-blue-100 group-hover/item:text-blue-600 rounded-lg">
                      <link.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.slice(3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`px-3 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all ${
                scrolled ? 'text-slate-600 hover:bg-slate-100 hover:text-blue-600' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Google Translate Desktop */}
          <div className="ml-4 flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 transition-all scrolled:border-slate-200 scrolled:bg-slate-50">
            <Languages className={`w-3.5 h-3.5 ${scrolled ? 'text-slate-400' : 'text-slate-300'}`} />
            <div id="google_translate_element" className={`${scrolled ? 'text-slate-900' : 'text-white'}`}></div>
          </div>

          {/* Lang Switch */}
          <button 
            onClick={toggleLanguage}
            className={`ml-3 flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              scrolled 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'bg-white/10 text-white border border-white/20'
            }`}
          >
            <Globe className="w-3 h-3" />
            {language === 'en' ? 'नेपाली' : 'English'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center gap-2">
           <button 
              onClick={toggleLanguage}
              className={`p-2 rounded-lg text-[10px] font-black transition-all ${scrolled ? 'bg-blue-50 text-blue-600' : 'bg-white/10 text-white'}`}
            >
              {language === 'en' ? 'NP' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`xl:hidden fixed inset-0 z-[120] bg-slate-900 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-6 pb-10">
          <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-white"><X className="w-8 h-8" /></button>
          
          <div className="flex flex-col gap-4 overflow-y-auto">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-2xl font-black uppercase tracking-tighter ${link.special ? 'text-red-500' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px w-full bg-white/10 my-2"></div>
            
            {/* Google Translate Mobile */}
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 mb-2">
              <Languages className="w-5 h-5 text-blue-400" />
              <div id="google_translate_element_mobile"></div>
              {/* Ensure widget is visible in mobile too if needed, though simple layout often works best in one place */}
            </div>

            <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Institutional Hub</p>
            {teamLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-bold text-slate-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button 
            onClick={toggleLanguage}
            className="mt-auto w-full bg-blue-600 py-4 rounded-2xl text-white font-black uppercase tracking-widest shadow-xl shadow-blue-600/20"
          >
            Switch to {language === 'en' ? 'नेपाली' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;