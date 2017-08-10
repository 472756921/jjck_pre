<template>
  <div>
    <row >
      <Col span="8">
        <Input v-model="number">
        <span slot="prepend">账号</span>
        </Input>
        <br/>
        <Input v-model="openName">
        <span slot="prepend">开户行</span>
        </Input>
      <br/>
        <Input v-model="openUserName">
        <span slot="prepend">户主</span>
        </Input>
        <br/>
        <br/>
        <Button type="success" long @click="save">保存</Button>
      </Col>
    </row>
  </div>
</template>

<script type="text/ecmascript-6">
  import { saveBank } from '../../interface';

  export default {
    name: 'bankNew',
    data() {
      return {
        number: '',
        openName: '',
        openUserName: '',
      };
    },
    created() {
    },
    methods: {
      save() {
        if (this.number === '' || this.openName === '' || this.openUserName === '') {
          this.error('请输入管理员信息');
        } else {
          const admin = {
            number: this.number,
            openName: this.openName,
            openUserName: this.openUserName,
          };

          this.$ajax({
            method: 'post',
            url: saveBank(),
            dataType: 'JSON',
            data: admin,
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            if (res.data === 605) {
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
