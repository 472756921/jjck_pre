<template>
  <div>
    <img src="../../assets/banner.png" width="115%" class="banner"/>
    <br/>
    <br/>
    <div>
      <h3>服务内容介绍</h3>
      <p>HVP人乳头瘤病毒是一种属于乳多空病毒科的乳头瘤空泡病毒A属，是球形DNA病毒，能引起人体皮肤黏膜的鳞状上皮增殖。表现为寻常疣、生殖器疣（尖锐湿疣）等症状。 随着性病中尖锐湿疣的发病率急速上升和宫颈癌、肛门癌等的增多，人乳头瘤病毒（hpv）感染越来越引起人们的关注。</p>
    </div>
    <br/>
    <P>
      该服务免费为您提供正规医疗机构HVP检测项目的预约、检测及结果解析服务，为您后续正确就诊处方HPV疫苗提供帮助支持。
    </P>
    <br/>
    <div>
      <h3>特别说明</h3>
      <p>为了让您更好享受我们的整体服务，此项服务需预付￥1000.00元。</p>
      <p>如果您在购买中遇到任何问题，请联系客服处理哦。</p>
    </div>
    <br/>
    <Button type="primary" class="center" @click="screening">确认支付检测费用</Button>
    <div class="red">（该项检测不适用于无性检验女性，请谨慎选择）</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { screening } from '../../interface';

  export default {
    name: 'screening',
    methods: {
      screening() {
        this.$ajax({
          method: 'get',
          url: screening(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 1) {
            this.success('预约成功');
          }
          if (res.data === 1308) {
            this.error('您已经预约该服务，请勿重复预约');
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
    text-align: center;
    line-height: 2rem;
  }
</style>
