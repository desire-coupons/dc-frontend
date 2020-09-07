/* eslint-disable jsx-a11y/anchor-is-valid */

/* React Imports */
import React from "react";

/* Global Imports */
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

/* Homepage Imports */
import ContactForm from "../layout/ContactForm";
import Sidebar from "../layout/Sidebar";

const Contact = () => {
  return (
    <>
      <Nav />
      {/* breadcrumbs */}
      {/* <li class="breadcrumb-item"><a href="#">Library</a></li> */}
      <div className="container breadcrumbs pt-4">
        <ol className="breadcrumb" style={{ backgroundColor: "#fff" }}>
          <li className="breadcrumb-item">
            <a href="/">
              <i className="fas fa-home" /> Home
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact
          </li>
        </ol>
      </div>
      {/* breadcrumbs */}
      <div className="container content">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h2>Contact Us</h2>
            <ContactForm />
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

export default Contact;
