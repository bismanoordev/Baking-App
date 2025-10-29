import React, { useState } from "react";

export default function Join() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-10 pt-20 bg-white">
      <a
        href="#"
        className="flex flex-col items-center bg-[#F5F3F2] 
                   md:flex-row w-full max-w-6xl  min-h-[60vh]
                   dark:bg-gray-800 dark:hover:bg-gray-700 
                   transition duration-300 overflow-hidden shadow-sm"
      >
        {/* Left: Text & Form */}
        <div className="flex flex-col justify-between w-full md:w-1/2 p-10 leading-relaxed">
          <h5 className="mb-4 text-5xl font-semibold tracking-tight text-black dark:text-white">
            Join Sally's Baking Challenge
          </h5>

          <p className="mb-6 text-lg font-normal text-gray-700 dark:text-gray-400">
          This recipe was a baking challenge! On the 1st of every month, I publish a new Sally’s Baking Challenge recipe. By subscribing below, you’ll receive a welcome email detailing the monthly challenges and how to win, plus all of the challenge recipes and updates as they’re published.
          </p>

          {/* --- Signup Form --- */}
          <form
            onSubmit={handleSubmit}
            className="bg-transparent w-full space-y-3 mb-4"
          >
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-[#d9c6be] bg-white 
                         focus:outline-none focus:border-[#b88a7f] 
                         focus:ring-2 focus:ring-[#b88a7f]/20 
                         placeholder:text-[#9b8f8b]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-[#d9c6be] bg-white 
                         focus:outline-none focus:border-[#b88a7f] 
                         focus:ring-2 focus:ring-[#b88a7f]/20 
                         placeholder:text-[#9b8f8b]"
            />

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 accent-[#b88a7f]"
              />
              <label className="font-semibold text-sm">
                I agree to receive emails from Sally's Baking Recipes!
              </label>
            </div>
          </form>

          {/* --- Button --- */}
          <button
            className="flex items-center justify-center gap-2 bg-black text-white 
                       w-44 px-7 py-3 rounded-full mx-3 mt-3 sm:mt-0 
                       hover:bg-[#CE7C77] hover:text-[#010101] 
                       transition-all duration-300 text-sm font-semibold 
                       shadow-md shadow-black/40"
          >
            YES, SIGN ME UP
          </button>

          <p className="text-sm pt-3 text-gray-700">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        {/* Right: Image */}
        <img
          className="object-cover w-full h-[25rem] md:h-[38rem] md:w-1/2"
          src="https://embed.filekitcdn.com/e/gjcUYKpfz85DEqCXjh6qUd/tcf4RCGCBuAjqLhmJARiD9"
          alt="Baking recipes"
        />
      </a>
    </div>
  );
}