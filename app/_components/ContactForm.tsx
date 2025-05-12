import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path if necessary

const ContactForm: React.FC = () => {
  return (
    <div className="p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Contact Us
      </h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email Address
          </label>
          <input 
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Message
          </label>
          <textarea 
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <Button className="w-full py-3 text-lg font-semibold">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;