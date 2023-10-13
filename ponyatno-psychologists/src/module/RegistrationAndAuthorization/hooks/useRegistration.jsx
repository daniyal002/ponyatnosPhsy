import { useMutation } from "@tanstack/react-query";
import { reg } from "../services/Registration.service";

export const useRegistration = () => {
  const { fetchData, error } = reg();

  const { mutate } = useMutation(["registration"], (body) => fetchData(body), {
    onSuccess: () => {
      console.log("s");
    },
  });

  return { mutate, error };
};
