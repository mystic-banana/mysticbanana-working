import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import BlogPost from '../components/blog/BlogPost';
import { getPostBySlug } from '../lib/blog';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const data = await getPostBySlug(slug as string);
      setPost(data);
    } catch (error) {
      console.error('Error fetching blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !post) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="card animate-pulse">
            <div className="h-8 bg-white/10 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-white/10 rounded w-3/4 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-5/6"></div>
              <div className="h-4 bg-white/10 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <BlogPost post={post} />
      </div>
    </MainLayout>
  );
};

export default BlogPostPage;