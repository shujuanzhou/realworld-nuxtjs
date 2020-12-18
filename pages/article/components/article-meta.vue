<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
          username: article.author.username,
        },
      }"
      ><img src="article.author.image"
    /></nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{
          name: 'profile',
          params: {
            username: article.author.username,
          },
        }"
        class="author"
        >{{ article.author.username }}</nuxt-link
      >
      <span class="date">{{ article.createdAt | date("MMM DD,YYYY") }}</span>
    </div>
    <!-- <button
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: article.author.following,
      }"
    >
      <i class="ion-plus-round"></i>
      &nbsp; Follow Eric Simons
      <span class="counter">({{ article.bio || 0 }})</span>
    </button> -->
    <follow-author :author="article.author" />
    &nbsp;&nbsp;
    <favorite :article="article" />
  </div>
</template>

<script>
import Favorite from "./favorite";
import FollowAuthor from "./follow-author";
export default {
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  components: {
    Favorite,
    FollowAuthor,
  },
};
</script>

<style></style>
