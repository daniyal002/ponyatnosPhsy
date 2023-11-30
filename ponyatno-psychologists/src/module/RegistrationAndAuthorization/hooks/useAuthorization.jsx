import { useMutation } from "@tanstack/react-query";
import auth from "../services/Authorization.service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useTokenStore from "../../../store/store";

export const useAuthorization = () => {
  const { setToken, token } = useTokenStore();

  const [error, setError] = useState();

  const navigate = useNavigate();

  const { mutate } = useMutation(["Authorization"], (body) => auth(body), {
    onSuccess: (data) => {
      setToken(data.token);
      navigate("/allpsychologist");
      setError();
    },
    onError: (error) => {
      setError(error.response?.data?.message);
    },
  });
  return { mutate, error };
};
