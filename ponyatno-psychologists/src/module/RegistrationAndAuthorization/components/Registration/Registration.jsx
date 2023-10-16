import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRegistration } from "../../hooks/useRegistration";
import { isPasswordValid } from "../../help/ValidatePassword";

const Registration = ({ role }) => {
  const [selectedGender, setSelectedGender] = useState("male");
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { mutate, error } = useRegistration();

  const registration = (data) => {
    const body = { ...data, userRole: "User" };
    mutate(body);
  };

  return (
    <div className="m-6">
      <form
        onSubmit={handleSubmit(registration)}
        className="w-3/4 md:w-[30%] h-full bg-[#ebf3ef] mx-auto   p-5 flex flex-col gap-y-3 shadow-[#3a3a3a] shadow-2xl"
      >
        <h1 className="text-3xl text-green-pon">Регистрация</h1>
        <label htmlFor="RegisterLogin">Логин: </label>
        <input
          type="text"
          name="RegisterLogin"
          {...register("RegisterLogin")}
          placeholder="Придумайте Логин"
          className="input-text"
          required={true}
        />
        <label htmlFor="RegisterEmail">E-mail: </label>
        <input
          type="email"
          name="RegisterEmail"
          {...register("RegisterEmail")}
          placeholder="Ваш E-mail"
          className="input-text"
          required={true}
        />

        <label htmlFor="RegisterPassword">Пароль: </label>
        <Controller
          name="RegisterPassword"
          control={control}
          defaultValue=""
          rules={{ validate: isPasswordValid }}
          render={({ field }) => (
            <input
              {...field}
              type="password"
              placeholder="Придумайте Пароль"
              className="input-text"
            />
          )}
        />
        {errors.RegisterPassword && (
          <p className="text-red-600">{errors.RegisterPassword.message}</p>
        )}

        <label htmlFor="RegisterFirstName">Имя: </label>
        <input
          type="text"
          name="RegisterFirstName"
          {...register("RegisterFirstName")}
          placeholder="Ваше Имя"
          className="input-text"
          required={true}
        />

        <label htmlFor="RegisterLastName">Фамилия: </label>
        <input
          name="RegisterLastName"
          type="text"
          {...register("RegisterLastName")}
          placeholder="Ваша Фамилия"
          className="input-text"
          required={true}
        />

        <label htmlFor="DateOfBirth">Дата рождения: </label>
        <input
          type="date"
          name="DateOfBirth"
          {...register("DateOfBirth")}
          className="outline-none p-3"
          required={true}
        />

        <label>Пол: </label>
        <div className="flex justify-between border-4  rounded-lg relative">
          <div className="w-full">
            <input
              className="hidden p-3"
              type="radio"
              value="Мужчина"
              id="male"
              checked={selectedGender === "male"}
              onClick={() => handleGenderChange("male")}
              {...register("Gender")}
            />
            <label
              htmlFor="male"
              className="flex justify-center bg-white text-green-pon p-3"
            >
              Мужчина
            </label>
          </div>

          <div className="w-full">
            <input
              className="hidden p-3"
              type="radio"
              value="Женщина"
              id="female"
              checked={selectedGender === "female"}
              onClick={() => handleGenderChange("female")}
              {...register("Gender")}
            />
            <label
              htmlFor="female"
              className="flex justify-center bg-white text-green-pon p-3"
            >
              Женщина
            </label>
          </div>
          <span
            className={`absolute flex w-[50%] h-[100%] bg-green-pon text-white z-[1] rounded-t-sm transition top-0 left-0 justify-center items-center  ${
              selectedGender === "female"
                ? "transform translate-x-full duration-500 ease-linear"
                : "transform translate-x-0 duration-500 ease-linear"
            }`}
          >
            {selectedGender === "male" ? "Мужчина" : "Женщина"}
          </span>
        </div>

        <button
          type="submit"
          className="bg-green-pon p-3 rounded-lg text-white text-lg"
        >
          Зарегистрироваться
        </button>
        {error && (
          <p className="text-white p-3 rounded-lg text-xl bg-red-600 text-center">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Registration;
