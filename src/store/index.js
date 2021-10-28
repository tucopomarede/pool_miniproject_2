import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workingTimes: [],
    userName: '',
    userEmail: ''
  },
  mutations: {
    
  },
  actions: {
  },
  getters: {
    getterWorkingTimes: state => {
      return state.workingTimes;
    },
    getterAllUserInfos: state => {
      return {
        username: state.userName,
        email: state.userEmail
      }
    }
  },
  modules: {
  }
})
