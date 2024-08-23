import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://167.99.157.253:8000',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log('Token retrieved from localStorage in interceptor:', token); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Token added to request headers:', token); 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
