'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() 

{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to submit");
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            For enquiries, quotes, or project consultations — our team is ready to help. Use the form or reach us directly via phone, email or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary text-white rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Phone</h4>
                  <div className="mt-1 text-blue-900">
                    <a href="tel:+971588094235" className="block hover:underline">+971 588 094 235</a>
                    <a href="tel:+971563478120" className="block hover:underline">+971 563 478 120</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary text-white rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Email</h4>
                  <div className="mt-1 text-blue-900">
                    <a href="mailto:qamaradvertising815@gmail.com" className="hover:underline">qamaradvertising815@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary text-white rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Address</h4>
                  <p className="mt-1 text-gray-700">
                    Qamar Advertising<br />
                    Industrial Area 13<br />
                    Sharjah, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://wa.me/971588094235"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
              >
                <span className="font-medium">WhatsApp</span>
              </a>
              <a
                href="https://maps.google.com/maps/dir//S121+Sharjah+United+Arab+Emirates/@25.2943748,55.4214603,12z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
              >
                <span className="font-medium">Get Directions</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded text-black">
                  Thank you — your message has been sent. We will contact you shortly.
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black-700 mb-2 text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black-700 mb-2 text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-black"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black-700 mb-2 text-black">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+971 5XX XXX XXX"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black-700 mb-2 text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project or enquiry"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-black
                  "
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-103"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
