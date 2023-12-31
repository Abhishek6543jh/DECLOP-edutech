import React, { useState, useEffect } from 'https://cdn.skypack.dev/react';
import { Link } from 'https://cdn.skypack.dev/react-router-dom@5.3.0';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether the user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${top ? '' : 'bg-white shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify between h-16 md:h-20">

          {/* Site branding with custom image URL */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img
                src="declop-logo.jpg" // Replace with your logo image URL
                alt="Your Logo"
                className="w-10 h-15" // You can adjust the width and height as needed
              />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-800 px-4 py-2 flex items-center transition duration-300 ease-in-out border border-blue-600 rounded-md">Sign in</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm bg-blue-500 text-white ml-3 px-4 py-2 flex items-center transition duration-300 ease-in-out rounded-md">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
