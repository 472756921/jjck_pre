<template>
  <Row>
    <img :src="img" class="center" width="200px"/>
    <br/>
    <h2 class="center">管理员登录</h2>
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
  import { adminLogin } from '../../interface';
  import img from '../../assets/logo.jpg';

  export default {
    name: 'adminLogin',
    data() {
      return {
        pwd: '',
        account: '',
        img: img,
      };
    },
    methods: {
      login() {
        if (this.account === '' || this.pwd === '') {
          this.error('请输入账号和密码');
        } else {
          this.$ajax({
            method: 'post',
            url: adminLogin(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
            data: { account: this.account, pwd: this.pwd },
          }).then((res) => {
            if (res.data.message === '用户不存在' || res.data.message === '密码错误') {
              this.error('账号或密码错误');
            }
            if (res.data.message === '登录成功') {
              sessionStorage.setItem('admin', res.data);
              this.$router.push({ name: 'adminData' });
            }
          }).catch(() => {
            this.error('糟糕，服务器不见了');
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
