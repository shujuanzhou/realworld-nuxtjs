<template>
  <button
    class="btn btn-sm btn-outline-primary"
    :class="{
      active: article.favorited,
    }"
    @click="onFavorite(article)"
    :disabled="favoritedDisable"
  >
    <i class="ion-heart"></i>
    &nbsp; Favorite Post
    <span class="counter">({{ article.favoritesCount }})</span>
  </button>
</template>

<script>
import { addFavorite, deleteFavorite } from "@/api/article";
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      favoritedDisable: false,
    };
  },
  methods: {
    async onFavorite(article) {
      this.favoritedDisable = true;
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await addFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      this.favoritedDisable = false;
    },
  },
};
</script>

<style></style>
