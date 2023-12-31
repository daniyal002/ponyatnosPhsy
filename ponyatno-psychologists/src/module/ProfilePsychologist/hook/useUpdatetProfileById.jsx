import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { UpdatetProfileById } from "../services/UpdatetProfileById.service";
import useTokenStore from "../../../store/store";

export const useUpdatetProfileById = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState();
  const token = useTokenStore((state) => state.token);

  const refreshData = () => {
    queryClient.invalidateQueries("useGetProfileById");
  };

  const { mutate } = useMutation(
    ["useUpdatetProfileById"],
    (body) => UpdatetProfileById(body, token),
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
