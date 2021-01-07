<template>
  <div>
    <h1 style="color: red">Search Result for {{ quary }}</h1>
    <div class="spinner"></div>

  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      quary: this.$route.params.query,
      loading: false,
    };
  },
  watch: {
    "$route.params.query": function (search_quary) {
      this.quary = search_quary;
    },
  },
};
</script>

<style scoped>
.spinner {
  display: block;
  margin: auto;
  height: 2em;
  width: 2em;
  border: 6px solid rgba(0, 174, 239, 0.2);
  border-top-color: rgba(0, 174, 239, 0.8);
  border-radius: 50%;
  animation: rotation 0.6s infinite linear;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

</style>