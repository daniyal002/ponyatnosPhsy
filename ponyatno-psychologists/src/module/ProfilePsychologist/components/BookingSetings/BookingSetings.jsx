import React, { useState } from "react";
import OpenTimePicker from "./OpenTimePicke/OpenTimePicker";
import deleteIcon from "../../../../assets/icon/delete.svg";
import { useDeleteAvailability } from "../../hook/useDeleteAvailability";
import { useGetProfileById } from "../../hook/useGetProfileById";
import DayOfWeek from "./DayOfWeek/DayOfWeek";

const BookingSetings = () => {
  const [isPickerOpen, setIsPickerOpen] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  const { data: GetProfile } = useGetProfileById();

  const data =
    GetProfile.psychologistProfiles.$values[0].psychologistAvailabilityDto
      .$values;

  const handleOpen = (day) => {
    setIsPickerOpen(true);
    setDayOfWeek(day);
  };

  const { mutate } = useDeleteAvailability();

  const deleteTimeSettings = (body) => {
    mutate(body);
  };

  const handleClose = () => {
    setIsPickerOpen(false);
  };

  return (
    <div className="bg-white p-3 mx-auto my-4">
      <OpenTimePicker
        isPickerOpen={isPickerOpen}
        dayOfWeek={dayOfWeek}
        setIsPickerOpen={setIsPickerOpen}
      />
      <h1 className="text-green-pon font-semibold mb-3">
        Настройка рабочего времени по дням недели
      </h1>
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
  );
};

export default BookingSetings;
