import React, { useState } from 'react';

interface MenuItem {
  href: string;
  label: string;
  isActive?: boolean;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  currentPath: string;
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, currentPath, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`md:hidden ${className || ''}`}>
      <button
        onClick={toggleMenu}
        className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center space-y-1"
        aria-label="Toggle mobile menu"
      >
        <span
          className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-y-1.5 rotate-45' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
            isOpen ? '-translate-y-1.5 -rotate-45' : ''
          }`}
        />
      </button>

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center space-y-1"
              aria-label="Close mobile menu"
            >
              <span className="block h-0.5 w-6 translate-y-1.5 rotate-45 bg-gray-800" />
              <span className="block h-0.5 w-6 bg-gray-800 opacity-0" />
              <span className="block h-0.5 w-6 -translate-y-1.5 -rotate-45 bg-gray-800" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center space-y-8 px-4">
            <ul className="flex flex-col items-center space-y-8">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className={`text-xl font-normal transition-colors duration-300 ease-in-out hover:text-black ${
                      currentPath === item.href ? 'font-semibold text-black' : 'text-[#82888C]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              onClick={toggleMenu}
              className="btn btn-neutral cursor-pointer px-6 py-3"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
