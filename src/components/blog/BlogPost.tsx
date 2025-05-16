import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { 
  Clock, 
  Tag, 
  User, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Copy, 
  ChevronRight,
  Star
} from 'lucide-react';

interface BlogPostProps {
  post: {
    id: string;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    category: string;
    tags: string[];
    published_at: string;
    author_id: string;
    seo_title?: string;
    seo_description?: string;
    admin_users?: {
      role: string;
    };
  };
  relatedPosts?: Array<any>;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, relatedPosts }) => {
  const getFeaturedImage = (category: string) => {
    // Use category-specific images from Pexels
    switch (category.toLowerCase()) {
      case 'horoscope':
        return 'https://images.pexels.com/photos/5901263/pexels-photo-5901263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
      case 'tarot':
        return 'https://images.pexels.com/photos/6775267/pexels-photo-6775267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
      case 'astrology':
        return 'https://images.pexels.com/photos/5901725/pexels-photo-5901725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
      default:
        return 'https://images.pexels.com/photos/5901269/pexels-photo-5901269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    }
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = post.title;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          // You could add a toast notification here
        } catch (err) {
          console.error('Failed to copy URL:', err);
        }
        break;
    }
  };

  return (
    <article>
      {/* Featured Image */}
      <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8">
        <img
          src={getFeaturedImage(post.category)}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent">
          <div className="absolute bottom-0 p-8 max-w-3xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/20 text-accent rounded-full">
                {post.category}
              </span>
              <div className="text-sm text-white/60 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {format(new Date(post.published_at), 'MMM d, yyyy')}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-white/80">{post.excerpt}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <div className="card">
            {/* Author & Share */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-6 w-6 text-white/60" />
                </div>
                <div className="ml-4">
                  <div className="font-medium">Admin User</div>
                  <div className="text-sm text-white/60">{post.admin_users?.role}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handleShare('facebook')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => handleShare('copy')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Copy className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-white/80 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="h-4 w-4 text-white/60" />
                  {post.tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-surface/50 hover:bg-surface rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-cinzel font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                      <img
                        src={getFeaturedImage(relatedPost.category)}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-cinzel font-bold mb-2 group-hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Premium CTA */}
          <div className="card bg-gradient-to-br from-primary/30 to-surface border-t border-l border-white/10">
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-accent mr-2" fill="currentColor" />
              <h3 className="font-cinzel font-bold">Premium Content</h3>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Get exclusive access to in-depth spiritual content, personalized readings, and expert guidance.
            </p>
            <Link to="/upgrade" className="btn btn-accent w-full">
              Upgrade to Premium
            </Link>
          </div>

          {/* Category Navigation */}
          <div className="card">
            <h3 className="font-cinzel font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              {['Astrology', 'Tarot', 'Numerology', 'Meditation', 'Crystal Healing'].map(category => (
                <Link
                  key={category}
                  to={`/blog/category/${category.toLowerCase()}`}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface/50 transition-colors"
                >
                  <span>{category}</span>
                  <ChevronRight className="h-4 w-4 text-accent" />
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="card">
            <h3 className="font-cinzel font-bold mb-4">Stay Connected</h3>
            <p className="text-white/80 text-sm mb-4">
              Get cosmic updates and spiritual insights delivered to your inbox.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="input w-full"
              />
              <button type="submit" className="btn btn-accent w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <Link to="/blog" className="text-accent hover:text-accent/80">
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;