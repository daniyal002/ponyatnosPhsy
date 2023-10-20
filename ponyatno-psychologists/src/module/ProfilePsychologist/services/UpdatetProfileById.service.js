import axios from 'axios';
import { useState } from 'react';
import useTokenStore from '../../../store/store';

export const UpdatetProfileById = () => {
  const [error, setError] = useState();
  const { token } = useTokenStore();

  const fetchData = (body) =>
    axios
      .post('http://212.118.52.175:8080/api/Profile/UpdateProfile', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data.message);
      });

  return { fetchData, error };
};
