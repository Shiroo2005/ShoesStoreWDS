import React, { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ContactPage from './components/contact';
import OrderPage from './pages/order';
import HomePage from './pages/HomePage/HomePage';
import './styles/global.css'
import HomeAdminPage from './pages/admin/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Productpage from './pages/admin/product/manage'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "contact",
        element: <ContactPage />,
      },

    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/admin",
    element: <HomeAdminPage />
  },
  {
    path: "/product",
    element: <Productpage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/order",
    element: <OrderPage />
  }
]);


export default function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}