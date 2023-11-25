import React from "react";

const TableForB = () => {
  const tableDataHeader = [
    " ",
    "Корпоративный психолог",
    "Сервисы онлайн-терапии",
    "Понятно.Бизнес",
  ];
  const tableDataBody = [
    {
      tb1: "Независимая экспертиза на образование и опыт",
      tb2: "./images/circle1.svg",
      tb3: "./images/circle1.svg",
      tb4: "./images/circle2.svg",
    },
    {
      tb1: "Максимальный широкий спектр специализаций",
      tb2: "./images/circle1.svg",
      tb3: "./images/circle1.svg",
      tb4: "./images/circle2.svg",
    },
    {
      tb1: "Конфиденциальность и этика, отсутствие контакта вне сессии",
      tb2: "./images/circle1.svg",
      tb3: "./images/circle1.svg",
      tb4: "./images/circle2.svg",
    },
    {
      tb1: "Своя комманда психологов, подобранная под запрос компании и сотрудников",
      tb2: "./images/circle2.svg",
      tb3: "./images/circle1.svg",
      tb4: "./images/circle2.svg",
    },
    {
      tb1: "Персонализация — свой сайт, брендирование, фирменный цвет.",
      tb2: "./images/circle1.svg",
      tb3: "./images/circle1.svg",
      tb4: "./images/circle2.svg",
    },
    {
      tb1: "Отчётность в режиме реального времени, настройка доступа к статистике и данным.",
      tb2: "./images/circle1.svg",
      tb3: "./images/circle1.svg",
      tb4: "./images/circle2.svg",
    },
    {
      tb1: "Свободное ценообразование, без промокодов, без привязки карт, вы сами задаёте видимость цены для сотрудников.",
      tb2: "./images/circle1.svg",
      tb3: "./images/circle1.svg",
      tb4: "./images/circle2.svg",
    },
  ];

  return (
    <div className="overflow-x-auto w-[80%] p-6  rounded-lg bg-white">
      <table className="min-w-full table-auto  bg-white">
        <thead>
          <tr>
            {tableDataHeader.map((header, index) => (
              <th
                key={index}
                className="text-[16px] lg:text-[18px] xs:text-[20px] text-center p-[0px_20px_22px] min-w-[170px] text-[#171717] font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableDataBody.map((body, rowIndex) => (
            <tr key={rowIndex} className=" border-[#eee]">
              <td className="max-w-[260px] text-[12px] lg:text-[14px] xs:text-[16px] border-t-[1px] border-r-[1px] border-[#eee] p-[22px_20px_22px_0]">
                {body.tb1}
              </td>
              <td className="border-t-[1px] border-r-[1px] border-[#eee] p-[22px_20px_22px_0]">
                <div className="flex justify-center items-center">
                  <img src={body.tb2} alt="" />
                </div>
              </td>
              <td className="border-t-[1px] border-r-[1px] border-[#eee]  p-[22px_20px_22px_0]">
                <div className="flex justify-center items-center">
                  <img src={body.tb3} alt="" />
                </div>
              </td>
              <td className="border-t-2 border-[#eee] p-[22px_20px_22px_0]">
                <div className="flex justify-center items-center">
                  <img src={body.tb4} alt="" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableForB;
