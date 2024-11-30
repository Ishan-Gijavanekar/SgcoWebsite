import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <a href="/">
                        <img src='/BusinessCardLogo.jpg' alt="Company Logo" className="h-8 w-8 inline-block mr-2 rounded-full" />
                        Sachin Gijavanekar And Company
                    </a>
                </div>
                <div className="md:hidden">
                    <button id="navbar-toggle" className="text-white focus:outline-none" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="/products" className="text-white px-3 py-2 rounded-md text-sm font-medium">Products</a>
                        <a href="/career" className="text-white px-3 py-2 rounded-md text-sm font-medium">Career</a>
                        <a href="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
                        <a href="/signin" className="text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</a>
                        <button className="text-white px-3 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 transition duration-200">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
