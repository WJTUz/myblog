<template>
  <div>
    <div class="home-page">
      <div class="left"><drop-list :choose-list="leftDropList" class="home-left-drop-list"/></div>
      <div class="center"><h2>我是首页中间的数据</h2></div>
      <div class="right"><alert-box/></div>
    </div>
  </div>

</template>

<script>
  import AlertBox from "../../components/content/alertbox/AlertBox";
  import DropList from "../../components/common/droplist/DropList";
  export default {
    name: "Home",
    components: {
      AlertBox,
      DropList
    },
    data() {
      return {
        leftDropList: ['推荐','动态','Python','Java','前端','架构','数据库','人工智能','计算机视觉','其它']//数据在服务器端存储，这里模拟
      }
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
    text-align: center;
    flex-grow: 0.5;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .left .home-left-drop-list {
    flex: 0 0 auto;
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