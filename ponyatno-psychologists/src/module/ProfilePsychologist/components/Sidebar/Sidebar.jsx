import React from "react";
import profileIcon from "../../../../assets/icon/profile.svg";
import calendarIcon from "../../../../assets/icon/calendar.svg";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div className="flex flex-col w-[20%] bg-white  gap-y-8">
      <h3 className="text-center font-semibold">Настройки профиля </h3>
      <div className="flex flex-col gap-y-3 ">
        <div
          className={
            open
              ? "flex items-center gap-x-7 bg-gradient-to-r from-[#C3E5AE] to-[#65C18C]  p-3 duration-1000"
              : "flex items-center gap-x-7 bg-white p-3 hover:bg-gradient-to-r from-[#C3E5AE] to-[#65C18C] hover:text-white duration-700"
          }
        >
          <img src={profileIcon} alt="Profile Icon" width={30} />
          <button
            className={
              open
                ? "text-center text-[18px] cursor-pointer text-white font-bold"
                : "text-center text-[18px] cursor-pointer  "
            }
            onClick={() => setOpen(true)}
          >
            Настройки Профиля
          </button>
        </div>
        <div
          className={
            !open
              ? "flex items-center gap-x-7 bg-gradient-to-r from-[#C3E5AE] to-[#65C18C] p-3 duration-1000"
              : "flex items-center gap-x-7 bg-white p-3 hover:bg-gradient-to-r from-[#C3E5AE] to-[#65C18C]  hover:text-white duration-700"
          }
        >
          <img src={calendarIcon} alt="Calendar Icon" width={30} />
          <button
            className={
              !open
                ? "text-center text-[18px] cursor-pointer text-white font-bold"
                : "text-center text-[18px] cursor-pointer "
            }
            onClick={() => setOpen(false)}
          >
            Настройки рабочего времени
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
