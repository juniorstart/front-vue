import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
      commit('CHANGE_JUNIORSTART')
    }
  },
  modules: {
  }
})
