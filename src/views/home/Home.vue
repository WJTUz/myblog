<template>
  <div>
    <div class="home-page">
      <div class="left"><h2>我是首页左边的数据</h2></div>
      <div class="center"><h2>我是首页中间的数据</h2></div>
      <div class="right"><alert-box/></div>
    </div>
  </div>

</template>

<script>
  import AlertBox from "../../components/content/alertbox/AlertBox";
  export default {
    name: "Home",
    components: {
      AlertBox
    }
  }
</script>

<style scoped>
  .home-page {
    display: flex;
    width: 1080px;
    margin: 0 auto;
  }

  .left {
    flex: 1;
    margin-top: 30px;
    height: 400px;
    text-align: center;
    flex-grow: 0.5;
  }

  .center {
    flex: 1;
    margin-top: 30px;
    height: 1000px;
    flex-grow: 2;
    text-align: center;
  }

  .right {
    flex: 1;
    margin-top: 30px;
    text-align: center;
    flex-grow: 0.5;
  }
</style>