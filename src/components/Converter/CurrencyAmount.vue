<template>
  <input type="number"
  id="amount"
  placeholder="amount"
  :value="amount"
  autocomplete="off"
  @input="updateValue($event.target.value)"
  :disabled="!isFilled">
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    amount: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    ...mapActions([
      'setAmount',
    ]),
    updateValue(value) {
      this.setAmount(value);
    },
  },
  computed: {
    ...mapGetters([
      'isFilled',
    ]),
  },
};
</script>

<style lang="scss">
#amount {
  max-width: 320px;
  height: 66px;
  text-align: center;
  font-size: 30px;
  margin: 20px;
  font-weight: bold;
  color: var(--text-primary);
  outline: none;
  border: 1px solid var(--elements-special);
  background: var(--background-additional)
}

#amount:disabled {
  border: 1px solid var(--elements-secondary);
  background-color: var(--elements-special);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>
