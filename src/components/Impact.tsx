import React from 'react';
import { Award, Users, TrendingUp, Globe } from 'lucide-react';

const Impact = () => {
  const benefits = [
    {
      icon: Award,
      title: "Standardized Care",
      description: "Consistent, evidence-based treatment protocols across all practitioners",
      metric: "98% Protocol Adherence"
    },
    {
      icon: Users,
      title: "Enhanced Patient Experience",
      description: "Personalized care journey with improved satisfaction and outcomes",
      metric: "4.9/5 Patient Rating"
    },
    {
      icon: TrendingUp,
      title: "Optimized Resources",
      description: "Efficient utilization of facilities, staff, and treatment resources",
      metric: "40% Cost Reduction"
    },
    {
      icon: Globe,
      title: "Market Growth Support",
      description: "Contributing to the $16B global Ayurveda market expansion",
      metric: "$16B Market Size"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 via-emerald-800 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
              Prototype Impact Metrics
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Transforming Ayurveda Practice Worldwide
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Join the digital revolution in traditional healthcare and be part of the growing global Ayurveda movement
          </p>
          <p className="text-sm text-emerald-200 mt-3 italic">
            * All metrics shown are projected estimates for demonstration purposes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full p-3">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-emerald-100 mb-4 text-center text-sm leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-center">
                  <span className="bg-gradient-to-r from-emerald-400 to-amber-400 text-transparent bg-clip-text font-bold text-lg">
                    {benefit.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;