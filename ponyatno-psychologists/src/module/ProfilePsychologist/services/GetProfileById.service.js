import axios from 'axios';
import useTokenStore from '../../../store/store';

const getProfileById = async () => {
  const { token } = useTokenStore();

  return axios
    .get('http://212.118.52.175:8080/api/Profile/GetProfile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export default getProfileById;
