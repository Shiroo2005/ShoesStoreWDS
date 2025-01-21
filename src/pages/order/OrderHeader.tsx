import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const OrderHeader = () => (
    <div className="order-header">
        <div className="order-title">Giỏ hàng của tôi</div>
        <div className="order-actions">
            <button aria-label="Go back">
                <ArrowLeftOutlined />
            </button>
            <p>Tiếp tục mua sắm</p>
        </div>
    </div>
);
