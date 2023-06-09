import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { signin } from "../api/auth";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { SigninForm, signinSchema } from "../models/user";

const Signin = () => {
  const {
    register,
    handleSubmit,//sử dụng để xử lý sự kiện khi người dùng submit form.
    formState: { errors },
  } = useForm<SigninForm>({
    resolver: yupResolver(signinSchema),
  });//yupResolver để kiểm tra dữ liệu được nhập vào form
  //useLocalStorage để lưu trữ thông tin người dùng sau khi đăng nhập
  const [user, setUser] = useLocalStorage("user", null);

  const navigate = useNavigate();
// để xử lý sự kiện submit form
  const onSubmit = async (data: SigninForm) => {
    try {
      const {
        data: { accessToken, user },
      } = await signin(data);
      setUser({
        accessToken,
        ...user,
      });
      //nếu thành công
      console.log(data);
      navigate("/admin");
    }//nếu ko thành công
     catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center bg-slate-400	">
      <form
        action=""
        className="flex items-center justify-between p-[55px] bg-white rounded-2xl shadow-xl min-w-[800px] min-h-[570px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-lg text-[#444]">
              Email
            </label>
            <input
              {...register("email")}
              type="text"
              className="px-3 py-2 border border-gray-200 rounded-md outline-none min-w-[410px]"
            />
            <p className="text-xs text-red-500">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block mb-2 text-lg text-[#444]">
              Mật khẩu
            </label>
            <input
              {...register("password")}
              type="password"
              className="px-3 py-2 border border-gray-200 rounded-md outline-none min-w-[410px]"
            />
            <p className="text-xs text-red-500">
              {errors.password && errors.password.message}
            </p>
          </div>
          <button className="min-w-[410px] hover:bg-blue-600 hover:text-white text-blue-600 bg-white-600 border-dashed border-2 border-blue-500 rounded-md py-3 mb-[24px]">
            Đăng nhập
          </button>
          <p className="mb-6 text-center">
            Bạn chưa có tài khoản?{" "}
            <Link to="/signup" className="text-blue-900 underline">
              Đăng ký
            </Link>
          </p>
         
        </div>
        <div>
          <img src="logo.png" className="w-[185px] h-[162px]" alt="" />
        </div>
      </form>
    </div>
  );
};

export default Signin;
