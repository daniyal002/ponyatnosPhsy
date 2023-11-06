import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { addDays } from 'date-fns';
import { useGetAvailability } from '../../hook/useGetAvailability';

registerLocale('ru', ru);

const Calendar = () => {
  const { data } = useGetAvailability();

  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const isWeekend = (date) => {
    const day = date.getDay();
    const dayOfWeek = data && data.map((day) => day.dayOfWeek);
    return dayOfWeek && !dayOfWeek.includes(day);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setStartTime(null); // Сбрасываем время при изменении даты
    setEndTime(null); // Сбрасываем время при изменении даты
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
    // Автоматически устанавливаем endTime на 1 час после startTime
    const newEndTime = new Date(time);
    newEndTime.setHours(time.getHours() + 1);
    setEndTime(newEndTime);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const filterPassedTime = (time) => {
    if (!selectedDate || !data) return false; // Проверяем, что selectedDate и data определены

    const currentDate = new Date();
    const selectedDateWithoutTime = new Date(selectedDate);
    selectedDateWithoutTime.setHours(time.getHours(), time.getMinutes());

    const day = selectedDateWithoutTime.getDay();
    const hours = selectedDateWithoutTime.getHours();

    // Проверяем, что текущий день входит в dayOfWeek из данных доступности
    const dayOfWeek = data.map((day) => day.dayOfWeek);
    const isWorkingDay = dayOfWeek.includes(day);

    // Устанавливаем рабочее время для понедельника (или другого дня) здесь
    const workingHoursByDay = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    };

    data.forEach((item) => {
      if (item.dayOfWeek in workingHoursByDay) {
        workingHoursByDay[item.dayOfWeek].push({
          startTime: parseInt(item.startTime.split(':')[0]),
          endTime: parseInt(item.endTime.split(':')[0]),
        });
      }
    });

    console.log(workingHoursByDay);
    if (data) {
      const workingHours = workingHoursByDay[day];

      return (
        dayOfWeek.includes(day) &&
        workingHours.some((interval) => {
          return hours >= interval.startTime && hours < interval.endTime;
        }) &&
        selectedDateWithoutTime >= currentDate
      );
    }

    return (
      isWorkingHours &&
      !isWeekend(selectedDate) &&
      selectedDateWithoutTime >= currentDate
    );
  };

  return (
    <div className="flex flex-col gap-y-5 items-center">
      <h2>Выберите подходящий день для бронирования:</h2>

      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          filterTime={filterPassedTime}
          locale="ru"
          shouldCloseOnSelect={false}
          calendarStartDay={1}
          placeholderText="Выберите дату"
          excludeDates={[
            ...Array.from({ length: 31 }, (_, i) => {
              const currentDate = new Date();
              currentDate.setDate(currentDate.getDate() + i);
              return currentDate;
            }).filter(isWeekend),
          ]}
          minDate={new Date()}
          maxDate={addDays(new Date(), 31)}
          className="p-3 rounded-lg bg-green-pon placeholder:text-white outline-none text-white text-center"
        />
      </div>
      <div className="flex flex-col gap-y-5 items-center">
        <h2>Выберите подходящее время для бронирования:</h2>
        <div className="flex flex-row">
          <DatePicker
            selected={startTime}
            onChange={handleStartTimeChange}
            filterTime={filterPassedTime}
            showTimeSelect
            showTimeSelectOnly
            dateFormat="HH:mm"
            locale="ru"
            timeCaption="Начало"
            shouldCloseOnSelect={false}
            calendarStartDay={1}
            placeholderText="Начало"
            className="p-1 rounded-lg bg-green-pon placeholder:text-white outline-none text-white text-center "
          />
          -
          <DatePicker
            selected={endTime}
            onChange={handleEndTimeChange}
            showTimeSelect
            showTimeSelectOnly
            dateFormat="HH:mm"
            locale="ru"
            timeCaption="Конец"
            shouldCloseOnSelect={false}
            calendarStartDay={1}
            placeholderText="Конец"
            disabled
            className="p-1 rounded-lg bg-green-pon placeholder:text-white outline-none text-white text-center"
          />
        </div>
        {selectedDate ? (
          <button className="btn-default p-2 text-[14px] font-semibold">
            Забронировать сеанс
          </button>
        ) : (
          <button
            className="btn-default p-2 text-[14px] font-semibold bg-gray-500 text-white hover:bg-gray-500"
            disabled
          >
            Забронировать сеанс
          </button>
        )}
      </div>
    </div>
  );
};

export default Calendar;
