// Components
import LogOutModal from "./LogOutModal";
// Style
import { Row, Col } from "antd";
// Decoration
import { MdCameraEnhance } from "react-icons/md";
// App

const Header = () => {
  return (
    <>
      <Row className="header-row-container" justify="space-between" align="middle">
        <Row>
          <Col span={24}>
            <MdCameraEnhance className="header-logo-icon" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h1 className="header-title">Photogram</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <LogOutModal />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Header;
