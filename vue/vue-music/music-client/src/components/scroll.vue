<!-- 专门做滚动效果 -->
<template>
  <div ref="wrapper">
    <!-- 放插槽 -->
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    click: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: "horizontal",
    },
    listenScroll: {
      type: Boolean,
      default: false,
    },
    pullup: {
      type: Boolean,
      default: false,
    },
    pulldown: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: null,
    },
    beforeScroll: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    setTimeout(() => {
      // 初始化Scroll效果
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        eventPassthrough:
          this.direction === "vertical" ? "vertical" : "horizontal",
      });
      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on("scroll", (pos) => {
          this.$emit("scroll", pos);
        });
      }
      // 是否派发滚动到底部事件，用于上拉加载更多
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("scrollToEnd");
          }
        });
      }
      // 是否派发下拉刷新
      if (this.pulldown) {
        this.scroll.on("touchEnd", (pos) => {
          if (pos.y > 50) {
            this.$emit("pullDown");
          }
        });
      }
      // 是否派发滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, 20);
    },
  },
};
</script>

<style>
</style>