import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SetAvailability } from "../services/SetAvailability.service";
import useTokenStore from "../../../store/store";

export const useSetAvailability = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState();
  const token = useTokenStore((state) => state.token);

  const refreshData = () => {
    queryClient.invalidateQueries("useGetAvailability");
  };

  const { mutate } = useMutation(
    ["useSetAvailability"],
    (body) => SetAvailability(body, token),
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
