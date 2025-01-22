import { Row, Col } from "antd";
import { ShoppingCartOutlined, UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import DashboardCard from '../dashboardcard/DashboardCard.jsx';
import '../dashboardcard/DashboardCard.css'
import { dataDashboardAPI } from "../../../utils/ProductAPI.js";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [userCount, setUserCount] = useState()
  const [productCount, setProductCount] = useState()
  const getData = async () => {
    const result = await dataDashboardAPI()
    if (result) {
      setUserCount(result?.userCount)
      setProductCount(result?.productCount)
    }

  }
  useEffect(() => {
    getData()
  }, [])

  const dashboardData = [

    {
      title: "KHÁCH HÀNG",
      value: userCount,
      color: "linear-gradient(135deg, #E5CE05, #FFEA97)", // Gradient màu cam
      icon: <UserOutlined />
    },
    {
      title: "SẢN PHẨM",
      value: productCount,
      color: "linear-gradient(135deg, #05E723, #B3FEAE)", // Gradient màu xanh lá
      icon: <AppstoreOutlined />
    }
  ];


  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        {dashboardData.map((item, index) => (
          <Col span={8} key={index} push={4}>
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