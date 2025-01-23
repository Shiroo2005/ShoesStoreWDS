import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllOrderUserAPI, getOrderDetailAPI } from '../../utils/OrderAPI';
import { format } from 'date-fns';
import { Button, Table } from 'antd';
import OrderDetail from './orderDetail';

const OrderHistory = () => {
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const [detailData, setDetailData] = useState({})
    const user = useSelector(state => state.account.user);
    const [orders, setOrders] = useState([])
    const getALlOrders = async () => {

        const result = await getAllOrderUserAPI(user.id)
        if (result.data) {
            setOrders(result.data)
            console.log(result);

        } else console.log(result);

    }

    const getOrderDetail = async (id) => {
        const result = await getOrderDetailAPI(id)
        return result?.data
    }

    useEffect(() => {
        getALlOrders()
    }, [])

    const formatDate = (dateString) => {
        return format(new Date(dateString), "dd/MM/yyyy HH:mm:ss");
    };



    const columns = [
        {
            title: 'Mã Đơn Hàng',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Ngày Đặt',
            dataIndex: 'orderDate',
            key: 'orderDate',
            render: (text) => formatDate(text),
        },
        {
            title: 'Tổng Tiền',
            dataIndex: 'totalPrice',
            key: 'total',
            render: (e) => `${e.toLocaleString("vi-VN")}đ`

        },
        {
            title: 'Chi Tiết',
            key: 'action',
            render: (_, record) => (
                <Button onClick={
                    async () => {
                        setIsDetailOpen(true);
                        const result = await getOrderDetail(record.id);
                        if (result || !result) console.log("detail data", result);
                        setDetailData(result);


                    }
                }>Xem</Button>
            ),
        },
    ];

    return (
        <>
            <div>
                <h2>Lịch Sử Đơn Hàng</h2>
                <Table
                    columns={columns}
                    dataSource={orders.map(order => ({ ...order, key: order.id }))}
                    expandable={{
                        expandedRowRender: (record) => (
                            <div style={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
                                <h3>Chi Tiết Đơn Hàng {record.id}</h3>
                                <p><strong>Địa chỉ giao hàng:</strong> {record.details.address}</p>
                                <p><strong>Phương thức thanh toán:</strong> {record.details.paymentMethod}</p>
                                <p><strong>Phí vận chuyển:</strong> {record.details.shippingFee}</p>
                                <p><strong>Dự kiến giao hàng:</strong> {record.details.estimatedDelivery}</p>
                                <h4>Danh sách sản phẩm:</h4>
                                <Table
                                    columns={[
                                        { title: 'Tên Sản Phẩm', dataIndex: 'name', key: 'name' },
                                        { title: 'Số Lượng', dataIndex: 'quantity', key: 'quantity' },
                                        { title: 'Giá', dataIndex: 'price', key: 'price' }
                                    ]}
                                    dataSource={record.details.products.map((product, index) => ({ ...product, key: index }))}
                                    pagination={false}
                                />
                            </div>
                        ),
                        rowExpandable: (record) => !!record.details,
                    }}
                />
            </div>
            <OrderDetail isDetailOpen={isDetailOpen} setIsDetailOpen={setIsDetailOpen} detailData={detailData} />
        </>
    );
};



export default OrderHistory;
