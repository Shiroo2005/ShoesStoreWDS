import { Menu } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./header.css";

const Header = () => {
  return (
    <div className="app-header">
      {/* Logo */}
      <div className="logo">WDSHOE</div>

      {/* Menu */}
      <Menu mode="horizontal" defaultSelectedKeys={["1"]} className="menu">
        <Menu.Item key="1">Trang chủ</Menu.Item>
        <Menu.Item key="2">Bộ sưu tập</Menu.Item>
        <Menu.Item key="3">Thông báo</Menu.Item>
        <Menu.Item key="4">Cửa hàng</Menu.Item>
        <Menu.Item key="5">Liên hệ</Menu.Item>
      </Menu>

      {/* Icons */}
      <div className="icons">
        <UserOutlined className="icon" />
        <ShoppingCartOutlined className="icon" />
      </div>
    </div>
  );
};

export default Header;
