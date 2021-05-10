`<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/converter">Converter</router-link> |
      <router-link to="/pairs">Top pairs</router-link> |
      <router-link to="/news">News</router-link>
    </div>
    <div class="cointainer">
      <router-view/>
    </div>
  </div>
</template>

<script>
import ApiHandler from '@/services/ApiHandler';
import { mapActions } from 'vuex';

const apiRequest = new ApiHandler();

export default {
  mounted() {
    apiRequest.getCoinList().then((data) => this.setCurrencyList(Object.keys(data.Data)));
  },

  methods: {
    ...mapActions('converter', [
      'setCurrencyList',
    ]),
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-primary);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--text-primary);
    text-decoration: none;

    &.router-link-exact-active {
      color: var(--text-extraSuccess);
      border-bottom: 1px solid var(--text-extraSuccess);
    }
  }
}
</style>
