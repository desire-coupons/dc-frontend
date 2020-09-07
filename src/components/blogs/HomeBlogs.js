import React from "react";

function HomeBlogs() {
  return (
    <div className="container blog-homepage" style={{ marginTop: "2rem" }}>
      <h3 className="text-center" style={{ color: "#2a89ee", fontSize: 40 }}>
        Latest From Our Blog
      </h3>
      <div className="blog-container blogs">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                {/*  <h5 className="py-2" style={{ textTransform: "uppercase" }}>
                  news
                </h5> */}
                <h5 className="card-title py-2" style={{ fontWeight: 600 }}>
                  <a href style={{ color: "black" }}>
                    Oracle Free Online Learning and Certifications for Cloud
                    Infrastructure and Autonomous Database
                  </a>
                </h5>
                {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">
                  FutureLearn along with Leading Universities of Australia and
                  the Australian Trade and Investment Commission offers more
                  than 36 free....
                </p>
                <a
                  className="btn btn-primary stretched-link"
                  href="#"
                  role="button"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                {/*  <h5 className="py-2" style={{ textTransform: "uppercase" }}>
                  news
                </h5> */}
                <h5 className="card-title py-2" style={{ fontWeight: 600 }}>
                  <a href style={{ color: "black" }}>
                    Oracle Free Online Learning and Certifications for Cloud
                    Infrastructure and Autonomous Database
                  </a>
                </h5>
                {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">
                  FutureLearn along with Leading Universities of Australia and
                  the Australian Trade and Investment Commission offers more
                  than 36 free....
                </p>
                <a
                  className="btn btn-primary stretched-link"
                  href="#"
                  role="button"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                {/*  <h5 className="py-2" style={{ textTransform: "uppercase" }}>
                  news
                </h5> */}
                <h5 className="card-title py-2" style={{ fontWeight: 600 }}>
                  <a href style={{ color: "black" }}>
                    Oracle Free Online Learning and Certifications for Cloud
                    Infrastructure and Autonomous Database
                  </a>
                </h5>
                {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">
                  FutureLearn along with Leading Universities of Australia and
                  the Australian Trade and Investment Commission offers more
                  than 36 free....
                </p>
                <a
                  className="btn btn-primary stretched-link"
                  href="#"
                  role="button"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlogs;
