import React from 'react';

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Company Name */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <div className="flex items-center">
                <Image 
                            src="/img/logo.png"
                            alt="Artwork Showcase Logo"
                            width={143.44}
                            height={35.86}
                />
            </div>
          </div>

          {/* Footer Columns */}
          {['Features', 'About', 'Resources', 'Social Media'].map((column, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-auto mb-6 md:mb-0">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">{column}</h3>
              <ul className="space-y-2">
                {getColumnItems(column).map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

const getColumnItems = (column: string) => {
  switch (column) {
    case 'Features':
      return ['Stuff for Designers', 'Cool Stuff', 'Random Feature', 'Another One', 'Last Time'];
    case 'About':
      return ['DesignForge', 'Privacy', 'Terms', 'F.A.Q.'];
    case 'Resources':
      return ['Resources', 'Tutorials', 'Helpful Guides', 'Inspiring Workshops'];
    case 'Social Media':
      return ['Twitter', 'Instagram', 'Facebook', 'Youtube'];
    default:
      return [];
  }
};

export default Footer;