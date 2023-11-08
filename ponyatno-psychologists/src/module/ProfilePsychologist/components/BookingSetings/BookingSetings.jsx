import React, { useEffect, useState } from "react";
import OpenTimePicker from "./OpenTimePicke/OpenTimePicker";
import { useGetAvailability } from "../../hook/useGetAvailability";
import deleteIcon from "../../../../assets/icon/delete.svg";
import { useDeleteAvailability } from "../../hook/useDeleteAvailability";
import { useGetProfileById } from "../../hook/useGetProfileById";

const BookingSetings = () => {
  const [isPickerOpen, setIsPickerOpen] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const { data } = useGetAvailability();
  const { data: GetProfile } = useGetProfileById();

  const { mutate } = useDeleteAvailability();

  useEffect(() => {
    console.log(GetProfile.psychologistAvailability.$values);
  }, []);

  const deleteTimeSettings = (body) => {
    mutate(body);
  };

  const handleOpen = (day) => {
    setIsPickerOpen(true);
    setDayOfWeek(day);
  };

  const handleClose = () => {
    setIsPickerOpen(false);
  };

  return (
    <div className="bg-white p-3">
      <OpenTimePicker
        isPickerOpen={isPickerOpen}
        dayOfWeek={dayOfWeek}
        setIsPickerOpen={setIsPickerOpen}
      />

      <div className="border-4 text-center">
        <h1 className="text-green-pon font-semibold mb-3">
          Настройка рабочего времени по дням недели
        </h1>
        <h3 className="bg-green-pon p-3 text-white font-semibold">
          Понедельник
        </h3>
        {data &&
          GetProfile.psychologistAvailability.$values.map((dayData) =>
            dayData.dayOfWeek === 1 ? (
              <div key={dayData.dayOfWeek}>
                <p>Начало: {dayData.startTime}</p>
                <p>Конец: {dayData.endTime}</p>
                <button onClick={() => deleteTimeSettings(dayData.id)}>
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            ) : null
          )}
        <button onClick={() => handleOpen(1)}>+</button>
      </div>
      <div className="border-4 text-center">
        <h3 className="bg-green-pon p-3 text-white font-semibold">Вторник</h3>
        {data &&
          GetProfile.psychologistAvailability.$values.map((dayData) =>
            dayData.dayOfWeek === 2 ? (
              <div key={dayData.dayOfWeek}>
                <p>Начало: {dayData.startTime}</p>
                <p>Конец: {dayData.endTime}</p>
                <button onClick={() => deleteTimeSettings(dayData.id)}>
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            ) : null
          )}
        <button onClick={() => handleOpen(2)}>+</button>
      </div>
      <div className="border-4 text-center">
        <h3 className="bg-green-pon p-3 text-white font-semibold">Среда</h3>
        {data &&
          GetProfile.psychologistAvailability.$values.map((dayData) =>
            dayData.dayOfWeek === 3 ? (
              <div key={dayData.dayOfWeek}>
                <p>Начало: {dayData.startTime}</p>
                <p>Конец: {dayData.endTime}</p>
                <button onClick={() => deleteTimeSettings(dayData.id)}>
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            ) : null
          )}
        <button onClick={() => handleOpen(3)}>+</button>
      </div>
      <div className="border-4 text-center">
        <h3 className="bg-green-pon p-3 text-white font-semibold">Четверг</h3>
        {data &&
          GetProfile.psychologistAvailability.$values.map((dayData) =>
            dayData.dayOfWeek === 4 ? (
              <div key={dayData.dayOfWeek}>
                <p>Начало: {dayData.startTime}</p>
                <p>Конец: {dayData.endTime}</p>
                <button onClick={() => deleteTimeSettings(dayData.id)}>
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            ) : null
          )}
        <button onClick={() => handleOpen(4)}>+</button>
      </div>
      <div className="border-4 text-center">
        <h3 className="bg-green-pon p-3 text-white font-semibold">Пятница</h3>
        {data &&
          GetProfile.psychologistAvailability.$values.map((dayData) =>
            dayData.dayOfWeek === 5 ? (
              <div key={dayData.dayOfWeek}>
                <p>Начало: {dayData.startTime}</p>
                <p>Конец: {dayData.endTime}</p>
                <button onClick={() => deleteTimeSettings(dayData.id)}>
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            ) : null
          )}
        <button onClick={() => handleOpen(5)}>+</button>
      </div>
      <div className="border-4 text-center">
        <h3 className="bg-green-pon p-3 text-white font-semibold">Суббота</h3>
        {data &&
          GetProfile.psychologistAvailability.$values.map((dayData) =>
            dayData.dayOfWeek === 6 ? (
              <div key={dayData.dayOfWeek}>
                <p>Начало: {dayData.startTime}</p>
                <p>Конец: {dayData.endTime}</p>
                <button onClick={() => deleteTimeSettings(dayData.id)}>
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            ) : null
          )}
        <button onClick={() => handleOpen(6)}>+</button>
      </div>
      <div className="border-4 text-center">
        <h3 className="bg-green-pon p-3 text-white font-semibold">
          Воскресенье
        </h3>
        {data &&
          GetProfile.psychologistAvailability.$values.map((dayData) =>
            dayData.dayOfWeek === 0 ? (
              <div key={dayData.dayOfWeek}>
                <p>Начало: {dayData.startTime}</p>
                <p>Конец: {dayData.endTime}</p>
                <button onClick={() => deleteTimeSettings(dayData.id)}>
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            ) : null
          )}
        <button onClick={() => handleOpen(0)}>+</button>
      </div>
    </div>
  );
};

export default BookingSetings;
