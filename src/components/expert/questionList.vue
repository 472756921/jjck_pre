<template>
  <Row>
    <Col :sm="24" :md="{ span: 20, offset: 2 }">
      <div>刘德华医生，您好！</div>
      <div>
        <span>累计咨询量：<span class="red">2003</span>人/次 ， 累计回复量：<span class="green">2003</span>人/次</span>
        <br/>
        <span>本月咨询量：<span class="red">2003</span>人/次 ， 本月回复量：<span class="green">2003</span>人/次</span>
      </div>
      <br/>
      <h3>待回复问题列表</h3>
      <br/>
      <Table :columns="columns1" :data="data1"></Table>
      <br/>
      <div class="center">
        <Page class="center" :current="2" :total="50" simple></Page>
      </div>
    </Col>
  </Row>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'questionList',
    data() {
      return {
        columns1: [
          {
            title: '专家姓名',
            key: 'name',
          },
          {
            title: '问题',
            key: 'age',
          },
          {
            title: '时间',
            key: 'address',
          },
          {
            title: '操作',
            key: 'operation',
          },
        ],
        data1: [
          {
            name: '王小明',
            age: '北京市朝阳区芍药居',
            address: '2012-12-12',
            operation: '2012-12-12',
          },
          {
            name: '张小刚',
            age: '北京市朝阳区芍药居',
            address: '2015-11-24',
            operation: '<a href="#/questionAn?r=d">123</a>',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .red {
    color: #ed3f14;
    font-size: 1rem;
  }
  .green {
    color: #19be6b;
    font-size: 1rem;
  }
  .center{
    display: block;
    margin: 0 auto;
    width: 160px;
  }
</style>
