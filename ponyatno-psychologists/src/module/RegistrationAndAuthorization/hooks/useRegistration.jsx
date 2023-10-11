import { useMutation } from "@tanstack/react-query";
import { reg } from "../services/Registration.service";
import { useState } from "react";

export const useRegistration = () => {
  const [error, setError] = useState("");
  const { mutate } = useMutation(["Registration"], (body) => reg(body), {
    onError: (error) => {
      setError(error);
    },
  });
  return { mutate, error };
};
