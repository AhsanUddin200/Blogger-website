import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import { Calendar, Tag, User } from 'lucide-react';

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center space-x-2 text-white">
            <User className="h-4 w-4" />
            <span className="text-sm">{blog.author}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4" />
          <time>{blog.createdAt}</time>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {blog.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <Link
            to={`/blog/${blog.id}`}
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-indigo-700 transition-colors group"
          >
            Read More
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}