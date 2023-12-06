import axios from "axios";

axios.defaults.baseURL = "http://212.118.52.175:8080";

const DeleteAvailability = async (body, token) => {
  return axios
    .delete(
      `/api/PsychologistAvailability/DeleteAvailability/${body}`,

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

export { DeleteAvailability };
