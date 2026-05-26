<div align="center">

# TripAIO

**A full-stack travel planning platform — discover, plan, book, and track trips in one place.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-tripaio.onrender.com-4f46e5?style=flat-square&logo=render&logoColor=white)](https://tripaio.onrender.com)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

</div>

---

## Overview

TripAIO brings together everything a traveler needs — destination discovery with interactive maps, personalized itinerary generation, group expense splitting, staycation bookings, and community reviews — all behind a secure, responsive interface.

---

## Features

- **Map-based Exploration** — Browse and discover destinations visually
- **Smart Itineraries** — Generate day-by-day personalized travel plans
- **Expense Splitting** — Track and split trip costs across your group
- **Staycation Booking** — Find and reserve local stays
- **Reviews & Ratings** — Share and read authentic travel experiences
- **Secure Auth** — Session-based authentication with Passport.js
- **Responsive UI** — Seamless experience across all screen sizes

---

## Tech Stack

```
Frontend   HTML .EJS · CSS · JavaScript
Backend    Node.js · Express.js
Database   MongoDB · Mongoose
Auth       Passport.js · Express Session
Storage    Cloudinary
Deploy     Render
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or [Atlas](https://www.mongodb.com/atlas))
- [Cloudinary](https://cloudinary.com) account

### Installation

```bash
git clone https://github.com/arushijain18/tripaio.git
cd tripaio
npm install
```

### Environment Variables

Create a `.env` file at the root with your MongoDB URI, session secret, and Cloudinary credentials.

### Run

```bash
node app.js
```

App runs at `http://localhost:3000`

---

## Project Structure

```
├── controllers/       # Route logic
├── models/            # Mongoose schemas
├── routes/            # Express routes
├── views/             # EJS templates
├── public/            # Static assets
├── utils/             # Helpers & middleware
├── init/              # DB seed data
└── app.js             # Entry point
```

---

## Deployment

Hosted on **Render** — auto-deploys on every push to `main`.

🔗 [https://tripaio.onrender.com](https://tripaio.onrender.com)

---

<div align="center">

Made by [Arushi Jain](https://github.com/arushijain18)

</div>
