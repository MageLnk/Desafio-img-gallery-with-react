// Style
import { Row, Col } from "antd";
// Decoration
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <Row className="footer-row-container" justify="end" align="middle">
      <Row>
        <Col span={24}>
          <span>Todos los derechos reservados para MageLink </span>
          <span>
            <MdOutlineCopyright style={{ fontSize: "18px" }} />
          </span>
        </Col>
      </Row>
    </Row>
  );
};

export default Footer;
