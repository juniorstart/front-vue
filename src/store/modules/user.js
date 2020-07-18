import api from '@/api/auth';
import { setToken } from '@/utils/setToken';

export default {
  namespaced: true,
  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async signIn({ commit }, payload) {
      const { user, isRememberMeChecked } = payload;
      return api.login(user).then(({ data }) => {
        commit('SET_TOKEN', data);

        setToken(data, isRememberMeChecked);
      });
    },
  },
};
