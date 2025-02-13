import Api from "..";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const login = (payload) => {
  return Api.post(`${BASE_URL}employee/login`, payload);
};