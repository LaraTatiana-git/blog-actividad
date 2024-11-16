**Blog API Application**
An API built with Express.js for managing blog posts and authors. This application provides endpoints for creating and managing blog posts and authors with MySQL database integration using Sequelize ORM.

**Features**

🔐 Secure API implementation with Helmet
📝 Full CRUD operations for blog posts and authors
🗄️ MySQL database integration with Sequelize ORM
✅ Complete test suite with Jest
📝 Request logging and error handling
⚡ CORS enabled

**Prerequisites**
Ensure you have Node.js and npm installed on your machine. You can download them from Node.js official website.
MySQL Server
Environment variables configured

**Instalación**

**1. Clona el repositorio:**
 
   git clone https://github.com/LaraTatiana-git/blog-actividad.git
   
**Install dependencies:**
Configure environment variables in .env:

**Database Setup**
The application uses MySQL with Sequelize. Database migrations are located in the migrations folder:

Authors table creation
Posts table creation
To set up the database:

Running the Application
Start the server:

**For development with auto-reload:**

API Endpoints
Authors
POST /api/authors - Create a new author
GET /api/authors - Get all authors
Posts
POST /api/posts - Create a new post
GET /api/posts - Get all posts
GET /api/posts/author/:id - Get posts by author

**Testing**
Run the test suite:
npm test

The tests are located in api.test.js and cover both author and post endpoints.

**Project Structure**

├── config/
│   ├── config.js
│   └── db.js
├── migrations/
├── src/
│   ├── __tests__/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── app.js
├── server.js
└── package.json

**Health Check**
The API includes a health check endpoint at /health that returns:

**Service status**
Database connection status
Timestamp
Service version information

**Error Handling**
The application includes centralized error handling through the errorHandler middleware.

**License**
This project is licensed under the ISC License.
