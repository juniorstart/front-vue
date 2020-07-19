import axios from './axios';

const TO_DO_LISTS_PATH = 'api/todolists/';
const TO_DO_LIST = 'todolist';

export default {
  getToDoLists() {
    return axios.get(TO_DO_LISTS_PATH);
  },
  createToDoList(data) {
    return axios.post(TO_DO_LISTS_PATH + TO_DO_LIST, {
      ...data, id: 0, tasks: [], ownerId: 1, status: true,
    });
  },
  // getRecruitment(id) {
  //   return axios.get(`${RECRUITMENT_PATH}/${id}`);
  // },
  // deleteRecruitment(id) {
  //   return axios.delete(`${RECRUITMENT_PATH}/${id}`);
  // },
  // updateRecruitment(id, data) {
  //   return axios.put(`${RECRUITMENT_PATH}/${id}`, data);
  // },
};
