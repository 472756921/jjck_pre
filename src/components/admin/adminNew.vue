<template>
  <div>
    <row >
      <Col span="8">
        <Input v-model="account">
        <span slot="prepend">账号</span>
        </Input>
        <br/>
        <Input v-model="pwd">
        <span slot="prepend">密码</span>
        </Input>
        <br/>
        <Select v-model="type" >
          <Option :value="1" :key="123">超级管理员</Option>
          <Option :value="2" :key="123">管理员</Option>
          <Option :value="3" :key="123" >客服</Option>
        </Select>
        <br/>
        <br/>
        <Button type="success" long @click="save">保存</Button>
      </Col>
    </row>
  </div>
</template>

<script type="text/ecmascript-6">
  import { registerAdmin } from '../../interface';

  export default {
    name: 'adminNew',
    data() {
      return {
        account: '',
        pwd: '',
        type: 3,
      };
    },
    created() {
    },
    methods: {
      save() {
        if (this.account === '' || this.pwd === '') {
          this.error('请输入管理员信息');
        } else {
          const admin = {
            account: this.account,
            pwd: this.pwd,
            type: this.type,
          };

          this.$ajax({
            method: 'post',
            url: registerAdmin(),
            dataType: 'JSON',
            data: admin,
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (res.data === 602) {
              this.error('该账号已经存在');
            }
            if (res.data === 1) {
              this.success('添加成功');
            }
          }).catch(() => {
            this.error('服务器有点忙，请稍后再试');
          });
        }
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
  .limi{
    color: #2d8cf0;
  }
</style>
