import { Card, Typography, Space } from "antd";
const { Title, Text } = Typography;
import './DashboardCard.css';

const DashboardCard = ({ title, value, color = "#1890ff", icon }) => {
  return (
    <Card style={{ backgroundColor: color }} className="choosecard">
      <div className="content-wrapper">
        <div className="card-header">
          <div>
            <Title level={3} style={{ color: '#fff', margin: 0 }}>{value}</Title>
            <Text style={{ color: '#fff' }}>{title}</Text>
          </div>
          <div className="icon-right">{icon}</div>
        </div>
        <div className="info-box">
          <span className="info-text">Thông tin thêm</span>
        </div>
      </div>
    </Card>
  );
};

export default DashboardCard;
