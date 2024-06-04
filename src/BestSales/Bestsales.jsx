import React from "react";
import PW1 from "./PW1";
import PW2 from "./PW2";
import PW3 from "./PW3";
import PW4 from "./PW4";
import PW5 from "./PW5";
import PW6 from "./PW6";
import PW7 from "./PW7";
import PW8 from "./PW8";
import PW9 from "./PW9";
import PW10 from "./PW10";
import PW11 from "./PW11";
import PW12 from "../ProductTabs/PW12";
import PW13 from "./PW13";
import PW14 from "./PW14";
import PW15 from "./PW15";

export default function Bestsales() {
  return (
    <section className="section-padding pb-5">
      <div className="container">
        <div className="section-title wow animate__animated animate__fadeIn">
          <h3 className="">Daily Best Sells</h3>
          <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="nav-tab-one-1"
                data-bs-toggle="tab"
                data-bs-target="#tab-one-1"
                type="button"
                role="tab"
                aria-controls="tab-one"
                aria-selected="true"
              >
                Featured
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-tab-two-1"
                data-bs-toggle="tab"
                data-bs-target="#tab-two-1"
                type="button"
                role="tab"
                aria-controls="tab-two"
                aria-selected="false"
              >
                Popular
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-tab-three-1"
                data-bs-toggle="tab"
                data-bs-target="#tab-three-1"
                type="button"
                role="tab"
                aria-controls="tab-three"
                aria-selected="false"
              >
                New added
              </button>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
            <div className="banner-img style-2">
              <div className="banner-text">
                <h2 className="mb-100">Bring nature into your home</h2>
                <a className="btn btn-xs" href="shop-grid-right.html">
                  Shop Now <i className="fi-rs-arrow-small-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-9 col-md-12 wow animate__animated animate__fadeIn"
            data-wow-delay=".4s"
          >
            <div className="tab-content" id="myTabContent-1">
              <div
                className="tab-pane fade show active"
                id="tab-one-1"
                role="tabpanel"
                aria-labelledby="tab-one-1"
              >
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-arrows"
                  ></div>
                  <div
                    className="carausel-4-columns carausel-arrow-center"
                    id="carausel-4-columns"
                  >
                    <PW1 />
                    <PW2 />
                    <PW3 />
                    <PW4 />
                    <PW5 />
                  </div>
                </div>
              </div>
              {/* <!--End tab-pane--> */}
              <div
                className="tab-pane fade"
                id="tab-two-1"
                role="tabpanel"
                aria-labelledby="tab-two-1"
              >
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-2-arrows"
                  ></div>
                  <div
                    className="carausel-4-columns carausel-arrow-center"
                    id="carausel-4-columns-2"
                  >
                    <PW6 />
                    <PW7 />
                    <PW8 />
                    <PW9 />
                    <PW10 />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-three-1"
                role="tabpanel"
                aria-labelledby="tab-three-1"
              >
                <div className="carausel-4-columns-cover arrow-center position-relative">
                  <div
                    className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                    id="carausel-4-columns-3-arrows"
                  ></div>
                  <div
                    className="carausel-4-columns carausel-arrow-center"
                    id="carausel-4-columns-3"
                  >
                    <PW11 />
                    <PW12 />
                    <PW13 />
                    <PW14 />
                    <PW15 />
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End tab-content--> */}
          </div>
          {/* <!--End Col-lg-9--> */}
        </div>
      </div>
    </section>
  );
}
