import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SetAvailability } from "../services/SetAvailability.service";

export const useSetAvailability = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState();

  const refreshData = () => {
    queryClient.invalidateQueries("useGetAvailability");
  };

  const { mutate } = useMutation(
    ["useSetAvailability"],
    (body) => SetAvailability(body),
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
  return { mutate, error };
};
