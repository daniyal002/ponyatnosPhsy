import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSetAvailability } from "../../../hook/useSetAvailability";
import { useGetProfileById } from "../../../hook/useGetProfileById";

const OpenTimePicker = ({ dayOfWeek, isPickerOpen, setIsPickerOpen }) => {
  const { register, handleSubmit } = useForm();
  const { mutate, err } = useSetAvailability();
  const { data } = useGetProfileById();

  const setAvailability = (body) => {
    const udpateBody = {
      ...body,
      psychologistProfileId: data.psychologistId,
      dayOfWeek: dayOfWeek,
      startTime: `${body.startTime}:00`, // Добавляем секунды
      endTime: `${body.endTime}:00`, // Добавляем секунды
    };
    mutate(udpateBody);
    setIsPickerOpen(false);
  };

  const weekOfDay = {
    0: "Воскресенье",
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
  };

  const [updateDayOfWeek, setUpdateDayOfWeek] = useState(weekOfDay[dayOfWeek]);

  useEffect(() => {
    setUpdateDayOfWeek(weekOfDay[dayOfWeek]);
  }, [dayOfWeek]);

  const closeModal = () => {
    setIsPickerOpen(false);
  };
  return (
    <>
      {isPickerOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="flex justify-center w-1/2 max-h-[100vh] "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="w-5 h-5 absolute top-2 right-2 p-2 text-green-pon rounded-full bg-white hover:bg-[#0da47c;] hover:text-white duration-300"
              onClick={closeModal}
            >
              X
            </button>
            <form
              onSubmit={handleSubmit(setAvailability)}
              className="flex flex-col gap-y-3"
            >
              <h1 className="text-white font-semibold text-center">
                {updateDayOfWeek}
              </h1>
              <div className="flex gap-x-3 justify-between">
                <div className="flex flex-col">
                  <label
                    htmlFor="timeFromMonday"
                    className="text-white font-semibold"
                  >
                    Время от
                  </label>
                  <input
                    className="input-text"
                    type="time"
                    id="timeFromMonday"
                    {...register("startTime")}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="timeToMonday"
                    className="text-white font-semibold"
                  >
                    Время до
                  </label>
                  <input
                    type="time"
                    id="timeToMonday"
                    className="input-text"
                    {...register("endTime")}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-white p-4 rounded-lg text-green-pon uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700"
              >
                Добавить
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OpenTimePicker;
