<template>
  <div class="confim-modal">
    <button @click="isOpen = true">打开</button>

    <!-- 弹窗 -->
    <Teleport to="#footer">
      <div v-if="isOpen">
        <p>嘻嘻嘻嘻嘻嘻嘻</p>
        <button @click="isOpen = false">取消</button>
      </div>
    </Teleport>
    <!-- 这个组件可以把需要渲染的vue内容指定渲染到某一个容器里去 -->
  </div>
  <asyncComponent></asyncComponent>
</template>

<script>
import asyncComponent from './components/suspense.vue'
import { ref } from "vue";
export default {
  components:{
    asyncComponent
  },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
};
</script>
