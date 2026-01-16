import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://job-task-server-umber.vercel.app",
});

const useAxios = () => {
      return axiosInstance;
};

export default useAxios;