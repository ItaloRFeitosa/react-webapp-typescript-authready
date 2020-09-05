import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  withCredentials: true,

});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if(error.response.status === 401 ) return {
      message: "unauthorized"
    }
  }
)

export default api;


