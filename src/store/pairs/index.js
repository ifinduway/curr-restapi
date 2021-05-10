import ApiHandler from '@/services/ApiHandler';

const apiRequest = new ApiHandler();

export default {
  namespaced: true,
  state: {
    fCurr: null,
    pairsList: [],
  },
  mutations: {
    setFromCurr(state, payload) {
      state.fCurr = payload;
    },
    setPairs(state, payload) {
      state.pairsList = payload;
    },
    setInterval(state, payload) {
      state.interval = payload;
    },
    clearInterval(state) {
      clearInterval(state.interval);
    },
    resetStore(state) {
      state.fCurr = null;
      state.pairsList = [];
    },
  },
  actions: {
    setFromCurr({ state, getters, commit }, payload) {
      commit('setFromCurr', payload);
      if (state.interval) {
        commit('clearInterval');
      }
      apiRequest.TopPairs(state.fCurr)
        .then(({ Data }) => {
          if (Data.length > 0) {
            const data = [];
            Data.forEach((item) => data.push([item.toSymbol, item.price]));
            commit('setPairs', data);
          } else {
            commit('setPairs', []);
          }
        });
    },
    clearInterval({ commit }) {
      commit('clearInterval');
    },
    resetStore({ commit }) {
      commit('resetStore');
    },
  },
  getters: {

  },
};
