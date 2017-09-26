<template>
    <div>
      <img :src='imgsrc' width="115%" class="banner"/>
      <br/>
      <br/>
      <br/>
      <h2>关于我们</h2>
      <h4>重庆久佳辰康健康科技有限公司</h4>
      <br/>
      <span style="line-height: 1.4rem;color: #666;">
        重庆久佳辰康健康科技有限公司成立于2017年6月8日，注册资金100万人民币，我们致力于打造专业、便捷、高效的女性健康平台，我们拥有专业医学团队、专业网络软件技术团队、专业策划团队、专业客服团队，我们拥有强大的医疗资源，包括本地大型医疗机构、全国各相关领域专家以及港澳医疗机构。我们的宗旨是：关爱女性，卫护健康！久佳辰康随时随地在您身边，为您排忧解难！
      </span>
    </div>
</template>

<script type="text/ecmascript-6">
  import img from '../../assets/banner.png';

  export default {
    name: 'aboutUS',
    data() {
      return {
        imgsrc: img,
      };
    },
  };
</script>

<style scoped>
  .banner{
    position: relative;
    margin: -18px;
  }
</style>
