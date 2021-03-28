import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activePostIndex: null
  },
  mutations: {
    SET_ACTIVE_POST_INDEX(state, value) {
      state.activePostIndex = value;
    }
  },
  actions: {
    setActivePostIndex(context, value) {
      console.log('setting state', value);
      context.commit('SET_ACTIVE_POST_INDEX', value)
    }
  },
  modules: {}
})
