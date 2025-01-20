import React, { useState } from "react";
import { Table, Button, Modal } from "antd";
import "./index.css";
import './ProductDetail.css'
const App = () => {
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dataSource = [
    {
      key: "1",
      id: "#1",
      name: "Giày cool ngầu (đen)",
      price: "799.000 Đ",
      brand: "Brand A",
      size: "42",
      stock: 10,
      color: "Đen",
    },
    {
      key: "2",
      id: "#2",
      name: "Giày thể thao (trắng)",
      price: "799.000 Đ",
      brand: "Brand B",
      size: "40",
      stock: 5,
      color: "Trắng",
    },
    {
      key: "3",
      id: "#3",
      name: "Giày thể thao (đen)",
      price: "799.000 Đ",
      brand: "Brand C",
      size: "41",
      stock: 8,
      color: "Đen",
    },
  ];

  const columns = [
    {
      title: "Mã sản phẩm",
      dataIndex: "id",
      key: "id",
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
      title: "Thương hiệu",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "",
      key: "view",
      render: (text, record) => (
        <Button onClick={() => handleViewDetail(record)}>Xem chi tiết</Button>
      ),
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

  const handleViewDetail = (record) => {
    setSelectedProduct(record);
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="container">
        <div className="actions">
          <Button type="primary">Thêm mới</Button>
        </div>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>

      {selectedProduct && (
        <Modal
          title="Thông tin sản phẩm"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Đóng
            </Button>
          ]}
        >
          <div className="product-detail">
            <div className="product-info">
              <h1 className="product-name">{selectedProduct.name}</h1>
              <p className="product-id">{selectedProduct.id}</p>
              <p className="product-size">{selectedProduct.size}</p>
              <p className="product-stock">{selectedProduct.stock}</p>
              <p className="product-color">{selectedProduct.color}</p>
              <p className="product-price">{selectedProduct.price}</p>
              <p className="product-brand">{selectedProduct.brand}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default App;
