<template>
  <button
    class="btn btn-sm btn-outline-secondary"
    @click="followUser(author)"
    :disabled="isActing"
  >
    <i class="ion-plus-round"></i>
    &nbsp; {{ author.following ? "Unfollow" : "Follow" }} {{ author.username }}
    <span class="counter">(0)</span>
  </button>
</template>

<script>
import { followUser, unfollowUser } from "@/api/profile";
export default {
  name: "FollowAuthor",
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isActing: false,
    };
  },
  methods: {
    async followUser(author) {
      this.isActing = true;
      let fn = null;
      if (author.following) {
        fn = unfollowUser;
      } else {
        fn = followUser;
      }
      const { data } = await fn(author.username);
      author.following = !author.following;
      this.isActing = false;
    },
  },
};
</script>

<style></style>
