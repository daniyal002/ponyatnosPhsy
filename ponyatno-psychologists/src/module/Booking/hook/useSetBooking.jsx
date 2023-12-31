import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SetBooking } from "../service/SetBooking.servive";
import useTokenStore from "../../../store/store";

export const useSetBooking = () => {
  const queryClient = useQueryClient();

  const [error, setError] = useState();
  const token = useTokenStore((state) => state.token);

  const refreshData = () => {
    queryClient.invalidateQueries("GetAllPsychologist");
  };

  const { mutate, isSuccess } = useMutation(
    ["useSetBooking"],
    (body) => SetBooking(body, token),
    {
      onSuccess: () => {
        refreshData();
        setError();
      },
      onError: (error) => {
        setError(error.response?.data?.message);
      },
    }
  );
  return { mutate, error, isSuccess };
};
