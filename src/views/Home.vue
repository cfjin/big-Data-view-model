<!--
  功能：vue页面
  作者：cfjin
  时间：2021年10月22日 14:55:33
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="page">
    <div class="header">
      <span>大屏展示</span>
      <dv-decoration-5 class="aa" />
    </div>
    <div class="main-one">
      <div class="main-one-sub one-left">

      </div>
      <div class="main-one-sub one-right">
      </div>
    </div>
    <div class="main-two" :style="{height: Height + 'vw'}">
      <div class="main-two-sub two-left">
      </div>
      <div class="main-two-sub two-right">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'demo',
    props: {},
    components: {
  
    },
    data() {
      return {
        TopValue: 0,
        leftValue: 0,
        Height: 300
      }
    },
    computed: {},
    watch: {},
    methods: {},
    beforeCreate() {},
    created() {

    },
    beforeMount() {},
    mounted() {
      this.Height = (window.innerHeight - 714) / 1920 * 100; //1920为设计稿宽度
    },
    beforeUpdate() {},
    updated() {},
    /**
     * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
     */
    activated() {},
    /**
     * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
     */
    deactivated() {},
    /**
     * 实例销毁之前调用。在这一步，实例仍然完全可用。
     */
    beforeDestroy() {},
    /**
     * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
     * 所有的事件监听器会被移除，所有的子实例也会被销毁。
     */
    destroyed() {}
  }
</script>

<style scoped lang="scss">
  .page {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url("../assets/pageBg.png");
    overflow: hidden;
  }

  .header {
    width: 100%;
    height: 64px;
    background: white;
    text-align: center;

    span {
      color: black;
      font-size: 24px;
      display: inline-block;
      // padding-top: 12px;
    }
  }

  .main-one {
    width: 100%;
    height: 650px;
    display: flex;

    .main-one-sub {
      width: 50%;
      height: 100%;
    }

    .one-left {
      background: rgb(86, 13, 134);
    }

    .one-right {
      background: rgb(16, 171, 182);
    }
  }

  .main-two {
    width: 100%;
    display: flex;

    .main-two-sub {
      width: 50%;
      height: 100%;
    }

    .two-left {
      background: rgb(57, 173, 12);
    }

    .two-right {
      background: rgb(235, 123, 19);
    }

  }

  .aa {
    width: 300px;
    height: 40px;
    margin: 0 auto;
    margin-top: -20px;
  }
</style>