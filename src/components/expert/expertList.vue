<template>
  <div>
    <div>您当前拥有 <span class="red">5</span> 次提问机会 <a href="#/userQuestionList" style="float: right">历史提问</a></div>
    <br/>
    <Row>
      <Col span="24">
      <Card>
        <p slot="title">刘德华</p>
        <Row>
          <Col span="8">
            <img src="../../assets/lizhenyu.jpg" width="75" class="center"/>
          </Col>
          <Col span="16">
            <div class="title">主治医师</div>
            <p>简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
          </Col>
        </Row>
        <br/>
        <Button type="success" size="small" long>提问</Button>
      </Card>
      <br/>
      <Card>
        <p slot="title">刘德华</p>
        <Row>
          <Col span="8">
          <img src="../../assets/lizhenyu.jpg" width="75" class="center"/>
          </Col>
          <Col span="16">
          <div class="title">科主任</div>
          <p>简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
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
  export default {
    name: 'expertList',
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
