import React from "react";

const BreadCrumb = () => {
  return (
    <div className="flex justify-center ox-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white  ...">
    <a href="#" className=" font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900 mr-16 text-[#FFFFFF]">Trang chủ</a>
    <a href="#" className="font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900 mr-16 text-[#FFFFFF]">Điện thoại</a>
    <a href="#" className="font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900 mr-16 text-[#FFFFFF]">Samsung</a>
    <a href="#" className="font-medium px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900 mr-16 text-[#FFFFFF]">Samsung Galaxy A73 (5G) 256GB</a>
  </div>
  );
};

export default BreadCrumb;
