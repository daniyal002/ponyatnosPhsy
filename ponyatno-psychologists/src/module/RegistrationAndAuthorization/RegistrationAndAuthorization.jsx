import React from "react";
import { BrowserRouter, Route, Router, Link, Routes } from "react-router-dom";
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration";

const RegistrationAndAuthorization = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-3/4 md:w-[30%] flex justify-center gap-x-10 m-4">
          <Link
            to={"/auth/login"}
            className="bg-green-pon p-3 text-white uppercase text-xl font-medium duration-500 shadow-[#3a3a3a] shadow-sm hover:shadow-md hover:shadow-[#3a3a3a] active:shadow-sm active:shadow-[#3a3a3a]"
          >
            Вход
          </Link>
          <Link
            to={"/auth/reg"}
            className="bg-green-pon p-3 text-white uppercase text-xl font-medium duration-500 shadow-[#3a3a3a] shadow-sm hover:shadow-md hover:shadow-[#3a3a3a] active:shadow-sm active:shadow-[#3a3a3a]"
          >
            Регистрация
          </Link>
        </div>

        <div className="w-full">
          <Routes>
            <Route path="/auth/login" element={<Authorization />} />
            <Route path="/auth/reg" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default RegistrationAndAuthorization;
