<template>
  <div>
    <div class="content">
      <img src="../../assets/banner.png" width="100%" class="am-img-responsive">
      <p class="am-text-sm am-padding-horizontal">BRCA1/2是两种具有抑制恶性肿瘤发生的基因，在调节人体细胞的复制、遗传物质DNA损伤修复、细胞的正常生长方面有重要作用。拥有这个基因突变的家族倾向于具有高乳腺癌发生率。</p>
      <br/>
      <p class="am-text-sm am-padding-horizontal">
        <span style="font-size: 1rem; line-height: 2rem;">费用</span>
        <br/>
        预约普媚研2基因检测 ： ￥4800.00<br/>
      </p>
    </div>
    <br/>
    <Button type="success" @click="yuy" long>预约普媚研2基因检测</Button>

  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserStep, getGoods, buyGoods } from '../../interface';

  export default {
    name: 'jyjc',
    data() {
      return {
        res: 12143,
      };
    },
    created() {
      this.getUserSteps();
    },
    methods: {
      getUserSteps() {
        this.$ajax({
          method: 'get',
          url: getUserStep(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.res = res.data;
          if (this.res == '404') {
            this.error('您还未登录！');
          }
        }).catch((e) => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      yuy() {
        this.$ajax({
          method: 'get',
          url: buyGoods()+"?goods_id=1",
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.res = res.data;
          if( this.res == '401' ){
            this.error('用户不存在！');
          }else if( this.res == '1'){
            this.success('预约成功！');
          }
        }).catch((e) => {
//          this.error(e);
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
</style>
