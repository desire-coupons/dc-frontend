import React from "react";
import HomeCoupons from "./HomeCoupons";

function Coupons({ directory }) {
  /* console.log(directory); */
  if (directory === "home") {
    return <HomeCoupons />;
  } else {
    return <div>not richard</div>;
  }
}

export default Coupons;
