import Api from "..";


export const empSignIn = (payload) => {
  return Api.post(`employee/login`, payload);
};