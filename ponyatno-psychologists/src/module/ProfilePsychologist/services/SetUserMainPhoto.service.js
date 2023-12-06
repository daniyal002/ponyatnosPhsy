import axios from "axios";

axios.defaults.baseURL = "http://212.118.52.175:8080";

const SetUserMainPhoto = async (body, token) => {
  const formData = new FormData();
  formData.append("avatarImage", body.userPhoto);

  return axios
    .post(`/api/Profile/update-avatar/${body.userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export { SetUserMainPhoto };
