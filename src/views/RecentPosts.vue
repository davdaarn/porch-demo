<template>
  <div>
    <blog-post
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      :index="index"
    ></blog-post>
  </div>
</template>

<script>
import axios from "axios";
import BlogPost from "../components/BlogPost";

export default {
  components: {
    BlogPost
  },

  data() {
    return {
      posts: [],
      isLoadingIndex: null,
      activePost: null
    };
  },

  created() {
    this.handleGetPosts();
  },

  methods: {
    handleGetPosts() {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        return (this.posts = response.data);
      });
    }
  }
};
</script>

<style>
</style>