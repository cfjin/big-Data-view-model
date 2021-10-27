<!--
  功能：vue页面
  作者：cfjin
  时间：2021年10月26日 14:47:02
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="page-box">
    <!-- <dv-water-level-pond :config="{ data: [66, 45], shape: 'roundRect'}" style="width:150px;height:200px" /> -->
    <div class="car-main-box">  
      <div class="car-sub-box">
        <img class="point" src="@/assets/衣架.png" alt="">
        <img class="point2" src="@/assets/衣架.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'car-move',
    props: {},
    components: {},
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
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
  .page-box {
    // display: inline-block;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    // border-radius: 20px;
    // background: rgba(19, 25, 47, 0.8);


    .car-main-box {
      width: 220px;
      height: 620px;
      margin: 0 auto;
      border: 2px solid red;
      border-radius: 20px;
      position: relative;

      .car-sub-box {
        width: 200px;
        height: 600px;
        margin: 10px auto;
        // border: 1px solid red;
        border: 2px solid red;
        border-radius: 20px;
        position: relative;

        .point {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          animation: mymove 10s linear infinite;
        }

        .point2 {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 580px;
          left: 180px;
          animation: mymove2 10s linear infinite;
        }
      }
    }
  }



  @keyframes mymove {
    0% {
      top: 0;
      left: 0;
    }

    37% {
      top: 580px;
      left: 0;
    }

    37.5% {
      top: 580px;
      left: 20px;
    }

    50% {
      top: 580px;
      left: 180px;
    }

    87% {
      top: 20px;
      left: 180px;
    }

    87.5% {
      top: 0px;
      left: 180px;
    }

    100% {
      top: 0;
      left: 0;
    }
  }

  @keyframes mymove2 {
    0% {
      top: 580px;
      left: 180px;
    }

    37.5% {
      top: 20px;
      left: 180px;
    }

    37.5% {
      top: 0px;
      left: 180px;
    }

    50% {
      top: 0;
      left: 0;
    }
    87% {
      top: 580px;
      left: 0;
    }

    87.5% {
      top: 580px;
      left: 20px;
    }
    100% {
      top: 580px;
      left: 180px;
    }


  }
</style>