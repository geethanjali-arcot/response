import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      navigate("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);

      setUser({
        name: parsedUser.name || "Demo User",
        email: parsedUser.email || "demo@example.com",
        mobile: parsedUser.mobile || "9876543210",
      });
    } catch (error) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen items-start justify-center px-4 pt-8">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
            className="mb-4 h-32 w-32 rounded-full border-4 border-blue-500"
          />
          <h2 className="mb-1 text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="mb-1 text-gray-500">{user.email}</p>
          <p className="mb-4 text-gray-500">Mobile: {user.mobile}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border bg-gray-50 p-4">
            <span className="font-medium text-gray-700">Full Name</span>
            <span className="text-gray-900">{user.name}</span>
          </div>

          <div className="flex items-center justify-between rounded-lg border bg-gray-50 p-4">
            <span className="font-medium text-gray-700">Email</span>
            <span className="text-gray-900">{user.email}</span>
          </div>

          <div className="flex items-center justify-between rounded-lg border bg-gray-50 p-4">
            <span className="font-medium text-gray-700">Mobile</span>
            <span className="text-gray-900">{user.mobile}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleLogout}
            className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Logout
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full rounded-lg border border-gray-300 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}