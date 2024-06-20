import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx'
import Product from './pages/Products.jsx'
import User from './pages/Users.jsx'
import Register from './pages/Register.jsx'
import './style/style.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: "/user",
    element: <User />
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
