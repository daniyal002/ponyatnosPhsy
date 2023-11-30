import React from "react";
import { useNavigate } from "react-router-dom";
import Warning from "./Warning";

const Howitworks = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <section className="w-full bg-[#f0f0f0]">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className="p-3 flex flex-col justify-center">
            <h2 className="text-[25px] md:text-[42px] font-semibold text-[#171717] text-center">
              Как это работает
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f0f0f0]">
        <div className="max-w-[1200px] mx-auto p-3 flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px] relative">
          <div className="before:absolute before:lg:left-[48.5%] before:md:left-[47.5%] before:transform before:-translate-x-1/2 before:w-[2px] before:h-[62%] before:top-[18%] before:bg-green-pon before:ml-[11px] before:md:ml-0">
            <div className="flex items-center gap-x-[0px] md:gap-x-[56px] w-full flex-row-reverse md:flex-row">
              <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                <img
                  src="./images/ik6.svg"
                  alt=""
                  className="w-[137px] h-[123px]"
                />
                <h4 className="text-[22px] text-[#171717] font-semibold">
                  Выбор психолога
                </h4>
                <p className="text-[16px] text-[#171717] font-light text-center">
                  Выберите психолога на странице &nbsp;
                  <span
                    className="text-green-pon cursor-pointer"
                    onClick={() => navigate("/allpsychologist")}
                  >
                    Психологи
                  </span>
                  &nbsp; или мы поможем &nbsp;
                  <span
                    className="text-green-pon cursor-pointer"
                    onClick={() => navigate("/allpsychologist")}
                  >
                    подобрать
                  </span>
                </p>
              </div>

              <div className="w-0 md:w-1/3 flex  md:justify-center">
                <div className="bg-white w-[30px] h-[30px] mr-[37px] rounded-full flex flex-col  items-start md:items-center relative">
                  <div className="bg-white  w-[30px] h-[21px] text-center rounded-full pb-2 text-green-pon font-semibold text-[18px]">
                    1
                  </div>
                </div>
              </div>

              <div className="w-0 md:w-1/3"></div>
            </div>

            <div className="flex items-center gap-x-[0px] md:gap-x-[56px] w-full flex-row-reverse ">
              <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                <img
                  src="./images/ik7.svg"
                  alt=""
                  className="w-[137px] h-[123px]"
                />
                <h4 className="text-[22px] text-[#171717] font-semibold">
                  Онлайн-запись
                </h4>
                <p className="text-[16px] text-[#171717] font-light text-center">
                  Запишитесь на сессию со страницы выбранного психолога
                </p>
              </div>

              <div className="w-0 md:w-1/3 flex  md:justify-center">
                <div className="bg-white w-[30px] h-[30px] mr-[37px] rounded-full flex flex-col  items-start md:items-center relative">
                  <div className="bg-white  w-[30px] h-[21px] text-center rounded-full pb-2 text-green-pon font-semibold text-[18px]">
                    2
                  </div>
                </div>
              </div>

              <div className="w-0 md:w-1/3"></div>
            </div>

            <div className="flex items-center gap-x-[0px] md:gap-x-[56px] w-full flex-row-reverse md:flex-row">
              <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                <img
                  src="./images/ik9.svg"
                  alt=""
                  className="w-[137px] h-[123px]"
                />
                <h4 className="text-[22px] text-[#171717] font-semibold">
                  Подтверждение
                </h4>
                <p className="text-[16px] text-[#171717] font-light text-center">
                  Оплатите сессию любым удобным вам способом с помощью Яндекс
                  Кассы
                </p>
              </div>

              <div className="w-0 md:w-1/3 flex  md:justify-center">
                <div className="bg-white w-[30px] h-[30px] mr-[37px] rounded-full flex flex-col  items-start md:items-center relative">
                  <div className="bg-white  w-[30px] h-[21px] text-center rounded-full pb-2 text-green-pon font-semibold text-[18px]">
                    3
                  </div>
                </div>
              </div>

              <div className="w-0 md:w-1/3"></div>
            </div>

            <div className="flex items-center gap-x-[0px] md:gap-x-[56px] w-full flex-row-reverse">
              <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                <img
                  src="./images/ik10.svg"
                  alt=""
                  className="w-[137px] h-[123px]"
                />
                <h4 className="text-[22px] text-[#171717] font-semibold text-center mt-2">
                  Контакт с психологом
                </h4>
                <p className="text-[16px] text-[#171717] font-light text-center">
                  Психолог с вами свяжется удобным способом для уточнения
                  деталей
                </p>
              </div>

              <div className="w-0 md:w-1/3 flex  md:justify-center">
                <div className="bg-white w-[30px] h-[30px] mr-[37px] rounded-full flex flex-col  items-start md:items-center relative">
                  <div className="bg-white  w-[30px] h-[21px] text-center rounded-full pb-2 text-green-pon font-semibold text-[18px]">
                    4
                  </div>
                </div>
              </div>

              <div className="w-0 md:w-1/3"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="maw-w-[1200px] flex flex-col md:flex-row">
          <div
            className="w-auto md:w-1/2 bg-[#6096d0] p-[20px] lg:p-[40px] flex flex-col gap-y-[14px] cursor-pointer"
            onClick={() => navigate("/otzyvy")}
          >
            <p className="uppercase text-[#f0f0f0] text-[12px] tracking-[2.5px] font-semibold">
              Читать
            </p>
            <h3 className="text-[22px] text-white font-semibold">Отзывы</h3>
            <p className="text-[16px] text-white font-light">
              Отзывы о работе психологов онлайн
            </p>
          </div>

          <div
            className="w-auto md:w-1/2 bg-green-pon p-[20px] lg:p-[40px] flex flex-col items-end gap-y-[14px]  cursor-pointer"
            onClick={() => navigate("/faq")}
          >
            <p className="uppercase text-[#f0f0f0] text-[12px] tracking-[2.5px] font-semibold">
              Читать
            </p>
            <h3 className="text-[22px] text-white font-semibold">FAQ</h3>
            <p className="text-[16px] text-white font-light text-right">
              Ответы на самые частные вопросы о консультации психолога онлайн
            </p>
          </div>
        </div>
      </section>

      <Warning />
    </div>
  );
};

export default Howitworks;
