import axios from './axios';

const RECRUITMENT_PATH = 'api/recruitment';

export default {
  getRecruitments() {
    return axios.get(RECRUITMENT_PATH);
  },
  createRecruitment(data) {
    return axios.post(RECRUITMENT_PATH, { ...data, id: 0, ownerId: 1 });
  },
  getRecruitment(id) {
    return axios.get(`${RECRUITMENT_PATH}/${id}`);
  },
  deleteRecruitment(id) {
    return axios.delete(`${RECRUITMENT_PATH}/${id}`);
  },
  updateRecruitment(id, data) {
    return axios.put(`${RECRUITMENT_PATH}/${id}`, data);
  },
};
