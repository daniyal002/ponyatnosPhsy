import React, { useEffect } from "react";
import { useGetProfileById } from "../../hook/useGetProfileById";
import Avatar from "../Avatar/Avatar";
import ProfileDataOpenUpdate from "./ProfileDataOpenUpdate/ProfileDataOpenUpdate";
import { useRoleStore } from "../../../../store/store";
const ProfileData = () => {
  const { data } = useGetProfileById();
  const role = useRoleStore((state) => state.role);
  return (
    <>
      {data && (
        <>
          <div className="flex flex-col items-center w-[100%] bg-white">
            <div className="bg-[#004E64] w-full">
              <div className="flex flex-col items-center m-[40px] md:m-[100px] md:flex-row">
                <Avatar userId={data.userId} avatarImage={data.avatarImage} />
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

            <div className="flex flex-col justify-center items-start xs:items-center gap-y-[24px] max-w-[1200px] m-[40px] md:my-8 w-full  ">
              <div className="w-full md:w-1/2">
                <img src="" alt="" />
                <h3 className="text-[32px] font-light  md:text-[43px] mx-3 w-[80%] ">
                  Ваши данные
                </h3>
              </div>

              <div className="flex gap-x-[60px] gap-y-[30px] w-[80%] justify-start md:w-1/2 flex-col xs:flex-row mx-3">
                <p className="profile-text">
                  <span className="profile-textHeader">Имя</span>
                  <span className="text-[16px]">{data.firstName} </span>
                </p>
                <p className="profile-text">
                  <span className="profile-textHeader">Фамилия</span>{" "}
                  <span className="text-[16px]">{data.lastName} </span>
                </p>
              </div>

              <div className="flex gap-x-[60px] gap-y-[30px] w-[80%] justify-start md:w-1/2 flex-col xs:flex-row mx-3">
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

              <div className="flex gap-x-[60px] gap-y-[30px] w-[80%] justify-start md:w-1/2 flex-col xs:flex-row mx-3">
                <p className="profile-text">
                  <span className="profile-textHeader">Телефон</span>
                  <span className="text-[16px]">{data.phone} </span>
                </p>
                {data.userRole !== "User" && (
                  <p className="profile-text">
                    <span className="profile-textHeader">Специализация</span>
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
                  <div className="flex gap-x-[60px] gap-y-[30px] w-[80%] justify-start md:w-1/2 flex-col xs:flex-row mx-3">
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

                  <div className="flex gap-x-[60px] gap-y-[30px] w-[80%] justify-start md:w-1/2 flex-col xs:flex-row mx-3">
                    <p className="profile-text">
                      <span className="profile-textHeader">Опыт работы</span>
                      <span className="text-[16px]">
                        {data.yearsOfExperience}&nbsp;
                        {Number(data.yearsOfExperience) === 1 && "Год"}
                        {Number(data.yearsOfExperience) >= 2 &&
                          Number(data.yearsOfExperience) <= 4 &&
                          "Года"}
                        {Number(data.yearsOfExperience) >= 5 && "Лет"}
                      </span>
                    </p>
                    <p className="profile-text">
                      <span className="profile-textHeader">Место учебы</span>
                      <span className="text-[16px]">
                        {data?.educationPlace?.$values.map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                      </span>
                    </p>
                  </div>

                  <div className="flex gap-x-[60px] gap-y-[30px] w-[80%] justify-start md:w-1/2 flex-col xs:flex-row mx-3">
                    <p className="profile-text">
                      <span className="profile-textHeader">
                        Время продолжительности одного сеанса
                      </span>
                      <span className="text-[16px]">
                        {data.sessionDuration} минут
                      </span>
                    </p>

                    <p className="profile-text">
                      <span className="profile-textHeader">
                        Время перерыва между сеансом
                      </span>
                      <span className="text-[16px]">
                        {data.breakDuration} минут
                      </span>
                    </p>
                  </div>

                  <div className="flex gap-x-[60px] gap-y-[30px] w-[80%] justify-start md:w-1/2 flex-col xs:flex-row mx-3">
                    <p className="profile-text">
                      <span className="profile-textHeader">
                        Цена за один сеанс
                      </span>
                      <span className="text-[16px]">{data.sessionPrice}₽</span>
                    </p>

                    <p className="profile-text">
                      <span className="profile-textHeader">
                        Сколько дней до начала записи
                      </span>
                      <span className="text-[16px]">
                        {data.timeBeforeBooking}{" "}
                        {Number(data.timeBeforeBooking) === 1 && "День"}
                        {Number(data.timeBeforeBooking) >= 2 &&
                          Number(data.timeBeforeBooking) <= 4 &&
                          "Дня"}
                        {Number(data.timeBeforeBooking) >= 5 && "Дней"}
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>
            <ProfileDataOpenUpdate role={role} />
          </div>
        </>
      )}
    </>
  );
};

export default ProfileData;
