import React from 'react';
import Warning from './Warning';
import { useNavigate } from 'react-router-dom';

const Vacancy = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <section className="w-full bg-[#f0f0f0]">
        <div className="max-w-[1200px]  mx-auto  flex flex-col items-center justify-center pt-[105px] pb-[105px] gap-y-[105px]">
          <div className="max-w-[760px] p-3 flex flex-col justify-center gap-y-[20px]">
            <h2 className="text-[30px] md:text-[42px] text-[#171717] text-center font-semibold">
              Вакансии
            </h2>
            <p className="text-[20px] md:text-[24px] text-[#171717] font-light text-center">
              В активном поиске людей в команду:
            </p>
          </div>

          <div>
            <div className="bg-white max-w-[360px] p-[30px] flex flex-col justify-between min-h-[245px] shadow-[0_0_10px_0] shadow-[#00000028] rounded-[5px]">
              <div className="flex flex-col gap-y-[10px]">
                <h3 className="text-[22px] text-[#171717] font-semibold">
                  Психологи
                </h3>
                <p className="text-[18px] text-[#171717] font-light">
                  Мы всегда в поиске психологов в команду!
                </p>
              </div>

              <button
                className="text-green-pon text-[20px] text-left"
                onClick={() => navigate('/')}
              >
                Подробнее →
              </button>
            </div>
          </div>
        </div>
      </section>
      <Warning />
    </div>
  );
};

export default Vacancy;
