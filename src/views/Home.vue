<template>
  <div class="home">
    <div class="content">
      <router-view></router-view>
    </div>
    <van-tabbar route class="tabbar">
      <van-tabbar-item replace to="/vue2" icon="good-job-o">
        Vue 2
      </van-tabbar-item>
      <van-tabbar-item replace to="/vue3" icon="guide-o">Vue 3</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);

  .content {
    flex: 1;
  }

  .tabbar {
    position: static;
  }
}
</style>
