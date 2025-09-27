import React, { useState } from 'react';
import { Calendar, Users, Trophy, Star, ArrowRight, Play, CheckCircle, MapPin, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

const LandingPage: React.FC = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'World-Class Speakers',
      description: 'Learn from industry leaders, renowned educators, and technology pioneers who are shaping the future.'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Interactive Workshops',
      description: 'Hands-on learning experiences with cutting-edge tools, AI platforms, and educational technologies.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Networking Opportunities',
      description: 'Connect with like-minded professionals, build lasting relationships, and expand your professional network.'
    }
  ];

  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      company: 'EduTech Innovations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332b363?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Director of Learning Sciences',
      company: 'Stanford University',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Emma Thompson',
      role: 'VR/AR Education Specialist',
      company: 'Meta Reality Labs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ];

  const stats = [
    { number: '2,500+', label: 'Attendees' },
    { number: '50+', label: 'Expert Speakers' },
    { number: '30+', label: 'Interactive Sessions' },
    { number: '3', label: 'Days of Learning' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">TechEdu Summit</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => openAuthModal('signin')}
                className="px-6 py-2 text-white hover:text-blue-400 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthModal('signup')}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              March 15-17, 2025 • Silicon Valley Convention Center
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            TechEdu Summit
            <span className="block text-4xl md:text-6xl mt-2">2025</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where <span className="text-blue-400 font-semibold">Technology</span> meets{' '}
            <span className="text-purple-400 font-semibold">Education</span>.
            Join the future of learning with AI, VR, and innovative teaching methods.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => openAuthModal('signup')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-2"
            >
              <span>Get Your Ticket</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group px-8 py-4 border border-gray-600 hover:border-gray-500 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800/50 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Trailer</span>
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Attend <span className="text-blue-400">TechEdu Summit</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of educators, technologists, and innovators for three days of transformative learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-purple-400">Speakers</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Learn from the brightest minds in technology and education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-purple-500 transition-colors">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{speaker.name}</h3>
                <p className="text-purple-400 font-medium mb-1">{speaker.role}</p>
                <p className="text-gray-400 text-sm">{speaker.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Event <span className="text-green-400">Details</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold">Location</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Silicon Valley Convention Center<br />
                5001 Great America Parkway<br />
                Santa Clara, CA 95054
              </p>
              <div className="flex items-center space-x-2 text-blue-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Virtual attendance available</span>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">Schedule</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-medium">Day 1</span>
                  <span className="text-gray-300">AI in Education</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-medium">Day 2</span>
                  <span className="text-gray-300">Interactive Technologies</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-medium">Day 3</span>
                  <span className="text-gray-300">Global Perspectives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform <span className="text-blue-400">Education</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for three days of innovation, learning, and networking. Early bird pricing available now!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => openAuthModal('signup')}
              className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center space-x-3"
            >
              <span>Register Now - $299</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-center">
              <p className="text-green-400 font-semibold">Early Bird Special</p>
              <p className="text-sm text-gray-400">30% off regular pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">TechEdu Summit 2025</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering the future of education through technology
          </p>
          <div className="flex items-center justify-center space-x-8 mb-4">
            <p className="text-sm text-gray-500">
              © 2025 TechEdu Summit. All rights reserved.
            </p>
            <Link
              to="/admin"
              className="text-sm text-gray-500 hover:text-gray-400 flex items-center space-x-1 transition-colors"
            >
              <Shield className="w-4 h-4" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
};

export default LandingPage;