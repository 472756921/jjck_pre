<template>
  <div>
    <Row class="expand-row">
      <Col span="24">
      <span class="expand-key">详情：</span>
      <span class="expand-value">{{ row.question }}</span>
      </Col>
      <Col span="24">
      <span class="expand-key">专家意见：</span>
      <span class="expand-value" v-if="row.answer==null">专家暂未回复</span>
      <span class="expand-value" v-if="row.answer!=''">{{ row.answer }}</span>
      </Col>
      <Col span="24">
      <span class="expand-key">时间：</span>
      <span class="expand-value">{{ row.answerDate }}</span>
      </Col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'expandTable',
      props: {
        row: Object,
      },
    };
</script>

<style scoped>
  .expand-row{
  }
</style>
