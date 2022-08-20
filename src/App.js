import { useState } from "react";
// Components
import { Header, Footer, CardComponent } from "./components";
// Design
import { Row, Col } from "antd";

const App = () => {
  const [data, setData] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const apiCall = async (searchValue) => {
    const response = await fetch(
      `https://api.wirestock.io/search?q=${searchValue}&page=1&per_page=5&types[]=photo&orientation=landscape&mature=0`
    );
    const data = await response.json();
    setData(data.data);
  };

  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} apiCall={apiCall} />
      <Row className="content-row-container" justify="center" align="middle">
        <Col>
          {!data ? (
            <h2 style={{ padding: "2rem" }}>Eliga su palabra para buscar imágenes</h2>
          ) : (
            <CardComponent arrayData={data} />
          )}
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default App;
