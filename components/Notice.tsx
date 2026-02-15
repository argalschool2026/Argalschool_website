import React from 'react';
import { BLOG_URLS, NOTICES } from '../constants';
import { Bell, Loader2, Zap, ExternalLink } from 'lucide-react';
import { useBlogger } from '../hooks/useBlogger';

const Notice: React.FC = () => {
  const { posts, loading } = useBlogger({
    blogUrl: BLOG_URLS.base,
    label: 'Notice',
    maxResults: 10
  });

  const noticesToDisplay = (posts && posts.length > 0) 
    ? posts 
    : NOTICES.map((n, i) => ({ id: `fallback-${i}`, title: n, link: BLOG_URLS.notice, date: 'Update' }));

  return (
    <div className="fixed top-16 left-0 right-0 z-[100] h-12 bg-white border-b border-slate-200 shadow-sm overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center">
        
        {/* Notice Label (Link to Notice Search) */}
        <a 
          href={BLOG_URLS.notice}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 h-full px-4 md:px-6 flex items-center justify-center text-white relative z-20 shrink-0 hover:bg-blue-800 transition-colors group"
        >
          <Bell className="w-4 h-4 mr-2 text-yellow-400 group-hover:animate-bounce" />
          <span className="font-black text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap">Notice</span>
          <div className="hidden md:block absolute top-0 -right-4 w-0 h-0 border-t-[48px] border-t-blue-700 border-r-[16px] border-r-transparent"></div>
        </a>

        {/* Marquee Content */}
        <div className="flex-1 overflow-hidden h-full flex items-center bg-slate-50 marquee-container relative">
          {loading ? (
            <div className="px-6 flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase animate-pulse">
              <Loader2 className="w-3 h-3 animate-spin" /> Fetching Stream...
            </div>
          ) : (
            <div 
              className="animate-marquee whitespace-nowrap flex items-center h-full"
              style={{ animationDuration: `${Math.max(noticesToDisplay.length * 8, 25)}s` }}
            >
              {noticesToDisplay.map((notice, index) => (
                <a 
                  key={`${notice.id}-${index}`}
                  href={notice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-6 text-[11px] md:text-sm font-bold inline-flex items-center text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Zap className="w-3 h-3 text-amber-500 mr-2" />
                  {notice.title}
                  <span className="ml-2 px-1.5 py-0.5 bg-slate-200 text-slate-500 text-[8px] rounded uppercase font-black">
                    {notice.date || 'Update'}
                  </span>
                </a>
              ))}
              {/* Duplicate for seamless loop */}
              {noticesToDisplay.map((notice, index) => (
                <a 
                  key={`dup-${notice.id}-${index}`}
                  href={notice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-6 text-[11px] md:text-sm font-bold inline-flex items-center text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Zap className="w-3 h-3 text-amber-500 mr-2" />
                  {notice.title}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Archive Link */}
        <div className="hidden lg:flex items-center h-full px-4 border-l border-slate-200">
          <a 
            href={BLOG_URLS.notice} 
            target="_blank" 
            className="text-[10px] font-black text-slate-400 hover:text-blue-600 flex items-center gap-1 uppercase whitespace-nowrap"
          >
            All Notices <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Notice;