import React from "react";
import { Table, Space, Button, InputNumber, Flex, Badge, Tag, Divider } from "antd";
import { FontSizeOutlined } from "@ant-design/icons";

const ProductTable = ({ data, onEdit, onDelete }) => {
    const columns = [
        {
            title: "Sản Phẩm",
            dataIndex: "name",
            key: "name",
            render: (_, record) => (
                <Flex gap="middle">
                    <img
                        src={record.image || 'https://via.placeholder.com/50'}
                        alt={record.name}
                        style={{ width: 50, height: 50, objectFit: 'cover' }}
                    />
                    <Flex vertical>
                        <strong>{record.name}</strong>
                        <Tag icon={<FontSizeOutlined />}
                            style={{ width: 'fit-content' }}
                            color="blue">{record.brand || "Không có thông tin"}</Tag>
                        <Divider orientation="left">Mô tả</Divider>
                        <div style={{ color: "gray" }}>{record.description || "Không có mô tả"}</div>
                    </Flex>
                </Flex>
            ),
        },
        {
            title: "Giá tiền",
            dataIndex: "price",
            key: "price",
            render: (price) => `${price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}`,
        },
        {
            title: "Hãng",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Số lượng",
            dataIndex: "quantity",
            key: "quantity",
            render: (_, record) => (
                <InputNumber
                    min={1}
                    value={record.qty}
                    controls={false}
                    disabled
                    onChange={(value) => onEdit(record.key, { qty: value })}
                />
            ),
        },
        {
            title: "Thành tiền",
            dataIndex: "total",
            key: "total",
            render: (total) => `${total?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}`,
        },
        {
            title: "",
            key: "actions",
            render: (_, record) => (
                <Space>
                    <Button onClick={() => onEdit(record.key, record)}>Chỉnh sửa</Button>
                    <Button danger type="link" onClick={() => onDelete(record.key)}>
                        Xóa
                    </Button>
                </Space>
            ),
        },
    ];

    return <Table dataSource={data} columns={columns} pagination={false} />;
};

export default ProductTable;
