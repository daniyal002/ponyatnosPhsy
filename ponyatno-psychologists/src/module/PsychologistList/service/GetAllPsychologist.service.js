import axios from "axios";

axios.defaults.baseURL = "http://212.118.52.175:8080";

const GetAllPsychologist = async () => {
  return await axios
    .get("/api/Profile/GetAllPsychologist", {})
    .then((response) => response.data.$values);
};

export { GetAllPsychologist };
