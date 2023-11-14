import React, { useState } from "react";
import { useGetProfileById } from "../../hook/useGetProfileById";
import ProfileDataUpdate from "./ProfileDataUpdate/ProfileDataUpdate";
import Avatar from "../Avatar/Avatar";
const ProfileData = () => {
  const { data } = useGetProfileById();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      {data && (
        <>
          <ProfileDataUpdate
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
          />
          <div className="flex flex-col items-center w-[80%]">
            <Avatar />

            <div className="flex flex-col justify-center items-center w-1/2 min-h-screen gap-y-3">
              <button
                onClick={openModal}
                className="bg-white p-4 rounded-lg text-green-pon uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700"
              >
                Редактировать профиль
              </button>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">Имя</span>
                <span>{data.firstName} </span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">Фамилиия</span>{" "}
                <span>{data.lastName} </span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">E-mail</span>{" "}
                <span>{data.email} </span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">Телефон</span>{" "}
                <span>{data.phone} </span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Год рождения
                </span>{" "}
                <span>{data.dateOfBirth.split("T")[0]} </span>
              </p>

              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Специализация
                </span>{" "}
                <span className="flex flex-wrap ">
                  {data.specialization.$values.map((spec, index) => (
                    <p key={index}>{spec},</p>
                  ))}
                </span>
              </p>

              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Психологический подход
                </span>{" "}
                <span className="flex flex-wrap ">
                  {data.psychologicalApproach.$values.map((spec, index) => (
                    <p key={index}>{spec},</p>
                  ))}
                </span>
              </p>

              <p className="profile-text">
                <span className="text-green-pon font-semibold">О себе</span>{" "}
                <span>{data.aboutMe}</span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Что получит пациент после сеанса
                </span>
                <span>
                  sadsadsadsadsaddsadsadsadsadsaddsadsadsadsadsad
                  sadsadsadsadsaddsadsadsadsadsaddsadsadsadsadsad
                  sadsadsadsadsaddsadsadsadsadsaddsadsadsadsadsad
                </span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Опыт работы
                </span>{" "}
                <span>{data.yearsOfExperience} </span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Место учебы
                </span>{" "}
                <span>{data.educationPlace}</span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Год выпуска
                </span>{" "}
                <span>{data.yearOfGraduation}</span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Время продолжительности одного сеанса
                </span>
                <span>{data.sessionDuration}</span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Время перерыва между сеансом
                </span>
                <span>{data.breakDuration}</span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Цена за один сеанс
                </span>
                <span>{data.sessionPrice}</span>
              </p>
              <p className="profile-text">
                <span className="text-green-pon font-semibold">
                  Сколько дней до начала записи
                </span>
                <span>{data.timeBeforeBooking}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileData;
