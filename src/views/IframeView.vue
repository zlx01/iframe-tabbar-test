<template>
  <iframe :src="src" class="iframe-box"></iframe>
</template>

<script>
export default {
  name: "IframeView",
  computed: {
    src() {
      const name = this.$route.name;
      switch (name) {
        case "baidu":
          return "https://www.baidu.com";
        case "game":
          return "https://xingye.me/game";
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
