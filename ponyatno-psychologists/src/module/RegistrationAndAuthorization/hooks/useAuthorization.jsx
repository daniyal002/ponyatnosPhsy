import { useMutation, useQueryClient } from "@tanstack/react-query";
import auth from "../services/Authorization.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useTokenStore from "../../../store/store";

export const useAuthorization = () => {
  const queryClient = useQueryClient();

  const setToken = useTokenStore((state) => state.setToken);

  const [error, setError] = useState();

  const navigate = useNavigate();

  const refreshData = () => {
    queryClient.invalidateQueries("useGetProfileById");
  };

  const { mutate } = useMutation(["Authorization"], (body) => auth(body), {
    onSuccess: (data) => {
      refreshData();
      setToken(data.token);
      navigate("/profile");
      setError();
    },
    onError: (error) => {
      setError(error.response?.data?.message);
    },
  });
  return { mutate, error };
};
