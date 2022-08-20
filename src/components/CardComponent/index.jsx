import { useState, useEffect } from "react";
// Components
import LikeButton from "./LikeButton";
import Comments from "./Comments";
// Style
import { Row, Col, Card, Input } from "antd";
import "./CardComponent.css";
//App
const CardComponent = ({ arrayData }) => {
  const [handleInputNewComentary, setHandleInputNewComentary] = useState("");
  const [finalComentary, setFinalComentary] = useState("");
  const { Meta } = Card;

  const deployData = () => {
    if (arrayData === "") {
      return;
    }
    return arrayData.map((info, i) => {
      return (
        <Row key={i} className="content-card-container">
          <Col span={24}>
            <Card
              style={{
                width: 350,
              }}
              cover={<img alt="example" src={info.thumbnail} />}
            >
              <Meta title={<LikeButton />} />
              <Comments newComentary={finalComentary} />
              <Row justify="center">
                <Col span={23}>
                  <form
                    typeof="submit"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFinalComentary(handleInputNewComentary);
                      setHandleInputNewComentary("");
                    }}
                  >
                    <Input
                      className="card-component-input"
                      placeholder="Comentario..."
                      value={handleInputNewComentary}
                      onChange={(e) => setHandleInputNewComentary(e.target.value)}
                    />
                  </form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      );
    });
  };

  useEffect(() => {
    deployData();
  }, [arrayData]);

  //console.log(arrayData);
  return <>{!arrayData ? <span>Loading...</span> : deployData()}</>;
};

export default CardComponent;

/*
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
*/
