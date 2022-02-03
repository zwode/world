import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
  },
  mutations: {
	  SET_POSTS(state, posts) {
		  state.git = posts
	  }
  },
  actions: {
	  getGit({ commit }) {
		  axios.get('https://api.github.com/users/zwode/repos')
			  .then(response => {
				  commit('SET_POSTS', response.data)
			  })
	  }
  },
  modules: {
  }
})
