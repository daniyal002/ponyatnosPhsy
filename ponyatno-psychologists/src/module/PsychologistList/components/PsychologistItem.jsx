import React, { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { CSSTransition } from "react-transition-group";
const PsychologistItem = ({ info }) => {
  const [more, setMore] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  return (
    <div className="flex max-w-[700px] justify-center  flex-wrap mx-auto bg-white  rounded-lg border-green-pon border-solid border-2 mb-7 gap-x-5">
      <div className="flex flex-col gap-y-5  items-center justify-center mx-auto">
        <div>
          <img
            src="https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava1.jpg"
            alt="Profile Photo"
            className="w-[200px] rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          {info.user && (
            <div className="flex gap-x-4 justify-center">
              <p className="text-3xl font-semibold text-green-pon">
                {info.user.firstName}
              </p>
              <p className="text-3xl font-semibold text-green-pon">
                {info.user.lastName}
              </p>
            </div>
          )}
          <div className="flex justify-center">
            {!openCalendar ? (
              <button
                className="border-[2px] bg-green-pon border-green-pon text-white p-4 rounded-lg hover:bg-[#40705a] duration-300 active:bg-[#40705a] "
                onClick={() => setOpenCalendar(!openCalendar)}
              >
                Забронировать
              </button>
            ) : (
              <button
                className="border-[2px] bg-[#40705a] border-green-pon text-white p-4 rounded-lg "
                onClick={() => setOpenCalendar(!openCalendar)}
              >
                Скрыть бронь
              </button>
            )}
          </div>
          <CSSTransition
            in={openCalendar}
            timeout={500}
            unmountOnExit
            classNames="alert"
          >
            <div>
              <Calendar
                availability={info.psychologistAvailability.$values}
                breakDuration={info.breakDuration}
                sessionDuration={info.sessionDuration}
                timeBeforeBooking={info.timeBeforeBooking}
              />
            </div>
          </CSSTransition>

          {!more ? (
            <div className="flex justify-center">
              <button
                className="border-[2px] border-green-pon p-4 rounded-lg mb-3"
                onClick={() => setMore(true)}
              >
                Развернуть профиль
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                className="border-[2px] border-white text-white p-4 rounded-lg "
                onClick={() => setMore(true)}
              >
                Развернуть профиль
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center gap-y-4">
        <div>
          <div className="flex flex-row justify-between sm:justify-end items-end gap-y-[1px] md:flex-col gap-x-2">
            <div className="flex items-center justify-center box-border  w-1/2 sm:w-[200px] h-[110px] sm:h-[150px] bg-green-pon text-center py-[28px] duration-4000">
              <p className="flex flex-col  text-[30px] font-bold text-white">
                {info.yearsOfExperience}
                <span className="text-[18px] font-normal"> лет опыта</span>
              </p>
            </div>
            <div className="flex items-center justify-center box-border  w-1/2 sm:w-[200px] h-[110px] sm:h-[150px] bg-green-pon text-center py-[28px] duration-4000">
              <p className=" flex flex-col text-[30px] font-bold text-white">
                1
                <span className="text-[18px] font-normal">
                  Диплом психолога
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center box-border  w-1/2 sm:w-[200px] h-[110px] sm:h-[150px] bg-green-pon text-center py-[28px] duration-4000">
              <p className=" flex flex-col text-[30px] font-bold text-white">
                3
                <span className="text-[18px] font-normal">
                  профильных курса
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {more && (
        <div className="flex flex-col gap-y-5 justify-center items-center p-8 sm:p-5">
          <div className="flex flex-col gap-y-2  w-[50%] md:max-w-[600px] my-6">
            <h6 className=" text-[18px] md:text-[26px]">
              Психологический подход
            </h6>
            <div className="flex gap-x-8 justify-start">
              <p className="bg-green-pon text-white font-semibold p-2 rounded-lg text-[18px]">
                Гештальт
              </p>
              <p className="bg-green-pon text-white font-semibold p-2 rounded-lg text-[18px]">
                Гештальт
              </p>
              <p className="bg-green-pon text-white font-semibold p-2 rounded-lg text-[18px]">
                Гештальт
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 w-2/3">
            <h6 className="text-[26px]">О себе</h6>
            <p>{info.aboutMe}</p>
          </div>

          <div className="flex flex-col gap-y-3 w-2/3">
            <h6 className="text-[26px]">Что даст сеанс</h6>
            <p>{info.sessionFeedback}</p>
          </div>

          <div className="flex flex-col gap-y-3 w-2/3">
            <h6 className="text-[26px]">Образование</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quidem eum esse commodi facere totam veritatis
              reprehenderit placeat consequatur repudiandae at nemo laborum
              tempore temporibus, fugit mollitia, distinctio corporis. Eos.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="border-[2px] border-green-pon p-4 rounded-lg "
              onClick={() => setMore(false)}
            >
              Свернуть профиль
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PsychologistItem;
