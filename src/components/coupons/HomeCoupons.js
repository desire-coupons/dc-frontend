import React from "react";

function HomeCoupons() {
  return (
    <div className="row">
      <div className="col-12 col-md-4 col-lg-4 mb-2">
        <div className="card h-100">
          {/* <div className="ribbon ribbon-top-left">
            <span>Best Seller</span>
          </div> */}
          <a href>
            <img
              width={240}
              height={135}
              className="card-img-top img-fluid p-2"
              src="https://tutorialforall.com/wp-content/uploads/thumbs_dir/after-effects-motion-graphics-for-beginners-1wyhcd99yjfxynxhwzzoy6ixog7v4k623rk21kvqbt58.jpg"
              alt="Card image cap"
            />
          </a>
          <div className="card-body" style={{ padding: "0.5rem" }}>
            <div className="row py-2">
              <div className="col-9">
                <span
                  style={{ textDecoration: "line-through", paddingRight: 5 }}
                >
                  $ 0
                </span>
                <span style={{ color: "#2a89ee" }}>Free</span>
              </div>
              <div className="col-3">
                <a href>
                  <img
                    src={require("../../assets/img/google-logo.png")}
                    alt
                    sizes
                    srcSet
                    style={{ width: 25, height: 25 }}
                  />
                </a>
              </div>
            </div>
            <h5 className="card-title" style={{ fontSize: 15 }}>
              <a href style={{ color: "#343a40" }}>
                Photoshop Mega Course – From Beginner to Super Designer
              </a>
            </h5>
            <div className="row">
              <div className="col-12 col-lg-6" style={{ fontSize: 12 }}>
                <p>
                  <span style={{ textTransform: "uppercase", fontSize: 12 }}>
                    <a href style={{ color: "#343a40" }}>
                      PHOTOSHoP
                    </a>{" "}
                  </span>
                  <br />
                  <span style={{ fontSize: 12 }}>
                    <a href style={{ color: "#343a40" }}>
                      {" "}
                      Udemy{" "}
                    </a>
                  </span>
                </p>
              </div>
              <div className="col-12 col-lg-6" style={{ fontSize: 12 }}>
                <p className="text-muted">
                  <i className="far fa-clock" /> 1 days left
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4 col-lg-4 mb-2">
        <div className="card h-100">
          {/* <div className="ribbon ribbon-top-left">
            <span>Best Seller</span>
          </div> */}
          <a href>
            <img
              width={240}
              height={135}
              className="card-img-top img-fluid p-2"
              src="https://tutorialforall.com/wp-content/uploads/thumbs_dir/after-effects-motion-graphics-for-beginners-1wyhcd99yjfxynxhwzzoy6ixog7v4k623rk21kvqbt58.jpg"
              alt="Card image cap"
            />
          </a>
          <div className="card-body" style={{ padding: "0.5rem" }}>
            <div className="row py-2">
              <div className="col-9">
                <span
                  style={{ textDecoration: "line-through", paddingRight: 5 }}
                >
                  $ 0
                </span>
                <span style={{ color: "#2a89ee" }}>Free</span>
              </div>
              <div className="col-3">
                <a href>
                  <img
                    src={require("../../assets/img/google-logo.png")}
                    alt
                    sizes
                    srcSet
                    style={{ width: 25, height: 25 }}
                  />
                </a>
              </div>
            </div>
            <h5 className="card-title" style={{ fontSize: 15 }}>
              <a href style={{ color: "#343a40" }}>
                Photoshop Mega Course – From Beginner to Super Designer
              </a>
            </h5>
            <div className="row">
              <div className="col-12 col-lg-6" style={{ fontSize: 12 }}>
                <p>
                  <span style={{ textTransform: "uppercase", fontSize: 12 }}>
                    <a href style={{ color: "#343a40" }}>
                      PHOTOSHoP
                    </a>{" "}
                  </span>
                  <br />
                  <span style={{ fontSize: 12 }}>
                    <a href style={{ color: "#343a40" }}>
                      {" "}
                      Udemy{" "}
                    </a>
                  </span>
                </p>
              </div>
              <div className="col-12 col-lg-6" style={{ fontSize: 12 }}>
                <p className="text-muted">
                  <i className="far fa-clock" /> 1 days left
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container mt-4">
        <div
          className="pagination"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeCoupons;
