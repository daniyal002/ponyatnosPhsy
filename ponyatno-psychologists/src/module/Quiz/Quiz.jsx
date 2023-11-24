import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useQuizStore from "./quizStore";
import {
  optionsGender,
  optionsPsychologicalApproach,
  optionsSpecialization,
} from "../../helper/listOptions";
import { useNavigate } from "react-router-dom";

const QuizForm = ({ onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm();
  const { answers, setAnswer } = useQuizStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswerChange = (questionNumber, answer) => {
    console.log(answer);
    if (answer === "Я младше 18 лет") {
      navigate("/quizcancel");
    }
    setAnswer(questionNumber, answer);
    setValue(`question${questionNumber}`, answer);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Если достигли последнего вопроса, вызываем onSubmit
      submitForm(answers);
    }
  };

  const submitForm = (data) => {
    console.log("Form data:", data); // данные включают в себя ответы
    onSubmit(data);
    // navigate("/allpsychologist");
  };

  const questions = [
    "Здравствуйте! Я здесь, чтобы помочь вам в выборе психолога или терапевта. Готовы ответить на несколько вопросов? ",
    "Отлично!  Для начала мне нужно знать, можем ли мы продолжить подбор психолога. Уточните, пожалуйста, свой возраст",
    "Вам было бы комфортнее работать с психологом мужского пола или женского?",
    "Какова основная причина или цель поиска психолога?",
    "Отметьте, пожалуйста, темы, которые наиболее вас интересуют",
  ];

  return (
    <form onSubmit={handleSubmit(goToNextQuestion)}>
      <div className="p-3 bg-white w-[25%] mx-auto rounded-lg mt-2">
        <label className="flex justify-center text-green-pon text-[1em]   max-w-[468px] bg-white mx-auto rounded-lg mt-5 mb-3 p-3 font-semibold border-2 border-green-pon">
          {questions[currentQuestion]}
        </label>
        {currentQuestion === 0 && (
          <div className="flex  justify-center gap-x-2  h-[70vh] items-end">
            <button
              type="button"
              onClick={() => navigate("/allpsychologist")}
              className="border-[2px] border-green-pon p-3 rounded-lg  text-green-pon  hover:bg-green-pon hover:text-white duration-500 font-semibold w-1/3"
            >
              Нет
            </button>
            <button
              type="button"
              onClick={goToNextQuestion}
              className="border-[2px] border-green-pon p-3 rounded-lg  text-green-pon  hover:bg-green-pon hover:text-white duration-500 font-semibold w-1/3"
            >
              Да
            </button>
          </div>
        )}
        {currentQuestion === 1 && (
          <div className="flex flex-col justify-center items-start max-w-[468px] mx-auto">
            <div className="flex gap-x-5">
              <input
                type="radio"
                name="question1"
                value="Я младше 18 лет"
                id="question1"
                {...register("question1")}
                onChange={(e) => handleAnswerChange(1, e.target.value)}
              />
              <label
                htmlFor="question1"
                className="text-[#004e64] font-semibold text-[20px]"
              >
                Я младше 18 лет
              </label>
            </div>

            <div className="flex gap-x-5">
              <input
                type="radio"
                name="question1"
                value="Мне от 18 до 24 лет"
                id="question2"
                {...register("question2")}
                onChange={(e) => handleAnswerChange(1, e.target.value)}
              />
              <label
                htmlFor="question2"
                className="text-[#004e64] font-semibold text-[20px]"
              >
                Мне от 18 до 24 лет
              </label>
            </div>

            <div className="flex gap-x-5">
              <input
                type="radio"
                name="question1"
                value="Мне от 25 до 34 лет"
                id="question3"
                {...register("question1")}
                onChange={(e) => handleAnswerChange(1, e.target.value)}
              />
              <label
                htmlFor="question3"
                className="text-[#004e64] font-semibold text-[20px]"
              >
                Мне от 25 до 34 лет
              </label>
            </div>

            <div className="flex gap-x-5">
              <input
                type="radio"
                name="question1"
                value="Мне от 35 до 44 лет"
                id="question4"
                {...register("question1")}
                onChange={(e) => handleAnswerChange(1, e.target.value)}
              />
              <label
                htmlFor="question4"
                className="text-[#004e64] font-semibold text-[20px]"
              >
                Мне от 35 до 44 лет
              </label>
            </div>

            <div className="flex gap-x-5">
              <input
                type="radio"
                name="question1"
                value="Я старше 44 лет"
                id="question5"
                {...register("question1")}
                onChange={(e) => handleAnswerChange(1, e.target.value)}
              />
              <label
                htmlFor="question5"
                className="text-[#004e64] font-semibold text-[20px]"
              >
                Я старше 44 лет
              </label>
            </div>
          </div>
        )}
        {currentQuestion === 2 && (
          <div className="flex flex-col justify-center items-start max-w-[468px] mx-auto">
            {optionsGender.map((gender, index) => (
              <div key={index} className="flex gap-x-5">
                <input
                  type="radio"
                  id={`gender_${index}`}
                  value={gender.value}
                  {...register(`gender`)}
                  onChange={(e) => handleAnswerChange(2, e.target.value)}
                />
                <label
                  htmlFor={`gender_${index}`}
                  className="text-[#004e64] font-semibold text-[20px]"
                >
                  {gender.label}
                </label>
              </div>
            ))}
          </div>
        )}
        {currentQuestion === 3 && (
          <div className="flex flex-col justify-center items-start max-w-[468px] mx-auto">
            {optionsPsychologicalApproach.map((approach, index) => (
              <div key={index} className="flex gap-x-5">
                <input
                  type="radio"
                  id={`psychologicalApproach_${index}`}
                  value={approach.value}
                  {...register(`psychologicalApproach`)}
                  onChange={(e) => handleAnswerChange(3, e.target.value)}
                />
                <label
                  htmlFor={`psychologicalApproach_${index}`}
                  className="text-[#004e64] font-semibold text-[20px]"
                >
                  {approach.label}
                </label>
              </div>
            ))}
          </div>
        )}
        {currentQuestion === 4 && (
          <div className="flex flex-col justify-center items-start max-w-[468px] mx-auto">
            {optionsSpecialization.map((spec, index) => (
              <div key={index} className="flex gap-x-5">
                <input
                  type="checkbox"
                  name="specialization"
                  value={spec.value}
                  id={`specialization_${index}`}
                  {...register(`specialization_${index}`)}
                  onChange={(e) => handleAnswerChange(4, e.target.value)}
                />
                <label
                  htmlFor={`specialization_${index}`}
                  className="text-[#004e64] font-semibold text-[20px]"
                >
                  {spec.label}
                </label>
              </div>
            ))}
          </div>
        )}
        {currentQuestion > 0 && currentQuestion < questions.length - 1 && (
          <div className="flex  justify-center gap-x-2  h-[65vh] items-end">
            <button
              type="button"
              onClick={goToNextQuestion}
              className="border-[2px] border-green-pon p-3 rounded-lg  text-green-pon  hover:bg-green-pon hover:text-white duration-500 font-semibold w-1/3"
            >
              Пропустить
            </button>
            <button
              type="submit"
              className="border-[2px] border-green-pon p-3 rounded-lg  text-green-pon  hover:bg-green-pon hover:text-white duration-500 font-semibold w-1/3"
            >
              Далее
            </button>
          </div>
        )}
        {currentQuestion >= 4 && (
          <div className="flex  justify-center gap-x-2  h-[65vh] items-end">
            <button
              type="button"
              onClick={() => navigate("/allpsychologist")}
              className="border-[2px] border-green-pon p-3 rounded-lg  text-green-pon  hover:bg-green-pon hover:text-white duration-500 font-semibold w-1/3"
            >
              Подобрать психолога
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default QuizForm;
