import React, { useEffect, useState } from "react";
import { Card, Button, Avatar, Layout, Menu, Spin, message } from "antd";
import {
  UserOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import OrangeButton from "../../components/share/OrangeButton";
import { getUserByIdAPI } from "../../utils/UserAPI";

const { Sider, Content } = Layout;

const AccountInfo = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserByIdAPI(userId);
        setUserInfo(response);
      } catch (error) {
        message.error("Không thể tải thông tin tài khoản.");
        console.error("Error fetching user info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [userId]);

  if (loading) {
    return (
      <Spin tip="Đang tải thông tin..." style={{ marginTop: "20%" }}>
        <div />
      </Spin>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh", background: "#f9f9f9" }}>
      {/* Sidebar */}
      <Sider
        width={250}
        style={{ background: "#fff", borderRight: "1px solid #ddd" }}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<UserOutlined style={{ color: "#ff9f00" }} />}>
            Thông tin tài khoản
          </Menu.Item>
          <Menu.Item key="2" icon={<HeartOutlined />}>
            Sản phẩm yêu thích
          </Menu.Item>
          <Menu.Item key="3" icon={<ClockCircleOutlined />}>
            Lịch sử mua hàng
          </Menu.Item>
          <Menu.Item key="4" icon={<LockOutlined />}>
            Đổi mật khẩu
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />} style={{ color: "red" }}>
            Đăng xuất
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Content style={{ padding: "20px", background: "#f9f9f9" }}>
        <Card
          style={{
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ fontSize: "16px", lineHeight: "2", textAlign: "left" }}>
          <p>
                <strong>Tên người dùng:</strong> {userInfo?.userName || "Chưa cập nhật"}
              </p>
            <p>
              <strong>Địa chỉ:</strong> {userInfo?.homeAddress || "Chưa cập nhật"}
            </p>
            <p>
              <strong>Điện thoại:</strong> {userInfo?.phone || "Chưa cập nhật"}
            </p>
            <p>
              <strong>Tổng số mua hàng:</strong> {userInfo?.totalPurchase || "Chưa cập nhật"}
            </p>
          </div>

          <OrangeButton label={"Chỉnh sửa thông tin"} />
        </Card>
      </Content>
    </Layout>
  );
};

export default AccountInfo;
