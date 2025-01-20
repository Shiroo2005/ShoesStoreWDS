/* eslint-disable react/prop-types */
import { Card, Rate, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, images, name, price, brand } = product;
  const nav = useNavigate()
  return (
    <Card
      hoverable
      cover={
        <img
          alt={name}
          src={images[0]}
          style={{ height: "214px", objectFit: "contain" }}
        />
      }
      style={{
        width: 214,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        marginBottom: "50px",
      }}
      onClick={(e) => {
        nav(`/products/${id}`)

      }}
    >
      {/* Tên sản phẩm*/}
      <div>
        <h4>{name}</h4>
      </div>
      <div>
        <b style={{ fontWeight: "inherit", color: "#888888" }}>{brand}</b>
      </div>

      {/* Giá sản phẩm */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
          fontWeight: "bold",
          margin: "10px 0",
          color: "#000",
        }}
      >
        {price.toLocaleString("vi-VN")}đ
      </div>

      {/* Nút thêm vào giỏ hàng */}
      <Button
        type="primary"
        icon={<ShoppingCartOutlined />}
        style={{ width: "100%", borderRadius: "4px", background: "#ff9f0a" }}
      >
        Thêm vào giỏ
      </Button>
    </Card>
  );
};

export default ProductCard;
