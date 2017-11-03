<template>
  <div>
    <div>标题：{{data.titlte}}</div>
    <div>时间：{{data.createDate}}</div>
    <span>描述：</span>
    <br/>
    <br/>
    <br/>
    <div>回复时间：{{data.answerDate}}</div>
    <span>回复类容：</span>
    <pre class="bK">{{data.answer}}</pre>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getQuestionsDetail} from '../../interface';
  export default {
    name: 'question',
    created() {
      this.$ajax({
        method: 'get',
        url: getQuestionsDetail() + '?ID='+ this.$route.params.id,
        dataType: 'JSON',
        contentType: 'application/json;charset=UTF-8',
      }).then((res) => {
        this.data = res.data;
      }).catch(() => {
        this.error('服务器有点忙，请稍后再试');
      });
    },
    data(){
      return {
        qid: '',
        data: '',
      }
    },
  };
</script>

<style scoped>
  .bK{
    background: #eee;
    padding: 4px 10px;
  }
</style>
