import React from "react";
import { Typography, Row, Col, Card } from "antd";
import "./About.css"; // Import CSS tùy chỉnh

const { Title, Paragraph } = Typography;

const AboutPage = () => {
    return (
        <div className="about-container">
            <Title level={2} className="about-title">Về Chúng Tôi</Title>
            <Paragraph className="about-description">
                Chào mừng bạn đến với <strong>WDSHOE</strong> – nơi mang đến những đôi giày thời trang, chất lượng và phong cách.
                Chúng tôi cam kết cung cấp những sản phẩm tốt nhất với giá cả hợp lý, giúp bạn tự tin thể hiện cá tính của mình.
            </Paragraph>

            <Row gutter={[16, 16]} className="about-cards">
                <Col xs={24} sm={12} md={8}>
                    <Card title="Sản phẩm chất lượng" bordered={false} className="card">
                        Giày được làm từ vật liệu cao cấp, bền đẹp và êm ái.
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card title="Phong cách đa dạng" bordered={false} className="card">
                        Nhiều mẫu mã từ thể thao, casual đến sang trọng, phù hợp mọi lứa tuổi.
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                    <Card title="Dịch vụ tận tâm" bordered={false} className="card">
                        Hỗ trợ khách hàng 24/7, đổi trả dễ dàng trong 7 ngày.
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutPage;
