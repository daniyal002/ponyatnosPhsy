import React from "react";

const Avatar = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 w-full md:w-1/2">
      <div className="flex justify-center">
        <img
          src="https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava1.jpg"
          alt="avatar"
          className="w-1/3 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        {/* <button className="bg-white p-4 rounded-lg text-green-pon uppercase font-bold hover:bg-[#0da47c;] hover:text-white duration-700">
          Загрузить фото
        </button>
        <button className="bg-white p-4 rounded-lg text-green-pon uppercase font-bold hover:bg-red-700 hover:text-white duration-700">
          Удалить фото
        </button> */}
      </div>
    </div>
  );
};

export default Avatar;
