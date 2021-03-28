<template>
  <section class="max-w-6xl rounded-md overflow-hidden shadow-lg m-4 mx-auto">
    <div class="p-4 relative">
      <div
        v-if="read"
        class="text-green-200 absolute right-10 text-5xl mdi mdi-check"
      ></div>
      <header>
        <h2 class="font-bold text-2xl m-6">{{ post.title }}</h2>
      </header>
      <transition name="expand">
        <div v-if="activePostIndex === index" class="p-6 italic">
          <div class="pb-2">
            <p>"{{ post.body }} {{ post.body }} {{ post.body }}"</p>
          </div>
          <div v-if="isLoading" class="">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              class="m-auto py-10"
            >
              <circle cx="50" cy="50" r="45" />
            </svg>
          </div>
          <comment
            v-for="(comment, index) in comments"
            :key="index"
            :comment="comment"
          ></comment>
          <button
            v-if="!comments.length"
            @click="handleGetComments(index)"
            class="bg-green-100 hover:bg-green-200 text-gray-500 hover:text-gray-600 font-bold py-2 px-4 mt-4 mr-4 rounded-md"
          >
            Load Comments
          </button>
          <button
            @click="setActivePostIndex(null)"
            class="bg-green-100 hover:bg-green-200 text-gray-500 hover:text-gray-600 font-bold py-2 px-4 mt-4 rounded-md"
          >
            Hide Post
          </button>
        </div>
      </transition>
      <button
        v-if="activePostIndex !== index"
        @click="setActivePostIndex(index)"
        class="bg-green-100 hover:bg-green-200 text-gray-500 hover:text-gray-600 font-bold py-2 px-4 mx-4 rounded-md"
      >
        View Post
      </button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import Comment from "./Comment";

export default {
  components: {
    Comment
  },
  data() {
    return {
      comments: [],
      read: false,
      isLoading: false
    };
  },

  props: {
    post: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      requred: true
    }
  },

  computed: {
    ...mapState({
      activePostIndex: state => {
        return state.activePostIndex;
      }
    })
  },

  methods: {
    setActivePostIndex(index) {
      this.$store.dispatch("setActivePostIndex", index);
    },
    handleGetComments(postId) {
      if (typeof postId === "number") {
        this.isLoading = true;
        axios
          .get(
            `https://jsonplaceholder.typicode.com/comments?postId=${postId + 1}`
          )
          .then(response => {
            setTimeout(() => {
              this.isLoading = false;
              this.read = true;
              return (this.comments = response.data.map(x => {
                return {
                  ...x,
                  rating: Math.floor(Math.random() * Math.floor(5)) + 1
                };
              }));
            }, 2000);
          });
      }
    }
  }
};
</script>

<style>
.expand-enter-active {
  height: auto;
  transition: all 0.5s ease;
}

.expand-enter,
.expand-leave-to {
  opacity: 0;
  height: 0;
}

svg {
  animation: 2s linear infinite svg-animation;
  max-width: 100px;
}

@keyframes svg-animation {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

circle {
  animation: 1.4s ease-in-out infinite both circle-animation;
  display: block;
  fill: transparent;
  stroke: rgba(167, 243, 208);
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 6px;
  transform-origin: 50% 50%;
}

@keyframes circle-animation {
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}

.done {
  font-size: 40px;
}
</style>