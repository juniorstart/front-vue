import api from '@/api/toDoLists';

export default {
  namespaced: true,
  state: {
    toDoLists: [],
    isAPIError: false,
    isFetching: false,
  },
  mutations: {
    SET_TO_DO_LISTS(state, payload) {
      state.toDoLists = payload;
      state.isAPIError = false;
      state.isFetching = false;
    },
    SET_IS_API_ERROR(state, payload) {
      state.isAPIError = payload;
      state.isFetching = false;
    },
    SET_IS_FETCHING(state, payload) {
      state.isFetching = payload;
    },
  },
  actions: {
    async getToDoLists({ commit }) {
      commit('SET_IS_FETCHING', true);
      try {
        const { data } = await api.getToDoLists();
        commit('SET_TO_DO_LISTS', data);
      } catch (e) {
        commit('SET_IS_API_ERROR', true);
      }
    },
  },
};
