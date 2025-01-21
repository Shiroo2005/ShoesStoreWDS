import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
import "./index.css";
import './ProductDetail.css'
import { getAllProductsAPI, getProductDetailAPI } from "../../../utils/ProductAPI";
const App = () => {
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const result = await getAllProductsAPI();
    console.log(result);
    setProducts(result.data)
  }

  const getProductDetail = async (id) => {
    const result = await getProductDetailAPI(id)
    console.log(result);
    setSelectedProduct(result.data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

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
      render: (e) => `${e.toLocaleString("vi-VN")}đ`
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
    getProductDetail(record.id)
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
        <Table dataSource={products} columns={columns} pagination={false} />
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
              <p className="product-price">{selectedProduct.price}</p>
              <Table
                title={() => (
                  <div style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    padding: "10px",
                    background: "#f0f2f5",
                    textAlign: "center"
                  }}>
                    Bảng chi tiết số lượng
                  </div>
                )}
                dataSource={selectedProduct.details}
                bordered
                columns={[
                  {
                    title: "Size",
                    dataIndex: "size",
                    key: "size",
                    align: "center",
                    render: (text) => <span style={{ fontWeight: "bold", color: "#1890ff" }}>{text}</span>
                  },
                  {
                    title: "Số lượng",
                    dataIndex: "stockQuantity",
                    key: "quantity",
                    align: "center",
                    render: (text) => (
                      <span style={{
                        fontWeight: "bold",
                        color: text > 5 ? "#52c41a" : "#f5222d"  // Xanh nếu nhiều hàng, đỏ nếu ít hàng
                      }}>
                        {text}
                      </span>
                    )
                  }
                ]}
                pagination={false}
              />


            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default App;