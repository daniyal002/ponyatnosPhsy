import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useTokenStore from "../../../store/store";
import { SetUserMainPhoto } from "../services/SetUserMainPhoto.service";

export const useSetUserMainPhoto = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState();
  const token = useTokenStore((state) => state.token);

  const refreshData = () => {
    queryClient.invalidateQueries("useSetUserMainPhoto");
  };

  const { mutate } = useMutation(
    ["useSetUserMainPhoto"],
    (body) => SetUserMainPhoto(body, token),
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
