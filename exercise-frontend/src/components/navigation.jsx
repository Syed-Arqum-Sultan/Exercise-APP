import React, { useState } from 'react';
import { logout, loggedIn } from '../../utils/auth';

function Navigation() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
const loggedIn1 = loggedIn();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear user session, reset state, etc.)
    logout();
    
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-dark font-bold text-lg"><img  className ="w-20 h-13 mr-2 mt-2 "  src="../assets/logo4.png" alt="" /></a>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/about" className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/services" className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="/contact" className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="flex items-center">
            {loggedIn1 ? (
                <>              <button className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleLogout}>
                logout
              </button>
              <button className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
              <a href='/addactivity'>Add Activity</a>
            </button>
            </>

            ) : (
              <a href="/login" className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"  >login</a>
            )}
            <a href="/SignUp" className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Signup</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
