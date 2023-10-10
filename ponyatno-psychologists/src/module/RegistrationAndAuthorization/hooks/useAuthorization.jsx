import { useMutation } from '@tanstack/react-query';
import { auth } from '../services/Authorization.service';

export const useAuthorization = () => {
  const { mutate, error } = useMutation(['Registration'], (body) => auth(body));
  return { mutate, error };
};
