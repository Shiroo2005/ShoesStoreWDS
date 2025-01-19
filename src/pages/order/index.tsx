import React, { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
    Layout,
    Table,
    Button,
    Radio,
    Space,
    Typography,
    InputNumber,
} from "antd";
import { dataSource } from "./data";
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export default function OrderPage() {
    const [data, setData] = useState(dataSource);

    const handleQtyChange = (key: string, value: number) => {
        const newData = [...data];
        const index = newData.findIndex((item) => item.key === key);
        if (index > -1) {
            newData[index].qty = value;
            newData[index].total = newData[index].price * value;
            setData(newData);
        }
    };

    const handleRemove = (key: string) => {
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
    };

    const subtotal = data.reduce((total, item) => total + item.total, 0);

    const columns = [
        {
            title: "Sản Phẩm",
            dataIndex: "product",
            key: "product",
            render: (_, record) => (
                <Space align="start">
                    <img
                        src={record.image}
                        alt={record.product}
                        style={{ width: 50, height: 50, backgroundColor: "#fff" }}
                    />
                    <div>
                        <Text strong>{record.product}</Text>
                        <br />
                        <Text type="secondary">{record.details}</Text>
                    </div>
                </Space>
            ),
        },
        {
            title: "Giá tiền",
            dataIndex: "price",
            key: "price",
            render: (price) => `€${price.toFixed(2)}`,
        },
        {
            title: "Số lượng",
            dataIndex: "qty",
            key: "qty",
            render: (_, record) => (
                <Space>
                    <Button
                        onClick={() => handleQtyChange(record.key, record.qty - 1)}
                        disabled={record.qty <= 1}
                    >
                        -
                    </Button>
                    <InputNumber
                        min={1}
                        value={record.qty}
                        onChange={(value) => handleQtyChange(record.key, value)}
                    />
                    <Button onClick={() => handleQtyChange(record.key, record.qty + 1)}>
                        +
                    </Button>
                </Space>
            ),
        },
        {
            title: "Thành tiền",
            dataIndex: "total",
            key: "total",
            render: (total) => `€${total.toFixed(2)}`,
        },
        {
            render: (_, record) => (
                <Button danger type="link" onClick={() => handleRemove(record.key)}>
                    Xóa
                </Button>
            ),
        },
    ];

    return (
        <Layout>
            <main className="order-container">
                {/* Header */}
                <div className="order-header">
                    <div className="order-title">Đơn hàng của tôi</div>
                    <div className="order-actions">
                        <button aria-label="Go back">
                            <ArrowLeftOutlined />
                        </button>
                        <p>Tiếp tục mua sắm</p>
                    </div>
                </div>
                {/* Content */}
                <Content
                    style={{
                        padding: "20px 50px",
                        height: "calc(100vh - 300px)",
                        marginBottom: "10px",
                        overflowY: "scroll",
                    }}
                >
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        summary={() => (
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0} colSpan={3} />
                            </Table.Summary.Row>
                        )}
                    />
                </Content>
                <Content
                    style={{
                        padding: "20px 50px",
                        height: "200px",
                        background: "#f7f9fc", // Light gray background for the section
                        borderRadius: "15px", // Rounded corners
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#e2e6e9",
                    }}
                >
                    {/* Shipping Mode Section */}
                    <div
                        style={{
                            width: "60%",
                        }}
                    >
                        <Title level={5}>Chọn phương thức vận chuyển</Title>
                        <Radio.Group defaultValue="pickup">
                            <Space direction="vertical">
                                <Radio value="pickup">
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span> Nhận hàng tại cửa hàng (trong 20 phút) </span>
                                        <span style={{ fontWeight: "bold" }}>Miễn phí</span>
                                    </div>
                                </Radio>
                                <Radio value="delivery">
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span>Giao hàng tận nhà (Dưới 2 - 4 ngày)
                                            </span>
                                            <span style={{ fontWeight: "bold" }}>9.90 €</span>
                                        </div>
                                        <Text type="secondary">
                                            At 45 Glenridge Ave. Brooklyn, NY 11220
                                        </Text>
                                    </div>
                                </Radio>
                            </Space>
                        </Radio.Group>
                    </div>

                    {/* Summary Section */}
                    <div
                        style={{
                            width: "30%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                            }}
                        >
                            <Text>Thanh toán:</Text>
                            <Text strong>1954.97 €</Text>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                            }}
                        >
                            <Text>Phí vận chuyển:</Text>
                            <Text strong> Miễn phí</Text>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "20px",
                            }}
                        >
                            <Text>Thanh tiền:</Text>
                            <Text strong>1954.97 €</Text>
                        </div>

                        {/* Checkout Button */}
                        <Button
                            type="primary"
                            block
                            style={{
                                background: "#ff4d4f",
                                borderColor: "#ff4d4f",
                                fontWeight: "bold",
                                height: "50px",
                            }}
                        >
                            Thanh toán 1954.97 €
                        </Button>
                    </div>
                </Content>
            </main>
        </Layout>
    );
}