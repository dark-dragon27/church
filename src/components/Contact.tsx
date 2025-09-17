import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    prayerRequest: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', prayerRequest: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions, prayer requests, or just to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">123 Faith Street, Hope Valley, CA 12345</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@gracecommunity.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-yellow-500 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Office Hours</p>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: After Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-700 rounded-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 mr-3" />
                <h3 className="text-xl font-bold">Prayer Support</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Our prayer team is here to support you. Submit a prayer request and know that our 
                community is lifting you up in prayer.
              </p>
              <p className="text-blue-200 text-sm">
                All prayer requests are kept confidential and handled with care.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-vertical"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="prayerRequest"
                  name="prayerRequest"
                  checked={formData.prayerRequest}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="prayerRequest" className="ml-2 text-sm text-gray-700">
                  This is a prayer request
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;