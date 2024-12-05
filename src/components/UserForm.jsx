import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UserForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state?.userData || {
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    shortBio: '',
    profileImage: null
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profileImage: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile', { state: { userData: formData } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Basic Information</h2>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {/* Profile Image Upload */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 mb-4 relative">
                    {formData.profileImage ? (
                      <img
                        src={formData.profileImage}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <label className="cursor-pointer bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors">
                    Upload Photo
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>

                {/* Full Name */}
                <div className="relative">
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-pink-800"
                    placeholder="Full Name"
                    required
                  />
                  <label htmlFor="fullName" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-pink-800"
                    placeholder="Email Address"
                    required
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Email Address
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-pink-800"
                    placeholder="Phone Number"
                    required
                  />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Phone Number
                  </label>
                </div>

                {/* Date of Birth */}
                <div className="relative">
                  <input
                    id="dateOfBirth"
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-pink-800"
                    required
                  />
                  <label htmlFor="dateOfBirth" className="absolute left-0 -top-3.5 text-gray-600 text-sm">
                    Date of Birth
                  </label>
                </div>

                {/* Gender */}
                <div className="relative">
                  <label className="text-gray-600 text-sm mb-2 block">Gender</label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        className="mr-2 text-pink-800 focus:ring-pink-800"
                        required
                      />
                      Male
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        className="mr-2 text-pink-800 focus:ring-pink-800"
                      />
                      Female
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleChange}
                        className="mr-2 text-pink-800 focus:ring-pink-800"
                      />
                      Other
                    </label>
                  </div>
                </div>

                {/* Short Bio */}
                <div className="relative">
                  <textarea
                    id="shortBio"
                    name="shortBio"
                    value={formData.shortBio}
                    onChange={handleChange}
                    rows="4"
                    className="peer placeholder-transparent w-full border-2 border-gray-300 rounded-lg p-2 text-gray-900 focus:outline-none focus:border-pink-800"
                    placeholder="Short Bio"
                    required
                  ></textarea>
                  <label htmlFor="shortBio" className="absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm bg-white px-1">
                    Short Bio
                  </label>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-pink-800 text-white rounded-lg px-4 py-2 hover:bg-pink-900 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
