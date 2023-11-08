import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetAvailability } from "../services/GetAvailability.service";

export const useGetAvailability = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery(["useGetAvailability"], () =>
    GetAvailability()
  );
  console.log(data);
  return { data, isError, isLoading };
};
