<template>
  <div class="drop-list-item">
    <div class="drop-list-item-name">{{itemName}}</div>
    <div v-if="itemName==='推荐'" @click="dropListClick">
      <img src="~assets/img/common/droplist/arrow_down.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DropListItem",
    data() {
      return {
        currentIndex: -1,
      }
    },
    props: {
      itemName: {
        type: String,
        default: ''
      }
    },
    methods: {
      dropListClick() {
        this.$emit('listClick')
      }
    }
  }
</script>

<style scoped>
  .drop-list-item{
    display: flex;
    justify-content: center;
  }
  .drop-list-item img {
    width: 26px;
    height: 26px;
    position: relative;
    left: 120%;
    top: 7px;
  }

  .drop-list-item-name {
    position: absolute;
  }
</style>