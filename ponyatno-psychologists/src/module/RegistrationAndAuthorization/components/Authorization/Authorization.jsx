import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthorization } from '../../hooks/useAuthorization';

const Authorization = () => {
  const { register, handleSubmit } = useForm();
  const { mutate, error } = useAuthorization();

  const authorization = (data) => {
    mutate(data);
    setTimeout(() => {
      console.log(error);
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(authorization)}>
        <input type="text" {...register('LoginName')} placeholder="Login" />
        <input type="email" {...register('LoginEmail')} placeholder="Email" />

        <input
          type="password"
          {...register('LoginPassword')}
          placeholder="Password"
        />
        <button type="submit">Войти</button>
        {error}
      </form>
    </div>
  );
};

export default Authorization;
