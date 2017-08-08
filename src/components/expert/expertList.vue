<template>
  <div>
    <div>您当前拥有 <span class="red">{{this.time}}</span> 次提问机会 <a href="#/userQuestionList" style="float: right">历史提问</a></div>
    <br/>
    <Row>
      <Col span="24">
      <Card v-for="(item, index) in list.expertList" style="margin-top: 1rem">
        <p slot="title">{{item.name}}</p>
        <Row>
          <Col span="8">
          <img :src="'http://localhost:8080'+item.headimg" width="75" class="center"/>
          </Col>
          <Col span="16">
          <div class="title">{{item.position}}</div>
          <p>{{item.introduction}}</p>
          </Col>
        </Row>
        <br/>
        <Button type="success" size="small" long>提问</Button>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getExpertList } from '../../interface';
//  import { mackINFO } from '../ut/returnINFO';

  export default {
    name: 'expertList',
    data() {
      return {
        list: '',
        time: '',
      };
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.$ajax({
          method: 'get',
          url: getExpertList(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.list = res.data;
          this.time = res.data.userQuestionTime;
        }).catch((error) => {
          console.log(error);
        });
      },
    },
  };
</script>

<style scoped>
  .red {
    color: #ed3f14;
  }
  .title{
    color: #2d8cf0;
  }
</style>
