import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { Calendar, Tag, ArrowLeft, User } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Blog post not found</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center text-red-600 hover:text-indigo-800 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </button>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-96 object-cover"
        />
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <User className="h-5 w-5 mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <time>{blog.createdAt}</time>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.title}</h1>
          
          <div className="prose max-w-none mb-8">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full"
              >
                <Tag className="h-4 w-4 mr-2" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}