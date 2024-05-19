import axios from "axios";

const ROOT_URL = "http://localhost:1323";
// Next we make an 'instance' of it
export const axiosHandler = axios.create({
  // .. where we make our configurations
  baseURL: ROOT_URL,
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// // Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...

// export default instance;
