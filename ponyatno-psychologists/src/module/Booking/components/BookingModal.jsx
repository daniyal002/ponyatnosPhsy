import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSetBooking } from '../hook/useSetBooking';
import { useGetProfileById } from '../../ProfilePsychologist/hook/useGetProfileById';
import Select from 'react-select';
import { socialOptions } from '../../../helper/listOptions';

const BookingModal = ({
  isOpen,
  onClose,
  startTime,
  endTime,
  dayOfWeek,
  day,
  psychologistProfileId,
  firstName,
  lastName,
}) => {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const { data } = useGetProfileById();

  const { mutate, err } = useSetBooking();

  const [socialNetwork, setSocialNetwork] = useState('');
  const [nicknameOrNumber, setNicknameOrNumber] = useState('');

  const handleSocialNetwork = (e) => {
    setSocialNetwork(e.value);
  };

  const handleNicknameOrNumber = (e) => {
    setNicknameOrNumber(e.target.value);
  };

  const submitHandler = (body) => {
    console.log(startTime);
    const combinedString = `${socialNetwork}: ${nicknameOrNumber}`;

    const updateBody = {
      ...body,
      userId: data.userId,
      startTime: startTime + ':00',
      endTime: endTime + ':00',
      bookingDayOfWeek: dayOfWeek,
      bookingDay: day + 'T17:00:38.725Z',
      psychologistProfileId: psychologistProfileId,
      BookingPsychologistName: firstName,
      BookingPsychologistLastName: lastName,
      communicationMethod: combinedString,
    };
    mutate(updateBody);
    console.log(updateBody);
    // onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-40"
          onClick={onClose}
        >
          <div
            className="flex justify-center max-h-[100vh] "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="w-5 h-5 absolute top-2 right-2 p-2 text-green-pon rounded-full bg-white hover:bg-[#0da47c;] hover:text-white duration-300"
              onClick={onClose}
            >
              X
            </button>
            <div className="bg-white border-2 border-green-pon p-4 w-full  rounded-lg ">
              <form onSubmit={handleSubmit(submitHandler)}>
                {/* Добавьте поля формы и используйте react-hook-form */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Имя
                  </label>
                  <Controller
                    name="bookingClientName"
                    control={control}
                    shouldValidate={true}
                    rules={{ required: 'Имя обязательно' }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="input-text"
                        placeholder="Введите ваше имя"
                        defaultValue={data.firstName}
                      />
                    )}
                  />
                  {errors.bookingClientName && (
                    <span className="text-red-500">
                      {errors.bookingClientName.message}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Фамилия
                  </label>
                  <Controller
                    name="bookingClientLastName"
                    control={control}
                    shouldValidate={true}
                    rules={{ required: 'Фамилия обязательно' }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="input-text"
                        placeholder="Введите вашу фамилию"
                        defaultValue={data.lastName}
                      />
                    )}
                  />
                  {errors.bookingClientLastName && (
                    <span className="text-red-500">
                      {errors.bookingClientLastName.message}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Телефон
                  </label>
                  <Controller
                    name="bookingClientPhone"
                    control={control}
                    shouldValidate={true}
                    rules={{ required: 'Телефон обязательно' }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="number"
                        className="input-text"
                        placeholder="Введите ваш телефон"
                        defaultValue={data.phone}
                      />
                    )}
                  />
                  {errors.bookingClientPhone && (
                    <span className="text-red-500">
                      {errors.bookingClientPhone.message}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Способ связи
                  </label>
                  <div className="flex items-center">
                    <Select
                      options={socialOptions}
                      isSearchable={false}
                      defaultValue={socialOptions[0]}
                      onChange={handleSocialNetwork}
                    />
                    <input
                      type="text"
                      onChange={handleNicknameOrNumber}
                      placeholder="Введите ник или номер"
                      className="input-text ml-2"
                    />
                  </div>
                  {errors.communicationMethod && (
                    <span className="text-red-500">
                      {errors.communicationMethod.message}
                    </span>
                  )}
                </div>
                {/* Добавьте остальные поля формы по аналогии */}

                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="bg-white text-green-pon border-2 border-green-pon py-2 px-4 rounded hover:bg-green-pon hover:text-white duration-700 "
                  >
                    Забронировать
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

export default BookingModal;
