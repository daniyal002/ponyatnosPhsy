import React, { useState } from "react";
import OpenTimePicker from "./OpenTimePicke/OpenTimePicker";
import DayOfWeek from "./DayOfWeek/DayOfWeek";

const BookingSetings = () => {
  const [isPickerOpen, setIsPickerOpen] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  return (
    <div className="bg-white  ">
      <OpenTimePicker
        isPickerOpen={isPickerOpen}
        dayOfWeek={dayOfWeek}
        setIsPickerOpen={setIsPickerOpen}
      />
      <div className="bg-[#004E64] w-full">
        <h1 className="text-white text-[32px] font-semibold  text-center pb-4 ">
          Настройка рабочего времени по дням недели
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center flex-wrap items-center sm:items-start  gap-y-5 gap-x-5">
        <DayOfWeek
          nameOfDay="Понедельник"
          number={1}
          setDayOfWeek={setDayOfWeek}
          setIsPickerOpen={setIsPickerOpen}
        />

        <DayOfWeek
          nameOfDay="Вторник"
          number={2}
          setDayOfWeek={setDayOfWeek}
          setIsPickerOpen={setIsPickerOpen}
        />
        <DayOfWeek
          nameOfDay="Среда"
          number={3}
          setDayOfWeek={setDayOfWeek}
          setIsPickerOpen={setIsPickerOpen}
        />
        <DayOfWeek
          nameOfDay="Четверг"
          number={4}
          setDayOfWeek={setDayOfWeek}
          setIsPickerOpen={setIsPickerOpen}
        />
        <DayOfWeek
          nameOfDay="Пятница"
          number={5}
          setDayOfWeek={setDayOfWeek}
          setIsPickerOpen={setIsPickerOpen}
        />
        <DayOfWeek
          nameOfDay="Суббота"
          number={6}
          setDayOfWeek={setDayOfWeek}
          setIsPickerOpen={setIsPickerOpen}
        />
        <DayOfWeek
          nameOfDay="Воскресенье"
          number={7}
          setDayOfWeek={setDayOfWeek}
          setIsPickerOpen={setIsPickerOpen}
        />
      </div>
    </div>
  );
};

export default BookingSetings;
