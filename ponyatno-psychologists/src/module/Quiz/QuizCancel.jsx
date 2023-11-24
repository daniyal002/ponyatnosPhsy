import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCancel = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 bg-white w-[25%] mx-auto rounded-lg mt-2">
      <div className="flex gap-x-5">
        <p className="flex justify-center text-green-pon text-[1em]   max-w-[468px] bg-white mx-auto rounded-lg mt-5 mb-3 p-3 font-semibold border-2 border-green-pon">
          К сожалению, мы не можем продолжить подбор без согласия родителя или
          законного представителя
        </p>
      </div>
      <div className="flex  justify-center gap-x-2  h-[70vh] items-end w-full">
        <button
          onClick={() => navigate("/allpsychologist")}
          className="border-[2px] border-green-pon p-3 rounded-lg  text-green-pon  hover:bg-green-pon hover:text-white duration-500 font-semibold w-1/3"
        >
          Вернутся на главную
        </button>
      </div>
    </div>
  );
};

export default QuizCancel;
