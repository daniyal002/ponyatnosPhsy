import { useMutation } from "@tanstack/react-query";
import { auth } from "../services/Authorization.service";
import { useState } from "react";

export const useAuthorization = () => {
  const [error, setError] = useState("");

  const { mutate } = useMutation(["Registration"], (body) => auth(body), {
    onError: (error) => {
      setError(error);
    },
  });
  return { mutate, error };
};
