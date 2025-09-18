import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Ayurveda Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our pilot program and be among the first to experience the future of Panchakarma management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"onClick={() => window.location.href = "http://localhost:8080"}>
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4 italic">
              This is a prototype demonstration. Features and metrics are conceptual.
            </p>
          </div>
        </div>

        {/* Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-amber-400 text-transparent bg-clip-text">
              Panchakarma AI
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Revolutionizing traditional Ayurveda practice with cutting-edge AI technology. Empowering practitioners and enhancing patient care worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 hover:bg-emerald-600 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="bg-gray-800 hover:bg-emerald-600 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="bg-gray-800 hover:bg-emerald-600 rounded-full p-2 transition-colors duration-300 cursor-pointer">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-300">AI Therapy Recommendations</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-300">Smart Scheduling</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-300">Patient Management</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-300">Analytics Dashboard</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors duration-300">Multilingual Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-emerald-400" />
                <span className="text-sm">contact@panchakarmaai.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-emerald-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-emerald-400 mt-1" />
                <span className="text-sm">Silicon Valley, CA<br />Global Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Panchakarma AI. All rights reserved. Empowering Ayurveda with Technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;