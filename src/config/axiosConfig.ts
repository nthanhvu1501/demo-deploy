import { API_BASE_URL } from "@/constants";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
})

export default axiosInstance
