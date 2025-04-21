import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null); // Clear previous result

    // Here you would typically make an API call to your backend
    // to send the name, email, query, and message.

    // For this example, we'll simulate a successful submission after a short delay.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionResult({
        success: true,
        text: "Your message has been sent!",
      });
      setName("");
      setEmail("");
      setQuery("");
      setMessage("");
    }, 1500);

    // In a real application, you would do something like this:
    // try {
    //   const response = await fetch('/api/submit-contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name, email, query, message }),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     setSubmissionResult({ success: true, text: data.message || 'Your message has been sent!' });
    //     setName('');
    //     setEmail('');
    //     setQuery('');
    //     setMessage('');
    //   } else {
    //     setSubmissionResult({ success: false, text: data.error || 'Something went wrong. Please try again.' });
    //   }
    // } catch (error) {
    //   setIsSubmitting(false);
    //   setSubmissionResult({ success: false, text: 'An unexpected error occurred.' });
    //   console.error('Submission error:', error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section id="contact" className="bg-[#0f1a20] text-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Contact Form */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 text-base md:text-lg">
            Please fill out the form below to send us your query.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-[#1a2a33] p-6 md:p-8 rounded-2xl shadow-lg"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2 text-gray-300"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg bg-[#0f1a20] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2 text-gray-300"
            >
              Message:
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-[#0f1a20] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`relative overflow-hidden group z-10 bg-red-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none transition-all duration-300 ease-in-out 
              ${
              isSubmitting? "opacity-50 cursor-not-allowed": "hover:shadow-lg hover:bg-red-700 active:scale-95"}`}
            >
              <span className="relative z-20">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              {/* Fancy hover background effect */}
              <span className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-20 transition duration-300 z-0"></span>
            </button>
          </div>
          {submissionResult && (
            <div
              className={`mt-6 text-center ${
                submissionResult.success ? "text-green-400" : "text-red-400"
              }`}
            >
              {submissionResult.text}
            </div>
          )}
        </form>

        {/* Footer-style Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 text-gray-300">
          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Information
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-white hover:translate-x-1 transition">
                About Us
              </li>
              <li className="hover:text-white hover:translate-x-1 transition">
                Contact Us
              </li>
              <li className="hover:text-white hover:translate-x-1 transition">
                Delivery
              </li>
              <li className="hover:text-white hover:translate-x-1 transition">
                Payment Info
              </li>
            </ul>
          </div>

          {/* Custom Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Custom Links
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-white hover:translate-x-1 transition">
                My Account
              </li>
              <li className="hover:text-white hover:translate-x-1 transition">
                Prices Drop
              </li>
              <li className="hover:text-white hover:translate-x-1 transition">
                New Products
              </li>
              <li className="hover:text-white hover:translate-x-1 transition">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Contact Numbers */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <p className="mb-2 hover:text-white transition">
              📍 Farmview Super Market, Dhaka
            </p>
            <p className="mb-1 hover:text-white transition">
              📞 Store: +8801641757175
            </p>
            <p className="mb-1 hover:text-white transition">
              🚚 Delivery: +8801919646416
            </p>
            <p className="hover:text-white transition">
              📨 Info: +8801717062205
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
