import React from "react";
import HomeCoupons from "./HomeCoupons";

function Coupons({ location }) {
  /* console.log(location); */
  if (location === "home") {
    return <HomeCoupons />;
  } else {
    return <div>not richard</div>;
  }
}

export default Coupons;
