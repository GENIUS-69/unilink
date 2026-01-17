# 🧠 Product Requirements Document (PRD)

## Project: UniLink — Smart Campus Networking Platform

---

## 1. Overview

### Concept

**UniLink** is a smart campus networking platform that bridges the gap between students, faculty, and administrators.  
It combines the **professional focus of LinkedIn** with the **community-driven experience of Reddit** — tailored for a university ecosystem.

Users can connect, collaborate on projects, join clubs, participate in events, and share opportunities — all through a modern, gamified interface.  
Additionally, the **Analytics Dashboard** empowers admins and faculty with actionable insights into engagement, activity, and growth trends.

---

## 2. Objectives

- Centralize university communication and collaboration in one platform.
- Enhance student engagement and participation in academic and extracurricular activities.
- Provide real-time updates and live discussions for university events and projects.
- Offer administrators data-driven insights through a visual analytics dashboard.
- Encourage active contribution via a gamified reputation system.

---

## 3. Target Users

| User Type | Description | Core Access |
|------------|--------------|--------------|
| **Student** | Primary platform users; can post, comment, join clubs and events | Feed, projects, clubs, messaging |
| **Faculty** | Mentors or moderators; can manage clubs, events, and review posts | Feed, clubs, events, analytics view |
| **Admin** | University admin; manages users, posts, events, and analytics | Full control panel with dashboard access |

---

## 4. Core Features

### 4.1 User Profiles

- Role-based (Student, Faculty, Admin)
- Profile picture, bio, badges, and reputation score
- Posts, joined clubs, and events listed on profile

### 4.2 Feed System

- Live feed with posts, polls, and media
- Real-time updates via WebSockets
- Like, comment, and share functionality

### 4.3 Events & Clubs

- Browse or create clubs and events
- RSVP for events and manage participation
- Club announcements and event reminders

### 4.4 Projects Board

- Collaborative board for student or research projects
- Add contributors, track progress, and share updates

### 4.5 Messaging & Notifications

- Real-time 1:1 or group chats via Socket.IO
- Notifications for mentions, club updates, or events

### 4.6 Gamified Reputation System

- Points for engagement (posts, comments, event attendance)
- Leaderboard for top contributors
- Achievement badges

### 4.7 Admin Controls

- Manage users, posts, and reports
- Approve or reject events and club creations
- Access full analytics dashboard

### 4.8 Analytics Dashboard

- User growth, engagement, and participation metrics
- Visual charts for posts, comments, and event attendance
- Club and project activity tracking
- AI-generated insights (optional)
- Downloadable reports (CSV or PDF)

---

## 5. Analytics Dashboard Details

### Key Metrics

- Daily/weekly new users
- Active users and retention
- Posts, likes, and comment trends
- Event creation and attendance rates
- Club member growth
- Top contributors by reputation

### Visualization Tools
- Line charts for user growth
- Bar/area charts for engagement
- Pie charts for event participation
- Tables for leaderboard and summary data

### AI-Powered Insights (Optional)
- Detects engagement drops or growth trends
- Suggests content or event strategies
- Predicts optimal posting times and event schedules

---

## 6. Technology Stack

| Layer | Technology | Purpose |
|--------|-------------|----------|
| **Frontend** | React.js, Redux Toolkit, Tailwind CSS, Framer Motion | UI, state management, styling, animations |
| **Backend** | Node.js, Express.js | REST API & WebSocket server |
| **Database** | MongoDB Atlas | NoSQL storage for users, posts, and events |
| **Real-Time** | Socket.IO | Live feed and chat updates |
| **Media** | Cloudinary | Store profile and event images |
| **Authentication** | JWT + bcrypt.js | Secure login and access control |
| **Analytics** | MongoDB Aggregation, Chart.js/Recharts | Data visualization and tracking |
| **Notifications** | Nodemailer, Firebase Cloud Messaging | Emails and push notifications |
| **AI (Optional)** | OpenAI API / Gemini API | Intelligent recommendations and insights |
| **Deployment** | Vercel, Render / Railway | Hosting and deployment |
| **CI/CD** | GitHub Actions | Continuous integration and delivery |

---

## 7. Functional Flow

1. **User Authentication**
   - Register → Login → Role verified via JWT  
   - Redirected to personalized dashboard (based on role)

2. **Feed Interaction**
   - Users post or comment → Instant broadcast via WebSocket  
   - Engagement actions logged for analytics and reputation

3. **Events & Clubs**
   - Create/join clubs and RSVP for events  
   - Notifications sent for upcoming or new events

4. **Reputation System**
   - Points increase with likes, comments, and event participation  
   - Achievements and leaderboard updates dynamically

5. **Analytics Collection**
   - Every action stored in logs  
   - Cron jobs aggregate metrics daily/weekly  
   - Dashboard fetches analytics via API endpoints

6. **AI Insights (Optional)**
   - Uses engagement data to generate improvement suggestions  
   - Displays insights directly on the admin dashboard

---

## 8. Non-Functional Requirements

| Requirement | Description |
|--------------|--------------|
| **Performance** | API response < 300ms under normal load |
| **Scalability** | Modular MERN structure allows easy expansion |
| **Security** | Role-based JWT authentication, bcrypt password hashing |
| **Usability** | Mobile-responsive, accessible UI |
| **Availability** | 99% uptime through cloud deployment |
| **Maintainability** | Well-documented code and RESTful APIs |

---

## 9. Success Metrics

- ≥ 70% student participation within 3 months
- ≥ 200 daily active users in university pilot
- 90% positive user satisfaction (survey-based)
- Reduction of manual event announcements by 80%
- Improved admin visibility into engagement trends

---

## 10. Future Enhancements

- AI-powered chatbot for campus queries
- Blockchain-based verified participation certificates
- Progressive Web App (PWA) for offline access
- Predictive analytics for engagement and event timing
- Exportable analytics reports for university management

---

## 11. Expected Deliverables

1. Fully functional MERN application (frontend + backend)
2. Deployed demo (Vercel + Render/Railway)
3. Project documentation (README + PRD)
4. Optional presentation deck for placements

---

## 12. Summary

**UniLink** reimagines how universities connect their people.  
By integrating social networking, gamification, and analytics, it creates a digital ecosystem where students grow, faculty engage, and admins understand their community through data-driven insights.

---

**Project Owner:** Genius  
**Version:** 1.0  
**Year:** 2026  
