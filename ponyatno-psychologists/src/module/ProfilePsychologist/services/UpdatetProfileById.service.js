import axios from 'axios';
import useTokenStore from '../../../store/store';

const UpdatetProfileById = async (body) => {
  const { token } = useTokenStore();

  return axios
    .post('http://212.118.52.175:8080/api/Profile/UpdateProfile', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export default UpdatetProfileById;
