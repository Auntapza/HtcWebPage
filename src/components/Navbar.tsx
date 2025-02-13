import { Menu, Home, User, Book, School } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <School className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">วิทยาลัยเทคนิคหาดใหญ่</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="flex items-center hover:text-purple-200">
                <Home className="h-4 w-4 mr-1" />
                หน้าหลัก
              </Link>
              <Link to="/administrators" className="flex items-center hover:text-purple-200">
                <User className="h-4 w-4 mr-1" />
                ผู้บริหาร
              </Link>
              <Link to="/staff" className="flex items-center hover:text-purple-200">
                <User className="h-4 w-4 mr-1" />
                บุคลากร
              </Link>
              <Link to="/students" className="flex items-center hover:text-purple-200">
                <User className="h-4 w-4 mr-1" />
                นักเรียน/นักศึกษา
              </Link>
              <Link to="/courses" className="flex items-center hover:text-purple-200">
                <Book className="h-4 w-4 mr-1" />
                หลักสูตร
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-purple-600">หน้าหลัก</a>
              <a href="#administrators" className="block px-3 py-2 hover:bg-purple-600">ผู้บริหาร</a>
              <a href="#personnel" className="block px-3 py-2 hover:bg-purple-600">บุคลากร</a>
              <a href="#students" className="block px-3 py-2 hover:bg-purple-600">นักเรียน/นักศึกษา</a>
              <a href="#courses" className="block px-3 py-2 hover:bg-purple-600">หลักสูตร</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;