import React, { useState } from 'react';

const ApplyForm = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        address: '',
        education: '',
        stream: '',
        tenthPercentage: '',
        twelfthPercentage: '',
        cgpa: '',
        dob: '',
        readyToWorkOnField: '',
        resume: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setForm({ ...form, [name]: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "21379e78-18e8-4cc5-a426-e86dec10a43f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("We will get back to yoy soon")
        }
      };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Job Application Form</h2>
                <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={form.age}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="education" className="block text-gray-700 font-bold mb-2">Highest Education Qualification</label>
                            <input
                                type="text"
                                id="education"
                                name="education"
                                value={form.education}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="stream" className="block text-gray-700 font-bold mb-2">Stream</label>
                            <input
                                type="text"
                                id="stream"
                                name="stream"
                                value={form.stream}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="tenthPercentage" className="block text-gray-700 font-bold mb-2">10th Percentage</label>
                            <input
                                type="number"
                                id="tenthPercentage"
                                name="tenthPercentage"
                                value={form.tenthPercentage}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="twelfthPercentage" className="block text-gray-700 font-bold mb-2">12th Percentage</label>
                            <input
                                type="number"
                                id="twelfthPercentage"
                                name="twelfthPercentage"
                                value={form.twelfthPercentage}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="cgpa" className="block text-gray-700 font-bold mb-2">CGPA for Graduation</label>
                            <input
                                type="number"
                                step="0.01"
                                id="cgpa"
                                name="cgpa"
                                value={form.cgpa}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={form.dob}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Ready to Work on Field</label>
                        <div className="flex items-center mb-2">
                            <input
                                type="radio"
                                id="readyYes"
                                name="readyToWorkOnField"
                                value="Yes"
                                checked={form.readyToWorkOnField === "Yes"}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label htmlFor="readyYes" className="text-gray-700">Yes</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="readyNo"
                                name="readyToWorkOnField"
                                value="No"
                                checked={form.readyToWorkOnField === "No"}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label htmlFor="readyNo" className="text-gray-700">No</label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">Upload Resume</label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplyForm;
