<template>
  <div>
    <Input v-model="value11">
      <span slot="prepend">姓名<span class="redC"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    </Input>
    <br/>
    <Input v-model="value11">
    <span slot="prepend">身份证号<span class="redC"> *</span></span>
    </Input>
    <br/>
    <Input v-model="value11">
    <span slot="prepend">联系电话<span class="redC"> *</span></span>
    </Input>
    <br/>
    <Input v-model="value11">
    <span slot="prepend">联系地址<span class="redC"> *</span></span>
    </Input>
    <br/>
    <div>
      <span>团队选择：</span>
      <Button type="primary" size="small">选择团队</Button>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'reg',
  };
</script>

<style scoped>
  .redC{
    color: red;
  }
</style>
