import Vue from 'vue';
import Vuex from 'vuex';
import ApiHandler from '@/services/ApiHandler';

const apiRequest = new ApiHandler();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencyList: [],
    fCurr: null,
    tCurr: null,
    amount: 1,
    price: null,
    interval: null,
  },
  mutations: {
    setCurrencyList(state, payload) {
      state.currencyList = payload;
    },
    setFromCurr(state, payload) {
      state.fCurr = payload;
    },
    setToCurr(state, payload) {
      state.tCurr = payload;
    },
    setAmount(state, payload) {
      state.amount = payload;
    },
    setPrice(state, payload) {
      state.price = payload[state.tCurr];
    },
    setInterval(state, payload) {
      state.interval = payload;
    },
    clearInterval(state) {
      clearInterval(state.interval);
    },
    resetStore(state) {
      state.fCurr = null;
      state.tCurr = null;
      state.price = null;
      state.amount = 1;
    },
  },
  actions: {
    setCurrencyList({ commit }, payload) {
      commit('setCurrencyList', payload);
    },
    setFromCurr({ state, getters, commit }, payload) {
      commit('setFromCurr', payload);
      if (getters.isFilled === 1) {
        if (state.interval) {
          commit('clearInterval');
        }
        apiRequest.singleSymbolPrice({ fsym: state.fCurr, tsym: state.tCurr })
          .then((data) => commit('setPrice', data));
        commit('setInterval', setInterval(() => {
          apiRequest.singleSymbolPrice({ fsym: state.fCurr, tsym: state.tCurr })
            .then((data) => {
              commit('setPrice', data);
            });
        }, 3000));
      }
    },
    setToCurr({ state, getters, commit }, payload) {
      commit('setToCurr', payload);
      if (getters.isFilled === 1) {
        if (state.interval) {
          commit('clearInterval');
        }
        apiRequest.singleSymbolPrice({ fsym: state.fCurr, tsym: state.tCurr })
          .then((data) => commit('setPrice', data));
        commit('setInterval', setInterval(() => {
          apiRequest.singleSymbolPrice({ fsym: state.fCurr, tsym: state.tCurr })
            .then((data) => {
              commit('setPrice', data);
            });
        }, 3000));
      }
    },
    setAmount({ state, getters, commit }, payload) {
      commit('setAmount', payload);
    },
    setPrice({ commit }, payload) {
      commit('setPrice', payload);
    },
    clearInterval({ commit }) {
      commit('clearInterval');
    },
    resetStore({ commit }) {
      commit('resetStore');
    },
  },
  getters: {
    getResult: (state) => (state.price ? state.price * state.amount : 'error'),
    isFilled: (state) => (state.fCurr && state.tCurr ? 1 : 0),
  },
});
