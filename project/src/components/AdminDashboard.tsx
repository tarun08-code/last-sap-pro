import React, { useState, useEffect } from 'react';
import {
  Shield,
  Calendar,
  Users,
  Megaphone,
  BarChart3,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  Send,
  UserCheck,
  MapPin,
  Clock
} from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  status: 'draft' | 'published' | 'ongoing' | 'completed';
  image?: string;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success' | 'urgent';
  targetAudience: 'all' | 'participants' | 'speakers' | 'sponsors';
  scheduledFor?: string;
  status: 'draft' | 'sent';
  createdAt: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [events, setEvents] = useState<Event[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  // Initialize demo data
  useEffect(() => {
    setEvents([
      {
        id: '1',
        title: 'TechEdu Summit 2025',
        description: 'Three days of innovation, learning, and networking',
        date: '2025-03-15',
        time: '09:00',
        location: 'Tech Convention Center, Silicon Valley',
        capacity: 3000,
        registered: 2547,
        status: 'published',
      },
      {
        id: '2',
        title: 'AI Workshop Series',
        description: 'Hands-on AI development workshops',
        date: '2025-02-20',
        time: '14:00',
        location: 'Innovation Lab',
        capacity: 100,
        registered: 87,
        status: 'published',
      },
    ]);

    setAnnouncements([
      {
        id: '1',
        title: 'Registration Deadline Extended',
        content: 'We have extended the early bird registration deadline to February 1st, 2025. Don\'t miss out on the 30% discount!',
        type: 'info',
        targetAudience: 'all',
        status: 'sent',
        createdAt: '2025-01-15',
      },
      {
        id: '2',
        title: 'New Speaker Added',
        content: 'Excited to announce Dr. Sarah Chen, AI Research Director at TechCorp, will be joining our keynote lineup!',
        type: 'success',
        targetAudience: 'participants',
        status: 'sent',
        createdAt: '2025-01-20',
      },
    ]);
  }, []);

  const handleCreateEvent = () => {
    alert('Event creation form would open here. In a full implementation, this would show a modal or navigate to a creation page.');
  };

  const handleCreateAnnouncement = () => {
    alert('Announcement creation form would open here. In a full implementation, this would show a modal or navigate to a creation page.');
  };

  const stats = {
    totalEvents: events.length,
    totalParticipants: events.reduce((sum, event) => sum + event.registered, 0),
    activeEvents: events.filter(e => e.status === 'published' || e.status === 'ongoing').length,
    totalAnnouncements: announcements.length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'text-yellow-400 bg-yellow-400/10';
      case 'published': return 'text-green-400 bg-green-400/10';
      case 'ongoing': return 'text-blue-400 bg-blue-400/10';
      case 'completed': return 'text-gray-400 bg-gray-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getAnnouncementTypeColor = (type: string) => {
    switch (type) {
      case 'info': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'success': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'urgent': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Events', value: stats.totalEvents, icon: Calendar, color: 'text-blue-400' },
          { title: 'Total Participants', value: stats.totalParticipants.toLocaleString(), icon: Users, color: 'text-green-400' },
          { title: 'Active Events', value: stats.activeEvents, icon: Eye, color: 'text-purple-400' },
          { title: 'Announcements', value: stats.totalAnnouncements, icon: Megaphone, color: 'text-orange-400' },
        ].map((stat, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Events</h3>
          <div className="space-y-3">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">{event.title}</h4>
                  <p className="text-sm text-gray-400">{new Date(event.date).toLocaleDateString()}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${getStatusColor(event.status)}`}>
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Announcements</h3>
          <div className="space-y-3">
            {announcements.slice(0, 3).map((announcement) => (
              <div key={announcement.id} className={`p-3 rounded-lg border ${getAnnouncementTypeColor(announcement.type)}`}>
                <h4 className="font-medium text-white">{announcement.title}</h4>
                <p className="text-sm text-gray-400 mt-1">To: {announcement.targetAudience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Event Management</h2>
        <button
          onClick={handleCreateEvent}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Create Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-semibold text-white">{event.title}</h3>
              <span className={`px-2 py-1 rounded text-xs ${getStatusColor(event.status)}`}>
                {event.status}
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-4">{event.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <UserCheck className="w-4 h-4" />
                <span>{event.registered} / {event.capacity} registered</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors">
                <Edit className="w-3 h-3" />
                <span>Edit</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-sm transition-colors">
                <Eye className="w-3 h-3" />
                <span>View</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm transition-colors">
                <Trash2 className="w-3 h-3" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnnouncements = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Announcements</h2>
        <button
          onClick={handleCreateAnnouncement}
          className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 px-4 py-2 rounded-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Create Announcement</span>
        </button>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className={`p-6 rounded-xl border ${getAnnouncementTypeColor(announcement.type)}`}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-white">{announcement.title}</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-gray-400">To: {announcement.targetAudience}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">{new Date(announcement.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded text-xs ${announcement.status === 'sent' ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'}`}>
                {announcement.status}
              </span>
            </div>

            <p className="text-gray-300 mb-4">{announcement.content}</p>

            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors">
                <Edit className="w-3 h-3" />
                <span>Edit</span>
              </button>
              {announcement.status === 'draft' && (
                <button className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm transition-colors">
                  <Send className="w-3 h-3" />
                  <span>Send</span>
                </button>
              )}
              <button className="flex items-center space-x-1 px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm transition-colors">
                <Trash2 className="w-3 h-3" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'announcements', name: 'Announcements', icon: Megaphone },
    { id: 'participants', name: 'Participants', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                <p className="text-sm text-gray-400">Event Management System</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800/30 backdrop-blur-sm border-r border-gray-700/50 min-h-[calc(100vh-4rem)]">
          <nav className="p-4">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-red-500/20 to-orange-600/20 border border-red-500/30 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                    }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'events' && renderEvents()}
          {activeTab === 'announcements' && renderAnnouncements()}
          {activeTab === 'participants' && (
            <div className="text-center text-gray-400 mt-20">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">Participant Management</h3>
              <p>Coming soon - View and manage participant data</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="text-center text-gray-400 mt-20">
              <Settings className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">Settings</h3>
              <p>Coming soon - System configuration and preferences</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;