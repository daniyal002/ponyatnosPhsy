import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const generateMenuItems = (role) => {
    switch (role) {
      case "Admin":
        return [
          { link: "/", text: "Главная" },
          { link: "/business", text: "Бизнесу" },
          { link: "/otzyvy", text: "Отзывы" },
          { link: "/profile", text: "Личный кабинет" },
          { link: "auth/login", text: "Выход" },
        ];

      case "User":
        return [
          { link: "/", text: "Главная" },
          { link: "/business", text: "Бизнесу" },
          { link: "/otzyvy", text: "Отзывы" },
          { link: "/profile", text: "Личный кабинет" },
          { link: "/auth/login", text: "Выход" },
        ];
      case "Psychologists":
        return [
          { link: "/", text: "Главная" },
          { link: "/business", text: "Бизнесу" },
          { link: "/otzyvy", text: "Отзывы" },
          { link: "/profile", text: "Личный кабинет" },
          { link: "/auth/login", text: "Выход" },
        ];

      default:
        return [
          { link: "/", text: "Главная" },
          { link: "/business", text: "Бизнесу" },
          { link: "/otzyvy", text: "Отзывы" },
          { link: "/auth", text: "Регистрация/Вход" },
        ];
    }
  };

  const userMenuItems = generateMenuItems("User");

  return (
    <header className="absolute bg-white w-full overflow-hidden">
      <div className="container mx-auto flex items-center p-4 justify-around w-100">
        <div className="">
          <Link to="/">
            <img src="logo.svg" alt="logo" />
          </Link>{" "}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-blue-500"
        >
          <div className="w-6 h-6 relative">
            <svg
              style={{ display: !open ? "block" : "none" }}
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              style={{ display: open ? "block" : "none" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>
        <div className="hidden lg:flex">
          <ul className="lg:flex space-x-4 gap-x-1">
            {userMenuItems &&
              userMenuItems.map((menu, index) => (
                <Link to={menu.link} key={index}>
                  {menu.text}
                </Link>
              ))}
          </ul>
        </div>
      </div>
      <CSSTransition
        in={open}
        timeout={300}
        classNames="mobile-menu"
        unmountOnExit
      >
        <div className="lg:hidden">
          <ul className="bg-white p-4 flex flex-col">
            {userMenuItems &&
              userMenuItems.map((menu, index) => (
                <Link to={menu.link} key={index}>
                  {menu.text}
                </Link>
              ))}
          </ul>
        </div>
      </CSSTransition>
    </header>
  );
};

export default MobileMenu;
