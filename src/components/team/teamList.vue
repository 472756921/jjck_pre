<template>
  <div>
    <Row>
      <Col span="24">
        <Card v-for="(item, index) in list" style="margin-top: 1rem" :class="chooes==index?'co':''">
          <p slot="title">{{item.name}}</p>
          <span class="limi">建立时间：{{item.createDate}}</span>
          <span class="limi" style="float:right">{{item.count}}人</span>
          <p>{{item.introduction}}</p>
          <br/>
          <Button type="success" long @click="openModel(item, index)">选择</Button>
        </Card>
      </Col>
    </Row>

    <Modal v-model="modal" width="360" @on-ok="getin">
      <p slot="header" style="text-align:center">
        <span>确认加入</span>
      </p>
      <div style="text-align:center">
        <p>加入该团队后将不能加入其它团队。</p>
        <p>是否继续加入？</p>
      </div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getTeamList } from '../../interface';

  export default {
    name: 'TeamList',
    data() {
      return {
        list: '',
        chooes: '',
        modal: false,
        tempID: '',
        teamName: '',
        index: '',
      };
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.$http.get(getTeamList()).then((res) => {
          this.list = res.body;
        }).catch((error) => {
          console.log(error);
        });
      },
      openModel(item, index) {
        this.teamID = item.id;
        this.teamName = item.name;
        this.modal = true;
        this.index = index;
      },
      getin() {
        this.chooes = this.index;
        sessionStorage.setItem('UCTID', JSON.stringify({ teamID: this.teamID, teamName: this.teamName }));
      },
    },
  };
</script>

<style scoped>
  .limi{
    color: #2d8cf0;
  }
  .co{
    background: #e9eaec;
    border: 1px solid #2d8cf0;
  }
</style>
