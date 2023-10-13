import axios from "axios";
import { useState } from "react";

export const reg = () => {
  const [error, setError] = useState();

  const fetchData = (body) =>
    axios
      .post("http://212.118.52.175:8080/api/account/register", body)
      .then((response) => {
        response.data;
        setError();
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });

  return { fetchData, error };
};
