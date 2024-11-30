import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow bg-gray-100 p-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Leading ERP Solutions for Civil Contractors
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Streamline your operations, improve project management, and drive your business forward with our cutting-edge ERP software designed specifically for civil contractors.
                    </p>
                    <div className="flex justify-center space-x-4 mb-12">
                        <a href="/about" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">Learn More</a>
                        <a href="/products" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200">Our Products</a>
                    </div>
                    <img src="/homeImg.jpg" alt="ERP Solutions" className="mx-auto rounded-lg shadow-md mb-8 " />
                    <div className="text-left max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
                        <p className="text-gray-600 mb-4">
                            Our ERP software offers a comprehensive suite of tools tailored for the unique needs of civil contractors. From project management and resource planning to financial management and reporting, our solutions help you stay ahead of the competition and achieve your business goals.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mb-4">
                            <li>Efficient project management</li>
                            <li>Accurate resource planning</li>
                            <li>Robust financial management</li>
                            <li>Detailed reporting and analytics</li>
                        </ul>
                        <a href="/contact" className="text-blue-600 hover:underline">Contact us today to learn more!</a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
