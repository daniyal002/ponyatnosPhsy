import React from "react";
import { Link, Outlet } from "react-router-dom";

const RegistrationAndAuthorization = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-3/4 md:w-[30%] flex justify-center gap-x-10 m-4">
        <Link
          to="/auth/login"
          className="bg-green-pon p-3 text-white uppercase text-xl font-medium duration-500 shadow-[#3a3a3a] shadow-sm hover:shadow-md hover:shadow-[#3a3a3a] active:shadow-sm active:shadow-[#3a3a3a]"
        >
          Вход
        </Link>
        <Link
          to="/auth/reg"
          className="bg-green-pon p-3 text-white uppercase text-xl font-medium duration-500 shadow-[#3a3a3a] shadow-sm hover:shadow-md hover:shadow-[#3a3a3a] active:shadow-sm active:shadow-[#3a3a3a]"
        >
          Регистрация
        </Link>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RegistrationAndAuthorization;
