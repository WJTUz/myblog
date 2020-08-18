<template>
  <nav-bar class="main-nav-bar">
    <div slot="left">
      <img src="~assets/img/common/logo.svg" alt="">
    </div>
    <div slot="center" class="main-nav-bar-center">
      <div v-for="(item, index) in navBarLists"
           @mouseenter="itemFocus(index)"
           @mouseleave="itemFocusOut"
           @click="itemClick(index)"
           :key="index" class="main-nav-bar-center-item"
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
  import NavBar from "../../common/navbar/NavBar";
  export default {
    name: "MainNavBar",
    data() {
      return {
        isUserFocus: false,
        navBarLists: ['首页', '博客', '留言板', '其它', '小应用'],
        navBarFocusIndex: -1,
        navBarListsRouter: ['home', 'blogs', 'messageboard', 'others', 'apps']
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
      },
      itemClick(index) {
        this.$router.push(this.navBarListsRouter[index])
      }
    }
  }
</script>

<style scoped>
  .main-nav-bar {
    flex: 1;
    width: 708px;
    margin: 0 auto;
  }

  .main-nav-bar img {
    height: 30px;
    width: 30px;
  }

  .main-nav-bar-center {
    display: flex;
    text-align: center;
    font-size: 13px;
  }

  .main-nav-bar-center .main-nav-bar-center-item {
    flex: 1;
    width: 100px;
  }

  .main-nav-bar-center .navBarFocus {
    text-decoration: underline;
  }

</style>