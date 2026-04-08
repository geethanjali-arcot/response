


import { useEffect, useState } from "react";

const initialFormData = {
  fullName: "",
  email: "",
  mobile: "",
  companyName: "",
  category: "",
  state: "",
  city: "",
  requirementType: "",
  message: "",
};

export default function EnquiryPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);

        setIsLoggedIn(true);
        setLoggedInUser(parsedUser);

        setFormData((prev) => ({
          ...prev,
          fullName: parsedUser.name || "",
          email: parsedUser.email || "",
          mobile: parsedUser.mobile || "",
        }));
      } catch (error) {
        console.error("Invalid user data in localStorage", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetGuestForm = () => {
    setFormData(initialFormData);
  };

  const resetUserForm = () => {
    setFormData({
      ...initialFormData,
      fullName: loggedInUser?.name || "",
      email: loggedInUser?.email || "",
      mobile: loggedInUser?.mobile || "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enquiryPayload = {
      id: Date.now(),
      userId: isLoggedIn ? loggedInUser?.id || null : null,
      enquiryType: isLoggedIn ? "registered" : "guest",
      fullName: formData.fullName,
      email: formData.email,
      mobile: formData.mobile,
      companyName: formData.companyName,
      category: formData.category,
      state: formData.state,
      city: formData.city,
      requirementType: formData.requirementType,
      message: formData.message,
      createdAt: new Date().toISOString(),
    };

    console.log("Enquiry Submitted:", enquiryPayload);

    const existingEnquiries =
      JSON.parse(localStorage.getItem("enquiries")) || [];

    localStorage.setItem(
      "enquiries",
      JSON.stringify([enquiryPayload, ...existingEnquiries])
    );

    alert("Your enquiry has been submitted successfully.");

    if (isLoggedIn) {
      resetUserForm();
    } else {
      resetGuestForm();
    }
  };

  return (
    <section className="bg-[#f8fafc] py-10">
      <div className="mx-auto max-w-[1100px] px-4">
        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
          <div className="rounded-[28px] bg-[#0f1535] p-8 text-white shadow-lg">
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-blue-200">
              Enquiry Form
            </p>

            <h1 className="mt-4 text-[30px] font-extrabold leading-tight">
              Tell us what business data you need
            </h1>

            <p className="mt-4 text-[15px] leading-7 text-slate-200">
              Submit your enquiry for category-wise, city-wise, or custom
              business datasets. Our team will contact you with pricing,
              availability, and next steps.
            </p>

            <div className="mt-8 space-y-4 text-[14px] text-slate-200">
              <div className="rounded-2xl bg-white/10 p-4">
                <h3 className="font-bold text-white">Custom Data Support</h3>
                <p className="mt-1 leading-6">
                  Ask for city-specific, category-specific, or bulk business
                  data.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <h3 className="font-bold text-white">Quick Response</h3>
                <p className="mt-1 leading-6">
                  Share your requirement clearly so we can respond faster.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <h3 className="font-bold text-white">Examples</h3>
                <p className="mt-1 leading-6">
                  Hyderabad architects data, builders database, hospital leads,
                  hostel contacts, overseas consultancy list.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[26px] font-extrabold text-[#0f1535]">
                  Send Enquiry
                </h2>

                <p className="mt-2 text-[14px] leading-7 text-slate-600">
                  {isLoggedIn
                    ? "You are logged in. Basic details are auto-filled."
                    : "You are using enquiry as guest. Fill all details and submit."}
                </p>
              </div>

              <span
                className={`rounded-full px-4 py-2 text-[12px] font-bold ${
                  isLoggedIn
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {isLoggedIn ? "Registered User" : "Guest User"}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    disabled={isLoggedIn}
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${
                      isLoggedIn
                        ? "border-slate-200 bg-slate-100 text-slate-500"
                        : "border-slate-300 focus:border-[#2563eb]"
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    disabled={isLoggedIn}
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${
                      isLoggedIn
                        ? "border-slate-200 bg-slate-100 text-slate-500"
                        : "border-slate-300 focus:border-[#2563eb]"
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-slate-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    disabled={isLoggedIn}
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${
                      isLoggedIn
                        ? "border-slate-200 bg-slate-100 text-slate-500"
                        : "border-slate-300 focus:border-[#2563eb]"
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-slate-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2563eb]"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-slate-700">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2563eb]"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Hospitals">Hospitals</option>
                    <option value="Hostels">Hostels</option>
                    <option value="Education">Education</option>
                    <option value="Overseas">Overseas</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-slate-700">
                    Requirement Type
                  </label>
                  <select
                    name="requirementType"
                    value={formData.requirementType}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2563eb]"
                    required
                  >
                    <option value="">Select requirement type</option>
                    <option value="Dataset Purchase">Dataset Purchase</option>
                    <option value="Custom Data Requirement">
                      Custom Data Requirement
                    </option>
                    <option value="Bulk Data Enquiry">Bulk Data Enquiry</option>
                    <option value="Pricing Enquiry">Pricing Enquiry</option>
                    <option value="Demo Request">Demo Request</option>
                    <option value="General Support">General Support</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-slate-700">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2563eb]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-slate-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2563eb]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[14px] font-semibold text-slate-700">
                  Message / Requirement Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Example: I need Hyderabad builders data with company name, phone number, email, and address."
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2563eb]"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-2xl bg-red-600 px-6 py-3 text-[15px] font-bold text-white transition hover:bg-red-700"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}