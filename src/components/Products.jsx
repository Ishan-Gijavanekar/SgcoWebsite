import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import SiteMISImage from './images/sitemis.jpg'; // Replace with actual image path
// import GateMISImage from './images/gatemis.jpg'; // Replace with actual image path

const ProductsPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow bg-gray-100 p-6">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Products</h1>
                    <section className="mb-12">
                        <div className="flex flex-col md:flex-row items-center mb-8">
                            <img src="/SiteMisImage.png" alt="SiteMIS 10.0 Web Version" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"/>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">SiteMIS 10.0 Web Version</h2>
                                <p className="text-gray-600 mb-4">Designed to plan and track various operations at the construction site. Extensively covers all functionality at the construction site and is categorized under various modules, addressing 250+ operations.</p>
                                <ul className="list-disc list-inside text-gray-600 mb-4">
                                    <li>Estimation & Site Execution</li>
                                    <li>Materials Management</li>
                                    <li>Accounts</li>
                                    <li>Vehicle and Machinery Maintenance</li>
                                    <li>Quality Assurance/Quality Control</li>
                                </ul>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Module I: Estimation & Site Execution</h3>
                        <p className="text-gray-600 mb-4">Labour/Material Costing, Material Reconciliation, Labour Reconciliation, Various Progress Reports, Contractor’s Work Orders, and more.</p>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Module II: Materials Management</h3>
                        <p className="text-gray-600 mb-4">Material Indents/requisitions, Purchase Orders, Receipts of Goods, Issue/Return/Transfer of Material, Stock Ledger, Monthly/Periodic Stock Statements, and more.</p>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Module III: Accounts</h3>
                        <p className="text-gray-600 mb-4">Day-to-day Accounts transactions, Bill Booking, Receipt Vouchers, Payment Vouchers, Debit Notes, Credit Notes, and more.</p>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Module IV: Vehicle and Machinery Maintenance</h3>
                        <p className="text-gray-600 mb-4">History records of all vehicles, Daily status, Vehicle & Machinery Maintenance, Job card, Vehicle Performance, and more.</p>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Module V: Quality Assurance/Quality Control</h3>
                        <p className="text-gray-600 mb-4">Recording various laboratory tests, Test Equipment and its calibration details, Test Request Form, Test Planning/Job card, and more.</p>
                    </section>
                    <section className="mb-12">
                        <div className="flex flex-col md:flex-row items-center mb-8">
                            <img src="/GateMisImage.png" alt="GateMIS 4.0 Web Version" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"/>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">GateMIS 4.0 Web Version</h2>
                                <p className="text-gray-600 mb-4">Extension of Site-MIS, addresses requirements specific to employee & contractor registration, attendance, related compliance, and gate management.</p>
                                <ul className="list-disc list-inside text-gray-600 mb-4">
                                    <li>Creating Photo I-cards of Employees/Site Labours/Clients</li>
                                    <li>Gate In/Out entries based on Bar Code</li>
                                    <li>Labour category wise details, Daily attendance, and various reports</li>
                                    <li>Generation of various forms like Workmen Screening Form, Medical Certificate, and more</li>
                                    <li>Maintaining KYC documents as attachments for both contractors and workers</li>
                                    <li>Corporate Labour reports w.r.t. Category/Trade, contracting agency, headcount, and man hours</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default ProductsPage;
