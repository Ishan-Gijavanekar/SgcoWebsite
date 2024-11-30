import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow bg-gray-100 p-6">
                <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
                    <p className="text-lg text-gray-700 mb-6 text-justify">
                        Engaged in software development since 1997, we are masters in ERP development mainly for the Civil Construction Industry. This web-based ERP is suitable for Civil Contractors undertaking jobs in various sectors like Industrial, Institutional, Residential, and Infrastructural.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500">Our Expertise</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li className="hover:text-blue-600 transition-colors duration-200">Estimation & Site Execution</li>
                        <li className="hover:text-blue-600 transition-colors duration-200">Materials Management</li>
                        <li className="hover:text-blue-600 transition-colors duration-200">Vehicle & Machinery Maintenance</li>
                        <li className="hover:text-blue-600 transition-colors duration-200">Material Quality Assurance/Control - Laboratory Testing</li>
                        <li className="hover:text-blue-600 transition-colors duration-200">Basic Accounting</li>
                        <li className="hover:text-blue-600 transition-colors duration-200">Labour Attendance & Compliance Related Documentation</li>
                    </ul>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500">Our Esteemed Clients</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Suroj Buildcon Pvt. Ltd., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Scon Projects Pvt. Ltd., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Arwade Infrastructure Ltd., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Rajdeep Buildcon Pvt. Ltd., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Rohan Builders (I) Pvt. Ltd., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Kolte Patil Developers Limited., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Unico Infraengineers Pvt. Ltd., Kalyan</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Shubham EPC Pvt. Ltd., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">BOSCH Limited, Bangalore</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Denassa Buildcon, Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Wani Infra Projects Pvt. Ltd., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">RCON Pvt. Ltd., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Juniper Constructions Pvt. Ltd., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">A2Z Online Services Pvt. Ltd. (Panchashil Group), Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">Millennium Engineers And Contractors Ltd., Pune</li>
                        <li className="hover:bg-blue-100 hover:shadow-md transition-all duration-200 p-2 rounded-md">PVR Projects Limited., Hyderabad</li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default AboutUs;
