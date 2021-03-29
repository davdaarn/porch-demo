<template>
  <div
    class="lg:flex lg:items-center lg:justify-start p-8 bg-green-100 fixed w-full t-0 shadow-lg z-10"
  >
    <div class="flex-1 min-w-0 text-gray-600">
      <div
        class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-1"
      >
        <router-link to="/home" class="flex items-center text-sm">
          Home
        </router-link>
        <div class="self-end m-0 mdi mdi-chevron-right"></div>
        <router-link to="/home/blog/recent" class="flex items-center text-sm"
          >Blog</router-link
        >
        <div class="self-end m-0 mdi mdi-chevron-right"></div>
        <router-link to="/home/blog/recent" class="flex items-center text-sm">
          Recent
        </router-link>
      </div>
      <h2 class="text-2xl font-bold leading-7 sm:text-3xl sm:truncate py-2">
        Recent Blog Posts
      </h2>
    </div>
  </div>
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
</template>

<script>
export default {};
</script>

<style>
</style>