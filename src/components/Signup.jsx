import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Add sign-up logic here
        console.log("Registered with", { username, password, email, address });
        // Redirect to Sign-In page
        alert("This page is still under construction")
        navigate('/signin')
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-700">Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
