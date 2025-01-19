import { Card, Rate, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const ProductCard = ({ product }) => {
  const { image, name, price, rating } = product;

  return (
    <Card
      hoverable
      cover={
        <img
          alt={name}
          src={image}
          style={{ height: "214px", objectFit: "cover" }}
        />
      }
      style={{
        width: 214,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        marginBottom: "50px",
      }}
    >
      {/* Tên sản phẩm*/}
      <div>
        <span style={{ fontWeight: "inherit" }}>{name}</span>
      </div>

      {/* Giá sản phẩm */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "16px",
          fontWeight: "bold",
          margin: "10px 0",
          color: "#000",
        }}
      >
        {price.toLocaleString("vi-VN")}đ
        <span style={{ display: "flex", alignItems: "center" }}>
          {rating}{" "}
          <Rate
            disabled
            allowHalf
            defaultValue={rating}
            count={1}
            style={{ marginLeft: 4 }}
          />
        </span>
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
