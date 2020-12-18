<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="commentBody"
        ></textarea>
      </div>
      <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <button
          class="btn btn-sm btn-primary"
          :disabled="isActing"
          @click="publishComments"
        >
          Post Comment
        </button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
        >
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
          >{{ comment.author.username }}</nuxt-link
        >
        <span class="date-posted">{{
          comment.createdAt | date("MMM DD,YYYY")
        }}</span>
        <!-- <span class="mod-options" v-if="comment.canModify"
          ><i class="ion-trash-a"></i
        ></span> -->
        <delete
          :comment="comment"
          :slug="article.slug"
          v-if="comment.canModify"
          v-on:getComments="getComments"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleComments, addComments } from "@/api/article";
import { mapState } from "vuex";
import Delete from "./delete";
export default {
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  components: {
    Delete,
  },
  data() {
    return {
      comments: [],
      isActing: false,
      commentBody: null,
      // ...mapState(["user"]),
    };
  },
  mounted() {
    this.getComments(this.article.slug);
  },
  methods: {
    async publishComments() {
      this.isActing = true;
      const { data } = await addComments({
        slug: this.article.slug,
        body: this.commentBody,
      });
      this.isActing = false;
      this.getComments(this.article.slug);
    },
    async getComments(slug) {
      const { data } = await getArticleComments(slug);
      data.comments.forEach((item) => {
        item.canModify = item.author.username === this.user.username;
      });
      this.comments = data.comments;
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style></style>
