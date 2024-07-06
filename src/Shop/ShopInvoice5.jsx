import React from "react";

export const ShopInvoice5 = () => {
  return (
    <div className="invoice invoice-content invoice-5">
      <div className="back-top-home hover-up mt-30 ml-30">
        <a className="hover-up" href="index.html">
          <i className="fi-rs-home mr-5"></i> Homepage
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="invoice-inner">
              <div className="invoice-info" id="invoice_wrapper">
                <div className="invoice-header">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="logo d-flex align-items-center">
                        <a className="mr-20" href="index.html">
                          <img src="assets/imgs/theme/favicon.svg" alt="logo" />
                        </a>
                        <div className="text">
                          <strong className="text-brand">NestMart Inc</strong>{" "}
                          <br />
                          205 North, Suite 810, Chicago, USA
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 text-end">
                      <h2>INVOICE</h2>
                      <h6>
                        ID Number: <span className="text-brand">98657</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="invoice-banner">
                  <img src="assets/imgs/invoice/banner.png" alt="" />
                </div>
                <div className="invoice-center">
                  <div className="table-responsive">
                    <table className="table table-striped invoice-table">
                      <thead className="bg-active">
                        <tr>
                          <th>Item Item</th>
                          <th className="text-center">Unit Price</th>
                          <th className="text-center">Quantity</th>
                          <th className="text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="item-desc-1">
                              <span>
                                Field Roast Chao Cheese Creamy Original
                              </span>
                              <small>SKU: FWM15VKT</small>
                            </div>
                          </td>
                          <td className="text-center">$10.99</td>
                          <td className="text-center">1</td>
                          <td className="text-right">$10.99</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item-desc-1">
                              <span>Blue Diamond Almonds Lightly Salted</span>
                              <small>SKU: FWM15VKT</small>
                            </div>
                          </td>
                          <td className="text-center">$20.00</td>
                          <td className="text-center">3</td>
                          <td className="text-right">$60.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item-desc-1">
                              <span>
                                Fresh Organic Mustard Leaves Bell Pepper
                              </span>
                              <small>SKU: KVM15VK</small>
                            </div>
                          </td>
                          <td className="text-center">$640.00</td>
                          <td className="text-center">1</td>
                          <td className="text-right">$640.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item-desc-1">
                              <span>
                                All Natural Italian-Style Chicken Meatballs
                              </span>
                              <small>SKU: 98HFG</small>
                            </div>
                          </td>
                          <td className="text-center">$240.00</td>
                          <td className="text-center">1</td>
                          <td className="text-right">$240.00</td>
                        </tr>
                        <tr>
                          <td colspan="3" className="text-end f-w-600">
                            SubTotal
                          </td>
                          <td className="text-right">$1710.99</td>
                        </tr>
                        <tr>
                          <td colspan="3" className="text-end f-w-600">
                            Tax
                          </td>
                          <td className="text-right">$85.99</td>
                        </tr>
                        <tr>
                          <td colspan="3" className="text-end f-w-600">
                            Grand Total
                          </td>
                          <td className="text-right f-w-600">$1795.99</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="invoice-bottom pb-80">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="mb-15">Invoice Infor</h6>
                      <p className="font-sm">
                        <strong>Issue date:</strong> 20 march, 2024
                        <br />
                        <strong>Invoice To:</strong> NestMart Inc
                        <br />
                        <strong>Swift Code:</strong> BFTV VNVXS
                      </p>
                    </div>
                    <div className="col-md-6 text-end">
                      <h6 className="mb-15">Total Amount</h6>
                      <h3 className="mt-0 mb-0 text-brand">$1795.99</h3>
                      <p className="mb-0 text-muted">Taxes Included</p>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="hr mt-30 mb-30"></div>
                    <p className="mb-0 text-muted">
                      <strong>Note:</strong>This is computer generated receipt
                      and does not require physical signature.
                    </p>
                  </div>
                </div>
              </div>
              <div className="invoice-btn-section clearfix d-print-none">
                <a
                  href="javascript:window.print()"
                  className="btn btn-lg btn-custom btn-print hover-up"
                >
                  {" "}
                  <img
                    src="assets/imgs/theme/icons/icon-print.svg"
                    alt=""
                  />{" "}
                  Print{" "}
                </a>
                <a
                  id="invoice_download_btn"
                  className="btn btn-lg btn-custom btn-download hover-up"
                >
                  {" "}
                  <img
                    src="assets/imgs/theme/icons/icon-download.svg"
                    alt=""
                  />{" "}
                  Download{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
