import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetBooking } from "../hook/useSetBooking";
import { useGetProfileById } from "../../ProfilePsychologist/hook/useGetProfileById";
import Select from "react-select";
import { socialOptions } from "../../../helper/listOptions";
import useTokenStore from "../../../store/store";
import { useNavigate } from "react-router-dom";
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
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { data } = useGetProfileById();
  const token = useTokenStore((state) => state.token);

  const { mutate, err, isSuccess } = useSetBooking();

  const [socialNetwork, setSocialNetwork] = useState("");
  const [nicknameOrNumber, setNicknameOrNumber] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSocialNetwork = (e) => {
    setSocialNetwork(e.value);
  };

  const handleNicknameOrNumber = (e) => {
    setNicknameOrNumber(e.target.value);
  };

  const submitHandler = (body) => {
    const combinedString = `${socialNetwork}: ${nicknameOrNumber}`;

    const updateBody = {
      ...body,
      userId: data.userId,
      startTime: startTime + ":00",
      endTime: endTime + ":00",
      bookingDayOfWeek: dayOfWeek,
      bookingDay: day + "T17:00:38.725Z",
      psychologistProfileId: psychologistProfileId,
      BookingPsychologistName: firstName,
      BookingPsychologistLastName: lastName,
      communicationMethod: combinedString,
    };
    mutate(updateBody);
    if (isSuccess) {
      setSuccess(true);
    }
    setTimeout(() => {
      onClose();
      setSuccess(false);
    }, 2000);
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
              {token ? (
                !success ? (
                  <form onSubmit={handleSubmit(submitHandler)}>
                    {/* Добавьте поля формы и используйте react-hook-form */}
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        className="input-text"
                        placeholder="Введите ваше имя"
                        {...register("bookingClientName")}
                        defaultValue={data.firstName}
                        required={true}
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
                      <input
                        type="text"
                        className="input-text"
                        placeholder="Введите вашу фамилию"
                        {...register("bookingClientLastName")}
                        defaultValue={data.lastName}
                        required={true}
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

                      <input
                        type="number"
                        className="input-text"
                        placeholder="Введите ваш телефон"
                        {...register("bookingClientPhone")}
                        defaultValue={data.phone}
                        required={true}
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
                ) : (
                  "Бронирование успешно завершено перейдите личный кабинет для просмотра всех ваших броней"
                )
              ) : (
                <div className="mt-6 text-center">
                  <p className="block text-gray-700 text-sm font-bold mb-2">
                    Вы должны быть авторизованы для Бронирования сеанса
                  </p>
                  <button
                    onClick={() => {
                      navigate("/auth");
                    }}
                    className="bg-white text-green-pon border-2 border-green-pon py-2 px-4 rounded hover:bg-green-pon hover:text-white duration-700 "
                  >
                    Регистрация/Вход
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
