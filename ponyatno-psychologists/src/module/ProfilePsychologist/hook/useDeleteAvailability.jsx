import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteAvailability } from '../services/DeleteAvailability.service';
import { useState } from 'react';

export const useDeleteAvailability = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState();

  const refreshData = () => {
    queryClient.invalidateQueries('useGetAvailability');
  };

  const { mutate } = useMutation(
    ['useDeleteAvailability'],
    (body) => DeleteAvailability(body),
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
