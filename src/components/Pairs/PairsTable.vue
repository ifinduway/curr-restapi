<template>
  <table v-if="fCurr && pairsList.length > 0" class="default-table">
    <tr>
      <th>{{fCurr}}</th>
    </tr>
    <tr v-for="(pair, i) in pairsList" :key="i">
      <td data-th="Top Currency">{{pair[0]}} - {{pair[1]}}</td>
    </tr>
  </table>
  <h3 v-else-if="fCurr && pairsList.length <= 0" class="">CURRENCY LIST IS EMPTY</h3>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('pairs', [
      'pairsList',
      'fCurr',
    ]),
  },
};
</script>

<style lang="scss">

.default-table {
  width: 300px;
  max-width: 100%;
  margin-top: 50px;
  background: #34495E;
  color: #fff;
  border-radius: .2em;
  overflow: hidden;
  tr {
    border-color: lighten(#34495E, 10%);
  }
  th, td {
    margin: .5em 1em;
    @media (min-width: 480px) {
      padding: 1em !important;
    }
  }
  th, td:before {
    color: #dd5;
  }
}
</style>
