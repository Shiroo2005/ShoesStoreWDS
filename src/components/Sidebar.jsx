import { Layout, Menu, Typography } from "antd";
import { HomeOutlined, UserOutlined, ShoppingOutlined, FileOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { Title } = Typography;

const Sidebar = () => {
  const menuItems = [
    { key: "1", icon: <HomeOutlined />, label: "TRANG CHỦ" },
    { key: "2", icon: <UserOutlined />, label: "KHÁCH HÀNG" },
    { key: "3", icon: <ShoppingOutlined />, label: "SẢN PHẨM" },
    { key: "4", icon: <FileOutlined />, label: "ĐƠN HÀNG" },
  ];

  return (
    <Sider width={200} theme="light">
      <div style={{ padding: 16, textAlign: 'center' }}>
        <Title level={4}>WDSHOE</Title>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;