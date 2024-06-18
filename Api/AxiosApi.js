import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:8000/api", // Asegúrate de ajustar esto a la URL de tu backend Laravel
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default axiosApi;
