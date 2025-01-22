import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Space } from "antd";

export const OrderHeader = () => (
    <div className="order-header">
        <div className="order-title">Giỏ hàng của tôi</div>
        <div className="order-actions">

            <Link to='/'>
                <Space>
                    <button aria-label="Go back">
                        <ArrowLeftOutlined />
                    </button>Tiếp tục mua sắm
                </Space>
            </Link>
        </div>
    </div>
);
