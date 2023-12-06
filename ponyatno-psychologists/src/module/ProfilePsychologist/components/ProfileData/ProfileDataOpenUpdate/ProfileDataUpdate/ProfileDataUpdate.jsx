import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetProfileById } from "../../../../hook/useGetProfileById";
import { useUpdatetProfileById } from "../../../../hook/useUpdatetProfileById";

const ProfileDataUpdate = ({ isModalOpen, setModalOpen, role }) => {
  const { data } = useGetProfileById();
  const { mutate, error } = useUpdatetProfileById();

  const { handleSubmit, register } = useForm();
  const updateProfile = (body) => {
    let updateBody = {};
    if (role === "User") {
      updateBody = {
        ...body,
        aboutMe: "",
        breakDuration: "",
        educationPlace: [],
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
    } else if (role === "Psychologists") {
      updateBody = {
        ...body,
        specialization: data.specialization,
        psychologicalApproach: data.psychologicalApproach,
        Gender: data.gender,
        WorkHours: "",
        dateOfBirth: body.dateOfBirth + "T00:00:00.000Z",
        educationPlace: data.educationPlace,
        breakDuration: data.breakDuration,
        psychologistId: data.psychologistId,
        psychologistProfiles: data.psychologistProfiles,
        sessionDuration: data.sessionDuration,
        sessionFeedback: data.sessionFeedback,
        sessionPrice: data.sessionPrice,
        timeBeforeBooking: data.timeBeforeBooking,
        yearOfGraduation: data.yearOfGraduation,
        yearsOfExperience: data.yearsOfExperience,
      };
    }

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
