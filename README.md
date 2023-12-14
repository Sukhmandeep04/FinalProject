📓 FINAL PROJECT


📕Overview
The Task Management System is a web application designed to assist users in managing tasks and projects efficiently. The project is organized into different directories and files to maintain a structured codebase.

📗Project Structure
 The project structure is organized into the following main directories:
 📌 backend: Contains the backend code, including server setup, models, controllers, routes, middleware, and the MongoDB connection.
     - controllers: Handles CRUD operations for users, tasks, and projects.
     - middleware: Contains authentication and authorization middleware functions.
     - models: Defines Mongoose models for users, tasks, and projects.
     - routes: Manages routes for users, tasks, and projects.
     
  📌 frontend: Houses the frontend code built with React. It includes components, pages, and services for a user-friendly interface.
    - components: Holds reusable React components, such as TaskForm.
    - pages: Represents different views of the application, such as Home, Tasks, and Projects.
    - services: Contains functions for interacting with the backend using Axios.
    
  📌 public: Contains public assets like the index.html file.
  📌 node_modules: Stores Node.js modules installed as dependencies.
  📌 package.json: Lists project metadata and dependencies for Node.js.
  📌 server.js: The main entry point for the backend, where the server is set up and configured.
  📖 README.md: Documentation file providing an overview of the project, installation instructions, and project structure.

📌 Backend
   📙 Controllers
       - userController.js: Manages CRUD operations for users.
       - taskController.js: Handles CRUD operations for tasks.
       - projectController.js: Controls CRUD operations for projects.

  📙 Middleware
      - authMiddleware.js: Contains middleware functions for user authentication and role-based authorization.

  📙 Models
      - user.js: Defines the Mongoose model for users.
      - task.js: Defines the Mongoose model for tasks.
      - project.js: Defines the Mongoose model for projects.

   📙 Routes
      - userRoutes.js: Handles user-related routes.
      - taskRoutes.js: Manages task-related routes.
      - projectRoutes.js: Manages project-related routes.
      
📌 Frontend

   📘 Components
      - TaskForm.js: A form component for creating tasks.
      - home.js: Displays a welcome message and key features of the task management system on the home page.
      - projects.js: Represents the Projects page with a welcome message.
      - tasks.js: Implements the Tasks page, including a form for task creation and a list of existing tasks fetched from the backend.

📌 Services
  📗 apiService.js: Provides functions for making API requests to the backend.

🔖 Additional Notes
  Database: MongoDB is used for data storage. The backend connects to the MongoDB database to perform CRUD operations on users, tasks, and projects.

  Authentication: JWT (JSON Web Token) is implemented for user authentication. Users receive tokens upon login, which are stored securely for subsequent authenticated requests.

✉️ Role-Based Access Control (RBAC): Different roles (admin, regular user) have distinct permissions. Middleware functions ensure that only authorized users can access specific routes and perform actions.

Feel free to explore and extend the project based on your needs. For more detailed information on each file and directory, refer to the corresponding sections in the documentation.
