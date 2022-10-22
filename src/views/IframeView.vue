<template>
  <!--直接修改iframe的src会推入新的路由，key不同则每次生成新的iframe实例-->
  <iframe :src="src" class="iframe-box" :key="src"></iframe>
</template>

<script>
export default {
  name: "IframeView",
  computed: {
    src() {
      const name = this.$route.name;
      switch (name) {
        case "vue2":
          return "https://zlx01.github.io/vue2-deploy-gh-pages/#/";
        case "vue3":
          return "https://zlx01.github.io/vue3-deploy-gh-pages/#/";
        default:
          return "#";
      }
    },
  },
};
</script>

<style scoped>
.iframe-box {
  width: 100%;
  height: 100%;
  border: none;
  /*解决iframe高度100%时，出现垂直滚动条*/
  display: block;
}
</style>
