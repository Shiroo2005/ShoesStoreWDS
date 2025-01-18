import { Row, Col } from "antd";
import { ShoppingCartOutlined, UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import DashboardCard from '../dashboardcard/DashboardCard.jsx';
import '../dashboardcard/DashboardCard.css'
const Dashboard = () => {
  const dashboardData = [
    {
      title: "ĐƠN HÀNG",
      value: "18",
      color: "#1890ff",
      icon: <ShoppingCartOutlined />
    },
    {
      title: "KHÁCH HÀNG",
      value: "117",
      color: "#faad14",
      icon: <UserOutlined  />
    },
    {
      title: "SẢN PHẨM",
      value: "32",
      color: "#52c41a",
      icon: <AppstoreOutlined />
    }
  ];

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        {dashboardData.map((item, index) => (
          <Col span={8} key={index}>
            <DashboardCard
              title={item.title}
              value={item.value}
              color={item.color}
              icon={item.icon}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;