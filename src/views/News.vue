<template>
  <div id="news">
    <h3>News</h3>
    <feed :list="newsList"/>
  </div>
</template>

<script>
import Feed from '@/components/News/Feed.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Feed,
  },
  mounted() {
    this.loadNewsList();
    this.$nextTick(() => console.log(this.newsList));
  },
  computed: {
    ...mapState('news', [
      'newsList',
    ]),
  },
  methods: {
    ...mapActions('news', [
      'loadNewsList',
    ]),
  },
};
</script>

<style>

</style>
