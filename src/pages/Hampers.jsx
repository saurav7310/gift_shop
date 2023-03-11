import React from "react";
import { hampers } from "../data";
import ProductList from "./ProductList";
const Hampers = () => {
  return (
    <div>
      <ProductList items={hampers} itemTitle="Hampers" />
    </div>
  );
};

export default Hampers;
