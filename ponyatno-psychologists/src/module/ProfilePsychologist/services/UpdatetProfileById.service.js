import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
axios.defaults.baseURL = "http://212.118.52.175:8080";

const UpdatetProfileById = async (body) => {
  return axios
    .post("/api/Profile/UpdateProfile", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export { UpdatetProfileById };
