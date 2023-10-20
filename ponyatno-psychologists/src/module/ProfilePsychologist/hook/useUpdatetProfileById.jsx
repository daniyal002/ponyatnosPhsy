import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdatetProfileById } from '../services/UpdatetProfileById.service';

export const useUpdatetProfileById = () => {
  const queryClient = useQueryClient();
  const { fetchData, error } = UpdatetProfileById();

  const { mutate } = useMutation(['useUpdatetProfileById'], (body) =>
    fetchData(body)
  );
  return { mutate, error };
};
