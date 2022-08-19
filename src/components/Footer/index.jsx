// Style
import { Row, Col } from "antd";
// Decoration
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <Row>
      <Col span={24}>
        <span>Todos los derechos reservados para MageLink </span>
        <span>
          <MdOutlineCopyright style={{ fontSize: "18px" }} />
        </span>
      </Col>
    </Row>
  );
};

export default Footer;
