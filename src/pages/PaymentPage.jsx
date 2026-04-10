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
    <div className="rounded-xl border border-[#dbe7ff] bg-[#f8fbff] p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1d4ed8] text-white">
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
        className={`mt-2 text-[11px] font-semibold sm:text-xs ${
          completed || active ? "text-slate-900" : "text-slate-400"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  required = false,
  maxLength,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`h-12 w-full rounded-lg border px-4 text-sm outline-none transition ${
          error
            ? "border-red-400 bg-red-50 focus:border-red-500"
            : "border-slate-300 bg-white focus:border-[#1d4ed8]"
        }`}
      />

      {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
    </div>
  );
}

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const paymentData = location.state || {};

  const fromCart =
    Boolean(paymentData.fromCart) ||
    (Array.isArray(paymentData.cartItems) && paymentData.cartItems.length > 0);

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const cartItems = useMemo(() => {
    if (Array.isArray(paymentData.cartItems) && paymentData.cartItems.length > 0) {
      return paymentData.cartItems;
    }
    return getCartItems();
  }, [paymentData.cartItems]);

  const loggedInUser = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } catch {
      return {};
    }
  }, []);

  const [buyerInfo, setBuyerInfo] = useState({
    firstName: loggedInUser.name ? loggedInUser.name.split(" ")[0] : "",
    lastName: loggedInUser.name
      ? loggedInUser.name.split(" ").slice(1).join(" ")
      : "",
    email: loggedInUser.email || "",
    phone: loggedInUser.mobile || "",
    address: "",
    state: "",
    zip: "",
    city: "",
    note: "",
  });

  const [formData, setFormData] = useState({
    cardName: loggedInUser.name || "",
    cardNumber: "",
    cvv: "",
    month: "",
    year: "",
    upiId: "",
  });

  const [errors, setErrors] = useState({});

  const orderTitle = fromCart
    ? `${cartItems.length} item${cartItems.length === 1 ? "" : "s"} from cart`
    : paymentData.title || "Selected Dataset";

  const subtotal = useMemo(() => {
    if (typeof paymentData.subtotal === "number") {
      return paymentData.subtotal;
    }

    if (fromCart) {
      return cartItems.reduce(
        (sum, item) => sum + getNumericPrice(item.price) * (item.quantity || 1),
        0
      );
    }

    return getNumericPrice(paymentData.price);
  }, [paymentData.subtotal, fromCart, cartItems, paymentData.price]);

  const platformFee =
    typeof paymentData.platformFee === "number"
      ? paymentData.platformFee
      : subtotal > 0
      ? 29
      : 0;

  const totalAmount =
    typeof paymentData.total === "number"
      ? paymentData.total
      : subtotal + platformFee;

  const finalPrice = `₹ ${totalAmount.toFixed(2)}`;

  const handleBuyerChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "zip") {
      updatedValue = value.replace(/\D/g, "").slice(0, 6);
    }

    setBuyerInfo((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    if (submitAttempted) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handlePaymentFieldChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "cardNumber") {
      updatedValue = value.replace(/\D/g, "").slice(0, 16);
    }

    if (name === "cvv") {
      updatedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    if (name === "month") {
      updatedValue = value.replace(/\D/g, "").slice(0, 2);
    }

    if (name === "year") {
      updatedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    if (submitAttempted) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!buyerInfo.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!buyerInfo.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!buyerInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyerInfo.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!buyerInfo.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(buyerInfo.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!buyerInfo.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!buyerInfo.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!buyerInfo.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!buyerInfo.zip.trim()) {
      newErrors.zip = "ZIP / Pincode is required";
    } else if (!/^\d{6}$/.test(buyerInfo.zip)) {
      newErrors.zip = "ZIP / Pincode must be 6 digits";
    }

    if (paymentMethod === "card") {
      if (!formData.cardName.trim()) {
        newErrors.cardName = "Name on card is required";
      }

      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required";
      } else if (!/^\d{16}$/.test(formData.cardNumber)) {
        newErrors.cardNumber = "Card number must be 16 digits";
      }

      if (!formData.cvv.trim()) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV must be 3 digits";
      }

      if (!formData.month.trim()) {
        newErrors.month = "Month is required";
      } else {
        const monthNum = Number(formData.month);
        if (monthNum < 1 || monthNum > 12) {
          newErrors.month = "Enter valid month";
        }
      }

      if (!formData.year.trim()) {
        newErrors.year = "Year is required";
      } else if (!/^\d{4}$/.test(formData.year)) {
        newErrors.year = "Enter valid year";
      }
    }

    if (paymentMethod === "upi") {
      if (!formData.upiId.trim()) {
        newErrors.upiId = "UPI ID is required";
      } else if (!/^[\w.-]+@[\w.-]+$/.test(formData.upiId)) {
        newErrors.upiId = "Enter valid UPI ID";
      }
    }

    if (paymentMethod === "bank") {
      if (!buyerInfo.note.trim()) {
        newErrors.note = "Transaction reference is required for bank transfer";
      }
    }

    if (fromCart && cartItems.length === 0) {
      newErrors.cart = "Your cart is empty";
    }

    if (!fromCart && !paymentData.itemKey && !paymentData.title) {
      newErrors.product = "No dataset selected for payment";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (!validateForm()) return;

    const purchased = getPurchasedItems();

    if (
      !fromCart &&
      paymentData.itemKey &&
      purchased.includes(paymentData.itemKey)
    ) {
      alert("You already purchased this dataset");
      navigate("/buyer", {
        state: {
          success: true,
          fromPayment: true,
        },
      });
      return;
    }

    if (fromCart) {
      const idsToAdd = cartItems.map((item) => item.id || item.slug);
      const updatedPurchased = [...new Set([...purchased, ...idsToAdd])];

      setPurchasedItems(updatedPurchased);
      setCartItems([]);

      window.dispatchEvent(new Event("purchasedUpdated"));
      window.dispatchEvent(new Event("cartUpdated"));

      alert("Payment successful. Your datasets are now available in buyer page.");
      navigate("/buyer", {
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

      alert("Payment successful. Dataset unlocked successfully.");
      navigate("/buyer", {
        state: {
          success: true,
          fromPayment: true,
        },
      });
      return;
    }

    navigate("/buyer", {
      state: {
        success: true,
        fromPayment: true,
      },
    });
  };

  return (
    <section className="min-h-screen bg-[#f4f7fb] py-6 sm:py-8">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
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
              <span className="font-semibold text-[#1d4ed8]">Payment</span>
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
                {paymentData.title || "Dataset"}
              </span>
              <span>/</span>
              <span className="font-semibold text-[#1d4ed8]">Payment</span>
            </>
          )}
        </div>

        <div className="rounded-2xl bg-white shadow-sm">
          <div className="border-b border-slate-200 px-4 py-5 sm:px-8 sm:py-6">
            <div className="mx-auto flex max-w-[760px] items-center justify-between gap-2">
              <StepCircle
                completed={true}
                active={false}
                label="Summary"
                onClick={() =>
                  fromCart
                    ? navigate("/cart")
                    : paymentData.itemKey
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
                onClick={() => navigate("/buyer")}
              />
            </div>
          </div>

          <form onSubmit={handlePayment} className="px-4 py-6 sm:px-8 sm:py-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h2 className="text-xl font-bold text-[#1d4ed8] sm:text-2xl">
                    Buyer Information
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Enter customer details for data purchase confirmation
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <InputField
                      label="First Name"
                      name="firstName"
                      value={buyerInfo.firstName}
                      onChange={handleBuyerChange}
                      placeholder="Enter first name"
                      error={errors.firstName}
                      required
                    />

                    <InputField
                      label="Last Name"
                      name="lastName"
                      value={buyerInfo.lastName}
                      onChange={handleBuyerChange}
                      placeholder="Enter last name"
                      error={errors.lastName}
                      required
                    />

                    <InputField
                      label="Email"
                      name="email"
                      value={buyerInfo.email}
                      onChange={handleBuyerChange}
                      placeholder="Enter email"
                      error={errors.email}
                      type="email"
                      required
                    />

                    <InputField
                      label="Phone Number"
                      name="phone"
                      value={buyerInfo.phone}
                      onChange={handleBuyerChange}
                      placeholder="Enter 10 digit phone number"
                      error={errors.phone}
                      maxLength={10}
                      required
                    />

                    <div className="sm:col-span-2">
                      <InputField
                        label="Address"
                        name="address"
                        value={buyerInfo.address}
                        onChange={handleBuyerChange}
                        placeholder="Enter full address"
                        error={errors.address}
                        required
                      />
                    </div>

                    <InputField
                      label="State"
                      name="state"
                      value={buyerInfo.state}
                      onChange={handleBuyerChange}
                      placeholder="Enter state"
                      error={errors.state}
                      required
                    />

                    <InputField
                      label="ZIP / Pincode"
                      name="zip"
                      value={buyerInfo.zip}
                      onChange={handleBuyerChange}
                      placeholder="Enter pincode"
                      error={errors.zip}
                      maxLength={6}
                      required
                    />

                    <div className="sm:col-span-2">
                      <InputField
                        label="City"
                        name="city"
                        value={buyerInfo.city}
                        onChange={handleBuyerChange}
                        placeholder="Enter city"
                        error={errors.city}
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Note / Reference {paymentMethod === "bank" && <span className="text-red-500">*</span>}
                      </label>
                      <textarea
                        name="note"
                        rows="4"
                        value={buyerInfo.note}
                        onChange={handleBuyerChange}
                        className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition ${
                          errors.note
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : "border-slate-300 bg-white focus:border-[#1d4ed8]"
                        }`}
                        placeholder={
                          paymentMethod === "bank"
                            ? "Enter transaction reference number"
                            : "Any special note..."
                        }
                      />
                      {errors.note ? (
                        <p className="mt-1 text-xs text-red-500">{errors.note}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-[#1d4ed8] sm:text-2xl">
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
                      className={`rounded-xl border p-4 text-center transition ${
                        paymentMethod === "card"
                          ? "border-[#e11d48] bg-rose-50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <CreditCard className="mx-auto h-7 w-7 text-[#1d4ed8]" />
                      <p className="mt-2 text-sm font-semibold">Card</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("upi")}
                      className={`rounded-xl border p-4 text-center transition ${
                        paymentMethod === "upi"
                          ? "border-[#e11d48] bg-rose-50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <Smartphone className="mx-auto h-7 w-7 text-[#1d4ed8]" />
                      <p className="mt-2 text-sm font-semibold">UPI</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("bank")}
                      className={`rounded-xl border p-4 text-center transition ${
                        paymentMethod === "bank"
                          ? "border-[#e11d48] bg-rose-50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <Landmark className="mx-auto h-7 w-7 text-[#1d4ed8]" />
                      <p className="mt-2 text-sm font-semibold">Bank</p>
                    </button>
                  </div>

                  <div className="mt-6">
                    {paymentMethod === "card" && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <InputField
                            label="Name on Card"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handlePaymentFieldChange}
                            placeholder="Enter card holder name"
                            error={errors.cardName}
                            required
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <InputField
                            label="Card Number"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handlePaymentFieldChange}
                            placeholder="Enter 16 digit card number"
                            error={errors.cardNumber}
                            maxLength={16}
                            required
                          />
                        </div>

                        <InputField
                          label="CVV"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handlePaymentFieldChange}
                          placeholder="Enter CVV"
                          error={errors.cvv}
                          type="password"
                          maxLength={3}
                          required
                        />

                        <div className="grid grid-cols-2 gap-3 sm:col-span-1">
                          <InputField
                            label="Month"
                            name="month"
                            value={formData.month}
                            onChange={handlePaymentFieldChange}
                            placeholder="MM"
                            error={errors.month}
                            maxLength={2}
                            required
                          />

                          <InputField
                            label="Year"
                            name="year"
                            value={formData.year}
                            onChange={handlePaymentFieldChange}
                            placeholder="YYYY"
                            error={errors.year}
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "upi" && (
                      <div>
                        <InputField
                          label="UPI ID"
                          name="upiId"
                          value={formData.upiId}
                          onChange={handlePaymentFieldChange}
                          placeholder="example@upi"
                          error={errors.upiId}
                          required
                        />
                      </div>
                    )}

                    {paymentMethod === "bank" && (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm font-semibold text-slate-900">
                          Bank Transfer Details
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          Transfer the total amount and enter the transaction
                          reference in the note field. After confirmation, the
                          purchased dataset will be available in your buyer page.
                        </p>
                      </div>
                    )}
                  </div>

                  {(errors.cart || errors.product) && (
                    <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                      {errors.cart || errors.product}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[#e11d48] px-6 text-sm font-bold text-white transition hover:bg-[#be123c]"
                  >
                    Pay Now
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-[#1d4ed8]">
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
                            <p className="text-sm font-bold text-[#1d4ed8]">
                              ₹{" "}
                              {(
                                getNumericPrice(item.price) * (item.quantity || 1)
                              ).toFixed(2)}
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
                              alt={paymentData.title || "Dataset"}
                              className="h-full w-full object-cover"
                            />
                          ) : null}
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900">
                            {paymentData.title || "Selected Dataset"}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {paymentData.mode === "preview-unlock"
                              ? "Unlock full dataset access"
                              : "Direct dataset purchase"}
                          </p>
                          <p className="mt-2 text-sm font-bold text-[#1d4ed8]">
                            ₹ {getNumericPrice(paymentData.price).toFixed(2)}
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

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1">
                  <BenefitCard
                    icon={<Zap className="h-5 w-5" />}
                    title="Instant Access"
                    text="After successful payment, your purchased data is unlocked in buyer page."
                  />
                  <BenefitCard
                    icon={<ShieldCheck className="h-5 w-5" />}
                    title="Secure Checkout"
                    text="Use card, UPI, or bank transfer for safe payment flow."
                  />
                  <BenefitCard
                    icon={<BadgeCheck className="h-5 w-5" />}
                    title="Verified Data"
                    text="Professional purchase experience for trusted business datasets."
                  />
                  <BenefitCard
                    icon={<RotateCcw className="h-5 w-5" />}
                    title="Easy Purchase"
                    text="Simple checkout flow for single dataset or full cart purchase."
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}