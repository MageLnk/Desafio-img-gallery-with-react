// Components
import LogOutModal from "./LogOutModal";
// Style
import { Row, Col, Input } from "antd";
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
            <span className="header-title">Photogram</span>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input />
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
