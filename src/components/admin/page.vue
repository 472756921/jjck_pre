<template>
  <Page :page-size ='50' size="small" :current="pageNow" @on-change="changPage" class="block"></Page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    props: [ 'page' ],
    data () {
      return {
        totalPage: this.page.totalPage,
        pageNow: this.page.page,
      }
    },
    methods: {
      changPage(pageNow) {
        this.$emit('pageChange', pageNow);
      },
    },
    created(){
    },
  };
</script>

<style scoped>
  .block{
    margin-top: 10px;;
    text-align: center;
  }
</style>
