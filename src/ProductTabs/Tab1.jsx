import React from "react";
import ProductCard1 from "./ProductCard1";
import ProductCard2 from "./ProductCard2";
import PC3 from "./PC3";
import PC4 from "./PC4";
import PC5 from "./PC5";
import PC6 from "./PC6";
import PC7 from "./PC7";
import PC8 from "./PC8";
import PC9 from "./PC9";
import PC10 from "./PC10";

export default function Tab1() {
  return (
    <div
      className="tab-pane fade show active"
      id="tab-one"
      role="tabpanel"
      aria-labelledby="tab-one"
    >
      <div className="row product-grid-4">
        <ProductCard1 />
        <ProductCard2 />
        <PC3 />
        <PC4 />
        <PC5 />
        <PC6 />
        <PC7 />
        <PC8 />
        <PC9 />
        <PC10 />
      </div>
    </div>
  );
}
