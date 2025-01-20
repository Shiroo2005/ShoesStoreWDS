import { Menu } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./header.css";
import HomePage from "../../pages/HomePage/HomePage";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(state => state.account.user)

  const navigate = useNavigate()
  const param = useParams()

  const items = [
    {
      label: 'Trang chủ',
      key: '/'
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
        <div>
          <span>Hello, <a href="#">{user.userName} </a></span>
        </div>
        <ShoppingCartOutlined className="icon" />
      </div>
    </div>
  );
};

export default Header;
