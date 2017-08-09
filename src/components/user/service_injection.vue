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
    <div class="success" v-if="this.screeningStatus.status == 3">您的付款信息已经确认，请前往购买疫苗<br/>疫苗购买后我们将尽快为您安排接种时间</div>
    <br/>
    <Button type="primary" class="center" @click="injection" v-if="this.screeningStatus == ''">确认预约注射服务</Button>
    <Button type="primary" class="center" @click="injectionGO" v-if="this.screeningStatus.status == 1">已付款，申请确认</Button>
    <Button type="primary" class="center" @click="injectionGO" v-if="this.screeningStatus.status == 2">提醒确认收款</Button>
    <Button type="primary" class="center" @click="ym" v-if="this.screeningStatus.status == 3">获取疫苗</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { payLast, payLastGO, getShopType } from '../../interface';

  export default {
    name: 'injection',
    data() {
      return {
        screeningStatus: '',
      };
    },
    created() {
      this.getShopType();
    },
    methods: {
      ym() {
        this.$router.push({ name: 'vaccine' });
      },
      getShopType() {
        const par = '?shopID=2';
        this.$ajax({
          method: 'get',
          url: getShopType() + par,
          dataType: 'JSON',
        }).then((res) => {
          this.screeningStatus = res.data;
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      injection() {
        this.$ajax({
          method: 'get',
          url: payLast(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 1) {
            this.success('预约成功,已通过短信将付款方式发送至您的手机，请注意查收');
          }
          if (res.data === 1308) {
            this.error('您已经预约该服务，请勿重复预约');
          }
          if (res.data === 1309) {
            this.error('您还未收到筛查结果，不能预约注射服务');
          }
          if (res.data === 1310) {
            this.error('您的筛查结果为阳性，不能预约注射服务，请咨询专家了解后续治疗方案');
          }
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      injectionGO() {
        this.$ajax({
          method: 'get',
          url: payLastGO(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 1) {
            this.success('已发出申请，系统确认后将通过短信通知');
          }
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      error(data) {
        this.$Message.error(data);
      },
      success(data) {
        this.$Message.success({
          content: data,
          duration: 6,
        });
      },
    },
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
  .success{
    color: #19be6b;
    font-size: 0.8rem;
    text-align: center;
  }
</style>
