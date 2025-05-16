import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Filter, ChevronDown } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import BlogCard from '../components/blog/BlogCard';
import { getPublishedPosts } from '../lib/blog';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPublishedPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = Array.from(new Set(posts.map(post => post.category)));

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-cinzel font-bold flex items-center">
              <FileText className="mr-3 h-6 w-6 text-accent" />
              Cosmic Blog
            </h1>
            <p className="text-white/70 mt-1">
              Insights, guidance, and spiritual wisdom
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10 w-full"
                />
              </div>
            </div>
            
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="input pr-10 appearance-none"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;