<template>
  <Row>
    <img src="http://iph.href.lu/100x100" class="center"/>
    <h2 class="center">专家登录</h2>
    <br/>
    <Col :sm="24" :md="{ span: 6, offset: 9 }">
     <Input size="large" v-model="account" placeholder="账号" ></Input>
    </Col>
    <Col :sm="24" :md="{ span: 6, offset: 9 }" style="margin-top: 1rem">
      <Input size="large" v-model="pwd" placeholder="密码" type="password"></Input>
    </Col>
    <Col :sm="24" :md="{ span: 6, offset: 9 }" style="margin-top: 2rem">
      <Button type="primary" class="center" style="margin-top: 1rem">登录</Button>
    </Col>
  </Row>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'login',
    data() {
      return {
        pwd: '',
        account: '',
      };
    },
  };
</script>

<style scoped>
  .center{
    display: block;
    margin: 0 auto;
    text-align: center;
  }
</style>
