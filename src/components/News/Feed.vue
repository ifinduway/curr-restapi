<template>
  <div class="feed-list">
    <feed-card v-for="(item, i) in list" :key="i" :item="item" />
  </div>
</template>

<script>
import FeedCard from '@/components/News/FeedCard.vue';

export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  components: {
    FeedCard,
  },
};
</script>

<style>

</style>
