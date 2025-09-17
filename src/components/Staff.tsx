import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Staff: React.FC = () => {
  const staff = [
    {
      name: "Pastor Michael Johnson",
      role: "Senior Pastor",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      bio: "Pastor Michael has been leading Grace Community Church for over 15 years with passion and dedication to God's Word.",
      email: "pastor.michael@gracecommunity.org"
    },
    {
      name: "Sarah Williams",
      role: "Worship Leader",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "Sarah brings heart and soul to our worship experience, leading our congregation in meaningful praise and worship.",
      email: "sarah@gracecommunity.org"
    },
    {
      name: "David Chen",
      role: "Youth Pastor",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      bio: "David is passionate about mentoring young people and helping them discover their purpose in Christ.",
      email: "david@gracecommunity.org"
    },
    {
      name: "Maria Rodriguez",
      role: "Children's Ministry Director",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
      bio: "Maria creates fun and engaging environments where children can learn about God's love in age-appropriate ways.",
      email: "maria@gracecommunity.org"
    }
  ];

  return (
    <section id="staff" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated staff is here to serve you and help you grow in your relationship with God.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-50 to-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-2">{member.name}</h3>
              <p className="text-yellow-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
              <a 
                href={`mailto:${member.email}`}
                className="inline-flex items-center text-blue-700 hover:text-blue-900 transition-colors duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;