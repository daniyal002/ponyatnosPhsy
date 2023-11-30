import { useNavigate } from "react-router-dom";
import React from "react";
import Warning from "./Warning";

const Otzyvy = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full">
      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className="max-w-[560px] p-3 flex flex-col justify-center gap-y-[40px]">
            <h2 className="text-[25px] md:text-[42px] font-semibold text-[#171717] text-center">
              Отзывы от клиентов психологов
            </h2>
            <p className="text-[24px] font-light text-[#171717] text-center px-2">
              Самые достоверные отзывы это те, которые психолог получает после
              окончания сессии или терапии. Как правило, отзыв оставляют:
            </p>
          </div>
          <div className=" flex flex-col max-w-[960px] gap-y-[65px]">
            <div className="flex  gap-x-[16px]">
              <img
                src="./images/Message.svg"
                alt="Message"
                className="w-[100px] h-[100px]"
              />
              <div className="flex flex-col gap-y-[14px] max-w-[600px]">
                <h3 className="text-[20px] font-semibold text-[#171717] ">
                  В личном сообщении
                </h3>
                <p className="text-[16px] font-light text-[#171717]">
                  Большую часть отзывов составляет благодарность именно в личном
                  сообщении, так как всё общение с психологом и происходит через
                  WhatApp, Telegram или Skype.
                </p>
              </div>
            </div>

            <div className="flex gap-x-[16px]">
              <img
                src="./images/Social.svg"
                alt="Social"
                className="w-[100px] h-[100px]"
              />
              <div className="flex flex-col gap-y-[14px] max-w-[600px]">
                <h3 className="text-[20px] font-semibold text-[#171717] ">
                  В социальной сети
                </h3>
                <p className="text-[16px] font-light text-[#171717]">
                  В редких случаях консультация с психологом проходит с помощью
                  мессенджеров от Vk, Facebook и Instagram. Более того, многие
                  стесняются оставлять публичный отзыв о психотерапии. А мы не
                  настаиваем.
                </p>
              </div>
            </div>

            <div className="flex  gap-x-[16px]">
              <img
                src="./images/Web.svg"
                alt="Web"
                className="w-[100px] h-[100px]"
              />
              <div className="flex flex-col gap-y-[14px] max-w-[600px]">
                <h3 className="text-[20px] font-semibold text-[#171717] ">
                  Через форму обратной связи на сайте
                </h3>
                <p className="text-[16px] font-light text-[#171717]">
                  Для объективности отзывов мы оставили форму обратной связи на
                  странице каждого психолога
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className="max-w-[560px] p-3 flex flex-col justify-center gap-y-[40px]">
            <h2 className="text-[25px] md:text-[42px] font-semibold text-[#171717] text-center">
              Фотографии отзывов
            </h2>
            <p className="text-[24px] font-light text-[#171717] text-center px-2">
              Примеры скриншотов, которые мы получаем от психологов. Только
              затем мы публикуем сам отзыв
            </p>
          </div>
          <img
            src="./images/feedback1-1.png"
            alt="Отзывы"
            className="w-[70%] md:w-1/4"
          />
        </div>
      </section>
      <section className="w-full">
        <div className="maw-w-[1200px] flex flex-col md:flex-row">
          <div
            className="w-auto md:w-1/2 bg-[#6096d0] p-[20px] lg:p-[40px] flex flex-col gap-y-[14px] cursor-pointer"
            onClick={() => navigate("/howitworks")}
          >
            <p className="uppercase text-[#f0f0f0] text-[12px] tracking-[2.5px] font-semibold">
              Читать
            </p>
            <h3 className="text-[22px] text-white font-semibold">
              Как это работает
            </h3>
            <p className="text-[16px] text-white font-light">
              Как оставить заявку на консультацию психолога онлайн, согласование
              и подтверждение сессии
            </p>
          </div>

          <div
            className="w-auto md:w-1/2 bg-green-pon p-[20px] lg:p-[40px] flex flex-col items-end gap-y-[14px] cursor-pointer"
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

export default Otzyvy;
