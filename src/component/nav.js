import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg font-bold">My Website</a>
        <div className="hidden md:flex">
          <a href="/" className="p-2">Home</a>
          <a href="/about" className="p-2">About</a>
          <a href="/contact" className="p-2">Contact</a>
          <a href="/services" className="p-2">Services</a>
        </div>
      </div>
    </nav>
  );
}

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 My Website. All Rights Reserved.</p>
    </footer>
  );
}

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1>TOUCHPOINT</h1>
        <p>This is a simple website with a responsive Navbar and Footer.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;

