import React from "react";
import { Button, notification, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

export const OrderSummary = ({ subtotal, shippingCost = 0, handleNewOrder }) => {
    const total = subtotal + shippingCost;
    const nav = useNavigate()
    return (
        <div style={{ width: "30%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <Text>Thanh toán:</Text>
                <Text strong>{subtotal?.toLocaleString("vi-VN")}đ</Text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <Text>Phí vận chuyển:</Text>
                <Text strong>{shippingCost === 0 ? "Miễn phí" : `${shippingCost?.toFixed(2)} đ`}</Text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <Text>Thanh tiền:</Text>
                <Text strong>{subtotal?.toLocaleString("vi-VN")}đ</Text>
            </div>
            <Button
                type="primary"
                block
                style={{
                    background: "#ff4d4f",
                    borderColor: "#ff4d4f",
                    fontWeight: "bold",
                    height: "50px",
                }}
                onClick={handleNewOrder}
            >
                Thanh toán
            </Button>
        </div>
    );
};
