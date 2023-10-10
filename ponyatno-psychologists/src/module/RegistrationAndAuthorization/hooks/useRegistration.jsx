import { useMutation } from '@tanstack/react-query';
import { reg } from '../services/Registration.service';

export const useRegistration = () => {
  const { mutate, error } = useMutation(['Registration'], (body) => reg(body));
  return { mutate, error };
};
