// src/pages/Register.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  useEffect(() => {
    if (user) {
      navigate("/"); // redirect if already logged in
    }
  }, [user, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !mobile || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Simulate registration by saving user in localStorage
    localStorage.setItem("user", email);
    setUser(email);
    navigate("/"); // redirect to homepage after register
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-start justify-center bg-gray-100 px-4 pt-6">
        <form
          onSubmit={handleRegister}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-[#0f1535]">
            Register
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button className="w-full py-3 bg-red-500 text-white rounded hover:bg-blue-600 transition mb-2">
            Register
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full py-3 border border-gray-300 rounded text-[#0f1535] hover:bg-gray-50 transition mb-2"
          >
            Go to Login
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full py-3 border border-gray-300 rounded text-[#0f1535] hover:bg-gray-50 transition"
          >
            Back to Home
          </button>
        </form>
      </div>
    </>
  );
}