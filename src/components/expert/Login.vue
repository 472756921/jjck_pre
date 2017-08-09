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
      <Button type="primary" class="center" style="margin-top: 1rem" @click="login">登录</Button>
    </Col>
  </Row>
</template>

<script type="text/ecmascript-6">
  import { expertLogin } from '../../interface';

  export default {
    name: 'login',
    data() {
      return {
        pwd: '',
        account: '',
      };
    },
    methods: {
      login() {
        if (this.account === '' || this.pwd === '') {
          this.error('请输入账号和密码');
        } else {
          this.$ajax({
            method: 'post',
            url: expertLogin(),
            dataType: 'JSON',
            data: { account: this.account, pwd: this.account },
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (res.data === '') {
              this.error('账号或密码错误');
            } else {
              sessionStorage.setItem('doc', JSON.stringify(res.data));
              this.$router.push({ name: 'questionList' });
            }
          }).catch((error) => {
            console.log(error);
          });
        }
      },
      error(data) {
        this.$Message.error(data);
      },
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
