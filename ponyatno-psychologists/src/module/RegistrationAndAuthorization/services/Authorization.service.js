import axios from 'axios';

const auth = async (body) => {
  return axios
    .post('http://212.118.52.175:8080/api/account/login', body)
    .then((response) => response.data);
};

export default auth;
