import React from 'react';

const ContactUs = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-teal-50" id="contact-us">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <p className="text-xl text-gray-600 mb-8">
          Feel free to reach out to us through the following contact options:
        </p>

        {/* Contact Information in a responsive flex layout */}
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-16 gap-8">
          {/* WhatsApp Contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Click the link below to chat with us on WhatsApp:
            </p>
            <a
              href="https://wa.me/03490523972"
              className="text-teal-500 hover:text-teal-700 text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Chat
            </a>
          </div>

          {/* Email Contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">
              You can also reach us via email at:
            </p>
            <a
              href="mailto:milyasnurani94@gmail.com"
              className="text-teal-500 hover:text-teal-700 text-lg font-medium"
            >
              milyasnurani94@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
