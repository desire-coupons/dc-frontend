import React from "react";
import HomeBlogs from "./HomeBlogs";

function Coupons({ location }) {
  /* console.log(location); */
  if (location === "home") {
    return <HomeBlogs />;
  } else {
    return <div>not richard</div>;
  }
}

export default Coupons;
