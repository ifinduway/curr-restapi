<template>
  <div v-if="price && amount > 0" class="result">
    <div>
      <span>{{amount}} <small>{{symbols.fCurr}}</small></span>:
      <span v-currencyUpdate="price">{{getResult}} <small>{{symbols.tCurr}}</small></span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import currencyUpdate from '@/directives/updateCurrency';

export default {
  directives: {
    currencyUpdate,
  },
  computed: {
    ...mapGetters([
      'getResult',
    ]),
    ...mapState([
      'price',
      'symbols',
      'amount',
    ]),
  },

  data() {
    return {
      cache: null,
    };
  },
};
</script>

<style>
.result p {
  font-size: 30px;
  font-weight: 100;
}

span {
  margin: 0 15px;
  transition: all 0.7s;
}

.lower {
  color: var(--text-error);
  border-bottom: 1px solid var(--background-attention);
}

.upper {
  color: var(--text-extraSuccess);
  border-bottom: 1px solid var(--elements-green);
}
</style>
