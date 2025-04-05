"use client";
import * as React from "react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    industry: "",
    message: "",
    agreeToContact: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      agreeToContact: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full"
      onSubmit={handleSubmit}
    >
      <div className="self-start">
        <h1 className="text-4xl font-bold leading-snug text-gray-800 uppercase">
          Contact Heromatic
        </h1>
        <p className="mt-3 text-base leading-loose text-slate-600">
          Fill the form below to discuss your automation needs
        </p>
      </div>

      <div className="flex flex-col mt-12 w-full max-w-[665px] max-md:mt-10 max-md:max-w-full">
        <div className="w-full text-xs max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-start w-full">
            <div className="flex-1 shrink basis-0 min-w-60">
              <label className="font-bold text-gray-800">
                <span className="font-medium">Full Name</span>
                <span className="font-medium text-[#EA4335]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Name"
                className="overflow-hidden px-3 py-3.5 mt-3 w-full bg-white border border-solid border-[#D5D8E2] text-slate-600"
                required
              />
            </div>
            <div className="flex-1 shrink basis-0 min-w-60">
              <label className="font-bold text-gray-800">
                <span className="font-medium">Phone Number</span>
                <span className="font-medium text-[#EA4335]">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Your Contact Number"
                className="overflow-hidden px-3 py-3.5 mt-3 w-full bg-white border border-solid border-[#D5D8E2] text-slate-600"
                required
              />
            </div>
          </div>

          <div className="flex gap-5 items-start mt-5 w-full">
            <div className="flex-1 shrink w-full basis-0 min-w-60">
              <label className="font-bold text-gray-800">
                <span className="font-medium">Email Address</span>
                <span className="font-medium text-[#EA4335]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="overflow-hidden px-3 py-3.5 mt-3 w-full bg-white border border-solid border-[#D5D8E2] text-slate-600"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-5 items-start mt-5 w-full">
            <div className="flex-1 shrink basis-0 min-w-60">
              <label className="font-bold text-gray-800">
                <span className="font-medium">Company Name</span>
                <span className="font-medium text-[#EA4335]">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your Company Name"
                className="overflow-hidden px-3 py-3.5 mt-3 w-full bg-white border border-solid border-[#D5D8E2] text-slate-600"
                required
              />
            </div>
            <div className="flex-1 shrink basis-0 min-w-60">
              <label className="font-bold text-gray-800">
                <span className="font-medium">Industry</span>
                <span className="font-medium text-[#EA4335]">*</span>
              </label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="Your Company Industry"
                className="overflow-hidden px-3 py-3.5 mt-3 w-full bg-white border border-solid border-[#D5D8E2] text-slate-600"
                required
              />
            </div>
          </div>

          <div className="flex gap-5 items-start mt-5 w-full">
            <div className="flex-1 shrink w-full basis-0 min-w-60">
              <label className="font-bold text-gray-800">
                <span className="font-medium">Message</span>
                <span className="font-medium text-[#EA4335]">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your automation requirements"
                className="overflow-hidden px-3 pt-3 pb-20 mt-3 w-full bg-white border border-solid border-[#D5D8E2] text-slate-600 min-h-[120px]"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center self-start mt-8">
          <div className="flex shrink-0 self-stretch my-auto w-10 h-1 bg-gray-100" />
          <div className="flex shrink-0 self-stretch my-auto w-10 h-1 bg-gray-100" />
          <div className="flex shrink-0 self-stretch my-auto w-10 h-1 bg-gray-100" />
        </div>

        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <div className="flex flex-col w-full text-sm text-gray-800 max-md:max-w-full">
            <p className="leading-6 max-md:max-w-full">
              We value your privacy and business needs. By submitting this form,
              you agree to be contacted by Heromatic regarding our automation
              and IoT solutions.
            </p>
            <label className="flex gap-3 items-center self-start mt-6 leading-relaxed cursor-pointer">
              <input
                type="checkbox"
                name="agreeToContact"
                checked={formData.agreeToContact}
                onChange={handleCheckboxChange}
                className="flex shrink-0 self-stretch my-auto w-5 h-5 border border-solid border-[#D5D8E2]"
                required
              />
              <span className="self-stretch my-auto">
                I agree to be contacted by Heromatic about their services
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="flex gap-2 items-center self-start px-4 py-2 mt-6 text-2xl leading-snug text-center text-white capitalize bg-[#3BA1E0] w-[215px] h-[40px]"
          >
            Submit Inquiry
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc725807c14044218a044f65b2af1b69/d6ef34cd0ba04668f6b2a3339f0e3a8ba069cbc0?placeholderIfAbsent=true"
              alt="Submit icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
        </div>
      </div>
    </form>
  );
};
