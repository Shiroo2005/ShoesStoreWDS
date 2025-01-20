import { Layout, Menu, Typography } from "antd";
import { HomeOutlined, UserOutlined, ShoppingOutlined, DollarOutlined } from "@ant-design/icons";
import "./index.css";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { Title } = Typography;


const Sidebar = () => {
  const nav = useNavigate()

  const menuItems = [
    { key: "/", icon: <HomeOutlined />, label: "TRANG CHỦ" },
    { key: "/users", icon: <UserOutlined />, label: "KHÁCH HÀNG" },
    { key: "/products", icon: <ShoppingOutlined />, label: "SẢN PHẨM" },
  ];

  return (
    <Sider width={200} className="sidebar">
      <div className="logoweb">
        <Title
          level={4}
          className="logoweb"
          style={{ cursor: "pointer" }}
          onClick={() => nav('/')}
        >
          WDSHOE
        </Title>

      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuItems.map(item => ({
          ...item,
          className: "menu-item"
        }))}
        className="menu"
        onClick={(e) => nav(`/admin${e.key}`)
        }
      />
    </Sider>
  );
};

export default Sidebar;
