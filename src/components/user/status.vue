<template>
  <Tabs type="card">
    <Tab-pane label="流程进度">
      <div class="warning">
        特别提醒：前往医院时检查和免疫服务时，请携带个人身份证
        <br/>
        如有问题，请联系客服处理
      </div>
      <br/>
      <Steps :current='this.list' direction="vertical" :status="this.jzs">
        <Step title="筛查" :content='this.screeningtext'></Step>
        <Step title="完成筛查" :content='this.screeningRes'></Step>
        <Step title="免疫服务" :content='this.injection'></Step>
        <Step title="购买疫苗" :content='this.vaccine'></Step>
        <Step title="免疫第一次" :content="this.fist"></Step>
        <Step title="免疫第二次" :content="this.sec"></Step>
        <Step title="免疫第三次" :content="this.thr"></Step>
        <Step title="完成免疫"></Step>
      </Steps>
    </Tab-pane>
    <Tab-pane label="筛查结果">
      <div class="content">
        <h3 class="center">您的筛查结果</h3>
        <div class="ra gre" v-if="this.screening.screeningRes == 1">
          <div>阴性</div>
          <div>可接种</div>
        </div>
        <div class="ra reds" v-if="this.screening.screeningRes == 2">
          <div>阳性</div>
          <div>不能接种</div>
        </div>
        <div class="ra yee" v-if="this.screening.screeningRes == 3">
          <div>待定</div>
          <div>请咨询专家</div>
        </div>
        <div class="ra gre" v-if="this.screening.screeningRes == 4">
          <div>自愿跳过</div>
          <div>筛查服务</div>
        </div>
        <div class="ra gra" v-if="this.screening == ''">
          <div>暂无结果</div>
          <div>耐心等待</div>
        </div>
        <div>{{ this.screening.jcjq }}</div>
      </div>
    </Tab-pane>
  </Tabs>
</template>

<script type="text/ecmascript-6">
  import { getScreeningRes, getUserAllStatus } from '../../interface';

  export default {
    name: 'status',
    data() {
      return {
        screening: '',
        jzs: '',
        screeningtext: '您尚未预约该服务',
        screeningRes: '暂无结果',
        injection: '您尚未预约该服务',
        vaccine: '您尚未预约该服务',
        fist: '尚未安排时间',
        sec: '尚未安排时间',
        thr: '尚未安排时间',
        list: '',
        info: '',
        scdata: '暂无信息',
      };
    },
    created() {
      this.getScreening();
      this.getUserAllStatus();
    },
    methods: {
      getStatuses(data, dd, ddd) {
        if (dd === 1) {
          if (data === 0) {
            this.screeningtext = '你尚未预约该服务';
          } else if (data === 3) {
            this.screeningtext = '你已预约该服务，请按照短信前往医院进行筛查';
          }
        }

        if (dd === 2) {
          this.screeningtext = '你已预约该服务，请按照短信前往医院进行筛查';
          if (data === 1) {
            this.screeningRes = '可以接种';
          } else if (data === 2) {
            this.screeningRes = '不能接种';
            if (dd === 2) {
              this.jzs = 'error';
            }
          } else if (data === 3) {
            this.screeningRes = '请根据专家建议选择接种';
          } else if (data === 4) {
            this.screeningRes = '自愿跳过筛查';
          }
        }

        if (dd === 3) {
          this.screeningtext = '你已预约该服务，请按照短信前往医院进行筛查';
          this.screeningRes = '可以接种';
          if (data === 0) {
            this.injection = '您尚未预约该服务';
          } else if (data === 1) {
            this.injection = '待付款，如已付款，请申请确认付款信息';
          } else if (data === 2) {
            this.injection = '付款信息确认中';
          } else if (data === 3) {
            this.injection = '已预约免疫服务';
          }
        }

        if (dd === 4) {
          this.screeningtext = '你已预约该服务，请按照短信前往医院进行筛查';
          this.screeningRes = '可以接种';
          this.injection = '已预约免疫服务';
          if (data === 0) {
            this.vaccine = '您尚未购买疫苗';
          } else if (data === 1) {
            this.vaccine = '待付款，如已付款，请申请确认付款信息';
          } else if (data === 2) {
            this.vaccine = '付款信息确认中';
          } else if (data === 3) {
            this.vaccine = '已购买疫苗，请等待安排免疫时间';
          }
        }

        if (dd === 5) {
          this.screeningtext = '你已预约该服务，请按照短信前往医院进行筛查';
          this.screeningRes = '可以接种';
          this.injection = '已预约免疫服务';
          this.vaccine = '已购买疫苗，请等待安排免疫时间';
          if (data === 1) {
            this.fist = '已安排第一次免疫时间，请按照短信前往免疫';
            if (ddd === 1) {
              this.fist = '第一次已免疫';
            }
          } else if (data === 2) {
            this.fist = '第一次已免疫';
            this.sec = '已安排第二次免疫时间，请按照短信前往免疫';
            if (ddd === 1) {
              this.sec = '第二次已免疫';
            }
          } else if (data === 3) {
            this.fist = '第一次已免疫';
            this.sec = '第二次已免疫';
            this.thr = '已安排第三次免疫时间，请按照短信前往免疫';
            if (ddd === 1) {
              this.thr = '第三次已免疫';
            }
          }
        }
        if (dd === 6) {
          this.screeningtext = '你已预约该服务，请按照短信前往医院进行筛查';
          this.screeningRes = '可以接种';
          this.injection = '已预约免疫服务';
          this.vaccine = '已购买疫苗，请等待安排免疫时间';
          this.fist = '第一次已免疫';
          this.sec = '第二次已免疫';
          this.thr = '第三次已免疫';
        }
      },
      getScreening() {
        this.$ajax({
          method: 'get',
          url: getScreeningRes(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.screening = res.data;
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
      },
      getUserAllStatus() {
        this.$ajax({
          method: 'get',
          url: getUserAllStatus(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.list = res.data[0] - 1;
          const d = res.data[1] - 2;
          if (res.data[0] === 5) {
            this.list = 5 + d;
          }
          if (res.data[0] === 6) {
            this.list = 7;
          }
          this.getStatuses(res.data[1], res.data[0], res.data[2]);
        }).catch((e) => {
          console.log(e);
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
    color: #fff;
    font-size: 16px;
    padding: 26px 0;
  }
  .gre {
    background: #19be6b;
  }
  .reds {
    background: #ed3f14;
  }
  .yee {
    background: #ff9900;
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
  .gra {
    background: #bbbec4;
  }
  .warning {
    color: #ff9900;
  }
</style>
