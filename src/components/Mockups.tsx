import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';

const Mockups = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our intuitive interfaces designed for both patients and practitioners
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 shadow-2xl border border-emerald-100">
              <div className="flex items-center mb-6">
                <Smartphone className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Patient Mobile App</h3>
              </div>
              <div className="bg-white rounded-xl p-6 min-h-[400px] flex items-center justify-center border-2 border-dashed border-emerald-200">
                <div className="text-center">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-12 h-12 text-emerald-600" />
                  </div>
                  <p className="text-gray-500 text-lg font-medium">Mobile App Screenshot</p>
                  <p className="text-gray-400 text-sm mt-2">Patient dashboard, booking, and therapy tracking</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Multilingual therapy guidance
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Real-time appointment booking
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Progress tracking and notifications
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-8 shadow-2xl border border-amber-100">
              <div className="flex items-center mb-6">
                <Monitor className="w-8 h-8 text-amber-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Practitioner Dashboard</h3>
              </div>
              <div className="bg-white rounded-xl p-6 min-h-[400px] flex items-center justify-center border-2 border-dashed border-amber-200">
                <div className="text-center">
                  <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-12 h-12 text-amber-600" />
                  </div>
                  <p className="text-gray-500 text-lg font-medium">Dashboard Screenshot</p>
                  <p className="text-gray-400 text-sm mt-2">Analytics, patient management, and AI insights</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  AI-powered therapy recommendations
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Comprehensive patient records
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Advanced analytics and reporting
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mockups;