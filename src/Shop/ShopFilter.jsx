import React from "react";

export const ShopFilter = () => {
  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">
              <i className="fi-rs-home mr-5"></i>Home
            </a>
            <span></span> Shop <span></span> Fillter
          </div>
        </div>
      </div>
      <div className="container mb-30 mt-30">
        <div className="row">
          <div className="col-lg-12">
            <a className="shop-filter-toogle" href="#">
              <span className="fi-rs-filter mr-5"></span>
              Filters
              <i className="fi-rs-angle-small-down angle-down"></i>
              <i className="fi-rs-angle-small-up angle-up"></i>
            </a>
            <div className="shop-product-fillter-header">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                  <div className="card">
                    <h5 className="mb-30">By Categories</h5>
                    <div className="categories-dropdown-wrap font-heading">
                      <ul>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img
                              src="assets/imgs/theme/icons/category-1.svg"
                              alt=""
                            />
                            Milks and Dairies
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img
                              src="assets/imgs/theme/icons/category-2.svg"
                              alt=""
                            />
                            Clothing &amp; beauty
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img
                              src="assets/imgs/theme/icons/category-3.svg"
                              alt=""
                            />
                            Pet Foods &amp; Toy
                          </a>
                        </li>
                        <li className="mb-0">
                          <a href="shop-grid-right.html">
                            {" "}
                            <img
                              src="assets/imgs/theme/icons/category-4.svg"
                              alt=""
                            />
                            Baking material
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                  <div className="card">
                    <h5 className="mb-30">By Vendors</h5>
                    <div className="d-flex">
                      <div className="custome-checkbox mr-80">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox1"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox1"
                        >
                          <span>Aldi</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox2"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox2"
                        >
                          <span>Adidas</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox3"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox3"
                        >
                          <span>Burbe</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox4"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox4"
                        >
                          <span>Chanel</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox5"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox5"
                        >
                          <span>Prada</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox6"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox6"
                        >
                          <span>Kroger</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox7"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox7"
                        >
                          <span>Traders</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox8"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox8"
                        >
                          <span>Publix</span>
                        </label>
                      </div>
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox11"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox11"
                        >
                          <span>Harris</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox21"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox21"
                        >
                          <span>Costco</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox31"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox31"
                        >
                          <span>Targets</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox41"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox41"
                        >
                          <span>Green Tea</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox51"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox51"
                        >
                          <span>iSnack</span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox61"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox61"
                        >
                          <span>Pambox</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                  <div className="card">
                    <h5 className="mb-30">By Tags</h5>
                    <div className="sidebar-widget widget-tags">
                      <ul className="tags-list">
                        <li className="hover-up">
                          <a href="blog-category-grid.html">
                            <i className="fi-rs-cross mr-10"></i>Milk
                          </a>
                        </li>
                        <li className="hover-up">
                          <a href="blog-category-grid.html">
                            <i className="fi-rs-cross mr-10"></i>Broccoli
                          </a>
                        </li>
                        <li className="hover-up">
                          <a href="blog-category-grid.html">
                            <i className="fi-rs-cross mr-10"></i>Smoothie
                          </a>
                        </li>
                        <li className="hover-up">
                          <a href="blog-category-grid.html">
                            <i className="fi-rs-cross mr-10"></i>Fruit
                          </a>
                        </li>
                        <li className="hover-up mr-0">
                          <a href="blog-category-grid.html">
                            <i className="fi-rs-cross mr-10"></i>Salad
                          </a>
                        </li>
                        <li className="hover-up mr-0">
                          <a href="blog-category-grid.html">
                            <i className="fi-rs-cross mr-10"></i>Appetizer
                          </a>
                        </li>
                        <li className="hover-up mr-0 mb-0">
                          <a href="blog-category-grid.html">
                            <i className="fi-rs-cross mr-10"></i>Appetizer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-5 mb-sm-5">
                  <div className="card">
                    <h5 className="mb-10">By Price</h5>
                    <div className="sidebar-widget price_range range">
                      <div className="price-filter mb-20">
                        <div className="price-filter-inner">
                          <div id="slider-range" className="mb-20"></div>
                          <div className="d-flex justify-content-between">
                            <div className="caption">
                              From:{" "}
                              <strong
                                id="slider-range-value1"
                                className="text-brand"
                              ></strong>
                            </div>
                            <div className="caption">
                              To:{" "}
                              <strong
                                id="slider-range-value2"
                                className="text-brand"
                              ></strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox211"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox211"
                        >
                          <span>$0.00 - $20.00 </span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox22"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox22"
                        >
                          <span>$20.00 - $40.00 </span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox23"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox23"
                        >
                          <span>$40.00 - $60.00 </span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox24"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox24"
                        >
                          <span>$60.00 - $80.00 </span>
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox25"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheckbox25"
                        >
                          <span>Over $100.00</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="shop-product-fillter">
              <div className="totall-product">
                <p>
                  We found <strong className="text-brand">29</strong> items for
                  you!
                </p>
              </div>
              <div className="sort-by-product-area">
                <div className="sort-by-cover mr-10">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span>
                        <i className="fi-rs-apps"></i>Show:
                      </span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span>
                        {" "}
                        50 <i className="fi-rs-angle-small-down"></i>
                      </span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      <li>
                        <a className="active" href="#">
                          50
                        </a>
                      </li>
                      <li>
                        <a href="#">100</a>
                      </li>
                      <li>
                        <a href="#">150</a>
                      </li>
                      <li>
                        <a href="#">200</a>
                      </li>
                      <li>
                        <a href="#">All</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sort-by-cover">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span>
                        <i className="fi-rs-apps-sort"></i>Sort by:
                      </span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span>
                        {" "}
                        Featured <i className="fi-rs-angle-small-down"></i>
                      </span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      <li>
                        <a className="active" href="#">
                          Featured
                        </a>
                      </li>
                      <li>
                        <a href="#">Price: Low to High</a>
                      </li>
                      <li>
                        <a href="#">Price: High to Low</a>
                      </li>
                      <li>
                        <a href="#">Release Date</a>
                      </li>
                      <li>
                        <a href="#">Avg. Rating</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row product-grid">
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-1-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-1-2.jpg"
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
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Snack</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Seeds of Change Organic Quinoe Naturel
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
                        <span>$28.85</span>
                        <span className="old-price">$32.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-2-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-2-2.jpg"
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
                        All Natural Italian-Style Chicken Meatballs
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (3.5)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="vendor-details-1.html">Stouffer</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$52.85</span>
                        <span className="old-price">$55.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-3-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-3-2.jpg"
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
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Snack</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Angie’s Boomchickapop Sweet & Salty
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="vendor-details-1.html">StarKist</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$48.85</span>
                        <span className="old-price">$52.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-4-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-4-2.jpg"
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
                      <a href="shop-grid-right.html">Vegetables</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Foster Farms Takeout Crispy classNameic
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
                        <span>$17.85</span>
                        <span className="old-price">$19.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-5-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-5-2.jpg"
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
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="best">-14%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Pet Foods</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Blue Diamond Almonds Lightly Naturel
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
                        <span>$23.85</span>
                        <span className="old-price">$25.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-6-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-6-2.jpg"
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
                      <a href="shop-grid-right.html">Hodo Foods</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Chobani Complete Vanilla Greek Bottle
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
                        <span>$54.85</span>
                        <span className="old-price">$55.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-7-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-7-2.jpg"
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
                        Canada Dry Ginger Ale – 2 L Bottle
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-8-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-8-2.jpg"
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
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="sale">Sale</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Snack</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Encore Seafoods Stuffed Alaskan
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
                        <span>$35.85</span>
                        <span className="old-price">$37.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-9-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-9-2.jpg"
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
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Coffes</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Gorton’s Beer Battered Fish Fillets
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="vendor-details-1.html">Old El Paso</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$23.85</span>
                        <span className="old-price">$25.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-10-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-10-2.jpg"
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
                      <a href="shop-grid-right.html">Cream</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Haagen-Dazs Caramel Cone Ice Cream
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (2.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="vendor-details-1.html">Tyson</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$22.85</span>
                        <span className="old-price">$24.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-1-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-1-2.jpg"
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
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Snack</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Seeds of Change Organic Quinoe Naturel
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
                        <span>$28.85</span>
                        <span className="old-price">$32.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-2-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-2-2.jpg"
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
                        All Natural Italian-Style Chicken Meatballs
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (3.5)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="vendor-details-1.html">Stouffer</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$52.85</span>
                        <span className="old-price">$55.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-3-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-3-2.jpg"
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
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="new">New</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Snack</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Angie’s Boomchickapop Sweet & Salty
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="vendor-details-1.html">StarKist</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$48.85</span>
                        <span className="old-price">$52.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-4-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-4-2.jpg"
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
                      <a href="shop-grid-right.html">Vegetables</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Foster Farms Takeout Crispy classNameic
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
                        <span>$17.85</span>
                        <span className="old-price">$19.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-5-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-5-2.jpg"
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
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="best">-14%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Pet Foods</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Blue Diamond Almonds Lightly natural
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
                        <span>$23.85</span>
                        <span className="old-price">$25.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-6-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-6-2.jpg"
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
                      <a href="shop-grid-right.html">Hodo Foods</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Chobani Complete Vanilla Greek Bottle
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
                        <span>$54.85</span>
                        <span className="old-price">$55.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-7-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-7-2.jpg"
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
                        Canada Dry Ginger Ale – 2 L Bottle
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-8-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-8-2.jpg"
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
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="sale">Sale</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Snack</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Encore Seafoods Stuffed Alaskan
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
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
                        <span>$35.85</span>
                        <span className="old-price">$37.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-9-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-9-2.jpg"
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
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Hot</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Coffes</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Gorton’s Beer Battered Fish Fillets
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="vendor-details-1.html">Old El Paso</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$23.85</span>
                        <span className="old-price">$25.8</span>
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
              {/* <!--end product card--> */}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="shop-product-right.html">
                        <img
                          className="default-img"
                          src="assets/imgs/shop/product-10-1.jpg"
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src="assets/imgs/shop/product-10-2.jpg"
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
                      <a href="shop-grid-right.html">Cream</a>
                    </div>
                    <h2>
                      <a href="shop-product-right.html">
                        Haagen-Dazs Caramel Cone Ice Cream
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (2.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="vendor-details-1.html">Tyson</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$22.85</span>
                        <span className="old-price">$24.8</span>
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
              {/* <!--end product card--> */}
            </div>
            {/* <!--product grid--> */}
            <div className="pagination-area mt-20 mb-20">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fi-rs-arrow-small-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link dot" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fi-rs-arrow-small-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <section className="section-padding pb-5">
              <div className="section-title">
                <h3 className="">Deals Of The Day</h3>
                <a className="show-all" href="shop-grid-right.html">
                  All Deals
                  <i className="fi-rs-angle-right"></i>
                </a>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-cart-wrap style-2">
                    <div className="product-img-action-wrap">
                      <div className="product-img">
                        <a href="shop-product-right.html">
                          <img src="assets/imgs/banner/banner-5.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="deals-countdown-wrap">
                        <div
                          className="deals-countdown"
                          data-countdown="2025/03/25 00:00:00"
                        ></div>
                      </div>
                      <div className="deals-content">
                        <h2>
                          <a href="shop-product-right.html">
                            Seeds of Change Organic Quinoa, Brown
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
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
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-cart-wrap style-2">
                    <div className="product-img-action-wrap">
                      <div className="product-img">
                        <a href="shop-product-right.html">
                          <img src="assets/imgs/banner/banner-6.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="deals-countdown-wrap">
                        <div
                          className="deals-countdown"
                          data-countdown="2026/04/25 00:00:00"
                        ></div>
                      </div>
                      <div className="deals-content">
                        <h2>
                          <a href="shop-product-right.html">
                            Perdue Simply Smart Organics Gluten
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (4.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="vendor-details-1.html">Old El Paso</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>$24.85</span>
                            <span className="old-price">$26.8</span>
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
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 d-none d-lg-block">
                  <div className="product-cart-wrap style-2">
                    <div className="product-img-action-wrap">
                      <div className="product-img">
                        <a href="shop-product-right.html">
                          <img src="assets/imgs/banner/banner-7.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="deals-countdown-wrap">
                        <div
                          className="deals-countdown"
                          data-countdown="2027/03/25 00:00:00"
                        ></div>
                      </div>
                      <div className="deals-content">
                        <h2>
                          <a href="shop-product-right.html">
                            Signature Wood-Fired Mushroom
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (3.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="vendor-details-1.html">Progresso</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>$12.85</span>
                            <span className="old-price">$13.8</span>
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
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 d-none d-xl-block">
                  <div className="product-cart-wrap style-2">
                    <div className="product-img-action-wrap">
                      <div className="product-img">
                        <a href="shop-product-right.html">
                          <img src="assets/imgs/banner/banner-8.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="deals-countdown-wrap">
                        <div
                          className="deals-countdown"
                          data-countdown="2025/02/25 00:00:00"
                        ></div>
                      </div>
                      <div className="deals-content">
                        <h2>
                          <a href="shop-product-right.html">
                            Simply Lemonade with Raspberry Juice
                          </a>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (3.0)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By <a href="vendor-details-1.html">Yoplait</a>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>$15.85</span>
                            <span className="old-price">$16.8</span>
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
                </div>
              </div>
            </section>
            {/* <!--End Deals--> */}
          </div>
        </div>
      </div>
    </main>
  );
};
