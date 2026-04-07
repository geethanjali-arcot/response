
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import HomePage from "./pages/HomePage";
// import CategoryDetailPage from "./pages/CategoryDetailPage";
// import CartPage from "./pages/CartPage";
// import PaymentPage from "./pages/PaymentPage";
// import WishlistPage from "./pages/WishlistPage";
// import CategoryPage from "./pages/CategoryPage";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import LocationStatePage from "./pages/LocationStatePage";
// import EnquiryPage from "./pages/EnquiryPage";


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/dataset/:slug" element={<CategoryDetailPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/payment" element={<PaymentPage />} />
//           <Route path="/wishlist" element={<WishlistPage />} />
//           <Route path="/category/:slug" element={<CategoryPage />} />
//           <Route path="/location-data" element={<LocationStatePage />} />
//         </Route>
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/enquiry" element={<EnquiryPage />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import HomePage from "./pages/HomePage";
// import CategoryDetailPage from "./pages/CategoryDetailPage";
// import CartPage from "./pages/CartPage";
// import PaymentPage from "./pages/PaymentPage";
// import WishlistPage from "./pages/WishlistPage";
// import CategoryPage from "./pages/CategoryPage";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import LocationStatePage from "./pages/LocationStatePage";
// import EnquiryPage from "./pages/EnquiryPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/dataset/:slug" element={<CategoryDetailPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/payment" element={<PaymentPage />} />
//           <Route path="/wishlist" element={<WishlistPage />} />
//           <Route path="/category/:slug" element={<CategoryPage />} />
//           <Route path="/location-data" element={<LocationStatePage />} />
//         </Route>

//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/enquiry" element={<EnquiryPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import WishlistPage from "./pages/WishlistPage";
import CategoryPage from "./pages/CategoryPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import EnquiryPage from "./pages/EnquiryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Navbar routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/dataset/:slug" element={<CategoryDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Outside navbar layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

