import { useState } from "react";
// Components
import LikeButton from "./LikeButton";
import Comments from "./Comments";
// Style
import { Row, Col, Card, Input } from "antd";
import "./CardComponent.css";
//App
const CardComponent = ({ arrayData }) => {
  const [newComentary, setNewComentary] = useState("");
  const [allComentsArray, setAllComentsArray] = useState([""]);
  const { Meta } = Card;

  const handleComments = (comentarytoAdd) => {
    let newArray = allComentsArray;
    newArray.push(comentarytoAdd);
    setAllComentsArray(newArray);
    newArray = [];
  };

  //const addComment = (id, comment) => {
  //  let newArray = [{ media_id: id, comment }];
  //  let fusionArray = new Array(allComentsArray);
  //  fusionArray.push(newArray);
  //  //    console.log("Viendo algo", fusionArray, typeof fusionArray);
  //  setAllComentsArray(fusionArray);
  //};
  const deployData = () => {
    if (arrayData === "") {
      return <></>;
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
              <Comments comments={allComentsArray} />
              <Row justify="center">
                <Col span={23}>
                  <form
                    typeof="submit"
                    onSubmit={(e) => {
                      e.preventDefault();
                      //addComment(info.media_id, newComentary);
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
    });
  };

  return <>{!arrayData ? <span>Loading...</span> : deployData()}</>;
};

export default CardComponent;
