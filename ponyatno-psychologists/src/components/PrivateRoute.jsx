import React from "react";
import { Navigate } from "react-router-dom";
// import useTokenStore from "../store/store";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  // const { token } = useTokenStore();
 const token = Cookies.get("token")
  // Проверка наличия токена (предположим, что вы сохраняете токен в localStorage)
  if (!token) {
    // Если токен отсутствует, перенаправляем на страницу входа
    return <Navigate to="/auth/login" />;
  }
  // Если токен есть, отображаем дочерний компонент
  return children;
};

export default PrivateRoute;
