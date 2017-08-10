<template>
  <div>
    <Row :gutter="8">
      <Col span="6" v-for="(item, index) in list"  style="margin-top: 1rem">
        <Card>
          <p slot="title">{{item.name}}</p>
          <span class="limi">建立时间：{{item.createDate}}</span>
          <span class="limi" style="float:right">{{item.count}}人</span>
          <p>{{item.introduction}}</p>
          <br/>
          <Button type="success" long @click="edit(item)">编辑</Button>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getTeamList } from '../../interface';

  export default {
    name: 'adminTeamList',
    data() {
      return {
        list: '',
        modal: false,
        tempID: '',
        teamName: '',
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
      edit(item) {
        this.$router.push({ name: 'adminTeamListEdit', params: { type: 'edit', team: item } });
      },
    },
  };
</script>

<style scoped>
  .limi{
    color: #2d8cf0;
  }
</style>
