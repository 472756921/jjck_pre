<template>
  <div>
    <div>问题</div>
    <div>回答</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'question',
    created() {
      this.qid = this.$route.params.id;
    },
    data(){
      return {
        qid: '',
      }
    },
  };
</script>

<style scoped>

</style>
