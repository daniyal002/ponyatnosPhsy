import axios from "axios";

axios.defaults.baseURL = "http://212.118.52.175:8080";

const SetAvailability = async (body,token) => {

  return axios
    .post("/api/PsychologistAvailability/SetAvailability", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export { SetAvailability };
