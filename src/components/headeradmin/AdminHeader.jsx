import { Layout, Input, Badge, Space, Typography } from "antd";
import { LogoutOutlined,SearchOutlined } from "@ant-design/icons";
import './index.css';

const { Header } = Layout;
// const { Search } = Input;
const { Title } = Typography;

const AdminHeader = () => {
  return (
    <Header className="header">
      <Title level={4} style={{ margin: 0, padding: 0 }}>TRANG QUẢN TRỊ WEBSITE</Title>
      <Space size={4}>
        <Input
          placeholder="tìm kiếm"
          allowClear  // cho phép xóa nội dung
          // enterButton // hiển thị nút tìm kiếm
          enterButton={false}
          size="large" 
          // onSearch={handleSearch} // xử lý khi click tìm kiếm
      
          className="search"
          prefix={<SearchOutlined style={{ color: '#8BA3CB' }} />} 
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
