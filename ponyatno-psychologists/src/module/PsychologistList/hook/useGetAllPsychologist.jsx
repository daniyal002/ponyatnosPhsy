import { useQuery } from "@tanstack/react-query";
import { GetAllPsychologist } from "../service/GetAllPsychologist.service";

export const useGetAllPsychologist = () => {
  const { data, isError, isLoading } = useQuery(["GetAllPsychologist"], () =>
    GetAllPsychologist()
  );
  console.log(data);
  return { data, isError, isLoading };
};
