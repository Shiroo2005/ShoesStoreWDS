// App.js
import React from "react";
import "./index.css";

import { Layout } from "antd";
// import { AdminHeader } from './components/AdminHeader.jsx';
import AdminHeader from '../../../../components/admin/headeradmin/AdminHeader.jsx';
import Productmanage from '../../../../components/admin/product/manage.jsx'
import Sidebar from '../../../../components/admin/Sidebar/Sidebar.jsx';
const App = () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <AdminHeader />
          <Layout.Content style={{ background: '#f0f2f5' }}>
          <Productmanage/>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  };
  
  export default App;