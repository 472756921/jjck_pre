<template>
  <div>
    <div>您当前拥有 <span class="red">{{this.time}}</span> 次提问机会 <a href="#/userQuestionList" style="float: right">历史提问</a></div>
    <br/>
    <Row>
      <Col span="24">
      <Card v-for="(item, index) in list.expertList" style="margin-bottom: 1rem">
        <p slot="title">{{item.name}}</p>
        <Row>
          <Col span="8">
          <img :src="item.headimg" width="75" class="center"/>
          </Col>
          <Col span="16">
          <div class="title">{{item.position}}</div>
          <p>{{item.introduction}}</p>
          </Col>
        </Row>
        <br/>
        <Button type="success" size="small" @click="questionNew(item.id)" long>提问</Button>
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
      questionNew(d) {
        if (this.time <= 0) {
          this.error('对不起，您的咨询次数已经用尽');
        } else {
          this.$router.push({ name: 'questionNew', params: { r: 'userNew', docID: d } });
        }
      },
      getList() {
        this.$ajax({
          method: 'get',
          url: getExpertList(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.list = res.data;
          this.time = res.data.userQuestionTime;
          sessionStorage.setItem('userQuestionTime', this.time);
        }).catch((error) => {
          console.log(error);
        });
      },
      error(data) {
        this.$Message.error(data);
      },
    },
  };
</script>

<style scoped>
  .red {
    color: #ed3f14;
    font-size: 1.2rem;
  }
  .title{
    color: #2d8cf0;
  }
</style>
