import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VendorsDashboard } from "./Vendors/VendorsDashboard";

export default function Header() {
  const items = [
    "100% Secure delivery without contacting the courier",
    "Supper Value Deals - Save more with coupons",
    "Trendy 25silver jewelry, save up 35% off today",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <header className="header-area header-style-1 header-height-2">
      <div className="mobile-promotion">
        <span>
          Grand opening, <strong>up to 15%</strong> off all items. Only{" "}
          <strong>3 days</strong> left
        </span>
      </div>
      <div className="header-top header-top-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4">
              <div className="header-info">
                <ul>
                  <li>
                    <a href="page-about.html">About Us</a>
                  </li>
                  <li>
                    <a href="page-account.html">My Account</a>
                  </li>
                  <li>
                    <a href="shop-wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="shop-order.html">Order Tracking</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="text-center">
                <div id="news-flash" className="d-inline-block">
                  <ul>
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className={
                          index === currentIndex ? "visible" : "hidden"
                        }
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="header-info header-info-right">
                <ul>
                  <li>
                    Need help? Call Us:{" "}
                    <strong className="text-brand"> + 1800 900</strong>
                  </li>
                  <li>
                    <a className="language-dropdown-active" href="#">
                      English <i className="fi-rs-angle-small-down"></i>
                    </a>
                    <ul className="language-dropdown">
                      <li>
                        <a href="#">
                          <img
                            src="template/assets/imgs/theme/flag-fr.png"
                            alt=""
                          />
                          Français
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="template/assets/imgs/theme/flag-dt.png"
                            alt=""
                          />
                          Deutsch
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="template/assets/imgs/theme/flag-ru.png"
                            alt=""
                          />
                          Pусский
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="language-dropdown-active" href="#">
                      USD <i className="fi-rs-angle-small-down"></i>
                    </a>
                    <ul className="language-dropdown">
                      <li>
                        <a href="#">
                          <img
                            src="template/assets/imgs/theme/flag-fr.png"
                            alt=""
                          />
                          INR
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="template/assets/imgs/theme/flag-dt.png"
                            alt=""
                          />
                          MBP
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="template/assets/imgs/theme/flag-ru.png"
                            alt=""
                          />
                          EU
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <a href="index.html">
                <img src="template/assets/imgs/theme/logo.svg" alt="logo" />
              </a>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form action="#">
                  <select className="select-active">
                    <option>All Categories</option>
                    <option>Milks and Dairies</option>
                    <option>Wines & Alcohol</option>
                    <option>Clothing & Beauty</option>
                    <option>Pet Foods & Toy</option>
                    <option>Fast food</option>
                    <option>Baking material</option>
                    <option>Vegetables</option>
                    <option>Fresh Seafood</option>
                    <option>Noodles & Rice</option>
                    <option>Ice cream</option>
                  </select>
                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="search-location">
                    <form action="#">
                      <select className="select-active">
                        <option>Your Location</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Delaware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Indiana</option>
                        <option>Maryland</option>
                        <option>Nevada</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                      </select>
                    </form>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="shop-compare.html">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src="template/assets/imgs/theme/icons/icon-compare.svg"
                      />
                      <span className="pro-count blue">3</span>
                    </a>
                    <a href="shop-compare.html">
                      <span className="lable ml-0">Compare</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="shop-wishlist.html">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src="template/assets/imgs/theme/icons/icon-heart.svg"
                      />
                      <span className="pro-count blue">6</span>
                    </a>
                    <a href="shop-wishlist.html">
                      <span className="lable">Wishlist</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a className="mini-cart-icon" href="shop-cart.html">
                      <img
                        alt="Nest"
                        src="template/assets/imgs/theme/icons/icon-cart.svg"
                      />
                      <span className="pro-count blue">2</span>
                    </a>
                    <a href="shop-cart.html">
                      <span className="lable">Cart</span>
                    </a>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="shop-product-right.html">
                              <img
                                alt="Nest"
                                src="template/assets/imgs/shop/thumbnail-3.jpg"
                              />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="shop-product-right.html">
                                Daisy Casual Bag
                              </a>
                            </h4>
                            <h4>
                              <span>1 × </span>$800.00
                            </h4>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#">
                              <i className="fi-rs-cross-small"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="shop-product-right.html">
                              <img
                                alt="Nest"
                                src="template/assets/imgs/shop/thumbnail-2.jpg"
                              />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="shop-product-right.html">
                                Corduroy Shirts
                              </a>
                            </h4>
                            <h4>
                              <span>1 × </span>$3200.00
                            </h4>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#">
                              <i className="fi-rs-cross-small"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            Total <span>$4000.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <a className="outline" href="shop-cart.html">
                            View cart
                          </a>
                          <a href="shop-checkout.html">Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="page-account.html">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src="template/assets/imgs/theme/icons/icon-user.svg"
                      />
                    </a>
                    <a href="page-account.html">
                      <span className="lable ml-0">Account</span>
                    </a>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      <ul>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-user mr-10"></i>My Account
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-location-alt mr-10"></i>Order
                            Tracking
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-label mr-10"></i>My Voucher
                          </a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html">
                            <i className="fi fi-rs-heart mr-10"></i>My Wishlist
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-settings-sliders mr-10"></i>
                            Setting
                          </a>
                        </li>
                        <li>
                          <a href="page-login.html">
                            <i className="fi fi-rs-sign-out mr-10"></i>Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom header-bottom-bg-color sticky-bar">
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
              <a href="index.html">
                <img src="template/assets/imgs/theme/logo.svg" alt="logo" />
              </a>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div className="main-categori-wrap d-none d-lg-block">
                <a className="categories-button-active" href="#">
                  <span className="fi-rs-apps"></span>{" "}
                  <span className="et">Browse</span> All Categories
                  <i className="fi-rs-angle-down"></i>
                </a>
                <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                  <div className="d-flex categori-dropdown-inner">
                    <ul>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="template/assets/imgs/theme/icons/category-1.svg"
                            alt=""
                          />
                          Milks and Dairies
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="template/assets/imgs/theme/icons/category-2.svg"
                            alt=""
                          />
                          Clothing & beauty
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="template/assets/imgs/theme/icons/category-3.svg"
                            alt=""
                          />
                          Pet Foods & Toy
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="template/assets/imgs/theme/icons/category-4.svg"
                            alt=""
                          />
                          Baking material
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="template/assets/imgs/theme/icons/category-5.svg"
                            alt=""
                          />
                          Fresh Fruit
                        </a>
                      </li>
                    </ul>
                    <ul className="end">
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="template/assets/imgs/theme/icons/category-6.svg"
                            alt=""
                          />
                          Wines & Drinks
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="template/assets/imgs/theme/icons/category-7.svg"
                            alt=""
                          />
                          Fresh Seafood
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="template/assets/imgs/theme/icons/category-8.svg"
                            alt=""
                          />
                          Fast food
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="template/assets/imgs/theme/icons/category-9.svg"
                            alt=""
                          />
                          Vegetables
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html">
                          {" "}
                          <img
                            src="template/assets/imgs/theme/icons/category-10.svg"
                            alt=""
                          />
                          Bread and Juice
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="more_slide_open" style={{ display: "none" }}>
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img
                              src="template/assets/imgs/theme/icons/icon-1.svg"
                              alt=""
                            />
                            Milks and Dairies
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img
                              src="template/assets/imgs/theme/icons/icon-2.svg"
                              alt=""
                            />
                            Clothing & beauty
                          </a>
                        </li>
                      </ul>
                      <ul className="end">
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img
                              src="template/assets/imgs/theme/icons/icon-3.svg"
                              alt=""
                            />
                            Wines & Drinks
                          </a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html">
                            {" "}
                            <img
                              src="template/assets/imgs/theme/icons/icon-4.svg"
                              alt=""
                            />
                            Fresh Seafood
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="more_categories">
                    <span className="icon"></span>{" "}
                    <span className="heading-sm-1">Show more...</span>
                  </div>
                </div>
              </div>
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                  <ul>
                    <li className="hot-deals">
                      <img
                        src="template/assets/imgs/theme/icons/icon-hot.svg"
                        alt="hot deals"
                      />
                      <a href="shop-grid-right.html">Deals</a>
                    </li>
                    <li>
                      {/* kj,bds sdvvjk.zsvdn. */}
                      <Link to="/" className="active">
                        Home <i className="fi-rs-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Home 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home 4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home 5</a>
                        </li>
                        <li>
                          <a href="index-6.html">Home 6</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/shopgridright">
                        Shop <i className="fi-rs-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/shopgridright">
                            Shop Grid – Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to="/shopgridleft">
                            Shop Grid – Left Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to="/shoplistright">
                            Shop List – Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to="/shoplistleft">
                            Shop List – Left Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link href="/shopfullwidth">Shop - Wide</Link>
                        </li>
                        <li>
                          <a href="#">
                            Single Product <i className="fi-rs-angle-right"></i>
                          </a>
                          <ul className="level-menu">
                            <li>
                              <Link to="/shopproductright">
                                Product – Right Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/shopproductleft">
                                Product – Left Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/shopproductfull">
                                Product – No sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/shopproductvendor">
                                Product – Vendor Info
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/shopfilter">Shop – Filter</Link>
                        </li>
                        <li>
                          <Link to="/shopwishlist">Shop – Wishlist</Link>
                        </li>
                        <li>
                          <Link to="/shopcart">Shop – Cart</Link>
                        </li>
                        <li>
                          <Link to="/shopcheckout">Shop – Checkout</Link>
                        </li>
                        <li>
                          <Link to="/shopcompare">Shop – Compare</Link>
                        </li>
                        <li>
                          <a href="#">
                            Shop Invoice<i className="fi-rs-angle-right"></i>
                          </a>
                          <ul className="level-menu">
                            <li>
                              <Link to="/shopinvoice1.">Shop Invoice 1</Link>
                            </li>
                            <li>
                              <Link to="/shopinvoice2">Shop Invoice 2</Link>
                            </li>
                            <li>
                              <Link to="/shopinvoice">Shop Invoice 3</Link>
                            </li>
                            <li>
                              <Link to="/shopinvoice4">Shop Invoice 4</Link>
                            </li>
                            <li>
                              <Link to="/shopinvoice5">Shop Invoice 5</Link>
                            </li>
                            <li>
                              <Link to="/shopinvoice6">Shop Invoice 6</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Vendors <i className="fi-rs-angle-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/vendorsgrid">Vendors Grid</Link>
                        </li>
                        <li>
                          <Link to="/vendorslist">Vendors List</Link>
                        </li>
                        <li>
                          <Link to="/vendordetails1">Vendor Details 01</Link>
                        </li>
                        <li>
                          <Link to="/vendordetails2">Vendor Details 02</Link>
                        </li>
                        <li>
                          <Link to="/vendordashboard">Vendor Dashboard</Link>
                        </li>
                        <li>
                          <Link to="vendorguide">Vendor Guide</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="position-static">
                      <a href="#">
                        Mega menu <i className="fi-rs-angle-down"></i>
                      </a>
                      <ul className="mega-menu">
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">
                            Fruit & Vegetables
                          </a>
                          <ul>
                            <li>
                              <a href="shop-product-right.html">
                                Meat & Poultry
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Fresh Vegetables
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Herbs & Seasonings
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Cuts & Sprouts
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Exotic Fruits & Veggies
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Packaged Produce
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">
                            Breakfast & Dairy
                          </a>
                          <ul>
                            <li>
                              <a href="shop-product-right.html">
                                Milk & Flavoured Milk
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Butter and Margarine
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Eggs Substitutes
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Marmalades</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Sour Cream</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Cheese</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">
                            Meat & Seafood
                          </a>
                          <ul>
                            <li>
                              <a href="shop-product-right.html">
                                Breakfast Sausage
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Dinner Sausage
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Chicken</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Sliced Deli Meat
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Wild Caught Fillets
                              </a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">
                                Crab and Shellfish
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-34">
                          <div className="menu-banner-wrap">
                            <a href="shop-product-right.html">
                              <img
                                src="template/assets/imgs/banner/banner-menu.png"
                                alt="Nest"
                              />
                            </a>
                            <div className="menu-banner-content">
                              <h4>Hot deals</h4>
                              <h3>
                                Don't miss
                                <br />
                                Trending
                              </h3>
                              <div className="menu-banner-price">
                                <span className="new-price text-success">
                                  Save to 50%
                                </span>
                              </div>
                              <div className="menu-banner-btn">
                                <a href="shop-product-right.html">Shop now</a>
                              </div>
                            </div>
                            <div className="menu-banner-discount">
                              <h3>
                                <span>25%</span>
                                off
                              </h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-category-grid.html">
                        Blog <i className="fi-rs-angle-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-category-grid.html">
                            Blog Category Grid
                          </a>
                        </li>
                        <li>
                          <a href="blog-category-list.html">
                            Blog Category List
                          </a>
                        </li>
                        <li>
                          <a href="blog-category-big.html">Blog Category Big</a>
                        </li>
                        <li>
                          <a href="blog-category-fullwidth.html">
                            Blog Category Wide
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Single Post <i className="fi-rs-angle-right"></i>
                          </a>
                          <ul className="level-menu level-menu-modify">
                            <li>
                              <a href="blog-post-left.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-post-right.html">Right Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-post-fullwidth.html">No Sidebar</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Pages <i className="fi-rs-angle-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="page-about-2.html">About Us</a>
                        </li>
                        <li>
                          <a href="page-contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="page-account.html">My Account</a>
                        </li>
                        <li>
                          <Link to="login">Login</Link>
                        </li>
                        <li>
                          <Link to="register">Register</Link>
                        </li>
                        <li>
                          <a href="page-forgot-password.html">
                            Forgot password
                          </a>
                        </li>
                        <li>
                          <a href="page-reset-password.html">Reset password</a>
                        </li>
                        <li>
                          <a href="page-purchase-guide.html">Purchase Guide</a>
                        </li>
                        <li>
                          <a href="page-privacy-policy.html">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="page-terms.html">Terms of Service</a>
                        </li>
                        <li>
                          <a href="page-404.html">404 Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="page-contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hotline d-none d-lg-flex">
              <img
                src="template/assets/imgs/theme/icons/icon-headphone.svg"
                alt="hotline"
              />
              <p>
                1900 - 888<span>24/7 Support Center</span>
              </p>
            </div>
            <div className="header-action-icon-2 d-block d-lg-none">
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
            <div className="header-action-right d-block d-lg-none">
              <div className="header-action-2">
                <div className="header-action-icon-2">
                  <a href="shop-wishlist.html">
                    <img
                      alt="Nest"
                      src="template/assets/imgs/theme/icons/icon-heart.svg"
                    />
                    <span className="pro-count white">4</span>
                  </a>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="#">
                    <img
                      alt="Nest"
                      src="template/assets/imgs/theme/icons/icon-cart.svg"
                    />
                    <span className="pro-count white">2</span>
                  </a>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html">
                            <img
                              alt="Nest"
                              src="template/assets/imgs/shop/thumbnail-3.jpg"
                            />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="shop-product-right.html">
                              Plain Striola Shirts
                            </a>
                          </h4>
                          <h3>
                            <span>1 × </span>$800.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html">
                            <img
                              alt="Nest"
                              src="template/assets/imgs/shop/thumbnail-4.jpg"
                            />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="shop-product-right.html">
                              Macbook Pro 2024
                            </a>
                          </h4>
                          <h3>
                            <span>1 × </span>$3500.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                        <h4>
                          Total <span>$383.00</span>
                        </h4>
                      </div>
                      <div className="shopping-cart-button">
                        <a href="shop-cart.html">View cart</a>
                        <a href="shop-checkout.html">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
