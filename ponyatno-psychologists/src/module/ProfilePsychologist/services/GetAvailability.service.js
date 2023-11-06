import axios from 'axios';
import useTokenStore from '../../../store/store';

const GetAvailability = async () => {
  const { token } = useTokenStore();

  return axios
    .get(
      'http://212.118.52.175:8080/api/PsychologistAvailability/GetAllAvailability',

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    });
};

export default GetAvailability;
