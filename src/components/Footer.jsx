import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">&copy; {new Date().getFullYear()} Sachin Gijavanekar And Company. All rights reserved.</p>
                <p className="mb-1">Email: sachingsupport@gmail.com</p>
                <p className="mb-1">Contact No: 9370148341</p>
                <p className="mb-1">Developed By: Ishan Gijavanekar</p>
            </div>
        </footer>
    );
};

export default Footer;
