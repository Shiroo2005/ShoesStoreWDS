import React from "react";
import { Radio, Space, Typography } from "antd";

const { Title, Text } = Typography;

export const ShippingOptions = () => (
    <div style={{ width: "60%" }}>
        <Title level={5}>Chọn phương thức vận chuyển</Title>
        <Radio.Group defaultValue="pickup">
            <Space direction="vertical">
                <Radio value="pickup">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span> Nhận hàng tại cửa hàng (trong 20 phút) </span>
                        <span style={{ fontWeight: "bold" }}>Miễn phí</span>
                    </div>
                </Radio>
                <Radio value="delivery">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span>Giao hàng tận nhà (Dưới 2 - 4 ngày)</span>
                            <span style={{ fontWeight: "bold" }}> 23,000 đ</span>
                        </div>
                        <Text type="secondary">
                            At 45 Glenridge Ave. Brooklyn, NY 11220
                        </Text>
                    </div>
                </Radio>
            </Space>
        </Radio.Group>
    </div>
);
