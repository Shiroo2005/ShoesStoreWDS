import { Layout, Menu, Typography } from "antd";
import { HomeOutlined, UserOutlined, ShoppingOutlined, DollarOutlined } from "@ant-design/icons";
import "./index.css"; 

const { Sider } = Layout;
const { Title } = Typography;

const Sidebar = () => {
  const menuItems = [
    { key: "1", icon: <HomeOutlined />, label: "TRANG CHỦ" },
    { key: "2", icon: <UserOutlined />, label: "KHÁCH HÀNG" },
    { key: "3", icon: <ShoppingOutlined />, label: "SẢN PHẨM" },
    { key: "4", icon: <DollarOutlined />, label: "ĐƠN HÀNG" },
  ];

  return (
    <Sider width={200} className="sidebar">
      <div className="logoweb">
        <Title level={4} className="logoweb">WDSHOE</Title>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuItems.map(item => ({
          ...item,
          className: "menu-item"
        }))}
        className="menu"
      />
    </Sider>
  );
};

export default Sidebar;
