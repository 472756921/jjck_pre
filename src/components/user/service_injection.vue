<template>
  <div>
    <img src="../../assets/banner.png" width="115%" class="banner"/>
    <br/>
    <br/>
    <div>
      <h3>服务内容介绍</h3>
      <P>
        该服务为您提供正规医疗机构HVP疫苗注射服务，时间流程安排，并且免费为您提供疫苗购买渠道，以便您能够顺利的购买疫苗。
      </P>
    </div>
    <br/>
    <div>
      <h3>特别说明</h3>
      <p>为了让您更好享受我们的整体服务，此项服务需预付￥4000.00元（不包含疫苗费用）。为了让您享受到我们的高端服务，我们将会对您进行一对一的全程电话服务。</p>
    </div>
    <br/>
    <br/>
    <br/>
    <Button type="primary" class="center">确认预约注射服务</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'injection',
  };
</script>

<style scoped>
  .banner{
    position: relative;
    margin: -18px;
  }
  .center{
    width: 200px;
    display: block;
    margin: 0 auto;
  }
  .red {
    color: #ed3f14;
  }
</style>
