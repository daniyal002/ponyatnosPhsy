import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SetAvailability } from '../services/SetAvailability.service';
import { useState } from 'react';

export const useSetAvailability = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState();

  const refreshData = () => {
    queryClient.invalidateQueries('useGetAvailability');
  };

  const { mutate } = useMutation(
    ['useSetAvailability'],
    (body) => fetchData(body),
    {
      onSuccess: () => {
        refreshData();
        setError();
      },
      onError: (error) => {
        setError(error.response?.data?.message);
      },
    }
  );
  return { mutate, error };
};
