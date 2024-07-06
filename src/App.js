import React from "react";
//import { Link } from "react-router-dom";
import DealOfDay from "./DealOfDay";
import QuickView from "./QuickView/QuickView";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Main from "./Main";
import Footer from "./Footer";
import PreloaderStart from "./PreloaderStart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VendorsDashboard } from "./Vendors/VendorsDashboard";
import { VendorsGuide } from "./Vendors/VendorsGuide";
import { VendorsGrid } from "./Vendors/VendorsGrid";
import { Vendors1 } from "./Vendors/Vendors1";
import { Vendors2 } from "./Vendors/Vendors2";
import { VendorsList } from "./Vendors/VendorsList";
import { About } from "./About";
import { ShopCart } from "./Shop/ShopCart";
import { ShopCheckout } from "./Shop/ShopCheckout";
import { ShopCompare } from "./Shop/ShopCompare";
import { ShopFilter } from "./Shop/ShopFilter";
import { ShopFullWidth } from "./Shop/ShopFullWidth";
import { ShopGridLeft } from "./Shop/ShopGridLeft";
import { ShopGridRight } from "./Shop/ShopGridRight";
import { ShopInvoice1 } from "./Shop/ShopInvoice1";
import { ShopInvoice2 } from "./Shop/ShopInvoice2";
import { ShopInvoice3 } from "./Shop/ShopInvoice3";
import { ShopInvoice4 } from "./Shop/ShopInvoice4";
import { ShopInvoice5 } from "./Shop/ShopInvoice5";
import { ShopInvoice6 } from "./Shop/ShopInvoice6";
import { ShopListLeft } from "./Shop/ShopListLeft";
import { ShopListRight } from "./Shop/ShopListRight";
import { ShopOrder } from "./Shop/ShopOrder";
import { ShopProductDetail } from "./Shop/ShopProductDetail";
import { ShopProductFull } from "./Shop/ShopProductFull";
import { ShopProductLeft } from "./Shop/ShopProductLeft";
import { ShopProductRight } from "./Shop/ShopProductRight";
import { ShopProductVendor } from "./Shop/ShopProductVendor";
import { ShopWishlist } from "./Shop/ShopWishlist";
import { Register } from "./Register";
import { Login } from "./Login";

//import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <QuickView />
        <Header />
        <MobileHeader />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DealOfDay />
                <Main />
              </>
            }
          />
          <Route path="/vendordashboard" element={<VendorsDashboard />} />
          <Route path="/vendorsguide" element={<VendorsGuide />} />
          <Route path="/vendorsgrid" element={<VendorsGrid />} />
          <Route path="/vendorslist" element={<VendorsList />} />
          <Route path="/vendordetails1" element={<Vendors1 />} />
          <Route path="/vendordetails2" element={<Vendors2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopcart" element={<ShopCart />} />
          <Route path="/shopcheckout" element={<ShopCheckout />} />
          <Route path="/shopcompare" element={<ShopCompare />} />
          <Route path="/shopfilter" element={<ShopFilter />} />
          <Route path="/shopfullwidth" element={<ShopFullWidth />} />
          <Route path="/shopgridleft" element={<ShopGridLeft />} />
          <Route path="/shopgridright" element={<ShopGridRight />} />
          <Route path="/shopinvoice1" element={<ShopInvoice1 />} />
          <Route path="/shopinvoice2" element={<ShopInvoice2 />} />
          <Route path="/shopinvoice3" element={<ShopInvoice3 />} />
          <Route path="/shopinvoice4" element={<ShopInvoice4 />} />
          <Route path="/shopinvoice5" element={<ShopInvoice5 />} />
          <Route path="/shopinvoice6" element={<ShopInvoice6 />} />
          <Route path="/shoplistleft" element={<ShopListLeft />} />
          <Route path="/shoplistright" element={<ShopListRight />} />
          <Route path="/shoporder" element={<ShopOrder />} />
          <Route path="/shopproductdetail" element={<ShopProductDetail />} />
          <Route path="/shopproductfull" element={<ShopProductFull />} />
          <Route path="/shopproductleft" element={<ShopProductLeft />} />
          <Route path="/shopproductright" element={<ShopProductRight />} />
          <Route path="/shopproductvendor" element={<ShopProductVendor />} />
          <Route path="/shopwishlist" element={<ShopWishlist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Main /> */}
        <Footer />
        <PreloaderStart />
      </BrowserRouter>
      {/* <Login /> */}
    </>
    //<Link to={`dashboard`}>hello</Link>
  );
}

export default App;
