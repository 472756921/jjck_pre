<template>
  <div>
    <row >
      <Col span="8">
        <Input v-model="name">
        <span slot="prepend">团队名称</span>
        </Input>
        <br/>
        <Input v-model="personInCharge">
        <span slot="prepend">负责人</span>
        </Input>
        <br/>
        <Input v-model="introduction" type="textarea" placeholder="简介"></Input>
        <br/>
        <br/>
        <Button type="success" long @click="save">保存</Button>
      </Col>
    </row>
  </div>
</template>

<script type="text/ecmascript-6">
  import { updataTeam, newTeam } from '../../interface';

  export default {
    name: 'adminTeamListEdit',
    data() {
      return {
        ID: '',
        name: '',
        personInCharge: '',
        introduction: '',
        createDate: '',
        team: '',
      };
    },
    created() {
      this.team = this.$route.params.team;
      this.name = this.team.name;
      this.ID = this.team.id;
      this.personInCharge = this.team.personInCharge;
      this.introduction = this.team.introduction;
      this.createDate = this.team.createDate;
    },
    methods: {
      save() {
        let team = {
          id: this.ID,
          name: this.name,
          introduction: this.introduction,
          personInCharge: this.personInCharge,
        };

        let purl = updataTeam();
        if (this.team === undefined || this.team === null) {
          if (this.name === '' || this.introduction === '' || this.personInCharge === '') {
            this.error('请填写团队信息');
            return;
          }
          purl = newTeam();
          team = {
            name: this.name,
            introduction: this.introduction,
            personInCharge: this.personInCharge,
          };
        }

        this.$ajax({
          method: 'post',
          url: purl,
          dataType: 'JSON',
          data: team,
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 1) {
            this.success('操作成功');
          }
        }).catch(() => {
          this.error('服务器有点忙，请稍后再试');
        });
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
