import axios from "axios";

axios.defaults.baseURL = "http://212.118.52.175:8080";

const GetAvailability = async (token) => {
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
