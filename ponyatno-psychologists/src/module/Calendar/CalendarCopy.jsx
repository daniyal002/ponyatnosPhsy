import React, { useState, useEffect, useMemo, useRef } from 'react';
import { startOfWeek, addDays, format, isAfter, add, parse } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { useForm } from 'react-hook-form';
import BookingModal from '../Booking/components/BookingModal';

const CalendarCopy = ({
  availabilityData,
  psychologistProfileId,
  firstName,
  lastName,
  bookingsDto,
}) => {
  useEffect(() => {
    console.log(bookingsDto);
  }, []);

  const { register, handleSubmit } = useForm();
  const [week, setWeek] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [breakingDSO, setBreakingDSO] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const newBreakingDSO = bookingsDto.map((item) => {
      return {
        id: item.id,
        dayOfWeek: item.bookingDayOfWeek,
        day: item.bookingDay.split('T')[0],
        startTime: item.startTime,
        endTime: item.endTime,
      };
    });

    const newTimeSlots = availabilityData.map((item) => {
      const availabilityDto = item.psychologistAvailabilityDto.$values[0];
      return {
        id: availabilityDto.id,
        dayOfWeek: availabilityDto.dayOfWeek,
        startTime: availabilityDto.startTime,
        endTime: availabilityDto.endTime,
      };
    });

    setTimeSlots((prevTimeSlots) => [...prevTimeSlots, ...newTimeSlots]);
    setBreakingDSO((prevBreakingDso) => [
      ...prevBreakingDso,
      ...newBreakingDSO,
    ]);
  }, [availabilityData]);

  useEffect(() => {
    const newWeek = Array.from({ length: 7 }, (_, index) => {
      const nextDay = format(add(new Date(), { days: index + 1 }), 'PPPP', {
        locale: ru,
      });
      // Находим временной слот для текущего дня
      const dayOfWeek = index;
      const timeSlot =
        timeSlots && timeSlots.find((slot) => slot.dayOfWeek === dayOfWeek);

      const buttons = timeSlot
        ? generateTimeButtons(timeSlot.startTime, timeSlot.endTime, nextDay)
        : [];

      return {
        day: nextDay,
        timeSlot: timeSlot || null,
        buttons,
      };
    });

    setWeek(newWeek);
  }, [timeSlots]);

  const generateTimeButtons = (startTime, endTime) => {
    const buttons = [];
    const formatTime = (time) => format(time, 'HH:mm');

    let currentTime = new Date(`01/01/2000 ${startTime}`);
    const endTimeDate = new Date(`01/01/2000 ${endTime}`);

    while (currentTime <= endTimeDate) {
      const time = formatTime(currentTime);
      buttons.push(time);
      currentTime = add(currentTime, { minutes: 60 });
    }

    return buttons;
  };

  const [day, setDay] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [dayOfWeek, setDayOfWeek] = useState();

  const handleButton = (day, time) => {
    setIsModalOpen(true);
    const parsedDate = parse(day, 'EEEE, d MMMM yyyy г.', new Date(), {
      locale: ru,
    });
    // Используем функцию format для вывода значений
    const dayOfMonthAndYear = format(parsedDate, 'yyyy-MM-dd', { locale: ru }); // день месяца, месяц и год, например, "4 декабря 2023 г."

    // Получаем числовые значения
    const numericDayOfWeek = parseInt(format(parsedDate, 'i', { locale: ru })); // 1 - понедельник, 2 - вторник, и так далее

    setDay(dayOfMonthAndYear);
    setStartTime(format(new Date(`01/01/2000 ${time}`), 'HH:mm'));
    setEndTime(
      format(add(new Date(`01/01/2000 ${time}`), { hours: 1 }), 'HH:mm')
    );
    setDayOfWeek(numericDayOfWeek);
  };

  const onSubmit = (data) => {};

  const isTimeSlotBooked = (day, time, breakingDSO) => {
    const parsedDate = parse(day, 'EEEE, d MMMM yyyy г.', new Date(), {
      locale: ru,
    });

    const dayOfMonthAndYear = format(parsedDate, 'yyyy-MM-dd', { locale: ru });

    const formattedTime = time + ':00';

    const bookedSlot = breakingDSO.find(
      (slot) =>
        slot.day === dayOfMonthAndYear && slot.startTime === formattedTime
    );
    return !!bookedSlot;
  };

  return (
    <>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        psychologistProfileId={psychologistProfileId}
        startTime={startTime}
        endTime={endTime}
        dayOfWeek={dayOfWeek}
        day={day}
        firstName={firstName}
        lastName={lastName}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 className="text-white text-[24px]">Выберите свободное время</h2>
          {week.map(({ day, timeSlot, buttons }, index) => (
            <div key={index} className="flex flex-col gap-y-3 mb-3">
              {timeSlot && <h3 className="text-white ">{day}</h3>}
              {timeSlot && (
                <div className="flex flex-wrap gap-3">
                  {buttons.map(
                    (time, buttonIndex) =>
                      !isTimeSlotBooked(day, time, breakingDSO) && (
                        <button
                          key={buttonIndex}
                          type="submit"
                          name="selectedTime"
                          onClick={() => handleButton(day, time)}
                          className="bg-green-pon text-white p-2 rounded-lg shadow-sm shadow-white hover:shadow-[0] duration-500"
                        >
                          {time}
                        </button>
                      )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default CalendarCopy;
