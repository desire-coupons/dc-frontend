import React from "react";

function Nav() {
  function categoriesdropdown() {
    document.getElementById("categoriesDropdown").classList.toggle("show");
  }
  return (
    <>
        {/* Top Logo */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className="main-heading">
                <a href="/">Desire Coupons</a>
              </h1>
            </div>
            <div className="col-12 col-lg-6">
              <div className="main-heading-searchbar">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Coupons"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-secondary" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top Logo */}
        {/* Navbar */}
        <div className="container sticking" id="sticking">
          <nav>
            <div className="menu-icon">
              <span className="fas fa-bars" />
            </div>
            <div className="logo">
              <a href="/" style={{ color: "#fff" }}>
                Desire Coupons
              </a>
            </div>
            <div className="nav-items">
              <li>
                <div className="cancel-icon">
                  <span className="fas fa-times" />
                </div>
              </li>
              <li>
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="dropdown">
                  <button className="dropbtn" onClick={categoriesdropdown}>
                    Categories {" "}
                    <i className="fa fa-caret-down" />
                  </button>
                </a>
                <div className="dropdown-content" id="categoriesDropdown">
                  <a className="dropdown"></a>
                  <a href="#">Link a</a>
                  <a href="#">Link b</a>
                  <a href="#">Link c</a>
                </div>
              </li>
              {/* <li>
                <a class="dropdown">
                    <button class="dropbtn" onclick="navbardropdown()">
                    Articles
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content" id="myDropdown">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                </a>
            </li> */}
              <li>
                <a href="./blog.html">Blogs</a>
              </li>
              <li>
                <a href="#">Request</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">DMCA</a>
              </li>
            </div>
            <div className="search-icon">
              <span className="fas fa-search" />
            </div>
            <div className="cancel-icon-search hide">
              <span className="fas fa-times" />
            </div>
            <form action="#">
              <input
                type="search"
                className="search-data"
                placeholder="Search"
                required
              />
              <button type="submit" className="fas fa-search" />
            </form>
          </nav>
        </div>
        {/* Navbar */}
    </>
  );
}

export default Nav;
