import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SetBooking } from "../service/SetBooking.servive";

export const useSetBooking = () => {
  const [error, setError] = useState();

  const { mutate } = useMutation(
    ["useSetBooking"],
    (body) => SetBooking(body),
    {
      onSuccess: () => {
        setError();
      },
      onError: (error) => {
        setError(error.response?.data?.message);
      },
    }
  );
  return { mutate, error };
};
