<template>
  <div>
    <img :src='imgsrc' width='115%' class='banner'/>
    <br/>
    <br/>
    <div>
      <h3>服务内容介绍</h3>
      <p>HVP人乳头瘤病毒是一种属于乳多空病毒科的乳头瘤空泡病毒A属，是球形DNA病毒，能引起人体皮肤黏膜的鳞状上皮增殖。表现为寻常疣、生殖器疣（尖锐湿疣）等症状。 随着性病中尖锐湿疣的发病率急速上升和宫颈癌、肛门癌等的增多，人乳头瘤病毒（hpv）感染越来越引起人们的关注。</p>
    </div>
    <br/>
    <P>
      该服务免费为您提供正规医疗机构HVP检测项目的预约、检测及结果解析、专家咨询建议等服务，为您后续正确就诊处方HPV疫苗提供帮助支持。
    </P>
    <br/>
    <div>
      <h3>特别说明</h3>
      <p>为了让您更好享受我们的整体服务，此项服务需预付￥1000.00元。</p>
      <p>如果您在购买中遇到任何问题，请联系客服处理哦。</p>
    </div>
    <br/>
    <Button type='primary' class='center' @click='screening' v-if="this.res < 12140 && this.res != 404">支付预约服务费用</Button>
    <p class="textcenter" v-if="this.res==12140">细胞学筛查不适用于无性经验女性。如果是，请<br/><span class="bull" @click="tiaoguo">自愿跳过筛查</span></p>
  </div>
</template>

<script type='text/ecmascript-6'>
  import { screening, getUserStep, tjiaoguo } from '../../interface';
  import img from '../../assets/banner.png';

  export default {
    name: 'screening',
    data() {
      return {
        imgsrc: img,
        res: 12143,
      };
    },
    created() {
      this.getUserSteps();
    },
    methods: {
      tiaoguo() {
        const message = confirm('确认自愿跳过筛查？跳过筛查后如产生任何问题将由用户自行承担');
        if (message === true) {
          this.$ajax({
            method: 'get',
            url: tjiaoguo(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (res.data === 1) {
              this.success('您已跳过筛查检测，请等待接种安排');
            }
          }).catch((e) => {
            this.error('服务器有点忙，请稍后再试');
          });
        }
      },
      getUserSteps() {
        this.$ajax({
          method: 'get',
          url: getUserStep(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
            this.res = res.data;
        }).catch((e) => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      screening() {
        this.$ajax({
          method: 'get',
          url: screening(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (typeof window.WeixinJSBridge === 'undefined') {
            if (document.addEventListener) {
              document.addEventListener('window.WeixinJSBridgeReady',
                this.onBridgeReady, false);
            } else if (document.attachEvent) {
              document.attachEvent('window.WeixinJSBridgeReady', this.onBridgeReady);
              document.attachEvent('window.onWeixinJSBridgeReady', this.onBridgeReady);
            }
          } else {
            this.onBridgeReady(res.data.appId, res.data.nonceStr,
              res.data.package, res.data.paySign, res.data.timeStamp);
          }
          setTimeout(()=>{this.$router.push({ name: 'service' });},1500);
        }).catch((e) => {
          this.error(e);
          this.error('服务器有点忙，请稍后再试');
        });
      },
      error(data) {
        this.$Message.error(data);
      },
      success(data) {
        this.$Message.success(data);
      },
      onBridgeReady(appIdV, nonceStrV, prepayIdV, paySignV, timeStampV) {
        window.WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            'appId': appIdV,
            'timeStamp': timeStampV,
            'nonceStr': nonceStrV,
            'package': 'prepay_id=' + prepayIdV,
            'signType': 'MD5',
            'paySign': paySignV,
          },
          (res) => {
            if (res.err_msg === 'get_brand_wcpay_request:ok') {
              location.reload();
            }
          }
        );
      },
    },
  };
</script>

<style scoped>
  .banner{
    position: relative;
    margin: -18px;
  }
  .textcenter{
    text-align: center;
    color: #ed3f14;
  }
  .center{
    width: 200px;
    display: block;
    margin: 0 auto;
  }
  .bull {
    color: #4679ed;
    text-align: center;
    line-height: 1.4rem;
    font-size: 1rem;
  }

</style>
