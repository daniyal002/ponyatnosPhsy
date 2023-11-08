import axios from "axios";

const reg = async (body) => {
  return axios
    .post("http://212.118.52.175:8080/api/Account/Register", body)
    .then((response) => response.data);
};

export default reg;
