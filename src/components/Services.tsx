import React from 'react';
import { Clock, MapPin, Music, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      name: "Sunday Worship",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for inspiring worship, meaningful messages, and fellowship.",
      features: ["Live Music", "Children's Ministry", "Coffee & Fellowship"]
    },
    {
      name: "Wednesday Prayer",
      time: "7:00 PM",
      description: "A time for prayer, reflection, and community connection.",
      features: ["Group Prayer", "Bible Study", "Personal Ministry"]
    },
    {
      name: "Youth Service",
      time: "Sunday 6:00 PM",
      description: "Dynamic service designed for teenagers and young adults.",
      features: ["Contemporary Music", "Relevant Teaching", "Small Groups"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">Service Times</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer multiple services throughout the week to fit your schedule and spiritual needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-blue-700 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-blue-700">{service.name}</h3>
                  <p className="text-yellow-600 font-semibold text-lg">{service.time}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-700 rounded-lg p-8 text-white text-center">
          <div className="flex justify-center items-center mb-4">
            <MapPin className="h-8 w-8 mr-3" />
            <h3 className="text-2xl font-bold">Visit Us</h3>
          </div>
          <p className="text-xl mb-2">123 Faith Street, Hope Valley, CA 12345</p>
          <p className="text-blue-200">Free parking available • Wheelchair accessible</p>
        </div>
      </div>
    </section>
  );
};

export default Services;