import React from 'react';
import { Clock, MapPin, Ticket, Users, Calendar, Star, Award, Target } from 'lucide-react';

const EventDetails: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: 'AI in Education',
      description: 'Explore how artificial intelligence is revolutionizing learning experiences and educational outcomes.'
    },
    {
      icon: Users,
      title: 'Interactive Workshops',
      description: 'Hands-on sessions with industry experts covering the latest educational technologies and methodologies.'
    },
    {
      icon: Award,
      title: 'Innovation Showcase',
      description: 'Discover groundbreaking educational tools and platforms from leading startups and established companies.'
    },
    {
      icon: Star,
      title: 'Networking Opportunities',
      description: 'Connect with educators, technologists, and thought leaders from around the globe.'
    }
  ];

  const schedule = [
    {
      day: 'Day 1 - March 15',
      color: 'from-blue-500 to-blue-600',
      sessions: [
        { time: '9:00 AM', title: 'Opening Keynote: The Future of Education', speaker: 'Dr. Sarah Chen' },
        { time: '10:30 AM', title: 'AI-Powered Learning Analytics Workshop', speaker: 'Prof. Michael Rodriguez' },
        { time: '2:00 PM', title: 'Virtual Reality in Classroom Settings', speaker: 'Emma Thompson' },
        { time: '4:00 PM', title: 'Panel: Ethics in Educational Technology', speaker: 'Multiple Speakers' }
      ]
    },
    {
      day: 'Day 2 - March 16',
      color: 'from-purple-500 to-purple-600',
      sessions: [
        { time: '9:00 AM', title: 'Personalized Learning Platforms', speaker: 'Dr. James Wilson' },
        { time: '11:00 AM', title: 'Blockchain for Educational Credentials', speaker: 'Lisa Park' },
        { time: '2:30 PM', title: 'Interactive Demo: EdTech Innovations', speaker: 'Various Presenters' },
        { time: '4:30 PM', title: 'Building Inclusive Digital Learning Environments', speaker: 'Prof. Angela Davis' }
      ]
    },
    {
      day: 'Day 3 - March 17',
      color: 'from-teal-500 to-teal-600',
      sessions: [
        { time: '9:00 AM', title: 'Global Perspectives on Digital Education', speaker: 'International Panel' },
        { time: '11:00 AM', title: 'Startup Pitch: Next-Gen EdTech', speaker: 'Emerging Companies' },
        { time: '2:00 PM', title: 'Implementation Strategies Workshop', speaker: 'Dr. Robert Kim' },
        { time: '4:00 PM', title: 'Closing Ceremony & Awards', speaker: 'Summit Organizers' }
      ]
    }
  ];

  return (
    <section id="event" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm mb-6">
            <Calendar className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-300">Event Details</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Three Days of Innovation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Immerse yourself in cutting-edge discussions, hands-on workshops, and networking opportunities that will shape the future of education.
          </p>
        </div>

        {/* Event Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
            <Clock className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Duration</h3>
            <p className="text-gray-300">3 Full Days</p>
            <p className="text-gray-400 text-sm">24 Hours of Content</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group">
            <MapPin className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Venue</h3>
            <p className="text-gray-300">Hybrid Event</p>
            <p className="text-gray-400 text-sm">In-person & Virtual</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 group">
            <Ticket className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Registration</h3>
            <p className="text-gray-300">Early Bird Active</p>
            <p className="text-gray-400 text-sm">30% Discount Available</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
            <Users className="w-8 h-8 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-white mb-2">Speakers</h3>
            <p className="text-gray-300">50+ Experts</p>
            <p className="text-gray-400 text-sm">Global Thought Leaders</p>
          </div>
        </div>

        {/* Event Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Event Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <highlight.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h4 className="text-xl font-semibold text-white mb-4">{highlight.title}</h4>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Event Schedule</h3>
          <div className="space-y-8">
            {schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${day.color} rounded-full mb-6`}>
                  <Calendar className="w-5 h-5 text-white mr-2" />
                  <h4 className="text-lg font-semibold text-white">{day.day}</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="bg-gray-700/30 rounded-lg p-4 hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-blue-400 font-semibold">{session.time}</span>
                      </div>
                      <h5 className="text-white font-medium mb-1">{session.title}</h5>
                      <p className="text-gray-400 text-sm">{session.speaker}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;