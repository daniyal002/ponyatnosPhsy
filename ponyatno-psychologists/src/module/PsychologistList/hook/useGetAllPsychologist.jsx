import { useQuery } from "@tanstack/react-query";
import { GetAllPsychologist } from "../service/GetAllPsychologist.service";
import { useNavigate } from "react-router-dom";

export const useGetAllPsychologist = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery(
    ["GetAllPsychologist"],
    () => GetAllPsychologist(),
    {
      onError: () => {
        navigate("/auth/login");
      },
    }
  );
  return { data, isError, isLoading };
};
