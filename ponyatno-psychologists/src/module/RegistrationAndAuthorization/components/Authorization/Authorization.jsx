import React from "react";
import { useForm } from "react-hook-form";
import { useAuthorization } from "../../hooks/useAuthorization";

const Authorization = () => {
  const { register, handleSubmit } = useForm();
  const { mutate, error } = useAuthorization();

  const authorization = (data) => {
    mutate({ ...data, loginEmail: "" });
  };

  return (
    <div className="m-6">
      <form
        onSubmit={handleSubmit(authorization)}
        className="w-3/4 md:w-[30%] h-full bg-[#ebf3ef] mx-auto   p-5 flex flex-col gap-y-3 shadow-[#3a3a3a] shadow-2xl"
      >
        <h1 className="text-3xl text-green-pon">Вход</h1>

        <label htmlFor="LoginName">Логин: </label>
        <input
          type="text"
          {...register("LoginName")}
          className="input-text"
          placeholder="Введите ваш логин"
          required={true}
        />

        <label htmlFor="LoginPassword">Пароль: </label>
        <input
          type="password"
          {...register("LoginPassword")}
          className="input-text"
          placeholder="Введите ваш пароль"
          required={true}
        />
        <button
          type="submit"
          className="bg-green-pon p-3 rounded-lg text-white text-lg"
        >
          Войти
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

export default Authorization;
