import React from "react";
import ProductDetail from "../../components/layout/user/ProductDetail";
import BreadCrumb from "../../components/layout/user/BreadCrumb";

const DetailProduct = () => {
  return (
    <div className="">
      <div>
        <BreadCrumb></BreadCrumb>
      </div>
      <div>
        <ProductDetail></ProductDetail>
      </div>
    </div>
  );
};

export default DetailProduct;
