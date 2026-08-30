import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Phone } from "lucide-react";

export default function ContactForm({ initialService = "", className = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    service: initialService || "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceOptions = [
    "Income Tax (ITR Filing)",
    "GST Registration & Returns",
    "TDS / TCS Filing",
    "Accounting & Bookkeeping",
    "Company Registration (Pvt Ltd / OPC)",
    "LLP Registration",
    "Partnership Firm Registration",
    "MSME / Udyam Registration",
    "MCA / ROC Compliance",
    "Import Export Code (IEC)",
    "HUF Registration",
    "Digital Signature (DSC)",
    "Other Consultation"
  ];

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Name must be at least 2 characters.";
    }

    const mobileClean = formData.mobile.replace(/\D/g, "");
    if (!formData.mobile.trim()) {
      errs.mobile = "Please enter your 10-digit mobile number.";
    } else if (mobileClean.length < 10) {
      errs.mobile = "Please enter a valid 10-digit mobile number.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      errs.service = "Please select a required service.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please enter your query or message.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable frontend service delivery
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setIsSuccess(true);
    } catch (err) {
      setErrors({ form: "An unexpected error occurred. Please try again or WhatsApp us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      service: initialService || "",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    const whatsappQuery = encodeURIComponent(
      `Hello Tax Mitra, I just submitted an enquiry for ${formData.service}. My Name: ${formData.fullName}, Mobile: ${formData.mobile}.`
    );

    return (
      <div className={`bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#F4B72A] shadow-xl text-center animate-fadeIn ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-[#003D2B] flex items-center justify-center mx-auto mb-4 text-[#003D2B]">
          <CheckCircle2 className="w-10 h-10 text-[#003D2B]" />
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-[#003D2B] uppercase tracking-tight">
          Thank You!
        </h3>
        
        <p className="text-sm font-bold text-slate-800 mt-1">
          Your enquiry has been received successfully.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-md mx-auto">
          Our senior tax consultant will review your query regarding{" "}
          <strong className="text-[#003D2B]">{formData.service}</strong> and connect with you at{" "}
          <strong className="text-[#003D2B]">{formData.mobile}</strong> or via email.
        </p>

        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919667574290?text=${whatsappQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Connect on WhatsApp Instantly</span>
          </a>

          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm transition-colors"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden ${className}`}
    >
      {/* Decorative top gold line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F4B72A]" />

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-[#003D2B] uppercase tracking-tight">
          SEND US AN ENQUIRY
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Fill in your details below for a quick confidential consultation.
        </p>
      </div>

      {errors.form && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700 font-medium">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{errors.form}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-black uppercase tracking-wider text-[#003D2B] mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F4B72A] transition-all ${
              errors.fullName ? "border-red-400 bg-red-50/30" : "border-slate-300"
            }`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Two column: Mobile & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="mobile" className="block text-xs font-black uppercase tracking-wider text-[#003D2B] mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="e.g. 9667574290"
              maxLength={12}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F4B72A] transition-all ${
                errors.mobile ? "border-red-400 bg-red-50/30" : "border-slate-300"
              }`}
            />
            {errors.mobile && (
              <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.mobile}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-black uppercase tracking-wider text-[#003D2B] mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@example.com"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F4B72A] transition-all ${
                errors.email ? "border-red-400 bg-red-50/30" : "border-slate-300"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Select Service */}
        <div>
          <label htmlFor="service" className="block text-xs font-black uppercase tracking-wider text-[#003D2B] mb-1">
            Select Service <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F4B72A] transition-all ${
              errors.service ? "border-red-400 bg-red-50/30" : "border-slate-300"
            }`}
          >
            <option value="">-- Choose a service requirement --</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.service}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-black uppercase tracking-wider text-[#003D2B] mb-1">
            Your Message / Query <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your requirements or questions..."
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F4B72A] transition-all resize-none ${
              errors.message ? "border-red-400 bg-red-50/30" : "border-slate-300"
            }`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-[#003D2B] hover:bg-[#07583F] text-[#F4B72A] hover:text-white border-2 border-[#F4B72A] font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#F4B72A]" />
              <span>SUBMITTING ENQUIRY...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>SUBMIT ENQUIRY</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-500 pt-1">
          🔒 100% Confidential. Your data is never shared with third parties.
        </p>
      </div>
    </form>
  );
}
