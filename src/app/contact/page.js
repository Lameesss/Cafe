"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="pt-16" style={{ backgroundColor: 'var(--bg-color)' }}>
      {/* Hero Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--heading-color)' }}>
                <svg className="w-12 h-12" style={{ color: 'var(--bg-color)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--heading-color)' }}>تواصل معنا</h1>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8" style={{ color: 'var(--heading-color)' }}>GET IN TOUCH</h2>
            <p className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-color)' }}>
              Experience authentic Arabic hospitality at World Cup Cafe. We're here to serve you the finest coffee and create memorable moments in Dubai Marina.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl mb-2" style={{ color: 'var(--heading-color)' }}>معلومات الاتصال</h3>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: 'var(--heading-color)' }}>Contact Information</h2>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--heading-color)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--bg-color)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--heading-color)' }}>Location</h3>
                  <p style={{ color: 'var(--text-color)' }}>
                    Dubai Marina Walk<br />
                    Marina Promenade, Building 4<br />
                    Dubai Marina, Dubai<br />
                    United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--heading-color)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--bg-color)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--heading-color)' }}>Phone</h3>
                  <p style={{ color: 'var(--text-color)' }}>
                    +971 4 368 9999<br />
                    +971 50 123 4567 (WhatsApp)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--heading-color)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--bg-color)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--heading-color)' }}>Email</h3>
                  <p style={{ color: 'var(--text-color)' }}>
                    info@worldcupcafe.ae<br />
                    reservations@worldcupcafe.ae
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--heading-color)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--bg-color)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--heading-color)' }}>Opening Hours</h3>
                  <div style={{ color: 'var(--text-color)' }}>
                    <p>Saturday - Thursday: 7:00 AM - 12:00 AM</p>
                    <p>Friday: 2:00 PM - 12:00 AM</p>
                    <p className="text-sm mt-2 opacity-80">*Shisha service available from 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-lg shadow-2xl"
              style={{ backgroundColor: 'var(--heading-color)' }}
            >
              <h3 className="text-xl mb-2" style={{ color: 'var(--bg-color)' }}>أرسل لنا رسالة</h3>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6" style={{ color: 'var(--bg-color)' }}>Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--bg-color)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: 'transparent',
                      borderColor: 'var(--bg-color)',
                      color: 'var(--bg-color)'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--bg-color)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: 'transparent',
                      borderColor: 'var(--bg-color)',
                      color: 'var(--bg-color)'
                    }}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--bg-color)' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: 'transparent',
                      borderColor: 'var(--bg-color)',
                      color: 'var(--bg-color)'
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--bg-color)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-md border-2 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                    style={{ 
                      backgroundColor: 'transparent',
                      borderColor: 'var(--bg-color)',
                      color: 'var(--bg-color)'
                    }}
                    placeholder="Tell us about your inquiry or reservation..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-md"
                  style={{
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--heading-color)',
                    border: '2px solid var(--bg-color)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'var(--bg-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--bg-color)';
                    e.target.style.color = 'var(--heading-color)';
                  }}
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h3 className="text-xl mb-2" style={{ color: 'var(--heading-color)' }}>موقعنا على الخريطة</h3>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--heading-color)' }}>Find Us</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-color)' }}>
              Located in the heart of Dubai Marina with stunning waterfront views and easy access to public transportation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-2xl h-96"
            style={{ backgroundColor: 'var(--heading-color)' }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-color)' }}>
                  <svg className="w-8 h-8" style={{ color: 'var(--heading-color)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--bg-color)' }}>Dubai Marina Walk</h3>
                <p style={{ color: 'var(--bg-color)' }}>Interactive map will be integrated here</p>
                <p className="text-sm mt-2" style={{ color: 'var(--bg-color)', opacity: 0.8 }}>
                  Marina Promenade, Building 4, Dubai Marina
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
