import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
//   baseURL: "https://public-infrastructure-issue-reporti-kappa.vercel.app",
});

const useAxios = () => {
      return axiosInstance;
};

export default useAxios;