import { useMutation } from "@tanstack/react-query";
import { auth } from "../services/Authorization.service";

export const useAuthorization = () => {
  const { fetchData, error } = auth();

  const { mutate } = useMutation(["Authorization"], (body) => fetchData(body));
  return { mutate, error };
};
