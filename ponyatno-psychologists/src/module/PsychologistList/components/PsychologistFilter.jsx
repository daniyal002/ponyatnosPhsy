import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PsychologistFilter = ({ setFilter, openFilter, setOpenFilter }) => {
  const { register, handleSubmit } = useForm();

  const [selectSpecialization, setSelectSpecialization] = useState([]);
  const [selected, setSelected] = useState([]);

  const [selectGender, setSelectGender] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const [range, setRange] = useState({
    min: 0,
    max: 100,
  });

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

  const optionsGender = [
    { value: "Все", label: "Все" },
    { value: "Мужской", label: "Мужской" },
    { value: "Женский", label: "Женский" },
  ];

  const handleSelectGender = (selectedOptions) => {
    setSelectedGender(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelectGender(selectedValues);
  };
  const onSubmit = (data) => {
    // Вызываем колбэк с данными фильтрации
    const updateData = {
      ...data,
      gender: selectGender,
      specialization: selectSpecialization,
      age: range,
    };
    setFilter(updateData);
    closeModal();
  };

  const closeModal = () => {
    setOpenFilter(false);
  };

  return (
    <>
      {openFilter && (
        <div
          className="  fixed top-10 left-10  flex items-center justify-center "
          onClick={closeModal}
        >
          <div
            className="flex justify-center max-h-[100vh] "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="w-5 h-5 absolute top-2 right-2 p-2 text-green-pon rounded-full bg-white hover:bg-[#0da47c;] hover:text-white duration-300"
              onClick={closeModal}
            >
              X
            </button>

            <div className="bg-white border-2 border-green-pon p-4 rounded-lg w-[400px]">
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
                    options={options}
                    isMulti
                    onChange={handleSelectSpecialization}
                    value={selected}
                    placeholder="Специализация"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Применить фильтр
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PsychologistFilter;
