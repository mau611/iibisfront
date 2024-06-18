import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Asegúrate de ajustar esto a la URL de tu backend Laravel
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default axiosInstance;
