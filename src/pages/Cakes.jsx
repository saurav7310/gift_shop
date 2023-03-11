import React from "react";
import { cakes } from "../data";
import ProductList from "./ProductList";

const Cakes = () => {
  return (
    <div>
      <ProductList items={cakes} itemTitle="Cakes" />
    </div>
  );
};

export default Cakes;
