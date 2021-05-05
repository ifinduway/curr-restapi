import Vue from 'vue';

export default Vue.directive('currencyUpdate', {
  update: (el, binding) => {
    if (binding.oldValue > binding.value) {
      el.classList.add('lower');
      setTimeout(() => {
        el.classList.remove('lower');
      }, 1500);
    } else if (binding.oldValue < binding.value) {
      el.classList.add('upper');
      setTimeout(() => {
        el.classList.remove('upper');
      }, 1500);
    }
  },
});
