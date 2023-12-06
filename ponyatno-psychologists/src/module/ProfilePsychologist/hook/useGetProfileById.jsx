import { useQuery } from "@tanstack/react-query";
import { getProfileById } from "../services/GetProfileById.service";
import useTokenStore, { useRoleStore } from "../../../store/store";

export const useGetProfileById = () => {
  const token = useTokenStore((state) => state.token);
  const setRole = useRoleStore((state) => state.setRole);

  const { data, isError, isLoading } = useQuery(
    ["useGetProfileById"],
    () => getProfileById(token),
    {
      onSuccess: (data) => {
        setRole(data.userRole);
      },
    }
  );
  return { data, isError, isLoading };
};
