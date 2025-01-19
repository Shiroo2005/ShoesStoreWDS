import React from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import "./Contact.css"; // File CSS tùy chỉnh

const ContactPage = () => {
    const onFinish = (values) => {
        console.log("Form submitted:", values);
    };

    return (
        <div className="contact-container">
            <h2 className="contact-title">Liên hệ chúng tôi</h2>
            <Row gutter={[32, 32]}>
                {/* Form liên hệ */}
                <Col xs={24} md={12}>
                    <Card bordered={false} className="contact-form-card">
                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item name="name" label="Họ và Tên" rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}>
                                <Input placeholder="Nhập họ và tên" />
                            </Form.Item>

                            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Email không hợp lệ!" }]}>
                                <Input placeholder="Nhập email" />
                            </Form.Item>

                            <Form.Item name="phone" label="Số điện thoại" rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}>
                                <Input placeholder="Nhập số điện thoại" />
                            </Form.Item>

                            <Form.Item name="message" label="Nội dung" rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}>
                                <Input.TextArea rows={4} placeholder="Nhập nội dung liên hệ" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>Gửi đi</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>

                {/* Thông tin liên hệ + Bản đồ */}
                <Col xs={24} md={12}>
                    <Card bordered={false} className="contact-info-card">
                        <p><PhoneOutlined /> Số điện thoại: 0987 654 321</p>
                        <p><MailOutlined /> Email: MrTeo@support.com</p>
                        <p><HomeOutlined /> Địa chỉ: 123 Đường Lý Thường Kiệt, Quận Hai Bà Trưng, Web Dev Studio</p>
                    </Card>

                    {/* Bản đồ Google Maps */}
                    <div className="contact-map">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.680243932159!2d106.68374277482276!3d10.759922259442249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e61a6e1eb%3A0x263b2c8b3a3d3c69!2zMTIzIMSQLiBBQkMsIFF14bqjbSBYWlo!5e0!3m2!1sen!2s!4v1700000000000"
                            width="100%"
                            height="250"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ContactPage;
