<template>
  <div class="card">
      <img class="card-image" :src="item.imageurl" alt="">
      <div class="card-title">{{item.title}}</div>
      <span class="card-category">{{item.categories}}</span>
      <p clas="class-text">{{item.body}}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .card {
    max-width: 560px;
    width: calc(100% - 60px);
    border-radius: 10px;
    background-color: var(--background-additional);
    padding: 20px;
    margin: 20px 10px;

    &-image {
      max-width: 150px;
      border-radius: 100%;
      border: 1px solid var(--elements-secondary);
      width: 40%;
    }

    &-title {
      font-weight: 600;
      font-size: 25px;
      margin-top: 40px;
    }

    &-category {
      background-color: var(--background-selected);
      font-style: italic;
      font-size: 10px;
    }
  }
</style>
