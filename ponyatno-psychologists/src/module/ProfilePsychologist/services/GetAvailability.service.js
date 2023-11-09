import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
axios.defaults.baseURL = "http://212.118.52.175:8080";

const GetAvailability = async () => {
  return axios
    .get(
      "/api/PsychologistAvailability/GetAllAvailability",

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data.$values);
    });
};

export { GetAvailability };
