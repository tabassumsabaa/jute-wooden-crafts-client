# 🌿 Woodsy Wonders — Jute & Wooden Crafts

Woodsy Wonders is a full-stack web application for discovering, adding, managing, and exploring handmade jute and wooden craft products.

The application provides Firebase authentication, protected routes, craft management features, category-based browsing, responsive design, and a MongoDB-powered backend API.

## 🌐 Live Website

**Client:**  
https://jute-wooden-crafts-client.vercel.app/

**Server API:**  
https://jute-wooden-craft-server-rw94.vercel.app/

## ✨ Key Features

- User registration and login
- Firebase Authentication
- Social authentication
- Protected/private routes
- Add new craft items
- View all craft products
- View individual craft details
- View crafts added by the logged-in user
- Update existing craft information
- Delete craft items
- Browse crafts by category
- Featured craft section
- Artisan section
- Light/Dark theme support
- Responsive design for desktop, tablet, and mobile
- MongoDB database integration
- REST API integration

## 🛠️ Technologies Used

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- SweetAlert2
- React Icons
- React Awesome Reveal
- React Simple Typewriter

### Backend

- Node.js
- Express.js
- MongoDB
- CORS
- dotenv

### Deployment

- Vercel — Client
- Vercel — Server
- MongoDB Atlas — Database
- Firebase — Authentication

## 🔐 Authentication

Firebase Authentication is used for user authentication.

The application supports protected routes so that authenticated users can access features such as:

- Add Craft
- My Crafts
- Update Craft
- Other user-specific functionality

## 📦 Main Craft Features

Users can:

1. Browse available craft products
2. View detailed information about a craft
3. Add their own craft products
4. View their added products
5. Update their products
6. Delete their products
7. Browse products based on craft categories

## 🗂️ Project Structure

```text
src/
├── Components/
├── Pages/
├── assets/
├── AuthProvider.jsx
├── firebase.config.js
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Environment Variables

Create a `.env.local` file in the project root and add the Firebase configuration required by `src/firebase.config.js`.

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/tabassumsabaa/jute-wooden-crafts-client.git
```

Enter the project:

```bash
cd jute-wooden-crafts-client
```

Install dependencies:

```bash
npm install
```

Create and configure `.env.local`, then start the development server:

```bash
npm run dev
```

The application will normally run at:

```text
http://localhost:5173
```

## 🔗 Backend

This frontend communicates with the Woodsy Wonders Express/MongoDB REST API.

Server repository:

https://github.com/tabassumsabaa/jute-wooden-craft-server

## 👩‍💻 Author

**Sabiha Tabassum Saba**

GitHub:  
https://github.com/tabassumsabaa
E-mail:sabiatabassum0511@gmail.com

---

⭐ If you find this project useful, feel free to star the repository.
