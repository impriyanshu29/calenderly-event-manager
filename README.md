# Dynamic Event Calendar Application

## Overview
The Dynamic Event Calendar Application is a React-based web app built using the MERN stack (MongoDB, Express, React, Node.js). It provides a dynamic calendar to manage events, featuring functionality such as adding, editing, deleting, and displaying events. The application persists data using **localStorage** or **MongoDB** and is deployed to **Vercel**, **Netlify**, or another platform.

## Features
- **Calendar View**: Displays a grid of the current month, with options to navigate between months.
- **Event Management**: Add, edit, and delete events for each day, with details such as event name, start time, end time, and description.
- **Event List**: View a list of events for any given day in a side panel or modal.
- **Event Persistence**: Data is stored in **localStorage** or a MongoDB backend for persistence.
- **Complex Logic**:
  - Automatically handle month transitions.
  - Prevent overlapping events.
  - Filter events by keywords.
- **Optional Features**:
  - Drag-and-drop rescheduling.
  - Color-coded events.
  - Export events as **JSON** or **CSV** files.

## Technologies Used
- **Frontend**: React.js, shadcn for UI components
- **Backend**: Node.js, Express, MongoDB (via Mongoose)
- **Data Storage**: localStorage (or MongoDB)
- **Deployment**: Vercel, Netlify, or other platforms

## Setup Instructions
1. Clone the repository:
   
 ```bash
   git clone https://github.com/impriyanshu29/calenderly-event-manager.git
   cd event-calendar

2. For frontend :

 ```bash
   cd client
   npm install
   npm run start

3. For backend :

 ```bash
   cd server
   npm install
   npm run start 



