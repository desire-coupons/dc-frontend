/* eslint-disable jsx-a11y/anchor-is-valid */

/* React Imports */
import React from "react";

/* Global Imports */
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

/* Homepage Imports */
import Coupons from "../coupons/Coupons";
import Sidebar from "../layout/Sidebar";
import Blogs from "../blogs/Blogs";
import PopularCourses from "../layout/PopularCourses";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="container content homepage">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h2>Recent Coupons</h2>
            <Coupons location="home" />
          </div>
          <div className="col-12 col-lg-4 sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
      <Blogs location="home" />
      <PopularCourses />
      <Footer />
    </>
  );
};

export default Home;
