import axios from 'axios';
import useTokenStore from '../../../store/store';

const GetAllPsychologist = async () => {
  const { token } = useTokenStore();

  return axios
    .get('http://212.118.52.175:8080/api/Profile/GetAllPsychologist', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      response.data;
    });
};

export default GetAllPsychologist;
