import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetProfileById } from "../../../../hook/useGetProfileById";
import { useUpdatetProfileById } from "../../../../hook/useUpdatetProfileById";
import Select from "react-select";

const EducationUpdate = ({ isModalOpen, setModalOpen }) => {
  const { data } = useGetProfileById();
  const { mutate, error } = useUpdatetProfileById();
  const [selectedType, setSelectedType] = useState(null);
  const [educationText, setEducationText] = useState("");

  const [education, setEducation] = useState([]);

  const addEducationPlace = () => {
    const combinedEducation = `${selectedType.value}: ${educationText}`;
    setEducation((prevE) => [...prevE, combinedEducation]);
    setSelectedType();
    setEducationText();
  };

  const handleEducationText = (e) => {
    setEducationText(e.target.value);
  };

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
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
      specialization: data.specialization,
      psychologicalApproach: data.psychologicalApproach,
      Gender: data.gender,
      WorkHours: "",
      educationPlace: education,
      yearOfGraduation: "",
      breakDuration: data.breakDuration,
      psychologistId: data.psychologistId,
      psychologistProfiles: data.psychologistProfiles,
      sessionDuration: data.sessionDuration,
      sessionFeedback: data.sessionFeedback,
      sessionPrice: data.sessionPrice,
      timeBeforeBooking: data.timeBeforeBooking,
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
                <Select
                  isMulti={false} // Только один выбор
                  options={[
                    { value: "Диплом", label: "Диплом" },
                    { value: "Сертификат", label: "Сертификат" },
                  ]}
                  onChange={(selectedOption) => {
                    handleTypeChange(selectedOption);
                  }}
                  placeholder="Образование..."
                />
                {selectedType && (
                  <div className="flex flex-col gap-y-2">
                    <input
                      placeholder="Место учебы"
                      onChange={handleEducationText}
                      value={educationText}
                      className="input-text mt-2 w-[80%] mx-auto"
                    />
                    <button
                      onClick={addEducationPlace}
                      className="mb-2 bg-white p-2 rounded-lg text-green-pon uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700  w-1/2 mx-auto"
                    >
                      +
                    </button>
                  </div>
                )}
                <div>
                  {education &&
                    education.map((item, index) => (
                      <p key={index} className="bg-white p-1 rounded-lg">
                        {item}
                      </p>
                    ))}
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

export default EducationUpdate;
