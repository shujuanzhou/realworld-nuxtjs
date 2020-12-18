<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-on:keyup.enter="insertTag($event)"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="tag in article.tagList"
                    :key="tag"
                    ><i class="ion-close-round" @click="removeTag(tag)"></i
                    >{{ tag }}</span
                  >
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="publishArticle"
                :disabled="isSaving"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArticle } from "@/api/article";
import { getTags } from "@/api/tag";
import MarkdownIt from "markdown-it";
export default {
  // 在路由匹配组件渲染之前会执行中间件处理
  middleware: "auth",
  name: "EditorIndex",
  data() {
    return {
      isSaving: false,
      article: {
        title: null,
        description: null,
        body: null,
        tagList: [],
      },
      tags: [],
    };
  },
  async mounted() {
    const { data } = await getTags();
    this.tags = data.tags;
  },
  methods: {
    async publishArticle() {
      this.isSaving = true;
      const { data } = await createArticle({
        article: this.article,
      });
      this.isSaving = false;
    },
    removeTag(tag) {
      const index = this.article.tagList.findIndex((item) => {
        return item === tag;
      });
      if (index !== -1) {
        this.article.tagList.splice(index, 1);
      }
    },
    insertTag(insertTag) {
      const tag = insertTag.target.value;
      if (this.tags.includes(tag)) {
        console.log("1234");
        this.article.tagList.push(tag);
      }
    },
  },
};
</script>

<style></style>
