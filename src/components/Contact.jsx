import { useState } from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from './Ani';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [ref, inView] = useInViewAnimation();
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    const wordCount = formData.message.trim().split(/\s+/).length;
    if (wordCount < 15) {
      newErrors.message = "Message must be at least 15 words.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Check if EmailJS credentials are present
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials are missing. Check your .env file.");
      alert("Email service is not configured correctly. Please use the direct email link below.");
      return;
    }

    setIsSending(true);
    console.log("Sending email via EmailJS...");

    emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,      // Matches {{name}} in template
        email: formData.email,    // Matches {{email}} in template (used for To Email)
        reply_to: formData.email,
        title: "Contact Form Inquiry", // Matches {{title}} in template
        message: formData.message,
      },
      publicKey
    )
    .then((response) => {
      console.log("EmailJS Success:", response.status, response.text);
      alert("Message sent successfully! 🚀");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again or reach out directly.");
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="section flex justify-center items-center min-h-screen transition-all duration-1000 ease-in-out"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md border border-blue-200 dark:border-gray-700 shadow-blue-300">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">Contact</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">Feel free to drop me a message!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-blue-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-blue-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-blue-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full font-semibold py-2 rounded-lg shadow-md transition-all duration-300 
              ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}`}
          >
            {isSending ? "Sending..." : "Send Message ✉️"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Or reach out directly:
          <div className="mt-2">
            <a href="mailto:talatsiddiqui028@gmail.com" className="text-blue-600 hover:underline block">
              📧 Email
            </a>
            <a href="https://github.com/t-emit" className="text-blue-600 hover:underline block">
              💻 Github
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
