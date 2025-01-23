import React, { useEffect, useState } from "react";
import { Layout, notification } from "antd";
import { OrderHeader } from "./OrderHeader";
import { ShippingOptions } from "./ShippingOptions";
import { OrderSummary } from "./OrderSummary";
import { deleteProductFromCartAPI, getCartAPI } from "../../utils/ProductAPI";
import { useSelector } from "react-redux";
import { OrderTable } from "./OrderTable";
import { convertToOrderTableData } from "../../utils/Converter";
import { newOrder } from "../../utils/OrderAPI";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

export default function OrderPage() {
    const [data, setData] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]); // Lưu các `key` đã chọn
    const user = useSelector(state => state.account.user);
    const nav = useNavigate()
    const getCart = async () => {
        const result = await getCartAPI()

        setData(convertToOrderTableData(result.data))
        if (data || !data) console.log(data, result.data);

    }

    useEffect(() => {
        getCart()
        console.log("cđcsdsd");

    }, [])

    const handleQtyChange = (key, value) => {
        const newData = [...data];
        const index = newData.findIndex((item) => item.key === key);
        if (index > -1) {
            newData[index].qty = value;
            newData[index].total = newData[index].price * value;
            setData(newData);
        }
    };



    const handleRemove = async (key) => {
        setData(data.filter((item) => item.key !== key));
        const result = await deleteProductFromCartAPI(key)
        if (result.message) notification.success({
            message: "Remove success",
        })
        else notification.error({
            message: "Remove failed",
        })

    };

    // Tính tổng giá trị các mục đã chọn
    const selectedSubtotal = data
        ?.reduce((total, item) => total + item.total, 0);
    const handleNewOrder = async () => {
        if (selectedSubtotal == 0) {
            notification.error({
                message: "Order failed",
                description: "Order phải gồm ít nhất 1 sản phẩm"
            })
            return
        }
        const result = await newOrder(user.id)
        if (result || !result) console.log(result);
        if (result.message) {
            nav('/')
            notification.success({
                message: "Order success",
            })
        }

    }
    return (
        <Layout>
            <main className="order-container">
                <OrderHeader />
                <Content
                    style={{
                        padding: "20px 50px",
                        height: "calc(100vh - 300px)",
                        overflowY: "scroll",
                    }}
                >
                    <OrderTable
                        data={data}
                        onQtyChange={handleQtyChange}
                        onRemove={handleRemove}
                        selectedKeys={selectedKeys} // Truyền trạng thái các mục đã chọn
                        onSelectChange={setSelectedKeys} // Cập nhật khi chọn mục
                    />
                </Content>
                <Content
                    style={{
                        padding: "20px 50px",
                        marginTop: "20px",
                        height: "200px",
                        display: "flex",
                        borderRadius: "10px",
                        justifyContent: "space-between",
                        backgroundColor: "#e2e6e9",
                    }}
                >
                    <ShippingOptions />
                    <OrderSummary subtotal={selectedSubtotal} handleNewOrder={handleNewOrder} />
                </Content>
            </main>
        </Layout>
    );
}
