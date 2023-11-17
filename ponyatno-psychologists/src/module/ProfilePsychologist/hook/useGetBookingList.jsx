import { useQuery } from "@tanstack/react-query";
import { getBookingList } from "../services/GetBookingList.service";

export const useGetBookingList = () => {
  const { data, isError, isLoading } = useQuery(["useGetBookingList"], () =>
    getBookingList()
  );
  return { data, isError, isLoading };
};
