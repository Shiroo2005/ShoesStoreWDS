import { Layout } from "antd";
// import { AdminHeader } from './components/AdminHeader.jsx';
import AdminHeader from './components/headeradmin/AdminHeader.jsx';

import Sidebar from './components/Sidebar.jsx';
import Dashboard  from './components/Dashboard.jsx';

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
