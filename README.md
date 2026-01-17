
# 🚀 UniLink — Smart Campus Networking Platform

UniLink is a **full-stack MERN-based smart campus networking platform** that modernizes how students, faculty, and administrators connect, collaborate, and engage within a university ecosystem.

It combines **LinkedIn-style professional networking** with **Reddit-like community interaction**, enhanced by **real-time communication, gamification, and analytics dashboards**.

---

## 📌 Table of Contents
- [About the Project](#about-the-project)
- [Objectives](#objectives)
- [Target Users](#target-users)
- [Core Features](#core-features)
- [Analytics Dashboard](#analytics-dashboard)
- [Technology Stack](#technology-stack)
- [Functional Flow](#functional-flow)
- [Authentication & Security](#authentication--security)
- [Environment Variables](#environment-variables)
- [Installation & Setup](#installation--setup)
- [API Overview](#api-overview)
- [Non-Functional Requirements](#non-functional-requirements)
- [Success Metrics](#success-metrics)
- [Future Enhancements](#future-enhancements)
- [Project Status](#project-status)
- [Author](#author)
- [License](#license)

---

## 📖 About the Project

Universities often rely on fragmented tools for communication, collaboration, and engagement.  
**UniLink** solves this by providing a **centralized digital platform** where academic, social, and administrative interactions coexist.

The platform is role-based, scalable, and built using production-grade best practices, making it suitable for real-world deployment and portfolio showcasing.

---

## 🎯 Objectives

- Centralize campus communication and collaboration
- Increase student participation in academic and extracurricular activities
- Enable real-time discussions and updates
- Provide administrators with actionable analytics
- Encourage engagement through gamification and reputation systems

---

## 👥 Target Users

| Role     | Description                                      | Access |
|--------|--------------------------------------------------|--------|
| Student | Primary users                                    | Feed, clubs, events, projects, messaging |
| Faculty | Mentors and moderators                           | Clubs, events, moderation, analytics view |
| Admin   | Platform administrators                          | Full system control & analytics dashboard |

---

## ✨ Core Features

### 👤 User Profiles
- Role-based profiles (Student, Faculty, Admin)
- Avatar, bio, reputation score
- Badges and achievements
- Activity history (posts, clubs, events)

### 📰 Feed System
- Live feed with posts, polls, and media
- Like, comment, and share interactions
- Real-time updates using WebSockets

### 🏫 Clubs & Events
- Create, browse, and manage clubs
- Host events and RSVP
- Announcements and automated reminders

### 🧩 Projects Board
- Collaborative academic and research projects
- Contributor management
- Progress tracking and updates

### 💬 Messaging & Notifications
- Real-time 1:1 and group chats
- Notifications for mentions, events, and club activity

### 🏆 Gamified Reputation System
- Points for posts, comments, and participation
- Leaderboards
- Achievement badges

### 🛠️ Admin Controls
- User, post, and event moderation
- Approval workflows
- Platform-wide visibility

---

## 📊 Analytics Dashboard

### Key Metrics
- Daily and weekly new users
- Active users and retention
- Posts, likes, and comment trends
- Event creation and attendance
- Club growth statistics
- Top contributors by reputation

### Visualization
- Line charts for growth trends
- Bar and area charts for engagement
- Pie charts for participation
- Tables for summaries and leaderboards

### AI-Powered Insights (Optional)
- Detect engagement drops or spikes
- Recommend content and event strategies
- Predict optimal posting and event times

---

## 🧑‍💻 Technology Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Framer Motion
- Chart.js / Recharts

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose (v7+)

### Real-Time & Media
- Socket.IO
- Cloudinary

### Authentication & Security
- JWT (JSON Web Tokens)
- bcrypt.js
- Role-Based Access Control (RBAC)

### Analytics & Notifications
- MongoDB Aggregation Pipeline
- Nodemailer
- Firebase Cloud Messaging (optional)

### DevOps & Deployment
- GitHub Actions (CI/CD)
- Vercel (Frontend)
- Render / Railway (Backend)

---

## 🔄 Functional Flow

### Authentication
```

Register → Login → JWT Issued → Role Verified → Dashboard Access

```

### Engagement
```

Post / Comment / Like → WebSocket Broadcast → Analytics Logged → Reputation Updated

```

### Clubs & Events
```

Create / Join → Notifications Sent → Participation Logged

```

---

## 🔐 Authentication & Security

- Secure JWT-based authentication
- Password hashing using bcrypt
- Role-based authorization for protected routes
- Environment variable–based secret management

---

## ⚙️ Environment Variables

Create a `.env` file in the backend root directory:

```

PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d

```

---

## 🛠️ Installation & Setup

### Backend
```

git clone [https://github.com/GENIUS-69/unilink.git](https://github.com/GENIUS-69/unilink.git)
cd backend
npm install
npm run dev

```

### Frontend
```

cd frontend
npm install
npm run dev

```

---

## 🔌 API Overview

### Authentication
```

POST /api/auth/register
POST /api/auth/login

```

### Protected Routes
```

/api/users
/api/posts
/api/events
/api/clubs
/api/projects
/api/analytics

```

---

## 📋 Non-Functional Requirements

| Requirement      | Description |
|------------------|-------------|
| Performance      | < 300ms API response time |
| Scalability      | Modular MERN architecture |
| Security         | JWT + RBAC |
| Usability        | Mobile-responsive UI |
| Availability     | 99% uptime |
| Maintainability  | Clean code & documentation |

---

## 📈 Success Metrics

- ≥ 70% student participation within 3 months
- ≥ 200 daily active users during pilot
- 90% positive user feedback
- 80% reduction in manual announcements
- Improved admin visibility into engagement trends

---

## 🔮 Future Enhancements

- AI-powered campus chatbot
- Predictive analytics
- Progressive Web App (PWA)
- Blockchain-based participation certificates
- Exportable analytics reports (PDF/CSV)

---

## 🚧 Project Status

🟢 Backend authentication completed  
🟡 Core features under active development  
🔵 Analytics & AI features planned  

---

## 👤 Author

**Genius**  
Project Owner & Full Stack Developer  
Year: 2026

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to fork, learn, and build upon it.

---

⭐ If you find this project useful, consider giving it a star and following the journey of **UniLink**!
