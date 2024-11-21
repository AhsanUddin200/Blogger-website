import { useContext } from 'react';
import BlogCard from '../components/BlogCard';
import { BlogContext } from '../context/BlogContext';
import { PenLine } from 'lucide-react';

export default function Home() {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <PenLine className="h-16 w-16 text-red-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Blogger
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover stories, thinking, and expertise from writers on any topic.
            Share your ideas with the world.
          </p>
        </div>
        
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No blog posts yet
            </h2>
            <p className="text-gray-600">
              Be the first to share your thoughts and ideas!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}