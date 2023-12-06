import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { DeleteAvailability } from "../services/DeleteAvailability.service";
import useTokenStore from "../../../store/store";

export const useDeleteAvailability = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState();
  const token = useTokenStore((state) => state.token);


  const refreshData = () => {
    queryClient.invalidateQueries("useGetAvailability");
  };

  const { mutate } = useMutation(
    ["useDeleteAvailability"],
    (body) => DeleteAvailability(body, token),
    {
      onSuccess: () => {
        setError();
        refreshData();
      },
      onError: (error) => {
        setError(error.response?.data?.message);
      },
    }
  );
  return { mutate, error };
};
