import React from 'react';
import { useNavigate } from 'react-router-dom';


const Career = () => {
    const navigate = useNavigate();

    const handleApplyNow = () => {
        navigate('/apply-form');
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow bg-gray-100 p-6">
                <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Careers</h1>
                    <p className="text-lg text-gray-700 mb-6 text-justify">
                        Join our dynamic and innovative team! At our company, we offer a collaborative work environment and opportunities for growth and development. We are committed to fostering a culture of excellence and inclusivity.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Software Engineer</h2>
                            <p className="text-gray-700 mb-4">
                                As a Software Engineer, you will be responsible for developing high-quality software solutions. You should have experience with JavaScript, React, and Node.js.
                            </p>
                            <button
                                onClick={handleApplyNow}
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Manager</h2>
                            <p className="text-gray-700 mb-4">
                                We are looking for an experienced Project Manager to lead our project teams. You should have excellent leadership skills and a background in managing software development projects.
                            </p>
                            <button
                                onClick={handleApplyNow}
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quality Assurance Tester</h2>
                            <p className="text-gray-700 mb-4">
                                Join our QA team to ensure the highest quality of our software products. Experience with automated testing tools and techniques is preferred.
                            </p>
                            <button
                                onClick={handleApplyNow}
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Apply Now
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Analyst</h2>
                            <p className="text-gray-700 mb-4">
                                As a Business Analyst, you will work closely with our teams to analyze business requirements and processes. Strong analytical skills and experience in the software industry are essential.
                            </p>
                            <button
                                onClick={handleApplyNow}
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Career;
