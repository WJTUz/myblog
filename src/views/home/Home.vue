<template>
  <div>
    <home-nav-bar/>
    <div class="home-page">
      <div class="left">left</div>
      <div class="center">center</div>
      <div class="right">right</div>
    </div>
  </div>

</template>

<script>
  import HomeNavBar from "./childrencomps/HomeNavBar";
  export default {
    name: "Home",
    components: {
      HomeNavBar
    }
  }
</script>

<style scoped>
  .home-page {
    display: flex;
    justify-content: center;
  }

  .left {
    flex: 1;
    margin-top: 30px;
    height: 400px;
  }

  .center {
    flex: 1;
    margin-top: 30px;
    height: 1000px;
    flex-grow: 2
  }

  .right {
    flex: 1;
    margin-top: 30px;
    height: 300px;
  }
</style>