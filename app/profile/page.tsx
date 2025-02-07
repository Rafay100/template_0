"use client";

import React, { useState } from "react";

const Profile = () => {
  // Dummy user data (replace with real data from API or DB)
  const [user, setUser] = useState({
    name: "Syed Rafay",
    email: "syedRafay12@gmail.com",
    bio: "Web Developer & Tech Enthusiast",
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4"> My Profile</h2>
        
        {/* Profile Info */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-white">
            {user.name[0]} {/* First letter of name */}
          </div>
          <h3 className="mt-4 text-xl font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500 mt-2">{user.bio}</p>
        </div>

        {/* Edit Profile Button */}
        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
