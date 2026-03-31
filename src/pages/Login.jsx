// src/pages/Login.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  useEffect(() => {
    if (user) {
      navigate("/"); // redirect if already logged in
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", email);
      setUser(email);
      navigate("/"); // redirect to home
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-start justify-center bg-gray-100 px-4 pt-6">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-[#0f1535]">
            Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full py-3 bg-red-500 text-white rounded hover:bg-navyblue-700 transition mb-2">
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="w-full py-3 border border-gray-300 rounded text-[#0f1535] hover:bg-gray-50 transition mb-2"
          >
            Go to Register
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