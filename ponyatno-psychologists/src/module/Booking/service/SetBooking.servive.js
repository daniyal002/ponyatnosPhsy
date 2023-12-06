import axios from "axios";

axios.defaults.baseURL = "http://212.118.52.175:8080";

const SetBooking = async (body, token) => {
  return axios
    .post("/api/Booking/SetBooking", body, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    });
};

export { SetBooking };
