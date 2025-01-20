import { Layout } from "antd";
// import { AdminHeader } from './components/AdminHeader.jsx';
import AdminHeader from '../../../components/admin/headeradmin/AdminHeader';

import Sidebar from '../../../components/admin/Sidebar/Sidebar.jsx';
import Dashboard  from '../../../components/admin/dashboard/Dashboard.jsx';


const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <AdminHeader />
        <Layout.Content style={{ background: '#f0f2f5' }}>
          <Dashboard />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default App;
