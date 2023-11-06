import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdatetProfileById } from '../services/UpdatetProfileById.service';
import { useState } from 'react';

export const useUpdatetProfileById = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState();

  const refreshData = () => {
    queryClient.invalidateQueries('useGetProfileById');
  };

  const { mutate } = useMutation(
    ['useUpdatetProfileById'],
    (body) => UpdatetProfileById(body),
    {
      onSuccess: () => {
        setError();
        refreshData();
      },
      onError: (error) => {
        setError(error.response?.data?.message);
      },
    }
  );
  return { mutate, error };
};
