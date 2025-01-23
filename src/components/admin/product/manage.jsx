import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message } from "antd";
import "./index.css";
import { deleteProductAPI, getAllProductsAPI, getProductDetailAPI } from "../../../utils/ProductAPI";
import CreateModal from "./CreateModal";
import { getAllCategoriesAPI } from "../../../utils/CategoryAPI";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [current, setCurrent] = useState(1)
  const [totalPage, setTotalPage] = useState()

  const getAllProducts = async () => {
    const result = await getAllProductsAPI(current);
    console.log(result);
    setProducts(result.data)
    setTotalPage(result.totalPage)
  }

  const getAllCategories = async () => {
    const result = await getAllCategoriesAPI()
    console.log(result);
    setCategories(result.data)

  }

  const getProductDetail = async (id) => {
    const result = await getProductDetailAPI(id)
    console.log(result);
    setSelectedProduct(result.data)


  }

  useEffect(() => {
    getAllProducts()
    getAllCategories()
  }, [current])

  const handleDelete = async (record) => {
    console.log(record);
    const result = await deleteProductAPI(record.id)
    console.log(result);
    if (result.message) message.success(result.message)
    else message.error("Delete failed")
    await getAllProducts()
  }


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
      key: "delete",
      render: (record) => (
        <Button danger onClick={() => handleDelete(record)}>Xoá</Button>
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
  const onChangeTable = (pagination, filters, sorter, extra) => {
    if (pagination.current != current) setCurrent(pagination.current)

  }

  return (
    <>
      <div className="container">
        <div className="actions">
          <Button type="primary" onClick={() => setIsModalOpen(true)}>Thêm mới</Button>
        </div>
        <Table dataSource={products} columns={columns} pagination={{
          current: current,
          pageSize: 6,
          total: totalPage * 6
        }} totalPage={totalPage} current={current}
          onChange={onChangeTable}

        />
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
              <p className="product-price">{selectedProduct.price.toLocaleString("vi-VN")}đ</p>
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
      <CreateModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={categories}
      />
    </>
  );
};

export default App;