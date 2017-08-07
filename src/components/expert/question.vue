<template xmlns:v-bind="">
  <Row>
    <Col :sm="24" :md="{ span: 12, offset: 6}">
    <h3>问题详情</h3>
    <div v-if="this.rout == 'userNew'">向刘德华医生提问，您当前拥有 <span class="red">5</span> 次提问机会</div>
    <br/>
    <Input v-model="value1" :maxlength=15 v-bind:disabled="isDisabled">
    <span slot="prepend">问题标题<span class="red"> *</span></span>
    </Input>
    <br/>
    <Input v-model="value2" v-bind:disabled="isDisabled" type="textarea" :autosize="{minRows: 5,maxRows: 5}" :maxlength=200 placeholder="请输入问题详细描述（200字以内）"></Input>
    <br/>
    <br/>
    <h3 v-if="this.rout == 'userAN' || this.rout == 'd'">专家回复</h3>
    <br/>
    <div v-if="this.rout == 'userAN'">XXXXXXXXXXXXXXXXXXXXXXXXXX</div>
    <Input v-if="this.rout == 'd'"  v-model="value3" type="textarea" :autosize="{minRows: 5,maxRows: 5}" :maxlength=200 placeholder="回复问题（200字以内）"></Input> <br/>
    <br/>
    <Button type="success" class="center" v-if="this.rout == 'userNew'">提问</Button>
    <Button type="success" class="center" v-if="this.rout == 'd'">回复</Button>
    </Col>
  </Row>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'questionNew',
    created() {
      this.rout = this.$route.query.r;
      if (this.rout === 'd' || this.rout === 'userAN') {
        this.isDisabled = true;
      }
    },
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        rout: '',
        isDisabled: false,
      };
    },
  };
</script>

<style scoped>
  .center{
    display: block;
    margin: 0 auto;
  }
  .red {
    color: #ed3f14;
  }
</style>
