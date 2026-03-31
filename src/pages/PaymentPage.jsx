



import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CreditCard,
  Smartphone,
  Landmark,
  ShieldCheck,
  Zap,
  BadgeCheck,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

function getCartItems() {
  try {
    return JSON.parse(localStorage.getItem("cartItems") || "[]");
  } catch {
    return [];
  }
}

function setCartItems(items) {
  localStorage.setItem("cartItems", JSON.stringify(items));
}

function getPurchasedItems() {
  try {
    return JSON.parse(localStorage.getItem("purchasedItems") || "[]");
  } catch {
    return [];
  }
}

function setPurchasedItems(items) {
  localStorage.setItem("purchasedItems", JSON.stringify(items));
}

function getNumericPrice(price) {
  return Number(String(price || "0").replace(/[^\d.]/g, "")) || 0;
}

function BenefitCard({ icon, title, text }) {
  return (
    <div className="border border-[#dbe7ff] bg-[#f8fbff] p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f1535] text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-xs leading-5 text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
}

// function StepCircle({ active, completed, label }) {
//   return (
//     <div className="flex flex-col items-center">
//       <div
//         className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
//           completed || active
//             ? "border-[#e11d48] bg-[#e11d48] text-white"
//             : "border-slate-300 bg-white text-slate-400"
//         }`}
//       >
//         {completed ? <CheckCircle2 className="h-5 w-5" /> : null}
//       </div>
//       <span
//         className={`mt-2 text-xs font-semibold ${
//           completed || active ? "text-slate-900" : "text-slate-400"
//         }`}
//       >
//         {label}
//       </span>
//     </div>
//   );
// }
function StepCircle({ active, completed, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center"
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
          completed || active
            ? "border-[#e11d48] bg-[#e11d48] text-white"
            : "border-slate-300 bg-white text-slate-400"
        }`}
      >
        {completed ? <CheckCircle2 className="h-5 w-5" /> : null}
      </div>

      <span
        className={`mt-2 text-xs font-semibold ${
          completed || active ? "text-slate-900" : "text-slate-400"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const paymentData = location.state || {};
  const fromCart = Boolean(paymentData.fromCart);

  const [paymentMethod, setPaymentMethod] = useState("card");
  const cartItems = useMemo(() => getCartItems(), []);

  const [buyerInfo, setBuyerInfo] = useState({
    firstName: "",
    lastName: "",
    email: localStorage.getItem("loggedInUserEmail") || "",
    phone: "",
    address: "",
    state: "",
    zip: "",
    city: "",
    note: "",
  });

  const [formData, setFormData] = useState({
    cardName: localStorage.getItem("loggedInUserName") || "",
    cardNumber: "",
    cvv: "",
    month: "",
    year: "",
    upiId: "",
  });

  const orderTitle = fromCart
    ? `${cartItems.length} item${cartItems.length === 1 ? "" : "s"} from cart`
    : paymentData.title || "Selected Product";

  const subtotal = useMemo(() => {
    if (fromCart) {
      return cartItems.reduce(
        (sum, item) => sum + getNumericPrice(item.price) * (item.quantity || 1),
        0
      );
    }
    return getNumericPrice(paymentData.price);
  }, [fromCart, cartItems, paymentData.price]);

  const platformFee = subtotal > 0 ? 29 : 0;
  const totalAmount = subtotal + platformFee;
  const finalPrice = `₹ ${totalAmount.toFixed(2)}`;

  const handleBuyerChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateBuyerInfo = () => {
    if (
      !buyerInfo.firstName.trim() ||
      !buyerInfo.lastName.trim() ||
      !buyerInfo.email.trim() ||
      !buyerInfo.phone.trim() ||
      !buyerInfo.address.trim() ||
      !buyerInfo.state.trim() ||
      !buyerInfo.zip.trim() ||
      !buyerInfo.city.trim()
    ) {
      alert("Please fill all buyer information fields");
      return false;
    }
    return true;
  };

  const validatePaymentInfo = () => {
    if (paymentMethod === "card") {
      if (
        !formData.cardName.trim() ||
        !formData.cardNumber.trim() ||
        !formData.cvv.trim() ||
        !formData.month.trim() ||
        !formData.year.trim()
      ) {
        alert("Please fill all card details");
        return false;
      }
    }

    if (paymentMethod === "upi" && !formData.upiId.trim()) {
      alert("Please enter UPI ID");
      return false;
    }

    if (paymentMethod === "bank" && !buyerInfo.note.trim()) {
      alert("Please enter payment reference in note field");
      return false;
    }

    return true;
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!validateBuyerInfo()) return;
    if (!validatePaymentInfo()) return;

    const purchased = getPurchasedItems();

    if (
      !fromCart &&
      paymentData.itemKey &&
      purchased.includes(paymentData.itemKey)
    ) {
      alert("You already purchased this product");
      navigate("/buy-item");
      return;
    }

    if (fromCart) {
      const idsToAdd = cartItems.map((item) => item.id || item.slug);
      const updatedPurchased = [...new Set([...purchased, ...idsToAdd])];

      setPurchasedItems(updatedPurchased);
      setCartItems([]);

      window.dispatchEvent(new Event("purchasedUpdated"));
      window.dispatchEvent(new Event("cartUpdated"));

      navigate("/buy-item", {
        state: {
          success: true,
          fromPayment: true,
        },
      });
      return;
    }

    if (paymentData.itemKey) {
      const updatedPurchased = [...new Set([...purchased, paymentData.itemKey])];
      setPurchasedItems(updatedPurchased);

      window.dispatchEvent(new Event("purchasedUpdated"));

      navigate("/buy-item", {
        state: {
          success: true,
          fromPayment: true,
        },
      });
      return;
    }

    navigate("/buy-item");
  };

  return (
    <section className="min-h-screen bg-[#f4f7fb] py-8">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-[#e11d48]"
          >
            Home
          </span>

          <span>/</span>

          {fromCart ? (
  <>
    <span
      onClick={() => navigate("/cart")}
      className="cursor-pointer hover:text-[#e11d48]"
    >
      Cart
    </span>

    <span>/</span>

    <span className="font-semibold text-[#0f1535]">Payment</span>
  </>
) : (
  <>
    <span
      onClick={() =>
        paymentData.itemKey
          ? navigate(`/dataset/${paymentData.itemKey}`)
          : navigate("/")
      }
      className="cursor-pointer hover:text-[#e11d48]"
    >
      {paymentData.title || "Product"}
    </span>

    <span>/</span>

    <span className="font-semibold text-[#0f1535]">Payment</span>
  </>
)}
        </div>

        <div className="rounded-2xl bg-white shadow-sm">
          <div className="border-b border-slate-200 px-4 py-6 sm:px-8">
            <div className="mx-auto flex max-w-[760px] items-center justify-between">
  <StepCircle
    completed={true}
    active={false}
    label="Summary"
    onClick={() =>
      paymentData.itemKey
        ? navigate(`/dataset/${paymentData.itemKey}`)
        : navigate("/")
    }
  />

  <StepCircle
    completed={true}
    active={false}
    label="Checkout"
    onClick={() => navigate("/cart")}
  />

  <StepCircle
    completed={false}
    active={true}
    label="Payment"
    onClick={() => navigate("/payment", { state: paymentData })}
  />

  <StepCircle
    completed={false}
    active={false}
    label="Done"
    onClick={() => navigate("/")}
  />
</div>
          </div>

          <form onSubmit={handlePayment} className="px-4 py-8 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h2 className="text-2xl font-bold text-[#0f1535]">
                    Buyer Information
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Enter customer details for order confirmation
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={buyerInfo.firstName}
                        onChange={handleBuyerChange}
                        className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={buyerInfo.lastName}
                        onChange={handleBuyerChange}
                        className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={buyerInfo.email}
                        onChange={handleBuyerChange}
                        className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={buyerInfo.phone}
                        onChange={handleBuyerChange}
                        className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={buyerInfo.address}
                        onChange={handleBuyerChange}
                        className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={buyerInfo.state}
                        onChange={handleBuyerChange}
                        className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zip"
                        value={buyerInfo.zip}
                        onChange={handleBuyerChange}
                        className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={buyerInfo.city}
                        onChange={handleBuyerChange}
                        className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Note
                      </label>
                      <textarea
                        name="note"
                        rows="4"
                        value={buyerInfo.note}
                        onChange={handleBuyerChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#0f1535]"
                        placeholder="Any special note or payment reference..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-[#0f1535]">
                        Payment Method
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">{orderTitle}</p>
                    </div>
                    <div className="rounded-xl bg-[#f1f5f9] px-4 py-3 text-right">
                      <p className="text-xs font-semibold uppercase text-slate-500">
                        Total
                      </p>
                      <p className="mt-1 text-xl font-bold text-[#e11d48]">
                        {finalPrice}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`rounded-xl border p-4 text-center ${
                        paymentMethod === "card"
                          ? "border-[#e11d48] bg-rose-50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <CreditCard className="mx-auto h-7 w-7 text-[#0f1535]" />
                      <p className="mt-2 text-sm font-semibold">Card</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("upi")}
                      className={`rounded-xl border p-4 text-center ${
                        paymentMethod === "upi"
                          ? "border-[#e11d48] bg-rose-50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <Smartphone className="mx-auto h-7 w-7 text-[#0f1535]" />
                      <p className="mt-2 text-sm font-semibold">UPI</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("bank")}
                      className={`rounded-xl border p-4 text-center ${
                        paymentMethod === "bank"
                          ? "border-[#e11d48] bg-rose-50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <Landmark className="mx-auto h-7 w-7 text-[#0f1535]" />
                      <p className="mt-2 text-sm font-semibold">Bank</p>
                    </button>
                  </div>

                  <div className="mt-6">
                    {paymentMethod === "card" && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Name on Card
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handlePaymentFieldChange}
                            className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Card Number
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handlePaymentFieldChange}
                            placeholder="0000 0000 0000 0000"
                            className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-slate-700">
                            CVV
                          </label>
                          <input
                            type="password"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handlePaymentFieldChange}
                            className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                              Month
                            </label>
                            <input
                              type="text"
                              name="month"
                              value={formData.month}
                              onChange={handlePaymentFieldChange}
                              placeholder="08"
                              className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                              Year
                            </label>
                            <input
                              type="text"
                              name="year"
                              value={formData.year}
                              onChange={handlePaymentFieldChange}
                              placeholder="2026"
                              className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "upi" && (
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          UPI ID
                        </label>
                        <input
                          type="text"
                          name="upiId"
                          value={formData.upiId}
                          onChange={handlePaymentFieldChange}
                          placeholder="example@upi"
                          className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none focus:border-[#0f1535]"
                        />
                      </div>
                    )}

                    {paymentMethod === "bank" && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm font-semibold text-slate-900">
                          Bank Transfer Details
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          Transfer the amount and add the transaction reference
                          in the note field. After confirmation, product access
                          will be available in your bought items page.
                        </p>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[#e11d48] px-6 text-sm font-bold text-white transition hover:bg-[#be123c]"
                  >
                    Place Order
                  </button>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-[#0f1535]">
                    Order Summary
                  </h3>

                  <div className="mt-4 space-y-3">
                    {fromCart ? (
                      cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                          <div
                            key={item.id || item.slug || index}
                            className="flex items-center justify-between gap-3 rounded-xl bg-[#f8fafc] p-3"
                          >
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-slate-900">
                                {item.title}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                Qty: {item.quantity || 1}
                              </p>
                            </div>
                            <p className="text-sm font-bold text-[#0f1535]">
                              {item.price}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-slate-500">No cart items found.</p>
                      )
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl bg-[#f8fafc] p-4">
                        <div className="h-20 w-20 overflow-hidden rounded-xl bg-slate-100">
                          {paymentData.image ? (
                            <img
                              src={paymentData.image}
                              alt={paymentData.title || "Product"}
                              className="h-full w-full object-cover"
                            />
                          ) : null}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900">
                            {paymentData.title || "Selected Product"}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {paymentData.mode === "preview-unlock"
                              ? "Unlock full dataset"
                              : "Direct product purchase"}
                          </p>
                          <p className="mt-2 text-sm font-bold text-[#0f1535]">
                            {paymentData.price || "₹ 0.00"}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 border-t border-dashed border-slate-300 pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Subtotal</span>
                      <span className="font-medium text-slate-900">
                        ₹ {subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-slate-600">Platform Fee</span>
                      <span className="font-medium text-slate-900">
                        ₹ {platformFee.toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-base font-bold text-slate-900">
                        Total
                      </span>
                      <span className="text-lg font-bold text-[#e11d48]">
                        {finalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <BenefitCard
            icon={<Zap className="h-5 w-5" />}
            title="Fast Delivery"
            text="Purchased data access is handled quickly and smoothly for your users."
          />
          <BenefitCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Secure Checkout"
            text="Your customers can use card, UPI, and bank transfer payment methods."
          />
          <BenefitCard
            icon={<BadgeCheck className="h-5 w-5" />}
            title="Verified Data"
            text="Showcase trusted category-wise business data in a professional way."
          />
          <BenefitCard
            icon={<RotateCcw className="h-5 w-5" />}
            title="Support Ready"
            text="User-friendly purchase flow with clear order and payment support."
          />
        </div>
      </div>
    </section>
  );
}