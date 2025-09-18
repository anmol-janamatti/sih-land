import React from 'react';
import { Bot, Brain, Activity, Calendar } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: Bot,
      title: "AI Chatbot",
      subtitle: "Multilingual Guidance",
      description: "24/7 intelligent support in multiple languages for patient queries and care instructions"
    },
    {
      icon: Brain,
      title: "Personalized Therapy Engine",
      subtitle: "Vamana, Virechana, Basti, Nasya, Raktamokshana",
      description: "AI-powered recommendations based on patient constitution and health conditions"
    },
    {
      icon: Activity,
      title: "Predictive Health Monitoring",
      subtitle: "Proactive Care Management",
      description: "Advanced analytics to predict therapy outcomes and optimize treatment plans"
    },
    {
      icon: Calendar,
      title: "Automated Scheduling",
      subtitle: "Smart Notifications",
      description: "Intelligent appointment management with automated reminders and follow-ups"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">AI-Powered</span> Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming traditional Panchakarma management with cutting-edge artificial intelligence and modern digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full p-3">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {solution.title}
                </h3>
                <p className="text-sm font-medium text-amber-600 mb-3 text-center">
                  {solution.subtitle}
                </p>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;