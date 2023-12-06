import { useQuery } from "@tanstack/react-query";
import { getBookingList } from "../services/GetBookingList.service";
import useTokenStore from "../../../store/store";

export const useGetBookingList = () => {
  const token = useTokenStore((state) => state.token);

  const { data, isError, isLoading } = useQuery(["useGetBookingList"], () =>
    getBookingList(token)
  );
  return { data, isError, isLoading };
};
