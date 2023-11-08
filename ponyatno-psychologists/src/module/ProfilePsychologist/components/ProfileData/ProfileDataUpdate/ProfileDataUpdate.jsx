import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetProfileById } from "../../../hook/useGetProfileById";
import { useUpdatetProfileById } from "../../../hook/useUpdatetProfileById";

const ProfileDataUpdate = ({ isModalOpen, setModalOpen }) => {
  const { data } = useGetProfileById();
  const { mutate, error } = useUpdatetProfileById();

  const { register, handleSubmit } = useForm();
  const updateProfile = (body) => {
    const updateBody = {
      ...body,
      Gender: data.gender,
      TimeBeforeBooking: "",
      WorkHours: "",
    };
    console.log(body);
    console.log(updateBody);
    mutate(updateBody);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={closeModal}
        >
          <p>das</p>
          <div
            className="flex justify-center w-1/2 max-h-[100vh] overflow-y-scroll "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="w-5 h-5 absolute top-2 right-2 p-2 text-green-pon rounded-full bg-white hover:bg-[#0da47c;] hover:text-white duration-300"
              onClick={closeModal}
            >
              X
            </button>
            <form
              onSubmit={handleSubmit(updateProfile)}
              className="flex flex-col gap-y-8"
            >
              <div className="flex gap-x-8 mt-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-green-pon font-semibold"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    className="input-text"
                    defaultValue={data.firstName}
                    {...register("firstName")}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="lastname"
                    className="text-green-pon font-semibold"
                  >
                    Фамилия
                  </label>
                  <input
                    type="text"
                    placeholder="Фамилия"
                    className="input-text"
                    name="lastname"
                    defaultValue={data.lastName}
                    {...register("lastName")}
                  />
                </div>
              </div>

              <div className="flex gap-x-8">
                {/* <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-green-pon font-semibold"
                  >
                    E-mail
                  </label>
                  <input
                    type="E-mail"
                    name="email"
                    placeholder="E-mail"
                    className="input-text"
                    defaultValue={data.email}
                    {...register("email")}
                  />
                </div> */}

                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-green-pon font-semibold"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    className="input-text"
                    defaultValue={data.phone}
                    {...register("phone")}
                  />
                </div>
              </div>

              <div className="flex gap-x-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="dateofbirth"
                    className="text-green-pon font-semibold"
                  >
                    Дата рождения
                  </label>
                  <input
                    type="date"
                    name="dateofbirth"
                    placeholder="Дата рождения"
                    className="input-text"
                    defaultValue={data.dateOfBirth.split("T")[0]}
                    {...register("dateOfBirth")}
                  />
                </div>
              </div>

              <div className="flex gap-x-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="aboutMe"
                    className="text-green-pon font-semibold"
                  >
                    О себе
                  </label>
                  <textarea
                    cols="55"
                    rows="10"
                    name="aboutMe"
                    placeholder="О себе"
                    defaultValue={data.aboutMe}
                    className="input-text"
                    {...register("aboutMe")}
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-x-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="sessionFeedback"
                    className="text-green-pon font-semibold"
                  >
                    Что получит пациент после сеанса
                  </label>
                  <textarea
                    cols="55"
                    rows="10"
                    name="sessionFeedback"
                    placeholder="Что получит пациент после сеанса"
                    className="input-text"
                    defaultValue={data.sessionFeedback}
                    {...register("sessionFeedback")}
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-x-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="yearsOfExperience"
                    className="text-green-pon font-semibold"
                  >
                    Опыт работы
                  </label>
                  <input
                    type="number"
                    {...register("yearsOfExperience")}
                    name="yearsOfExperience"
                    placeholder="Опыт работы"
                    className="input-text"
                    defaultValue={data.yearsOfExperience}
                  />
                </div>
              </div>
              <div className="flex gap-x-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="educationPlace"
                    className="text-green-pon font-semibold"
                  >
                    Место учебы
                  </label>
                  <input
                    type="text"
                    placeholder="Место учебы"
                    className="input-text"
                    name="educationPlace"
                    defaultValue={data.educationPlace}
                    {...register("educationPlace")}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="yearOfGraduation"
                    className="text-green-pon font-semibold"
                  >
                    Год выпуска
                  </label>
                  <input
                    type="number"
                    {...register("yearOfGraduation")}
                    placeholder="Год выпуска"
                    name="yearOfGraduation"
                    className="input-text"
                    defaultValue={data.yearOfGraduation}
                  />
                </div>
              </div>
              <div className="flex gap-x-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="sessionDuration"
                    className="text-green-pon font-semibold"
                  >
                    Время продолжительности одного сеанса
                  </label>

                  <select
                    className="input-text"
                    name="sessionDuration"
                    id="sessionDuration"
                    {...register("sessionDuration")}
                    defaultValue={data.sessionDuration}
                  >
                    <option value="15">15 минут</option>
                    <option value="30">30 минут</option>
                    <option value="60">1 час</option>
                    <option value="120">2 часа</option>
                    <option value="180">3 часа</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="breakDuration"
                    className="text-green-pon font-semibold"
                  >
                    Время перерыва между часами
                  </label>

                  <select
                    className="input-text"
                    name="breakDuration"
                    id="breakDuration"
                    {...register("breakDuration")}
                    defaultValue={data.breakDuration}
                  >
                    <option value="15">15 минут</option>
                    <option value="30">30 минут</option>
                    <option value="60">1 час</option>
                    <option value="120">2 часа</option>
                    <option value="180">3 часа</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-x-8">
                <div className="flex flex-col">
                  <label
                    htmlFor="sessionPrice"
                    className="text-green-pon font-semibold"
                  >
                    Цена за один сеанс
                  </label>
                  <input
                    type="number"
                    {...register("sessionPrice")}
                    placeholder="Цена за один сеанс"
                    name="sessionPrice"
                    className="input-text"
                    defaultValue={data.sessionPrice}
                  />
                </div>
              </div>
              <button className="mb-5 bg-white p-4 rounded-lg text-green-pon uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700 ">
                Обновить профиль
              </button>
              <p className="text-center text-green-pon font-semibold ">PSY</p>
            </form>
            {/* <button onClick={closeModal}>Закрыть</button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDataUpdate;
