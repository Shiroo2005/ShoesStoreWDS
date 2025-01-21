import React, { useState } from "react";
import { Table, Button, message } from "antd";
import "./index.css";
import ProductTable from "./ProductTable";
import { productData } from "./data";

const ManageProduct = () => {
  const [dataSource, setDataSource] = useState(productData);

  const handleEdit = (data) => {
    message.info(`Edit product: ${data.name}`);
  };

  const handleDelete = (newData) => {
    setDataSource(newData);
    message.success("Deleted product.");
  };

  return (
    <div className="container">
      <ProductTable data={dataSource} setDataSource={setDataSource} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default ManageProduct;
