import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"http://localhost:5000",
  headers:{"Content-Type":"application/json"},
  withCredentials:true
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("accessToken");
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  async (error) => {
    const prevRequest = error.config;

    if(error?.response?.status === 403 && !prevRequest?.sent) {
      prevRequest.sent = true;

      try {
        const response = await axios.get("http://localhost:5000/refresh",{withCredentials:true});
        if(response.status === 200) {
          const newAccessToken = response.data.accessToken;
          localStorage.setItem("accessToken",newAccessToken);

          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(prevRequest);
        }
      } catch (error) {
        console.log("TOKEN YENİLENEMEDİ");
        localStorage.removeItem("accessToken");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;