<template>
  <nav-bar class="home-nav-bar">
    <div slot="left">
      <img src="~assets/img/common/logo.svg" alt="">
    </div>
    <div slot="center" class="home-nav-bar-center">
      <div v-for="(item, index) in navBarLists"
           @mouseenter="itemFocus(index)"
           @mouseleave="itemFocusOut"
           :key="index" class="home-nav-bar-center-item"
           :class="{navBarFocus: index === navBarFocusIndex}">{{item}}

      </div>
    </div>
    <div slot="right" v-on="{mouseenter:userFocus, mouseleave:userFocusOut}">
      <img src="~assets/img/common/user/user-focus.svg" alt="" v-if="isUserFocus" >
      <img src="~assets/img/common/user/user.svg" alt="" v-else>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "../../../components/common/NavBar";
  export default {
    name: "HomeNavBar",
    data() {
      return {
        isUserFocus: false,
        navBarLists: ['首页', '博客', '留言板', '其它', '小应用'],
        navBarFocusIndex: -1
      }
    },
    components: {
      NavBar
    },
    methods: {
      userFocus() {
        if (!this.isUserFocus)
          this.isUserFocus = !this.isUserFocus
      },
      userFocusOut() {
        if (this.isUserFocus)
          this.isUserFocus = !this.isUserFocus
      },
      itemFocus(index) {
        this.navBarFocusIndex = index
      },
      itemFocusOut() {
        this.navBarFocusIndex = -1
      }
    }
  }
</script>

<style scoped>
  .home-nav-bar {

  }

  .home-nav-bar img {
    height: 30px;
    width: 30px;
  }

  .home-nav-bar-center {
    display: flex;
    text-align: center;
    font-size: 13px;
  }

  .home-nav-bar-center .home-nav-bar-center-item {
    flex: 1;
    width: 100px;
  }

  .home-nav-bar-center .navBarFocus {
    text-decoration: underline;
  }

</style>