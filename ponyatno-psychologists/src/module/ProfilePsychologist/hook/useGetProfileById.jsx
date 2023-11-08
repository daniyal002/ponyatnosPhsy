import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProfileById } from "../services/GetProfileById.service";

export const useGetProfileById = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery(["useGetProfileById"], () =>
    getProfileById()
  );
  return { data, isError, isLoading };
};
