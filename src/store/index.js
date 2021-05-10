import Vue from 'vue';
import Vuex from 'vuex';
import converter from './converter';
import pairs from './pairs';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    converter,
    pairs,
  },
});
