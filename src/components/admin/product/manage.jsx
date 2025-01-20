
import React from "react";
import { Table, Button, Tag } from "antd";
import "./index.css";

const App = () => {

  const dataSource = [
    {
      key: "1",
      code: "#1",
      name: "Giày cool ngầu (đen)",
      price: "799.000 Đ",
      status: "Đã lên kệ",
    },
    {
      key: "2",
      code: "#2",
      name: "Giày thể thao (trắng)",
      price: "799.000 Đ",
      status: "Chưa lên kệ",
    },
    {
      key: "3",
      code: "#3",
      name: "Giày thể thao (đen)",
      price: "799.000 Đ",
      status: "Đã lên kệ",
    },
  ];

  // Cột bảng
  const columns = [
    {
      title: "Mã sản phẩm",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Đã lên kệ" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: () => (
        <>
          <Button type="link">Chỉnh sửa</Button>
          <Button type="link" danger>
            Xoá
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="actions">
        <Button type="primary">Thêm mới</Button>
        <Button>Đăng bảng</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default App;
