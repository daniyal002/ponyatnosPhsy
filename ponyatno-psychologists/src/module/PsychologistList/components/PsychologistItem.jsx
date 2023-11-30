import React, { useEffect, useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { CSSTransition } from "react-transition-group";
import CalendarCopy from "../../Calendar/CalendarCopy";
const PsychologistItem = ({ info }) => {
  const [more, setMore] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  return (
    <div className="flex flex-col max-w-[280px] xs:max-w-[700px] mt-1 backdrop-blur-xl bg-white/30 justify-center p-3  flex-wrap mx-auto   rounded-lg border-green-pon border-solid border-2 mb-7 gap-x-5">
      <div className="flex flex-col gap-y-5  items-center justify-center mx-auto w-[300px]">
        <div>
          <img
            src="https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava1.jpg"
            alt="Profile Photo"
            className="w-[200px] rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4 justify-center">
            <p className="text-3xl font-semibold text-white">
              {info.firstName}
            </p>
            <p className="text-3xl font-semibold text-white">{info.lastName}</p>
          </div>

          <div>
            <h5 className="text-center text-green-pon font-semibold text-[20px]">
              Специализация:
            </h5>
            <div className="w-[300px] mx-auto flex flex-wrap justify-center gap-x-2">
              {info.specialization &&
                info.specialization.$values.map((spec, index) => (
                  <p key={index} className="text-white">
                    {spec}
                  </p>
                ))}
            </div>
          </div>

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
              <CalendarCopy
                availability={info.psychologistProfiles.$values}
                breakDuration={info.breakDuration}
                sessionDuration={info.sessionDuration}
                timeBeforeBooking={info.timeBeforeBooking}
                psychologistProfileId={info.psychologistId}
                firstName={info.firstName}
                lastName={info.lastName}
                bookingsDto={info.bookingsDto.$values}
              />
            </div>
          </CSSTransition>
        </div>
      </div>

      <div className="flex  justify-center gap-y-4 my-4">
        <div>
          <div className="flex flex-row justify-start xs:justify-center items-end gap-y-[1px]  gap-x-2">
            <div className="flex items-center justify-center box-border  rounded-lg  w-[30%] sm:w-[200px] h-[110px] sm:h-[150px] bg-green-pon text-center py-[28px] duration-4000">
              <p className="flex flex-col text-[20px] font-bold text-white xs:text-[30px]">
                {info.yearsOfExperience}
                <span className="text-[14px] font-normal xs:text-[18px]">
                  лет опыта
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center box-border rounded-lg w-[30%] sm:w-[200px] h-[110px] sm:h-[150px] bg-green-pon text-center py-[28px] duration-4000">
              <p className="flex flex-col text-[20px] font-bold text-white xs:text-[30px]">
                1
                <span className="text-[14px] font-normal xs:text-[18px]">
                  Диплом психолога
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center box-border  rounded-lg  w-[30%] sm:w-[200px] h-[110px] sm:h-[150px] bg-green-pon text-center py-[28px] duration-4000">
              <p className="flex flex-col text-[20px] font-bold text-white xs:text-[30px]">
                3
                <span className="text-[14px] font-normal xs:text-[18px]">
                  профильных курса
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {!more ? (
        <div className="flex justify-center">
          <button
            className="border-[2px] border-green-pon p-4 rounded-lg mb-3 text-white"
            onClick={() => setMore(true)}
          >
            Развернуть профиль
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button className="hidden" onClick={() => setMore(true)}>
            Развернуть профиль
          </button>
        </div>
      )}

      {more && (
        <div className="flex flex-col gap-y-5 justify-center items-center p-3 sm:p-3 max-w-[580px]">
          <div className="flex flex-col gap-y-2 my-6 w-2/3">
            <h6 className="text-[26px] text-green-pon font-semibold">
              Психологический подход
            </h6>
            <div className="flex gap-x-4 justify-start flex-wrap gap-y-4 ">
              {info.psychologicalApproach &&
                info.psychologicalApproach.$values.map((approach, index) => (
                  <p
                    key={index}
                    className="bg-green-pon text-white font-semibold p-2 rounded-lg text-[18px]"
                  >
                    {approach}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-3 w-2/3">
            <h6 className="text-[26px] text-green-pon font-semibold">О себе</h6>
            <p className="text-white">{info.aboutMe}</p>
          </div>

          <div className="flex flex-col gap-y-3 w-2/3">
            <h6 className="text-[26px] text-green-pon font-semibold">
              Что даст сеанс
            </h6>
            <p className="text-white">{info.sessionFeedback}</p>
          </div>

          <div className="flex flex-col gap-y-3 w-2/3">
            <h6 className="text-[26px] text-green-pon font-semibold">
              Образование
            </h6>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quidem eum esse commodi facere totam veritatis
              reprehenderit placeat consequatur repudiandae at nemo laborum
              tempore temporibus, fugit mollitia, distinctio corporis. Eos.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="border-[2px] border-green-pon p-4 rounded-lg text-white "
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
