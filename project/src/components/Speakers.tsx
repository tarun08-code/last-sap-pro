import React from 'react';
import { Linkedin as LinkedinIcon, ExternalLink, Award, BookOpen, Users, Briefcase } from 'lucide-react';

const Speakers: React.FC = () => {
  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      company: 'EduTech Innovations',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/sarahchen',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Educational Analytics'],
      bio: 'Leading AI researcher with 15+ years of experience in educational technology. Pioneer in adaptive learning systems.',
      achievements: ['Published 50+ research papers', 'TEDx Speaker', 'AI Innovation Award 2023']
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Professor of Education',
      company: 'Stanford University',
      image: 'https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/mrodriguez',
      expertise: ['Learning Analytics', 'Data Science', 'Curriculum Design'],
      bio: 'Renowned educator and researcher specializing in data-driven learning methodologies and educational assessment.',
      achievements: ['Author of 3 bestselling books', '20+ years in academia', 'Education Excellence Award']
    },
    {
      name: 'Emma Thompson',
      role: 'VP of Product',
      company: 'VR Learning Solutions',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/emmathompson',
      expertise: ['Virtual Reality', 'Immersive Learning', 'Product Strategy'],
      bio: 'Product visionary driving the adoption of VR/AR technologies in educational environments worldwide.',
      achievements: ['Built 10+ VR education products', 'Forbes 30 Under 30', 'Product Innovation Award']
    },
    {
      name: 'Dr. James Wilson',
      role: 'Director of Innovation',
      company: 'Global Education Consortium',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/jameswilson',
      expertise: ['Personalized Learning', 'EdTech Strategy', 'Digital Transformation'],
      bio: 'Strategic leader in digital education transformation with expertise in scaling personalized learning platforms.',
      achievements: ['Led $50M+ education initiatives', 'International speaker', 'Digital Innovation Leader']
    },
    {
      name: 'Lisa Park',
      role: 'Blockchain Specialist',
      company: 'CryptoEdu Labs',
      image: 'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/lisapark',
      expertise: ['Blockchain', 'Digital Credentials', 'Cybersecurity'],
      bio: 'Blockchain pioneer working on secure, verifiable educational credentials and decentralized learning platforms.',
      achievements: ['Founded 2 blockchain startups', 'Security expert', 'Tech Innovation Award']
    },
    {
      name: 'Prof. Angela Davis',
      role: 'Director of Inclusive Tech',
      company: 'MIT Media Lab',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/angeladavis',
      expertise: ['Inclusive Design', 'Accessibility', 'Social Impact'],
      bio: 'Advocate for inclusive educational technologies ensuring equal access to quality education for all learners.',
      achievements: ['Accessibility research leader', '100+ publications', 'Social Impact Award']
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
            <Users className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-300">Featured Speakers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Industry Leaders & Innovators
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn from the brightest minds in education technology, AI research, and digital innovation.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Speaker Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <a 
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors group/linkedin"
                  >
                    <LinkedinIcon className="w-5 h-5 text-white group-hover/linkedin:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {speaker.name}
                  </h3>
                  <div className="flex items-center text-gray-300 mb-1">
                    <Briefcase className="w-4 h-4 mr-2 text-purple-400" />
                    <span className="font-medium">{speaker.role}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{speaker.company}</p>
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{speaker.bio}</p>

                {/* Expertise Tags */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-sm font-medium text-gray-300">Expertise</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-gray-300">Key Achievements</span>
                  </div>
                  <ul className="space-y-1">
                    {speaker.achievements.slice(0, 2).map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs text-gray-400 flex items-start">
                        <span className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 group/btn"
                  >
                    <LinkedinIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Connect
                  </a>
                  <button className="flex items-center justify-center px-4 py-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Don't Miss These Expert Insights</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Register now to secure your spot and gain exclusive access to sessions with these industry leaders.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
              Register for Summit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;