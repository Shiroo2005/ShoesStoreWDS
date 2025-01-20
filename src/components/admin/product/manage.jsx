import React, { useState } from "react";
import { Button, message } from "antd";
import CreateModal from "./CreateModal";
import ProductTable from "./ProductTable";
import { productData } from "./data";

const ProductManagement = () => {
  const [data, setData] = useState(productData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAdd = (product) => {
    if (!product.name || !product.price) {
      message.error("Vui lòng nhập đầy đủ thông tin sản phẩm!");
      return;
    }
    product.code = data.length + 1;
    setData([...data, { ...product, key: `${data.length + 1}` }]);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleSaveEdit = (editedProduct) => {
    const updatedData = data.map((item) =>
      item.key === editedProduct.key ? { ...item, ...editedProduct } : item
    );
    setData(updatedData);
    setIsModalOpen(false);
  };

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  return (
    <div className="product-management">
      <div className="actions">
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Thêm mới
        </Button>
      </div>
      <ProductTable
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <CreateModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAdd}
        onEdit={handleSaveEdit}
        editingProduct={editingProduct}
      />
    </div>
  );
};

export default ProductManagement;
