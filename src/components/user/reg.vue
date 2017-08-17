<template>
  <div>
    <span class="warning"><span class="ttt">姓名</span> 和 <span class="ttt">身份证号码</span> 不可修改，请谨慎填写</span>
    <br/>
    <br/>
    <Input v-model="userName" :maxlength=5>
      <span slot="prepend">姓名<span class="redC"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    </Input>
    <br/>
    <Input v-model="numberID" :maxlength=18>
    <span slot="prepend">身份证号<span class="redC"> *</span></span>
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
    <div>
      <span>团队选择：</span>
      <TeamList />
    </div>
    <br/>
    <div id="aaa" >
      <Checkbox v-model="single" class="ttt"><a href="#/agreement">我已阅读并同意《重庆久佳健康协议》</a></Checkbox>
    </div>
    <br/>
    <div class="center warning">{{warning}}</div>
    <br/>
    <Button type="success" class="center" @click="reg" >注册</Button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { userReg } from '../../interface';
  import IDCheck from '../ut/IDNumberCheck';
  import { mackINFO } from '../ut/returnINFO';
  import TeamList from '../team/teamList';

  const snabbt = require('snabbt.js');


  export default {
    name: 'reg',
    components: { TeamList },
    data() {
      return {
        userName: '',
        numberID: '',
        phone: '',
        address: '',
        single: false,
        teamName: '',
        teamID: '',
        warning: '',
      };
    },
    methods: {
      reg() {
        const team = sessionStorage.getItem('UCTID');
        if (team !== '' && team !== null) {
          const teams = JSON.parse(team);
          this.teamID = teams.teamID;
        } else {
          this.error('请选择团队');
        }
        sessionStorage.removeItem('nweUser');
        if (this.userName === '' || this.numberID === '' || this.phone === '' || this.address === '') {
          this.error('请完整填写注册信息');
          return;
        }
        const IDNCheck = IDCheck(this.numberID);
        if (!IDNCheck.passes) {
          this.error(IDNCheck.tips);
          return;
        }
        if (this.phone.length < 11) {
          this.error('请完整填写正确的手机号');
          return;
        }
        if (!this.single) {
          this.zd(document.getElementById('aaa'));
        } else {
          const userDTO = {
            userName: this.userName,
            numberID: this.numberID,
            phone: this.phone,
            address: this.address,
            teamID: this.teamID,
          };
          this.$ajax({
            method: 'post',
            url: userReg(),
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
            data: userDTO,
          }).then((res) => {
            const e = 'error';
            if (res.data === 1203) {
              this.success(mackINFO(e + res.data));
            } else {
              this.error(mackINFO(e + res.data));
            }
          }).catch((error) => {
            console.log(error);
          });
        }
      },
      zd(obj) {
        snabbt(obj, 'attention', {
          position: [50, 0, 0],
          springConstant: 2.4,
          springDeceleration: 0.9,
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
      const newUser = sessionStorage.getItem('nweUser');
      if (newUser !== '' && newUser !== null) {
        const newUsers = JSON.parse(newUser);
        this.userName = newUsers.userName;
        this.numberID = newUsers.numberID;
        this.phone = newUsers.phone;
        this.address = newUsers.address;
      }
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
  .warning{
    color: #ff9900;
  }
  .center{
    display: block;
    margin: 0 auto;
    text-align: center;
  }
</style>
