import React from "react";
import { useGetProfileById } from "../../../hook/useGetProfileById";
import deleteIcon from "../../../../../assets/icon/delete.svg";
import { useDeleteAvailability } from "../../../hook/useDeleteAvailability";

const DayOfWeek = ({ nameOfDay, number, setIsPickerOpen, setDayOfWeek }) => {
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

  return (
    <div className="border-4 text-center">
      <h3 className="bg-green-pon p-3 text-white font-semibold">{nameOfDay}</h3>
      {data &&
        data.map((dayData) =>
          dayData.dayOfWeek === number ? (
            <div key={dayData.dayOfWeek}>
              <p>Начало: {dayData.startTime}</p>
              <p>Конец: {dayData.endTime}</p>
              <button onClick={() => deleteTimeSettings(dayData.id)}>
                <img src={deleteIcon} alt="delete" />
              </button>
            </div>
          ) : null
        )}
      <button onClick={() => handleOpen(number)}>+</button>
    </div>
  );
};

export default DayOfWeek;
