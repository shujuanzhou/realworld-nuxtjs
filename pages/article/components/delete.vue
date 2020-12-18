<template>
  <span
    class="mod-options"
    v-bind="$attrs"
    v-on="$listeners"
    @click="handlerDelete(comment)"
  >
    <i class="ion-trash-a"></i>
  </span>
</template>

<script>
import { deleteComments } from "@/api/article";
export default {
  name: "DeleteComment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActing: false,
    };
  },
  methods: {
    async handlerDelete(comment) {
      console.log(comment);
      const params = {
        slug: this.slug,
        id: comment.id,
      };
      const { data } = await deleteComments(params);
      this.$emit("getComments", this.slug);
    },
  },
};
</script>

<style></style>
