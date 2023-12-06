import React, { useState } from "react";
import EducationUpdate from "./EducationUpdate/EducationUpdate";
import ProfileDataUpdate from "./ProfileDataUpdate/ProfileDataUpdate";
import PsychologistData from "./PsychologistData/PsychologistData";

const ProfileDataOpenUpdate = ({ role }) => {
  const [isModalProfileData, setIsModalProfileData] = useState(false);
  const [isModalEducation, setModalEducation] = useState(false);
  const [isModalPsychologistData, setIsModalPsychologistData] = useState(false);

  return (
    <>
      <ProfileDataUpdate
        isModalOpen={isModalProfileData}
        setModalOpen={setIsModalProfileData}
        role={role}
      />
      {role === "Psychologists" && (
        <>
          <EducationUpdate
            isModalOpen={isModalEducation}
            setModalOpen={setModalEducation}
          />
          <PsychologistData
            isModalOpen={isModalPsychologistData}
            setModalOpen={setIsModalPsychologistData}
          />
        </>
      )}

      <div className="bg-black w-full ">
        <div className="flex flex-col gap-y-5 items-center my-6 p-2">
          <h3 className="text-[48px] text-center text-[#EAE0D5]">
            Изменение данных профиля
          </h3>
          <p className="text-[16px] text-[#EAE0D5] text-center">
            {role === "Psychologists"
              ? "Нажмите на кнопки ниже чтобы изменить ваши данные"
              : "Нажмите на кнопку Редактировать данные чтобы изменить ваши данные"}
          </p>
          <div className="flex gap-5 flex-wrap flex-col md:flex-row justify-center items-stretch ">
            <button
              onClick={() => {
                setIsModalProfileData(true);
                setModalEducation(false);
                setIsModalPsychologistData(false);
              }}
              className="bg-[#EAE0D5] p-4  rounded-lg text-black text-[14px] uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700"
            >
              Редактировать данные
            </button>
            {role === "Psychologists" && (
              <>
                <button
                  onClick={() => {
                    setIsModalProfileData(false);
                    setModalEducation(false);
                    setIsModalPsychologistData(true);
                  }}
                  className="bg-[#EAE0D5] p-4  rounded-lg text-black text-[14px] uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700"
                >
                  Настройки психолога
                </button>
                <button
                  onClick={() => {
                    setIsModalProfileData(false);
                    setModalEducation(true);
                    setIsModalPsychologistData(false);
                  }}
                  className="bg-[#EAE0D5] p-4  rounded-lg text-black text-[14px] uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700"
                >
                  Место учебы и опыт работы
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDataOpenUpdate;
