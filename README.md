# 🩺 Arogyam – Elder Health Monitoring System

## 📌 Project Overview

Arogyam is a web-based health monitoring system designed to help caregivers track and manage the health of elderly individuals. It provides real-time health data updates, alerts, and role-based access for efficient monitoring.

---

## 🚀 Features

* 🔐 **Authentication System**

  * User Login & Registration
  * Secure JWT-based authentication

* 👥 **Role-Based Access**

  * Admin / Care Manager / User roles
  * Restricted access to sensitive features

* 📊 **Health Data Management**

  * Add and update patient health data
  * Track vitals like heart rate, BP, etc.

* ⚠️ **Alerts System**

  * Automatic alerts for abnormal health conditions

* 📜 **History Tracking**

  * View past health records

* 📱 **Responsive UI**

  * Mobile-friendly design using Bootstrap

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Bootstrap / CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Other Tools

* JWT (Authentication)
* Git & GitHub

---

## 📂 Project Structure

```
Arogyam/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Arogyam.git
cd Arogyam
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🌐 API Endpoints (Sample)

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | /api/auth/register | Register user   |
| POST   | /api/auth/login    | Login user      |
| GET    | /api/health        | Get health data |
| POST   | /api/health        | Add health data |

---

## 🔒 Authentication

* Uses JWT Token
* Protected routes using middleware
* Token required in headers:

```
Authorization: Bearer <token>
```



## 🧠 Future Enhancements

* 📡 IoT device integration
* 📊 Graph visualization of health data
* 📱 Mobile app version
* 🤖 AI-based health prediction

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Push and create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---



---

⭐ If you like this project, don’t forget to star the repository!
