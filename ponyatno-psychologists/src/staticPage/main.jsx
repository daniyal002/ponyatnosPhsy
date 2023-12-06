import React from 'react';
import { useNavigate } from 'react-router-dom';
import SliderStartUSP from '../components/SliderStartUSP';
import SliderStartCases from '../components/SliderStartCases';
import FaqAccordion from '../components/FaqAccordion';
import Warning from './Warning';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <section className="bg-[url('/images/bg.webp')] w-full h-screen bg-center bg-cover bg-no-repeat bg-fixed">
        <div className="max-w-[940px] h-screen mx-auto  flex items-center">
          <div className="max-w-[560px]  flex flex-col justify-center px-3 items-start gap-y-[30px]  ">
            <div className="flex flex-col gap-y-[15px]">
              <h1 className="text-[40px] text-white font-semibold">
                Психолог онлайн и очно
              </h1>
              <p className="text-[23px] text-white ">
                Выберите удобный формат для консультация психолога онлайн или
                очно, а мы поможем подобрать нужного специалиста
              </p>
            </div>

            <button
              className="bg-green-pon p-[0_68px] rounded-lg h-[50px] text-[17px] text-white uppercase font-semibold"
              onClick={() => navigate('/quiz')}
            >
              Начать
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[940px]  mx-auto flex flex-col items-center">
          <div className="py-[48px] xs:py-[100px] px-[16px] xs:px-[37px] usp">
            <h2 className="text-[25px] xs:text-[28px] font-semibold text-center mb-[92px]">
              Почему выбирают нас?
            </h2>
            <SliderStartUSP />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#e9ece6]">
        <div className="max-w-[940px] py-[48px] xs:py-[100px] px-[16px] xs:px-[37px] mx-auto flex flex-col items-center">
          <h2 className="text-[21px] xs:text-[28px] font-semibold text-center mb-[12px] xs:mb-[92px]">
            Профессиональные, сертифицированные <br /> и проверенные психологи
          </h2>
          <img src="./images/psychologists.png" alt="Психологи" />
          <p className="text-[14px] xs:text-[16px] text-[#171717] text-center mt-[16px] xs:mt-[28px] max-w-[780px]">
            Бесплатно и анонимно поможем подобрать психолога или терапевта,
            которому можно доверять. Мы постоянно улучшаем нашу систему подбора
            психолога, чтобы максимально упростить вам поиск подходящего
            специалиста
          </p>
          <button
            className="bg-green-pon p-[0_52px] xs:p-[0_68px] rounded-lg h-[50px] xs:text-[17px] text-white  font-semibold mt-[16px] xs:mt-[44px]"
            onClick={() => navigate('/allpsychologist')}
          >
            Подобрать психолога
          </button>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[940px] py-[48px] xs:py-[100px] px-[16px] xs:px-[37px] mx-auto flex flex-col items-center">
          <h2 className="text-[21px] xs:text-[28px] font-semibold text-center mb-[12px] xs:mb-[24px]">
            Как мы можем вам помочь
          </h2>
          <h3 className="text-[14px] xs:text-[19px]  text-center mb-[12px] xs:mb-[92px] font-normal">
            Консультация психолога может проходить <br /> в разных форматах:
          </h3>
          <div className="flex gap-x-5 gap-y-5 justify-center items-center flex-wrap xl:flex-nowrap">
            <div className="flex flex-col items-start max-w-[304px] gap-y-[28px] p-8 shadow-[0_0_10px_0] shadow-[#dfe2db] rounded-lg">
              <img
                src="./images/ic-online.svg"
                alt="Онлайн-сессия"
                width="132"
                height="132"
              />
              <h4 className="text-[23px] font-semibold">Онлайн-сессия</h4>
              <p className="max-w-[240px] text-[16px] text-[#171717]">
                Онлайн-сессия с психологом без поездки в офис и в знакомой и
                комфортной для вас обстановке
              </p>
              <button className="text-[17px] text-green-pon font-semibold">
                Подробнее →
              </button>
            </div>

            <div className="flex flex-col items-start max-w-[304px] gap-y-[28px] p-8 shadow-[0_0_10px_0] shadow-[#dfe2db] rounded-lg">
              <img
                src="./images/ic-chat.svg"
                alt="Чат с психологом"
                width="132"
                height="132"
              />
              <h4 className="text-[23px] font-semibold">Чат с психологом</h4>
              <p className="max-w-[240px] text-[16px] text-[#171717]">
                Формат для тех, кто нуждается в поддержке психолога и кому проще
                начать общение через переписку
              </p>
              <button className="text-[17px] text-gray-400 font-semibold disabled">
                Подробнее →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#5f84ce]">
        <div className="max-w-[940px]  mx-auto flex flex-col items-center">
          <div className="cases py-[48px] xs:py-[100px] px-[16px] xs:px-[37px] flex flex-col items-center gap-y-[30px]">
            <SliderStartCases />
            <button
              className="bg-white p-[0_52px] xs:p-[0_68px] rounded-lg h-[50px] xs:text-[17px] text-green-pon  font-semibold mt-[16px] xs:mt-[44px] "
              onClick={() => navigate('/allpsychologist')}
            >
              Подобрать психолога
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[100px]">
        <div className="max-w-[940px]  mx-auto flex flex-col items-center gap-y-[44px] md:flex-row md:items-start bg-[#eef0eb] px-[40px] py-[48px]">
          <div className="flex flex-col items-stretch md:items-start w-full md:w-1/2 gap-y-[30px] px-[10px] md:px-[40px]">
            <img
              src="./images/ic-main-user-talk-1.png"
              alt="Самые достоверные отзывы"
              width="72"
              height="52"
            />
            <div>
              <h2 className="text-[21px] font-semibold">
                Самые достоверные отзывы
              </h2>
              <p className="max-w-full md:max-w-[350px]  text-[14px] md:text-[16px]">
                Самое важное для нас — поддерживать уровень профессионализма и
                надёжности команды психологов. Для этого мы регулярно собираем
                отзывы о работе каждого специалиста.
              </p>
            </div>
            <button
              className="bg-white p-[0_32px] xs:p-[0_42px] rounded-lg h-[50px] xs:text-[17px] text-green-pon  font-semibold mt-[16px] xs:mt-[44px] shadow-[0_0_4px_0] shadow-[#0003] "
              onClick={() => navigate('/otzyvy')}
            >
              Об отзывах
            </button>
          </div>
          <div className="w-full md:w-1/2 px-[40px]">
            <img
              src="./images/feedback1-1.png"
              alt="Отзывы"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[940px] py-[48px] xs:py-[100px] px-[16px] xs:px-[37px] mx-auto flex flex-col items-center">
          <h2 className="text-[21px] xs:text-[28px] font-semibold text-center mb-[12px] xs:mb-[24px]">
            Ответы на популярные вопросы
          </h2>
          <FaqAccordion />
        </div>
      </section>

      <Warning />
    </div>
  );
};

export default Main;
