<template>
  <div class="homePageCss">
    <div class="text textAnimationEffect">
      123456789
    </div>
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
      // this.showMark()
    },
    // 销毁组件
    destroyed() {
      // this.hidden()
    },
    methods: {
     
    },
  }
</script>

<style scoped lang="scss">
  .homePageCss {
    width: 100%;
    height: 100%;

    .text {
      width: 100%;
      height: 100%;
      font-size: 80px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(
        to right,
        #ce76ee,
        #c17cf1,
        #a980f3,
        #9086f9,
        #d58cff
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      // color: transparent;
    }
  }

  .textAnimationEffect {
    animation-name: focus-in-contract;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
  }
  @keyframes focus-in-contract {
    0% {
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0);
      opacity: 1;
    }
  }
</style>
