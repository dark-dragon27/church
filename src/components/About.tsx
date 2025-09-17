import React from 'react';
import { Heart, Users, Book } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-12 w-12 text-yellow-500" />,
      title: "Love & Compassion",
      description: "We believe in showing God's love through acts of compassion and kindness to all people."
    },
    {
      icon: <Users className="h-12 w-12 text-yellow-500" />,
      title: "Community",
      description: "We foster meaningful relationships and support each other through life's journey."
    },
    {
      icon: <Book className="h-12 w-12 text-yellow-500" />,
      title: "Biblical Truth",
      description: "We are committed to teaching and living according to the truth found in God's Word."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">About Our Church</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Grace Community Church has been serving our community for over 50 years. We are a place where 
            people can meet Jesus, engage in life-giving community, and everyone is welcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/8468024/pexels-photo-8468024.jpeg" 
              alt="Church community gathering"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-blue-700">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To love God, love people, and serve our community by sharing the hope and truth of Jesus Christ. 
              We are committed to creating an environment where people can experience God's love, grow in their 
              faith, and discover their purpose.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're exploring faith for the first time or have been walking with Jesus for years, 
              you'll find a place to belong and grow at Grace Community Church.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h4 className="text-2xl font-bold text-blue-700 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;