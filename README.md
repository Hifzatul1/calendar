Calendar App

A simple and user-friendly Calendar App designed to manage company communications, schedules, and tasks. This application is built using React for the frontend and a backend (Node.js/Express) to handle data storage and APIs.


---

Features

Company Management: Add and view company details including name, location, LinkedIn profile, email, phone, and periodicity of communication.

Communication Tracking: Log and track communications with companies including LinkedIn posts, messages, emails, phone calls, and other types.

Task Management: View overdue and due-today tasks directly in the calendar view.

React Calendar Integration: A calendar view powered by react-calendar to display tasks and due dates.

Role-Based Access: Admin users have access to the dashboard, calendar, and forms for company and communication management.

Notifications: Notify users of upcoming deadlines and tasks.



---

Tech Stack

Frontend:

React: User Interface

React Router: Navigation

React Calendar: Interactive calendar component

CSS/Material-UI: Styling


Backend:

Node.js: Server-side logic

Express.js: API development

MongoDB/MySQL: Database (customizable)



---

Installation

Prerequisites

Node.js (>= 16.x)

npm or yarn

Git

MongoDB/MySQL (depending on your choice of database)


Steps

1. Clone the Repository

git clone https://github.com/<your-username>/calendar-app.git
cd calendar-app


2. Install Dependencies

For Frontend:

cd frontend
npm install

For Backend:

cd backend
npm install



3. Set Up Environment Variables

Frontend: Create a .env file in the frontend directory and configure it as needed.

Backend: Create a .env file in the backend directory with the following:

PORT=5000
MONGO_URI=<your-mongo-db-uri>
JWT_SECRET=<your-jwt-secret>



4. Run the Application

Start the backend server:

node server.js

Start the frontend:

cd frontend
npm start





---

Usage

Dashboard

View all companies and recent communications.


Calendar

View all tasks, filter by due date or overdue tasks.


Forms

Add or edit company details via the Company Form.

Add or log communication details via the Communication Form.


Notifications

Get alerts for upcoming deadlines.



---

Contributing

1. Fork the repository.


2. Create a feature branch (git checkout -b feature-name).


3. Commit your changes (git commit -m 'Add some feature').


4. Push to the branch (git push origin feature-name).


5. Open a Pull Request.




---
