<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    // 局部注册的组件
    components: {},
    name: 'homePage',
    data() {
      return {
      }
    },
    mounted() {
    },
    // 销毁组件
    destroyed() {
    },
    methods: {
     
    },
  }
</script>

<style lang="scss">
  // 滚动条宽度
  ::-webkit-scrollbar {
    width: 12px;
  }
  /* 定义滚动条轨道 */
  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
  /* 滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(217, 217, 217);
  }
</style>
