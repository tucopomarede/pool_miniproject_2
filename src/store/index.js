import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workingTimes: [],
    clock: {},
    userName: '',
    userEmail: '',
    userId: null
  },
  mutations: {
    SET_USER (state, payload) {
      console.log("SET_USER mutation payl: ", payload)
      state.userName = payload.data.data.username
      state.userEmail = payload.data.data.email
      state.userId = payload.data.data.id
    },
    DELETE_USER(state, payload) {
      console.log("PAYLOAD DELETE USER ", payload)
      state.userName = ''
      state.userEmail = ''
      state.userId = null
    },
    SET_CLOCK(state, payload) {
      console.log('CLOCK mutation payload : ', payload)
      state.clock = payload.data.data
    }
  },
  actions: {

    // USER DISPATCHES

    setUser ({ commit }, payload) {
      console.log('action set user', payload)
      Axios
        .post('http://localhost:4000/api/users', payload)
        .then((response) => {
          commit('SET_USER', response)
        })
    },
    updateUser ({ commit }, payload) {
      Axios
        .put('http://localhost:4000/api/users/' + this.state.userId, payload)
        .then((response) => {
          commit('SET_USER', response)
        })
    },
    deleteUser ({ commit }) {
      Axios
        .delete('http://localhost:4000/api/users/' + this.state.userId)
        .then((response) => {
          commit('DELETE_USER', response)
        })
    },
    async getUserById ({ commit }, payload) {
      await Axios
        .get('http://localhost:4000/api/users/' + payload)
        .then((response) => {
          commit('SET_USER', response)
        })
    },

    // CLOCK DISPATCHES 

    createClock ({ commit }, payload) {
      payload.clock['user_id'] = this.state.userId

      Axios
        .post('http://localhost:4000/api/clocks', payload)
        .then((response) => {
          commit('SET_CLOCK', response)
        })
    }
  },
  getters: {
    getterWorkingTimes: state => {
      return state.workingTimes;
    },
    getterAllUserInfos: state => {
      return {
        username: state.userName,
        email: state.userEmail,
        id: state.userId
      }
    }
  },
  modules: {
  }
})
