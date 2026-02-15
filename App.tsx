import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Notice from './components/Notice';
import Hero from './components/Hero';
import History from './components/History';
import Management from './components/Management';
import Staff from './components/Staff';
import Founders from './components/Founders';
import Donors from './components/Donors';
import News from './components/News';
import AkshayaKosh from './components/AkshayaKosh';
import ExStudents from './components/ExStudents';
import ExManagement from './components/ExManagement';
import Footer from './components/Footer';
import UniverseBackground from './components/UniverseBackground';
import Highlights from './components/Highlights';
import SuccessStories from './components/SuccessStories';
import TeamHome from './components/TeamHome';
import Martyrs from './components/Martyrs';
import BestPractices from './components/BestPractices';
import StudentCorner from './components/StudentCorner';
import Gallery from './components/Gallery';
import { LanguageProvider } from './contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

function AppContent() {
  const [view, setView] = useState<'home' | 'management' | 'staff' | 'ex-management'>('home');

  const getViewFromHash = (hash: string): 'home' | 'management' | 'staff' | 'ex-management' => {
    if (hash === '#management') return 'management';
    if (hash === '#staff') return 'staff';
    if (hash === '#ex-management') return 'ex-management';
    return 'home';
  };

  const performScroll = () => {
    const hash = window.location.hash;
    
    if (['#management', '#staff', '#ex-management'].includes(hash)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (hash && hash !== '#home') {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 112; // Adjusted for fixed Nav (64px) + Notice (48px)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      const newView = getViewFromHash(currentHash);
      
      setView(prevView => {
        if (prevView !== newView) {
          return newView;
        }
        setTimeout(performScroll, 0);
        return prevView;
      });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      performScroll();
    }, 150);
    return () => clearTimeout(timer);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <UniverseBackground />
      
      {/* Fixed Header Stack */}
      <Navigation />
      <Notice />

      {/* Main Content pushed down by Header height (64px + 48px = 112px -> pt-28) */}
      <main className="flex-grow relative pt-28">
        {view !== 'home' && (
          <a
            href="#home"
            className="fixed bottom-8 left-8 z-[120] bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 group border-2 border-white/20 backdrop-blur-sm animate-in fade-in zoom-in duration-300"
            aria-label="Back to Home"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold hidden sm:inline">Back to Home</span>
          </a>
        )}

        {view === 'home' && (
          <>
            <Hero />
            <History />
            <Martyrs />
            <Founders />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-50 border-y border-slate-200">
              <News />
              <StudentCorner />
            </div>

            <TeamHome />
            <BestPractices />
            <SuccessStories />
            <Highlights />
            <Donors />
            <AkshayaKosh />
            <ExStudents />
            <Gallery />
          </>
        )}
        
        {view === 'management' && <Management />}
        {view === 'staff' && <Staff />}
        {view === 'ex-management' && <ExManagement />}
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;