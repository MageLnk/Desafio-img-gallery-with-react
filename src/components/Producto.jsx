import React from "react";

const Producto = ({ infoToShow, priceToShow }) => {
  return (
    <>
      <div>
        <p>
          Producto: <span>{infoToShow}</span>
        </p>
        <p>
          Precio: <span>{priceToShow}</span>
        </p>
      </div>
    </>
  );
};

export default Producto;
