<template>
  <div id="pairs">
    <h1>PAIRS</h1>
    <currency-dropdown :options="currencyList" @select-item="setFromCurr" v-model="fCurr" />
    <Table />
  </div>
</template>

<script>
import Table from '@/components/Pairs/PairsTable.vue';
import CurrencyDropdown from '@/components/Converter/CurrencyDropdown.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Table,
    CurrencyDropdown,
  },
  computed: {
    ...mapState('converter', [
      'currencyList',
    ]),
    ...mapState('pairs', [
      'fCurr',
    ]),
  },
  methods: {
    ...mapActions('pairs', [
      'setFromCurr',
      'resetStore',
    ]),
  },
  beforeDestroy() {
    this.resetStore();
  },
};
</script>

<style>
#pairs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
}
</style>
