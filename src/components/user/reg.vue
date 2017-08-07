<template>
  <div>
    <Input v-model="value1" :maxlength=5>
      <span slot="prepend">姓名<span class="redC"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    </Input>
    <br/>
    <Input v-model="value2" :maxlength=18>
    <span slot="prepend">身份证号<span class="redC"> *</span></span>
    </Input>
    <br/>
    <Input v-model="value3" :maxlength=15>
    <span slot="prepend">联系电话<span class="redC"> *</span></span>
    </Input>
    <br/>
    <Input v-model="value4">
    <span slot="prepend">联系地址<span class="redC"> *</span></span>
    </Input>
    <br/>
    <div>
      <span>团队选择：</span>
      <Button type="primary" size="small">选择团队</Button>
    </div>
    <br/>
    <Checkbox v-model="single" class="ttt"><a href="#/agreement">我已阅读并同意《重庆久佳健康协议》</a></Checkbox>
    <br/>
    <br/>
    <br/>
    <Button type="success" class="center">注册</Button>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'reg',
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        single: false,
      };
    },
  };
</script>

<style scoped>
  .redC{
    color: red;
  }
  .ttt{
    color: #2d8cf0;
  }
  .center{
    display: block;
    margin: 0 auto;
  }
</style>
