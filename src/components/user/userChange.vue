<template>
  <div>
    <Input v-model="value1" :maxlength=5 disabled placeholder="姓名">
      <span slot="prepend">姓名<span class="redC"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    </Input>
    <br/>
    <Input v-model="value2" :maxlength=18 disabled placeholder="身份证号">
    <span slot="prepend">身份证号<span class="redC"> *</span></span>
    </Input>
    <br/>
    <Input v-model="value5" :maxlength=18 disabled placeholder="23">
    <span slot="prepend">年龄<span class="redC">  *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    </Input>
    <br/>
    <Input v-model="value5" :maxlength=18 disabled placeholder="男">
    <span slot="prepend">性别<span class="redC">  *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
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
    <br/>
    <br/>
    <Button type="success" class="center">修改</Button>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'userChange',
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
