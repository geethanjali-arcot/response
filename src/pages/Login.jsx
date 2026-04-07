// // // src/pages/Login.jsx
// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";

// // export default function Login() {
// //   const navigate = useNavigate();
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [user, setUser] = useState(localStorage.getItem("user") || null);

// //   useEffect(() => {
// //     if (user) {
// //       navigate("/"); // redirect if already logged in
// //     }
// //   }, [user, navigate]);

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     if (email && password) {
// //       localStorage.setItem("user", email);
// //       setUser(email);
// //       navigate("/"); // redirect to home
// //     } else {
// //       alert("Please enter email and password");
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="min-h-screen flex items-start justify-center bg-gray-100 px-4 pt-6">
// //         <form
// //           onSubmit={handleLogin}
// //           className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
// //         >
// //           <h2 className="text-2xl font-bold mb-6 text-center text-[#0f1535]">
// //             Login
// //           </h2>
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //           <button className="w-full py-3 bg-red-500 text-white rounded hover:bg-navyblue-700 transition mb-2">
// //             Login
// //           </button>
// //           <button
// //             type="button"
// //             onClick={() => navigate("/register")}
// //             className="w-full py-3 border border-gray-300 rounded text-[#0f1535] hover:bg-gray-50 transition mb-2"
// //           >
// //             Go to Register
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

// export default function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(localStorage.getItem("user") || null);

//   useEffect(() => {
//     if (user && !location.state?.action) {
//       navigate("/");
//     }
//   }, [user, navigate, location.state]);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please enter email and password");
//       return;
//     }

//     const userData = {
//       email,
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
//           onSubmit={handleLogin}
//           className="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
//         >
//           <h2 className="mb-6 text-center text-2xl font-bold text-[#0f1535]">
//             Login
//           </h2>

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button className="mb-2 w-full rounded bg-red-500 py-3 text-white transition hover:bg-red-600">
//             Login
//           </button>

//           <button
//             type="button"
//             onClick={() => navigate("/register", { state: location.state })}
//             className="mb-2 w-full rounded border border-gray-300 py-3 text-[#0f1535] transition hover:bg-gray-50"
//           >
//             Go to Register
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






// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { addToCart, addToWishlist } from "../utils/cart";

// export default function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser && !location.state?.action) {
//       navigate("/");
//     }
//   }, [navigate, location.state]);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please enter email and password");
//       return;
//     }

//     const storedRegisteredUser = localStorage.getItem("registeredUser");

//     if (!storedRegisteredUser) {
//       alert("You are a new user. Please register first.");
//       navigate("/register", { state: location.state || {} });
//       return;
//     }

//     const registeredUser = JSON.parse(storedRegisteredUser);

//     if (
//       registeredUser.email !== email ||
//       registeredUser.password !== password
//     ) {
//       alert("Invalid login details or please register first.");
//       return;
//     }

//     const loggedInUser = {
//       name: registeredUser.name,
//       email: registeredUser.email,
//       mobile: registeredUser.mobile,
//     };

//     localStorage.setItem("user", JSON.stringify(loggedInUser));

//     const action = location.state?.action;
//     const product = location.state?.product;
//     const from = location.state?.from || "/";

//     if (action === "addToCart" && product) {
//       addToCart(product);
//       navigate(from);
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
//           onSubmit={handleLogin}
//           className="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
//         >
//           <h2 className="mb-6 text-center text-2xl font-bold text-[#0f1535]">
//             Login
//           </h2>

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button className="mb-2 w-full rounded bg-red-500 py-3 text-white transition hover:bg-red-600">
//             Login
//           </button>

//           <button
//             type="button"
//             onClick={() => navigate("/register", { state: location.state })}
//             className="mb-2 w-full rounded border border-gray-300 py-3 text-[#0f1535] transition hover:bg-gray-50"
//           >
//             Go to Register
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
import { addToCart, addToWishlist } from "../utils/cart";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser && !location.state?.action) {
      navigate("/");
    }
  }, [navigate, location.state]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const storedRegisteredUser = localStorage.getItem("registeredUser");

    if (!storedRegisteredUser) {
      alert("You are a new user. Please register first.");
      navigate("/register", { state: location.state || {} });
      return;
    }

    const registeredUser = JSON.parse(storedRegisteredUser);

    const loginEmail = email.trim();
    const loginPassword = password.trim();

    console.log("typed email:", loginEmail);
    console.log("typed password:", loginPassword);
    console.log("stored registeredUser:", registeredUser);
    console.log("email match:", registeredUser.email.trim() === loginEmail);
    console.log(
      "password match:",
      registeredUser.password.trim() === loginPassword
    );

    if (
      registeredUser.email.trim() !== loginEmail ||
      registeredUser.password.trim() !== loginPassword
    ) {
      alert("Invalid login details or please register first.");
      return;
    }

    const loggedInUser = {
      name: registeredUser.name,
      email: registeredUser.email,
      mobile: registeredUser.mobile,
    };

    localStorage.setItem("user", JSON.stringify(loggedInUser));
    alert("Login successful");

    const action = location.state?.action;
    const product = location.state?.product;
    const from = location.state?.from || "/";

    if (action === "addToCart" && product) {
      addToCart(product);
      navigate(from);
      return;
    }

    if (action === "buyNow" && product) {
      addToCart(product);
      navigate("/payment", {
        state: {
          title: product.title,
          price: product.price,
          image: product.heroImage,
          itemKey: product.slug,
          fromCart: false,
        },
      });
      return;
    }

    if (action === "wishlist" && product) {
      addToWishlist(product);
      navigate(from);
      return;
    }

    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-start justify-center bg-gray-100 px-4 pt-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-[#0f1535]">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="mb-2 w-full rounded bg-red-500 py-3 text-white transition hover:bg-red-600">
            Login
          </button>

          <button
            type="button"
            onClick={() => navigate("/register", { state: location.state })}
            className="mb-2 w-full rounded border border-gray-300 py-3 text-[#0f1535] transition hover:bg-gray-50"
          >
            Go to Register
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