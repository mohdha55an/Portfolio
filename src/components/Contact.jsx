import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Footer from './Footer'

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send("service_03l4net", "template_22e9qhk", formData, "T_Q9g9IiXa3kj1nR1")
        .then(() => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <>
    <div className="flex flex-col md:flex-row md:space-x-12 py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex-1">
        <h1 className="flex text-center place-items-center justify-center text-3xl font-bold mb-12">Contact</h1>
        <div className="mb-8 pt-7 md:ml-16">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Let's Talk
          </h3>
          <p className="font-semibold">I'm open to discussing.</p>
          <div className="mt-8">
            <FaEnvelope className="inline-block text-green-400 mr-2" />
            <a href="mailto:mohdha55az@gmail.com" className="hover:underline">
              mohdha55az@gmail.com
            </a>
          </div>
          <div className="mt-4">
            <FaPhone className="inline-block text-green-400 mr-2" />
            <a href="tel:+919494823530" className="hover:underline">
              +919494823530
            </a>
          </div>
          <div className="mt-4">
            <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
            <span>Hyderabad, Telangana, India - 500006</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center md:mt-10">
        <Toaster />
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg pt-10 md:mr-40">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your name"
              className={`mt-1 block w-full px-4 py-2 border ${
                touched.name && errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className={`mt-1 block w-full px-4 py-2 border ${
                touched.email && errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your message"
              rows="4"
              className={`mt-1 block w-full px-4 py-2 border ${
                touched.message && errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {touched.message && errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSending}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm
               text-sm font-medium text-white ${
              isSending ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
