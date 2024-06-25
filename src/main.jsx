import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx'
import Book from './pages/Books.jsx'
import User from './pages/Users.jsx'
import Register from './pages/Register.jsx'
import './style/style.css'
import TodoApp from './component/TodoApp.jsx';
import ErrorPage from './pages/Erro.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/book",
        element: <Book />
      },
      {
        path: "/user",
        element: <User />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/register",
    element: <Register />
  },



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
