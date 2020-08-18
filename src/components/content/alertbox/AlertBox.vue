<template>
  <div class="alert-box">
    <div v-if="isLogin" class="alert-box-item"><p>欢迎您来到自己的博客{{userName}}</p></div>
    <div v-else class="alert-box-item"><p>您还未登录，请<a @click="loginClick">登录</a></p></div>
  </div>
</template>

<script>
  export default {
    name: "AlertBox",
    data() {
      return {
        isLogin: false,
      }
    },
    props:{
      userName: {
        type: String,
        default: ''
      }
    },
    methods: {
      loginClick() {
        this.isLogin = true
      }

    },
    created() {

    }
  }
</script>

<style scoped>
  .alert-box {
    display: flex;
    text-align: center;
    height: 50px;
    border: 2px solid rgba(100, 100, 100, 0.1);
    box-shadow: 1px 1px 3px rgba(100, 100, 100, 0.1);
    background-color: rgb(240,248,255);
  }

  .alert-box-item {
    flex: 1;
    text-align: center;
  }


</style>