import { useState } from 'react';
import { BlogPost } from '../types/blog';

interface BlogFormProps {
  onSubmit: (blog: Omit<BlogPost, 'id' | 'createdAt'>) => void;
  initialData?: BlogPost;
}

export default function BlogForm({ onSubmit, initialData }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    content: initialData?.content || '',
    author: initialData?.author || '',
    imageUrl: initialData?.imageUrl || '',
    excerpt: initialData?.excerpt || '',
    tags: initialData?.tags.join(', ') || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim())
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Author</label>
        <input
          type="text"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Excerpt</label>
        <textarea
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={2}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={6}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Technology, Web Development"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {initialData ? 'Update Blog' : 'Create Blog'}
      </button>
    </form>
  );
}