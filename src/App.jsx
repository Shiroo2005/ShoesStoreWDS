/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import OrderPage from './pages/order';
import HomePage from './pages/HomePage/HomePage';
import './styles/global.css'
import HomeAdminPage from './pages/admin/home';
import ProductAdminPage from './pages/admin/product/manage';
import UserAdminPage from './pages/admin/user/manage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ContactPage from './pages/Contact/Contact';
import NotFoundPage from './pages/Error/NotFoundPage/NotFound';
import AboutPage from './pages/About/About';
import { useDispatch, useSelector } from 'react-redux';
import { doGetAccountAction } from './redux/account/accountSlice';
import { getAccountAPI } from './utils/AuthAPI';

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
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />
      },
      {
        path: "about",
        element: <AboutPage />
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
    path: "/productadmin",
    element: <ProductAdminPage />
  },
  {
    path: "/useradmin",
    element: <UserAdminPage />
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
  const dispatch = useDispatch()

  const getAccount = async () => {

    if (window.location.pathname == '/register' ||
      window.location.pathname == '/login') return
    const response = await getAccountAPI();
    console.log(response);

    if (response && response.data) {
      dispatch(doGetAccountAction(response.data))
    }
  }

  useEffect(() => {
    getAccount()

  }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}