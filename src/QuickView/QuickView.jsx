import React from "react";
import MainSlides from "./MainSlides";
import Thumbnails from "./Thumbnails";
import DetailInfo from "./DetailInfo";

export default function QuickView() {
  return (
    <div
      className="modal fade custom-modal"
      id="quickViewModal"
      tabindex="-1"
      aria-labelledby="quickViewModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                <div className="detail-gallery">
                  <span className="zoom-icon">
                    <i className="fi-rs-search"></i>
                  </span>
                  <MainSlides />
                  <Thumbnails />
                </div>
                {/* <!-- End Gallery --> */}
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <DetailInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
