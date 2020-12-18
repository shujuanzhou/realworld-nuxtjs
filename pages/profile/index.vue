<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <nuxt-link
              to="settings"
              class="btn btn-sm btn-outline-secondary action-btn"
              v-if="isCurUser"
            >
              <i class="ion-plus-round"></i>
              &nbsp; Edit Profile Settings
            </nuxt-link>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              v-else
              @click="followUser(profile)"
              :disabled="profile.isActing"
            >
              <i class="ion-plus-round"></i>
              &nbsp; {{ profile.following ? "Unfollow" : "Follow" }}
              {{ profile.username }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'my_articles',
                  }"
                  exact
                  :to="{
                    name: 'profile',
                    params: {
                      username: user.username,
                    },
                    query: {
                      tab: 'my_articles',
                    },
                  }"
                  >My Articles</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'favorited_articles',
                  }"
                  exact
                  :to="{
                    name: 'profile',
                    params: {
                      username: user.username,
                    },
                    query: {
                      tab: 'favorited_articles',
                    },
                  }"
                  >Favorited Articles</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
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
                <span class="date">{{
                  article.createdAt | date("MMM DD, YYYY")
                }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{
                  active: article.favorited,
                }"
                @click="onFavorite(article)"
                :disabled="article.favoritedDisable"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              class="preview-link"
              :to="{
                name: 'article',
                params: {
                  slug: article.slug,
                },
              }"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- start:分页处理 -->
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                v-for="item in totalPage"
                :key="item"
                :class="{ active: item === page }"
              >
                <nuxt-link
                  class="page-link"
                  :to="{
                    name: 'profile',
                    query: {
                      page: item,
                      tab: tab,
                    },
                  }"
                  >{{ item }}</nuxt-link
                >
              </li>
            </ul>
          </nav>

          <!-- end:分页处理 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getPorfile, followUser, unfollowUser } from "@/api/profile";
import { getArticles, getFeedArticles } from "@/api/article";
export default {
  middleware: "auth",
  name: "UserProfile",
  async asyncData({ params, query, store }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const { tab = "my_articles" } = query;
    const articleParams =
      store.state.user && tab === "my_articles"
        ? { limit, offset: (page - 1) * limit, author: params.username }
        : { limit, offset: (page - 1) * limit, favorited: params.username };

    const [profileData, articleData] = await Promise.all([
      getPorfile(params.username),
      getArticles(articleParams),
    ]);

    const { articles, articlesCount } = articleData.data;

    const { profile } = profileData.data;
    console.log(articleData);
    return {
      tab,
      profile,
      articles,
      articlesCount,
      page,
      limit,
    };
  },

  computed: {
    ...mapState(["user"]),
    isCurUser() {
      return this.$route.params.username === this.user.username;
    },
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
  },
  watchQuery: ["page", "tab"],
  methods: {
    async followUser(profile) {
      profile.isActing = true;
      let fn = null;
      if (profile.following) {
        fn = unfollowUser;
      } else {
        fn = followUser;
      }
      const { data } = await fn(profile.username);
      profile.following = !profile.following;
      profile.isActing = false;
    },
  },
};
</script>
<style></style>
