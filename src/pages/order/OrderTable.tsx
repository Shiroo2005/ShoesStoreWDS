import React from "react";
import { Table, Space, Button, InputNumber } from "antd";

export function OrderTable({ data, onQtyChange, onRemove, selectedKeys, onSelectChange }) {
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
                        <strong>{record.product}</strong>
                        <br />
                        <span style={{ color: "gray" }}>{record.details}</span>
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
                        onClick={() => onQtyChange(record.key, record.qty - 1)}
                        disabled={record.qty <= 1}
                        style={{ height: '32px', width: '32px' }}

                    >
                        -
                    </Button>
                    <InputNumber
                        min={1}
                        value={record.qty}
                        controls={false}
                        onChange={(value) => onQtyChange(record.key, value)}

                    />
                    <Button onClick={() => onQtyChange(record.key, record.qty + 1)}
                        style={{ height: '32px', width: '32px' }}

                    >+</Button>
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
                <Button danger type="link" onClick={() => onRemove(record.key)}>
                    Xóa
                </Button>
            ),
        },
    ];

    // Cấu hình rowSelection để xử lý chọn mục
    const rowSelection = {
        selectedRowKeys: selectedKeys,
        onChange: (selectedRowKeys) => {
            onSelectChange(selectedRowKeys);
        },
    };

    return (
        <Table
            dataSource={data}
            columns={columns}
            rowSelection={rowSelection} // Thêm checkbox
            pagination={false}
        />
    );
}
