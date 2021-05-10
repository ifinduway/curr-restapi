import ApiHandler from '@/services/ApiHandler';

const apiRequest = new ApiHandler();

export default {
  namespaced: true,
  state: {
    newsList: [],
  },
  mutations: {
    setNewsList(state, payload) {
      state.newsList = payload;
    },
  },
  actions: {
    loadNewsList({ commit }) {
      apiRequest.ListNews()
        .then(({ Data }) => commit('setNewsList', Data));
    },
  },
  getters: {

  },
};
