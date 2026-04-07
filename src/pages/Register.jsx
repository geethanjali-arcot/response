// // // src/pages/Register.jsx
// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";

// // export default function Register() {
// //   const navigate = useNavigate();
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [mobile, setMobile] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [user, setUser] = useState(localStorage.getItem("user") || null);

// //   useEffect(() => {
// //     if (user) {
// //       navigate("/"); // redirect if already logged in
// //     }
// //   }, [user, navigate]);

// //   const handleRegister = (e) => {
// //     e.preventDefault();
// //     if (!name || !email || !mobile || !password || !confirmPassword) {
// //       alert("Please fill all fields");
// //       return;
// //     }
// //     if (password !== confirmPassword) {
// //       alert("Passwords do not match");
// //       return;
// //     }
// //     // Simulate registration by saving user in localStorage
// //     localStorage.setItem("user", email);
// //     setUser(email);
// //     navigate("/"); // redirect to homepage after register
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="min-h-screen flex items-start justify-center bg-gray-100 px-4 pt-6">
// //         <form
// //           onSubmit={handleRegister}
// //           className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
// //         >
// //           <h2 className="text-2xl font-bold mb-6 text-center text-[#0f1535]">
// //             Register
// //           </h2>

// //           <input
// //             type="text"
// //             placeholder="Full Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
// //           />

// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
// //           />

// //           <input
// //             type="text"
// //             placeholder="Mobile Number"
// //             value={mobile}
// //             onChange={(e) => setMobile(e.target.value)}
// //             className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
// //           />

// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
// //           />

// //           <input
// //             type="password"
// //             placeholder="Confirm Password"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //             className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
// //           />

// //           <button className="w-full py-3 bg-red-500 text-white rounded hover:bg-blue-600 transition mb-2">
// //             Register
// //           </button>

// //           <button
// //             type="button"
// //             onClick={() => navigate("/login")}
// //             className="w-full py-3 border border-gray-300 rounded text-[#0f1535] hover:bg-gray-50 transition mb-2"
// //           >
// //             Go to Login
// //           </button>

// //           <button
// //             type="button"
// //             onClick={() => navigate("/")}
// //             className="w-full py-3 border border-gray-300 rounded text-[#0f1535] hover:bg-gray-50 transition"
// //           >
// //             Back to Home
// //           </button>
// //         </form>
// //       </div>
// //     </>
// //   );
// // }


// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { addToCart, addToWishlist } from "../utils/cart";

// export default function Register() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [user, setUser] = useState(localStorage.getItem("user") || null);

//   useEffect(() => {
//     if (user && !location.state?.action) {
//       navigate("/");
//     }
//   }, [user, navigate, location.state]);

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (!name || !email || !mobile || !password || !confirmPassword) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const userData = {
//       name,
//       email,
//       mobile,
//     };

//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(JSON.stringify(userData));

//     const action = location.state?.action;
//     const product = location.state?.product;
//     const from = location.state?.from || "/";

//     if (action === "addToCart" && product) {
//       addToCart(product);
//       navigate("/cart");
//       return;
//     }

//     if (action === "buyNow" && product) {
//       addToCart(product);
//       navigate("/payment", {
//         state: {
//           title: product.title,
//           price: product.price,
//           image: product.heroImage,
//           itemKey: product.slug,
//           fromCart: false,
//         },
//       });
//       return;
//     }

//     if (action === "wishlist" && product) {
//       addToWishlist(product);
//       navigate(from);
//       return;
//     }

//     navigate("/");
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex min-h-screen items-start justify-center bg-gray-100 px-4 pt-6">
//         <form
//           onSubmit={handleRegister}
//           className="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
//         >
//           <h2 className="mb-6 text-center text-2xl font-bold text-[#0f1535]">
//             Register
//           </h2>

//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <input
//             type="text"
//             placeholder="Mobile Number"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />

//           <button className="mb-2 w-full rounded bg-red-500 py-3 text-white transition hover:bg-red-600">
//             Register
//           </button>

//           <button
//             type="button"
//             onClick={() => navigate("/login", { state: location.state })}
//             className="mb-2 w-full rounded border border-gray-300 py-3 text-[#0f1535] transition hover:bg-gray-50"
//           >
//             Go to Login
//           </button>

//           <button
//             type="button"
//             onClick={() => navigate("/")}
//             className="w-full rounded border border-gray-300 py-3 text-[#0f1535] transition hover:bg-gray-50"
//           >
//             Back to Home
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }




import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser && !location.state?.action) {
      navigate("/");
    }
  }, [navigate, location.state]);

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

    const registeredUser = {
      name,
      email,
      mobile,
      password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(registeredUser));

    alert("Registration successful. Please login now.");

    navigate("/login", {
      state: location.state || {},
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-start justify-center bg-gray-100 px-4 pt-6">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-[#0f1535]">
            Register
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button className="mb-2 w-full rounded bg-red-500 py-3 text-white transition hover:bg-red-600">
            Register
          </button>

          <button
            type="button"
            onClick={() => navigate("/login", { state: location.state })}
            className="mb-2 w-full rounded border border-gray-300 py-3 text-[#0f1535] transition hover:bg-gray-50"
          >
            Go to Login
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full rounded border border-gray-300 py-3 text-[#0f1535] transition hover:bg-gray-50"
          >
            Back to Home
          </button>
        </form>
      </div>
    </>
  );
}