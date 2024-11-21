import { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';
import { Pencil, Trash2, Plus } from 'lucide-react';

export default function Dashboard() {
  const { blogs, addBlog, updateBlog, deleteBlog } = useContext(BlogContext);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (blogData) => {
    if (editingBlog) {
      updateBlog(editingBlog.id, blogData);
      setEditingBlog(null);
    } else {
      addBlog(blogData);
    }
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          {!showForm && !editingBlog && (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="h-5 w-5 mr-2" />
              New Blog
            </button>
          )}
        </div>

        {(showForm || editingBlog) && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingBlog ? 'Edit Blog' : 'Create New Blog'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingBlog(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
            <BlogForm
              onSubmit={handleSubmit}
              initialData={editingBlog}
            />
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-900">Your Blogs</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {blogs.map((blog) => (
              <div key={blog.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 truncate">
                      {blog.title}
                    </h3>
                    <div className="mt-1 flex items-center space-x-4">
                      <p className="text-sm text-gray-500">{blog.createdAt}</p>
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex items-center space-x-4">
                    <button
                      onClick={() => {
                        setEditingBlog(blog);
                        setShowForm(false);
                      }}
                      className="text-indigo-600 hover:text-indigo-900 p-2 rounded-full hover:bg-indigo-50 transition-colors"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {blogs.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No blogs yet. Create your first blog post!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}