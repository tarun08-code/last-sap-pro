# TechEdu Summit 2025 - Event Management Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-5.4.2-purple?style=for-the-badge&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind-3.4.1-teal?style=for-the-badge&logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/Supabase-2.57.4-green?style=for-the-badge&logo=supabase" alt="Supabase">
</div>

<div align="center">
  <h3>🚀 <a href="https://sage-longma-724afd.netlify.app">Live Demo</a></h3>
</div>

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Admin Panel](#-admin-panel)
- [Participant Features](#-participant-features)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Overview

TechEdu Summit 2025 is a comprehensive event management platform designed for hackathons, conferences, and tech events. It provides a seamless experience for both participants and administrators with modern UI/UX, real-time features, and intelligent networking capabilities.

## ✨ Features

### 🎯 **Participant Experience**
- **Modern Landing Page**: Engaging interface with event details and registration
- **User Authentication**: Secure signup/signin with Supabase integration
- **AI Personal Assistant**: Smart recommendations based on user profile
- **Interactive Venue Map**: Visual representation of event locations and facilities
- **Smart QR Code Networking**: Generate and scan QR codes for instant contact exchange
- **Event Timeline**: Track registration, announcements, and event progression
- **Skills Tracker**: Monitor learning progress and certificates
- **Team Builder**: Find hackathon teammates and collaborators
- **Intelligent Chatbot**: AI-powered assistant for event information

### 🔐 **Admin Panel**
- **Secure Authentication**: Protected admin access with credentials
- **Comprehensive Dashboard**: Real-time statistics and analytics
- **Event Management**: Create, edit, and manage events with full details
- **Announcement System**: Targeted messaging to specific audiences
- **Participant Management**: User oversight and engagement tracking
- **Settings Panel**: System configuration and preferences

### 🤖 **AI-Powered Features**
- **Smart Suggestions**: Personalized recommendations for participants
- **Networking Matches**: AI-suggested connections with compatibility scores
- **Chatbot Integration**: Intelligent responses to common queries
- **Profile Optimization**: AI recommendations for better networking

## 🛠 Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Routing**: React Router DOM 7.9.3
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **QR Codes**: QR Code generation and scanning
- **Deployment**: Netlify

## 🚀 Getting Started

### Source Code Repository
This repository contains the source code for the TechEdu Summit 2025 platform. The code is ready to be deployed on platforms like Netlify, Vercel, or GitHub Pages.

### Project Structure
- `src/` - React TypeScript source code
- `index.html` - Main HTML template  
- `README.md` - Project documentation
- `.env.example` - Environment variables template

### Deployment Options
1. **Drag & Drop to Netlify**: Simply drag the entire folder to Netlify for instant deployment
2. **GitHub Pages**: Upload to GitHub and enable Pages
3. **Vercel**: Connect repository for automatic deployment

### Environment Setup
Create `.env.local` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_HF_ACCESS_TOKEN=your_hugging_face_token
```

## 🔐 Admin Panel

Access the admin panel at `/admin` with these credentials:
- **Username**: `admin`
- **Password**: `admin123`

### Admin Features:
- **Dashboard Overview**: Key metrics and statistics
- **Event Management**: Create and manage events
- **Announcements**: Send targeted messages
- **Participant Tracking**: Monitor user engagement
- **System Settings**: Configure platform preferences

## 👥 Participant Features

### Registration & Authentication
- Secure user registration with email verification
- LinkedIn profile integration
- Role-based access (participant, speaker, sponsor)

### Interactive Dashboard
- Personalized AI recommendations
- Event timeline and progress tracking
- Networking opportunities with smart matching
- QR code generation for contact exchange

### Event Engagement
- Real-time announcements and updates
- Workshop and session tracking
- Skills and certificate management
- Team formation for hackathons

## 📸 Screenshots

### Landing Page
<div align="center">
  <img src="https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Modern+Landing+Page" alt="Landing Page" width="600">
</div>

### Participant Dashboard
<div align="center">
  <img src="https://via.placeholder.com/800x400/1a1a1a/ffffff?text=AI-Powered+Dashboard" alt="Dashboard" width="600">
</div>

### Admin Panel
<div align="center">
  <img src="https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Comprehensive+Admin+Panel" alt="Admin Panel" width="600">
</div>

## 🚀 Deployment

### Drag & Drop Deployment (Recommended)

1. **Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the entire project folder
   - Add environment variables in Site Settings
   - Your site will be live instantly!

2. **Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop the project folder
   - Configure environment variables
   - Deploy with one click

3. **GitHub Pages**
   - Upload files to GitHub repository
   - Enable GitHub Pages in repository settings
   - Site will be available at `username.github.io/repository-name`

### Environment Variables Setup
Add these in your hosting platform:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_HF_ACCESS_TOKEN=your_hugging_face_token
```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Hugging Face (for AI chatbot)
VITE_HF_ACCESS_TOKEN=your_hugging_face_token

# Optional: Custom configuration
VITE_APP_NAME=TechEdu Summit 2025
VITE_EVENT_DATE=March 15-17, 2025
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🏗 Project Structure

```
src/
├── components/          # React components
│   ├── Admin.tsx           # Admin panel wrapper
│   ├── AdminLogin.tsx      # Admin authentication
│   ├── AdminDashboard.tsx  # Admin dashboard
│   ├── AuthModal.tsx       # User authentication
│   ├── Chatbot.tsx         # AI chatbot
│   ├── Dashboard.tsx       # User dashboard
│   ├── LandingPage.tsx     # Landing page
│   ├── QRCodeGenerator.tsx # QR code functionality
│   └── ...
├── contexts/            # React contexts
│   └── AuthContext.tsx     # Authentication context
├── lib/                # Utilities
│   └── supabase.ts         # Supabase configuration
└── styles/             # CSS styles
```

## 🎯 Key Features Breakdown

### Authentication System
- **Supabase Integration**: Secure user management
- **Role-Based Access**: Different permissions for different user types
- **LinkedIn Integration**: Professional profile linking

### AI-Powered Recommendations
- **Smart Networking**: AI-suggested connections
- **Personalized Content**: Recommendations based on user profile
- **Intelligent Chatbot**: Context-aware responses

### Event Management
- **Real-time Updates**: Live announcements and changes
- **Capacity Management**: Track registrations and limits
- **Multi-day Events**: Support for complex event schedules

### Networking Features
- **QR Code Exchange**: Instant contact sharing
- **Compatibility Matching**: AI-powered networking suggestions
- **Professional Profiles**: Comprehensive user profiles

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Known Issues

- QR code generation requires external API (fallback provided)
- Chatbot requires Hugging Face token (demo mode available)
- Admin panel is currently demo-only (no persistent storage)

## 🔮 Future Enhancements

- [ ] Real-time chat functionality
- [ ] Mobile app companion
- [ ] Advanced analytics dashboard
- [ ] Payment integration for tickets
- [ ] Multi-language support
- [ ] Calendar integration
- [ ] Push notifications

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Authors

- **Tarun** - [@tarun08-code](https://github.com/tarun08-code)

## 🙏 Acknowledgments

- Supabase for authentication and database
- Tailwind CSS for styling
- Lucide React for icons
- Netlify for hosting

---

<div align="center">
  <p>Made with ❤️ for TechEdu Summit 2025</p>
  <p>
    <a href="https://sage-longma-724afd.netlify.app">Live Demo</a> •
    <a href="https://github.com/tarun08-code/last-sap-pro/issues">Report Bug</a> •
    <a href="https://github.com/tarun08-code/last-sap-pro/issues">Request Feature</a>
  </p>
</div>
