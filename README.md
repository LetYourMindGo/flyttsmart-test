# Booking Flow – Test Assignment

This project implements a simple end-to-end booking flow as part of a test assignment.

The goal is to demonstrate a clean and minimal full-stack solution using the following technologies:

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** NestJS, TypeScript
- **Database:** PostgreSQL
- **Email:** Nodemailer (SMTP)

The solution is intentionally kept simple and readable, without over-engineering.

---

## 📌 Features

- Booking form where a customer enters:
  - Name
  - Email
  - Desired moving date
- Backend API that:
  - Validates incoming data
  - Stores bookings in PostgreSQL
  - Sends an automatic confirmation email
- Fully working end-to-end flow:
  **Frontend → Backend → Database → Email**

---

## 📁 Project Structure

flyttsmart-test/ \
├─ client/ # Frontend (Next.js) \
└─ server/ # Backend (NestJS)

yaml

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18+ recommended)
- Docker
- npm

---

## 🗄️ Database (PostgreSQL)

The project uses PostgreSQL running in Docker.

### Start PostgreSQL with Docker

```bash
docker run --name booking-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=booking \
  -p 5432:5432 \
  -d postgres
```

### Database credentials used by the backend:

Host: localhost\
Port: 5432\
User: postgres\
Password: postgres\
Database: booking

## ⚙️ Backend (NestJS)
### Location
```bash
    server/
```
### Environment variables
Create a `.env` file in the `server` directory:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=booking
```
### Install dependencies
```bash
Copy code
cd server
npm install
```
### Start the backend
```bash
Copy code
npm run start:dev
```
The backend will be available at:

```bash
http://localhost:3001
```
### API Endpoint
```http
POST /bookings
```

Request body example:
```json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "moveDate": "2025-01-20"
}
```

## ✉️ Email
The backend sends a booking confirmation email using **Nodemailer**.

For testing purposes, an SMTP service such as **Ethereal Email** can be used.
Email configuration is intentionally kept simple for the scope of this assignment.

## 🎨 Frontend (Next.js)
```bash
client/
```
### Install dependencies
```bash
cd client
npm install
```
### Start the frontend
```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:3000
```

### Styling
- Tailwind CSS (v3.x – stable)
- Utility-first approach
- No custom UI libraries used

## 🧠 Design Decisions
- The project avoids unnecessary complexity (no CQRS, no message queues, no microservices).
- Tailwind CSS v3 is used instead of v4 to ensure stable integration with Next.js App Router.
- TypeORM `synchronize: true` is enabled for simplicity (acceptable for a test assignment).
- Business logic is kept minimal and easy to follow.

## ✅ Result
- Booking data is saved to PostgreSQL
- Confirmation email is sent automatically
- Clean separation between frontend and backend
- Simple, readable, and maintainable codebase

## 📝 Notes
This project is intended as a technical test assignment and not as a production-ready system.
Security, error handling, and scalability considerations are intentionally kept minimal.

## 👤 Author
Created as part of a technical test assignment by **Igor Puris**.