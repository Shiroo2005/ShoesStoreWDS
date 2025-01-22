/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
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
import AccountSettings from './pages/AccountSettings/AccountSettings';
import { useDispatch, useSelector } from 'react-redux';
import { doGetAccountAction } from './redux/account/accountSlice';
import { getAccountAPI } from './utils/AuthAPI';
import Sidebar from './components/admin/Sidebar/Sidebar';
import AdminHeader from './components/admin/headeradmin/AdminHeader';
import { Layout } from 'antd';
import NotPermitted from './pages/Error/NotPermitted/NotPermitted';
import OrderPage from './pages/order';

const LayoutUser = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const LayoutAdmin = () => {
  const isAdminRoute = window.location.pathname.startsWith('/admin');
  const user = useSelector(state => state.account.user);
  const userRole = user.role;

  return (
    (isAdminRoute && userRole == 'Admin') ? <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <AdminHeader />
        <Layout.Content style={{ background: '#f0f2f5' }}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
      :
      <NotPermitted />
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutUser />,
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
      {
        path: "user/:id",
        element: <AccountSettings />,
      }      
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomeAdminPage />
      },
      {
        path: 'products',
        element: <ProductAdminPage />
      },
      {
        path: 'users',
        element: <UserAdminPage />
      },
    ],
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