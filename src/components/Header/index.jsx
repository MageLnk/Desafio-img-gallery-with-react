// Style
import { Row, Col } from "antd";
// App

const Header = () => {
  return (
    <>
      <Row className="header-row-container" justify="space-between" align="middle">
        <Row>
          <Col span={24}>
            <span>Logo</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Final o k ase</span>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Header;
