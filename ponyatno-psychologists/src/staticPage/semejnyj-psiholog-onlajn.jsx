import React from 'react';
import { useNavigate } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import Warning from './Warning';

const Semejnyjpsihologonlajn = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full">
      <section className="bg-[url('/images/bgs.jpeg')] w-full bg-center bg-cover bg-no-repeat bg-fixed bg-[#575656] bg-blend-multiply ">
        <div className="max-w-[1200px]  h-max lg:h-screen  mx-auto  flex items-center">
          <div className="max-w-[760px]  flex flex-col justify-center px-3 items-start gap-y-[30px]">
            <div className="flex flex-col gap-y-[15px] ">
              <h1 className="text-[30px] md:text-[52px] text-white font-bold mt-[100px] lg:mt-[0px]">
                Семейный психолог онлайн
              </h1>
              <p className="text-[18px] md:text-[22px] text-white ">
                Большая часть браков в России заканчивается разводами. Причины
                этого в непонимании психологии друг друга и неумении вместе
                решать возникающие в семье кризисы отношений. Не всегда супруги
                действительно хотят разводиться, но выход из таких ситуаций
                может подсказать лишь квалифицированный семейный психолог, если
                вовремя к нему обратиться. <br /> <br /> Выберите удобный формат
                для консультации семейного психолога онлайн, а мы поможем
                подобрать нужного специалиста из нашей команды
              </p>
            </div>

            <button
              className="bg-green-pon p-[0_68px] rounded-lg h-[60px] text-[17px] text-white uppercase font-semibold  mb-[100px] lg:mb-[0px]"
              onClick={() => navigate('/quiz')}
            >
              НАЧАТЬ
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className="max-w-[560px] p-3 flex flex-col justify-center gap-y-[40px]">
            <h2 className="text-[25px] md:text-[42px] font-semibold text-[#171717] text-center">
              Почему выбирают нас?
            </h2>
            <p className="text-[24px] font-light text-[#171717] text-center px-2">
              Каждый день мы помогаем людям улучшить качество своей жизни
            </p>
          </div>

          <div className="flex flex-wrap w-full gap-14 justify-center ">
            <div className="flex gap-x-5 w-full lg:w-1/2 max-w-[560px]  items-start justify-between p-3 md:p-1">
              <div className="flex flex-col gap-y-[25px]">
                <h3 className="text-[20px] md:text-[24px] text-[#171717] font-semibold">
                  Большой опыт
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#171717] font-light max-w-[380px] ">
                  Сертифицированные гештальт психологи с высшим профильным
                  образованием, опытом частной практики и специализацией, тысячи
                  успешных кейсов
                </p>
              </div>
              <img
                src="./images/ic-main-why-opit-1.svg"
                alt="Опыт"
                className="w-[100px] h-[100px]"
              />
            </div>

            <div className="flex gap-x-5 w-full lg:w-1/2 max-w-[560px]  items-start justify-between p-3 md:p-1">
              <div className="flex flex-col gap-y-[25px]">
                <h3 className="text-[20px] md:text-[24px] text-[#171717] font-semibold">
                  Комфорт
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#171717] font-light max-w-[340px] ">
                  Контакт с психологом там, где вам максимально удобно и
                  спокойно
                </p>
              </div>
              <img
                src="./images/ic-main-why-komfort.svg"
                alt="Комфорт"
                className="w-[100px] h-[100px]"
              />
            </div>

            <div className="flex gap-x-5 w-full lg:w-1/2 max-w-[560px]  items-start justify-between p-3 md:p-1">
              <div className="flex flex-col gap-y-[25px]">
                <h3 className="text-[20px] md:text-[24px] text-[#171717] font-semibold">
                  Анонимность
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#171717] font-light max-w-[380px] ">
                  Мы сохраняем анонимность персональных данных клиентов. Вся
                  информация из заполненных вами анкет отправляется
                  непосредственно психологу
                </p>
              </div>
              <img
                src="./images/ic-main-why-anonim.svg"
                alt="Анонимность"
                className="w-[100px] h-[100px]"
              />
            </div>

            <div className="flex gap-x-5 w-full lg:w-1/2 max-w-[560px]  items-start justify-between p-3 md:p-1">
              <div className="flex flex-col gap-y-[25px]">
                <h3 className="text-[20px] md:text-[24px] text-[#171717] font-semibold">
                  Доступность
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#171717] font-light max-w-[380px] ">
                  Для онлайн контакта с детским психологом достаточно иметь
                  смартфон, планшет или компьютер с одной из популярных программ
                  для аудио или видео связи
                </p>
              </div>
              <img
                src="./images/ic-main-why-dostup.svg"
                alt="Доступность"
                className="w-[100px] h-[100px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f0f0f0]">
        <div className="max-w-[940px] py-[48px] xs:py-[100px] px-[16px] xs:px-[37px] mx-auto flex flex-col items-center">
          <h2 className="text-[30px] xs:text-[42px] font-semibold text-center mb-[12px] xs:mb-[92px]">
            Профессиональные, сертифицированные <br /> и проверенные психологи
          </h2>
          <img
            src="./images/psychologists.png"
            alt="Психологи"
            className="w-[690px]"
          />
          <p className="text-[16px] xs:text-[20px] text-[#171717] font-light text-center mt-[16px] xs:mt-[28px] max-w-[780px]">
            Бесплатно и анонимно поможем подобрать психолога или терапевта,
            которому можно доверять. Мы постоянно улучшаем нашу систему подбора
            психолога, чтобы максимально упростить вам поиск подходящего
            специалиста
          </p>
          <button
            type="submit"
            onClick={() => navigate('/quiz')}
            className="md:w-[16%] bg-white p-[5px_58px] rounded-lg h-[50px] text-[17px] text-green-pon  font-bold shadow-[0px_0px_10px_0px] shadow-[#00000030] mt-[85px]"
          >
            ВСЕ ПСИХОЛОГИ
          </button>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className="max-w-[560px] p-3 flex flex-col justify-center gap-y-[40px]">
            <h2 className="text-[25px] md:text-[42px] font-semibold text-[#171717] text-center">
              Отзывы
            </h2>
            <p className="text-[24px] font-light text-[#171717] text-center px-2">
              Самые достоверные отзывы это те, которые психолог получает в
              личном сообщении после окончания сессии или терапии. Именно такие
              мы затем публикуем (с согласия автора). <br />{' '}
              <span className="text-green-pon">Подробнее об отзывах</span>
            </p>
          </div>
          <img
            src="./images/feedback1-1.png"
            alt="Отзывы"
            className="w-[70%] md:w-1/4"
          />
        </div>
      </section>

      <section className="w-full bg-[#f0f0f0]">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[75px]">
          <div className="max-w-[560px] p-3 flex flex-col justify-center gap-y-[40px] items-center">
            <h2 className="text-[30px] md:text-[42px] font-semibold text-[#171717] text-center">
              Семейный психолог онлайн
            </h2>
          </div>
          <div className="flex gap-16 p-3 flex-col lg:flex-row">
            <div className="flex flex-col w-full lg:w-1/2 items-start">
              <p className="text-[18px] text-[#171717] font-light">
                Выберите удобный для себя способ онлайн-консультации с
                психологом: онлайн-сессия, онлайн-сессия (только звук) или чат.
                Вам не нужно устанавливать новые программы или регистрироваться
                на сервисе, вам достаточно иметь хотя бы один из популярных
                сервисов обмена данными таких как: WhatsApp, Telegram, Skype и
                другие.
              </p>
              <button
                type="submit"
                onClick={() => navigate('/quiz')}
                className=" bg-[#20c497] p-[5px_58px] rounded-lg h-[50px] text-[17px] text-white  font-bold shadow-[0px_0px_10px_0px] shadow-[#00000030] mt-[60px] "
              >
                Подобрать психолога
              </button>
            </div>
            <img
              src="./images/detskiy-psikholog-on.jpg"
              alt=""
              className="w-full lg:w-1/2"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[940px] py-[48px] xs:py-[100px] px-[16px] xs:px-[37px] mx-auto flex flex-col items-center">
          <h2 className="text-[21px] xs:text-[28px] font-semibold text-center mb-[12px] xs:mb-[24px]">
            Часто задаваемые вопросы
          </h2>
          <FaqAccordion />
        </div>
      </section>

      <Warning />
    </div>
  );
};

export default Semejnyjpsihologonlajn;
