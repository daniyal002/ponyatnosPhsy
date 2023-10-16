import React from "react";
import { useForm } from "react-hook-form";

const ProfileData = () => {
  const { register, handleSubmit } = useForm();
  const updateProfile = (body) => {
    console.log(body);
  };

  return (
    <div>
      <form onChange={handleSubmit(updateProfile)}>
        <input type="tel" placeholder="Телефон" />
        <input type="textarea" placeholder="О себе" />
        <input type="textarea" placeholder="Что получит пациент после сеанса" />
        <input
          type="number"
          placeholder="Сколько лет вы работаете как психолог"
        />
        <input type="text" placeholder="Образование" />
        <input type="text" placeholder="Дипломы и сертификаты" />
      </form>
    </div>
  );
};

export default ProfileData;
