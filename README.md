# 🔐 Full Stack Authentication App

A complete authentication system built using **HTML, CSS, JavaScript, Node.js, and Express**.
This project demonstrates secure user signup, login with JWT, protected routes, and logout functionality.

---

## 🚀 Live Features

* 📝 User Signup with password hashing (bcrypt)
* 🔑 Secure Login with JWT authentication
* 🛡️ Protected Dashboard route
* 💾 Token stored in localStorage
* 🔄 Session persists on page refresh
* 🚪 Logout functionality
* ❌ Direct dashboard access blocked without token
* 🌐 Frontend ↔ Backend integration

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript

### Backend

* Node.js
* Express.js
* bcryptjs
* jsonwebtoken
* cors

---

## 📂 Project Structure

```
auth-app-js/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── index.html
│   ├── signup.html
│   ├── dashboard.html
│   └── script.js
│
└── .gitignore
```

---

## 🔄 Authentication Flow

1. User signs up → password hashed using bcrypt
2. User logs in → credentials verified
3. Server generates JWT token
4. Frontend stores token in localStorage
5. Protected route verifies token via middleware
6. Logout removes token and redirects to login

---

## ▶️ How to Run Locally

### 🔹 Run Backend

```bash
cd backend
npm install
node server.js
```

### 🔹 Run Frontend

Open frontend files using **Live Server** in VS Code:

```
frontend/index.html
```


## 🧠 Key Learning Outcomes

* Password hashing and security basics
* JWT authentication flow
* Express middleware usage
* Protected routes implementation
* Frontend–backend communication
* Session handling with localStorage


## 🔮 Future Improvements

* 🔐 Add refresh tokens
* 🗄️ Integrate MongoDB
* 🎨 Improve UI/UX
* 🌐 Deploy backend and frontend
* 📱 Make responsive
