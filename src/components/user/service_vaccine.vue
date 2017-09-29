<template>
  <div>
    <img :src='imgsrc' width="115%" class="banner"/>
    <br/>
    <br/>
    <div>
      <h3>服务内容介绍</h3>
      <p>
        我们为您免费提供HPV9阶疫苗购买联系方式。您在购买疫苗后我们将会为您安排接种时间及地点。
      </p>
    </div>
    <br/>
    <br/>
    <div>
      <h3>特别说明</h3>
      <p>为了让您更好享受我们的服务，我们将会对您进行一对一的全程电话服务，请保持电话畅通。</p>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Button type="primary" class="center" @click="vaccine" v-if="this.vaccines == null">获取疫苗信息</Button>
    <Button type="primary" class="center" @click="vaccineGO" v-if="this.vaccines == 1">已付款，申请确认</Button>
    <Button type="primary" class="center" @click="vaccineGO" v-if="this.vaccines == 2">提醒确认收款</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { vaccine, getShopType, vaccineGO } from '../../interface';
  import img from '../../assets/banner.png';

  export default {
    name: 'vaccine',
    data() {
      return {
        vaccines: '',
        imgsrc: img,
      };
    },
    created() {
      this.getShopType();
    },
    methods: {
      getShopType() {
        const par = '?shopID=3';
        this.$ajax({
          method: 'get',
          url: getShopType() + par,
          dataType: 'JSON',
        }).then((res) => {
          this.vaccines = res.data.status;
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      vaccine() {
        this.$ajax({
          method: 'get',
          url: vaccine(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 1) {
            this.success('预约成功');
            window.location.reload();
          }
          if (res.data === 1308) {
            this.error('您已经预约该服务，请勿重复预约');
            window.location.reload();
          }
          if (res.data === 1311) {
            this.error('您尚未开始免疫服务或尚未确认付款信息，请处理后再试');
            window.location.reload();
          }
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      vaccineGO() {
        this.$ajax({
          method: 'get',
          url: vaccineGO(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 1) {
            this.success('已发出申请，系统确认后将通过短信通知');
            setTimeout(()=>{this.$router.push({ name: 'service' });},1500);
          }
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      error(data) {
        this.$Message.error(data);
      },
      success(data) {
        this.$Message.success(data);
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
</style>
