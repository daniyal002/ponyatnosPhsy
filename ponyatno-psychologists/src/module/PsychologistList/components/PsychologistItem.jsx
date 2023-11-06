import React, { useState } from 'react';
import Calendar from '../../ProfilePsychologist/components/Calendar/Calendar';

const PsychologistItem = () => {
  const [more, setMore] = useState(false);

  return (
    <div className="flex max-w-[996px] mx-auto bg-red-50 justify-around rounded-lg p-3">
      <div className="flex flex-col gap-y-5 items-center">
        <div>
          <img
            src="https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava1.jpg"
            alt="Profile Photo"
            className="w-[200px] rounded-3xl"
          />
        </div>

        <div>
          <Calendar />
        </div>
      </div>

      <div className="w-[400px]">
        <div className="flex flex-col gap-y-4">
          <div>
            <p className="text-3xl font-semibold">Фамилиия Имя</p>
          </div>
          <div className="flex flex-col gap-y-2 max-w-[600px]">
            <h6 className="text-[26px]">О психологе</h6>
            <div className="flex gap-x-8 justify-start">
              <p className=" text-[18px] font-bold text-green-pon">
                5 лет опыта
              </p>
              <p className=" text-[18px] font-bold text-green-pon">
                Диплом психолога
              </p>
              <p className=" text-[18px] font-bold text-green-pon">
                3 профильных курса
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 max-w-[600px] my-6">
            <h6 className="text-[26px]">Психологический подход</h6>
            <div className="flex gap-x-8 justify-start">
              <p className="bg-green-pon text-white font-semibold p-2 rounded-lg text-[18px]">
                Гештальт
              </p>
              <p className="bg-green-pon text-white font-semibold p-2 rounded-lg text-[18px]">
                Гештальт
              </p>
              <p className="bg-green-pon text-white font-semibold p-2 rounded-lg text-[18px]">
                Гештальт
              </p>
            </div>
          </div>
          {!more && (
            <div className="flex justify-center">
              <button
                className="btn-default w-[30%] text-xs p-2 font-semibold"
                onClick={() => setMore(true)}
              >
                Развернуть профиль
              </button>
            </div>
          )}
        </div>

        {more && (
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-3">
              <h6 className="text-[26px]">О себе</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                esse ullam molestiae at ea repellendus amet nihil voluptatem
                debitis error mollitia, corrupti facere alias aliquam dolores
                quis maiores! Optio, iste!
              </p>
            </div>

            <div className="flex flex-col gap-y-3">
              <h6 className="text-[26px]">Что даст сеанс</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae, assumenda. Aspernatur, sequi iusto repellendus non
                possimus blanditiis voluptatem laudantium sapiente libero magni!
                Nobis nostrum deserunt quod sint itaque provident. Eveniet.
              </p>
            </div>

            <div className="flex flex-col gap-y-3">
              <h6 className="text-[26px]">Образование</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quidem eum esse commodi facere totam veritatis
                reprehenderit placeat consequatur repudiandae at nemo laborum
                tempore temporibus, fugit mollitia, distinctio corporis. Eos.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="btn-default w-[30%] text-xs p-2 font-semibold"
                onClick={() => setMore(false)}
              >
                Свернуть профиль
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PsychologistItem;
