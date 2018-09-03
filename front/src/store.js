import Vue from 'vue'
import Vuex from 'vuex'
import userService from './services/users.service'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    addUsers(state, users) {
      state.users.push(...users);
    },
    removeUser(state, userId) {
      state.users = state.users.filer(user => !user.id === userId)
    }
  },
  actions: {
    async fetchUsers({ commit, state }) {
      let res = await userService.getAllUsers();
      let users = await res.json();
      users = users.filter((user) => !state.users.map((stateUser) => stateUser.id).includes(user.id));
      commit('addUsers', users);
    },
    async deleteUser({ commit }) {
      await userService.deleteUser(userId);
      commit('removeUser', userId);
    }
  }
})
