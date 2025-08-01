import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        📞 Contact Us
      </h1>
      <form className="flex flex-col gap-4">
        <input
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Name"
        />
        <textarea
          rows={4}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Message"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
