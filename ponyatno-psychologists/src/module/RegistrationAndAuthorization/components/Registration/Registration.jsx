import React from 'react';
import { useForm } from 'react-hook-form';
import { reg } from '../../services/Registration.service';
import { useRegistration } from '../../hooks/useRegistration';

const Registration = () => {
  const { register, handleSubmit } = useForm();
  const { mutate, error } = useRegistration();

  const registration = (data) => {
    const body = { ...data, DateOfBirth: '2023-10-10T20:37:07.478Z' };
    mutate(body);
    setTimeout(() => {
      console.log(error);
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(registration)}>
        <input type="text" {...register('RegisterLogin')} placeholder="Login" />
        <input
          type="email"
          {...register('RegisterEmail')}
          placeholder="Email"
        />
        <input
          type="text"
          {...register('RegisterFirstName')}
          placeholder="Firstname"
        />
        <input
          type="text"
          {...register('RegisterLastName')}
          placeholder="LastName"
        />
        {/* <input type="datetime-local" {...register('DateOfBirth')} /> */}

        <input type="radio" value="Мужчина" id="male" {...register('Gender')} />
        <label htmlFor="male">Мужчина</label>

        <input
          type="radio"
          value="Женщина"
          id="female"
          {...register('Gender')}
        />
        <label htmlFor="female">Женщина</label>

        <input
          type="radio"
          value="Psychologists"
          id="Psychologists"
          {...register('userRole')}
        />
        <label htmlFor="Psychologists">Психолог</label>

        <input type="radio" value="User" id="User" {...register('userRole')} />
        <label htmlFor="User">Клиент</label>

        <input
          type="password"
          {...register('RegisterPassword')}
          placeholder="Password"
        />
        <button type="submit">Зарегистрироваться</button>
        {error}
      </form>
    </div>
  );
};

export default Registration;
