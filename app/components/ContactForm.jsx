"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Enter a valid email";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0067B1] text-white px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column: Contact Info */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Get in touch</h2>
          <div className="w-10 border-t-2 border-white mb-6" />

          <p className="mb-6 text-gray-100 text-base sm:text-lg">For general enquiries</p>

          <p className="font-semibold">Address :</p>
          <p className="mb-4 text-gray-200 text-sm sm:text-base">
            110, 16th Road, Chembur, Mumbai – 400071
          </p>

          <p className="font-semibold">Phone :</p>
          <p className="mb-4 text-gray-200 text-sm sm:text-base">+91 22 25208822</p>

          <p className="font-semibold">Email :</p>
          <p className="text-gray-200 text-sm sm:text-base">info@supremegroup.co.in</p>
        </div>

        {/* Right Column: Form */}
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-2 placeholder-white"
            />
            {errors.name && (
              <p className="text-red-300 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-2 placeholder-white"
            />
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-2 placeholder-white"
            />
            {errors.subject && (
              <p className="text-red-300 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none py-2 placeholder-white"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
          >
            Send
          </button>

          {submitted && (
            <div className="mt-4 text-green-300 font-medium">
              ✅ Form submitted successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
