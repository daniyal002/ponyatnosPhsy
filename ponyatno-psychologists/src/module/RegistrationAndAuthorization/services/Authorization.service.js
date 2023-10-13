import axios from "axios";
import { useState } from "react";
import useTokenStore from "../../../store/store";

export const auth = () => {
  const [error, setError] = useState();
  const { setToken } = useTokenStore();

  const fetchData = (body) =>
    axios
      .post("http://212.118.52.175:8080/api/account/login", body)
      .then((response) => {
        response.data;
        console.log(response.data);
        setToken(response.data.token);
        setError();
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });

  return { fetchData, error };
};
