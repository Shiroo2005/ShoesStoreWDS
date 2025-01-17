import { Layout, Input, Badge, Space, Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import './index.css';

const { Header } = Layout;
const { Search } = Input;
const { Title } = Typography;

const AdminHeader = () => {
  return (
    <Header className="header">
      <Title level={4} style={{ margin: 0 }}>TRANG QUẢN TRỊ WEBSITE</Title>
      <Space size={24}>
        <Search
          placeholder="tìm kiếm"
          className="search adjusted-search"
        />
        <Badge count={0}>
          <div className="logoutbutton-wrapper">
            <LogoutOutlined className="logoutbutton" />
          </div>
        </Badge>
      </Space>
    </Header>
  );
};

export default AdminHeader;
