<template>
  <div id="converter">
    <div class="form-group">
      <currency-dropdown :options="currencyList" @select-item="setFromCurr" v-model="fCurr" />
      <currency-dropdown :options="currencyList" @select-item="setToCurr" v-model="tCurr" />
    </div>
    <currency-amount />
    <result />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import CurrencyDropdown from '@/components/Converter/CurrencyDropdown.vue';
import CurrencyAmount from '@/components/Converter/CurrencyAmount.vue';
import Result from '@/components/Converter/Result.vue';
import ApiHandler from '@/services/ApiHandler';

const apiRequest = new ApiHandler();

export default {
  components: {
    CurrencyDropdown,
    CurrencyAmount,
    Result,
  },
  computed: {
    ...mapGetters([
      'getResult',
    ]),
    ...mapState([
      'currencyList',
      'fCurr',
      'tCurr',
      'amount',
      'price',
      'interval',
    ]),
  },
  methods: {
    ...mapActions([
      'setFromCurr',
      'setToCurr',
      'setCurrencyList',
      'clearInterval',
      'resetStore',
    ]),
  },
  mounted() {
    apiRequest.getCoinList().then((data) => this.setCurrencyList(Object.keys(data.Data)));
  },
  beforeDestroy() {
    if (this.interval) this.clearInterval();
    this.resetStore();
  },
};
</script>

<style>
  .form-group {
    display: flex;
    width: 100%;
    justify-content: center;
  }
</style>
