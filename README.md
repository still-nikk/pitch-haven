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

## Problem Statement:


## Introduction
## 1.1 Objective(Purpose):
**PitchHaven** is a Next.js 15-based platform where entrepreneurs can submit their startup ideas or code projects for virtual pitch competitions. Users can browse, engage with, and gain exposure for their projects, fostering an innovative ecosystem for startups and developers.

## 1.2 Scope:

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

## 1.3 Document conventions:

## 1.4 Intended Audience and Reading Suggestions:

## Overall Description
## 2.1 Product Perspective:


## 2.2 Product Features:


## 2.3 Operating Environment:

## 2.4 Design and Implementation Constraints:

## 2.5 User Classes and Characteristics:

## 2.6 User Documentation:

## 2.7 Assumptions and Dependencies:

# Specific Requirements

## 3.1 External Interface Requirements

### 3.1.1 User Interfaces

### 3.1.2 Hardware Interfaces

### 3.1.3 Software Interfaces

## 3.2 Functional Requirements

### 3.2.1 User Registration and Authentication
- **User Registration:** The system will allow users to create accounts using their college-issued email addresses and unique passwords. This streamlined registration process will enable students, faculty members, and administrators to quickly establish their identities within the system.
- **User Authentication:** Upon login, the system will employ industry-standard encryption protocols to verify users' identities. This ensures a secure and confidential environment for all interactions.

### 3.2.2 Exam Creation and Management

### 3.2.3 Question Bank Management

### 3.2.4 Exam Taking and Submission

### 3.2.5 Result Generation and Reporting

### 3.2.6 User Management and Roles

### 3.2.7 Security and Privacy

## 3.3 Performance Requirements

## 3.4 Design Constraints

## 3.5 Quality Attributes

## 3.6 NonFunctional Requirements:
### 3.6.1 Reliability and Availability:-
### 3.6.2 Load and Stress Testing:-
### 3.6.3 Scalability and Capacity Planning:-
### 3.6.4 Usability and User Experience:-
### 3.6.5 Data Management:-
These non-functional requirements will help ensure that the Online Examination Management System meets not only its functional goals but also the quality, performance, security, and usability expectations of stakeholders.

# Appendices

## 4.1 Glossary
The glossary serves as a valuable resource for defining and clarifying key terminology and concepts used throughout the Online Examination Management System. It includes concise definitions, examples, and contextual explanations of domain-specific terms. The glossary is intended to enhance communication and ensure a common understanding among all stakeholders, including students, faculty members, and administrators.

## 4.2 Analysis Models
In this section, various analysis models are presented to help stakeholders gain a deeper understanding of the system's structure and functionality. These models include but are not limited to:
- **Use Case Diagrams:** These diagrams illustrate the interactions between system users and the system itself, highlighting key use cases and scenarios.
  
  ![use case diagram](https://github.com/priyankag12/Flexi-project/assets/141745158/3606efdb-01bf-4884-aa77-0d1c13a51bff)

- **Class Diagrams:** Class diagrams provide an overview of the system's object-oriented structure, showcasing classes, relationships, and attributes.

- **ER Diagram:** The Entity Relationship Diagram explains the relationship among the entities present in the database.

- **Deployment Diagrams:** A UML deployment diagram is a diagram that shows the configuration of run time processing nodes and the components that live on them.

## 4.3 To Be Determined
---
**Maintainer:** 
Nikunj | [LinkedIn](https://www.linkedin.com/in/nikunj-maheshwari1/) | [GitHub](https://github.com/still-nikk)
Priyanka | [LinkedIn](https://www.linkedin.com/in/priyanka-gupta-50809b252/) | [GitHub](https://github.com/priyankag12/)


