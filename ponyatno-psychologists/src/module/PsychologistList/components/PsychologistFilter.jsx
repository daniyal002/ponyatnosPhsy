import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import {
  optionsGender,
  optionsPsychologicalApproach,
  optionsSpecialization,
} from "../../../helper/listOptions";
import useQuizStore from "../../Quiz/quizStore";

const PsychologistFilter = ({ setFilter, openFilter, setOpenFilter }) => {
  const { register, handleSubmit } = useForm();

  const { clearAnswers } = useQuizStore();

  const [selectSpecialization, setSelectSpecialization] = useState([]);
  const [selected, setSelected] = useState([]);

  const [selectPsychologicalApproach, setSelectPsychologicalApproach] =
    useState([]);
  const [selectedPsychologicalApproach, setSelectedPsychologicalApproach] =
    useState([]);

  const [selectGender, setSelectGender] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const [range, setRange] = useState({
    min: 0,
    max: 100,
  });

  const handleSelectSpecialization = (selectedOptions) => {
    setSelected(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelectSpecialization(selectedValues);
  };

  const handleSelectPsychologicalApproach = (selectedOptions) => {
    setSelectedPsychologicalApproach(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelectPsychologicalApproach(selectedValues);
  };

  const handleSelectGender = (selectedOptions) => {
    setSelectedGender(selectedOptions);
    const selectedValues = selectedOptions.value;
    setSelectGender(selectedValues);
  };
  const clearFilter = () => {
    setSelectSpecialization([]);
    setSelected([]);
    setSelectPsychologicalApproach([]);
    setSelectedPsychologicalApproach([]);
    setSelectGender("");
    setSelectedGender("Все");
    setRange({
      min: 0,
      max: 100,
    });
    const updateData = {
      gender: selectGender,
      specialization: selectSpecialization,
      age: range,
      psychologicalApproach: selectPsychologicalApproach,
    };
    setFilter(updateData);
  };
  const onSubmit = (data) => {
    // Вызываем колбэк с данными фильтрации
    clearAnswers();

    const updateData = {
      ...data,
      gender: selectGender,
      specialization: selectSpecialization,
      age: range,
      psychologicalApproach: selectPsychologicalApproach,
    };
    setFilter(updateData);
    if (window.innerWidth < 1024) {
      closeModal();
    }
    console.log("updateData", updateData);
  };

  const closeModal = () => {
    setOpenFilter(false);
  };

  return (
    <>
      {openFilter && (
        <div
          className="  fixed  left-0 flex p-7 items-start justify-center lg:w-[25%] lg:h-full w-full h-full  lg:bg-transparent bg-gray-800 bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="flex justify-center max-h-[100vh] relative "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className=" w-2 h-1 absolute top-0.1 right-1 p-2 text-green-pon"
              onClick={closeModal}
            >
              X
            </button>

            <div className="bg-white border-2 border-green-pon p-4 rounded-lg xl:w-[320px] lg:w-[180px]">
              <h4 className="text-[32px] text-center">Фильтры</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-y-2 mb-4">
                  <label
                    className="text-green-pon font-semibold"
                    htmlFor="gender"
                  >
                    Пол
                  </label>
                  <Select
                    name="gender"
                    options={optionsGender}
                    onChange={handleSelectGender}
                    value={selectedGender}
                    placeholder="Пол"
                  />
                </div>

                <div className="flex flex-col gap-y-5 mb-4">
                  <label
                    className=" text-green-pon font-semibold"
                    htmlFor="age"
                  >
                    Возраст
                  </label>
                  <div className="flex items-center">
                    <InputRange
                      maxValue={100}
                      minValue={0}
                      name="age"
                      value={range}
                      onChange={(value) => setRange(value)}
                      onChangeComplete={(value) => console.log(value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-2 mb-4 ">
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
                  />
                </div>

                <div className="flex flex-col gap-y-2 mb-4 ">
                  <label
                    htmlFor="Approach"
                    className="text-green-pon font-semibold"
                  >
                    Подход
                  </label>
                  <Select
                    name="Approach"
                    options={optionsPsychologicalApproach}
                    isMulti
                    onChange={handleSelectPsychologicalApproach}
                    value={selectedPsychologicalApproach}
                    placeholder="Подход"
                  />
                </div>

                <div className="flex flex-col justify-center gap-y-3">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Применить фильтры
                  </button>
                  <button
                    type="button"
                    onClick={clearFilter}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Очистить фильтры
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PsychologistFilter;
