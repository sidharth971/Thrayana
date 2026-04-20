import React from 'react';
import { ShieldCheck, Award, FileCheck, Globe } from 'lucide-react';

const TrustSection = () => {
  const certifications = [
    {
      name: "FSSAI",
      description: "Food Safety and Standards Authority of India",
      icon: ShieldCheck,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "APEDA",
      description: "Agricultural and Processed Food Products Export Development Authority",
      icon: Globe,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "Organic NPOP",
      description: "Certified Organic Production Standards",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      name: "COA",
      description: "Certificate of Analysis provided for every bulk batch",
      icon: FileCheck,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Compliance & <span className="text-primary">Global Standards</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Thrayana Private Limited strictly adheres to international quality benchmarks, ensuring every export shipment is safe, authentic, and fully certified.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className={`${cert.bgColor} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className={`w-8 h-8 ${cert.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
              <p className="text-center text-[10px] sm:text-xs text-gray-400 leading-tight font-medium">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
