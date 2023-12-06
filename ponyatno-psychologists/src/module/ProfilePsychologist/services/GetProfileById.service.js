import axios from "axios";

axios.defaults.baseURL = "http://212.118.52.175:8080";

const getProfileById = async (token) => {
  return await axios
    .get("/api/Profile/GetProfile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export { getProfileById };
