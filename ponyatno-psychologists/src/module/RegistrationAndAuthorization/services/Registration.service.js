import axios from 'axios';

const reg = async (body) => {
  return axios
    .post('http://212.118.52.175:8080/api/account/register', body)
    .then((response) => response.data);
};

export default reg;
