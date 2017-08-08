<template>
  <div>
    <div>您当前拥有 <span class="red">5</span> 次提问机会</div>
    <br/>
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserQusetionList } from '../../interface';

  export default {
    name: 'userQuestionList',
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.$ajax({
          method: 'get',
          url: getUserQusetionList(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          console.log(res.data);
        }).catch((error) => {
          console.log(error);
        });
      },
    },
    data() {
      return {
        userID: '',
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
        ],
        data1: [
          {
            name: '王小明',
            age: '北京市朝阳区芍药居',
            address: '2012-12-12',
          },
          {
            name: '张小刚',
            age: '北京市朝阳区芍药居',
            address: '2015-11-24',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .red {
    color: #ed3f14;
    font-size: 1.2rem;
  }
</style>
