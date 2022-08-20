import { useState, useEffect } from "react";
// Components
import { Header, Footer, CardComponent } from "./components";
// Design
import { Row, Col } from "antd";

const App = () => {
  const [data, setData] = useState("");

  const apiCall = async () => {
    const response = await fetch(
      "https://api.wirestock.io/search?q=girl&page=1&per_page=5&types[]=photo&orientation=landscape&mature=0"
    );
    const data = await response.json();
    setData(data.data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <Header />
      <Row className="content-row-container" justify="center" align="middle">
        <Col>
          <CardComponent arrayData={data} />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default App;
