import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { addDays } from 'date-fns';

registerLocale('ru', ru);

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Воскресенье (0) и суббота (6)
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
    if (!selectedDate) return false; // Проверяем, что selectedDate определена

    const currentDate = new Date();
    const selectedDateWithoutTime = new Date(selectedDate);
    selectedDateWithoutTime.setHours(time.getHours(), time.getMinutes());

    const day = selectedDateWithoutTime.getDay();
    const hours = selectedDateWithoutTime.getHours();

    // Задайте рабочие дни (пн, вт, чт, пт) и рабочее время (8:00-18:00)
    const isWorkingDay = [1, 2, 4, 5].includes(day);
    const isWorkingHours = hours >= 8 && hours < 18;

    return (
      isWorkingDay &&
      isWorkingHours &&
      !isWeekend(selectedDate) &&
      selectedDateWithoutTime >= currentDate
    );
  };

  return (
    <div>
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
        />
      </div>
      <div>
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
        />
      </div>
    </div>
  );
};

export default Calendar;
