import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetProfileById } from '../../../hook/useGetProfileById';
import { useUpdatetProfileById } from '../../../hook/useUpdatetProfileById';

const ProfileDataUpdate = ({ isModalOpen, setModalOpen }) => {
  const { data } = useGetProfileById();
  const { mutate, error } = useUpdatetProfileById();
  const [selectedGender, setSelectedGender] = useState('male');
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const { register, handleSubmit } = useForm();
  const updateProfile = (body) => {
    mutate(body);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="flex justify-center items-center w-1/2 min-h-screen">
            <form
              onSubmit={handleSubmit(updateProfile)}
              className="flex flex-col gap-y-8"
            >
              <div className="flex gap-x-8">
                <input
                  type="text"
                  placeholder="Имя"
                  className="input-text"
                  defaultValue={data.firstName}
                  {...register('firstName')}
                />
                <input
                  type="text"
                  placeholder="Фамилия"
                  className="input-text"
                  defaultValue={data.lastName}
                  {...register('lastName')}
                />
              </div>

              <div className="flex gap-x-8">
                {/* <input
                  type="E-mail"
                  placeholder="E-mail"
                  className="input-text"
                  defaultValue={data.email}
                  {...register('email')}
                /> */}
                {/* <input
                  type="tel"
                  placeholder="Телефон"
                  className="input-text"
                  defaultValue={data.phoneNumber}
                  {...register('phoneNumber')}
                /> */}
                <label>Пол: </label>
                <div className="flex justify-between border-4  rounded-lg relative">
                  <div className="w-full">
                    <input
                      className="hidden p-3"
                      type="radio"
                      value="Мужчина"
                      id="male"
                      checked={selectedGender === 'male'}
                      onClick={() => handleGenderChange('male')}
                      {...register('gender')}
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
                      checked={selectedGender === 'female'}
                      onClick={() => handleGenderChange('female')}
                      {...register('gender')}
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
                      selectedGender === 'female'
                        ? 'transform translate-x-full duration-500 ease-linear'
                        : 'transform translate-x-0 duration-500 ease-linear'
                    }`}
                  >
                    {selectedGender === 'male' ? 'Мужчина' : 'Женщина'}
                  </span>
                </div>
              </div>

              <div className="flex gap-x-8">
                <input
                  type="date"
                  placeholder="Дата рождения"
                  className="input-text"
                  defaultValue={data.dateOfBirth.split('T')[0]}
                  {...register('dateOfBirth')}
                />
              </div>
              <button>Обновить профиль</button>
            </form>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDataUpdate;
