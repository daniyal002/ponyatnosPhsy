import axios from "axios";
import { useState } from "react";
import useTokenStore from "../../../store/store";

export const auth = () => {
  const [error, setError] = useState();
  const { setToken, token } = useTokenStore();

  const fetchData = (body) =>
    axios
      .post("http://212.118.52.175:8080/api/account/login", body)
      .then((response) => {
        response.data;
        setToken(response.data.token);
        setError();
      })
      .catch((error) => {
        setError(error.response.data);
      });

  return { fetchData, error };
};
