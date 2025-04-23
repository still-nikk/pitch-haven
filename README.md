# PitchHaven - A Virtual Pitch Competition Platform

## Document:
System Requirement Specification Document

## Title:
System Requirement Specification for Pitch Haven

## Table of Contents
1. [Introduction](#introduction)
2. [System Overview](#system-overview)
3. [Features](#features)
4. [System Requirements](#system-requirements)
5. [Technology Stack](#technology-stack)
6. [Installation Guide](#installation-guide)
7. [Usage](#usage)
8. [API Endpoints](#api-endpoints)
9. [Database Schema](#database-schema)
10. [Project Roadmap](#project-roadmap)
11. [Contributing](#contributing)
12. [License](#license)

## Introduction
**PitchHaven** is a Next.js 15-based platform where entrepreneurs can submit their startup ideas or code projects for virtual pitch competitions. Users can browse, engage with, and gain exposure for their projects, fostering an innovative ecosystem for startups and developers.

## System Overview
PitchHaven provides an intuitive interface for users to:
- Submit startup ideas or code projects.
- Participate in virtual pitch competitions.
- Browse and explore other projects.
- Gain exposure through a clean, minimalistic design.
- Engage with the startup community.

## Features
- **User Authentication** (Sign-up/Login using OAuth, JWT)
- **Project Submission & Management** (CRUD operations for pitch entries)
- **Voting & Feedback System** (Upvotes, comments)
- **Search & Filtering** (Sort projects based on categories, popularity, and recency)
- **Dashboard for Pitch Owners** (Manage submitted pitches, analytics, and user engagement)
- **Admin Panel** (Moderation, content approval, user management)
- **Responsive UI/UX** (Minimalistic and user-friendly design)

## System Requirements
- Node.js (v18+)
- MongoDB (Database)
- Redis (Optional: Caching)
- Next.js 15
- TypeScript

## Technology Stack
- **Frontend:** Next.js 15, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** OAuth, JWT
- **Deployment:** Vercel, AWS, Docker (Planned)

## Installation Guide
### Prerequisites
Ensure that Node.js, npm, and MongoDB are installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/PitchHaven.git
   cd PitchHaven
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (`.env` file):
   ```ini
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secret_key
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Access the application at `http://localhost:3000`

## Usage
- Register/Login using OAuth or email authentication.
- Submit your project with details like title, description, category, and GitHub links.
- Browse other projects and vote/comment on them.
- View analytics on the dashboard.

## API Endpoints
### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Pitches
- `GET /api/pitches` - Retrieve all pitches
- `POST /api/pitches` - Submit a new pitch
- `PUT /api/pitches/:id` - Update pitch details
- `DELETE /api/pitches/:id` - Delete a pitch

### Comments
- `POST /api/comments/:pitchId` - Add a comment to a pitch
- `GET /api/comments/:pitchId` - Get comments for a pitch

## Database Schema
- **Users**: Stores user details (name, email, profile picture, authentication credentials)
- **Pitches**: Stores pitch submissions with details
- **Comments**: Stores user comments on pitches
- **Votes**: Stores upvotes/downvotes for each pitch

## Project Roadmap
### Phase 1: MVP Development
✔ Basic authentication (OAuth, JWT)
✔ Project submission and browsing
✔ Upvoting and commenting system
✔ MongoDB integration

### Phase 2: Enhancements
- Admin Panel for moderation
- Leaderboard & ranking system
- Advanced filtering and search
- Analytics dashboard

### Phase 3: Deployment & Scaling
- Deploy on Vercel/AWS
- Docker support
- Implement caching using Redis

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
---
**Maintainer:** 
Nikunj | [LinkedIn](https://www.linkedin.com/in/nikunj-maheshwari1/) | [GitHub](https://github.com/still-nikk)
Priyanka | [LinkedIn](https://www.linkedin.com/in/priyanka-gupta-50809b252/) | [GitHub](https://github.com/priyankag12/)


