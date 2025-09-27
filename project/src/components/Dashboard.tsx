import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import StepperTimeline from './StepperTimeline';
import QRCodeGenerator from './QRCodeGenerator';
import { User, Mail, Briefcase, Linkedin, Calendar, Trophy, Users, Clock, LogOut, QrCode, MapPin, Lightbulb, Network, Star, Bot, Zap, Target, Coffee, Wifi, Car } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { profile, signOut } = useAuth();
  const [showQRCode, setShowQRCode] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [networkingMatches, setNetworkingMatches] = useState<any[]>([]);

  // Generate QR code data for networking
  const generateQRData = () => {
    return JSON.stringify({
      name: profile?.name,
      email: profile?.email,
      linkedin: profile?.linkedin_url,
      role: profile?.role,
      event: 'TechEdu Summit 2025'
    });
  };

  // AI-powered suggestions for participants
  useEffect(() => {
    const generateAISuggestions = () => {
      const suggestions = [
        `🎯 Based on your ${profile?.role} background, attend the "AI in ${profile?.role}" workshop`,
        "🤝 Connect with 3 new people in your field today",
        "📱 Join the mobile app development session - trending topic!",
        "☕ Visit the networking lounge between 2-3 PM for optimal connections",
        "🏆 Participate in the hackathon - great for portfolio building",
        "📊 Check out the data visualization workshop - highly recommended",
        "🔗 Update your LinkedIn during lunch break for maximum visibility"
      ];

      // Simulate AI recommendations based on user profile
      const personalizedSuggestions = suggestions
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

      setAiSuggestions(personalizedSuggestions);
    };

    const generateNetworkingMatches = () => {
      const matches = [
        { name: "Sarah Chen", role: "Frontend Developer", company: "TechCorp", compatibility: 95 },
        { name: "Mike Johnson", role: "Product Manager", company: "StartupXYZ", compatibility: 88 },
        { name: "Priya Patel", role: "UX Designer", company: "DesignLab", compatibility: 92 }
      ];
      setNetworkingMatches(matches);
    };

    if (profile) {
      generateAISuggestions();
      generateNetworkingMatches();
    }
  }, [profile]);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">TechEdu Dashboard</h1>
                <p className="text-sm text-gray-400">Welcome back, {profile?.name}</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Suggestions Banner */}
        <div className="mb-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-6 border border-purple-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">AI Personal Assistant</h2>
              <p className="text-sm text-gray-400">Personalized recommendations for your event experience</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">{suggestion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-400" />
                <span>Profile</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {profile?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{profile?.name}</h3>
                    <p className="text-gray-400 text-sm capitalize">{profile?.role}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">{profile?.email}</span>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300 capitalize">{profile?.role}</span>
                  </div>

                  {profile?.linkedin_url && (
                    <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <a
                        href={profile.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors truncate"
                      >
                        View LinkedIn Profile
                      </a>
                    </div>
                  )}

                  {/* QR Code for Networking */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowQRCode(!showQRCode)}
                      className="w-full flex items-center justify-center space-x-3 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all"
                    >
                      <QrCode className="w-4 h-4 text-white" />
                      <span className="text-sm text-white font-medium">Generate Networking QR</span>
                    </button>

                    {showQRCode && (
                      <QRCodeGenerator
                        data={generateQRData()}
                        size={128}
                        className="w-full"
                      />
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500">
                    Member since {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'Invalid Date'}
                  </p>
                </div>
              </div>
            </div>

            {/* Smart Networking Matches */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
                <Network className="w-5 h-5 text-green-400" />
                <span>Smart Networking</span>
              </h3>
              <div className="space-y-3">
                {networkingMatches.map((match, index) => (
                  <div key={index} className="p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">{match.name}</h4>
                        <p className="text-xs text-gray-400">{match.role} at {match.company}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs text-green-400">{match.compatibility}% match</span>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="w-full mt-3 py-2 px-4 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition-colors">
                  Find More Matches
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl p-4 border border-blue-500/30">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white">Event Date</h3>
                    <p className="text-sm text-blue-300">March 15-17, 2025</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="font-semibold text-white">Registered</h3>
                    <p className="text-sm text-green-300">2,500+ attendees</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/30">
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-purple-400" />
                  <div>
                    <h3 className="font-semibold text-white">Days Left</h3>
                    <p className="text-sm text-purple-300">139 days to go</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Venue Map Section */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-red-400" />
                <span>Venue Map & Facilities</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Map Area */}
                <div className="bg-gray-700/50 rounded-xl p-6 min-h-64">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Interactive Venue Map</p>
                      <p className="text-xs text-gray-500 mt-1">Tech Convention Center</p>
                      <p className="text-xs text-gray-500">Silicon Valley, CA</p>
                    </div>
                  </div>
                </div>

                {/* Facilities */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-white mb-3">Key Locations</h3>
                  <div className="space-y-2">
                    {[
                      { icon: Trophy, name: "Main Auditorium", desc: "Keynote speeches & presentations", color: "text-yellow-400" },
                      { icon: Users, name: "Networking Lounge", desc: "Coffee & connections", color: "text-green-400" },
                      { icon: Zap, name: "Innovation Lab", desc: "Hands-on workshops", color: "text-purple-400" },
                      { icon: Coffee, name: "Food Court", desc: "Meals & refreshments", color: "text-orange-400" },
                      { icon: Wifi, name: "Quiet Zone", desc: "Work & charging stations", color: "text-blue-400" },
                      { icon: Car, name: "Parking", desc: "Level B1-B3 available", color: "text-gray-400" }
                    ].map((facility, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                        <facility.icon className={`w-5 h-5 ${facility.color}`} />
                        <div>
                          <p className="text-sm font-medium text-white">{facility.name}</p>
                          <p className="text-xs text-gray-400">{facility.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Event Timeline */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-8 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-blue-400" />
                <span>Event Timeline</span>
              </h2>

              <StepperTimeline />
            </div>

            {/* Participant Tools */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Target className="w-6 h-6 text-purple-400" />
                <span>Participant Tools</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Schedule Planner",
                    desc: "Plan your day with AI optimization",
                    icon: Calendar,
                    color: "from-blue-500 to-purple-600",
                    action: "Open Planner"
                  },
                  {
                    title: "Skills Tracker",
                    desc: "Track learning progress & certificates",
                    icon: Trophy,
                    color: "from-yellow-500 to-orange-600",
                    action: "View Progress"
                  },
                  {
                    title: "Team Builder",
                    desc: "Find hackathon teammates",
                    icon: Users,
                    color: "from-green-500 to-teal-600",
                    action: "Find Team"
                  }
                ].map((tool, index) => (
                  <div key={index} className="bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/50 transition-all group cursor-pointer">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{tool.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{tool.desc}</p>
                    <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">
                      {tool.action} →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;