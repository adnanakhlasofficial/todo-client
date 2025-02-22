Got it! Below is the updated README file with demo environment variables instead of your personal ones.

---

# Planify - Todo Application

Planify is a simple yet powerful todo application that allows users to manage their tasks efficiently. Users can create, update, and delete tasks, and track their progress by dragging and dropping tasks between different categories (e.g., "To Do", "In Progress", "Done") or by selecting options from a dropdown.

## Features

- **User Authentication**: Users can sign up and log in to manage their tasks.
- **Task Management**: Users can create, update, and delete tasks.
- **Task Progress Tracking**: Users can update the progress of tasks by dragging and dropping them between categories or by selecting options like "In Progress" and "Done".
- **Responsive Design**: The application is designed to work seamlessly across different devices.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Beautiful DnD**: A library for beautiful and accessible drag and drop functionality.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing user and task data.
- **MongoDB Atlas**: A cloud-based MongoDB service.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **Morgan**: HTTP request logger middleware for Node.js.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas account (for database)

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/adnanakhlasofficial/todo-server.git
   cd todo-server
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `backend` directory and add the following variables:

   ```env
   PORT=3000
   URI='mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority'
   ```

   Replace `<username>`, `<password>`, and `<dbname>` with your MongoDB Atlas credentials.

4. **Start the server**:
   ```bash
   npm start
   ```
   or for development with nodemon:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/adnanakhlasofficial/todo-client.git
   cd planify/backend
   ```

2. **Navigate to the frontend directory**:

   ```bash
   cd todo-client
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the `frontend` directory and add the following variables:

   ```env
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_firebase_auth_domain
   VITE_projectId=your_firebase_project_id
   VITE_storageBucket=your_firebase_storage_bucket
   VITE_messagingSenderId=your_firebase_messaging_sender_id
   VITE_appId=your_firebase_app_id
   VITE_API_URL=http://localhost:3000
   ```

   Replace the Firebase credentials with your own Firebase project details.

5. **Start the development server**:
   ```bash
   npm run dev
   ```

## API Endpoints

### User Endpoints

- **POST /user**: Create a new user.
- **GET /users**: Get all users.

### Task Endpoints

- **POST /tasks**: Create a new task.
- **GET /tasks**: Get all tasks for a specific user.
- **PATCH /tasks/:id**: Update the progress of a task.
- **DELETE /tasks/:id**: Delete a task.

## Live Demo

You can access the live demo of the application here: [Planify Live Demo](https://planify-da.netlify.app/)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to MongoDB Atlas for providing a free tier for database hosting.
- Thanks to the creators of React, Vite, and Tailwind CSS for their amazing tools.

---

This README provides a comprehensive guide to setting up and running the Planify todo application. If you encounter any issues or have any questions, please feel free to reach out. Happy coding! 🚀
