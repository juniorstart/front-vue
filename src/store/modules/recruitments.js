import api from '@/api/recruitments';

export default {
  namespaced: true,
  state: {
    recruitments: [],
    isAPIError: false,
    isFetching: false,
  },
  mutations: {
    SET_RECRUITMENTS(state, payload) {
      state.recruitments = payload;
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
    async getRecruitments({ commit }) {
      commit('SET_IS_FETCHING', true);
      try {
        const { data } = await api.getRecruitments();

        commit('SET_RECRUITMENTS', data);
      } catch (e) {
        commit('SET_IS_API_ERROR', true);
      }
    },
    async updateRecruitment({ commit, dispatch }, payload) {
      commit('SET_IS_FETCHING', true);
      const { recruitment, id } = payload;
      try {
        await api.updateRecruitment(id, recruitment);

        dispatch('getRecruitments');
      } catch (e) {
        commit('SET_IS_API_ERROR', true);
      }
    },
  },
};
