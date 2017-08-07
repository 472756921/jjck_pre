<template>
  <Tabs type="card">
    <Tab-pane label="筛查结果">
      <div class="content">
        <h3 class="center">您的筛查结果</h3>
        <div class="ra">
          <div>阴性</div>
          <div>可接种</div>
        </div>
      </div>
    </Tab-pane>
    <Tab-pane label="流程进度">
      <div class="warning">特别提醒：前往医院时，请携带个人身份证</div>
      <br/>
      <Steps :current="0" direction="vertical">
        <Step title="筛查" content="您当前还未预约筛查，等待付款，付款信息确认中，准备筛查（2017-12-12 9:00，XXX医院，等待筛查结果）"></Step>
        <Step title="完成筛查" content="阳性，阴性"></Step>
        <Step title="注射服务" content="您当前还未预约服务，等待付款，付款信息确认中，付款信息已确认"></Step>
        <Step title="购买疫苗" content="您当前还购买疫苗，等待付款，付款信息确认中，付款信息已确认"></Step>
        <Step title="注射第一针" content="日程安排中，于2012-12-21 9:00 XXX医院接受第一次接种"></Step>
        <Step title="注射第二针" content="日程安排中，于2012-12-21 9:00 XXX医院接受第二次接种"></Step>
        <Step title="注射第三针" content="日程安排中，于2012-12-21 9:00 XXX医院接受第三次接种"></Step>
      </Steps>

    </Tab-pane>
  </Tabs>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'status',
  };
</script>

<style scoped>
  .content {
    padding: 2rem 0;
  }
  .center {
    text-align: center;
  }
  .ra {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    margin: 2rem auto;
    background: #19be6b;
    color: #fff;
    font-size: 16px;
    padding: 26px 0;
  }
  .green {
    color: #19be6b;
  }
  .blue {
    color: #2d8cf0;
  }
  .red {
    color: #ed3f14;
  }
  .warning {
    color: #ff9900;
  }
</style>
