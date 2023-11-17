import { useMutation } from "@tanstack/react-query";
import reg from "../services/Registration.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useRegistration = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const { mutate } = useMutation(["Registration"], (body) => reg(body), {
    onSuccess: () => {
      navigate("/auth/login");
    },
    onError: (error) => {
      setError(error.response?.data?.message);
    },
  });
  return { mutate, error };
};
