import React, {  useState } from "react";
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
            role={data.userRole}
          />
          <div className="flex flex-col items-center w-[100%]">
            <div className="bg-[#004E64] w-full">
              <div className="flex flex-col items-center m-[40px] md:m-[100px] md:flex-row">
                <Avatar />
                {data.userRole !== "User" && (
                  <p className="flex flex-col gap-y-5 w-full md:w-1/2">
                    <span className=" text-[32px] md:text-[48px] text-green-pon text-center">
                      О себе
                    </span>
                    <span className="text-[14px] md:text-[20px] text-white text-center">
                      {data.aboutMe}
                    </span>
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center items-start xs:items-center gap-y-[24px] max-w-[1200px] m-[40px] md:my-8 w-full">
              <div className="w-full md:w-1/2">
                <img src="" alt="" />
                <h3 className="text-[32px] font-light  md:text-[43px]">
                  Ваши данные
                </h3>
              </div>

              <div className="flex gap-x-[60px] gap-y-[30px] w-full justify-start md:w-1/2 flex-col xs:flex-row">
                <p className="profile-text">
                  <span className="profile-textHeader">Имя</span>
                  <span className="text-[16px]">{data.firstName} </span>
                </p>
                <p className="profile-text">
                  <span className="profile-textHeader">Фамилия</span>{" "}
                  <span className="text-[16px]">{data.lastName} </span>
                </p>
              </div>

              <div className="flex gap-x-[60px] gap-y-[30px] w-full justify-start md:w-1/2 flex-col xs:flex-row">
                <p className="profile-text">
                  <span className="profile-textHeader">E-mail</span>{" "}
                  <span className="text-[16px]">{data.userEmail} </span>
                </p>
                <p className="profile-text">
                  <span className="profile-textHeader">Год рождения</span>{" "}
                  <span className="text-[16px]">
                    {data.dateOfBirth.split("T")[0]}{" "}
                  </span>
                </p>
              </div>

              <div className="flex gap-x-[60px] gap-y-[30px] w-full justify-start md:w-1/2 flex-col xs:flex-row">
                <p className="profile-text">
                  <span className="profile-textHeader">Телефон</span>{" "}
                  <span className="text-[16px]">{data.phone} </span>
                </p>
                {data.userRole !== "User" && (
                  <p className="profile-text">
                    <span className="profile-textHeader">Специализация</span>{" "}
                    <span className="flex flex-wrap  ">
                      {data.specialization &&
                        data.specialization.$values.map((spec, index) => (
                          <p className="text-[16px]" key={index}>
                            {spec},
                          </p>
                        ))}
                    </span>
                  </p>
                )}
              </div>

              {data.userRole !== "User" && (
                <>
                  <div className="flex gap-x-[60px] gap-y-[30px] w-full justify-start md:w-1/2 flex-col xs:flex-row">
                    <p className="profile-text">
                      <span className="profile-textHeader">
                        Психологический подход
                      </span>
                      <span className="flex flex-wrap ">
                        {data.psychologicalApproach &&
                          data.psychologicalApproach.$values.map(
                            (spec, index) => (
                              <p className="text-[16px]" key={index}>
                                {spec},
                              </p>
                            )
                          )}
                      </span>
                    </p>

                    <p className="profile-text">
                      <span className="profile-textHeader">
                        Что получит пациент после сеанса
                      </span>
                      <span className="text-[16px]">
                        {data.sessionFeedback}
                      </span>
                    </p>
                  </div>

                  <div className="flex gap-x-[60px] gap-y-[30px] w-full justify-start md:w-1/2 flex-col xs:flex-row">
                    <p className="profile-text">
                      <span className="profile-textHeader">Опыт работы</span>{" "}
                      <span className="text-[16px]">
                        {data.yearsOfExperience}{" "}
                      </span>
                    </p>
                    <p className="profile-text">
                      <span className="profile-textHeader">Место учебы</span>{" "}
                      <span className="text-[16px]">{data.educationPlace}</span>
                    </p>
                  </div>

                  <div className="flex gap-x-[60px] gap-y-[30px] w-full justify-start md:w-1/2 flex-col xs:flex-row">
                    <p className="profile-text">
                      <span className="profile-textHeader">Год выпуска</span>{" "}
                      <span className="text-[16px]">
                        {data.yearOfGraduation}
                      </span>
                    </p>
                    <p className="profile-text">
                      <span className="profile-textHeader">
                        Время продолжительности одного сеанса
                      </span>
                      <span className="text-[16px]">
                        {data.sessionDuration}
                      </span>
                    </p>
                  </div>

                  <div className="flex gap-x-[60px] gap-y-[30px] w-full justify-start md:w-1/2 flex-col xs:flex-row">
                    <p className="profile-text">
                      <span className="profile-textHeader">
                        Время перерыва между сеансом
                      </span>
                      <span className="text-[16px]">{data.breakDuration}</span>
                    </p>
                    <p className="profile-text">
                      <span className="profile-textHeader">
                        Цена за один сеанс
                      </span>
                      <span className="text-[16px]">{data.sessionPrice}</span>
                    </p>
                  </div>

                  <div className="flex gap-x-[60px] gap-y-[30px] w-full justify-start md:w-1/2 flex-col xs:flex-row">
                    <p className="profile-text">
                      <span className="profile-textHeader">
                        Сколько дней до начала записи
                      </span>
                      <span className="text-[16px]">
                        {data.timeBeforeBooking}
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="bg-black w-full ">
              <div className="flex flex-col gap-y-5 items-center my-6 p-2">
                <h3 className="text-[48px] text-center text-[#EAE0D5]">
                  Изменение данных профиля
                </h3>
                <p className="text-[16px] text-[#EAE0D5] text-center">
                  Нажмите на кнопку Редактировать профиль чтобы изменить ваши
                  данные
                </p>
                <button
                  onClick={openModal}
                  className="bg-[#EAE0D5] p-4  rounded-lg text-black text-[14px] uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700"
                >
                  Редактировать профиль
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileData;
