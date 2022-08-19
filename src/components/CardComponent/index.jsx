// Style
import { Row, Col, Card } from "antd";
import "./CardComponent.css";
//App
const CardComponent = () => {
  const { Meta } = Card;
  return (
    <Row className="content-card-container">
      <Col span={24}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta title="Europe Street beat" />
          <span style={{ padding: 0, margin: 0 }}>sadfas</span>
        </Card>
      </Col>
    </Row>
  );
};

export default CardComponent;
