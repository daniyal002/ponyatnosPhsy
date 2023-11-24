import { create } from "zustand";

const useQuizStore = create((set) => ({
  answers: {
    question1: "",
    gender: "",
    psychologicalApproach: "",
    specialization: [], // Массив для question4
  },
  setAnswer: (questionNumber, answer) =>
    set((state) => {
      if (
        questionNumber === 4 &&
        !state.answers.specialization.includes(answer)
      ) {
        return {
          answers: {
            ...state.answers,
            specialization: [...state.answers.specialization, answer],
          },
        };
      }

      // Обновляем ответы для gender, psychologicalApproach и question1
      if (questionNumber === 2) {
        return {
          answers: {
            ...state.answers,
            gender: answer,
          },
        };
      }

      if (
        questionNumber === 3 &&
        !state.answers.psychologicalApproach.includes(answer)
      ) {
        return {
          answers: {
            ...state.answers,
            psychologicalApproach: [
              ...state.answers.psychologicalApproach,
              answer,
            ],
          },
        };
      }

      if (questionNumber === 1) {
        return {
          answers: {
            ...state.answers,
            question1: answer,
          },
        };
      }

      return state;
    }),
  clearAnswers: () =>
    set({
      answers: {
        question1: "",
        gender: "",
        psychologicalApproach: "",
        specialization: [],
      },
    }),
}));

export default useQuizStore;
