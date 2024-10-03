import axios from 'axios';
import toast from 'react-hot-toast';
// import { logout } from '../../../backend/controllers/auth.controller';

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
    withCredentials: true, 
});

// const refreshToken = async() => {
//     try {
//         const response = await axios.post("/auth/refresh-access");
//         toast.success("Trying to refresh token")
//         return response.data;
//     } catch (error) {
//         console.log(error);
        
//         toast.error("Failed to refresh your token, Please login manually!")
//     }
// }

// let refreshPromise = null;

// Function to process the failed requests after refreshing the token
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

// Response interceptor to handle token expiration and refresh logic
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // If the response is successful, just return it
  },
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If token is being refreshed, queue up the failed requests
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return api(originalRequest); // Retry the original request after refresh
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Call your function to refresh the token
        const response = await axios.post('/auth/refresh-access');
        // Process queued requests
        processQueue(null);

        // Retry the original request
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error); // Return any other errors
  }
);


export default axiosInstance;