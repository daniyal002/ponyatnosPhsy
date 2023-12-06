import axios from "axios";

axios.defaults.baseURL = "http://212.118.52.175:8080";

const UpdatetProfileById = async (body, token) => {
  return axios
    .post(
      "/api/Profile/UpdateProfile",
      { ...body, UserPhotoBase64: "", avatarImage: "" },
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

export { UpdatetProfileById };
