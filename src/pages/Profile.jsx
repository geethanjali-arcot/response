// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: localStorage.getItem("name") || "Demo User",
    email: localStorage.getItem("user") || "demo@example.com",
    mobile: localStorage.getItem("mobile") || "9876543210",
  });

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login"); // redirect to login if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-start justify-center px-4 pt-8">
        <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png" // default image
              alt="Profile"
              className="rounded-full w-32 h-32 mb-4 border-4 border-blue-500"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
            <p className="text-gray-500 mb-1">{user.email}</p>
            <p className="text-gray-500 mb-4">Mobile: {user.mobile}</p>
          </div>

          {/* User Info Cards */}
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border rounded-lg bg-gray-50">
              <span className="font-medium text-gray-700">Full Name</span>
              <span className="text-gray-900">{user.name}</span>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-lg bg-gray-50">
              <span className="font-medium text-gray-700">Email</span>
              <span className="text-gray-900">{user.email}</span>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-lg bg-gray-50">
              <span className="font-medium text-gray-700">Mobile</span>
              <span className="text-gray-900">{user.mobile}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={handleLogout}
              className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Logout
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full py-3 border border-gray-300 rounded-lg text-gray-800 font-semibold hover:bg-gray-100 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}