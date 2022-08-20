import { useState } from "react";
// Components
import LikeButton from "./LikeButton";
import Comments from "./Comments";
// Style
import { Row, Col, Card, Input } from "antd";
import "./CardComponent.css";
//App
const CardComponent = () => {
  const [newComentary, setNewComentary] = useState("");
  const [allComentsArray, setAllComentsArray] = useState([""]);
  const { Meta } = Card;

  const handleComments = (comentarytoAdd) => {
    let newArray = allComentsArray;
    newArray.push(comentarytoAdd);
    setAllComentsArray(newArray);
    newArray = [];
  };
  return (
    <Row className="content-card-container">
      <Col span={24}>
        <Card
          style={{
            width: 240,
          }}
          cover={
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta title={<LikeButton />} />
          <Comments comments={allComentsArray} />
          <Row justify="center">
            <Col span={23}>
              <form
                typeof="submit"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleComments(newComentary);
                  setNewComentary("");
                }}
              >
                <Input
                  className="card-component-input"
                  placeholder="Comentario..."
                  value={newComentary}
                  onChange={(e) => setNewComentary(e.target.value)}
                />
              </form>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default CardComponent;
