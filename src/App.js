import Producto from "./components/Producto";

const App = () => {
  return (
    <>
      <Producto infoToShow={"Televisor"} priceToShow={"9.999"} />
      <Producto infoToShow={"Radio"} priceToShow={"5.550"} />
    </>
  );
};

export default App;
