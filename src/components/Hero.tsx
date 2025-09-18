import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-emerald-600">AyurNexa</span> with{' '}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Personalized therapy recommendations, smart scheduling, and predictive health monitoring for Ayurveda centers worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"   onClick={() => window.location.href = "https://sih-land.vercel.app/"}
>
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Learn More
            </button>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-gray-500 italic">
              🚀 Prototype Version - Numbers shown are for visual demonstration purposes only
            </p>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mx-auto max-w-4xl border border-emerald-100">
            <div className="text-center mb-6">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                Prototype Metrics
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-gray-600">Ayurveda Centers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">50K+</div>
                <div className="text-gray-600">Patients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                <div className="text-gray-600">Efficiency Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
