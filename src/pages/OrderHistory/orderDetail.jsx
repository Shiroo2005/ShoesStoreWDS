/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { useParams } from 'react-router-dom';

const OrderDetail = (props) => {
    const { orderId } = useParams(); // Lấy orderId từ URL
    // eslint-disable-next-line react/prop-types
    const { isDetailOpen, setIsDetailOpen, detailData } = props

    const handleCancel = () => {
        setIsDetailOpen(false);
    };

    return (
        <div className="order-detail-container">


            <Modal
                title={`Chi Tiết Đơn Hàng #`}
                visible={isDetailOpen}
                onCancel={handleCancel}
                footer={null}
                width={800}
            >


                <h2>Thông Tin Sản Phẩm</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Tên Sản Phẩm</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Số Lượng</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Giá</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(detailData) && detailData.length > 0 ? (
                            detailData.map((product, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product?.name}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product?.quantity}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product?.price?.toLocaleString()} VND</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{(product?.price * product?.quantity).toLocaleString()} VND</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>
                                    Không có dữ liệu sản phẩm
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>

                <div className="order-total" style={{ marginTop: '20px' }}>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Button onClick={handleCancel}>Đóng</Button>
                </div>
            </Modal>
        </div>
    );
};

export default OrderDetail;
