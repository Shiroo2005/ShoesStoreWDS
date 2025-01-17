import { Card, Typography, Space } from "antd";
const { Title, Text } = Typography;

const DashboardCard = ({ title, value, color = "#1890ff", icon }) => {
  return (
    <Card style={{ backgroundColor: color }} bodyStyle={{ padding: 24 }}>
      <Space direction="vertical" style={{ width: '100%', color: '#fff' }}>
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <div>
            <Title level={3} style={{ color: '#fff', margin: 0 }}>{value}</Title>
            <Text style={{ color: '#fff' }}>{title}</Text>
          </div>
          <div style={{ fontSize: 24 }}>{icon}</div>
        </Space>
        <Text style={{ color: '#fff' }}>Thông tin thêm</Text>
      </Space>
    </Card>
  );
};

export default DashboardCard;