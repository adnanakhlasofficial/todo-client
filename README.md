Here’s the updated `README.md` with **demo environment variables** for the frontend. These are placeholder values that users can replace with their own Firebase credentials and API URLs.

````markdown
# Planify - Todo Application

Planify is a simple yet powerful todo application that allows users to manage their tasks efficiently. Users can create, update, and delete tasks, and track their progress by dragging and dropping tasks between different categories (e.g., "To Do", "In Progress", "Done") or by selecting options from a dropdown.

## Features

- **User Authentication**: Users can sign up and log in to manage their tasks using Firebase Authentication.
- **Task Management**: Users can create, update, and delete tasks.
- **Task Progress Tracking**: Users can update the progress of tasks by dragging and dropping them between categories or by selecting options like "In Progress" and "Done".
- **Responsive Design**: The application is designed to work seamlessly across different devices.

## Technologies Used

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database used to store user and task data.
- **MongoDB Node.js Driver**: The official MongoDB driver for Node.js.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Dotenv**: A zero-dependency module that loads environment variables from a `.env` file.
- **Morgan**: HTTP request logger middleware for Node.js.

### Frontend

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web applications.
- **Firebase**: For user authentication and real-time database functionality.
- **React Beautiful DnD**: A library for beautiful and accessible drag-and-drop lists with React.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.

---

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (either locally or a cloud instance like MongoDB Atlas)
- Firebase project setup (for authentication)
- Git

---

### Backend Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/planify.git
   cd planify/backend
   ```
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root of the `backend` directory and add the following variables:

   ```env
   PORT=3000
   URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo?retryWrites=true&w=majority
   ```

   Replace `<username>` and `<password>` with your MongoDB credentials.

4. **Start the server**

   ```bash
   npm start
   ```

   For development with hot-reloading:

   ```bash
   npm run dev
   ```

---

### Frontend Setup

1. **Navigate to the frontend directory**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root of the `frontend` directory and add the following Firebase configuration:

   ```env
   VITE_API_KEY=your_firebase_api_key
   VITE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_PROJECT_ID=your_firebase_project_id
   VITE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_APP_ID=your_firebase_app_id
   VITE_API_URL=http://localhost:3000
   ```

   Replace the placeholder values with your Firebase project credentials:

   - `your_firebase_api_key`: Your Firebase API key.
   - `your_firebase_auth_domain`: Your Firebase authentication domain.
   - `your_firebase_project_id`: Your Firebase project ID.
   - `your_firebase_storage_bucket`: Your Firebase storage bucket.
   - `your_firebase_messaging_sender_id`: Your Firebase messaging sender ID.
   - `your_firebase_app_id`: Your Firebase app ID.

   Example:

   ```env
   VITE_API_KEY=AIzaSyAVsRHY9Gk1ec6aQUyVhrUZtBpA05LPrX4
   VITE_AUTH_DOMAIN=todo-scic.firebaseapp.com
   VITE_PROJECT_ID=todo-scic
   VITE_STORAGE_BUCKET=todo-scic.appspot.com
   VITE_MESSAGING_SENDER_ID=805321311894
   VITE_APP_ID=1:805321311894:web:67634561ff0b649863e4b7
   VITE_API_URL=http://localhost:3000
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The frontend application should now be running on `http://localhost:5173` (default Vite port).

---

## API Endpoints

### User Endpoints

- **POST /user**: Create a new user.
- **GET /users**: Get all users.

### Task Endpoints

- **POST /tasks**: Create a new task.
- **GET /tasks**: Get all tasks for a specific user.
- **PATCH /tasks/:id**: Update the category of a task.
- **DELETE /tasks/:id**: Delete a task.

---

## Firebase Configuration

The frontend uses Firebase for user authentication. Ensure that you have set up a Firebase project and enabled the following services:

1. **Firebase Authentication**: Enable Email/Password or Google Sign-In.
2. **Firestore Database**: (Optional) If you plan to use Firestore for additional data storage.

Update the Firebase configuration in the `.env` file with your Firebase project credentials.

---

## Live Demo

You can check out the live demo of Planify here: [Planify Live Demo](https://planify-da.netlify.app/)

---

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Special thanks to the creators of React, MongoDB, Firebase, and all the other libraries used in this project.
- Inspiration for this project came from various todo applications available online.

---

Feel free to reach out if you have any questions or need further assistance! Happy coding! 🚀

```

### Key Changes:
1. Added **placeholder values** for the Firebase environment variables in the `.env` file.
2. Provided an **example** of how the `.env` file should look with actual Firebase credentials.
3. Made it clear that users need to replace the placeholders with their own Firebase project details.

This version of the `README.md` is ready to use and includes clear instructions for setting up the frontend environment variables.
```
