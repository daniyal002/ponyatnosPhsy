import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetProfileById } from "../../../../hook/useGetProfileById";
import { useUpdatetProfileById } from "../../../../hook/useUpdatetProfileById";
import Select from "react-select";
import {
  optionsSpecialization,
  optionsPsychologicalApproach,
} from "../../../../../../helper/listOptions";

const PsychologistData = ({ isModalOpen, setModalOpen }) => {
  const { data } = useGetProfileById();
  const { mutate, error } = useUpdatetProfileById();
  const [selectSpecialization, setSelectSpecialization] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSelectSpecialization = (selectedOptions) => {
    setSelected(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelectSpecialization(selectedValues);
  };

  const [selectPsychologicalApproach, setPsychologicalApproach] = useState([]);
  const [selectedPA, setSelectedPA] = useState([]);

  const handlePsychologicalApproach = (selectedOptions) => {
    setSelectedPA(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setPsychologicalApproach(selectedValues);
  };
  const { handleSubmit, register } = useForm();
  const updateProfile = (body) => {
    const updateBody = {
      ...body,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      aboutMe: data.aboutMe,
      yearOfGraduation: data.yearOfGraduation,
      yearsOfExperience: data.yearsOfExperience,
      specialization: selectSpecialization,
      psychologicalApproach: selectPsychologicalApproach,
      Gender: data.gender,
      WorkHours: "",
      educationPlace: data.educationPlace,
      psychologistId: data.psychologistId,
      psychologistProfiles: data.psychologistProfiles,
    };

    mutate(updateBody);
    closeModal();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#004E64] bg-opacity-90">
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
                <label
                  htmlFor="specialization"
                  className="text-green-pon font-semibold"
                >
                  Специализация
                </label>
                <Select
                  name="specialization"
                  options={optionsSpecialization}
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

export default PsychologistData;
