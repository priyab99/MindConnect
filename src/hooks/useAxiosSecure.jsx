import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

// Creating an Axios instance with a secure base URL
const axiosSecure = axios.create({
  baseURL: 'https://mind-connect-server.vercel.app/',
});

// Custom hook for handling secure Axios requests
const useAxiosSecure = () => {
  // Destructuring logOut function from AuthContext
  const { logOut } = useContext(AuthContext);

  // Getting the navigate function from the react-router-dom library
  const navigate = useNavigate();

  useEffect(() => {
    // Setting up Axios interceptors for request and response
    axiosSecure.interceptors.request.use((config) => {
      // Attaching the access token from local storage to the Authorization header
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      // Response success handler
      (response) => response,

      // Response error handler
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // If the response status is 401 or 403, logging out the user and navigating to the login page
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]); // Dependencies ensure that this effect runs only when logOut or navigate changes

  // Returning the configured axios instance in an array
  return [axiosSecure];
};

export default useAxiosSecure;
