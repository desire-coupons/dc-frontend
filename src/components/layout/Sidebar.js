import React from "react";

function Sidebar() {
  return (
    <div
      className="sidebar-content"
      style={{ marginTop: "3rem", marginLeft: 15 }}
    >
      <form action method="post">
        <h2 className="subscribe-email-heading" style={{ fontSize: 30 }}>
          Subscribe
        </h2>
        <p style={{ fontSize: 13 }}>
          Enter your email address to get all of our premium Coupons and Blogs
          directly into your email 😀
        </p>
        <p style={{ fontSize: 13 }}>Join 3,721 other subscribers</p>
        <div className="form-group">
          <label htmlFor="emailfunnel">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailfunnel"
            placeholder="name@example.com"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Subscribe!
        </button>
      </form>
      {/* sidebar social media */}
      <div style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: 30 }}>Follow us at</h2>
        <div className="social-media-icons">
          <ul
            style={{
              width: "75%",
              display: "flex",
              listStyle: "none",
              justifyContent: "space-between",
            }}
          >
            <li>
              <a href>
                <img src={require("../../assets/img/footer/social-media-icons/facebook.svg")} alt />
              </a>
            </li>
            <li>
              <a href>
                <img src={require("../../assets/img/footer/social-media-icons/instagram.svg")} alt />
              </a>
            </li>
            <li>
              <a href>
                <img src={require("../../assets/img/footer/social-media-icons/pinterest.svg")} alt />
              </a>
            </li>
            <li>
              <a href>
                <img src={require("../../assets/img/footer/social-media-icons/telegram.svg")} alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* sidebar social media */}
    </div>
  );
}

export default Sidebar;
