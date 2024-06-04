import React from "react";
//import { Link } from "react-router-dom";
import DealOfDay from "./DealOfDay";
import QuickView from "./QuickView/QuickView";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Main from "./Main";
import Footer from "./Footer";
import PreloaderStart from "./PreloaderStart";

function App() {
  return (
    <>
      <DealOfDay />
      <QuickView />
      <Header />
      <MobileHeader />
      <Main />
      <Footer />
      <PreloaderStart />
    </>
    //<Link to={`dashboard`}>hello</Link>
  );
}

export default App;
