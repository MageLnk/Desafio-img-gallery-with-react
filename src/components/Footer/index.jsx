// Style
import { Row, Col } from "antd";
// Decoration
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <Row className="footer-row-container" justify="space-between" align="middle">
      <Row>
        <Col style={{ paddingLeft: "1rem" }} span={24}>
          <span>
            Página creada para hacer una galería de imágenes solicitada por D. Latam, con un toque
            especial
          </span>
        </Col>
      </Row>
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
