import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/modules/user';
import recruitments from '@/store/modules/recruitments';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isJuniorStart: false,
  },
  mutations: {
    CHANGE_JUNIORSTART(state) {
      state.isJuniorStart = !state.isJuniorStart;
    },
  },
  actions: {
    changeJuniorStart({ commit }) {
      commit('CHANGE_JUNIORSTART');
    },
  },
  modules: {
    user,
    recruitments,
  },
});
