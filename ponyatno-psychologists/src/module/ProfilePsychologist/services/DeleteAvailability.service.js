import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
axios.defaults.baseURL = "http://212.118.52.175:8080";

const DeleteAvailability = async (body) => {
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
