<div align="center">

# 🌌 Aurora Weather

### A Modern Weather Forecast Application

<img width="1026" height="651" alt="image" src="https://github.com/user-attachments/assets/f041cbc9-498e-4ba3-8f39-8b0e49398d6c" />


<br/>

![Built With](https://img.shields.io/badge/BUILT_WITH-❤-ff6b6b?style=for-the-badge)
![Made With](https://img.shields.io/badge/MADE_WITH-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Open Source](https://img.shields.io/badge/OPEN-SOURCE-success?style=for-the-badge)

<br/>

[![Report Bug](https://img.shields.io/badge/Report-Bug-red?style=flat-square)](https://github.com/yourusername/Aurora-Weather/issues)
[![Request Feature](https://img.shields.io/badge/Request-Feature-blue?style=flat-square)](https://github.com/yourusername/Aurora-Weather/issues)

</div>

---

Aurora Weather is a modern weather forecasting application built using **React** and **Express.js**. It delivers real-time weather information, forecasts, and location-based weather updates through the WeatherAPI service while keeping your API key secure on the backend.

---

# 🚀 Built With

This project was built using these technologies.

- ⚛ React 19
- ⚡ Vite
- 🟢 Node.js
- 🚀 Express.js
- 🌤 WeatherAPI.com
- 📅 date-fns
- 🌐 CORS
- 🔒 dotenv
- 📦 node-fetch

---

# ✨ Features

- 🌤 Current Weather
- 📅 7-Day Weather Forecast
- ⏰ Hourly Forecast
- 🌍 Search Weather by City
- 📍 Location-Based Weather
- 🌡 Temperature Details
- 💧 Humidity
- 🌬 Wind Speed
- 👀 Visibility
- 🌅 Sunrise & Sunset
- ☁ Weather Conditions
- ⚡ Fast Backend API
- 🔒 Secure API Key Storage
- 📱 Fully Responsive UI
- 🌙 Modern User Interface

---

# 📂 Project Structure

```text
Aurora-Weather/
│
├── client/
│   ├── public/
│   └── src/
│       ├── api/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── README.md
└── package.json
```

---

# ⚙ Tech Stack

| Frontend | Backend | API |
|----------|----------|-----|
| React 19 | Node.js | WeatherAPI |
| Vite | Express.js | REST API |
| date-fns | node-fetch | JSON |
| CSS | dotenv | HTTPS |

---

# 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or newer)
- npm
- A free WeatherAPI account
- WeatherAPI API Key

---

# 🔑 Configure Environment

Create a `.env` file inside the **server** folder.

```env
API_KEY=your_weatherapi_key_here
```

> Keep the API key inside the backend only. Never expose your WeatherAPI key inside the React application.

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/Aurora-Weather.git
```

```bash
cd Aurora-Weather
```

---

## Install Backend

```bash
cd server
npm install
```

---

## Install Frontend

```bash
cd client
npm install
```

---

# ▶ Running the Application

## Start Backend

```bash
cd server
node index.js
```

Server runs at

```
http://localhost:5000
```

---

## Start Frontend

```bash
cd client
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

Open the browser and visit the URL shown in your terminal.

---

# 📡 API Endpoint

Backend Proxy

```
GET /api/weather?city=London
```

Example

```
http://localhost:5000/api/weather?city=Tokyo
```

---

# 🛠 Troubleshooting

### Failed to Fetch

Ensure that:

- Backend server is running.
- `.env` contains a valid API key.
- Port **5000** is available.
- Frontend is pointing to the correct backend URL.

---

### Vite Not Found

```bash
npm install
```

inside the client folder.

---

### Missing Start Script

Run

```bash
node index.js
```

instead of

```bash
npm start
```

---

### npm Audit Warnings

Run

```bash
npm audit fix
```

These warnings usually don't stop the application from working.

---

# 📸 Screenshots

## Home Page

```
Add screenshot here
```

---

## Weather Details

```
Add screenshot here
```

---

## Forecast

```
Add screenshot here
```

---

# 📄 License

This project is distributed under the **MIT License**.

---

<div align="center">

## 👨‍💻 Developer

### Dasula Niduwara

Frontend Developer • React Developer • UI Designer

Made with ❤️ using React & Express

⭐ Don't forget to Star this repository if you found it helpful!

</div>
