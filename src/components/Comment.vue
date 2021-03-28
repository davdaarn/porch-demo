<template>
  <ul class="m-4">
    <li class="text-gray-700 text-base bg-gray-100 rounded-md m-2 p-2">
      <div class="p-4">
        <div class="pb-4 flex flex-row justify-between">
          <a :href="`mailto:${comment.email}`" class="text-blue-400">{{
            comment.email
          }}</a>
          <div class="flex flex-row text-yellow-400">
            <div>
              <div v-if="comment.rating >= 1" class="mdi mdi-star"></div>
              <div v-else class="mdi mdi-star-outline"></div>
            </div>
            <div>
              <div v-if="comment.rating >= 2" class="mdi mdi-star"></div>
              <div v-else class="mdi mdi-star-outline"></div>
            </div>
            <div>
              <div v-if="comment.rating >= 3" class="mdi mdi-star"></div>
              <div v-else class="mdi mdi-star-outline"></div>
            </div>
            <div>
              <div v-if="comment.rating >= 4" class="mdi mdi-star"></div>
              <div v-else class="mdi mdi-star-outline"></div>
            </div>
            <div>
              <div v-if="comment.rating >= 5" class="mdi mdi-star"></div>
              <div v-else class="mdi mdi-star-outline"></div>
            </div>
          </div>
        </div>
        <div class="italic">"{{ comment.body }}"</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>