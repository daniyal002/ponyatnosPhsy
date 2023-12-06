import React from 'react';
import Warning from './Warning';

const Payment = () => {
  return (
    <div className="w-full">
      <section className="w-full bg-[#f0f0f0]">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className=" p-3 flex flex-col justify-center gap-y-[40px]">
            <h2 className="text-[25px] md:text-[42px] font-semibold text-[#171717] text-center">
              Оплата
            </h2>
            <p className="max-w-[500px] text-[24px] font-light text-[#171717] text-center px-2">
              Преимущества записи и оплаты сессии на нашем сайте:
            </p>
          </div>

          <div className="flex flex-wrap w-full gap-14 justify-center ">
            <div className="flex gap-x-1 xs:gap-x-5 w-full lg:w-1/2 max-w-[560px] justify-end items-start  p-3 md:p-1">
              <img
                src="./images/payment_1.svg"
                alt="Опыт"
                className="w-[80px]"
              />
              <div className="flex flex-col gap-y-[8px]">
                <h3 className="text-[20px] md:text-[24px] text-[#171717] font-semibold">
                  Гарантия возврата
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#171717] font-light max-w-[380px] ">
                  Гарантия возврата оплаты в случае отмены сессии (не менее чем
                  за 24 часа до назначенной сессии).
                </p>
              </div>
            </div>

            <div className="flex gap-x-1 xs:gap-x-5 w-full lg:w-1/2 max-w-[560px]  items-start  p-3 md:p-1">
              <img
                src="./images/payment_2.svg"
                alt="Комфорт"
                className="w-[80px]"
              />
              <div className="flex flex-col gap-y-[8px]">
                <h3 className="text-[20px] md:text-[24px] text-[#171717] font-semibold">
                  Конфиденциальность
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#171717] font-light max-w-[340px] ">
                  Психолог несёт ответственность за соблюдение полной
                  конфиденциальности в работе с клиентом.
                </p>
              </div>
            </div>

            <div className="flex gap-x-1 xs:gap-x-5 w-full lg:w-1/2 max-w-[560px] justify-end items-start  p-3 md:p-1">
              <img
                src="./images/payment_3.png"
                alt="Анонимность"
                className="w-[80px]"
              />
              <div className="flex flex-col gap-y-[8px]">
                <h3 className="text-[20px] md:text-[24px] text-[#171717] font-semibold">
                  Напоминание
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#171717] font-light max-w-[380px] ">
                  Заблаговременное напомним о дате, времени и других деталях
                  предстоящей сессии.
                </p>
              </div>
            </div>

            <div className="flex gap-x-1 xs:gap-x-5 w-full lg:w-1/2 max-w-[560px]  items-start  p-3 md:p-1">
              <img
                src="./images/payment_4.svg"
                alt="Доступность"
                className="w-[80px]"
              />
              <div className="flex flex-col gap-y-[8px]">
                <h3 className="text-[20px] md:text-[24px] text-[#171717] font-semibold">
                  Доверие психолога
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#171717] font-light max-w-[380px] ">
                  Ответственные психологи больше доверят клиентам, оплачивающим
                  сессию через онлайн-запись, так как мы выступаем для него
                  гарантом оплаты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#5f84ce]">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] ">
          <div className="max-w-[560px] p-3 flex flex-col justify-center gap-y-[40px] items-center">
            <img src="./images/ik6.svg" alt="" className="w-[263px]" />
            <h2 className="text-[25px] md:text-[36px] font-semibold text-white text-center">
              Нужна помощь в выборе детского психолога?
            </h2>
            <p className="text-[18px] font-light text-white   text-center px-2">
              Опишите цель поиска специалиста <br /> и мы поможем подобрать
              психолога из нашей команды, готового эффективно оказать
              психологическую помощь онлайн
            </p>
          </div>
          <button
            type="submit"
            onClick={() => navigate('/quiz')}
            className="md:w-[16%] bg-green-pon p-[5px_58px] rounded-lg h-[50px] text-[17px] text-white  font-bold shadow-[0px_0px_10px_0px] shadow-[#00000030] mt-[60px]"
          >
            Подобрать психолога
          </button>
        </div>
      </section>
      <Warning/>
    </div>
  );
};

export default Payment;
