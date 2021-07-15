<template>
  <div class="search-list">
    <!-- 装同级的多个容器 -->
    <transition-group name="list" tag="ul">
      <li class="search-item" v-for="(item, index) in searches" :key="index">
        <span class="text" @click="selectName(item)">{{ item }}</span>
        <span class="icon-box" @click="deleteItem(index)">
          <i class="icon">&#xe656;</i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    searches: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    deleteItem(item) {
      this.$emit("deleteItem", item);
    },
    selectName(item){
      this.$emit("selectName",item)
    }
  },
};
</script>

<style lang="less">
.search-list {
  .search-item {
    display: flex;
    align-items: center;
    height: 40px;
    overflow: hidden;

    &.list-enter-active,
    &.list-leave-active {
      transition: all 0.1s;
    }

    &.list-enter,
    &.list-leave-to {
      height: 0;
    }

    .text {
      flex: 1;
      color: #fff;
    }

    .icon-box {
      .icon {
        font-size: 18px;
        color: #fff;
      }
    }
  }
}
</style>