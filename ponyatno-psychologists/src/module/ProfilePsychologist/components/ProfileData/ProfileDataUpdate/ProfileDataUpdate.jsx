import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetProfileById } from "../../../hook/useGetProfileById";
import { useUpdatetProfileById } from "../../../hook/useUpdatetProfileById";
import Select from "react-select";

const ProfileDataUpdate = ({ isModalOpen, setModalOpen, role }) => {
  const { data } = useGetProfileById();
  const { mutate, error } = useUpdatetProfileById();
  const [selectSpecialization, setSelectSpecialization] = useState([]);
  const [selected, setSelected] = useState([]);

  const options = [
    { value: "Специализация1", label: "Специализация1" },
    { value: "Специализация2", label: "Специализация2" },
    { value: "Специализация3", label: "Специализация3" },
    { value: "Специализация4", label: "Специализация4" },
    { value: "Специализация5", label: "Специализация5" },
  ];

  const handleSelectSpecialization = (selectedOptions) => {
    setSelected(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelectSpecialization(selectedValues);
  };

  const [selectPsychologicalApproach, setPsychologicalApproach] = useState([]);
  const [selectedPA, setSelectedPA] = useState([]);

  const optionsPsychologicalApproach = [
    { value: "Подход1", label: "Подход1" },
    { value: "Подход2", label: "Подход2" },
    { value: "Подход3", label: "Подход3" },
    { value: "Подход4", label: "Подход4" },
    { value: "Подход5", label: "Подход5" },
  ];

  const handlePsychologicalApproach = (selectedOptions) => {
    setSelectedPA(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setPsychologicalApproach(selectedValues);
  };
  const { register, handleSubmit } = useForm();
  const updateProfile = (body) => {
    let updateBody = {};
    if (role === "User") {
      updateBody = {
        ...body,
        aboutMe: "",
        breakDuration: "",
        educationPlace: "",
        psychologicalApproach: [],
        psychologistId: "",
        psychologistProfiles: "",
        sessionDuration: "",
        sessionFeedback: "",
        sessionPrice: "",
        specialization: [],
        timeBeforeBooking: "",
        workHours: "",
        yearOfGraduation: "",
        yearsOfExperience: "",
        Gender: data.gender,
        dateOfBirth: body.dateOfBirth + "T00:00:00.000Z",
      };
    } else {
      updateBody = {
        ...body,
        specialization: selectSpecialization,
        psychologicalApproach: selectPsychologicalApproach,
        Gender: data.gender,
        WorkHours: "",
        dateOfBirth: body.dateOfBirth + "T00:00:00.000Z",
      };
    }

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
              className="flex flex-col gap-y-8 w-full p-[5px]"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-green-pon font-semibold">
                  Имя
                </label>
                <input
                  type="text"
                  placeholder="Имя"
                  name="name"
                  className="input-text"
                  defaultValue={data.firstName}
                  {...register("firstName")}
                  required
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
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-green-pon font-semibold">
                  Телефон
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  className="input-text"
                  defaultValue={data.phone}
                  {...register("phone")}
                  required
                />
              </div>
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
                  required
                />
              </div>
              {role !== "User" && (
                <>
                  <div className="flex flex-col">
                    <label
                      htmlFor="specialization"
                      className="text-green-pon font-semibold"
                    >
                      Специализация
                    </label>
                    <Select
                      name="specialization"
                      options={options}
                      isMulti
                      onChange={handleSelectSpecialization}
                      value={selected}
                      placeholder="Специализация"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="psychologicalApproach"
                      className="text-green-pon font-semibold"
                    >
                      Психологический подход
                    </label>
                    <Select
                      name="psychologicalApproach"
                      options={optionsPsychologicalApproach}
                      isMulti
                      onChange={handlePsychologicalApproach}
                      value={selectedPA}
                      placeholder="Психологический подход"
                      required
                    />
                  </div>

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
                      required
                    ></textarea>
                  </div>

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
                      required
                    ></textarea>
                  </div>

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
                      required
                    />
                  </div>

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
                      required
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
                      required
                    />
                  </div>

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
                      required
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
                      Время перерыва между сеансом
                    </label>

                    <select
                      className="input-text"
                      name="breakDuration"
                      id="breakDuration"
                      {...register("breakDuration")}
                      defaultValue={data.breakDuration}
                      required
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
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="timeBeforeBooking"
                      className="text-green-pon font-semibold"
                    >
                      Сколько дней до начала записи
                    </label>
                    <input
                      type="number"
                      {...register("timeBeforeBooking")}
                      placeholder="Сколько дней до начала записи"
                      name="timeBeforeBooking"
                      className="input-text"
                      defaultValue={data.timeBeforeBooking}
                      required
                    />
                  </div>
                </>
              )}

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
