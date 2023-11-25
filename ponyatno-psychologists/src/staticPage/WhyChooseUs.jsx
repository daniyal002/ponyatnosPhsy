import React, { useEffect, useState } from "react";

const WhyChooseUs = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row p-3 gap-y-5 items-center justify-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-y-2 items-center justify-center">
        <div
          className={
            !open1
              ? "flex flex-col w-[80%] xs:w-full max-w-[380px] border-[1px]  rounded-lg cursor-pointer  p-[12px_23px_12px_15px] lg:p-[25px_47px_25px_30px]"
              : "flex flex-col w-[80%] xs:w-full max-w-[380px] border-[1px] border-[#fff399] rounded-lg cursor-pointer p-[12px_23px_12px_15px] lg:p-[25px_47px_25px_30px]"
          }
          onClick={() => {
            setOpen1(true);
            setOpen2(false);
            setOpen3(false);
          }}
        >
          <h4 className="text-[20px] lg:text-[24px] text-[#171717] font-semibold">
            Любая модель компенсации
          </h4>
          <p className="text-[12px] lg:text-[14px] text-[#171717] font-light">
            Оплата 100% или 50%, фиксированная компенсация в 1000 руб. или
            ограниченное количество сессий — вы сами задаёте удобные вам условия
            сотрудничества.
          </p>
        </div>

        <div
          className={
            !open2
              ? "flex flex-col w-[80%] xs:w-full max-w-[380px] border-[1px]  rounded-lg cursor-pointer p-[12px_23px_12px_15px] lg:p-[25px_47px_25px_30px]"
              : "flex flex-col w-[80%] xs:w-full max-w-[380px] border-[1px] border-[#fff399] rounded-lg cursor-pointer p-[12px_23px_12px_15px] lg:p-[25px_47px_25px_30px]"
          }
          onClick={() => {
            setOpen1(false);
            setOpen2(true);
            setOpen3(false);
          }}
        >
          <h4 className="text-[20px] lg:text-[24px] text-[#171717] font-semibold cursor-pointer">
            Оплата только за результат
          </h4>
          <p className="text-[12px] lg:text-[14px] text-[#171717] font-light">
            Вы не платите абонентской платы, оплата только по факту выполненной
            работы.
          </p>
        </div>

        <div
          className={
            !open3
              ? "flex flex-col w-[80%] xs:w-full max-w-[380px] border-[1px]  rounded-lg cursor-pointer p-[12px_23px_12px_15px] lg:p-[25px_47px_25px_30px]"
              : "flex flex-col w-[80%] xs:w-full max-w-[380px] border-[1px] border-[#fff399] rounded-lg cursor-pointer p-[12px_23px_12px_15px] lg:p-[25px_47px_25px_30px]"
          }
          onClick={() => {
            setOpen1(false);
            setOpen2(false);
            setOpen3(true);
          }}
        >
          <h4 className="text-[20px] lg:text-[24px] text-[#171717] font-semibold">
            Прозрачная отчётность
          </h4>
          <p className="text-[12px] lg:text-[14px] text-[#171717] font-light">
            <strong>В режиме реального времени</strong> и из вашего личного
            кабинета.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        {open1 && <img src="./images/open_1.png" alt="" width="660" />}
        {open2 && <img src="./images/open_2.png" alt="" width="660" />}
        {open3 && <img src="./images/open_3.png" alt="" width="660" />}
      </div>
    </div>
  );
};

export default WhyChooseUs;
