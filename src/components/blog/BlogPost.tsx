import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, Tag, User } from 'lucide-react';

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
    admin_users?: {
      role: string;
    };
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="card">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-sm text-white/60">
            <Clock className="w-4 h-4 mr-1" />
            {format(new Date(post.published_at), 'MMM d, yyyy')}
          </div>
        </div>
        <h1 className="text-3xl font-cinzel font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="h-4 w-4 text-white/60" />
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium">Admin User</div>
              <div className="text-xs text-white/60">{post.admin_users?.role}</div>
            </div>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center text-sm text-white/60">
              <Tag className="w-4 h-4 mr-1" />
              {post.tags.join(', ')}
            </div>
          )}
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="text-white/80 mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-white/10">
        <Link to="/blog" className="text-accent hover:text-accent/80">
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;