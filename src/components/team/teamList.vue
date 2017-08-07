<template>
  <div>
    <Row>
      <Col span="24">
        <Card>
          <p slot="title">团队A</p>
          <span class="limi">建立时间：2017-12-12</span>
          <span class="limi" style="float:right">220人</span>
          <p>简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
          <br/>
          <Button type="success" size="small" long>选择</Button>
        </Card>
        <br/>
        <Card>
          <p slot="title">团队B</p>
          <span class="limi">建立时间：2017-12-12</span>
          <span class="limi" style="float:right">220人</span>
          <p>简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
          <br/>
          <Button type="success" size="small" long>选择</Button>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'TeamList',
    created() {

    },
    methods: {
      getList() {

      },
    },
  };
</script>

<style scoped>
  .limi{
    color: #2d8cf0;
  }
</style>
