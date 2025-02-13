import axios from "axios";
// import { showNoticiation } from "../components/shared/customNotification/showNotification";
// import { store } from "../store";
// import { onLogout } from "../shared/helper";
const Api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: store.getState().user.token
  },
  timeout: 10000,
  withCredentials: true
});

Api.interceptors.request.use(
  async config => config,
  async error => error
);
Api.interceptors.response.use(
  async config => config,
  async ({ response, message: networkError }) => {
    const result = response;

    // if (response?.status === 403) {
    //   store.dispatch((dispatch) => {
    //     onLogout(dispatch);
    //   });
    // }

    return response;
  }
);

export default Api;