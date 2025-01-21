import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LogOut, 
  LayoutDashboard, 
  Database, 
  Wallet, 
  Calculator, 
  FileBarChart 
} from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1585959847488417792/wHiIqsUp_400x400.jpg"
                alt="CLF Logo"
                className="h-10 w-10"
              />
              <div className="ml-4">
                <h1 className="text-xl font-bold text-primary-600">
                  CLF Accounting
                </h1>
                <h2 className="text-sm text-primary-500">Management System</h2>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">{user?.name}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-primary-600"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex items-center gap-2 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
                >
                  <Database className="h-4 w-4" />
                  Master
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
                >
                  <Wallet className="h-4 w-4" />
                  Loan Section
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
                >
                  <Calculator className="h-4 w-4" />
                  Account Section
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
                >
                  <FileBarChart className="h-4 w-4" />
                  Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-2 lg:px-2">{children}</main>
    </div>
  );
}