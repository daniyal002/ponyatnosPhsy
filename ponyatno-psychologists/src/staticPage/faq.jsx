import React from 'react';
import FaqAccordion from '../components/FaqAccordion';
import { useNavigate } from 'react-router-dom';
import Warning from './Warning';

const Faq = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <section className="w-full bg-white">
        <div className="max-w-[1200px] py-[48px] xs:py-[100px] px-[16px] xs:px-[37px] mx-auto flex flex-col items-center">
          <h2 className="text-[30px] md:text-[42px] font-semibold text-center mb-[20px] xs:mb-[40px]">
            Часто задаваемые вопросы
          </h2>
          <FaqAccordion />
        </div>
      </section>
      <section className="w-full">
        <div className="maw-w-[1200px] flex flex-col md:flex-row">
          <div
            className="w-auto md:w-1/2 bg-[#6096d0] p-[20px] lg:p-[40px] flex flex-col gap-y-[14px]  cursor-pointer"
            onClick={() => navigate('/howitworks')}
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
            className="w-auto md:w-1/2 bg-green-pon p-[20px] lg:p-[40px] flex flex-col items-end gap-y-[14px]  cursor-pointer"
            onClick={() => navigate('/otzyvy')}
          >
            <p className="uppercase text-[#f0f0f0] text-[12px] tracking-[2.5px] font-semibold">
              Читать
            </p>
            <h3 className="text-[22px] text-white font-semibold">Отзывы</h3>
            <p className="text-[16px] text-white font-light text-right">
              Отзывы о консультации психолога онлайн
            </p>
          </div>
        </div>
      </section>

      <Warning />
    </div>
  );
};

export default Faq;
