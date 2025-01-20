import React, { useEffect, useState } from "react";
import { Row, Col, Button, Select, InputNumber, Card } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import "./ProductDetail.css"; // File CSS tùy chỉnh
import { useParams } from "react-router-dom";
import { getProductDetailAPI } from "../../utils/ProductAPI";

const { Option } = Select;

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const [size, setSize] = useState("XS");
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams()

    const getDetailProduct = async () => {
        const result = await getProductDetailAPI(id)
        console.log(result);
        setProduct(result.data)
    }

    useEffect(() => {
        console.log(id);
        getDetailProduct()
    }, [])

    return (
        product.name ? <div className="product-detail-container">
            <Row gutter={[32, 32]}>
                {/* Hình ảnh sản phẩm */}
                <Col xs={24} md={12}>
                    <Card bordered={false} className="product-image-card">
                        <img
                            src={product.images[0].fileName} // Thay bằng ảnh sản phẩm
                            alt="Shoe"
                            className="product-image"
                        />
                    </Card>

                    {/* Danh sách hình ảnh thu nhỏ */}
                    <div className="product-thumbnails">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.fileName}
                                alt={`thumb${index + 1}`}
                                className="product-thumbnail"
                            />
                        ))}
                    </div>
                </Col>

                {/* Thông tin sản phẩm */}
                <Col xs={24} md={12}>
                    <h2 className="product-title">{product.name}</h2>
                    <h3 className="product-price">{product.price.toLocaleString("vi-VN")}đ</h3>
                    <hr />

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
                            <Button style={{ width: "100%" }} type="primary" icon={<ShoppingCartOutlined />} className="add-to-cart">
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
        </div>
            : <></>
    );
};

export default ProductDetail;
