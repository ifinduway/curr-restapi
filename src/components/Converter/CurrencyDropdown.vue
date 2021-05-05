<template>

  <div class="autocomplete">
    <p class="control">
      <input type="text" class="input-dropdown"
      placeholder=""
      @input="onInput($event.target.value)"
      @blur="isOpened = false"
      @keyup.enter="select"
      @keyup.tab="select"
      @keydown.down="onDown"
      @keydown.up="onUp"
      @keyup.esc="isOpen = false"
      ref="dropdown"
      v-model="search"/>
      <i class="chevron bottom"
        @click="toggle"
        :class="{'chevron-active' : isOpened, 'chevron-inactive' : !isOpened}"></i>
    </p>
<transition name="fade" mode="in-out">
    <ul class="options-list" v-show="isOpened">
      <li v-for="(option, i) in filteredItems"
        :key="i"
        @mouseenter="selected = i"
        @mousedown="select"
        :class="{'selected': i === selected}">
        {{ option }}
      </li>
    </ul>
</transition>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
      selected: null,
      search: '',
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onInput(value) {
      this.isOpened = !!value;
      this.selected = null;
    },
    select() {
      const selectedOption = this.filteredItems[this.selected];
      this.$emit('select-item', selectedOption);
      this.search = selectedOption;
      this.isOpened = false;
    },
    onDown() {
      if (!this.isOpened) {
        return;
      }
      this.selected = (this.selected + 1) % this.filteredItems.length;
    },
    onUp() {
      if (!this.isOpened) {
        return;
      }

      this.selected = this.selected - 1 < 0
        ? this.filteredItems.length - 1
        : this.selected - 1;
    },
    toggle() {
      this.isOpened = !this.isOpened;
      if (this.isOpened) {
        // this.$refs.dropdown.focus();
      }
    },
  },
  computed: {
    filteredItems() {
      const condition = new RegExp(this.search, 'i');
      return this.options.filter((item) => item.match(condition));
    },
  },
};
</script>

<style>
.autocomplete {
  max-width: 300px;
  width: 100%;
  margin: 0 20px;
  position: relative;
}

.options-list {
  position: absolute;
  max-width: 300px;
  width: 100%;
}

ul.options-list li.selected {
  background-color: var(--background-cards);
  color: var(--text-primary);
}

input.input-dropdown {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  height: 40px;
  width: 100%;
  border: 1px solid #999;
  border-radius: 2px 0 0 2px;
  background-color: var(--background-basic);
  color: var(--text-primary);
  font-size: 16px;
  padding-right: 38px;
  padding-left: 8px;
}

input.input-dropdown::-webkit-input-placeholder {
  color: #fff;
}
p.control {
  position: relative;
  display: flex;
  margin-bottom: 0.1rem;
  box-shadow: 0px 1px 5px 1px rgba(119, 119, 119, 0.53);
  z-index: 10;
}

p.control i {
  width: 70px;
  top: 0;
  border: none;
  right: 0;
  color: #fff;
  background: #999;
  box-shadow: -2px 0px 1px #999;
  border-radius: 0 2px 2px 0;
}

ul.options-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #dbdbdb;
  border-radius: 0 0 3px 3px;
  max-height: 150px;
  overflow-y: auto;
  box-shadow: 0px 3px 6px 0px rgba(195, 195, 195, 0.76);
}

ul.options-list li {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  padding: 0.4rem;
  border-bottom: 1px solid #eee;
  color: #666;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s all ease;
}

ul.options-list li span {
  margin-right: 4px;
}

.chevron:before {
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  content: "";
  display: inline-block;
  height: 0.45em;
  left: 0.05em;
  position: relative;
  top: 0.15em;
  transform: rotate(-45deg);
  vertical-align: top;
  width: 0.45em;
  transition: 0.3s all ease;
  will-change: transform;
}

.chevron.bottom:before {
  top: 16px;
  right: 19px;
}

.chevron-active.bottom:before {
  transform: rotate(135deg);
  will-change: transform;
}

.chevron-inactive.bottom:before {
  transform: rotate(225deg);
  will-change: transform;
}

ul.options-list li:last-child {
  border-bottom: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  will-change: opacity;
  transform: translateY(-30px);
}
</style>
