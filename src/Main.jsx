import React from "react";
import HeroSlider from "./HeroSlider";
import CategorySlider from "./CategorySlider";
import Banner from "./Banner";
import ProductTabs from "./ProductTabs/ProductTabs";
import Bestsales from "./BestSales/Bestsales";
import EndDeals from "./EndDeals";
import MainEnd from "./MainEnd";

export default function Main() {
  return (
    <main class="main">
      <HeroSlider />
      <CategorySlider />
      <Banner />
      <ProductTabs />
      <Bestsales />
      <EndDeals />
      <MainEnd />
    </main>
  );
}
