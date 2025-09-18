import React from 'react';
import { AlertTriangle, Clock, FileX, MessageCircleX } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Manual Scheduling Inefficiency",
      description: "Time-consuming appointment booking and therapy coordination"
    },
    {
      icon: FileX,
      title: "Lack of Digital Patient Records",
      description: "Paper-based systems leading to data loss and accessibility issues"
    },
    {
      icon: MessageCircleX,
      title: "Missed Care Instructions",
      description: "Inadequate pre and post-therapy guidance affecting treatment outcomes"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Challenges Facing Ayurveda Centers Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional Panchakarma management faces critical operational inefficiencies that impact both practitioners and patients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
                <div className="flex justify-center mb-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;