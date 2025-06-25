# 🌱 TreePlant

<img src="https://i.ibb.co/0pykTHd0/tour1.png" width="100%" alt="TreePlant Logo" />

A dynamic and responsive web application that allows users to explore a curated collection of plants and manage their personal garden digitally. Built with the MERN stack (React, Express, MongoDB), TreePlant promotes environmental awareness and encourages users to grow and maintain their favorite trees virtually.

---

## 🌐 Live Website

🔗 [Visit Live Site](https://tree-plant-store.web.app/)

---

## 🖼️ Project Preview

<img src="https://i.ibb.co/9w7DTt1/treePlant-preview.png" alt="TreePlant Screenshot" width="100%" />

---

## 🚀 Key Features

- 🔐 Firebase Authentication (Login/Register/Logout)
- 🪴 Add, Update, Delete plants (user-specific)
- 🌗 Global Theme Toggle (Dark/Light)
- 🔍 Filter plants by category (Fruit, Flower, Indoor)
- 📅 Human-readable timestamps with `date-fns`
- ✅ Toast messages using `react-toastify`
- 💡 Tooltips for better UX using `react-tooltip`
- 🌐 SPA routing with `react-router-dom`
- ✨ Scroll-based animations via AOS
- 📱 Fully responsive and mobile-friendly

---

## ⚙️ Technologies Used

### 💻 Frontend
- React
- Tailwind CSS
- DaisyUI
- React Router
- Firebase Auth

### 🧪 Backend
- Node.js (Optional)
- Express.js (Optional)
- MongoDB Atlas (Optional)

---
## 📡 API Endpoints  

---

### 📦 Packages

| Method | Endpoint        | Description                  |
|--------|-----------------|------------------------------|
| GET    | `/packages`     | Get all tour packages         |
| GET    | `/packages/:id` | Get a tour package by ID      |
| POST   | `/packages`     | Add a new tour package        |
| PATCH  | `/packages/:id` | Update a tour package by ID   |
| DELETE | `/packages/:id` | Delete a tour package by ID   |

---

### 👤 Users

| Method | Endpoint        | Description                  |
|--------|-----------------|------------------------------|
| GET    | `/users`        | Get all users                |
| GET    | `/users/:email` | Get user info by email       |
| POST   | `/users`        | Register or save a new user  |
| PATCH  | `/users/:id`    | Update user info or role     |

---

### 📄 Bookings

| Method | Endpoint          | Description                    |
|--------|-------------------|--------------------------------|
| GET    | `/bookings`       | Get all bookings               |
| GET    | `/bookings/:email`| Get bookings of a specific user|
| POST   | `/bookings`       | Create a new booking           |
| DELETE | `/bookings/:id`   | Cancel or delete a booking     |

---




## 📦 Main Dependencies

```bash
react, react-router-dom, firebase, react-icons,
aos, react-tooltip, react-toastify, axios,
classnames, date-fns, vite,
@vitejs/plugin-react, @heroicons/react, @headlessui/react

## 📦 Locally Run
git clone https://github.com/smnahidweb/tree-plant.git
cd tree-plant
