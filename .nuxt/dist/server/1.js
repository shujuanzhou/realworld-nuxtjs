exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticleComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取文章

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    params,
    url: '/api/articles',
    method: 'GET'
  });
}; // 获取用户关注的文章

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    params,
    url: '/api/articles/feed',
    method: 'GET'
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/favorite`,
    method: 'POST'
  });
}; // 删除点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/favorite`,
    method: 'DELETE'
  });
}; // 获取文章详情

const getArticleDetail = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}`,
    method: 'GET'
  });
}; // 获取文章评论

const getArticleComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/comments`,
    method: 'GET'
  });
}; // 新建article

const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    data,
    url: '/api/articles',
    method: 'POST'
  });
}; // 添加评论

const addComments = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    data: {
      comment: {
        body: params.body
      }
    },
    url: `/api/articles/${params.slug}/comments`,
    method: 'POST'
  });
}; // 删除评论

const deleteComments = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${data.slug}/comments/${data.id}`,
    method: 'DELETE'
  });
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPorfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unfollowUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取个人资料

const getPorfile = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/profiles/${username}`,
    method: 'GET'
  });
}; // 关注作者

const followUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/profiles/${username}/follow`,
    method: 'POST'
  });
}; // 取消关注作者

const unfollowUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/profiles/${username}/follow`,
    method: 'DELETE'
  });
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=3400d566&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=3400d566&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=7c8957a6&
var article_metavue_type_template_id_7c8957a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.article.author.username,
      },
    }}},[_c('img',{attrs:{"src":"article.author.image"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username,
        },
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD,YYYY")))+"</span>")],2),_vm._ssrNode(" "),_c('follow-author',{attrs:{"author":_vm.article.author}}),_vm._ssrNode("\n    \n  "),_c('favorite',{attrs:{"article":_vm.article}})],2)}
var article_metavue_type_template_id_7c8957a6_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=7c8957a6&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/favorite.vue?vue&type=template&id=fa4dd708&
var favoritevue_type_template_id_fa4dd708_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-sm btn-outline-primary",class:{
    active: _vm.article.favorited,
  },attrs:{"disabled":_vm.favoritedDisable},on:{"click":function($event){return _vm.onFavorite(_vm.article)}}},[_vm._ssrNode("<i class=\"ion-heart\"></i>\n    Favorite Post\n  <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span>")])}
var favoritevue_type_template_id_fa4dd708_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/favorite.vue?vue&type=template&id=fa4dd708&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/favorite.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var favoritevue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      favoritedDisable: false
    };
  },

  methods: {
    async onFavorite(article) {
      this.favoritedDisable = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["e" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await Object(api_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      this.favoritedDisable = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/favorite.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_favoritevue_type_script_lang_js_ = (favoritevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/favorite.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_favoritevue_type_script_lang_js_,
  favoritevue_type_template_id_fa4dd708_render,
  favoritevue_type_template_id_fa4dd708_staticRenderFns,
  false,
  injectStyles,
  null,
  "530ded1a"
  
)

/* harmony default export */ var favorite = (component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/follow-author.vue?vue&type=template&id=4cd1f0dc&
var follow_authorvue_type_template_id_4cd1f0dc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-sm btn-outline-secondary",attrs:{"disabled":_vm.isActing},on:{"click":function($event){return _vm.followUser(_vm.author)}}},[_vm._ssrNode("<i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n    "+_vm._s(_vm.author.following ? "Unfollow" : "Follow")+" "+_vm._s(_vm.author.username)+"\n  ")+"<span class=\"counter\">(0)</span>")])}
var follow_authorvue_type_template_id_4cd1f0dc_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/follow-author.vue?vue&type=template&id=4cd1f0dc&

// EXTERNAL MODULE: ./api/profile.js
var profile = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/follow-author.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var follow_authorvue_type_script_lang_js_ = ({
  name: "FollowAuthor",
  props: {
    author: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isActing: false
    };
  },

  methods: {
    async followUser(author) {
      this.isActing = true;
      let fn = null;

      if (author.following) {
        fn = profile["c" /* unfollowUser */];
      } else {
        fn = profile["a" /* followUser */];
      }

      const {
        data
      } = await fn(author.username);
      author.following = !author.following;
      this.isActing = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/follow-author.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_follow_authorvue_type_script_lang_js_ = (follow_authorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/follow-author.vue



function follow_author_injectStyles (context) {
  
  
}

/* normalize component */

var follow_author_component = Object(componentNormalizer["a" /* default */])(
  components_follow_authorvue_type_script_lang_js_,
  follow_authorvue_type_template_id_4cd1f0dc_render,
  follow_authorvue_type_template_id_4cd1f0dc_staticRenderFns,
  false,
  follow_author_injectStyles,
  null,
  "553f9b40"
  
)

/* harmony default export */ var follow_author = (follow_author_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  components: {
    Favorite: favorite,
    FollowAuthor: follow_author
  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function article_meta_injectStyles (context) {
  
  
}

/* normalize component */

var article_meta_component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_7c8957a6_render,
  article_metavue_type_template_id_7c8957a6_staticRenderFns,
  false,
  article_meta_injectStyles,
  null,
  "43552cd3"
  
)

/* harmony default export */ var article_meta = (article_meta_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=2c27bbcc&
var article_commentsvue_type_template_id_2c27bbcc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.commentBody))+"</textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button"+(_vm._ssrAttr("disabled",_vm.isActing))+" class=\"btn btn-sm btn-primary\">\n        Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n        "+_vm._s(comment.body)+"\n      ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: {
            username: comment.author.username,
          },
        }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
          name: 'profile',
          params: {
            username: comment.author.username,
          },
        }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,"MMM DD,YYYY")))+"</span> "),(comment.canModify)?_c('delete',{attrs:{"comment":comment,"slug":_vm.article.slug},on:{"getComments":_vm.getComments}}):_vm._e()],2)],2)})],2)}
var article_commentsvue_type_template_id_2c27bbcc_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=2c27bbcc&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/delete.vue?vue&type=template&id=7e04f631&
var deletevue_type_template_id_7e04f631_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',_vm._g(_vm._b({staticClass:"mod-options",on:{"click":function($event){return _vm.handlerDelete(_vm.comment)}}},'span',_vm.$attrs,false),_vm.$listeners),[_vm._ssrNode("<i class=\"ion-trash-a\"></i>")])}
var deletevue_type_template_id_7e04f631_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/delete.vue?vue&type=template&id=7e04f631&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/delete.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var deletevue_type_script_lang_js_ = ({
  name: "DeleteComment",
  props: {
    comment: {
      type: Object,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isActing: false
    };
  },

  methods: {
    async handlerDelete(comment) {
      console.log(comment);
      const params = {
        slug: this.slug,
        id: comment.id
      };
      const {
        data
      } = await Object(api_article["d" /* deleteComments */])(params);
      this.$emit("getComments", this.slug);
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/delete.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_deletevue_type_script_lang_js_ = (deletevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/delete.vue



function delete_injectStyles (context) {
  
  
}

/* normalize component */

var delete_component = Object(componentNormalizer["a" /* default */])(
  components_deletevue_type_script_lang_js_,
  deletevue_type_template_id_7e04f631_render,
  deletevue_type_template_id_7e04f631_staticRenderFns,
  false,
  delete_injectStyles,
  null,
  "a6122c7c"
  
)

/* harmony default export */ var components_delete = (delete_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  components: {
    Delete: components_delete
  },

  data() {
    return {
      comments: [],
      isActing: false,
      commentBody: null // ...mapState(["user"]),

    };
  },

  mounted() {
    this.getComments(this.article.slug);
  },

  methods: {
    async publishComments() {
      this.isActing = true;
      const {
        data
      } = await Object(api_article["a" /* addComments */])({
        slug: this.article.slug,
        body: this.commentBody
      });
      this.isActing = false;
      this.getComments(this.article.slug);
    },

    async getComments(slug) {
      const {
        data
      } = await Object(api_article["f" /* getArticleComments */])(slug);
      data.comments.forEach(item => {
        item.canModify = item.author.username === this.user.username;
      });
      this.comments = data.comments;
    }

  },
  computed: { ...Object(external_vuex_["mapState"])(["user"])
  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_2c27bbcc_render,
  article_commentsvue_type_template_id_2c27bbcc_staticRenderFns,
  false,
  article_comments_injectStyles,
  null,
  "7b041a42"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib??ref--2-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "ArticleIndex",

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["g" /* getArticleDetail */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },

  head() {
    return {
      title: `${this.article.title} - RealWord`,
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "3d86be63"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map