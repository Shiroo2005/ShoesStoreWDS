import { Card, Typography, Space } from "antd";
const { Title, Text } = Typography;
import './DashboardCard.css';

const DashboardCard = ({ title, value, color = "#1890ff", icon }) => {
  return (
    <Card style={{ background: color }} className="choosecard">
    <div className="content-wrapper">
      <div className="card-header">
        <div>
          <Title level={1} style={{ color: '#fff', margin: 0 }}>{value}</Title>
          <Text className="textvalue" level={2} style={{ color: '#fff' }}>{title}</Text>
        </div>
        <div className="icon-right">{icon}</div>
      </div>
    </div>
    <div className="info-box">
      <span className="info-text">Thông tin thêm</span>
    </div>
</Card>

  );
};

export default DashboardCard;
