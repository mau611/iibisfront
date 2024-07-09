import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Asegúrate de ajustar esto a la URL de tu backend Laravel
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default axiosApi;
