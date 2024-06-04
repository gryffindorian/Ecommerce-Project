import React from "react";

export default function PC7() {
  return (
    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
      <div
        className="product-cart-wrap wow animate__animated animate__fadeIn"
        data-wow-delay=".2s"
      >
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <a href="shop-product-right.html">
              <img
                className="default-img"
                src="template/assets/imgs/shop/product-7-1.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="template/assets/imgs/shop/product-7-2.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="product-action-1">
            <a
              aria-label="Add To Wishlist"
              className="action-btn"
              href="shop-wishlist.html"
            >
              <i className="fi-rs-heart"></i>
            </a>
            <a
              aria-label="Compare"
              className="action-btn"
              href="shop-compare.html"
            >
              <i className="fi-rs-shuffle"></i>
            </a>
            <a
              aria-label="Quick view"
              className="action-btn"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
            >
              <i className="fi-rs-eye"></i>
            </a>
          </div>
        </div>
        <div className="product-content-wrap">
          <div className="product-category">
            <a href="shop-grid-right.html">Meats</a>
          </div>
          <h2>
            <a href="shop-product-right.html">
              Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
            </a>
          </h2>
          <div className="product-rate-cover">
            <div className="product-rate d-inline-block">
              <div className="product-rating" style={{ width: "90%" }}></div>
            </div>
            <span className="font-small ml-5 text-muted"> (4.0)</span>
          </div>
          <div>
            <span className="font-small text-muted">
              By <a href="vendor-details-1.html">NestFood</a>
            </span>
          </div>
          <div className="product-card-bottom">
            <div className="product-price">
              <span>$32.85</span>
              <span className="old-price">$33.8</span>
            </div>
            <div className="add-cart">
              <a className="add" href="shop-cart.html">
                <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
