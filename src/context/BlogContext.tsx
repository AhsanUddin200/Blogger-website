import { createContext, useState, ReactNode } from 'react';
import { BlogPost } from '../types/blog';
import { initialBlogs } from '../data/blogs';

interface BlogContextType {
  blogs: BlogPost[];
  addBlog: (blog: Omit<BlogPost, 'id' | 'createdAt'>) => void;
  updateBlog: (id: string, blog: Omit<BlogPost, 'id' | 'createdAt'>) => void;
  deleteBlog: (id: string) => void;
}

export const BlogContext = createContext<BlogContextType>({
  blogs: [],
  addBlog: () => {},
  updateBlog: () => {},
  deleteBlog: () => {},
});

export function BlogProvider({ children }: { children: ReactNode }) {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);

  const addBlog = (blog: Omit<BlogPost, 'id' | 'createdAt'>) => {
    const newBlog: BlogPost = {
      ...blog,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setBlogs([newBlog, ...blogs]);
  };

  const updateBlog = (id: string, blog: Omit<BlogPost, 'id' | 'createdAt'>) => {
    setBlogs(
      blogs.map((b) =>
        b.id === id
          ? { ...blog, id, createdAt: b.createdAt }
          : b
      )
    );
  };

  const deleteBlog = (id: string) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
}