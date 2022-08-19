// Components
import { Header, Footer, CardComponent } from "./components";
// Design
import { Row } from "antd";

const App = () => {
  return (
    <>
      <Header />
      <Row className="content-row-container" justify="center">
        <CardComponent />
      </Row>
      <Footer />
    </>
  );
};

export default App;
