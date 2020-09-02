/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Coupons from "../coupons/Coupons";
import Sidebar from "../layout/Sidebar";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="container content homepage">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h2>Recent Coupons</h2>
            <Coupons directory="home" />
          </div>
          <div className="col-12 col-lg-4 sidebar">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
