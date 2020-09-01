import React from "react";

function Footer() {
  return (
    <div>
      <div
        id="footer"
        className="footer"
        style={{ background: "black", padding: "2rem 0", color: "aliceblue" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <h5 className="py-2">About Desire Coupons</h5>
              <p style={{ fontSize: 13, width: "75%", textAlign: "justify" }}>
                Desire Coupon is a free way of online learning from beginner to
                professional. It’s the best place to find the 100% free Udemy,
                Eduonix, BitDegree, YouAccel coupons
              </p>
              <div className="social-media-icons">
                <ul
                  style={{
                    width: "60%",
                    display: "flex",
                    listStyle: "none",
                    justifyContent: "space-between",
                  }}
                >
                  <li>
                    <a href="#">
                      <img
                        src={require("../assets/img/footer/social-media-icons/facebook.svg")}
                        alt="facebook svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={require("../assets/img/footer/social-media-icons/instagram.svg")}
                        alt="instagram svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={require("../assets/img/footer/social-media-icons/pinterest.svg")}
                        alt="pinterest svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={require("../assets/img/footer/social-media-icons/telegram.svg")}
                        alt="telegram svg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <h5 className="py-2">
                <a href style={{ textDecoration: "none", color: "#fff" }}>
                  Contact Us
                </a>
              </h5>
              <h5 className="py-2">Terms and Conditions</h5>
              <h5 className="py-2">Privacy</h5>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <h5 className="py-2">Latest Courses</h5>
              <ul>
                <li>
                  <a href="#">The Hands On Machine Learning Course</a>
                </li>
                <li>
                  <a href="#">
                    Color Correction &amp; Grading with Adobe Premiere Pro 2020
                  </a>
                </li>
                <li>
                  <a href="#">
                    Complete Modern JavaScript BootCamp from the beginning
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <p className="text-center">Copyright © 2020 Desire Coupons</p>
      </div>
    </div>
  );
}

export default Footer;
