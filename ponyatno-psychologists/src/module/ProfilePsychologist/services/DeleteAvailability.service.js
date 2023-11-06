import axios from 'axios';
import useTokenStore from '../../../store/store';

const DeleteAvailability = async (body) => {
  const { token } = useTokenStore();

  return axios
    .delete(
      `http://212.118.52.175:8080/api/PsychologistAvailability/DeleteAvailability/${body}`,

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

export default DeleteAvailability;
