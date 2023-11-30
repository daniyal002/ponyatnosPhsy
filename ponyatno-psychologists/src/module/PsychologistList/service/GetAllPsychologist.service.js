import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
axios.defaults.baseURL = "http://212.118.52.175:8080";

const GetAllPsychologist = async () => {
  console.log(token)
    return await axios
      .get("/api/Profile/GetAllPsychologist", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data.$values);
};

export { GetAllPsychologist };
