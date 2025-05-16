import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { getBlogPosts } from '../../lib/admin';

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getBlogPosts();
      // Only show published posts
      const publishedPosts = data.filter(post => post.status === 'published');
      setPosts(publishedPosts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || posts.length === 0) return null;

  // Get the latest post for the featured section
  const featuredPost = posts[0];
  
  // Group remaining posts by category
  const postsByCategory = posts.slice(1).reduce((acc: any, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {});

  return (
    <section className="py-16 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-cinzel font-bold flex items-center">
              <FileText className="mr-3 h-6 w-6 text-accent" />
              Cosmic Insights
            </h2>
            <p className="text-white/70 mt-1">
              Latest articles and spiritual guidance
            </p>
          </div>
          <Link to="/blog" className="btn btn-outline flex items-center">
            View All
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <BlogCard post={featuredPost} variant="featured" />
          </div>

          {/* Popular Articles */}
          <div className="space-y-6">
            <h3 className="font-cinzel font-bold text-xl mb-4">Popular Articles</h3>
            <div className="space-y-6">
              {posts.slice(1, 5).map(post => (
                <BlogCard key={post.id} post={post} variant="compact" />
              ))}
            </div>
          </div>
        </div>

        {/* Category Sections */}
        {Object.entries(postsByCategory).map(([category, categoryPosts]: [string, any[]]) => (
          <div key={category} className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-cinzel font-bold text-2xl">{category}</h3>
              <Link 
                to={`/blog/category/${category.toLowerCase()}`}
                className="text-accent hover:text-accent/80 flex items-center"
              >
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryPosts.slice(0, 3).map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;