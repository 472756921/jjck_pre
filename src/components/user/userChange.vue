<template>
  <div>
    <Input v-model="userName" :maxlength=5 disabled>
      <span slot="prepend">姓名<span class="redC"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    </Input>
    <br/>
    <Input v-model="idnumber" :maxlength=18 disabled>
    <span slot="prepend">身份证号<span class="redC"> *</span></span>
    </Input>
    <br/>
    <Input v-model="sex" :maxlength=18 disabled>
    <span slot="prepend">性别<span class="redC">  *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    </Input>
    <br/>
    <Input v-model="phone" :maxlength=15>
    <span slot="prepend">联系电话<span class="redC"> *</span></span>
    </Input>
    <br/>
    <Input v-model="address">
    <span slot="prepend">联系地址<span class="redC"> *</span></span>
    </Input>
    <br/>
    <br/>
    <br/>
    <Button type="success" class="center" @click="change">修改</Button>

  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserInfo, changeUserInfo } from '../../interface';
  import { getSex } from '../ut/other';
  import { mackINFO } from '../ut/returnINFO';

  export default {
    name: 'userChange',
    data() {
      return {
        userName: '',
        idnumber: '',
        sex: '',
        phone: '',
        address: '',
        userID: '',
        single: false,
      };
    },
    methods: {
      getUserInfo() {
        this.$ajax({
          method: 'post',
          url: getUserInfo(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.userName = res.data.userName;
          this.idnumber = res.data.idnumber;
          this.phone = res.data.phone;
          this.address = res.data.address;
          this.sex = getSex(res.data.sex);
          this.userID = res.data.id;
        }).catch(() => {
          this.error('服务器错误，请稍后再试');
        });
      },
      change() {
        const userDTO = {
          userID: this.userID.toString(),
          phone: this.phone,
          address: this.address,
        };
        this.$ajax({
          method: 'post',
          url: changeUserInfo(),
          dataType: 'JSON',
          data: userDTO,
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          const e = 'error';
          if (res.data === 1205) {
            this.success(mackINFO(e + res.data));
          } else {
            this.error(mackINFO(e + res.data));
          }
        }).catch(() => {
          this.error('服务器错误，请稍后再试');
        });
      },
      error(data) {
        this.$Message.error(data);
      },
      success(data) {
        this.$Message.success(data);
      },
    },
    created() {
      this.getUserInfo();
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
