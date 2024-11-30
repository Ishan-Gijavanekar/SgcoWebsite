import React, { useState } from 'react';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSignIn = (e) => {
        e.preventDefault();
        // Add sign-in logic here
        console.log("Sign in with", { username, password });
        alert("This page is still under construction")
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>
                <form onSubmit={handleSignIn}>
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
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                        Sign In
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-700">Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Signin;
