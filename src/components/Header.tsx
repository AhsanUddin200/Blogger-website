import { PenLine } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <PenLine className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">Blogger</span>
          </Link>
          <nav>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}