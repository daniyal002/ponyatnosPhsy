import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfileById } from '../services/GetProfileById.service';

export const useGetProfileById = () => {
  const queryClient = useQueryClient();
  const { fetchData } = getProfileById();

  const { data } = useQuery({
    queryKey: ['useGetProfileById'],
    queryFn: fetchData,
  });
  return { data };
};
