import { Layout, Row, Col, Image, Input, Tabs, Pagination, Button } from "antd";
import Filter from "../../components/home/Filter";
import ProductCard from "../../components/home/ProductCard";
import OrangeButton from "../../components/share/OrangeButton";
import { LuArrowDownUp, LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { getAllProductsAPI } from "../../utils/ProductAPI";
import { useEffect, useState } from "react";

const { Sider, Content } = Layout;
const { Search } = Input;

const HomePage = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const onChangeTabs = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Liên quan",
      children: "",
    },
    {
      key: "4",
      label: (
        <>
          Giá <LuArrowDownUp />
        </>
      ),
      children: "",
    },
    {
      key: "5",
      label: (
        <>
          <LuLayoutGrid />
        </>
      ),
      children: "",
    },
    {
      key: "6",
      label: (
        <>
          <LuLayoutList />
        </>
      ),
      children: "",
    },
  ];



  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const result = await getAllProductsAPI()
    console.log(result);
    setProducts(result.data)

  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        width={510}
        style={{ background: "#f0f0f0", padding: "60px 66px" }}
      >
        <h2
          className="filter-title"
          style={{
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          Bộ lọc
        </h2>
        <Filter></Filter>
        <OrangeButton label={"Hoàn tất"}></OrangeButton>
        <Button
          style={{
            fontSize: "20px",
            width: "100%",
            height: "50px",
            background: "#f0f0f0",
            marginTop: "10px",
          }}
        >
          Xóa tất cả
        </Button>
      </Sider>

      {/* Main Content */}
      <Content style={{ background: "#f0f0f0", padding: "60px 66px" }}>
        {/* Banner */}
        <Row style={{ marginBottom: "22px" }}>
          <Col span={24}>
            <Image src="./img/HomePage-Banner.png" alt="Banner"></Image>
          </Col>
        </Row>

        {/* Search Bar and Category */}
        <Row style={{ marginBottom: "22px" }} gutter={16}>
          <Col span={11}>
            <Search
              placeholder="Tìm kiếm sản phẩm"
              allowClear
              onSearch={onSearch}
              size="large"
              style={{
                width: "100%",
              }}
            />
          </Col>

          <Col span={13}>
            <Tabs
              defaultActiveKey="1"
              items={items}
              type="card"
              onChange={onChangeTabs}
              size="middle"
            />
          </Col>
        </Row>

        {/* Product List */}
        <Row
          style={{
            background: "#fff",
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Col span={24} style={{ padding: "50px 70px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            <Pagination align="center" defaultCurrent={1} total={50} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HomePage;
