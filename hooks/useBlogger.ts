
import { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { BLOGGER_CONFIG } from '../constants';

interface UseBloggerProps {
  blogUrl: string;
  label?: string;
  maxResults?: number;
}

export const useBlogger = ({ blogUrl, label = '', maxResults = 10 }: UseBloggerProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        const { apiKey, blogId } = BLOGGER_CONFIG;

        // Construct Blogger V3 API URL
        let url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=${maxResults}`;
        
        let labelName = label;
        if (label.includes('/search/label/')) {
           labelName = label.split('/search/label/')[1].split('?')[0];
        }

        if (labelName) {
          url += `&labels=${encodeURIComponent(labelName)}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch posts from Blogger API');
        }

        const data = await response.json();
        const items = data.items || [];

        const formattedPosts: BlogPost[] = items.map((item: any) => {
          let thumbnail: string | undefined = undefined;
          
          // 1. Try images metadata
          if (item.images && item.images.length > 0) {
             thumbnail = item.images[0].url;
          } 
          
          // 2. Fallback: Parse content for images if thumbnail metadata is missing
          if (!thumbnail) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(item.content, 'text/html');
            const img = doc.querySelector('img');
            if (img && img.src) {
              thumbnail = img.src;
            }
          }

          // Normalize Blogger thumbnail size for higher quality (s1600 instead of s72-c)
          if (thumbnail && thumbnail.includes('s72-c')) {
            thumbnail = thumbnail.replace('s72-c', 's1600');
          }

          const rawContent = item.content || '';
          const summary = rawContent.replace(/<[^>]+>/g, ' ').substring(0, 250).trim() + '...';

          return {
            id: item.id,
            title: item.title,
            published: new Date(item.published).toLocaleDateString(),
            content: rawContent,
            summary: summary,
            // Normalize link for matching (remove mobile ?m=1 etc)
            link: item.url.split('?')[0], 
            thumbnail: thumbnail,
            author: item.author?.displayName || 'Admin'
          };
        });

        setPosts(formattedPosts);
        setError(null);

      } catch (err) {
        console.error("Blogger fetch failed:", err);
        setPosts([]);
        setError("Unable to connect to the live feed.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [blogUrl, label, maxResults]);

  return { posts, loading, error };
};
