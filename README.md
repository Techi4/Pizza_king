# 🍕 Pizza King

Pizza King is a modern food delivery and multi-vendor platform built using the MERN stack. The project provides a complete foundation for customers, restaurants/vendors, administrators, and delivery operations.

The platform is designed to support online food ordering, vendor management, product/menu management, payments, location-based delivery, and order management.

---

## 🚀 Project Overview

Pizza King is designed as a scalable food-delivery platform where:

- Customers can browse food items and place orders.
- Vendors can manage their restaurants, menus, products, and orders.
- Administrators can manage users, vendors, products, and platform operations.
- Customers can select delivery locations using map-based services.
- Online payments can be integrated using Stripe.
- MongoDB Atlas is used for persistent data storage.
- The frontend and backend are separated for easier development and deployment.

---

## 🛠️ Technology Stack

### Frontend

- React.js
- Vite
- React Router
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- Mongoose
- REST APIs
- Nodemon

### Database

- MongoDB
- MongoDB Atlas

### Integrations

- Google Maps API
- Stripe Payment Gateway

### Deployment

- Vercel
- GitHub

---

## 📁 Project Structure

```text
PizzaKing1/
│
├── admin/
│   └── Admin dashboard
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │
│   ├── routes/
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── ...
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
