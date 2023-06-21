import axios from "axios";
import { REACT_APP_API_URL } from "@env";

export const axiosForLibraryAPI = axios.create({
  baseURL: REACT_APP_API_URL,
});

