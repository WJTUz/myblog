<template>
  <div class="drop-list">
    <drop-list-item v-for="(item, index) in chooseList" :itemName="item"
                    :key="index" class="drop-list-item" v-show="isListDropped" @listClick="isListDropped=!isListDropped"/>
    <drop-list-item v-if="!isListDropped" :item-name="chooseList[0]" class="drop-list-item" @listClick="isListDropped=!isListDropped"/>
  </div>
</template>

<script>
  import DropListItem from "./DropListItem";
  export default {
    name: "DropList",
    props: {
      chooseList: {
        type: Array,
        default: []
      }
    },
    components: {
      DropListItem
    },
    data() {
      return {
        isListDropped: true
      }
    }

  }
</script>

<style scoped>
  .drop-list {
    width: 108px;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  .drop-list .drop-list-item {
    text-align: center;
    flex: 0 0 auto;
    height: 45px;
    line-height: 45px;
    border: 1px solid rgba(100, 100, 100, 0.1);
    background-color: rgb(240,248,255);
    padding: 0 2px;
  }
</style>