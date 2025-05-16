import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    tags: string[];
    published_at: string;
    seo_description: string;
  };
  variant?: 'featured' | 'regular' | 'compact';
}

const BlogCard: React.FC<BlogCardProps> = ({ post, variant = 'regular' }) => {
  const getFeaturedImage = (category: string) => {
    // Use category-specific images from Pexels
    switch (category.toLowerCase()) {
      case 'horoscope':
        return 'https://images.pexels.com/photos/5901263/pexels-photo-5901263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
      case 'tarot':
        return 'https://images.pexels.com/photos/6775267/pexels-photo-6775267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
      case 'astrology':
        return 'https://images.pexels.com/photos/5901725/pexels-photo-5901725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
      case 'numerology':
        return 'https://images.pexels.com/photos/5901589/pexels-photo-5901589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
      case 'love & relationships':
        return 'https://images.pexels.com/photos/5901276/pexels-photo-5901276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
      default:
        return 'https://images.pexels.com/photos/5901269/pexels-photo-5901269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    }
  };

  if (variant === 'featured') {
    return (
      <Link 
        to={`/blog/${post.slug}`}
        className="group relative block aspect-[16/9] overflow-hidden rounded-xl"
      >
        <img
          src={getFeaturedImage(post.category)}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent">
          <div className="absolute bottom-0 p-6">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                {post.category}
              </span>
            </div>
            <h2 className="text-2xl font-cinzel font-bold mb-2 text-white group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-white/80 line-clamp-2 mb-4">
              {post.excerpt || post.seo_description}
            </p>
            <div className="flex items-center text-sm text-white/60">
              <Clock className="w-4 h-4 mr-1" />
              {format(new Date(post.published_at), 'MMM d, yyyy')}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/blog/${post.slug}`} className="group block">
        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={getFeaturedImage(post.category)}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div>
            <h3 className="font-cinzel font-bold mb-1 group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <div className="flex items-center text-xs text-white/60">
              <Clock className="w-3 h-3 mr-1" />
              {format(new Date(post.published_at), 'MMM d, yyyy')}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="group block rounded-xl overflow-hidden bg-surface/50 hover:bg-surface/70 transition-colors"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={getFeaturedImage(post.category)}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-cinzel font-bold mb-2 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-white/80 line-clamp-2 mb-4">
          {post.excerpt || post.seo_description}
        </p>
        <div className="flex items-center justify-between text-sm text-white/60">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {format(new Date(post.published_at), 'MMM d, yyyy')}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-1" />
              {post.tags[0]}
              {post.tags.length > 1 && ` +${post.tags.length - 1}`}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;