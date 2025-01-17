import { Layout, Row, Col, Divider } from "antd";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <Layout className="app-footer">
      {/* Phần chính */}
      <div className="footer-main">
        <Row gutter={[16, 16]}>
          {/* Cột 1 */}
          <Col xs={24} sm={8}>
            <h3 className="footer-title">Thông tin về chúng tôi</h3>
            <ul className="footer-list">
              <li>Giới thiệu WDSHOE</li>
              <li>Tin tức thông báo</li>
              <li>Danh sách cửa hàng</li>
            </ul>
          </Col>
          {/* Cột 2 */}
          <Col xs={24} sm={8}>
            <h3 className="footer-title">Hỗ trợ</h3>
            <ul className="footer-list">
              <li>Chính sách vận chuyển</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách bảo hành</li>
              <li>Chính sách đổi trả</li>
            </ul>
          </Col>
          {/* Cột 3 */}
          <Col xs={24} sm={8}>
            <h3 className="footer-title">Liên hệ</h3>
            <ul className="footer-list">
              <li>Hotline: 1900 0000</li>
              <li>Mạng xã hội:</li>
              <li>
                <FacebookOutlined className="footer-icon" />
                <InstagramOutlined className="footer-icon" />
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      {/* Đường phân cách */}
      <Divider className="footer-divider" />

      {/* Phần cuối */}
      <div className="footer-bottom">
        <p>
          Công ty TNHH WDSCompany
          <br />
          Văn phòng: Lầu 9, tòa nhà ABC, số 97 Street, phường 04, quận 01, TP Hồ
          Chí Minh.
          <br />
          GP số 0316457558 do sở KHĐT Tp Hồ Chí Minh cấp lần đầu ngày
          01/01/2025.
        </p>
        <div className="footer-certification">
          <img src="./img/certification.png" alt="Chứng nhận" />
        </div>
      </div>
    </Layout>
  );
};

export default Footer;
