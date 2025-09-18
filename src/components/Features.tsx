import React from 'react';
import { Calendar, Bell, Bot, Target, TrendingUp, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Automated Scheduling",
      description: "Smart appointment management with conflict resolution and optimal resource allocation"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Personalized reminders for treatments, medications, and follow-up appointments"
    },
    {
      icon: Bot,
      title: "AI Chatbot Support",
      description: "Multilingual virtual assistant for instant patient support and guidance"
    },
    {
      icon: Target,
      title: "Therapy Recommendation",
      description: "Personalized Panchakarma therapy selection based on AI analysis and patient profile"
    },
    {
      icon: TrendingUp,
      title: "Predictive Monitoring",
      description: "Advanced health predictions and treatment outcome optimization"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and performance metrics for center management"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Feature Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to modernize your Ayurveda practice and deliver exceptional patient care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-amber-500 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;