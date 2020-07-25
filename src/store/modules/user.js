import api from '@/api/auth';
import { setToken } from '@/utils/setToken';
import { removeToken } from '@/utils/removeToken';

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
      const { data } = await api.login(user);
      commit('SET_TOKEN', data);

      setToken(data, isRememberMeChecked);

      return data;
    },
    logout({ commit }) {
      removeToken();
      commit('SET_TOKEN', '');
    },
  },
};
