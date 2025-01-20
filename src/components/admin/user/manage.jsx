import React from "react";
import { Table, Button } from "antd";
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

  const columns = [
    {
      title: "ID",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "HỌ VÀ TÊN",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "EMAIL",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "SỐ ĐIỆN THOẠI",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "",
      key: "edit",
      render: () => <Button>Chỉnh sửa</Button>,
    },
    {
      title: "",
      key: "delete",
      render: () => (
        <Button danger>Xoá</Button>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="actions">
        <Button type="primary">Thêm mới</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default App;
