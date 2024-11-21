import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import BlogPost from './pages/BlogPost';
import { BlogProvider } from './context/BlogContext';

export default function App() {
  return (
    <Router>
      <BlogProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </BlogProvider>
    </Router>
  );
}