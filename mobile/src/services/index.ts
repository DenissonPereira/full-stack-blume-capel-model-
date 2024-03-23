import axios from "axios";

const BASE_URL = "http://10.70.24.253:8080/";


export const api = axios.create({
  baseURL: BASE_URL,
});