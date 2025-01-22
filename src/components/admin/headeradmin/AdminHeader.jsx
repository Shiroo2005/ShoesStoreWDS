import { Layout, Input, Badge, Space, Typography } from "antd";
import { LogoutOutlined, SearchOutlined } from "@ant-design/icons";
import './index.css';

const { Header } = Layout;
// const { Search } = Input;
const { Title } = Typography;

const AdminHeader = () => {
  return (
    <Header className="header">
      <Title level={4} style={{ margin: 0, padding: 0 }}>TRANG QUẢN TRỊ WEBSITE</Title>

    </Header>
  );
};

export default AdminHeader;
