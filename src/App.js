// Components
import { Header, Footer } from "./components";
// Design
import { Row, Col } from "antd";

const App = () => {
  return (
    <>
      <Header />
      <Row className="content-row-container" justify="center">
        <Row>
          <Col span={24}>
            <span>Content o k ase</span>
          </Col>
        </Row>
      </Row>
      <Row className="footer-row-container" justify="end" align="middle">
        <Footer />
      </Row>
    </>
  );
};

export default App;
