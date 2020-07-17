import axios from './axios';

export default {
  register(data) {
    return axios.post('Register', { user: { ...data, id: 1 } });
  },
  login(data) {
    return axios.post('Login', data);
  },
};
