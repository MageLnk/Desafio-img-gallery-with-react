import { useEffect, useState } from "react";
// Style
import { Row, Col } from "antd";

const Comments = ({ comments }) => {
  const handleComments = () => {
    return comments.map((data, i) => {
      return (
        <Row key={i}>
          <Col span={24}>
            <span>{data}</span>
          </Col>
        </Row>
      );
    });
  };

  return handleComments();
};

export default Comments;
