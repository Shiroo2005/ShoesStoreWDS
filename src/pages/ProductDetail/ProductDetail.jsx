import React, { useState } from "react";
import { Row, Col, Button, Select, InputNumber, Card, Radio, Tabs } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import "./ProductDetail.css"; // File CSS tùy chỉnh

const { Option } = Select;

const ProductDetail = () => {
    const [color, setColor] = useState("blue");
    const [size, setSize] = useState("XS");
    const [quantity, setQuantity] = useState(1);
    const items = [
        {
            key: '1',
            label: 'Mô tả',
            children: <p>Product Description</p>
        },
    ];

    return (
        <div className="product-detail-container">
            <Row gutter={[32, 32]}>
                {/* Hình ảnh sản phẩm */}
                <Col xs={24} md={12}>
                    <Card bordered={false} className="product-image-card">
                        <img
                            src="https://via.placeholder.com/500" // Thay bằng ảnh sản phẩm
                            alt="Shoe"
                            className="product-image"
                        />
                    </Card>
                    <div className="product-thumbnails">
                        <img src="https://via.placeholder.com/100" alt="thumb1" />
                        <img src="https://via.placeholder.com/100" alt="thumb2" />
                        <img src="https://via.placeholder.com/100" alt="thumb3" />
                    </div>
                </Col>

                {/* Thông tin sản phẩm */}
                <Col xs={24} md={12}>
                    <h2 className="product-title">Tên giày</h2>
                    <h3 className="product-price">990.000đ</h3>
                    <hr />

                    {/* Chọn màu sắc */}
                    <div className="product-option">
                        <p>Màu sắc:</p>
                        <Radio.Group value={color} onChange={(e) => setColor(e.target.value)}>
                            <Radio value="blue">🔵</Radio>
                            <Radio value="red">🔴</Radio>
                            <Radio value="black">⚫</Radio>
                            <Radio value="yellow">🟡</Radio>
                        </Radio.Group>
                    </div>

                    {/* Chọn kích thước */}
                    <div className="product-option">
                        <p>Kích thước:</p>
                        <Select value={size} onChange={setSize} style={{ width: 80 }}>
                            <Option value="XS">XS</Option>
                            <Option value="S">S</Option>
                            <Option value="M">M</Option>
                            <Option value="L">L</Option>
                        </Select>
                    </div>

                    {/* Chọn số lượng */}
                    <div className="product-option">
                        <p>Số lượng:</p>
                        <InputNumber
                            min={1}
                            max={10}
                            value={quantity}
                            onChange={setQuantity}
                        />
                    </div>

                    <Row gutter={16}>
                        <Col span={16}>
                            {/* Nút thêm vào giỏ hàng */}
                            <Button type="primary" icon={<ShoppingCartOutlined />} className="add-to-cart">
                                Thêm vào giỏ hàng
                            </Button>


                        </Col>
                        <Col span={8}>
                            {/* Nút yêu thích */}
                            <Button icon={<HeartOutlined />} className="wishlist" />
                        </Col>
                    </Row>

                    {/* Ghi chú giao hàng */}
                    <p className="shipping-info">🚚 Giao hàng trong vòng 5 ngày</p>
                </Col>
            </Row>
            <Tabs defaultActiveKey="1" items={items} />

        </div>
    );
};

export default ProductDetail;
