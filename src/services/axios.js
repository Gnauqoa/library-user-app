import axios from "axios";
import { REACT_APP_API_URL } from "@env";

export const axiosForLibraryAPI = axios.create({
  baseURL: "http:/10.0.223.36:5000",
});
