import React from "react";

export default function PW3() {
  return (
    <div className="product-cart-wrap">
      <div className="product-img-action-wrap">
        <div className="product-img product-img-zoom">
          <a href="shop-product-right.html">
            <img
              className="default-img"
              src="template/assets/imgs/shop/product-2-1.jpg"
              alt=""
            />
            <img
              className="hover-img"
              src="template/assets/imgs/shop/product-2-2.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="product-action-1">
          <a
            aria-label="Quick view"
            className="action-btn small hover-up"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            {" "}
            <i className="fi-rs-eye"></i>
          </a>
          <a
            aria-label="Add To Wishlist"
            className="action-btn small hover-up"
            href="shop-wishlist.html"
          >
            <i className="fi-rs-heart"></i>
          </a>
          <a
            aria-label="Compare"
            className="action-btn small hover-up"
            href="shop-compare.html"
          >
            <i className="fi-rs-shuffle"></i>
          </a>
        </div>
        <div className="product-badges product-badges-position product-badges-mrg">
          <span className="sale">Sale</span>
        </div>
      </div>
      <div className="product-content-wrap">
        <div className="product-category">
          <a href="shop-grid-right.html">Hodo Foods</a>
        </div>
        <h2>
          <a href="shop-product-right.html">
            Angie’s Boomchickapop Sweet and womnies
          </a>
        </h2>
        <div className="product-rate d-inline-block">
          <div className="product-rating" style={{ width: "80%" }}></div>
        </div>
        <div className="product-price mt-10">
          <span>$238.85 </span>
          <span className="old-price">$245.8</span>
        </div>
        <div className="sold mt-15 mb-15">
          <div className="progress mb-5">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <span className="font-xs text-heading"> Sold: 90/120</span>
        </div>
        <a className="btn w-100 hover-up" href="shop-cart.html">
          <i className="fi-rs-shopping-cart mr-5"></i>Add To Cart
        </a>
      </div>
    </div>
  );
}
