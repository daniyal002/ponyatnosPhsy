import React from 'react';
import { useNavigate } from 'react-router-dom';
import Warning from './Warning';

const Psychologists = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <section className="w-full bg-[#f0f0f0]">
        <div className="max-w-[1200px]  mx-auto  flex justify-center items-center pt-[105px] pb-[105px]">
          <div className="max-w-[960px]  flex flex-col justify-center mx-3  items-center gap-y-[24px]  ">
            <h1 className="text-[30px] md:text-[64px] md:leading-[80px] font-semibold text-[#171717] text-center p ">
              Помогаем психологам и&nbsp;командам в&nbsp;организации частной
              практики
            </h1>
            <h4 className="text-[14px] md:text-[16px] text-[#111111]">
              Поможем создать сайт, автоматизировать запись и базу клиентов:
            </h4>
            <form className="w-full items-stretch flex flex-col  gap-x-5 gap-y-5 md:flex-row md:items-start">
              <input
                type="email"
                className="bg-white px-5  h-[58px]  outline-none  md:w-[40%]"
                placeholder="E-mail"
              />
              <input
                type="text"
                className="bg-white px-5  h-[58px]  outline-none   md:w-[40%]"
                placeholder="Имя"
              />
              <button
                type="submit"
                className="md:w-[18%] bg-green-pon p-[5px_68px]  h-[50px] text-[17px] text-white  font-semibold shadow-[0px_0px_10px_0px] shadow-[#00000030]"
              >
                Отправить
              </button>
            </form>
            <p className="text-[14px] font-light">
              Нажимая на кнопку вы подтверждаете, что согласны с{' '}
              <span
                className="text-green-pon cursor-pointer"
                onClick={() => navigate('/')}
              >
                Политикой конфиденциальности
              </span>
              и
              <span
                className="text-green-pon cursor-pointer"
                onClick={() => navigate('/')}
              >
                Пользовательским соглашением
              </span>
            </p>
          </div>
        </div>
      </section>
      <Warning />
    </div>
  );
};

export default Psychologists;
