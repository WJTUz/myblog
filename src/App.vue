<template>
  <div id="app">
    <main-nav-bar/>
    <router-view class="main-body"></router-view>

  </div>
</template>

<script>
import MainNavBar from "./components/content/mainnavbar/MainNavBar";
export default {
  name: 'App',
  components: {
    MainNavBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
  .main-body{
    display: flex;
  }
</style>
