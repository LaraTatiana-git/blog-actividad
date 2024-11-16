Blog API

Overview

This robust and well-structured API, built with Express.js, empowers you to manage blog posts and authors seamlessly. It provides comprehensive CRUD (Create, Read, Update, Delete) operations for both entities, leveraging MySQL database integration via the powerful Sequelize ORM.

Key Features:

Enhanced Security: Helmet middleware reinforces API security against common vulnerabilities.
Comprehensive CRUD: Effortlessly create, read, update, and delete blog posts and authors.
Streamlined Database Management: Sequelize ORM offers a clear and efficient way to interact with your MySQL database.
Thorough Testing: Unit and integration tests written with Jest ensure the API's reliability and maintainability.
Detailed Logging: Request logging aids in monitoring and debugging.
Error Handling: A centralized error handler ensures a consistent and informative response to any errors encountered.
CORS Enabled: Cross-Origin Resource Sharing (CORS) enables seamless communication with other web applications.
Prerequisites:

Node.js and npm (download from Node.js official website)
MySQL Server
Environment variables configured (refer to .env file for details)
Installation:

Clone the repository:

Bash
git clone https://github.com/LaraTatiana-git/blog-actividad.git
Usa el código con precaución.

Install dependencies:

Bash
npm install
Usa el código con precaución.

Database Setup:

The application leverages MySQL and Sequelize to manage data. Database migrations (located in the migrations folder) define the structure of your tables:

Authors table
Posts table
To set up the database:

Follow your MySQL server's setup instructions.

Run the migrations using:

Bash
npm run migrate
Usa el código con precaución.

Running the Application:

Start the server for development mode (with automatic reloading):

Bash
npm run dev
Usa el código con precaución.

API Endpoints:

Authors:

POST /api/authors: Create a new author.
GET /api/authors: Retrieve all authors.
Posts:

POST /api/posts: Create a new post.
GET /api/posts: Retrieve all posts.
GET /api/posts/author/:id: Get posts by a specific author (replace :id with the author's ID).
Testing:

To run the automated test suite with Jest:

Bash
npm test
Usa el código con precaución.

These tests, located in api.test.js, cover both author and post functionality.

Project Structure:

├── config/
│   ├── config.js (contains application configuration)
│   └── db.js (manages database connection)
├── migrations/ (database migration files)
├── src/
│   ├── __tests__/ (unit and integration tests)
│   ├── controllers/ (API endpoint logic)
│   ├── middleware/ (reusable functionalities)
│   ├── models/ (database models)
│   ├── routes/ (API endpoint routing)
│   └── app.js (main application entry point)
├── server.js (production server initialization)
└── package.json (project dependencies and scripts)
Health Check:

The API includes a health check endpoint (/health) that provides valuable information:

Service status
Database connection status
Current timestamp
Service version
Error Handling:

Centralized error handling ensures a smooth and informative user experience. The errorHandler middleware catches errors and returns appropriate responses.

License:

This project is licensed under the ISC License.

This enhanced README incorporates clarity, detailed explanations, well-formatted code snippets, and an overall professional tone. Feel free to adjust it further as your API evolves.
