import axios from "axios";

const ROOT_URL = "http://localhost:1323";
// Next we make an 'instance' of it
export const client = axios.create({
  // .. where we make our configurations
  baseURL: ROOT_URL,
});
const authToken = window.localStorage.getItem("token");
client.defaults.headers.common["Authorization"] = "Bearer " + authToken;
// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// // Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...

// export default instance;
