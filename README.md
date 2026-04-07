# ⌚ WatchShop - Fullstack E-commerce Application

## 📌 Overview

**WatchShop** is a fullstack e-commerce web application for browsing and purchasing watches.
The project demonstrates a complete **client-server architecture**, from frontend UI to backend API and database management.

This project was developed and extended from a coursework foundation, with additional features and improvements in both frontend and backend systems.

---

## 🚀 Tech Stack

* **Frontend:** Vue.js
* **Backend:** Express.js (Node.js)
* **Database:** PostgreSQL
* **Deployment:** Nginx (Reverse Proxy)

---

## 🧩 System Architecture

```
Client (Vue.js) → Nginx → Express API → PostgreSQL
```

* **Vue.js** handles UI and user interactions
* **Express.js** provides RESTful APIs
* **PostgreSQL** stores product, user, and order data
* **Nginx** manages routing and deployment

---

## ✨ Features

### 🛍️ User Features

* Browse watch products
* View product details
* Add to cart
* Place orders
* User authentication (login/register)

### 🔐 Admin Features

* Manage products (CRUD)
* Manage orders
* Manage users

---

## 🗄️ Database Design

* Users
* Products
* Orders
* Order Details

Relational database design ensures data consistency and scalability.

---

## ⚙️ Installation & Setup

### 1. Clone repository

```bash
git clone https://github.com/Krypto1910/WatchShop.git
cd WatchShop
```

---

### 2. Setup Backend (Express)

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=watchshop
DB_USER=postgres
DB_PASSWORD=yourpassword
```

Run server:

```bash
npm start
```

---

### 3. Setup Frontend (Vue)

```bash
cd frontend
npm install
npm run dev
```

---

### 4. Setup Database (PostgreSQL)

* Create database: `watchshop`
* Import schema (if provided)

---

### 5. Configure Nginx (Optional - Production)

Example config:

```
server {
    listen 80;

    location / {
        proxy_pass http://localhost:5173;
    }

    location /api/ {
        proxy_pass http://localhost:3000;
    }
}
```

---

## 🖥️ Demo

*(Add deployed link or screenshots here)*

---

## 📷 Screenshots

*(Add UI screenshots for better presentation)*

---

## ⚠️ Notes

* This project is for educational purposes
* Sensitive data (API keys, database credentials) are not included
* Environment variables are required to run the project

---

## 👨‍💻 Author

**Krypto1910**

---

## 📌 Future Improvements

* Payment integration (VNPay / Stripe)
* Product search & filtering
* Performance optimization
* Mobile responsiveness

---

## 📄 License

This project is for learning and portfolio purposes.
