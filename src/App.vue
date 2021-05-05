<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/converter">Converter</router-link>
    </div>
    <div class="cointainer">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
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

.container {
  width: 75%;
  margin: 0 auto;
}
</style>
