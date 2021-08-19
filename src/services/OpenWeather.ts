import axios from "axios";

const weatherAPI = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: "9fe926f90f8f1d1ebf5c62693e5099b1",
  },
});

export default weatherAPI;
