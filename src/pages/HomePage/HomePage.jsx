import { Layout, Row, Col, Image, Input, Tabs, Pagination, Button } from "antd";
import Filter from "../../components/home/Filter";
import ProductCard from "../../components/home/ProductCard";
import OrangeButton from "../../components/share/OrangeButton";
import { LuArrowDownUp, LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { getAllProductsAPI } from "../../utils/ProductAPI";
import { useEffect, useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";

const { Sider, Content } = Layout;
const { Search } = Input;

const HomePage = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [query, setQuery] = useState('')
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

  const [current, setCurrent] = useState(1)
  const [totalPage, setTotalPage] = useState(0)



  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    const result = await getAllProductsAPI(current, query)
    console.log(result);
    setProducts(result.data)
    setTotalPage(result.totalPage)
  }

  useEffect(() => {
    getAllProducts()
  }, [current, query])


  return (
    <>
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
          <Filter query={query} setQuery={setQuery} />

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
              <Pagination align="center"
                defaultCurrent={1}
                current={current}
                pageSize={6}
                total={totalPage * 6}
                onChange={(page, pageSize) => setCurrent(page)}
                showSizeChanger={false}

              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
