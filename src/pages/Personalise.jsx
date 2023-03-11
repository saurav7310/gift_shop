import React from "react";
import { personalise } from "../data";
import ProductList from "./ProductList";

const Personalise = () => {
  return (
    <div>
      <ProductList items={personalise} itemTitle="Personalised" />
    </div>
  );
};

export default Personalise;
