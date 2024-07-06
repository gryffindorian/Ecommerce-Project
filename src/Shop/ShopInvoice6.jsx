import React from "react";

export const ShopInvoice6 = () => {
  return (
    <div className="invoice invoice-content invoice-6">
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
                  <div className="invoice-icon">
                    <img
                      src="assets/imgs/theme/icons/icon-invoice.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="logo">
                        <a className="mr-20" href="index.html">
                          <img src="assets/imgs/theme/logo.svg" alt="logo" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 text-end">
                      <h2 className="mb-0">INVOICE</h2>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="text">
                        205 North, Suite 810, Chicago, USA
                        <br />
                        <abbr title="Phone">Phone:</abbr> (+123) 456-7890
                        <br />
                      </div>
                    </div>
                    <div className="col-md-6 text-end">
                      <strong className="text-brand">Webz Poland</strong> <br />
                      Madalinskiego 871-101 Szczecin, Poland
                      <br />
                      <abbr title="Email">Email: </abbr>nfo@webz.com.pl
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-12">
                      <div className="hr mb-10"></div>
                    </div>
                    <div className="col-lg-4">
                      <strong className="text-brand"> Invoice No:</strong>{" "}
                      789654
                    </div>
                    <div className="col-lg-4">
                      <strong className="text-brand"> Issue Date:</strong> 20
                      April, 2024
                    </div>
                    <div className="col-lg-4">
                      <strong className="text-brand"> Payment Method:</strong>{" "}
                      Credit Card
                    </div>
                    <div className="col-12">
                      <div className="hr mt-10"></div>
                    </div>
                  </div>
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
                    <div className="col-12">
                      <div className="hr mt-30 mb-30"></div>
                      <p className="mb-0 text-muted">
                        <strong>Note:</strong>This is computer generated receipt
                        and does not require physical signature.
                      </p>
                    </div>
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
