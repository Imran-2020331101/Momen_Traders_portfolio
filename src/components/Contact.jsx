import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
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
      setSubmissionResult({ success: true, text: 'Your message has been sent!' });
      setName('');
      setEmail('');
      setQuery('');
      setMessage('');
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
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Please fill out the form below to send us your query.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message:
            </label>
            <textarea
              id="message"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {submissionResult && (
            <div className={`mt-4 text-center ${submissionResult.success ? 'text-green-500' : 'text-red-500'}`}>
              {submissionResult.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;