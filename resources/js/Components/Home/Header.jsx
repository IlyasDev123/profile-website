import React from 'react';
import { Head, Link } from '@inertiajs/react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        <h1 className="text-3xl font-bold">Muhammad Ilyas</h1>
        <nav aria-label="Main Navigation">
          <ul className="flex space-x-6 text-lg font-medium">
            <li><Link href="#about" className="hover:text-yellow-300 transition">About</Link></li>
            <li><Link href="#projects" className="hover:text-yellow-300 transition">Projects</Link></li>
            <li><Link href="#skills" className="hover:text-yellow-300 transition">Skills</Link></li>
            <li><Link href="#contact" className="hover:text-yellow-300 transition">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
