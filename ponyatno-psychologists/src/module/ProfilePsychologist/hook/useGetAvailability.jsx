import { useQuery } from "@tanstack/react-query";
import { GetAvailability } from "../services/GetAvailability.service";
import useTokenStore from "../../../store/store";

export const useGetAvailability = () => {
  const token = useTokenStore((state) => state.token);

  const { data, isError, isLoading } = useQuery(["useGetAvailability"], () =>
    GetAvailability(token)
  );
  console.log(data);
  return { data, isError, isLoading };
};
