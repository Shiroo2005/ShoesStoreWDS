import { Menu } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./header.css";
import HomePage from "../../pages/HomePage/HomePage";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate()
  const param = useParams()

  const items = [
    {
      label: 'Trang chủ',
      key: '/'
    },
    {
      key: '/product',
      label: 'Bộ sưu tập'
    },
    {
      key: '/notification',
      label: 'Thông báo'
    },
    {
      key: '/about',
      label: 'Cửa hàng'
    },
    {
      key: '/contact',
      label: 'Liên hệ'
    },
  ]

  return (
    <div className="app-header">
      {/* Logo */}
      <div className="logo">WDSHOE</div>

      {/* Menu */}
      <Menu mode="horizontal"
        defaultSelectedKeys={['/']}
        className="menu"
        items={items}
        onClick={(e) => {
          navigate(e.key)
        }}
        selectedKeys={[location.pathname]}
      />

      {/* Icons */}
      <div className="icons">
        <UserOutlined className="icon" />
        <ShoppingCartOutlined className="icon" />
      </div>
    </div>
  );
};

export default Header;
