import axios from './axios';

const TO_DO_LISTS_PATH = 'api/todolists/';
const TO_DO_LIST = 'todolist/';
const TASK = 'task/';

export default {
  getToDoLists() {
    return axios.get(TO_DO_LISTS_PATH);
  },
  createToDoList(data) {
    return axios.post(TO_DO_LISTS_PATH + TO_DO_LIST, {
      ...data, id: 0, tasks: [], ownerId: 1, status: true,
    });
  },
  createTask(data, todolistId) {
    return axios.post(TO_DO_LISTS_PATH + TASK, { ...data, todolistId, id: 0 });
  },
  updateTask(data) {
    return axios.put(TO_DO_LISTS_PATH + data.id, data);
  },
  getTask(id) {
    return axios.get(TO_DO_LISTS_PATH + TASK + id);
  },
  deleteTask(id) {
    return axios.delete(TO_DO_LISTS_PATH + TASK + id);
  },
};
