import React from "react";
import Navtabs from "./Navtabs";
import TabContent from "./TabContent";

export default function ProductTabs() {
  return (
    <section className="product-tabs section-padding position-relative">
      <div className="container">
        <Navtabs />
        <TabContent />
      </div>
    </section>
  );
}
