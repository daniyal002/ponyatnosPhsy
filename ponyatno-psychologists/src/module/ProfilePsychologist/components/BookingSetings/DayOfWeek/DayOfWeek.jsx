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
    <div className=" text-center w-[60%] 2xl:w-[20%] xs:w-[40%] sm:w-[30%] bg-[#ffffff] my-4 rounded-lg shadow-[-2px_4px_10px_-5px_rgba(0,0,0,0.8)] border-green-pon border-[1px]">
      <h3 className="text-[14px] p-3 text-black font-medium text-center relative">
        {nameOfDay}
        <span className="block w-full h-1 bg-green-pon absolute bottom-0 left-0"></span>
      </h3>
      {data &&
        data.map((dayData) =>
          dayData.dayOfWeek === number ? (
            <div
              key={dayData.dayOfWeek}
              className="flex items-center justify-center gap-x-3 p-3"
            >
              <div className="flex flex-col items-start w-[100%] sm:w-[60%]">
                <p className="flex justify-between w-full">
                  <span> Начало: </span> <span>{dayData.startTime} </span>
                </p>
                <p className="flex justify-between w-full">
                  <span> Конец:</span> <span> {dayData.endTime}</span>
                </p>
              </div>

              <button onClick={() => deleteTimeSettings(dayData.id)}>
                <img src={deleteIcon} alt="delete" width={30} />
              </button>
            </div>
          ) : null
        )}
      <button
        onClick={() => handleOpen(number)}
        className="bg-[#FF99C8] text-[18px] p-3 rounded-lg  text-white mb-4 hover:bg-[#a8587e] duration-500 mt-2 shadow-[0px_1px_0px_1px_rgba(0,0,0,0.5)]"
      >
        Добавить время
      </button>
    </div>
  );
};

export default DayOfWeek;
