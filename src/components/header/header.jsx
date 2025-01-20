import { Dropdown, Menu, message, Space } from "antd";
import { UserOutlined, ShoppingCartOutlined, LoginOutlined, DownOutlined } from "@ant-design/icons";
import "./header.css";
import HomePage from "../../pages/HomePage/HomePage";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../utils/AuthAPI";
import { doLogoutAction } from "../../redux/account/accountSlice";

const Header = () => {
  const user = useSelector(state => state.account.user)
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logout(user.id)
    if (result.message) {
      message.success(result.message)
      navigate('/login')
      dispatch(doLogoutAction())
    }
  }

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

  const settings = [
    {
      label: (
        <a href="#" rel="noopener noreferrer">
          Setting
        </a>
      ),
      key: '0',
    },
    ...(user.role == 'Admin'
      ? [
        {
          label: (
            <a href="/admin" rel="noopener noreferrer">
              Trang quản trị
            </a>
          ),
          key: '3',
        },
      ]
      : []),
    {
      label: (
        <a onClick={handleLogout} rel="noopener noreferrer">
          Logout
        </a>
      ),
      key: '1',
    },
  ];


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
        {user.userName ? (
          <>
            <Dropdown
              menu={{
                items: settings
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <a href="#">Hello, {user.userName}</a>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <ShoppingCartOutlined className="icon" />
          </>

        ) : (

          <a href="/login">Đăng nhập</a>
        )}

      </div>
    </div>
  );
};

export default Header;
